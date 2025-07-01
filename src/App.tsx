import "./App.css";

import { BrowserRouter, Route,Routes } from "react-router-dom";

import MobileLayout from "./presentations/components/layout/MainLayout";
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
            <Route path="metricas" element={<MetricsScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
