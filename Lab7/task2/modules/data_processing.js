import { mapArray, filterArray, reduceArray } from "./functional_utils.js";

export function processData(data) {

  const filtered = filterArray(data, n => n > 10);
  const doubled = mapArray(filtered, n => n * 2);
  const sum = reduceArray(doubled, (a, b) => a + b, 0);

  return {
    filtered,
    doubled,
    sum
  };

}