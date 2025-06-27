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
    <li className="flex items-center justify-between px-2 py-3 border-b">
      <div className="flex items-center gap-1">
        <SvgTransactionIcon />
        <div className="">
          <h3 className="text-sm font-semibold leading-4 text-textDark">
            Link de pago
          </h3>
          <p className="text-sm font-thin leading-4 text-textNeutral">
            {transactionType}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <strong className="text-sm font-semibold text-success">{`${formatPrice(
          amount,
          2
        )}`}</strong>
        <time className="text-sm font-thin text-textNeutral">{date}</time>
      </div>
    </li>
  );
};

export default TransactionListItem;
