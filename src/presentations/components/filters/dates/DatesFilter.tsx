import { es } from "date-fns/locale";
import { useEffect, useState } from "react";
import type { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Switch } from "@/components/ui/switch";
import SvgCalendarIcon from "@/icons/icon-calendar";
import { useTransactionStore } from "@/store/useTransactionStore";

const DatesFilter = () => {
  const { setFilters, filters } = useTransactionStore();

  const [date, setDate] = useState<DateRange | undefined>(() => ({
    from: filters.fromDate ? new Date(filters.fromDate) : undefined,
    to: filters.toDate ? new Date(filters.toDate) : undefined,
  }));

  const [isOpen, setIsOpen] = useState(
    Boolean(filters.fromDate || filters.toDate)
  );

  const handleSelection = (val: DateRange | undefined) => {
    setDate(val);

    if (val?.from || val?.to) {
      setFilters({
        fromDate: val?.from?.toISOString().split("T")[0],
        toDate: val?.to?.toISOString().split("T")[0],
      });
    } else {
      setFilters({ fromDate: undefined, toDate: undefined });
    }
  };

  useEffect(() => {
    if (!filters.fromDate) {
      setDate({ from: undefined, to: undefined });
      setIsOpen(false);
    }
  }, [filters.fromDate]);

  const toggleCollapsible = () => setIsOpen((prev) => !prev);
  return (
    <Collapsible open={isOpen}>
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <SvgCalendarIcon />
          <span className="text-sm font-semibold text-textDark">Fecha</span>
        </div>

        <CollapsibleTrigger>
          <Switch
            id="date-filter-switch"
            checked={isOpen}
            onCheckedChange={toggleCollapsible}
          />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="py-1">
        <div className="relative flex flex-col items-center justify-center py-2 m-auto max-w-[280px] mt-0 mb-0 bg-white rounded-md">
          <Calendar
            mode="range"
            selected={date}
            locale={es}
            onSelect={handleSelection}
            numberOfMonths={1}
            className="py-0"
          />

          <div className="self-end mr-[30px]">
            <Button
              className="mt-2 mb-3"
              data-testid="borrar-btn"
              disabled={!date?.from && !date?.to}
              onClick={() => {
                setDate({ from: undefined, to: undefined });
                setFilters({ fromDate: undefined, toDate: undefined });
              }}
              variant="outline"
            >
              Borrar
            </Button>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default DatesFilter;
