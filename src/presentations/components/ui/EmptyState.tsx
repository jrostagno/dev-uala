import SvgSearchIcon from "@/icons/icon-search";

const EmptyState = () => {
  return (
    <div
      data-testid="empty-state"
      className="flex flex-col items-center justify-center gap-3"
    >
      <SvgSearchIcon />
      <h3 className="text-sm text-center text-textNeutral">
        No hay resultados que mostrar. Podés probar usando los filtros.
      </h3>
    </div>
  );
};

export default EmptyState;
