import { Inter } from "@next/font/google";
import AnalyticsWrapper from "./component/analytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "optional",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
