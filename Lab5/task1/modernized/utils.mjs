import { currency } from "./config.mjs";
export const formatPrice = (amount) => ${currency} ${amount.toFixed(2)};