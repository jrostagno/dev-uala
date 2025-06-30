export const formatPrice = (
  price: number,
  precision = 0,
  locale = "es-AR",
  currencyCode = "ARS"
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  }).format(price);
};
