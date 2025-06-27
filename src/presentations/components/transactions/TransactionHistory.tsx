import SvgTransactionHistoryIcon from "../../../icons/icon-filter";
import SvgDownloadIcon from "../../../icons/icon-download";

import TransactionListItem from "./TransactionListItem";
import { useState } from "react";

import HeaderTitle from "../ui/text/HeaderTitle";
import SvgChevronLeftIcon from "../../../icons/icon-chevron-left";
import { ButtonPrimary } from "../ui/buttons/Buttons";

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
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="flex items-center justify-between py-4 x-2">
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
          <div className="flex-1 px-4 py-2 space-y-6 overflow-y-auto">
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
