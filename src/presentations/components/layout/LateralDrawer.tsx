import { X } from "lucide-react";
interface LateralDrawerProps {
  setDrawerOpen: (value: boolean) => void;
  drawerOpen: boolean;
}
const LateralDrawer = (props: LateralDrawerProps) => {
  const { setDrawerOpen, drawerOpen } = props;
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
          <X size={28} />
        </button>
      </div>

      <nav className="mt-6 space-y-4 text-lg">
        <a href="#" className="block text-gray-800">
          Inicio
        </a>
        <a href="#" className="block text-gray-800">
          Perfil
        </a>
        <a href="#" className="block text-gray-800">
          Configuración
        </a>
        <a href="#" className="block text-red-600">
          Cerrar sesión
        </a>
      </nav>
    </div>
  );
};

export default LateralDrawer;
