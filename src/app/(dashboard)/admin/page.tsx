import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <h2 className="text-2xl">
        Admin Page - Welcome Back {session?.user.username || session.user.name}
      </h2>
    );
  }

  return <h2 className="text-2xl">Login to see the Admin Page </h2>;
};

export default page;
