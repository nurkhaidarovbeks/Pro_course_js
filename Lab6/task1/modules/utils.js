import { currency } from "./constants.js";

export function formatPrice(value) {
  return ${currency} ${value.toFixed(2)};
}

export function render(id, text) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = text;
}