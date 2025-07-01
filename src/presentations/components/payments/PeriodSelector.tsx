import type { Dispatch, SetStateAction } from "react";

import type { PeriodType } from "./PaymentsBanner";

interface PeriodSelectorProps {
  setSelectedPeriod: Dispatch<SetStateAction<PeriodType>>;
  selectedPeriod: string;
}

const PeriodSelector = (props: PeriodSelectorProps) => {
  const { setSelectedPeriod, selectedPeriod } = props;
  return (
    <div className="flex  gap-2 w-full justify-between">
      <div
        onClick={() => setSelectedPeriod("DAILY")}
        className="flex items-center justify-center w-24 flex-col gap-2 py-2 px-4"
      >
        <span
          className={`text-sm leading-4 ${
            selectedPeriod === "DAILY" ? "font-semibold" : "font-normal"
          } text-textGray font-sans`}
        >
          Diario
        </span>
        <div
          className={`w-2 h-2  ${
            selectedPeriod === "DAILY" ? "" : "hidden"
          } rounded-full bg-blue`}
        />
      </div>

      <div
        onClick={() => setSelectedPeriod("WEEKLY")}
        className="flex items-center justify-center w-24 flex-col gap-2 py-2 px-4"
      >
        <span
          className={`text-sm leading-4 ${
            selectedPeriod === "WEEKLY" ? "font-semibold" : "font-normal"
          }  text-textGray font-sans`}
        >
          Semanal
        </span>
        <div
          className={`w-2 h-2  ${
            selectedPeriod === "WEEKLY" ? "" : "hidden"
          } rounded-full bg-blue`}
        />
      </div>

      <div
        onClick={() => setSelectedPeriod("MONTHLY")}
        className="flex items-center justify-center w-24 flex-col gap-2 py-2 px-4"
      >
        <span
          className={`text-sm leading-4 ${
            selectedPeriod === "MONTHLY" ? "font-semibold" : "font-normal"
          }  text-textGray font-sans`}
        >
          Mensual
        </span>
        <div
          className={`w-2 h-2  ${
            selectedPeriod === "MONTHLY" ? "" : "hidden"
          } rounded-full bg-blue`}
        />
      </div>
    </div>
  );
};

export default PeriodSelector;
