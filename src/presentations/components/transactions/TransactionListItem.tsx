import type { PaymentMethod } from "@/infrastructure/interfaces/paymentsApi";
import { METHOD_LABELS } from "@/infrastructure/mappers/paymentsMappers";
import { DateToDay } from "@/utils/dateUtils";

import SvgTransactionIcon from "../../../icons/icon-transaction";
import { formatPrice } from "../../../utils/formatPrice";

interface TransactionListItemProps {
  amount: number;
  date: Date;
  paymentMethod: string;
  card: string;
}
const TransactionListItem = (props: TransactionListItemProps) => {
  const { amount, date, paymentMethod, card } = props;

  return (
    <li className="flex items-center justify-between px-2 py-3 border-b">
      <div className="flex items-center gap-1">
        <SvgTransactionIcon />
        <div className="">
          <h3 className="text-sm font-semibold leading-4 text-textDark">
            {METHOD_LABELS[paymentMethod as PaymentMethod]}
          </h3>
          <p className="text-sm font-thin leading-4 text-textNeutral">{card}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <strong className="text-sm font-semibold text-success">{`${formatPrice(
          amount,
          2
        )}`}</strong>
        <time className="text-sm font-thin text-textNeutral">
          {DateToDay(date)}
        </time>
      </div>
    </li>
  );
};

export default TransactionListItem;
