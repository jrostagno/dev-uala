import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import SvgCreditCardIcon from "@/icons/icon-credit-card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

interface CreditCardsFilter {
  creditsCards: string[];
}
const CreditCardFilter = () => {
  const [creditsCardsSelected, setCreditsCardsSelected] =
    useState<CreditCardsFilter>({
      creditsCards: [],
    });

  const onChange = (value: string) => {
    const isSelected = creditsCardsSelected.creditsCards.find(
      (install) => install === value
    );

    if (isSelected) {
      setCreditsCardsSelected({
        ...creditsCardsSelected,
        creditsCards: creditsCardsSelected.creditsCards.filter(
          (el) => el !== value
        ),
      });
    }

    if (!isSelected) {
      setCreditsCardsSelected({
        ...creditsCardsSelected,
        creditsCards: [...creditsCardsSelected.creditsCards, value],
      });
    }
  };

  const isChecked = (value: string) => {
    if (!creditsCardsSelected.creditsCards.length) return false;
    return creditsCardsSelected.creditsCards.includes(value);
  };

  return (
    <Collapsible>
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <SvgCreditCardIcon />
          <span className="text-sm font-semibold text-textDark">Tarjeta</span>
        </div>

        <CollapsibleTrigger>
          <Switch id="airplane-mode" />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="relative w-full py-4 mt-4 mb-4">
          <ul className="flex flex-wrap gap-2 overflow-hidde">
            <li>
              <Button
                type="button"
                variant={
                  isChecked("todas") ? "chipFilterSlected" : "chipFilter"
                }
                className="w-auto whitespace-nowrap"
                size={"icon"}
                onClick={(e) => {
                  e.preventDefault();
                  onChange("todas");
                }}
              >
                Todas
              </Button>
            </li>
            <li>
              <Button
                type="button"
                variant={isChecked("visa") ? "chipFilterSlected" : "chipFilter"}
                className="w-auto whitespace-nowrap"
                size={"icon"}
                onClick={(e) => {
                  e.preventDefault();

                  onChange("visa");
                }}
              >
                Visa
              </Button>
            </li>
            <li>
              <Button
                type="button"
                variant={
                  isChecked("mastercard") ? "chipFilterSlected" : "chipFilter"
                }
                className="w-auto whitespace-nowrap"
                size={"icon"}
                onClick={(e) => {
                  e.preventDefault();
                  onChange("mastercard");
                }}
              >
                Mastercard
              </Button>
            </li>
            <li>
              <Button
                type="button"
                variant={isChecked("amex") ? "chipFilterSlected" : "chipFilter"}
                className="w-auto whitespace-nowrap"
                size={"icon"}
                onClick={(e) => {
                  e.preventDefault();
                  onChange("amex");
                }}
              >
                Amex
              </Button>
            </li>
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CreditCardFilter;
