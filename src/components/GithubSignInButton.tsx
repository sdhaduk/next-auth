import { Button } from "./ui/button";

type Props = {
  children: React.ReactNode;
};

const GithubSignInButton = ({ children }: Props) => {
  const loginWithGithub = () => {
    console.log("log in with Github");
  };
  return (
    <Button className="w-full" onClick={loginWithGithub}>
      {children}
    </Button>
  );
};

export default GithubSignInButton;
