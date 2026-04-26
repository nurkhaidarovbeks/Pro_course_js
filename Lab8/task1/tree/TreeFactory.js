// TreeFactory.js - Manages shared flyweight objects

import { FlyweightTree } from "./FlyweightTree.js";

class TreeFactory {
  constructor() {
    this.trees = new Map();
    this.treeCount = 0;
  }

  getTree(type, species, foliageColor, trunkColor, height, width) {
    const key = `${type}-${species}-${foliageColor}-${trunkColor}-${height}-${width}`;

    if (!this.trees.has(key)) {
      const tree = new FlyweightTree(
        type,
        species,
        foliageColor,
        trunkColor,
        height,
        width
      );

      this.trees.set(key, tree);
      console.log(`[Factory] Created new flyweight: ${key}`);
    }

    this.treeCount += 1;

    return this.trees.get(key);
  }

  getStats() {
    const uniqueFlyweights = this.trees.size;
    const reusedObjects = this.treeCount - uniqueFlyweights;

    return {
      totalTrees: this.treeCount,
      uniqueFlyweights,
      reusedObjects,
      memorySavedApproxPercent:
        this.treeCount === 0
          ? 0
          : Math.round((reusedObjects / this.treeCount) * 100)
    };
  }

  reset() {
    this.trees.clear();
    this.treeCount = 0;
  }
}

const treeFactory = new TreeFactory();

export default treeFactory;