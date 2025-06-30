import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import SvgCreditCardIcon from "@/icons/icon-credit-card";
import { Switch } from "@/components/ui/switch";

import SvgCloseIcon from "@/icons/icon-close";
import { useTransactionStore } from "@/store/useTransactionStore";
import type { CardEnum } from "@/infrastructure/interfaces/paymentsApi";
import { CARDS_LABELS } from "@/infrastructure/mappers/paymentsMappers";
import { useEffect, useState } from "react";

const CARDS_VALUES = Object.keys(CARDS_LABELS) as CardEnum[];
const CreditCardFilter = () => {
  const { setFilters, filters } = useTransactionStore();

  const [isOpen, setIsOpen] = useState(Boolean(filters.cards?.length));

  const cards = filters.cards ?? [];

  const isChecked = (value: CardEnum) => cards.includes(value);

  const onToggleCard = (value: CardEnum) => {
    const isSelected = cards.includes(value);
    const updated = isSelected
      ? cards.filter((el) => el !== value)
      : [...cards, value];

    setFilters({ cards: updated });
  };

  const toggleAll = () => {
    const allSelected = cards.length === CARDS_VALUES.length;
    setFilters({ cards: allSelected ? [] : [...CARDS_VALUES] });
  };

  useEffect(() => {
    if (!filters.cards?.length) {
      setIsOpen(false);
    }
  }, [filters.cards]);

  const toggleCollapsible = () => setIsOpen((prev) => !prev);

  return (
    <Collapsible open={isOpen}>
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <SvgCreditCardIcon />
          <span className="text-sm font-semibold text-textDark">Tarjeta</span>
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
          <ul className="flex flex-wrap gap-2">
            <li>
              <Button
                type="button"
                variant={
                  cards.length === CARDS_VALUES.length
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
                  {cards.length === CARDS_VALUES.length && <SvgCloseIcon />}
                </div>
              </Button>
            </li>
            {CARDS_VALUES.map((card) => (
              <li key={card}>
                <Button
                  type="button"
                  variant={isChecked(card) ? "chipFilterSlected" : "chipFilter"}
                  className="w-auto capitalize whitespace-nowrap"
                  size="icon"
                  onClick={() => onToggleCard(card)}
                >
                  {CARDS_LABELS[card]}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CreditCardFilter;
