import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Pizzeria Venezia | Authentisch Italienisch in Lüdenscheid',
  description: 'Willkommen bei Pizzeria Venezia. Beste authentische Pizza in Lüdenscheid mit frischen Zutaten, schneller Lieferung und familiärer Atmosphäre. Jetzt bestellen!',
  openGraph: {
    "title": "Pizzeria Venezia | Authentisch Italienisch in Lüdenscheid",
    "description": "Pizza für die Seele – authentisch, frisch, lokal beliebt.",
    "type": "website",
    "siteName": "Pizzeria Venezia"
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
