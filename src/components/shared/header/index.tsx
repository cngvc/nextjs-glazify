import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.png"
              alt={`${APP_NAME} logo`}
              height={32.5}
              width={100}
              priority={true}
              className="hidden lg:block flex-shrink-0 object-contain"
            />
            <Image
              src="/images/logo-mb.png"
              alt={`${APP_NAME} logo`}
              height={30}
              width={30}
              priority={true}
              className="block lg:hidden flex-shrink-0 object-contain"
            />
          </Link>
        </div>

        <div className="space-x-2">
          <Button asChild variant={"ghost"}>
            <Link href={"/cart"}>
              <ShoppingCartIcon /> Cart
            </Link>
          </Button>

          <Button asChild>
            <Link href={"/sign-in"}>
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
