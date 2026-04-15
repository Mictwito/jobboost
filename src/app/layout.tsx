import type { Metadata } from 'next';
import Script from 'next/script';
import { Heebo } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSupabase } from '@/lib/supabase';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JobBoost — מצא עבודה. תבלוט. תתקבל.',
  description:
    'פלטפורמת קריירה חכמה שעוזרת לך למצוא עבודה, לבלוט מהמתחרים ולהתקבל לעבודה הבאה שלך.',
};

async function getNavPosts(): Promise<{ slug: string; title: string }[]> {
  try {
    const { data } = await getSupabase()
      .from('posts')
      .select('slug, title')
      .order('created_at', { ascending: false })
      .limit(5);
    return data ?? [];
  } catch {
    return [];
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navPosts = await getNavPosts();

  return (
    <html lang="he" dir="rtl" className={heebo.className}>
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DZ64073P77"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DZ64073P77');
          `}
        </Script>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4664021020364773"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Header navPosts={navPosts} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
