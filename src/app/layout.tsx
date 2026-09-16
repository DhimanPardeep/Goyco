import "./styles/global.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BootstrapClient from "./components/BootstrapClient";
import type { Metadata } from "next";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const metadata: Metadata = {
  title: {
    default: "Goyco Pvt. Ltd.",
    template: "%s | Goyco Pvt. Ltd.",
  },
  description: "Goyco Pvt. Ltd.",
  icons: {
    icon: `${basePath}/images/favicon.png`,
    shortcut: `${basePath}/images/favicon.png`,
    apple: `${basePath}/images/favicon.png`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
