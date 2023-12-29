type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return <div className="bg-slate-200 p-10 rounded-md">{children}</div>;
};

export default AuthLayout;
