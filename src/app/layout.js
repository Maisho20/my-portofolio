"use client";
import { Inter } from "next/font/google";
import "./globals.css";

// AOS
import { React, useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Sabbaha Naufal - Portfolio",
//   description: "Sabbaha Naufal's portfolio website",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,

      //callback saat animassi dimulai
      onStart: () => {
        document.body.style.overflow = "hidden"; // Sembunyikan overflow
      },
      // Callback saat animasi selesai
      onComplete: () => {
        document.body.style.overflow = "hidden"; // Kembalikan overflow
      },
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Sabbaha Naufal - Portfolio</title>
        {/* <link rel="icon" href="/icon/mlogo.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* animate CSS */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <div style={{ overflow: "hidden" }}>{children}</div>
      </body>
    </html>
  );
}
