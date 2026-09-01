# 🎓 MOD CREATION TUTORIAL

Learn how to create your first Sandboxels mod in 10 minutes!

---

## 📋 What You'll Learn

By the end of this tutorial, you'll be able to:
- ✅ Understand mod structure
- ✅ Create basic elements
- ✅ Add element properties
- ✅ Test your mod
- ✅ Submit your mod to the repository

---

## 🎯 Step 1: Understand the Basics

### What is a Mod?
A mod is a JavaScript file that adds new elements, mechanics, or features to Sandboxels.

### Basic Structure:
```javascript
/**
 * YOUR MOD NAME
 * @description What your mod does
 * @author Your Name
 * @version 1.0.0
 */

// Your code here

console.log("✅ Your Mod Name Mod loaded!");
```

---

## 🛠️ Step 2: Create Your First Element

### Simple Element Example:
```javascript
/**
 * MY FIRST MOD
 * @description Creates a blue bouncy element
 * @author YourName
 * @version 1.0.0
 */

// Define your element
const myElement = {
  name: "Bouncy Blue",
  color: "rgb(0, 100, 255)",
  density: 1.0,
  friction: 0.3
};

// Register it in the game
registerElement({
  name: myElement.name,
  color: myElement.color,
  density: myElement.density,
  friction: myElement.friction,
  description: "A bouncy blue blob"
});

console.log("✅ My First Mod loaded!");
```

### What Each Property Does:

| Property | Purpose | Example |
|----------|---------|---------|
| **name** | Display name in game | "Bouncy Blue" |
| **color** | RGB color value | "rgb(0, 100, 255)" |
| **density** | How heavy (0-5) | 1.0 = normal |
| **friction** | How sticky (0-1) | 0.3 = slippery |
| **description** | Hover text | "A bouncy blue blob" |

---

## 🎨 Step 3: Create Multiple Elements

### Multi-Element Mod:
```javascript
/**
 * RAINBOW ELEMENTS
 * @description Adds colorful rainbow elements
 * @author YourName
 * @version 1.0.0
 */

const rainbowElements = {
  red: {
    name: "Red Goo",
    color: "rgb(255, 0, 0)",
    density: 1.2,
    friction: 0.5
  },
  
  orange: {
    name: "Orange Goo",
    color: "rgb(255, 165, 0)",
    density: 1.2,
    friction: 0.5
  },
  
  yellow: {
    name: "Yellow Goo",
    color: "rgb(255, 255, 0)",
    density: 1.2,
    friction: 0.5
  },
  
  green: {
    name: "Green Goo",
    color: "rgb(0, 255, 0)",
    density: 1.2,
    friction: 0.5
  }
};

// Register all elements
Object.entries(rainbowElements).forEach(([key, element]) => {
  registerElement({
    name: element.name,
    color: element.color,
    density: element.density,
    friction: element.friction,
    description: `Rainbow element - ${key}`
  });
});

console.log("✅ Rainbow Elements Mod loaded!");
```

---

## 🔄 Step 4: Add Element Reactions

### Make Elements Interact:
```javascript
/**
 * REACTIVE ELEMENTS
 * @description Elements that react with each other
 * @author YourName
 * @version 1.0.0
 */

registerElement({
  name: "Fire",
  color: "rgb(255, 100, 0)",
  density: 1.2,
  friction: 0.5,
  description: "Flammable element",
  reactions: {
    // Fire + Water = Steam
    "water": {
      outcome: "steam",
      chance: 0.5  // 50% chance
    },
    // Fire + Wood = Ash
    "wood": {
      outcome: "ash",
      chance: 0.8  // 80% chance
    }
  }
});

registerElement({
  name: "Water",
  color: "rgb(0, 100, 255)",
  density: 1.0,
  friction: 0.3,
  description: "Liquid water"
});

console.log("✅ Reactive Elements Mod loaded!");
```

---

## 💾 Step 5: Save Your Mod

1. Create a new file: `my-awesome-mod.js`
2. Copy your code into it
3. Save in the `mods/` folder

