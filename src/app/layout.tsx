import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProIntel",
  description: "Dynamic Home Page with Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
