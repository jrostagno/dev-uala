import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Toaster } from "@/components/ui/sonner";

import Header from "./Header";
import LateralDrawer from "./LateralDrawer";

const MobileLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="relative flex flex-col h-screen overflow-hidden bg-gray-extraLight">
      {/* Navbar */}
      <Header setDrawerOpen={setDrawerOpen} />

      {/* Overlay oscuro */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Drawer lateral (80% de ancho) */}
      <LateralDrawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />

      <main className="flex flex-col flex-1 px-5 pt-8 overflow-hidden mt-14">
        <Outlet />
        <Toaster />
      </main>
    </div>
  );
};

export default MobileLayout;
