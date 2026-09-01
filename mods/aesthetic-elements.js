/**
 * AESTHETIC ELEMENTS MOD
 * @description Visual effects, particles, and beautiful elements
 * @author Mateusino Ball
 * @version 1.0.0
 * @category Aesthetic
 */

// Visual Elements
const aestheticElements = {
  // Particles & Effects
  stardust: {
    name: "Stardust",
    color: "rgb(255, 255, 255)",
    density: 0.1,
    friction: 0.1,
    description: "Shimmering particles that sparkle"
  },
  
  rainbow: {
    name: "Rainbow Liquid",
    color: "rgb(255, 165, 0)",
    density: 1.0,
    friction: 0.3,
    description: "Changes colors as it flows"
  },
  
  glowplasma: {
    name: "Glow Plasma",
    color: "rgb(0, 255, 255)",
    density: 0.9,
    friction: 0.4,
    description: "Luminescent energy that illuminates"
  },
  
  aurora: {
    name: "Aurora",
    color: "rgb(0, 255, 150)",
    density: 0.5,
    friction: 0.2,
    description: "Northern lights effect that dances"
  },
  
  // Decorative Elements
  crystalline: {
    name: "Crystalline",
    color: "rgb(147, 112, 219)",
    density: 2.0,
    friction: 0.8,
    description: "Precious crystal formations"
  },
  
  gemstone: {
    name: "Gemstone",
    color: "rgb(220, 20, 60)",
    density: 2.2,
    friction: 0.9,
    description: "Valuable gems with rich colors"
  },
  
  marble: {
    name: "Marble",
    color: "rgb(240, 240, 240)",
    density: 2.3,
    friction: 0.7,
    description: "Elegant stone for structures"
  },
  
  // Light Effects
  lightbeam: {
    name: "Light Beam",
    color: "rgb(255, 255, 100)",
    density: 0.05,
    friction: 0.0,
    description: "Pure light traveling in straight lines"
  },
  
  shadow: {
    name: "Shadow Essence",
    color: "rgb(50, 50, 50)",
    density: 0.8,
    friction: 0.5,
    description: "Darkness concentrated in one place"
  },
  
  // Paint & Color
  neonpink: {
    name: "Neon Pink",
    color: "rgb(255, 20, 147)",
    density: 1.0,
    friction: 0.3,
    description: "Vibrant neon colored paint"
  },
  
  cyberpurple: {
    name: "Cyber Purple",
    color: "rgb(138, 43, 226)",
    density: 1.0,
    friction: 0.3,
    description: "Futuristic purple energy"
  }
};

// Register aesthetic elements
Object.entries(aestheticElements).forEach(([key, element]) => {
  registerElement({
    name: element.name,
    color: element.color,
    density: element.density,
    friction: element.friction,
    description: element.description,
    category: "aesthetic"
  });
});

console.log("🎨 Aesthetic Elements Mod loaded! Paint your world beautifully!");
