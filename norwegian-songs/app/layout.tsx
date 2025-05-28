import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Norske Nasjonalsanger",
  description: "En samling av norske nasjonalsanger med informasjon og kilder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}
