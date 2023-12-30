"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

type Props = {};

const UserAccountNav = (props: Props) => {
  return (
    <Button onClick={() => signOut()} variant="destructive">
      Sign Out
    </Button>
  );
};

export default UserAccountNav;