**File Structure:**
```
Sandboxels-Mods/
├── mods/
│   ├── my-awesome-mod.js  ← Your mod here!
│   ├── aesthetic-elements.js
│   └── ...
└── README.md
```

---

## 🧪 Step 6: Test Your Mod

1. Load Sandboxels: https://neal.fun/sandboxels
2. Open Browser Console (F12 or Right-click → Inspect)
3. Copy your mod code and paste in console
4. If you see `✅ Your Mod loaded!` - it works! 🎉

---

## 🚀 Step 7: Submit Your Mod

### Create a Pull Request:

1. **Fork** this repository
   ```bash
   Click "Fork" on GitHub
   ```

2. **Clone** your fork
   ```bash
   git clone https://github.com/YOUR-USERNAME/Sandboxels-Mods.git
   cd Sandboxels-Mods
   ```

3. **Create a branch**
   ```bash
   git checkout -b add/your-mod-name
   ```

4. **Add your mod file** to `mods/` folder

5. **Commit your changes**
   ```bash
   git add mods/your-mod.js
   git commit -m "✨ Add awesome mod with cool features"
   ```

6. **Push to your fork**
   ```bash
   git push origin add/your-mod-name
   ```

7. **Create Pull Request** on GitHub
   - Click "New Pull Request"
   - Write description of what your mod does
   - Submit!

---

## 📊 Color Reference

### Common RGB Colors:
```javascript
Red:      "rgb(255, 0, 0)"
Green:    "rgb(0, 255, 0)"
Blue:     "rgb(0, 0, 255)"
Yellow:   "rgb(255, 255, 0)"
Purple:   "rgb(128, 0, 128)"
Orange:   "rgb(255, 165, 0)"
Pink:     "rgb(255, 192, 203)"
Gray:     "rgb(128, 128, 128)"
Black:    "rgb(0, 0, 0)"
White:    "rgb(255, 255, 255)"
```

---

## 🎯 Density & Friction Guide

### Density (Weight):
- **0.0-0.5** - Light/floating (powder, gas)
- **0.5-1.5** - Normal (liquids, particles)
- **1.5-2.5** - Heavy (rock, metal)
- **2.5-5.0** - Very heavy (stone, ore)

### Friction (Stickiness):
- **0.0-0.2** - Slippery (ice, oil)
- **0.2-0.5** - Normal (sand, liquid)
- **0.5-0.8** - Sticky (mud, paste)
- **0.8-1.0** - Very sticky (glue)

---

## 💡 Pro Tips

1. **Comment Your Code**
   ```javascript
   // This creates a liquid element
   registerElement({...});
   ```

2. **Test Combinations**
   - Add reactions between your elements
   - Make them interact with default elements

3. **Use Descriptive Names**
   - "Bouncy Blue" is better than "element1"
   - Descriptive names help other creators

4. **Add Variety**
   - Different densities
   - Different colors
   - Different reactions

5. **Document Everything**
   - Comments explain what your mod does
   - Makes it easier for others to understand

---

## 🐛 Troubleshooting

### Mod doesn't load?
- Check for JavaScript syntax errors
- Make sure `registerElement()` is called
- Check browser console for error messages

### Elements don't appear?
- Verify RGB color format: `"rgb(R, G, B)"`
- Check name is spelled correctly
- Make sure density is between 0-5

### Reactions not working?
- Check element names match exactly
- Verify chance is between 0 and 1
- Test with console.log()

---

## 📚 Example Mods to Learn From

Check out these mods in the repository:
- `aesthetic-elements.js` - Multiple elements
- `magic-elements.js` - Reactions system
- `advanced-machines.js` - Complex properties
- `nature-expansion.js` - Ecosystem building

---

## 🎉 Next Steps

1. ✅ Create your first mod
2. ✅ Test it in Sandboxels
3. ✅ Submit a Pull Request
4. ✅ Get feedback from community
5. ✅ See your mod go viral! 🚀

---

## 📞 Need Help?

- 💬 Open an Issue for questions
- 📖 Check MOD_SHOWCASE.md for examples
- 🤝 Join the community discussions
- ⭐ Star the repository for support!

---

**Happy Modding! 🎮✨**

*Your mod could be the next viral creation!*
