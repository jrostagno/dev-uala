import { useTransactionStore } from "@/store/useTransactionStore";
import PaymentsBanner from "../components/payments/PaymentsBanner";
import TransactionHistory from "../components/transactions/TransactionHistory";
import { useEffect } from "react";

const HomeScreen = () => {
  // useEffect(() => {
  //   useTransactionStore.getState().fetchAll();

  //   const interval = setInterval(() => {
  //     useTransactionStore.getState().fetchAll();
  //   }, 60000); // cada 30s

  //   return () => clearInterval(interval); // Limpieza al desmontar
  // }, []);

  useEffect(() => {
    useTransactionStore.getState().fetchAll();
  }, []);

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
      <PaymentsBanner />
      <TransactionHistory />
    </div>
  );
};

export default HomeScreen;
