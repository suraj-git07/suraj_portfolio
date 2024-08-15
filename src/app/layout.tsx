import type { Metadata } from "next";
import { Inter, Montserrat, Raleway, Roboto, Noto_Sans, Ubuntu } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/themeContext";
// import { useState } from "react";

const roboto = Roboto({ subsets: ["latin"] , weight:["100" , "300" , "400" , "500" , "700" , "900"]})
const mot = Montserrat({ subsets: ["latin"] , weight:["100" , "300" , "400" , "500" , "700" , "900"]})
const nota = Noto_Sans({ subsets: ["latin"] , weight:["100" , "300" , "400" , "500" , "700" , "900"]})
const rale = Raleway({ subsets: ["latin"] , weight:["100" , "300" , "400" , "500" , "700" , "900"]})
const ubuntu = Ubuntu({ subsets: ["latin"] , weight:[ "300" , "400" , "500" , "700" ]})

export const metadata: Metadata = {
  title: "Portfolio - Suraj Mishra",
  description: "Suraj : Full Stack Blockchain developer",
};

// export const [first, setfirst] = useState(false);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark`}>
      <body
      //  className={roboto.className}
      //  className={Mot.className}
      //  className={ubuntu.className}
       className={`${rale.className}  `}
      //  className={nota.className}
       > 
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
