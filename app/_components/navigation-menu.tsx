import { Button } from "./ui/button";

const NavigationMenu = () => {
  return (
    <>
      <nav>
        <div className="flex gap-5">
          <Button variant="outline" size="sm" className="cursor-pointer">
            Home
          </Button>
          <Button variant="outline" size="sm" className="cursor-pointer">
            About
          </Button>
        </div>
      </nav>
    </>
  );
};

export default NavigationMenu;
