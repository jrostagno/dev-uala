import { Skeleton } from "@/components/ui/skeleton";

const MainNumberSkeleton = () => {
  return (
    <div
      data-testid="main-number-skeleton"
      className="flex justify-center w-full mt-3"
    >
      <Skeleton className="w-[270px] bg-neutralSoft h-10 rounded-[16px] " />
    </div>
  );
};

export default MainNumberSkeleton;
