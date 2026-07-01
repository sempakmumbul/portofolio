import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Avid | Portfolio',
  description: 'Informatics Education & UI/UX Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-screen bg-white text-slate-950 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}