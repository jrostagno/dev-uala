import { useMemo, useState } from "react";
import {
  differenceInCalendarDays,
  startOfDay,
  startOfWeek,
  startOfMonth,
  isAfter,
} from "date-fns";
import SvgMetricasIcon from "../../../icons/icon-metricas";
import PeriodSelector from "./PeriodSelector";

import MainNumber from "./MainNumber";
import HeaderTitle from "../ui/text/HeaderTitle";
import LinkWithIcon from "../ui/links/LinkWithIcon";
import { useTransactionStore } from "@/store/useTransactionStore";
import MainNumberSkeleton from "./MainNumberSkeleton";

export type PeriodType = "DAILY" | "WEEKLY" | "MONTHLY";

const matchByPeriod = (txDate: Date, period: PeriodType): boolean => {
  const now = new Date();

  switch (period) {
    case "DAILY":
      return (
        differenceInCalendarDays(startOfDay(now), startOfDay(txDate)) === 0
      );
    case "WEEKLY":
      return isAfter(txDate, startOfWeek(now, { weekStartsOn: 1 }));
    case "MONTHLY":
      return isAfter(txDate, startOfMonth(now));
    default:
      return false;
  }
};
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
