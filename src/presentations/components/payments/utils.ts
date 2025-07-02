import {
  endOfDay,
  isWithinInterval,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from "date-fns";

import { PeriodType } from "./PaymentsBanner";

export const matchByPeriod = (
  txDate: Date | string,
  period: PeriodType
): boolean => {
  const date = new Date(txDate); // Asegura que siempre sea un Date válido
  const now = new Date();

  switch (period) {
    case "DAILY": {
      const start = startOfDay(now);
      const end = endOfDay(now);
      return isWithinInterval(date, { start, end });
    }

    case "WEEKLY": {
      const start = startOfWeek(now, { weekStartsOn: 1 }); // Lunes
      const end = endOfDay(now);
      return isWithinInterval(date, { start, end });
    }

    case "MONTHLY": {
      const start = startOfMonth(now);
      const end = endOfDay(now);
      return isWithinInterval(date, { start, end });
    }

    default:
      return false;
  }
};
