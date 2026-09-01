# 🤝 Contributing to Sandboxels-Mods

Thank you for your interest in contributing! This guide will help you understand how to contribute to the Sandboxels-Mods project and make the process smooth for everyone. 🎉

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Creating a Mod](#creating-a-mod)
- [Submitting Changes](#submitting-changes)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Commit Messages](#commit-messages)
- [Documentation](#documentation)
- [Getting Help](#getting-help)

---

## 📜 Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please read and follow our principles:

### Our Standards

✅ **Be Respectful** - Treat all community members with respect  
✅ **Be Inclusive** - Welcome people of all backgrounds and skill levels  
✅ **Be Constructive** - Provide helpful feedback and suggestions  
✅ **Be Honest** - Give credit where it's due  
✅ **Be Patient** - Remember everyone has different experience levels  

### Unacceptable Behavior

❌ Harassment, discrimination, or bullying  
❌ Insults or disrespectful comments  
❌ Spam or self-promotion  
❌ Posting private information  
❌ Any form of abuse or toxicity  

### Reporting Issues

If you encounter any violations, please report them to:
📧 **Email:** mateusinoBall2015@gmail.com  
🐛 **GitHub Issue:** [Report Conduct Issue](https://github.com/MateusinoBall/Sandboxels-Mods/issues)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have:

- ✅ A GitHub account ([Create one free](https://github.com/signup))
- ✅ Git installed on your computer ([Download Git](https://git-scm.com/downloads))
- ✅ A text editor or IDE (VS Code, Sublime, etc.)
- ✅ JavaScript knowledge (basic understanding)
- ✅ Access to [Sandboxels game](https://neal.fun/sandboxels)

### Fork & Clone

1. **Fork the repository** - Click the "Fork" button on GitHub
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/Sandboxels-Mods.git
   cd Sandboxels-Mods
   ```
3. **Add upstream remote** (to sync with main repo):
   ```bash
   git remote add upstream https://github.com/MateusinoBall/Sandboxels-Mods.git
   ```

---

## 💻 Development Setup

### File Structure

```
your-fork/
├── mods/                 # Where your mods go
├── scripts/              # Utility scripts
├── docs/                 # Documentation
└── README.md
```

### Setting Up Your Environment

```bash
# Navigate to the project directory
cd Sandboxels-Mods

# Create a new branch for your work
git checkout -b feature/your-mod-name

# Make your changes in the mods/ folder
# Test your code (see Testing section)
```

---

## 🎮 Creating a Mod

### Basic Mod Structure

```javascript
// mods/my-awesome-mod.js

/**
 * @name My Awesome Mod
 * @author Your Name
 * @description A brief description of what your mod does
 * @version 1.0.0
 */

// Your mod code here
class MyAwesomeMod {
  constructor() {
    this.name = "My Awesome Mod";
    this.version = "1.0.0";
    this.elements = [];
  }

  // Initialize your mod
  init() {
    // Register elements, behaviors, etc.
  }

  // Add your mod's functionality
  registerElements() {
    // Define custom elements
  }
}

// Export your mod
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MyAwesomeMod;
}
```

### Naming Conventions

- **File names:** Use kebab-case (e.g., `my-mod.js`, `cool-elements.js`)
- **Classes:** Use PascalCase (e.g., `MyAwesomeMod`, `CoolElementPack`)
- **Functions:** Use camelCase (e.g., `registerElement`, `initMod`)
- **Constants:** Use UPPER_SNAKE_CASE (e.g., `DEFAULT_SIZE`, `MAX_ELEMENTS`)

### Best Practices

✅ **Keep it simple** - Focus on one feature per mod  
✅ **Comment your code** - Explain what your code does  
✅ **Test thoroughly** - Ensure your mod works as expected  
✅ **Avoid conflicts** - Check existing mods to avoid duplicates  
✅ **Document usage** - Include examples and instructions  
✅ **Handle errors** - Add error handling for edge cases  
✅ **Optimize performance** - Keep your code efficient  

---

## 📝 Submitting Changes

### Before You Submit

1. **Sync with main branch:**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Test your changes:**
   - Load your mod in Sandboxels
   - Test all features and edge cases
   - Check for console errors
   - Verify no conflicts with other mods

3. **Update documentation:**
   - Add comments to your code
   - Update or create relevant docs
   - Add usage examples

4. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat: Add cool elements pack"
   git push origin feature/your-mod-name
   ```

---

## 🔄 Pull Request Process

### Creating Your PR

1. **Go to GitHub** and navigate to your fork
2. **Click "Compare & Pull Request"**
3. **Fill in the PR template** with:
   - Clear title (e.g., "Add: My Awesome Mod")
   - Detailed description of changes
   - Any relevant issues (use `Fixes #123`)
   - Screenshots/GIFs if applicable

### What Happens Next

✅ **Code Review** - We'll review your code  
✅ **Feedback** - We may request changes  
✅ **Approval** - Once approved, your PR will be merged  
✅ **Celebration** - 🎁 **You'll get your exclusive GIF!**  
✅ **Recognition** - You'll be added to our contributors list  

### Merge Timeline

⏱️ **Target:** Merged within 5 days  
⏱️ **Typical:** 1-3 days for review  
⏱️ **Updates:** Usually 1-2 review rounds  

---

## 💯 Coding Standards

### JavaScript Style Guide

```javascript
// ✅ GOOD: Clear, readable code
function initializeMod() {
  const elements = [];
  
  // Register elements
  elements.forEach(element => {
    registerElement(element);
  });
  
  return elements;
}
```

### Formatting Rules

- **Indentation:** 2 spaces (not tabs)
- **Line length:** Max 100 characters
- **Semicolons:** Always use them
- **Quotes:** Use double quotes (`"`)
- **Comments:** Use `//` for single-line, `/** */` for multi-line

---

## 🧪 Testing

### Before Submitting Your PR

1. **Test in Sandboxels:**
   - Check all features
   - Test edge cases
   - Verify no console errors

2. **Check for conflicts:**
   - Load multiple mods together
   - Check for naming conflicts
   - Verify compatibility

---

## 📝 Commit Messages

### Format

```
<type>: <subject>
```

### Types

- `feat:` - A new feature (your mod)
- `fix:` - A bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `perf:` - Performance improvements

### Examples

```bash
git commit -m "feat: Add crystalline ice element"
git commit -m "fix: Resolve temperature calculation bug"
git commit -m "docs: Update mod creation guide"
```

---

## 🆘 Getting Help

### Resources

📖 **Documentation:** [See docs/ folder](../docs/)  
💬 **Discussions:** [GitHub Discussions](https://github.com/MateusinoBall/Sandboxels-Mods/discussions)  
🐛 **Issues:** [GitHub Issues](https://github.com/MateusinoBall/Sandboxels-Mods/issues)  
📧 **Email:** mateusinoBall2015@gmail.com  

---

## 🎊 After Your PR is Merged

1. ✅ Your code goes live
2. 🎁 You get an exclusive celebration GIF
3. 👤 You're added to our contributors list
4. 📢 We celebrate your contribution
5. 🏆 You become part of our history!

---

## 📋 Final Checklist

Before submitting your PR:

- [ ] I have forked and cloned the repository
- [ ] I've created a descriptive branch name
- [ ] My code follows the style guidelines
- [ ] I've added/updated comments
- [ ] I've tested my changes thoroughly
- [ ] My commit messages are clear
- [ ] I've synced with the main branch
- [ ] I'm ready to celebrate! 🎁

---

<div align="center">

**Ready to contribute?** 👉 [Fork the repository now!](https://github.com/MateusinoBall/Sandboxels-Mods/fork)

**Questions?** 💬 [Ask in Discussions](https://github.com/MateusinoBall/Sandboxels-Mods/discussions)

**Happy coding!** 💻✨

</div>