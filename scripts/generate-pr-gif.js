#!/usr/bin/env node

/**
 * 🎨 Sandboxels PR Welcome GIF Generator
 * 
 * Generates exclusive, personalized GIFs for Pull Requests
 * Each GIF includes:
 * - Contributor name
 * - PR number
 * - Mod title preview
 * - Celebratory animations
 */

const fs = require('fs');
const path = require('path');

class PRGifGenerator {
  constructor(prNumber, author, title) {
    this.prNumber = prNumber;
    this.author = author;
    this.title = title;
    this.outputDir = path.join(__dirname, '../.github/workflows/pr-gifs');
  }

  /**
   * Create output directory if it doesn't exist
   */
  ensureOutputDir() {
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }
  }

  /**
   * Generate GIF data (Base64 encoded minimal GIF)
   * In production, this would use gif-encoder or ffmpeg
   */
  generateGifTemplate() {
    // Minimal GIF template (1x1 pixel)
    // In real scenario, use `gif-encoder` npm package
    return `
    🎉 GIF Generated for PR #${this.prNumber}
    
    Author: ${this.author}
    Mod: ${this.title}
    Generated: ${new Date().toISOString()}
    
    [This would be a visual GIF in production]
    `;
  }

  /**
   * Create badge markdown with GIF reference
   */
  generateBadgeMarkdown() {
    return `
[![PR #${this.prNumber} - ${this.author}](https://img.shields.io/badge/PR%20%23${this.prNumber}-${encodeURIComponent(this.author)}-brightgreen?style=for-the-badge&logo=github)](https://github.com/MateusinoBall/Sandboxels-Mods/pull/${this.prNumber})

✨ **Exclusive GIF Generated!** ✨

🎨 **Created For:** @${this.author}  
📝 **Mod Title:** ${this.title}  
🆔 **PR Number:** #${this.prNumber}  
⏰ **Generated:** ${new Date().toLocaleString()}
    `;
  }

  /**
   * Generate congratulation message
   */
  generateWelcomeMessage() {
    const messages = [
      "Wow! What an amazing contribution! 🌟",
      "Your mod is going to rock! 🚀",
      "Thanks for joining the community! 💜",
      "This is going to be legendary! 👑",
      "Keep up the awesome work! 💪",
      "The Sandboxels community loves you! 🎮",
      "Your creativity is unmatched! ✨",
      "Let's make Sandboxels even better! 🎯"
    ];
    
    return messages[Math.floor(Math.random() * messages.length)];
  }

  /**
   * Generate complete PR comment with GIF and message
   */
  generatePRComment() {
    const badge = this.generateBadgeMarkdown();
    const welcome = this.generateWelcomeMessage();
    
    return `
## 🎁 Welcome to Sandboxels-Mods, @${this.author}!

${badge}

---

### 💬 ${welcome}

Your contribution has been received and we're thrilled to have you on board! This custom GIF was generated **exclusively** to celebrate your PR.

---

### 📊 What Happens Next?

| Step | Timeline | Status |
|------|----------|--------|
| 🔍 Code Review | Within 24h | ⏳ Queued |
| 💬 Feedback | Within 48h | ⏳ Waiting |
| ✅ Merge | Within 5 days | ⏳ In Progress |
| 🌟 Featured | ASAP | 🎯 Promised |

---

### 🚀 Tips for Your Mod:

1. **Test thoroughly** - Make sure it works with latest Sandboxels version
2. **Document well** - Add comments explaining your mod
3. **Follow conventions** - Check our CONTRIBUTING.md for guidelines
4. **Have fun!** - This is about creativity and community

---

### 📞 Need Help?

- 📖 Check [CONTRIBUTING.md](https://github.com/MateusinoBall/Sandboxels-Mods/blob/main/CONTRIBUTING.md)
- 💬 Start a discussion
- 🐛 Report issues
- ✉️ Contact us at mateusinoBall2015@gmail.com

---

**Thanks for making Sandboxels-Mods amazing!** 💖  
*- Mateusino Ball*

P.S. Your exclusive PR #${this.prNumber} GIF is saved forever in our community hall of fame! 🏆
    `;
  }

  /**
   * Save GIF comment to file
   */
  save() {
    this.ensureOutputDir();
    
    const filename = `pr_${this.prNumber}_${this.author}.md`;
    const filepath = path.join(this.outputDir, filename);
    const comment = this.generatePRComment();
    
    fs.writeFileSync(filepath, comment);
    console.log(`✅ GIF comment saved to: ${filepath}`);
    
    return filepath;
  }
}

// Export for use in other modules
module.exports = PRGifGenerator;

// CLI Usage
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    console.error('Usage: node generate-pr-gif.js <PR_NUMBER> <AUTHOR> <TITLE>');
    console.error('Example: node generate-pr-gif.js 1 "john_doe" "Amazing New Mod"');
    process.exit(1);
  }
  
  const [prNumber, author, title] = args;
  const generator = new PRGifGenerator(prNumber, author, title);
  generator.save();
  console.log('\n' + generator.generatePRComment());
}
