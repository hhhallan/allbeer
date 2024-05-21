import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import Link from "next/link";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden" size="icon" variant="outline">
          <MenuIcon className="size-6" />
          <span className="sr-only">Ouvrir le menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="grid gap-2 py-6">
          <Link
            className="flex w-full items-center py-2 text-lg font-semibold"
            href="#"
          >
            Accueil
          </Link>
          <Link
            className="flex w-full items-center py-2 text-lg font-semibold"
            href="#"
          >
            Espace Pro
          </Link>
          <Link
            className="flex w-full items-center py-2 text-lg font-semibold"
            href="#"
          >
            Événements
          </Link>
          <Link
            className="flex w-full items-center py-2 text-lg font-semibold"
            href="#"
          >
            Équipe
          </Link>
          <Link
            className="flex w-full items-center py-2 text-lg font-semibold"
            href="#"
          >
            Contact
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
