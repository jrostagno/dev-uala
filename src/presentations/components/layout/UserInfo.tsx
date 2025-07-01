import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Avatar className="w-14 h-14">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>

      <h2 className="text-sm font-normal text-textPrimary">John Doe </h2>
    </div>
  );
};

export default UserInfo;
