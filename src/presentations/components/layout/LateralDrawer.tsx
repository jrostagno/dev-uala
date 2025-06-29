import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SvgCloseIcon from "@/icons/icon-close";
import SvgHomeIcon from "@/icons/icon-home";
import SvgMetricsIcon from "@/icons/icon-metrics";
import { useTransition } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Spinner from "../ui/Loaders/Spinner";

interface LateralDrawerProps {
  setDrawerOpen: (value: boolean) => void;
  drawerOpen: boolean;
}
const LateralDrawer = (props: LateralDrawerProps) => {
  const { setDrawerOpen, drawerOpen } = props;

  const navigate = useNavigate();

  // const handleNavigate = (path: string) => {
  //   setDrawerOpen(false);
  //   setTimeout(() => {
  //     navigate(path);
  //   }, 300); // 300ms para coincidir con tu animación (duration-300)
  // };

  const [isPending, startTransition] = useTransition();

  const handleNavigate = (path: string) => {
    setDrawerOpen(false); // Cierra el drawer

    // Luego, hace la navegación como transición
    startTransition(() => {
      navigate(path);
    });
  };

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

      <nav className="flex flex-col gap-4 mt-6 space-y-4 text-lg">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <h2 className="text-sm font-normal text-textPrimary">John Doe </h2>
        </div>

        <button
          onClick={() => handleNavigate("/")}
          className="text-primaryBrand"
        >
          <div className="flex items-center gap-3">
            <SvgHomeIcon />
            <h2 className="text-sm font-normal text-textPrimary">Home</h2>
          </div>
        </button>

        <button
          onClick={() => handleNavigate("/metrics")}
          className="text-primaryBrand"
        >
          <div className="flex items-center gap-3">
            <SvgMetricsIcon className="text-red-300" />
            <h2 className="text-sm font-normal text-textPrimary">Métricas</h2>
          </div>
        </button>

        <Link
          onClick={() => setDrawerOpen(false)}
          to="/logout"
          className="fixed transform -translate-x-1/2 bottom-8 left-1/2 text-primaryBrand"
        >
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-normal text-primaryBrand">
              Cerrar sesión
            </h2>
          </div>
        </Link>
      </nav>
      {isPending && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white bg-opacity-70">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default LateralDrawer;
