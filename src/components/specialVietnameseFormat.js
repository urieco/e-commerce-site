const specialVietnameseFormat = (number, currency) => {
  if (currency === "VND") {
    number = Math.round(number / 1000) * 1000;
    return number.toLocaleString("vi-VN", {
      maximumFractionDigits: 0,
    });
  } else
    return number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
};

export { specialVietnameseFormat };