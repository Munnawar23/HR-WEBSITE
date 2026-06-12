import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@src/styles/globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HR Website",
  description: "This is a landing page of hr website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}