import "./App.css";
import MobileLayout from "./presentations/components/layout/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// App.tsx

import HomeScreen from "./presentations/screens/HomeScreen";
import MetricsScreen from "./presentations/screens/MetricsScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MobileLayout />}>
            <Route index element={<HomeScreen />} />
            <Route path="metrics" element={<MetricsScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
