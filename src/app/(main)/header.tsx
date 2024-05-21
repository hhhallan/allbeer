import { MobileNav } from "@/components/mobile-nav";
import { Nav } from "@/components/nav";
import { Beer } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white px-4 py-3 shadow-sm dark:bg-gray-950 md:px-6 lg:px-8">
      <div className="container flex items-center justify-between">
        <Link className="flex items-center gap-2" href="#">
          <Beer className="size-6 text-green-500" />
          <span className="text-lg font-semibold">AllBeer</span>
        </Link>
        <Nav />
        <MobileNav />
      </div>
    </header>
  );
};
