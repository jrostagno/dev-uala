import "./App.css";
import MobileLayout from "./presentations/components/layout/MainLayout";

import HomeScreen from "./presentations/screens/HomeScreen";

function App() {
  return (
    <>
      <MobileLayout>
        <HomeScreen />
      </MobileLayout>
    </>
  );
}

export default App;
