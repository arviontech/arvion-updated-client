import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { Toaster } from "sonner";
import Navbar from "@/components/shared/Navbar";

export const metadata: Metadata = {
  title: "Arvion Tech - Digital Innovation & Web Development",
  description: "Arvion Tech - Your trusted partner for Web Development, UI/UX, SaaS Solutions & Digital Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ReduxProvider>
          {children}
          <Toaster richColors position="top-center" />
        </ReduxProvider>
      </body>
    </html>
  );
}
