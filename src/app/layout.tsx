import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevBlog | Tecnologia e Desenvolvimento",
  description: "Artigos sobre programação, tecnologia, React e Next.js."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}