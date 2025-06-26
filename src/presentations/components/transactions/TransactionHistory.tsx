import SvgTransactionHistoryIcon from "../../../icons/icon-filter";
import SvgDownloadIcon from "../../../icons/icon-download";

import TransactionListItem from "./TransactionListItem";

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
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="flex x-2 py-4 items-center justify-between">
        <h3 className="font-semibold text-sm  text-textDark">
          Historial de transacciones
        </h3>

        <div className="flex gap-2 items-center justify-center">
          <SvgTransactionHistoryIcon />
          <SvgDownloadIcon />
        </div>
      </div>

      <ul className="flex-1  overflow-y-auto overscroll-none">
        {transactions.map((transaction) => (
          <TransactionListItem
            key={transaction.id}
            transactionType={transaction.transactionType}
            amount={transaction.amount}
            date={transaction.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
