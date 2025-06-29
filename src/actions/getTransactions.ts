import type { Transaction } from "@/infrastructure/interfaces/paymentsApi";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchTransactions = async (): Promise<Transaction[]> => {
  await sleep(2000);
  const res = await fetch("/api/transactions");

  if (!res.ok) {
    throw new Error("Error al obtener transacciones");
  }

  const data = await res.json();
  return data.transactions;
};
