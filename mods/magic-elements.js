/**
 * MAGIC ELEMENTS MOD
 * @description Advanced magic system with spells, curses, and mystical effects
 * @author Mateusino Ball
 * @version 1.0.0
 * @category Magic
 */

// Magic Element Registry
const magicElements = {
  // Fire Magic
  flameburst: {
    name: "Flameburst",
    color: "rgb(255, 100, 0)",
    density: 1.2,
    friction: 0.5,
    description: "Explosive fire that spreads chaos",
    effect: "explosive"
  },
  
  // Ice Magic
  frostbite: {
    name: "Frostbite",
    color: "rgb(100, 200, 255)",
    density: 0.8,
    friction: 0.3,
    description: "Freezing ice that slows everything",
    effect: "freeze"
  },
  
  // Lightning Magic
  voltcharge: {
    name: "Voltcharge",
    color: "rgb(255, 255, 0)",
    density: 1.5,
    friction: 0.8,
    description: "Electric energy that shocks surroundings",
    effect: "electric"
  },
  
  // Nature Magic
  wildvine: {
    name: "Wildvine",
    color: "rgb(0, 200, 100)",
    density: 1.1,
    friction: 0.6,
    description: "Living vines that grow and spread",
    effect: "growth"
  },
  
  // Dark Magic
  shadowmist: {
    name: "Shadowmist",
    color: "rgb(50, 20, 80)",
    density: 0.9,
    friction: 0.4,
    description: "Mysterious shadow that consumes light",
    effect: "corruption"
  },
  
  // Holy Magic
  holylight: {
    name: "Holylight",
    color: "rgb(255, 255, 200)",
    density: 0.7,
    friction: 0.2,
    description: "Pure light that purifies darkness",
    effect: "purify"
  }
};

// Register all magic elements
Object.entries(magicElements).forEach(([key, element]) => {
  registerElement({
    name: element.name,
    color: element.color,
    density: element.density,
    friction: element.friction,
    description: element.description,
    reactions: {
      // Magic interactions
      "water": { outcome: "steam", chance: 0.3 },
      "fire": { outcome: "ash", chance: 0.2 },
      "sand": { outcome: "glass", chance: 0.1 }
    }
  });
});

console.log("✨ Magic Elements Mod loaded! Cast your spells!");
