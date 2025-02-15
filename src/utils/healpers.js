export const discountPrice = function (price) {
  const Price = Math.trunc(price - (price * 10) / 100);
  return Price;
};

export const capitalizeFirstAndAfterSpaces = function (str) {
  return str
    ?.split("")
    .map((char, index) => {
      if (index === 0 || str[index - 1] === " ") {
        return char.toUpperCase();
      }
      return char.toLowerCase();
    })
    .join("");
};
