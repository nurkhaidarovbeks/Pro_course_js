// ForestRenderer.js - Uses flyweights to render many trees efficiently

import treeFactory from "../tree/TreeFactory.js";

export class ForestRenderer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);

    if (!this.canvas) {
      throw new Error(`Canvas with id "${canvasId}" was not found.`);
    }

    this.ctx = this.canvas.getContext("2d");
    this.trees = [];
  }

  addTree(
    x,
    y,
    type,
    species,
    foliageColor,
    trunkColor,
    height,
    width,
    scale,
    rotation
  ) {
    const flyweight = treeFactory.getTree(
      type,
      species,
      foliageColor,
      trunkColor,
      height,
      width
    );

    this.trees.push({
      flyweight,
      x,
      y,
      scale,
      rotation
    });
  }

  generateForest(count = 10000) {
    const types = ["pine", "oak", "birch", "maple"];

    const speciesMap = {
      pine: {
        species: "Pine",
        foliage: "#228B22",
        trunk: "#8B4513",
        height: 80,
        width: 30
      },
      oak: {
        species: "Oak",
        foliage: "#006400",
        trunk: "#654321",
        height: 60,
        width: 40
      },
      birch: {
        species: "Birch",
        foliage: "#90EE90",
        trunk: "#F5F5DC",
        height: 70,
        width: 20
      },
      maple: {
        species: "Maple",
        foliage: "#FF8C00",
        trunk: "#A0522D",
        height: 65,
        width: 35
      }
    };

    for (let i = 0; i < count; i += 1) {
      const type = types[Math.floor(Math.random() * types.length)];
      const config = speciesMap[type];

      this.addTree(
        Math.random() * this.canvas.width,
        Math.random() * this.canvas.height,
        type,
        config.species,
        config.foliage,
        config.trunk,
        config.height,
        config.width,
        0.4 + Math.random() * 0.8,
        Math.random() * Math.PI * 2
      );
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const tree of this.trees) {
      tree.flyweight.render(
        this.ctx,
        tree.x,
        tree.y,
        tree.scale,
        tree.rotation
      );
    }

    return treeFactory.getStats();
  }

  clear() {
    this.trees = [];
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    treeFactory.reset();
  }
}