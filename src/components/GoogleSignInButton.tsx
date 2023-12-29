import { Button } from "./ui/button";

type Props = {
  children: React.ReactNode;
};

const GoogleSignInButton = ({ children }: Props) => {
  const loginWithGoogle = () => {
    console.log("log in with google");
  };
  return (
    <Button className="w-full" onClick={loginWithGoogle}>
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
