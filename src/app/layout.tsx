import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JobBoost — מצא עבודה. תבלוט. תתקבל.',
  description:
    'פלטפורמת קריירה חכמה שעוזרת לך למצוא עבודה, לבלוט מהמתחרים ולהתקבל לעבודה הבאה שלך.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={heebo.className}>
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
