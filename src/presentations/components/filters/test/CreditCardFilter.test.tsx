import { describe, it, expect, vi, beforeEach } from "vitest";
import { type Mock } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import {
  useTransactionStore,
  type TransactionState,
} from "../../../../store/useTransactionStore";
import CreditCardFilter from "../credit-cards/CreditCardFilter";

vi.mock("@/store/useTransactionStore", () => ({
  useTransactionStore: vi.fn(),
}));

const mockStore = useTransactionStore as unknown as Mock;

describe("CreditCardFilter", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza el título y switch apagado sin filtros activos", () => {
    mockStore.mockReturnValue({
      filters: {},
      setFilters: vi.fn(),
    } as unknown as TransactionState);

    render(<CreditCardFilter />);
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByText("Tarjeta")).toBeInTheDocument();
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByRole("switch")).not.toBeChecked();
  });

  it("muestra los botones de tarjetas si hay filtros activos", () => {
    mockStore.mockReturnValue({
      filters: { cards: ["visa"] },
      setFilters: vi.fn(),
    } as unknown as TransactionState);

    render(<CreditCardFilter />);
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByText("Todas")).toBeInTheDocument();
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByTestId("visa")).toBeInTheDocument();
  });

  it("permite abrir/cerrar el filtro con el switch", () => {
    mockStore.mockReturnValue({
      filters: {},
      setFilters: vi.fn(),
    } as unknown as TransactionState);

    render(<CreditCardFilter />);
    const switchEl = screen.getByRole("switch");
    fireEvent.click(switchEl);
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByText("Todas")).toBeInTheDocument();
  });

  it("permite seleccionar y deseleccionar todas las tarjetas", () => {
    const setFiltersMock = vi.fn();

    mockStore.mockReturnValue({
      filters: { cards: [] },
      setFilters: setFiltersMock,
    } as unknown as TransactionState);

    render(<CreditCardFilter />);

    const switchToggle = screen.getByRole("switch");
    fireEvent.click(switchToggle);

    const todasBtn = screen.getByTestId("todas-btn");
    fireEvent.click(todasBtn);
    expect(setFiltersMock).toHaveBeenCalled();
  });

  it("permite alternar tarjetas individuales", () => {
    const setFiltersMock = vi.fn();

    mockStore.mockReturnValue({
      filters: { cards: ["visa"] },
      setFilters: setFiltersMock,
    } as unknown as TransactionState);

    render(<CreditCardFilter />);
    const visaBtn = screen.getByTestId("visa");
    fireEvent.click(visaBtn);
    expect(setFiltersMock).toHaveBeenCalled();
  });
});
