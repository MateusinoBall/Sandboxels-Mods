/**
 * ADVANCED MACHINES MOD
 * @description Mechanical and automation systems for Sandboxels
 * @author Mateusino Ball
 * @version 1.0.0
 * @category Machines
 */

// Mechanical Elements
const machineElements = {
  // Basic Machines
  gear: {
    name: "Gear",
    color: "rgb(169, 169, 169)",
    density: 2.5,
    friction: 0.9,
    description: "Mechanical gear that transfers rotation"
  },
  
  springCoil: {
    name: "Spring Coil",
    color: "rgb(200, 100, 50)",
    density: 1.8,
    friction: 0.7,
    description: "Bouncy spring that stores and releases energy"
  },
  
  motorUnit: {
    name: "Motor Unit",
    color: "rgb(100, 100, 255)",
    density: 2.0,
    friction: 0.8,
    description: "Powered motor that creates continuous rotation"
  },
  
  pulley: {
    name: "Pulley",
    color: "rgb(150, 150, 150)",
    density: 2.2,
    friction: 0.6,
    description: "Changes direction of force transmission"
  },
  
  piston: {
    name: "Piston",
    color: "rgb(50, 50, 50)",
    density: 2.1,
    friction: 0.8,
    description: "Linear motion converter"
  },
  
  // Advanced Machines
  laserEmitter: {
    name: "Laser Emitter",
    color: "rgb(255, 0, 0)",
    density: 1.5,
    friction: 0.9,
    description: "Shoots laser beams in one direction"
  },
  
  conveyor: {
    name: "Conveyor",
    color: "rgb(100, 100, 100)",
    density: 3.0,
    friction: 0.3,
    description: "Moves materials along its surface"
  },
  
  crusher: {
    name: "Crusher",
    color: "rgb(80, 80, 80)",
    density: 3.5,
    friction: 1.0,
    description: "Compresses and destroys elements"
  }
};

// Register machine elements
Object.entries(machineElements).forEach(([key, element]) => {
  registerElement({
    name: element.name,
    color: element.color,
    density: element.density,
    friction: element.friction,
    description: element.description,
    breakable: false,
    category: "machines"
  });
});

console.log("⚙️ Advanced Machines Mod loaded! Build your factory!");
