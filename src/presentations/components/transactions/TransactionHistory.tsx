import { useState } from "react";

import { useTransactionStore } from "@/store/useTransactionStore";

import SvgDownloadIcon from "../../../icons/icon-download";
import SvgTransactionHistoryIcon from "../../../icons/icon-filter";
import DownloadDialog from "../download/DownloadDialog";
import FilterDrawer from "../filters/FilterDrawer";
import EmptyState from "../ui/EmptyState";
import TransactionListItem from "./TransactionListItem";
import TransactionListItemSkeleton from "./TransactionListItemSkeleton";

const TransactionHistory = () => {
  const { filtered, loading } = useTransactionStore();
  const [showFilters, setShowFilters] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
      <div className="flex items-center justify-between px-2 py-4 shrink-0">
        <h3 className="text-sm font-semibold text-textDark">
          Historial de transacciones
        </h3>

        <div className="flex items-center justify-center gap-2">
          <button
            data-testid="filter-icon"
            onClick={() => setShowFilters(true)}
          >
            <SvgTransactionHistoryIcon onClick={() => setShowFilters(true)} />
          </button>
          <button
            data-testid="download-icon"
            onClick={() => setShowDownloadModal(true)}
          >
            <SvgDownloadIcon onClick={() => setShowDownloadModal(true)} />
          </button>
        </div>
      </div>

      {loading && (
        <div className="flex flex-col w-full gap-2">
          {new Array(10).fill(0).map((_, index) => (
            <TransactionListItemSkeleton key={index} />
          ))}
        </div>
      )}

      {filtered.length === 0 && <EmptyState className="mt-4" />}
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
