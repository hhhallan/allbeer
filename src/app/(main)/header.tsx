import { MobileNav } from "@/components/navigation/mobile-nav";
import { Beer } from "lucide-react";
import Link from "next/link";
import { Nav } from "@/components/navigation/nav";
import { NavItem } from "@/components/nav-item";
import { routes } from "@/constants";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white px-4 py-3 shadow-sm dark:bg-gray-950 md:px-6 lg:px-8">
      <div className="container flex items-center justify-between">
        <Link className="flex items-center gap-2" href="#">
          <Beer className="size-6 text-green-500" />
          <span className="text-lg font-semibold">AllBeer</span>
        </Link>
        <Nav>
          {routes.map((route) => (
            <NavItem
              key={route.label}
              label={route.label}
              href={route.href}
              mobile={false}
            />
          ))}
        </Nav>
        <MobileNav>
          {routes.map((route) => (
            <NavItem
              key={route.label}
              label={route.label}
              href={route.href}
              mobile={true}
            />
          ))}
        </MobileNav>
      </div>
    </header>
  );
};
