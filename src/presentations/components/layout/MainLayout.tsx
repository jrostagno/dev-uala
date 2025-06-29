import { useState, type ReactNode } from "react";

import Header from "./Header";
import LateralDrawer from "./LateralDrawer";

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="relative flex flex-col h-screen overflow-hidden bg-gray-extraLight">
      {/* Navbar */}
      <Header setDrawerOpen={setDrawerOpen} />

      {/* Overlay oscuro */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Drawer lateral (80% de ancho) */}
      <LateralDrawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />

      <main className="flex flex-col flex-1 px-5 pt-8 overflow-hidden mt-14">
        {children}
      </main>
    </div>
  );
};

export default MobileLayout;
