import type { Metadata } from "next";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/nav/Nav';
import Link from 'next/link'
import Footer from "./components/footer/Footer";


export const metadata: Metadata = {
  title: "Quick Ecomm",
  description: "Seethal K S",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body>
        <div className="container">
      <Nav />
        {children}
        {/* <h3>Footer</h3> */}
        <Footer />
        </div>
        
      </body>
    </html>
  );
}
