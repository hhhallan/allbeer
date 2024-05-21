type Props = {
  children: React.ReactNode;
};

export const ContactList = ({ children }: Props) => {
  return <div className="flex flex-col justify-end gap-6">{children}</div>;
};
