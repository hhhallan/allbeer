import Link from "next/link";
import { SheetClose } from "./ui/sheet";

type Props = {
  label: string;
  href: string;
  mobile: boolean;
};

export const NavItem = ({ label, href, mobile = false }: Props) => {
  const defaultClass =
    "text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50";

  const mobileClass = "flex w-full items-center py-2 text-lg font-semibold";

  return (
    <Link className={mobile ? mobileClass : defaultClass} href={`#${href}`}>
      {mobile ? <SheetClose>{label}</SheetClose> : label}
    </Link>
  );
};
