import NavigationMenu from "./navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-10 text-center">
      <div className="flex items-center gap-3">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/perfil.jpg" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold text-white">João Pedro</h1>
      </div>
      <div className="flex-grow" />

      <NavigationMenu />
    </div>
  );
};

export default Header;
