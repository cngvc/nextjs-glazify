"use client";

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto max-w-lg">
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
      <div className="p-6 text-center mt-4">
        <h1 className="text-2xl mb-2">Not Found</h1>
        <p className="text-destructive mb-4">Could not find requested page</p>
        <Button
          variant={"outline"}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
