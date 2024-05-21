type Props = {
  children: React.ReactNode;
};

export const Nav = ({ children }: Props) => {
  return <nav className="hidden space-x-4 md:flex">{children}</nav>;
};
