import { useState } from "react";
import SvgMetricasIcon from "../../../icons/icon-metricas";
import PeriodSelector from "./PeriodSelector";

import MainNumber from "./MainNumber";
import HeaderTitle from "../ui/text/HeaderTitle";
import LinkWithIcon from "../ui/links/LinkWithIcon";

export type PeriodType = "DAILY" | "WEEKLY" | "MONTHLY";

const PaymentsBanner = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>("WEEKLY");

  return (
    <div className="flex flex-col py-4 border">
      <HeaderTitle>Tus cobros</HeaderTitle>

      <PeriodSelector
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />

      <MainNumber value={25000} />

      <LinkWithIcon icon={<SvgMetricasIcon />} path="">
        ver metricas
      </LinkWithIcon>
    </div>
  );
};

export default PaymentsBanner;
