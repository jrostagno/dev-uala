import type { Transaction } from "@/infrastructure/interfaces/paymentsApi";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchTransactions = async (): Promise<Transaction[]> => {
  await sleep(1000);

  const url = import.meta.env.VITE_API_URL;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Error al obtener transacciones");
  }

  const data = await res.json();
  return data.transactions;
};
