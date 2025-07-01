import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect,it } from "vitest";
//import type { Transaction } from "@/infrastructure/interfaces/paymentsApi";
import { vi } from "vitest";
import { type Mock } from "vitest";

import {
  type TransactionState,
  useTransactionStore,
} from "../../../../store/useTransactionStore";
import PaymentsBanner from "../PaymentsBanner";

vi.mock("../../../../store/useTransactionStore", () => ({
  useTransactionStore: vi.fn(),
}));

const mockUseTransactionStore = useTransactionStore as unknown as Mock;

// const mockTransactions: Transaction[] = [
//   {
//     amount: 100,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     card: "visa",
//     paymentMethod: "qr",
//     installments: 1,
//     id: "tx1",
//   },
//   {
//     amount: 200,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     card: "visa",
//     paymentMethod: "qr",
//     installments: 1,
//     id: "tx2",
//   },
// ];

describe("PaymentsBanner", () => {
  it("muestra el título y el link", () => {
    const mockState: TransactionState = {
      transactions: [],
      loading: false,
      error: null,
      filtered: [],
      filters: {},
      applyFilters: vi.fn(),
      clearFilters: vi.fn(),
      setFilters: vi.fn(),
      fetchAll: vi.fn(),
    };

    mockUseTransactionStore.mockReturnValue(mockState);

    render(
      <MemoryRouter>
        <PaymentsBanner />
      </MemoryRouter>
    );
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByText("Tus cobros")).toBeInTheDocument();
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByText("ver metricas")).toBeInTheDocument();
  });

  it("muestra el skeleton cuando loading es true", () => {
    const mockState: TransactionState = {
      transactions: [],
      loading: true,
      error: null,
      filtered: [],
      filters: {},
      applyFilters: vi.fn(),
      clearFilters: vi.fn(),
      setFilters: vi.fn(),
      fetchAll: vi.fn(),
    };

    mockUseTransactionStore.mockReturnValue(mockState);

    render(
      <MemoryRouter>
        <PaymentsBanner />
      </MemoryRouter>
    );
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByTestId("main-number-skeleton")).toBeInTheDocument();
  });

  // it("muestra el total cuando hay transacciones", () => {
  //   const mockState: TransactionState = {
  //     transactions: mockTransactions,
  //     loading: false,
  //     error: null,
  //     filtered: [],
  //     filters: {},
  //     applyFilters: vi.fn(),
  //     clearFilters: vi.fn(),
  //     setFilters: vi.fn(),
  //     fetchAll: vi.fn(),
  //   };

  //   mockUseTransactionStore.mockReturnValue(mockState);

  //   render(<PaymentsBanner />);
  //   expect(screen.getByText("$300.00")).toBeInTheDocument();
  // });
});
