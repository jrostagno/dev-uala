import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { type Mock } from "vitest";

import TransactionHistory from "../TransactionHistory";
import {
  useTransactionStore,
  type TransactionState,
} from "@/store/useTransactionStore";

// Mock del store
vi.mock("@/store/useTransactionStore", () => ({
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
    } as TransactionState);

    render(<TransactionHistory />);
    expect(screen.getByText("Historial de transacciones")).toBeInTheDocument();
  });

  it("muestra 10 skeletons cuando loading es true", () => {
    mockStore.mockReturnValue({
      loading: true,
      error: null,
      filtered: [],
      filters: {},
    } as TransactionState);

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
    } as TransactionState);

    render(<TransactionHistory />);
    expect(screen.getByTestId("empty-state")).toBeInTheDocument(); // Ajustá según el texto de EmptyState
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
    } as TransactionState);

    render(<TransactionHistory />);

    const filterIcon = screen.getByTestId("filter-icon");

    fireEvent.click(filterIcon);
    expect(screen.getByText("Filtros")).toBeInTheDocument(); // Ajustar según título en FilterDrawer
  });

  it("abre el modal de descarga al hacer click en el icono", () => {
    mockStore.mockReturnValue({
      loading: false,
      error: null,
      filtered: [],
      filters: {},
    } as TransactionState);

    render(<TransactionHistory />);
    const downloadIcon = screen.getByTestId("download-icon");
    fireEvent.click(downloadIcon);
    expect(
      screen.getByText("Elegí las fechas que querés descargar")
    ).toBeInTheDocument(); // Ajustar al texto real
  });
});
