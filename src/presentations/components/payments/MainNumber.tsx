import SvgPlusIcon from "@/icons/icon-plus";
import { formatPrice } from "../../../utils/formatPrice";
import clsx from "clsx";

interface MainNumberProps {
  value?: number;
  className?: string;
}

const MainNumber = ({ value = 0, className }: MainNumberProps) => {
  const [integer, decimals] = formatPrice(value, 2).split(",");

  return (
    <div
      className={clsx(
        "flex items-center justify-center w-full gap-1",
        className
      )}
    >
      <div className="flex items-center justify-center gap-1">
        {value > 0 ? <SvgPlusIcon /> : <></>}
        <h2 className="!font-extralight font-sans text-[34px] text-textDark leading-none">
          {integer}
          <span className="text-[22px] !font-extralight   align-baseline">
            ,{decimals}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default MainNumber;
