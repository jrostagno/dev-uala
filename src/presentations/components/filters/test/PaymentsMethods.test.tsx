import { fireEvent,render, screen } from "@testing-library/react";
import { beforeEach,describe, expect, it, vi } from "vitest";
import { type Mock } from "vitest";

import {
  type TransactionState,
  useTransactionStore,
} from "../../../../store/useTransactionStore";
import PaymentMethodsFilter from "../payment-methods/PaymentMethodsFilter";

vi.mock("@/store/useTransactionStore", () => ({
  useTransactionStore: vi.fn(),
}));

const mockStore = useTransactionStore as unknown as Mock;

describe("PaymentMethodsFilter", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza el título y switch apagado sin filtros activos", () => {
    mockStore.mockReturnValue({
      filters: {},
      setFilters: vi.fn(),
    } as unknown as TransactionState);

    render(<PaymentMethodsFilter />);
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByText("Métodos de cobro")).toBeInTheDocument();
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByRole("switch")).not.toBeChecked();
  });

  it("muestra los botones de payments si hay filtros activos", () => {
    mockStore.mockReturnValue({
      filters: { paymentMethods: ["link"] },
      setFilters: vi.fn(),
    } as unknown as TransactionState);

    render(<PaymentMethodsFilter />); // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByText("Todas")).toBeInTheDocument();
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByTestId("link")).toBeInTheDocument();
  });

  it("permite abrir/cerrar el filtro con el switch", () => {
    mockStore.mockReturnValue({
      filters: {},
      setFilters: vi.fn(),
    } as unknown as TransactionState);

    render(<PaymentMethodsFilter />);
    const switchEl = screen.getByRole("switch");
    fireEvent.click(switchEl);
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByText("Todas")).toBeInTheDocument();
  });

  it("permite seleccionar y deseleccionar todas los chips de payments", () => {
    const setFiltersMock = vi.fn();

    mockStore.mockReturnValue({
      filters: { paymentMethods: [] },
      setFilters: setFiltersMock,
    } as unknown as TransactionState);

    render(<PaymentMethodsFilter />);

    const switchToggle = screen.getByRole("switch");
    fireEvent.click(switchToggle);

    const todasBtn = screen.getByTestId("todas-btn");
    fireEvent.click(todasBtn);
    expect(setFiltersMock).toHaveBeenCalled();
  });

  it("permite alternar chips de payments individuales", () => {
    const setFiltersMock = vi.fn();

    mockStore.mockReturnValue({
      filters: { paymentMethods: ["link"] },
      setFilters: setFiltersMock,
    } as unknown as TransactionState);

    render(<PaymentMethodsFilter />);
    const visaBtn = screen.getByTestId("link");
    fireEvent.click(visaBtn);
    expect(setFiltersMock).toHaveBeenCalled();
  });
});
