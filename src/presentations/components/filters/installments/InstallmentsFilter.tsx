import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import SvgQuotasIcon from "@/icons/icon-quotas";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

interface InstallFilter {
  install: string[];
}
const InstallmentsFilter = () => {
  const [installementSelected, setInstallmentsSelected] =
    useState<InstallFilter>({ install: [] });

  const onInstallmentchange = (value: string) => {
    const isInstallSelected = installementSelected.install.find(
      (install) => install === value
    );

    if (isInstallSelected) {
      setInstallmentsSelected({
        ...installementSelected,
        install: installementSelected.install.filter((el) => el !== value),
      });
    }

    if (!isInstallSelected) {
      setInstallmentsSelected({
        ...installementSelected,
        install: [...installementSelected.install, value],
      });
    }
  };

  const isChecked = (value: string) => {
    if (!installementSelected.install.length) return false;
    return installementSelected.install.includes(value);
  };

  return (
    <Collapsible>
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <SvgQuotasIcon />
          <span className="text-sm font-semibold text-textDark">Coutas</span>
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
                  onInstallmentchange("todas");
                }}
              >
                todas
              </Button>
            </li>
            <li>
              <Button
                type="button"
                variant={isChecked("1") ? "chipFilterSlected" : "chipFilter"}
                className="w-auto whitespace-nowrap"
                size={"icon"}
                onClick={(e) => {
                  e.preventDefault();
                  onInstallmentchange("1");
                }}
              >
                1
              </Button>
            </li>
            <li>
              <Button
                type="button"
                variant={isChecked("2") ? "chipFilterSlected" : "chipFilter"}
                className="w-auto whitespace-nowrap"
                size={"icon"}
                onClick={(e) => {
                  e.preventDefault();
                  onInstallmentchange("2");
                }}
              >
                2
              </Button>
            </li>
            <li>
              <Button
                type="button"
                variant={isChecked("3") ? "chipFilterSlected" : "chipFilter"}
                className="w-auto whitespace-nowrap"
                size={"icon"}
                onClick={(e) => {
                  e.preventDefault();
                  onInstallmentchange("3");
                }}
              >
                3
              </Button>
            </li>
            <li>
              <Button
                type="button"
                variant={isChecked("6") ? "chipFilterSlected" : "chipFilter"}
                className="w-auto whitespace-nowrap"
                size={"icon"}
                onClick={(e) => {
                  e.preventDefault();
                  onInstallmentchange("6");
                }}
              >
                6
              </Button>
            </li>
            <li>
              <Button
                type="button"
                variant={isChecked("12") ? "chipFilterSlected" : "chipFilter"}
                className="w-auto whitespace-nowrap"
                size={"icon"}
                onClick={(e) => {
                  e.preventDefault();
                  onInstallmentchange("12");
                }}
              >
                12
              </Button>
            </li>
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default InstallmentsFilter;
