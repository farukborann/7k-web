import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
 title: "Ömer Faruk BORAN",
 authors: [
  { name: "Ömer Faruk BORAN", url: "https://github.com/farukborann" },
 ],
 description: "U Known what is this",
 icons: "./facion.ico",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={montserrat.className}>
    <div className="min-h-screen w-full overflow-x-hidden bg-black  text-white">
     <Navbar />
     {children}
    </div>
    <Footer />
   </body>
  </html>
 );
}
