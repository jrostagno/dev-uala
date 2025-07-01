import { useMemo, useState } from "react";

import { useTransactionStore } from "@/store/useTransactionStore";

import SvgMetricasIcon from "../../../icons/icon-metricas";
import LinkWithIcon from "../ui/links/LinkWithIcon";
import HeaderTitle from "../ui/text/HeaderTitle";
import MainNumber from "./MainNumber";
import MainNumberSkeleton from "./MainNumberSkeleton";
import PeriodSelector from "./PeriodSelector";
import { matchByPeriod } from "./utils";

export type PeriodType = "DAILY" | "WEEKLY" | "MONTHLY";

const PaymentsBanner = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>("WEEKLY");

  const { transactions, loading } = useTransactionStore();

  const total = useMemo(() => {
    if (!transactions) return 0;

    return transactions
      .filter((tx) => matchByPeriod(tx.createdAt, selectedPeriod))
      .reduce((acc, tx) => acc + tx.amount, 0);
  }, [transactions, selectedPeriod]);

  return (
    <div className="flex flex-col pt-4">
      <HeaderTitle className="px-4 pb-4">Tus cobros</HeaderTitle>

      <PeriodSelector
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />

      {loading ? (
        <MainNumberSkeleton />
      ) : (
        <MainNumber className="mt-3" value={total} />
      )}

      <LinkWithIcon icon={<SvgMetricasIcon />} href="/metricas">
        ver metricas
      </LinkWithIcon>
    </div>
  );
};

export default PaymentsBanner;
