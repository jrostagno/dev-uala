import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Switch } from "@/components/ui/switch";
import SvgPaymentMethodIcon from "@/icons/icon-paymentMethod";

import { useState } from "react";

interface PaymentFilter {
  paymentMethods: string[];
}
const PaymentMethodsFilter = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentFilter>({
    paymentMethods: [],
  });

  const onChange = (value: string) => {
    const isSelected = paymentMethods.paymentMethods.find(
      (install) => install === value
    );

    if (isSelected) {
      setPaymentMethods({
        ...paymentMethods,
        paymentMethods: paymentMethods.paymentMethods.filter(
          (el) => el !== value
        ),
      });
    }

    if (!isSelected) {
      setPaymentMethods({
        ...paymentMethods,
        paymentMethods: [...paymentMethods.paymentMethods, value],
      });
    }
  };

  const isChecked = (value: string) => {
    if (!paymentMethods.paymentMethods.length) return false;
    return paymentMethods.paymentMethods.includes(value);
  };

  return (
    <Collapsible>
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <SvgPaymentMethodIcon />
          <span className="text-sm font-semibold text-textDark">
            Métodos de cobro
          </span>
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
                  isChecked("link de pago") ? "chipFilterSlected" : "chipFilter"
                }
                className="w-auto whitespace-nowrap"
                size={"icon"}
                onClick={(e) => {
                  e.preventDefault();
                  onChange("link de pago");
                }}
              >
                Link de pago
              </Button>
            </li>
            <li>
              <Button
                type="button"
                variant={
                  isChecked("codigo QR") ? "chipFilterSlected" : "chipFilter"
                }
                className="w-auto whitespace-nowrap"
                size={"icon"}
                onClick={(e) => {
                  e.preventDefault();

                  onChange("codigo QR");
                }}
              >
                Código QR
              </Button>
            </li>
            <li>
              <Button
                type="button"
                variant={isChecked("mPOS") ? "chipFilterSlected" : "chipFilter"}
                className="w-auto whitespace-nowrap"
                size={"icon"}
                onClick={(e) => {
                  e.preventDefault();
                  onChange("mPOS");
                }}
              >
                mPOS
              </Button>
            </li>
            <li>
              <Button
                type="button"
                variant={
                  isChecked("POSpro") ? "chipFilterSlected" : "chipFilter"
                }
                className="w-auto whitespace-nowrap"
                size={"icon"}
                onClick={(e) => {
                  e.preventDefault();
                  onChange("POSpro");
                }}
              >
                POSpro
              </Button>
            </li>
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default PaymentMethodsFilter;
