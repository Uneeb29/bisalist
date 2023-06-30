"use client";
import "./globals.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Providers from "../Components/Providers";

// export const metadata = {
//   title: "Bisalist",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <Navbar></Navbar>
        <body>

          {children}
        </body>
        <Footer></Footer>
      </Providers>
    </html>
  );
}
