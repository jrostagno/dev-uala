import type { CardEnum, PaymentMethod } from "../interfaces/paymentsApi";

export const METHOD_LABELS: Record<PaymentMethod, string> = {
  link: "Link de pago",
  qr: "Código QR",
  mpos: "mPOS",
  pospro: "POSpro",
};

export const CARDS_LABELS: Record<CardEnum, string> = {
  amex: "amex",
  mastercard: "martercard",
  visa: "visa",
};
