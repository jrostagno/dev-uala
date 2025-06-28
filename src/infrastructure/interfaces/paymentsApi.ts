export interface Payments {
  transactions: Transaction[];
  metadata: Metadata;
}

export interface Metadata {
  cards: CardElement[];
  paymentMethods: CardElement[];
}

export interface CardElement {
  value: string;
  label: string;
}

export interface Transaction {
  id: string;
  amount: number;
  card: CardEnum;
  installments: number;
  createdAt: Date;
  updatedAt: Date;
  paymentMethod: PaymentMethod;
}

export type CardEnum = "amex" | "mastercard" | "visa";

export type PaymentMethod = "link" | "mpos" | "pospro" | "qr";
