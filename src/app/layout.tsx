import "@/assets/styles.css";
import { APP_DESC, APP_NAME, SERVER_URL } from "@/lib/constants";
import Providers from "@/providers";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: `${APP_NAME} | %s`,
    default: APP_NAME,
  },
  description: `${APP_DESC}`,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
