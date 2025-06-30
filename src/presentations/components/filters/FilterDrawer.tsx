import { useEffect, useState } from "react";
import SvgChevronLeftIcon from "@/icons/icon-chevron-left";
import HeaderTitle from "../ui/text/HeaderTitle";
import DatesFilter from "./dates/DatesFilter";
import CreditCardFilter from "./credit-cards/CreditCardFilter";
import InstallmentsFilter from "./installments/InstallmentsFilter";
import AmountFilter from "./amount/AmountFilter";
import PaymentMethodsFilter from "./payment-methods/PaymentMethodsFilter";
import { useTransactionStore } from "@/store/useTransactionStore";
import { Button } from "@/components/ui/button";

interface FilterDrawerProps {
  setShowFilters: (value: boolean) => void;
}

const FilterDrawer = ({ setShowFilters }: FilterDrawerProps) => {
  const { applyFilters, clearFilters, filters } = useTransactionStore();

  const [closing, setClosing] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    // Trigger entrada después del primer render
    requestAnimationFrame(() => setHasEntered(true));
  }, []);

  useEffect(() => {
    if (closing) {
      const timeout = setTimeout(() => {
        setShowFilters(false);
      }, 300); // Duración de la animación
      return () => clearTimeout(timeout);
    }
  }, [closing, setShowFilters]);

  const handleClear = () => clearFilters();
  const handleClose = () => setClosing(true);

  return (
    <div
      className={`
        fixed inset-0 z-50 flex flex-col top-14 rounded-tr-[32px] bg-gray-extraLight
        transform transition-transform duration-300
        ${
          closing
            ? "translate-y-full"
            : hasEntered
            ? "translate-y-0"
            : "translate-y-full"
        }
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-6 p-4">
        <button onClick={handleClose} aria-label="Cerrar filtros">
          <SvgChevronLeftIcon />
        </button>
        <HeaderTitle>Filtros</HeaderTitle>
      </div>

      {/* Contenido */}
      <div className="flex-1 px-4 py-2 overflow-y-auto scrollbar-hide">
        <div className="flex items-center justify-between mt-6">
          <HeaderTitle>Todos los filtros</HeaderTitle>
          <Button
            variant="ghost"
            className="pr-0"
            disabled={Object.entries(filters).length === 0}
            onClick={handleClear}
          >
            Limpiar
          </Button>
        </div>

        <DatesFilter />
        <CreditCardFilter />
        <InstallmentsFilter />
        <AmountFilter />
        <PaymentMethodsFilter />
        <div className="h-24" />
      </div>

      <div className="p-4 bg-white">
        <Button
          variant="default"
          className="w-full h-12"
          disabled={Object.entries(filters).length === 0}
          onClick={() => {
            applyFilters();
            handleClose();
          }}
        >
          Aplicar Filtros
        </Button>
      </div>
    </div>
  );
};

export default FilterDrawer;
