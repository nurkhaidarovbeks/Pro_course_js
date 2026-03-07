export const mapArray = (array, fn) => array.map(fn);
export const filterArray = (array, fn) => array.filter(fn);
export const reduceArray = (array, fn, initial) =>
  array.reduce(fn, initial);

export const compose = (f, g) => x => f(g(x));