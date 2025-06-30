import { Skeleton } from "@/components/ui/skeleton";

const TransactionListItemSkeleton = () => {
  return (
    <div data-testid="skeleton-item" className="flex items-center w-full gap-3">
      <Skeleton className="w-10 h-10 rounded-[16px]" />
      <div className="w-full">
        <Skeleton className="w-full h-10 bg-neutralSoft rounded-[16px] " />
      </div>
    </div>
  );
};

export default TransactionListItemSkeleton;
