import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cn } from "~/lib/utils";
import Navbar from "~/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactQueryProvider } from "~/providers/reactquery-provider";
import { Toaster } from "~/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Bingo",
  description: "Bingo colors game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <ClerkProvider>
        <html lang="en">
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased ",
              inter.variable,
            )}
          >
            <Navbar />
            {children}
            <Toaster />
          </body>
        </html>
      </ClerkProvider>
    </ReactQueryProvider>
  );
}
