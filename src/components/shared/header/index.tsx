import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              alt={`${APP_NAME} logo`}
              height={36}
              width={130}
              priority={true}
              className="dark:hidden block flex-shrink-0 object-contain"
            />
            <Image
              src="/images/logo-dark.png"
              alt={`${APP_NAME} logo`}
              height={36}
              width={130}
              priority={true}
              className="hidden dark:block flex-shrink-0 object-contain"
            />
          </Link>
        </div>

        <Menu />
      </div>
    </header>
  );
};

export default Header;
