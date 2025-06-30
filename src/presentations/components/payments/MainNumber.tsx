import { formatPrice } from "../../../utils/formatPrice";

interface MainNumberProps {
  value?: number;
}

const MainNumber = ({ value = 0 }: MainNumberProps) => {
  const [integer, decimals] = formatPrice(value, 2).split(",");

  return (
    <div className="flex items-center justify-center w-full gap-1">
      <h2 className="!font-extralight font-sans text-[34px] text-textDark leading-none">
        {integer}
        <span className="text-[22px] !font-extralight   align-baseline">
          ,{decimals}
        </span>
      </h2>
    </div>
  );
};

export default MainNumber;
