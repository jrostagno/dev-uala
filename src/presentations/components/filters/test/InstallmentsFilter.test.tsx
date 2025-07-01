import { fireEvent,render, screen } from "@testing-library/react";
import { beforeEach,describe, expect, it, vi } from "vitest";
import { type Mock } from "vitest";

import {
  type TransactionState,
  useTransactionStore,
} from "../../../../store/useTransactionStore";
import InstallmentsFilter from "../installments/InstallmentsFilter";

vi.mock("@/store/useTransactionStore", () => ({
  useTransactionStore: vi.fn(),
}));

const mockStore = useTransactionStore as unknown as Mock;

describe("InstallmentsFilter", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza el título y switch apagado sin filtros activos", () => {
    mockStore.mockReturnValue({
      filters: {},
      setFilters: vi.fn(),
    } as unknown as TransactionState);

    render(<InstallmentsFilter />);
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByText("Cuotas")).toBeInTheDocument();
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByRole("switch")).not.toBeChecked();
  });

  it("muestra los botones de cuotas si hay filtros activos", () => {
    mockStore.mockReturnValue({
      filters: { installments: [3] },
      setFilters: vi.fn(),
    } as unknown as TransactionState);

    render(<InstallmentsFilter />);
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByText("Todas")).toBeInTheDocument();
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByTestId("1")).toBeInTheDocument();
  });

  it("permite abrir/cerrar el filtro con el switch", () => {
    mockStore.mockReturnValue({
      filters: {},
      setFilters: vi.fn(),
    } as unknown as TransactionState);

    render(<InstallmentsFilter />);
    const switchEl = screen.getByRole("switch");
    fireEvent.click(switchEl);
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByText("Todas")).toBeInTheDocument();
  });

  it("permite seleccionar y deseleccionar todas los chips de install", () => {
    const setFiltersMock = vi.fn();

    mockStore.mockReturnValue({
      filters: { installments: [] },
      setFilters: setFiltersMock,
    } as unknown as TransactionState);

    render(<InstallmentsFilter />);

    const switchToggle = screen.getByRole("switch");
    fireEvent.click(switchToggle);

    const todasBtn = screen.getByTestId("todas-btn");
    fireEvent.click(todasBtn);
    expect(setFiltersMock).toHaveBeenCalled();
  });

  it("permite alternar chips de install individuales", () => {
    const setFiltersMock = vi.fn();

    mockStore.mockReturnValue({
      filters: { installments: [6] },
      setFilters: setFiltersMock,
    } as unknown as TransactionState);

    render(<InstallmentsFilter />);
    const visaBtn = screen.getByTestId("6");
    fireEvent.click(visaBtn);
    expect(setFiltersMock).toHaveBeenCalled();
  });
});
