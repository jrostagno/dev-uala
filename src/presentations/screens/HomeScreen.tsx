import PaymentsBanner from "../components/payments/PaymentsBanner";
import TransactionHistory from "../components/transactions/TransactionHistory";

const HomeScreen = () => {
  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
      <PaymentsBanner />
      <TransactionHistory />
    </div>
  );
};

export default HomeScreen;
