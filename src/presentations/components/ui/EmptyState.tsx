import clsx from "clsx";

import SvgSearchIcon from "@/icons/icon-search";

interface EmptyStateProps {
  className?: string;
}
const EmptyState = (props: EmptyStateProps) => {
  const { className } = props;
  return (
    <div
      data-testid="empty-state"
      className={clsx(
        "flex flex-col items-center justify-center gap-3",
        className
      )}
    >
      <SvgSearchIcon />
      <h3 className="text-sm text-center text-textNeutral">
        No hay resultados que mostrar. Podés probar usando los filtros.
      </h3>
    </div>
  );
};

export default EmptyState;
