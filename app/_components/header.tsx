import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-20 text-center">
      <div className="flex items-center gap-3">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/perfil.jpg" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1>João Pedro</h1>
      </div>
    </div>
  );
};

export default Header;
