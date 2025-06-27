import SvgTransactionHistoryIcon from "../../../icons/icon-filter";
import SvgDownloadIcon from "../../../icons/icon-download";

import TransactionListItem from "./TransactionListItem";
import { useState } from "react";

import HeaderTitle from "../ui/text/HeaderTitle";
import SvgChevronLeftIcon from "../../../icons/icon-chevron-left";
import { ButtonPrimary } from "../ui/buttons/Buttons";
import { Switch } from "../../../components/ui/switch";

import { Slider } from "../../../components/ui/slider";

import SvgCalendarIcon from "@/icons/icon-calendar";
import SvgCreditCardIcon from "@/icons/icon-credit-card";
import SvgAmountIcon from "@/icons/icon-amount";
import SvgQuotasIcon from "@/icons/icon-quotas";
import SvgPaymentMethodIcon from "@/icons/icon-paymentMethod";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
// import { Calendar } from "../../../components/ui/calendar";

const transactions = [
  { id: 1, transactionType: "venta", amount: 34343, date: "12/06/89" },
  { id: 2, transactionType: "venta", amount: 34343, date: "12/06/89" },
  { id: 3, transactionType: "venta", amount: 34343, date: "12/06/89" },
  { id: 4, transactionType: "venta", amount: 34343, date: "12/06/89" },
  { id: 5, transactionType: "venta", amount: 34343, date: "12/06/89" },
  { id: 6, transactionType: "venta", amount: 34343, date: "12/06/89" },
  { id: 7, transactionType: "ventaP", amount: 34343, date: "12/06/89" },
  { id: 8, transactionType: "venta", amount: 34343, date: "12/06/89" },
  { id: 9, transactionType: "ventaY", amount: 34343, date: "12/06/89" },
];
const TransactionHistory = () => {
  const [showFilters, setShowFilters] = useState(false);

  const [range, setRange] = useState([100, 750]); // valores iniciales

  const min = 10;
  const max = 1000;

  const getPercentage = (value: number) => ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="flex items-center justify-between px-2 py-4">
        <h3 className="text-sm font-semibold text-textDark">
          Historial de transacciones
        </h3>

        <div className="flex items-center justify-center gap-2">
          <SvgTransactionHistoryIcon onClick={() => setShowFilters(true)} />
          <SvgDownloadIcon />
        </div>
      </div>

      <ul className="flex-1 overflow-y-auto overscroll-none">
        {transactions.map((transaction) => (
          <TransactionListItem
            key={transaction.id}
            transactionType={transaction.transactionType}
            amount={transaction.amount}
            date={transaction.date}
          />
        ))}
      </ul>

      {showFilters && (
        <div className="absolute inset-0 z-50 flex flex-col bg-white animate-slide-up">
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
          <div className="flex-1 px-4 py-2 overflow-y-auto border">
            <div className="flex justify-between mt-8">
              <HeaderTitle> Todos los filtros</HeaderTitle>
              <h3 className="text-base font-thin text-primaryBrand">Filter</h3>
            </div>
            <div className="flex items-center justify-between py-3 border">
              <div className="flex items-center gap-2">
                <SvgCalendarIcon />
                <span className="text-sm font-semibold text-textDark">
                  Fecha
                </span>
              </div>
              <Switch id="airplane-mode" />
            </div>
            <div className="flex items-center justify-between py-3 border">
              <div className="flex items-center gap-2">
                <SvgCreditCardIcon />
                <span className="text-sm font-semibold text-textDark">
                  Tarjeta
                </span>
              </div>
              <Switch id="airplane-mode" />
            </div>

            <Collapsible>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2">
                  <SvgAmountIcon />
                  <span className="text-sm font-semibold text-textDark">
                    Monto
                  </span>
                </div>
                <CollapsibleTrigger>
                  <Switch id="airplane-mode" />
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <div className="relative w-full py-4 mb-4 mt-9">
                  <Slider
                    defaultValue={[100, 750]}
                    min={10}
                    max={1000}
                    //step={1}
                    value={range}
                    onValueChange={(val) => setRange(val)}
                    step={1}
                    //minStepsBetweenThumbs={1}
                  />

                  {/* Label flotante del primer thumb */}
                  <div
                    className="absolute px-2 py-1 text-xs font-thin transform -translate-x-1/2 bg-white -top-4 text-primaryBrand"
                    style={{ left: `calc(${getPercentage(range[0])}% + 10px)` }}
                  >
                    ${range[0]}
                  </div>

                  {/* Label flotante del segundo thumb */}
                  <div
                    className="absolute px-2 py-1 text-xs font-thin transform -translate-x-1/2 bg-white -top-4 text-primaryBrand"
                    style={{ left: `calc(${getPercentage(range[1])}% - 10px)` }}
                  >
                    ${range[1]}
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex flex-col items-center justify-center px-4 py-1 border rounded-[8px] border-primaryBrand">
                      <span className="text-[10px] font-thin text-textNeutral">
                        Monto mínimo
                      </span>
                      <strong className="self-start text-sm font-normal text-textDark">
                        $10
                      </strong>
                    </div>

                    <div className="flex flex-col items-center justify-center px-4 py-1 border rounded-[8px] border-primaryBrand">
                      <span className="text-[10px] font-thin text-textNeutral">
                        Monto máximo
                      </span>
                      <strong className="self-start text-sm font-normal text-textDark">
                        $1000
                      </strong>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <div className="flex items-center justify-between py-3 border">
              <div className="flex items-center gap-2">
                <SvgQuotasIcon />
                <span className="text-sm font-semibold text-textDark">
                  Coutas
                </span>
              </div>
              <Switch id="airplane-mode" />
            </div>
            <div className="flex items-center justify-between py-3 border">
              <div className="flex items-center gap-2">
                <SvgPaymentMethodIcon />
                <span className="text-sm font-semibold text-textDark">
                  Métodos de cobro
                </span>
              </div>
              <Switch id="airplane-mode" />
            </div>

            <div className="flex items-center space-x-2">
              {/* <Switch id="airplane-mode" /> */}

              {/* <Calendar
                mode="range"
                defaultMonth={new Date(2025, 5, 12)}
                numberOfMonths={1}
                selected={new Date(2025, 5, 12)}
                className="border rounded-lg shadow-sm"
              /> */}
            </div>
            {/* Aquí van los campos de filtro */}
            {/* <FiltroFecha />
            <FiltroMont />
            <FiltroTipoPago /> */}
          </div>

          {/* Botón fijo abajo */}
          <div className="p-4 border-t border-gray-200">
            <ButtonPrimary
              onClick={() => {
                // aplicar filtros
                setShowFilters(false);
              }}
            >
              Aplicar Filtros
            </ButtonPrimary>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
