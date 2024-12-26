import { combine } from "@/providers/combine";
import { ThemeProvider } from "next-themes";
import React, { Suspense } from "react";
import { Toaster } from "sonner";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) =>
  combine([_basesProvider], [_suspense, _theme], children);

const _theme = (props: { children?: React.ReactNode }) => (
  <ThemeProvider
    attribute={"class"}
    defaultTheme="light"
    enableSystem
    disableTransitionOnChange
  >
    {props.children}
  </ThemeProvider>
);

const _suspense = (props: { children?: React.ReactNode }) => (
  <Suspense>{props.children}</Suspense>
);

const _basesProvider = () => (
  <>
    <Toaster />
  </>
);

export default Providers;
