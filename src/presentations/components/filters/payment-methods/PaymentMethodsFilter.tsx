import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Switch } from "@/components/ui/switch";
import SvgCloseIcon from "@/icons/icon-close";
import SvgPaymentMethodIcon from "@/icons/icon-paymentMethod";
import type { PaymentMethod } from "@/infrastructure/interfaces/paymentsApi";
import { METHOD_LABELS } from "@/infrastructure/mappers/paymentsMappers";
import { useTransactionStore } from "@/store/useTransactionStore";
import { useEffect, useState } from "react";

const METHOD_VALUES = Object.keys(METHOD_LABELS) as PaymentMethod[];
const PaymentMethodsFilter = () => {
  const { setFilters, filters } = useTransactionStore();
  const [isOpen, setIsOpen] = useState(Boolean(filters.paymentMethods?.length));
  const peymentMethods = filters.paymentMethods ?? [];

  const isChecked = (value: PaymentMethod) => peymentMethods.includes(value);

  const toggleMethod = (value: PaymentMethod) => {
    const isSelected = peymentMethods.includes(value);
    const updated = isSelected
      ? peymentMethods.filter((el) => el !== value)
      : [...peymentMethods, value];

    setFilters({ paymentMethods: updated });
  };

  const toggleAll = () => {
    const allSelected = peymentMethods.length === METHOD_VALUES.length;
    setFilters({ paymentMethods: allSelected ? [] : [...METHOD_VALUES] });
  };

  useEffect(() => {
    if (!filters.paymentMethods?.length) {
      setIsOpen(false);
    }
  }, [filters.paymentMethods]);

  const toggleCollapsible = () => setIsOpen((prev) => !prev);

  return (
    <Collapsible open={isOpen}>
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <SvgPaymentMethodIcon />
          <span className="text-sm font-semibold text-textDark">
            Métodos de cobro
          </span>
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
        <div className="relative w-full py-4">
          <ul className="flex flex-wrap gap-2 overflow-hidden">
            <li>
              <Button
                type="button"
                data-testid="todas-btn"
                variant={
                  peymentMethods.length === METHOD_VALUES.length
                    ? "chipFilterSlected"
                    : "chipFilter"
                }
                className="w-auto whitespace-nowrap"
                size="icon"
                onClick={toggleAll}
              >
                <div
                  className={`flex 
                   min-w-[53px]
                     items-center justify-center gap-1`}
                >
                  <h2>Todas</h2>
                  {peymentMethods.length === METHOD_VALUES.length && (
                    <SvgCloseIcon />
                  )}
                </div>
              </Button>
            </li>
            {METHOD_VALUES.map((value) => (
              <li key={value}>
                <Button
                  type="button"
                  data-testid={value}
                  variant={
                    isChecked(value) ? "chipFilterSlected" : "chipFilter"
                  }
                  className="w-auto capitalize whitespace-nowrap"
                  size="icon"
                  onClick={() => toggleMethod(value)}
                >
                  {METHOD_LABELS[value]}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default PaymentMethodsFilter;
