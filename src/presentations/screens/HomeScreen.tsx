import { useEffect } from "react";

import { useTransactionStore } from "@/store/useTransactionStore";

import PaymentsBanner from "../components/payments/PaymentsBanner";
import TransactionHistory from "../components/transactions/TransactionHistory";
import ErrorMessage from "../components/ui/ErrorMessage";

const HomeScreen = () => {
  const { error } = useTransactionStore();
  useEffect(() => {
    useTransactionStore.getState().fetchAll();
  }, []);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
      <PaymentsBanner />
      <TransactionHistory />
    </div>
  );
};

export default HomeScreen;
