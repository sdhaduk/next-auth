import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link className={buttonVariants()} href="/admin">
        Open My Admin
      </Link>
    </div>
  );
}
 