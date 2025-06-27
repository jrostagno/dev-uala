import { Calendar } from "@/components/ui/calendar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Switch } from "@/components/ui/switch";
import SvgCalendarIcon from "@/icons/icon-calendar";

const DatesFilter = () => {
  return (
    <Collapsible>
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <SvgCalendarIcon />
          <span className="text-sm font-semibold text-textDark">Fecha</span>
        </div>

        <CollapsibleTrigger>
          <Switch id="airplane-mode" />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="relative flex justify-center w-full py-4 mt-4 mb-4">
          <Calendar
            mode="range"
            defaultMonth={new Date(2025, 5, 12)}
            numberOfMonths={1}
            selected={new Date(2025, 5, 12)}
            className="border rounded-lg shadow-sm"
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default DatesFilter;
