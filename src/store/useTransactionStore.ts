import { create } from "zustand";

import { fetchTransactions } from "@/actions/getTransactions";
import type {
  CardEnum,
  PaymentMethod,
  Transaction,
} from "@/infrastructure/interfaces/paymentsApi";

interface Filters {
  cards?: CardEnum[];
  paymentMethods?: PaymentMethod[];
  installments?: number[];
  minAmount?: number;
  maxAmount?: number;
  fromDate?: string;
  toDate?: string;
}

export interface TransactionState {
  transactions: Transaction[];
  filtered: Transaction[];
  filters: Filters;
  loading: boolean;
  error: string | null;
  fetchAll: () => Promise<void>;
  setFilters: (filters: Partial<Filters>) => void;
  applyFilters: () => void;
  clearFilters: () => void;
}

export const useTransactionStore = create<TransactionState>((set, get) => ({
  transactions: [],
  filtered: [],
  filters: {},
  loading: false,
  error: null,

  fetchAll: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchTransactions();
      set({ transactions: data, filtered: data, loading: false });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Error desconocido",
        loading: false,
      });
    }
  },

  setFilters: (newFilters) => {
    const { filters } = get();
    set({ filters: { ...filters, ...newFilters } });
  },

  applyFilters: () => {
    const { filters, transactions } = get();
    const {
      cards,
      paymentMethods,
      installments,
      minAmount,
      maxAmount,
      fromDate,
      toDate,
    } = filters;

    const filtered = transactions.filter((tx) => {
      const matchCard = !cards || cards.length === 0 || cards.includes(tx.card);
      const matchMethod =
        !paymentMethods ||
        paymentMethods.length === 0 ||
        paymentMethods.includes(tx.paymentMethod);
      const matchInstallments =
        !installments ||
        installments.length === 0 ||
        installments.includes(tx.installments);
      const matchAmount =
        (!minAmount || tx.amount >= minAmount) &&
        (!maxAmount || tx.amount <= maxAmount);
      const matchDate =
        (!fromDate || new Date(tx.createdAt) >= new Date(fromDate)) &&
        (!toDate || new Date(tx.createdAt) <= new Date(toDate));

      return (
        matchCard &&
        matchMethod &&
        matchInstallments &&
        matchAmount &&
        matchDate
      );
    });

    set({ filtered });
  },

  clearFilters: () => {
    const { transactions } = get();
    set({ filters: {}, filtered: transactions });
  },
}));
