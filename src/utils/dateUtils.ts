export const DateToDay = (date: Date) => {
  const fecha = new Date(date);

  return fecha.toLocaleDateString("es-AR");
};
