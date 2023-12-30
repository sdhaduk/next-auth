"use client";

import { useSession } from "next-auth/react";
import React from "react";

type Props = {};

const User = (props: Props) => {
  const { data: session } = useSession();
  return <pre>{JSON.stringify(session)}</pre>;
};

export default User;
