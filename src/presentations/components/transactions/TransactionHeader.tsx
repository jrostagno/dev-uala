import React from "react";

import SvgDownloadIcon from "@/icons/icon-download";
import SvgTransactionHistoryIcon from "@/icons/icon-filter";

interface TransactionHeaderProps {
  setShowFilters: (value: boolean) => void;
  setShowDownloadModal: (value: boolean) => void;
}

const TransactionHeader = (props: TransactionHeaderProps) => {
  const { setShowDownloadModal, setShowFilters } = props;
  return (
    <div className="flex items-center justify-between px-2 py-4 shrink-0">
      <h3 className="text-sm font-semibold text-textDark">
        Historial de transacciones
      </h3>

      <div className="flex items-center justify-center gap-2">
        <button data-testid="filter-icon" onClick={() => setShowFilters(true)}>
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
  );
};

export default TransactionHeader;
