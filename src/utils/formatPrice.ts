export const formatPrice = (
  price: number,
  precision = 0,
  locale = "en-US",
  currencyCode = "USD"
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  }).format(price);
};
