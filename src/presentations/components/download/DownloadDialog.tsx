import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SvgCalendarDowloadIcon from "@/icons/icon-calendar-download";
import { useTransactionStore } from "@/store/useTransactionStore";

import { generateAndDownloadPDF } from "./utils";

interface DownloadDialogProps {
  showDownloadModal: boolean;
  setShowDownloadModal: (value: boolean) => void;
}

const DownloadDialog = (props: DownloadDialogProps) => {
  const { showDownloadModal, setShowDownloadModal } = props;
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const { transactions } = useTransactionStore();

  const handleDownload = async () => {
    if (!dateRange?.from || !dateRange?.to) return;

    const from = new Date(dateRange.from);
    const to = new Date(new Date(dateRange.to).setHours(23, 59, 59, 999));

    const filtered = transactions.filter((tx) => {
      const date = new Date(tx.createdAt);
      return date >= from && date <= to;
    });

    if (filtered.length === 0) {
      toast("No hay movimientos en las fechas seleccionadas para descargar");
      setShowDownloadModal(false);
      return;
    }

    await generateAndDownloadPDF(filtered, from, to);
    setShowDownloadModal(false);
  };

  return (
    <Dialog open={showDownloadModal}>
      <DialogContent className="w-[90%] rounded-md">
        <div className="relative flex flex-col items-center justify-center w-full">
          <div className="flex items-center gap-2 px-1">
            <SvgCalendarDowloadIcon />
            <h2 className="text-base font-semibold text-textDark">
              Elegí las fechas que querés descargar
            </h2>
          </div>

          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={1}
            className="w-full rounded-lg "
          />

          <div className="flex self-end gap-4 mt-9">
            <Button
              onClick={() => setShowDownloadModal(false)}
              variant="outline"
            >
              Cerrar
            </Button>
            <Button onClick={handleDownload} variant="default">
              Descargar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDialog;
