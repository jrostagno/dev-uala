import { fireEvent,render, screen } from "@testing-library/react";
import { beforeEach,describe, expect, it, vi } from "vitest";
import { type Mock } from "vitest";

import {
  type TransactionState,
  useTransactionStore,
} from "../../../../store/useTransactionStore";
import AmountFilter from "../amount/AmountFilter";

// Mock de Zustand
vi.mock("../../../../store/useTransactionStore", () => ({
  useTransactionStore: vi.fn(),
}));

const mockStore = useTransactionStore as unknown as Mock;

describe("AmountFilter", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza el título 'Monto'", () => {
    mockStore.mockReturnValue({
      filters: {},
      setFilters: vi.fn(),
    } as unknown as TransactionState);

    render(<AmountFilter />);
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByText("Monto")).toBeInTheDocument();
  });

  it("activa el contenido al hacer toggle del switch", () => {
    mockStore.mockReturnValue({
      filters: {},
      setFilters: vi.fn(),
    } as unknown as TransactionState);

    render(<AmountFilter />);
    const toggle = screen.getByRole("switch");
    fireEvent.click(toggle);
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByText("Monto mínimo")).toBeInTheDocument();
  });
});
