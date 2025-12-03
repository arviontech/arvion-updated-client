import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { Toaster } from "sonner";
import Navbar from "@/components/shared/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

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
      <body
        className={`${outfit.variable} ${poppins.variable} antialiased`}
      >
        <ReduxProvider>
          {children}
          <Toaster richColors position="top-center" />
        </ReduxProvider>
      </body>
    </html>
  );
}
