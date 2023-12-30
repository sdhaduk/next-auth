import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

type Props = {
  children: React.ReactNode;
};

const GithubSignInButton = ({ children }: Props) => {
  const loginWithGithub = () => {
    signIn("github", { callbackUrl: "http://localhost:3000/admin" });
  };
  return (
    <Button className="w-full" onClick={loginWithGithub}>
      {children}
    </Button>
  );
};

export default GithubSignInButton;
