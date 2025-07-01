import { useEffect, useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import SvgAmountIcon from "@/icons/icon-amount";
import { useTransactionStore } from "@/store/useTransactionStore";

import AmountBox from "./AmountBox";
const MIN = 0;
const MAX = 2000;

const AmountFilter = () => {
  const { setFilters, filters } = useTransactionStore();
  const [isOpen, setIsOpen] = useState(
    Boolean(filters.maxAmount || filters.minAmount)
  );
  const [range, setRange] = useState<[number, number]>([
    filters.minAmount || 10,
    filters.maxAmount || 2000,
  ]);

  const getPercentage = (value: number) => ((value - MIN) / (MAX - MIN)) * 100;

  const onValueChange = (val: [number, number]) => {
    setRange(val);

    setFilters({
      ...filters,
      minAmount: val[0],
      maxAmount: val[1],
    });
  };

  useEffect(() => {
    if (Object.entries(filters).length === 0) {
      setIsOpen(false);
      setRange([0, 2000]);
    }
  }, [filters]);

  const toggleCollapsible = () => setIsOpen((prev) => !prev);

  return (
    <>
      <Collapsible open={isOpen}>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <SvgAmountIcon />
            <span className="text-sm font-semibold text-textDark">Monto</span>
          </div>
          <CollapsibleTrigger>
            <Switch
              id="airplane-mode"
              onCheckedChange={toggleCollapsible}
              checked={isOpen}
            />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="relative w-full py-4 mt-7">
            <Slider
              data-testid="slider"
              defaultValue={[filters.minAmount || 0, filters.maxAmount || 2000]}
              min={MIN}
              max={MAX}
              step={1}
              value={range}
              onValueChange={onValueChange}
            />

            {/* Label flotante del primer thumb */}
            <div
              className={`absolute px-2 py-1 text-xs font-thin ${
                range[1] - range[0] < 300 ? "hidden" : ""
              } transform -translate-x-1/2 bg-gray-extraLight -top-4 text-primaryBrand`}
              style={{ left: `calc(${getPercentage(range[0])}% + 10px)` }}
            >
              ${range[0]}
            </div>

            {/* Label flotante del segundo thumb */}
            <div
              className="absolute px-2 py-1 text-xs font-thin transform -translate-x-1/2 bg-gray-extraLight -top-4 text-primaryBrand"
              style={{ left: `calc(${getPercentage(range[1])}% - 10px)` }}
            >
              ${range[1]}
            </div>

            <div className="flex items-center justify-between mt-4">
              <AmountBox label="Monto mínimo" amount={range[0]} />
              <AmountBox label="Monto máximo" amount={range[1]} />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default AmountFilter;
