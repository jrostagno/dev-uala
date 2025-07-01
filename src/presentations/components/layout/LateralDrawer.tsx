import { useTransition } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import SvgCloseIcon from "@/icons/icon-close";
import SvgHomeIcon from "@/icons/icon-home";
import SvgMetricsIcon from "@/icons/icon-metrics";

import NavigationLink from "./NavigatoinLinks";
import UserInfo from "./UserInfo";

interface LateralDrawerProps {
  setDrawerOpen: (value: boolean) => void;
  drawerOpen: boolean;
}

const LateralDrawer = (props: LateralDrawerProps) => {
  const { setDrawerOpen, drawerOpen } = props;

  const navigate = useNavigate();

  const [isPending, startTransition] = useTransition();

  const handleNavigate = (path: string) => {
    setDrawerOpen(false);

    startTransition(() => {
      navigate(path);
    });
  };

  const navLinks = [
    {
      icon: <SvgHomeIcon />,
      label: "Home",
      path: "/",
    },
    {
      icon: <SvgMetricsIcon />,
      label: "Métricas",
      path: "/metricas",
    },
  ];

  return (
    <div
      className={`
          fixed top-0 left-0 h-full w-4/5 bg-white z-50 p-6 transform
          transition-transform duration-300 ease-in-out
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
        `}
    >
      {/* Ícono de cerrar a la derecha */}
      <div className="flex justify-end">
        <button
          className="text-gray-800"
          onClick={() => setDrawerOpen(false)}
          aria-label="Cerrar menú"
        >
          <SvgCloseIcon />
        </button>
      </div>

      <nav
        className={`flex flex-col gap-4 mt-6 space-y-4 text-lg ${
          isPending ? "cursor-wait opacity-70" : ""
        }`}
      >
        <UserInfo />

        {navLinks.map((link) => (
          <NavigationLink
            label={link.label}
            icon={link.icon}
            onClick={() => handleNavigate(link.path)}
          />
        ))}

        <Button
          variant="link"
          className="fixed flex items-center gap-3 transform -translate-x-1/2 bottom-8 left-1/2"
        >
          Cerrar sesión
        </Button>
      </nav>
    </div>
  );
};

export default LateralDrawer;
