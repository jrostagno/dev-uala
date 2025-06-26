import { useState, type ReactNode } from "react";

import Header from "./Header";
import LateralDrawer from "./LateralDrawer";

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="relative h-screen bg-white overflow-hidden">
      {/* Navbar */}
      <Header setDrawerOpen={setDrawerOpen} />

      {/* Overlay oscuro */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Drawer lateral (80% de ancho) */}
      <LateralDrawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />

      <main className="mt-14 p-4 h-screen px-5 py-8 bg-[#FAFAFA] ">
        {children}
      </main>
    </div>
  );
};

export default MobileLayout;
