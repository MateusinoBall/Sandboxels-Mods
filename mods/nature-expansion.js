/**
 * NATURE EXPANSION MOD
 * @description New plants, animals, and ecosystems for Sandboxels
 * @author Mateusino Ball
 * @version 1.0.0
 * @category Nature
 */

// Nature Elements
const natureElements = {
  // Plants
  gigantree: {
    name: "Giant Tree",
    color: "rgb(34, 139, 34)",
    density: 1.3,
    friction: 0.8,
    description: "Huge tree that grows and spreads seeds"
  },
  
  mysticalflower: {
    name: "Mystical Flower",
    color: "rgb(255, 105, 180)",
    density: 0.9,
    friction: 0.4,
    description: "Glowing flower that attracts wildlife"
  },
  
  thornbush: {
    name: "Thornbush",
    color: "rgb(128, 0, 128)",
    density: 1.2,
    friction: 0.7,
    description: "Sharp thorns that damage on contact"
  },
  
  fungal: {
    name: "Fungal Network",
    color: "rgb(165, 42, 42)",
    density: 1.0,
    friction: 0.5,
    description: "Spreading fungus that decomposes matter"
  },
  
  // Animals
  butterfly: {
    name: "Butterfly",
    color: "rgb(255, 200, 0)",
    density: 0.1,
    friction: 0.2,
    description: "Flying creature that pollinates flowers"
  },
  
  beetle: {
    name: "Beetle",
    color: "rgb(100, 50, 0)",
    density: 0.3,
    friction: 0.6,
    description: "Crawling insect that eats plants"
  },
  
  watersnail: {
    name: "Water Snail",
    color: "rgb(200, 150, 100)",
    density: 0.8,
    friction: 0.7,
    description: "Aquatic creature that cleans ecosystems"
  },
  
  // Natural Resources
  crystalrock: {
    name: "Crystal Rock",
    color: "rgb(100, 200, 255)",
    density: 2.8,
    friction: 0.8,
    description: "Valuable crystal with magical properties"
  },
  
  fertilizer: {
    name: "Fertilizer",
    color: "rgb(139, 69, 19)",
    density: 1.2,
    friction: 0.5,
    description: "Nourishes plants for faster growth"
  }
};

// Register nature elements
Object.entries(natureElements).forEach(([key, element]) => {
  registerElement({
    name: element.name,
    color: element.color,
    density: element.density,
    friction: element.friction,
    description: element.description,
    category: "nature"
  });
});

console.log("🌿 Nature Expansion Mod loaded! Create beautiful ecosystems!");
