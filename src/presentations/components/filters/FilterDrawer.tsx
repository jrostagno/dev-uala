import { Button } from "@/components/ui/button";
import { useDrawerAnimation } from "@/hooks/useDrawerAnimation";
import SvgChevronLeftIcon from "@/icons/icon-chevron-left";
import { useTransactionStore } from "@/store/useTransactionStore";

import HeaderTitle from "../ui/text/HeaderTitle";
import AmountFilter from "./amount/AmountFilter";
import CreditCardFilter from "./credit-cards/CreditCardFilter";
import DatesFilter from "./dates/DatesFilter";
import InstallmentsFilter from "./installments/InstallmentsFilter";
import PaymentMethodsFilter from "./payment-methods/PaymentMethodsFilter";

interface FilterDrawerProps {
  setShowFilters: (value: boolean) => void;
}

const FilterDrawer = ({ setShowFilters }: FilterDrawerProps) => {
  const { applyFilters, clearFilters, filters } = useTransactionStore();

  const { closing, hasEntered, handleClose } = useDrawerAnimation(() =>
    setShowFilters(false)
  );

  const handleClear = () => clearFilters();

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
        <div className="flex items-center justify-between ">
          <HeaderTitle>Todos los filtros</HeaderTitle>
          <Button
            variant="ghost"
            className="pr-0 text-primaryBrand"
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

      <div className="px-4 pb-4 bg-gray-extraLight">
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
