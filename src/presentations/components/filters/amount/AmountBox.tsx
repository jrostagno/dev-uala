import { formatPrice } from "@/utils/formatPrice";

interface Props {
  label: string;
  amount: number;
}

const AmountBox = (props: Props) => {
  const { label, amount } = props;
  return (
    <div className="flex flex-col items-center justify-center px-4 py-1 border rounded-[8px] border-primaryBrand">
      <span className="text-[10px] font-thin text-textNeutral">{label}</span>
      <strong className="self-start text-sm font-normal text-textDark">
        {formatPrice(amount)}
      </strong>
    </div>
  );
};

export default AmountBox;
