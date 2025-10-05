"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { useAnalytics } from '@/hooks/useAnalytics';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAnalytics();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}