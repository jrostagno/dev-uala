import {
  differenceInCalendarDays,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from "date-fns";

import { PeriodType } from "./PaymentsBanner";

export const matchByPeriod = (txDate: Date, period: PeriodType): boolean => {
  const now = new Date();

  switch (period) {
    case "DAILY":
      return (
        differenceInCalendarDays(startOfDay(now), startOfDay(txDate)) === 0
      );
    case "WEEKLY":
      return txDate >= startOfWeek(now, { weekStartsOn: 1 });
    case "MONTHLY":
      return txDate >= startOfMonth(now);
    default:
      return false;
  }
};
