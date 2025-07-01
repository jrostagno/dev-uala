import { useState } from "react";

import { useTransactionStore } from "@/store/useTransactionStore";

import DownloadDialog from "../download/DownloadDialog";
import FilterDrawer from "../filters/FilterDrawer";
import EmptyState from "../ui/EmptyState";
import TransactionHeader from "./TransactionHeader";
import TransactionListItem from "./TransactionListItem";
import TransactionListItemSkeleton from "./TransactionListItemSkeleton";

const TransactionHistory = () => {
  const { filtered, loading } = useTransactionStore();
  const [showFilters, setShowFilters] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
      <TransactionHeader
        setShowDownloadModal={setShowDownloadModal}
        setShowFilters={setShowFilters}
      />

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
