import "./App.css";
import MobileLayout from "./presentations/components/layout/MainLayout";

import PaymentsBanner from "./presentations/components/payments/PaymentsBanner";

function App() {
  return (
    <>
      <MobileLayout>
        <PaymentsBanner />
      </MobileLayout>
    </>
  );
}

export default App;
