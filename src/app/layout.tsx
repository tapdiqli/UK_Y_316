import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"]
});

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Sorte Mestre | A Experiência Definitiva de Casino",
  description: "Descubra os melhores casinos online, bónus exclusivos e análises de especialistas no Sorte Mestre. A sua jornada começa aqui.",
  metadataBase: new URL("https://sortemestre.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sorte Mestre | A Experiência Definitiva de Casino",
    description: "Descubra os melhores casinos online, bónus exclusivos e análises de especialistas no Sorte Mestre.",
    url: "https://sortemestre.com",
    siteName: "Sorte Mestre",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={`${montserrat.variable} ${poppins.variable} antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
