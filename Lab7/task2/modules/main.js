import { processData } from "./data_processing.js";

const numbers = [5, 12, 8, 20, 3, 15];

const result = processData(numbers);

document.getElementById("filtered").textContent = result.filtered;
document.getElementById("doubled").textContent = result.doubled;
document.getElementById("sum").textContent = result.sum;