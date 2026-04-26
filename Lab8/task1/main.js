import { ForestRenderer } from "./forest/ForestRenderer.js";
import { runFlyweightBenchmark } from "./test/benchmark.js";

const forest = new ForestRenderer("forestCanvas");

const generateButton = document.getElementById("generateForest");
const clearButton = document.getElementById("clearForest");
const benchmarkButton = document.getElementById("runBenchmark");
const treeCountInput = document.getElementById("treeCount");
const statsOutput = document.getElementById("stats");

function showStats(stats) {
  statsOutput.textContent = JSON.stringify(stats, null, 2);
}

generateButton.addEventListener("click", () => {
  const count = Number(treeCountInput.value) || 10000;

  forest.clear();
  forest.generateForest(count);

  const stats = forest.render();
  showStats(stats);
});

clearButton.addEventListener("click", () => {
  forest.clear();

  showStats({
    message: "Forest cleared"
  });
});

benchmarkButton.addEventListener("click", () => {
  const count = Number(treeCountInput.value) || 10000;
  const result = runFlyweightBenchmark(count);

  showStats(result.flyweightResult);
});

forest.generateForest(10000);
showStats(forest.render());