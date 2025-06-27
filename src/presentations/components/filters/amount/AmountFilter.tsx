import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Slider } from "@/components/ui/slider";
import SvgAmountIcon from "@/icons/icon-amount";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const AmountFilter = () => {
  const [range, setRange] = useState([100, 750]); // valores iniciales

  const min = 10;
  const max = 1000;

  const getPercentage = (value: number) => ((value - min) / (max - min)) * 100;

  return (
    <>
      <Collapsible>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <SvgAmountIcon />
            <span className="text-sm font-semibold text-textDark">Monto</span>
          </div>
          <CollapsibleTrigger>
            <Switch id="airplane-mode" />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="relative w-full py-4 mb-4 mt-9">
            <Slider
              defaultValue={[100, 750]}
              min={10}
              max={1000}
              //step={1}
              value={range}
              onValueChange={(val) => setRange(val)}
              step={1}
              //minStepsBetweenThumbs={1}
            />

            {/* Label flotante del primer thumb */}
            <div
              className="absolute px-2 py-1 text-xs font-thin transform -translate-x-1/2 bg-white -top-4 text-primaryBrand"
              style={{ left: `calc(${getPercentage(range[0])}% + 10px)` }}
            >
              ${range[0]}
            </div>

            {/* Label flotante del segundo thumb */}
            <div
              className="absolute px-2 py-1 text-xs font-thin transform -translate-x-1/2 bg-white -top-4 text-primaryBrand"
              style={{ left: `calc(${getPercentage(range[1])}% - 10px)` }}
            >
              ${range[1]}
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex flex-col items-center justify-center px-4 py-1 border rounded-[8px] border-primaryBrand">
                <span className="text-[10px] font-thin text-textNeutral">
                  Monto mínimo
                </span>
                <strong className="self-start text-sm font-normal text-textDark">
                  $10
                </strong>
              </div>

              <div className="flex flex-col items-center justify-center px-4 py-1 border rounded-[8px] border-primaryBrand">
                <span className="text-[10px] font-thin text-textNeutral">
                  Monto máximo
                </span>
                <strong className="self-start text-sm font-normal text-textDark">
                  $1000
                </strong>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default AmountFilter;
