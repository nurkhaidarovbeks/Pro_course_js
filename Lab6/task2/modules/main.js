import { LoggedCalculator } from "./logger_class.js";

const calc = new LoggedCalculator();

const result = calc.add(5, 3);

calc.log("Calculation result: " + result);

document.getElementById("result").textContent = result;