import type { Metadata, Viewport } from "next";
import { Exo, Cairo , Jost} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import QueryProvider from "@/providers/query-provider";
import { Toaster } from "sonner";
import Footer from "@/components/shared/footer";
import PopupProvider from "@/components/popups/popup-provider";


const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://euroqst.com"),
  title: "الدول التدريبية العالمية",
  description: "الدول التدريبية العالمية - Professional Training and Certification Courses",
  keywords: "training, certification, courses, professional development, EuroQuest",
  // robots: "noindex, nofollow",
  openGraph: {
    title: "الدول التدريبية العالمية",
    description: "الدول التدريبية العالمية - Professional Training and Certification Courses",
    siteName: "EuroQest International",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "الدول التدريبية العالمية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "الدول التدريبية العالمية",
    description: "الدول التدريبية العالمية - Professional Training and Certification Courses",
    images: ["/assets/images/logo.webp"],
    site: "@EuroQest",
  },
  icons: {
    icon: "/assets/images/mini-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} antialiased font-cairo`}
      >
        <QueryProvider>
            <Navbar/>
            {children}
            <Footer/>
            <PopupProvider />
            <Toaster position="top-right" richColors />
        </QueryProvider>
      </body>
    </html>
  );
}
