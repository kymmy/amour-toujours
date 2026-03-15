import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amour Toujours \u2014 Initiative Solidaire Locale",
  description:
    "Encourager l\u2019entraide entre habitants \u2014 aide entre voisins, actions solidaires, soutien aux familles dans le besoin. Marseille 11e & 12e.",
  openGraph: {
    title: "Amour Toujours \u2014 Initiative Solidaire Locale",
    description:
      "Encourager l\u2019entraide entre habitants \u2014 aide entre voisins, actions solidaires, soutien aux familles dans le besoin. Marseille 11e & 12e.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfairDisplay.variable} ${sourceSans3.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
