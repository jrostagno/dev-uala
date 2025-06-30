import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import type { Transaction } from "@/infrastructure/interfaces/paymentsApi";

export async function generateAndDownloadPDF(
  transactions: Transaction[],
  from: Date,
  to: Date
) {
  const doc = new jsPDF();

  const img = new Image();
  img.src = "/uala.png"; // Asegurate que esté en /public/uala.png

  img.onload = () => {
    // Agregamos el logo primero
    doc.addImage(img, "PNG", 10, 10, 40, 20);

    // Texto debajo del logo
    doc.setFontSize(16);
    doc.text("Transacciones", 14, 40);
    doc.setFontSize(12);
    doc.text(
      `Desde: ${from.toLocaleDateString()}  Hasta: ${to.toLocaleDateString()}`,
      14,
      50
    );

    // Tabla de transacciones
    autoTable(doc, {
      startY: 60,
      head: [["Fecha", "Monto", "Método", "Tarjeta"]],
      body: transactions.map((tx) => [
        new Date(tx.createdAt).toLocaleDateString(),
        `$${tx.amount.toFixed(2)}`,
        tx.paymentMethod,
        tx.card,
      ]),
      styles: { fontSize: 10 },
    });

    doc.save("transacciones.pdf");
  };

  // Por si hay error al cargar imagen
  img.onerror = () => {
    console.error("Error cargando la imagen del logo.");
  };
}
