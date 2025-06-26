import { formatPrice } from "../../../utils/formatPrice";

interface MainNumberProps {
  value?: number;
}

const MainNumber = (props: MainNumberProps) => {
  const { value = 0 } = props;
  return (
    <div className="flex   items-center w-full  justify-center gap-1">
      <h2 className="font-extralight font-sans text-[34px] text-[#313643]">
        {formatPrice(value, 2)}
      </h2>
    </div>
  );
};

export default MainNumber;
