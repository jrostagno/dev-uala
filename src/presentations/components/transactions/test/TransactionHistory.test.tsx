import { fireEvent,render, screen } from "@testing-library/react";
import { beforeEach,describe, expect, it, vi } from "vitest";
import { type Mock } from "vitest";

import {
  type TransactionState,
  useTransactionStore,
} from "../../../../store/useTransactionStore";
import TransactionHistory from "../TransactionHistory";

// Mock del store
vi.mock("../../../../store/useTransactionStore", () => ({
  useTransactionStore: vi.fn(),
}));

const mockStore = useTransactionStore as unknown as Mock;

describe("TransactionHistory", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("muestra el título", () => {
    mockStore.mockReturnValue({
      loading: false,
      error: null,
      filtered: [],
      filters: {},
    } as Partial<TransactionState>);

    render(<TransactionHistory />);
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByText("Historial de transacciones")).toBeInTheDocument();
  });

  it("muestra 10 skeletons cuando loading es true", () => {
    mockStore.mockReturnValue({
      loading: true,
      error: null,
      filtered: [],
      filters: {},
    } as Partial<TransactionState>);

    render(<TransactionHistory />);
    expect(screen.getAllByTestId("skeleton-item")).toHaveLength(10);
  });

  // it("muestra transacciones si hay datos", () => {
  //   mockStore.mockReturnValue({
  //     loading: false,
  //     error: null,
  //     filtered: [
  //       {
  //         id: "1",
  //         amount: 500,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //         paymentMethod: "qr",
  //         card: "mastercard",
  //       },
  //     ],
  //     filters: {},
  //   } as TransactionState);

  //   render(<TransactionHistory />);
  //   expect(screen.getByText("$500.00")).toBeInTheDocument();
  // });

  it("muestra el estado vacío si no hay transacciones", () => {
    mockStore.mockReturnValue({
      loading: false,
      error: null,
      filtered: [],
      filters: {},
    } as Partial<TransactionState>);

    render(<TransactionHistory />);
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByTestId("empty-state")).toBeInTheDocument();
  });

  //   it("muestra mensaje de error si falla", () => {
  //     mockStore.mockReturnValue({
  //       loading: false,
  //       error: "Algo salió mal",
  //       filtered: [],
  //       filters: {},
  //     } as TransactionState);

  //     render(<TransactionHistory />);
  //     expect(
  //       screen.getByText("Error al cargar transacciones")
  //     ).toBeInTheDocument();
  //   });

  it("abre el modal de filtros al hacer click en el icono", () => {
    mockStore.mockReturnValue({
      loading: false,
      error: null,
      filtered: [],
      filters: {},
    } as Partial<TransactionState>);

    render(<TransactionHistory />);

    const filterIcon = screen.getByTestId("filter-icon");

    fireEvent.click(filterIcon);
    // @ts-expect-error jest-dom matcher not typed in TS
    expect(screen.getByText("Filtros")).toBeInTheDocument(); // Ajustar según título en FilterDrawer
  });

  it("abre el modal de descarga al hacer click en el icono", () => {
    mockStore.mockReturnValue({
      loading: false,
      error: null,
      filtered: [],
      filters: {},
    } as Partial<TransactionState>);

    render(<TransactionHistory />);
    const downloadIcon = screen.getByTestId("download-icon");
    fireEvent.click(downloadIcon);

    expect(
      screen.getByText("Elegí las fechas que querés descargar")
      // @ts-expect-error jest-dom matcher not typed in TS
    ).toBeInTheDocument();
  });
});
