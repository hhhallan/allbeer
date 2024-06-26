import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";

type Props = {
  children: React.ReactNode;
};
export const MobileNav = ({ children }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden" size="icon" variant="outline">
          <MenuIcon className="size-6" />
          <span className="sr-only">Ouvrir le menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="grid gap-2 py-6">{children}</div>
      </SheetContent>
    </Sheet>
  );
};
