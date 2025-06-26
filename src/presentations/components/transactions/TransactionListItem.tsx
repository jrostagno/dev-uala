import SvgTransactionIcon from "../../../icons/icon-transaction";
import { formatPrice } from "../../../utils/formatPrice";

interface TransactionListItemProps {
  transactionType: string;
  amount: number;
  date: string;
}
const TransactionListItem = (props: TransactionListItemProps) => {
  const { transactionType, amount, date } = props;
  return (
    <li className="flex items-center justify-between py-3 border-b px-2">
      <div className="flex gap-1 items-center">
        <SvgTransactionIcon />
        <div className="">
          <h3 className="text-sm text-textDark leading-4 font-semibold">
            Link de pago
          </h3>
          <p className="text-sm font-thin leading-4 text-textNeutral">
            {transactionType}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <strong className="font-semibold text-success text-sm">{`$${formatPrice(
          amount,
          2
        )}`}</strong>
        <time className="text-sm font-thin text-textNeutral">{date}</time>
      </div>
    </li>
  );
};

export default TransactionListItem;
