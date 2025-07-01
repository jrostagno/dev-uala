import type { Transaction } from "@/infrastructure/interfaces/paymentsApi";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchTransactions = async (): Promise<Transaction[]> => {
  const url = import.meta.env.VITE_API_URL;

  if (!url) {
    throw new Error("La URL de la API no está definida");
  }

  try {
    await sleep(1000);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    const data = await response.json();

    if (!Array.isArray(data.transactions)) {
      throw new Error("La respuesta no contiene un array de transacciones");
    }

    return data.transactions;
  } catch (error) {
    // Esto puede ayudarte a debuggear mejor
    console.error("fetchTransactions error:", error);
    throw error instanceof Error
      ? error
      : new Error("Error desconocido al obtener transacciones");
  }
};
