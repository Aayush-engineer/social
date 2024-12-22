import { SwitchCamera } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

import Image from "next/image";
import logo from "../image/logo.png";

function Logo() {
  return (
    <Link
      href={"/dashboard"}
      className={buttonVariants({
        className:
          "hidden md:flex navLink !mb-10 lg:hover:bg-transparent lg:!p-0",
        variant: "ghost",
        size: "lg",
      })}
    >
      <SwitchCamera className="h-6 w-6 shrink-0 lg:hidden" />
      <Image
        src={logo}
        alt="logo"
        width={100}
        height={100}
        className="w-24 lg:w-28"
      />
    </Link>
  );
}

export default Logo;
