// benchmark.js - Compares flyweight and non-flyweight object creation

import treeFactory from "../tree/TreeFactory.js";

function createNonFlyweightTrees(count) {
  const types = ["pine", "oak", "birch", "maple"];

  const speciesMap = {
    pine: {
      species: "Pine",
      foliageColor: "#228B22",
      trunkColor: "#8B4513",
      height: 80,
      width: 30
    },
    oak: {
      species: "Oak",
      foliageColor: "#006400",
      trunkColor: "#654321",
      height: 60,
      width: 40
    },
    birch: {
      species: "Birch",
      foliageColor: "#90EE90",
      trunkColor: "#F5F5DC",
      height: 70,
      width: 20
    },
    maple: {
      species: "Maple",
      foliageColor: "#FF8C00",
      trunkColor: "#A0522D",
      height: 65,
      width: 35
    }
  };

  const trees = [];
  const start = performance.now();

  for (let i = 0; i < count; i += 1) {
    const type = types[Math.floor(Math.random() * types.length)];
    const config = speciesMap[type];

    trees.push({
      type,
      species: config.species,
      foliageColor: config.foliageColor,
      trunkColor: config.trunkColor,
      height: config.height,
      width: config.width,
      x: Math.random() * 1000,
      y: Math.random() * 600,
      scale: 0.4 + Math.random() * 0.8,
      rotation: Math.random() * Math.PI * 2
    });
  }

  const end = performance.now();

  return {
    implementation: "Non-Flyweight",
    createdObjects: trees.length,
    uniqueSharedObjects: 0,
    timeMs: Number((end - start).toFixed(2))
  };
}

function createFlyweightTrees(count) {
  treeFactory.reset();

  const types = ["pine", "oak", "birch", "maple"];

  const speciesMap = {
    pine: {
      species: "Pine",
      foliageColor: "#228B22",
      trunkColor: "#8B4513",
      height: 80,
      width: 30
    },
    oak: {
      species: "Oak",
      foliageColor: "#006400",
      trunkColor: "#654321",
      height: 60,
      width: 40
    },
    birch: {
      species: "Birch",
      foliageColor: "#90EE90",
      trunkColor: "#F5F5DC",
      height: 70,
      width: 20
    },
    maple: {
      species: "Maple",
      foliageColor: "#FF8C00",
      trunkColor: "#A0522D",
      height: 65,
      width: 35
    }
  };

  const trees = [];
  const start = performance.now();

  for (let i = 0; i < count; i += 1) {
    const type = types[Math.floor(Math.random() * types.length)];
    const config = speciesMap[type];

    const flyweight = treeFactory.getTree(
      type,
      config.species,
      config.foliageColor,
      config.trunkColor,
      config.height,
      config.width
    );

    trees.push({
      flyweight,
      x: Math.random() * 1000,
      y: Math.random() * 600,
      scale: 0.4 + Math.random() * 0.8,
      rotation: Math.random() * Math.PI * 2
    });
  }

  const end = performance.now();
  const stats = treeFactory.getStats();

  return {
    implementation: "Flyweight",
    createdObjects: trees.length,
    uniqueSharedObjects: stats.uniqueFlyweights,
    reusedObjects: stats.reusedObjects,
    memorySavedApproxPercent: stats.memorySavedApproxPercent,
    timeMs: Number((end - start).toFixed(2))
  };
}

export function runFlyweightBenchmark(count = 10000) {
  const nonFlyweightResult = createNonFlyweightTrees(count);
  const flyweightResult = createFlyweightTrees(count);

  console.table([nonFlyweightResult, flyweightResult]);

  return {
    nonFlyweightResult,
    flyweightResult
  };
}