import { Beer } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 dark:bg-gray-800">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Beer className="size-6 text-green-500" />
          <span className="text-sm font-semibold">AllBeer</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Privacy
          </Link>
          <Link
            className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Terms
          </Link>
          <Link
            className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 AllBeer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
