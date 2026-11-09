import type { Metadata } from "next";
import { Geist_Mono, Geist } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });
const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });

export const metadata: Metadata = {
  title: "BarbeWeb",
  description: "Sistema de agendamento de barbearia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased md:flex-row`}>
        {children}
      </body>
    </html>
  );
}