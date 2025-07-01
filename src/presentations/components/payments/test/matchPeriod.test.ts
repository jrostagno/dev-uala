import { startOfDay, subDays } from "date-fns";
import { describe, expect, it, vi } from "vitest";

import { matchByPeriod } from "../utils";

describe("matchByPeriod", () => {
  const mockNow = new Date("2025-07-01T12:00:00Z");
  vi.setSystemTime(mockNow);

  it("debería coincidir con 'DAILY' si la fecha es hoy", () => {
    const hoy = startOfDay(mockNow);
    expect(matchByPeriod(hoy, "DAILY")).toBe(true);
  });

  it("no debería coincidir con 'DAILY' si la fecha es anterior a hoy", () => {
    const ayer = subDays(mockNow, 1);
    expect(matchByPeriod(ayer, "DAILY")).toBe(false);
  });

  it("debería coincidir con 'WEEKLY' si la fecha es el lunes de esta semana o posterior", () => {
    const lunes = new Date("2025-06-30T10:00:00Z"); // lunes
    const martes = new Date("2025-07-01T10:00:00Z"); // martes
    expect(matchByPeriod(lunes, "WEEKLY")).toBe(true);
    expect(matchByPeriod(martes, "WEEKLY")).toBe(true);
  });

  it("no debería coincidir con 'WEEKLY' si la fecha es anterior al lunes de esta semana", () => {
    const domingoAnterior = new Date("2025-06-29T10:00:00Z");
    expect(matchByPeriod(domingoAnterior, "WEEKLY")).toBe(false);
  });

  it("debería coincidir con 'MONTHLY' si la fecha es el 1º del mes o posterior", () => {
    const primeroDeMes = new Date(2025, 6, 1);
    expect(matchByPeriod(primeroDeMes, "MONTHLY")).toBe(true);
  });
});
