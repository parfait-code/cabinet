import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JapapApp - Application Mobile Camerounaise',
  description: 'Découvrez JapapApp, une application mobile 100% camerounaise conçue pour simplifier votre quotidien.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
