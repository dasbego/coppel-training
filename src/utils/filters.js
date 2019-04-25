export function toLocalePrice (price) {
  return price.toLocaleString();
  // return String
}

export function toPrice (price) {
  return `$${price}`;
}

export default toLocalePrice;
