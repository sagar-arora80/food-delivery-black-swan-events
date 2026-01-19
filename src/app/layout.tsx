import type { Metadata } from "next";
import "./globals.css";
import { DashboardProvider } from "./context/DashboardContext";
import LayoutShell from "./components/LayoutShell";

export const metadata: Metadata = {
  title: "Black Swan Ops Dashboard",
  description: "Internal Ops Platform for Event Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <DashboardProvider>
          <LayoutShell>
            {children}
          </LayoutShell>
        </DashboardProvider>
      </body>
    </html>
  );
}
