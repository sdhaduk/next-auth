import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { useState } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

type Props = {
  children: React.ReactNode;
};

const GithubSignInButton = ({ children }: Props) => {
  const [loading, setloading] = useState<boolean>(false);

  const loginWithGithub = async () => {
    try {
      setloading(true);
      await signIn("github", { callbackUrl: "http://localhost:3000/admin" });
    } catch (error) {
      setloading(false);
    } finally {
      setloading(false);
    }
  };

  return (
    <Button disabled={loading} className="w-full" onClick={loginWithGithub}>
      {loading && (
        <svg
          xmlns="http://www.w3.0rg/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke=" currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 mr-2 animate-spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      )}
      {children}
    </Button>
  );
};

export default GithubSignInButton;
