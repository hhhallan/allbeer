import { cva } from "class-variance-authority";
import Link from "next/link";

type Props = {
  label: string;
  href?: string;
};

export const NavItem = ({ label, href = "" }: Props) => {
  return (
    <Link
      className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
      href={`#${href}`}
    >
      {label}
    </Link>
  );
};
