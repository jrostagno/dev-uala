import "./App.css";
import MobileLayout from "./presentations/components/layout/MainLayout";

import PaymentsBanner from "./presentations/components/payments/PaymentsBanner";
import TransactionHistory from "./presentations/components/transactions/TransactionHistory";

function App() {
  return (
    <>
      <MobileLayout>
        <PaymentsBanner />
        <TransactionHistory />
      </MobileLayout>
    </>
  );
}

export default App;
