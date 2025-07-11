import { fireEvent,render, screen } from "@testing-library/react";
import { beforeEach,describe, expect, it, vi } from "vitest";
import { type Mock } from "vitest";

import {
  type TransactionState,
  useTransactionStore,
} from "../../../../store/useTransactionStore";
import DatesFilter from "../dates/DatesFilter";

vi.mock("@/store/useTransactionStore", () => ({
  useTransactionStore: vi.fn(),
}));

const mockStore = useTransactionStore as unknown as Mock;

describe("DatesFilter", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("no muestra el calendario si no hay fechas seleccionadas", () => {
    mockStore.mockReturnValue({
      filters: {},
      setFilters: vi.fn(),
    } as unknown as TransactionState);

    render(<DatesFilter />);
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.queryByRole("grid")).not.toBeInTheDocument();
  });

  it("muestra el calendario al hacer toggle del switch", () => {
    mockStore.mockReturnValue({
      filters: {},
      setFilters: vi.fn(),
    } as unknown as TransactionState);

    render(<DatesFilter />);
    fireEvent.click(screen.getByRole("switch"));
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("borra las fechas seleccionadas al hacer click en el botón", () => {
    const setFiltersMock = vi.fn();

    mockStore.mockReturnValue({
      filters: {
        fromDate: "2024-01-01",
        toDate: "2024-01-10",
      },
      setFilters: setFiltersMock,
    } as unknown as TransactionState);

    render(<DatesFilter />);
    const botonBorrar = screen.getByTestId("borrar-btn");

    fireEvent.click(botonBorrar);

    expect(setFiltersMock).toHaveBeenCalledWith({
      fromDate: undefined,
      toDate: undefined,
    });
  });
});
