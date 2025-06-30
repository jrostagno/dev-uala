import SvgTransactionHistoryIcon from "../../../icons/icon-filter";
import SvgDownloadIcon from "../../../icons/icon-download";

import TransactionListItem from "./TransactionListItem";
import { useState } from "react";

import FilterDrawer from "../filters/FilterDrawer";
import { useTransactionStore } from "@/store/useTransactionStore";
import EmptyState from "../ui/EmptyState";
import TransactionListItemSkeleton from "./TransactionListItemSkeleton";

import DownloadDialog from "../download/DownloadDialog";

const TransactionHistory = () => {
  const { filtered, loading, error, filters } = useTransactionStore();
  const [showFilters, setShowFilters] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  //if (loading) return <TransactionListItemSkeleton />;
  if (error) return <p>Error al cargar transacciones</p>;

  console.log(filters);

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
      <div className="flex items-center justify-between px-2 py-4 shrink-0">
        <h3 className="text-sm font-semibold text-textDark">
          Historial de transacciones
        </h3>

        <div className="flex items-center justify-center gap-2">
          <SvgTransactionHistoryIcon onClick={() => setShowFilters(true)} />
          <SvgDownloadIcon onClick={() => setShowDownloadModal(true)} />
        </div>
      </div>

      {loading && (
        <div className="flex flex-col w-full gap-2">
          {new Array(10).fill(0).map((_, index) => (
            <TransactionListItemSkeleton key={index} />
          ))}
        </div>
      )}

      {filtered.length === 0 && <EmptyState />}
      <ul className="flex-1 pb-12 overflow-y-auto scrollbar-hide overscroll-none">
        {filtered &&
          filtered.length > 0 &&
          filtered.map((transaction) => (
            <TransactionListItem
              key={transaction.id}
              amount={transaction.amount}
              date={transaction.createdAt}
              paymentMethod={transaction.paymentMethod}
              card={transaction.card}
            />
          ))}
      </ul>

      <DownloadDialog
        setShowDownloadModal={setShowDownloadModal}
        showDownloadModal={showDownloadModal}
      />

      {showFilters && <FilterDrawer setShowFilters={setShowFilters} />}
    </div>
  );
};

export default TransactionHistory;
