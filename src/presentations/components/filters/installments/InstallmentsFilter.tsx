import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Switch } from "@/components/ui/switch";
import SvgCloseIcon from "@/icons/icon-close";
import SvgQuotasIcon from "@/icons/icon-quotas";
import { useTransactionStore } from "@/store/useTransactionStore";

// Opciones de cuotas disponibles
const INSTALLMENT_OPTIONS = [1, 2, 3, 6, 12];

const InstallmentsFilter = () => {
  const { setFilters, filters } = useTransactionStore();
  const [isOpen, setIsOpen] = useState(Boolean(filters.installments?.length));
  const installments = filters.installments ?? [];

  const isChecked = (value: number) => installments.includes(value);

  const onToggleInstallment = (value: number) => {
    const isSelected = installments.includes(value);
    const updated = isSelected
      ? installments.filter((el) => el !== value)
      : [...installments, value];

    setFilters({ installments: updated });
  };

  const toggleAll = () => {
    const allSelected = installments.length === INSTALLMENT_OPTIONS.length;
    setFilters({ installments: allSelected ? [] : [...INSTALLMENT_OPTIONS] });
  };

  useEffect(() => {
    if (!filters.installments?.length) {
      setIsOpen(false);
    }
  }, [filters.installments]);

  const toggleCollapsible = () => setIsOpen((prev) => !prev);

  return (
    <Collapsible open={isOpen}>
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <SvgQuotasIcon />
          <span className="text-sm font-semibold text-textDark">Cuotas</span>
        </div>
        <CollapsibleTrigger>
          <Switch
            id="installments-switch"
            onCheckedChange={toggleCollapsible}
            checked={isOpen}
          />
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent>
        <ul className="flex flex-wrap gap-2 py-4">
          <li>
            <Button
              type="button"
              data-testid="todas-btn"
              variant={
                installments.length === INSTALLMENT_OPTIONS.length
                  ? "chipFilterSlected"
                  : "chipFilter"
              }
              className="w-auto whitespace-nowrap"
              size="icon"
              onClick={toggleAll}
            >
              <div className="flex min-w-[53px] items-center justify-center gap-1">
                <h2>Todas</h2>
                {installments.length === INSTALLMENT_OPTIONS.length && (
                  <SvgCloseIcon />
                )}
              </div>
            </Button>
          </li>

          {INSTALLMENT_OPTIONS.map((installment) => (
            <li key={installment}>
              <Button
                type="button"
                data-testid={installment}
                variant={
                  isChecked(installment) ? "chipFilterSlected" : "chipFilter"
                }
                className="w-auto capitalize whitespace-nowrap"
                size="icon"
                onClick={() => onToggleInstallment(installment)}
              >
                {installment}
              </Button>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default InstallmentsFilter;
