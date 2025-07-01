import type { Dispatch, SetStateAction } from "react";

import type { PeriodType } from "./PaymentsBanner";

interface PeriodSelectorProps {
  setSelectedPeriod: Dispatch<SetStateAction<PeriodType>>;
  selectedPeriod: string;
}

interface PeriodOptionProps {
  label: string;
  value: PeriodType;
  isSelected: boolean;
  onSelect: () => void;
}

const PeriodOption = ({ label, isSelected, onSelect }: PeriodOptionProps) => (
  <div
    onClick={onSelect}
    className="flex flex-col items-center justify-center w-24 gap-2 px-4 py-2 cursor-pointer"
  >
    <span
      className={`text-sm leading-4 ${
        isSelected ? "font-semibold" : "font-normal"
      } text-textGray font-sans`}
    >
      {label}
    </span>
    <div
      className={`w-2 h-2 rounded-full bg-blue ${isSelected ? "" : "hidden"}`}
    />
  </div>
);

const PeriodSelector = ({
  setSelectedPeriod,
  selectedPeriod,
}: PeriodSelectorProps) => {
  const options: { label: string; value: PeriodType }[] = [
    { label: "Diario", value: "DAILY" },
    { label: "Semanal", value: "WEEKLY" },
    { label: "Mensual", value: "MONTHLY" },
  ];

  return (
    <div className="flex justify-between w-full gap-2">
      {options.map(({ label, value }) => (
        <PeriodOption
          key={value}
          label={label}
          value={value}
          isSelected={selectedPeriod === value}
          onSelect={() => setSelectedPeriod(value)}
        />
      ))}
    </div>
  );
};

export default PeriodSelector;
