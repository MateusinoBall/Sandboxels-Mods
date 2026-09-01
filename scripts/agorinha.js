#!/usr/bin/env node
/**
 * Agorinha - PR GIF & mover de arquivos não-.js
 *
 * Requisitos (package.json):
 * - @octokit/rest
 * - jimp
 * - gifencoder
 *
 * Workflow: rodar em GitHub Actions on: [pull_request]
 *
 * Observações:
 * - O script lista arquivos do PR, move os que NÃO terminam em .js para ./extras/
 * - Comita & push as mudanças (usa git + GITHUB_TOKEN)
 * - Gera um GIF simples (3 frames) e salva em .github/workflows/pr-gifs/
 * - Comenta no PR com mensagem e referência ao GIF salvo
 */

const fs = require('fs');
const path = require('path');
const child = require('child_process');
const { Octokit } = require('@octokit/rest');
const Jimp = require('jimp');
const GIFEncoder = require('gifencoder');

async function main() {
  try {
    const githubEventPath = process.env.GITHUB_EVENT_PATH;
    const githubToken = process.env.GITHUB_TOKEN;
    if (!githubEventPath || !fs.existsSync(githubEventPath)) {
      console.error('GITHUB_EVENT_PATH não encontrado. Execute via GitHub Actions.');
      process.exit(1);
    }
    if (!githubToken) {
      console.error('GITHUB_TOKEN não definido. Workflow precisa fornecer GITHUB_TOKEN.');
      process.exit(1);
    }

    const event = JSON.parse(fs.readFileSync(githubEventPath, 'utf8'));
    const pr = event.pull_request;
    if (!pr) {
      console.error('Evento não é pull_request.');
      process.exit(1);
    }

    const owner = pr.base.repo.owner.login;
    const repo = pr.base.repo.name;
    const prNumber = pr.number;
    const author = pr.user.login;
    const title = pr.title || 'No title';

    const octokit = new Octokit({ auth: githubToken });

    // 1) Listar arquivos do PR
    const filesResp = await octokit.pulls.listFiles({
      owner,
      repo,
      pull_number: prNumber,
    });
    const files = filesResp.data || [];

    // 2) Mover arquivos que NÃO terminam em .js para ./extras/
    let movedAny = false;
    const extrasDir = path.join(process.cwd(), 'extras');
    if (!fs.existsSync(extrasDir)) fs.mkdirSync(extrasDir, { recursive: true });

    for (const f of files) {
      // ignorar remoções
      if (f.status === 'removed') continue;

      const filename = f.filename; // e.g. "assets/image.png" ou "readme.txt"
      if (filename.toLowerCase().endsWith('.js')) continue;

      const srcPath = path.join(process.cwd(), filename);
      if (!fs.existsSync(srcPath)) {
        // pode estar numa pasta diferente do checkout; pular
        console.warn(`Arquivo não encontrado no workspace: ${srcPath} — pulando.`);
        continue;
      }

      // preservar parte do caminho substituindo barras por __ para evitar subpastas complexas
      const safeName = filename.replace(/[\/\\]/g, '__');
      const destPath = path.join(extrasDir, safeName);

      // garantir que diretório destino exista
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

      fs.renameSync(srcPath, destPath);
      console.log(`Movido: ${filename} -> ${path.relative(process.cwd(), destPath)}`);
      movedAny = true;
    }

    // 3) Se moveu algo, commitar e push
    if (movedAny) {
      // git config
      child.execSync('git config user.name "github-actions[bot]"');
      child.execSync('git config user.email "41898282+github-actions[bot]@users.noreply.github.com"');

      try {
        child.execSync('git add -A extras', { stdio: 'inherit' });
        child.execSync(`git commit -m "chore(agorinha): move non-js files to extras/"`, { stdio: 'inherit' });
        // push to current HEAD (branch do PR)
        child.execSync('git push', { stdio: 'inherit' });
        console.log('✅ Arquivos extras comitados e push realizados.');
      } catch (err) {
        console.warn('Nada a commitar ou erro no commit/push:', err.message);
      }
    } else {
      console.log('Nenhum arquivo não-.js encontrado para mover.');
    }

    // 4) Gerar GIF simples (3 frames) — salva em .github/workflows/pr-gifs/
    const outDir = path.join(process.cwd(), '.github', 'workflows', 'pr-gifs');
    fs.mkdirSync(outDir, { recursive: true });

    const width = 600;
    const height = 200;
    const gifPath = path.join(outDir, `agorinha_pr_${prNumber}_${author}.gif`);

    // Criar frames com Jimp
    const frames = [];
    const fonts = await Promise.all([
      Jimp.loadFont(Jimp.FONT_SANS_32_WHITE),
      Jimp.loadFont(Jimp.FONT_SANS_16_WHITE),
    ]);

    const lines = [
      `Bem-vindo(a), @${author}! 🎉`,
      `PR #${prNumber} — ${title}`,
      `Obrigado pela contribuição! 💜`
    ];

    for (let i = 0; i < lines.length; i++) {
      const img = new Jimp(width, height, '#222831'); // fundo escuro
      // desenhar texto centralizado
      const font = fonts[0];
      const subfont = fonts[1];
      img.print(font, 20, 40, {
        text: lines[i],
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
      }, width - 40, height - 80);
      // rodapé com autor/tempo
      img.print(subfont, 20, height - 40, `@${author} • ${new Date().toLocaleDateString()}`);
      frames.push(img);
    }

    // Encoder
    const encoder = new GIFEncoder(width, height);
    const stream = fs.createWriteStream(gifPath);
    encoder.createReadStream().pipe(stream);
    encoder.start();
    encoder.setRepeat(0);
    encoder.setDelay(700);
    encoder.setQuality(10);

    // Adiciona frames (Jimp bitmap é RGBA)
    for (const img of frames) {
      const rgba = img.bitmap.data; // Buffer (RGBA)
      // gifencoder espera um buffer em RGBA — esta chamada funciona na maioria das versões
      encoder.addFrame(rgba);
    }
    encoder.finish();

    // esperar gravação terminar
    await new Promise((resolve) => stream.on('finish', resolve));
    console.log(`✅ GIF gerado: ${gifPath}`);

    // 5) Comitar GIF (se não existir) e push
    try {
      child.execSync('git add -A .github/workflows/pr-gifs', { stdio: 'inherit' });
      child.execSync(`git commit -m "chore(agorinha): add PR GIF for #${prNumber} (${author})" || true`, { stdio: 'inherit' });
      child.execSync('git push || true', { stdio: 'inherit' });
    } catch (err) {
      console.warn('Erro ao commitar/push do GIF (pode já ter sido comitado):', err.message);
    }

    // 6) Criar comentário no PR com badge e link para o GIF no branch do PR (head.ref)
    const headRef = pr.head.ref; // nome da branch
    // URL bruta do arquivo gerado no branch do PR
    const gifUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${headRef}/.github/workflows/pr-gifs/${path.basename(gifPath)}`;

    const commentBody = [
      `## 🎁 Agorinha diz: Obrigado, @${author}!`,
      ``,
      `✨ Seu PR #${prNumber} recebeu um GIF de agradecimento automático.`,
      ``,
      `![Agorinha GIF](${gifUrl})`,
      ``,
      `---`,
      `Se seus arquivos não-JS foram movidos, você os encontrará na pasta \`extras/\` neste mesmo branch.`,
      ``,
      `*– Agorinha*`
    ].join('\n');

    await octokit.issues.createComment({
      owner,
      repo,
      issue_number: prNumber,
      body: commentBody,
    });

    console.log('✅ Comentário postado no PR com link para o GIF.');

  } catch (err) {
    console.error('Erro no Agorinha:', err);
    process.exit(1);
  }
}

main();
