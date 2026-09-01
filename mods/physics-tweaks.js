/**
 * PHYSICS TWEAKS MOD
 * @description Advanced physics modifications and gravity alterations
 * @author Mateusino Ball
 * @version 1.0.0
 * @category Physics
 */

// Physics Modifier Elements
const physicsElements = {
  // Gravity Modifiers
  antigravity: {
    name: "Antigravity Zone",
    color: "rgb(255, 0, 255)",
    density: 0.01,
    friction: 0.0,
    description: "Defies gravity and pushes objects upward"
  },
  
  hypergravity: {
    name: "Hypergravity Zone",
    color: "rgb(0, 0, 0)",
    density: 5.0,
    friction: 1.0,
    description: "Extremely dense area pulling everything down"
  },
  
  zeroG: {
    name: "Zero Gravity",
    color: "rgb(200, 200, 255)",
    density: 0.0,
    friction: 0.0,
    description: "Floating space where gravity doesn't exist"
  },
  
  // Momentum Modifiers
  speedboost: {
    name: "Speed Boost",
    color: "rgb(255, 255, 0)",
    density: 1.0,
    friction: 0.2,
    description: "Accelerates objects passing through"
  },
  
  slowmotion: {
    name: "Slow Motion",
    color: "rgb(100, 100, 255)",
    density: 1.5,
    friction: 0.95,
    description: "Dramatically slows down movement"
  },
  
  // Force Fields
  repulsor: {
    name: "Repulsor Field",
    color: "rgb(255, 100, 100)",
    density: 1.0,
    friction: 0.5,
    description: "Pushes objects away on contact"
  },
  
  attractor: {
    name: "Attractor Field",
    color: "rgb(100, 255, 100)",
    density: 1.0,
    friction: 0.5,
    description: "Pulls objects toward its center"
  },
  
  // Energy Elements
  kinetic: {
    name: "Kinetic Pulse",
    color: "rgb(255, 165, 0)",
    density: 1.2,
    friction: 0.6,
    description: "Stores and releases kinetic energy"
  },
  
  vortex: {
    name: "Vortex",
    color: "rgb(50, 100, 200)",
    density: 0.8,
    friction: 0.7,
    description: "Creates spinning motion around itself"
  }
};

// Register physics elements
Object.entries(physicsElements).forEach(([key, element]) => {
  registerElement({
    name: element.name,
    color: element.color,
    density: element.density,
    friction: element.friction,
    description: element.description,
    category: "physics"
  });
});

console.log("⚡ Physics Tweaks Mod loaded! Defy the laws of physics!");
