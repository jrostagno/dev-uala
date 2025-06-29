import SvgChevronLeftIcon from "@/icons/icon-chevron-left";
import HeaderTitle from "../ui/text/HeaderTitle";
import DatesFilter from "./dates/DatesFilter";
import CreditCardFilter from "./credit-cards/CreditCardFilter";
import InstallmentsFilter from "./installments/InstallmentsFilter";
import AmountFilter from "./amount/AmountFilter";
import PaymentMethodsFilter from "./payment-methods/PaymentMethodsFilter";
import { ButtonPrimary } from "../ui/buttons/Buttons";
import { useTransactionStore } from "@/store/useTransactionStore";

interface FilterDrawer {
  setShowFilters: (value: boolean) => void;
}

const FilterDrawer = ({ setShowFilters }: FilterDrawer) => {
  const { applyFilters, clearFilters } = useTransactionStore();

  const handleClear = () => {
    clearFilters(); // limpia estado global
  };
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white animate-slide-up">
      {/* Header del filtro */}
      <div className="flex items-center gap-6 p-4 border-b border-gray-200">
        <button
          onClick={() => setShowFilters(false)}
          aria-label="Cerrar filtros"
        >
          <SvgChevronLeftIcon />
        </button>
        <HeaderTitle>Filtros</HeaderTitle>
      </div>

      {/* Contenido scrolleable */}
      <div className="flex-1 px-4 py-2 overflow-y-auto">
        <div className="flex justify-between mt-8">
          <HeaderTitle>Todos los filtros</HeaderTitle>
          <button onClick={handleClear}>
            <h3 className="text-base font-thin text-primaryBrand">Limpiar</h3>
          </button>
        </div>

        <DatesFilter />
        <CreditCardFilter />
        <InstallmentsFilter />
        <AmountFilter />
        <PaymentMethodsFilter />

        {/* Espacio para que no tape el botón al scrollear */}
        <div className="h-24" />
      </div>

      {/* Botón fijo con safe-area */}
      <div
        className="p-4 bg-white"
        // style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ButtonPrimary
          onClick={() => {
            applyFilters();
            setShowFilters(false);
          }}
        >
          Aplicar Filtros
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default FilterDrawer;
