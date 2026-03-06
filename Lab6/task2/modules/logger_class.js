import Calculator from "./calculator.js";
import { LoggerMixin } from "./logger_mixin.js";

export class LoggedCalculator extends LoggerMixin(Calculator) {}