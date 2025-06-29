import { Calendar } from "@/components/ui/calendar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Switch } from "@/components/ui/switch";
import SvgCalendarIcon from "@/icons/icon-calendar";
import { useTransactionStore } from "@/store/useTransactionStore";
import { useEffect, useState } from "react";
import type { DateRange } from "react-day-picker";

const DatesFilter = () => {
  const { setFilters, filters } = useTransactionStore();

  const [date, setDate] = useState<DateRange | undefined>(() => ({
    from: filters.fromDate ? new Date(filters.fromDate) : undefined,
    to: filters.toDate ? new Date(filters.toDate) : undefined,
  }));

  //  const isActive = Boolean(filters.fromDate || filters.toDate);

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
      <CollapsibleContent>
        <div className="relative flex justify-center w-full py-4 mt-4 mb-4">
          <Calendar
            mode="range"
            selected={date}
            onSelect={handleSelection}
            numberOfMonths={1}
            className="border rounded-lg shadow-sm"
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default DatesFilter;
