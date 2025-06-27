import SvgTransactionHistoryIcon from "../../../icons/icon-filter";
import SvgDownloadIcon from "../../../icons/icon-download";

import TransactionListItem from "./TransactionListItem";
import { useState } from "react";

import FilterDrawer from "../filters/FilterDrawer";

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
  { id: 15, transactionType: "venta", amount: 34343, date: "12/06/89" },
  { id: 63, transactionType: "venta", amount: 34343, date: "12/06/89" },
  { id: 73, transactionType: "ventaPETE", amount: 34343, date: "12/06/89" },
  { id: 83, transactionType: "venta", amount: 34343, date: "12/06/89" },
  { id: 39, transactionType: "ventaY", amount: 34343, date: "12/06/89" },
];

const TransactionHistory = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
      <div className="flex items-center justify-between px-2 py-4 shrink-0">
        <h3 className="text-sm font-semibold text-textDark">
          Historial de transacciones
        </h3>

        <div className="flex items-center justify-center gap-2">
          <SvgTransactionHistoryIcon onClick={() => setShowFilters(true)} />
          <SvgDownloadIcon />
        </div>
      </div>

      <ul className="flex-1 pb-12 overflow-y-auto overscroll-none">
        {transactions.map((transaction) => (
          <TransactionListItem
            key={transaction.id}
            transactionType={transaction.transactionType}
            amount={transaction.amount}
            date={transaction.date}
          />
        ))}
      </ul>

      {showFilters && <FilterDrawer setShowFilters={setShowFilters} />}
    </div>
  );
};

export default TransactionHistory;
