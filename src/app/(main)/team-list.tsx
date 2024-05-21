type Props = {
  children: React.ReactNode;
};
export const TeamList = ({ children }: Props) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
  );
};
