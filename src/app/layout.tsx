import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Cardito",
  description: "Centinaia di persone a Cardito sognano questo volto, se ti è mai capitato perfavore contattaci via email.",
};

console.log("ciao")

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <script defer src="https://umami.cardito.info/script.js" data-website-id="a4d25142-56a4-45d9-acc1-b340a3a90477"></script>
          {children}
        </body>
      </html>
  );
}
