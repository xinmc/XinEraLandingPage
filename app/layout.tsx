import "./css/style.css";

//import { Inter } from "next/font/google";

//const inter = Inter({
//  subsets: ["latin"],
//  variable: "--font-inter",
//  display: "swap",
//});

import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const inter = localFont({ 
  src: './fonts/ChillBitmap_16px.ttf',
  display: "swap",
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        //className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
        className={`${inter.className} bg-gray-50 tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
