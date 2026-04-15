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
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://jobboost.co.il',
    siteName: 'JobBoost',
    title: 'JobBoost — מצא עבודה. תבלוט. תתקבל.',
    description: 'פלטפורמת קריירה חכמה שעוזרת לך למצוא עבודה, לבלוט מהמתחרים ולהתקבל לעבודה הבאה שלך.',
    images: [{ url: 'https://jobboost.co.il/og-image.png', width: 1200, height: 630, alt: 'JobBoost' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jobboostil',
    title: 'JobBoost — מצא עבודה. תבלוט. תתקבל.',
    description: 'פלטפורמת קריירה חכמה שעוזרת לך למצוא עבודה, לבלוט מהמתחרים ולהתקבל לעבודה הבאה שלך.',
  },
  alternates: {
    canonical: 'https://jobboost.co.il',
  },
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
      <head>
        {/* GA loader + AdSense — native <script src> renders correctly in SSR */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DZ64073P77"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4664021020364773"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        {/*
          beforeInteractive — Next.js injects this into the initial HTML <head>
          before hydration. This is the only reliable way to render inline scripts
          in Next.js App Router so Google detects gtag('config', ...).
        */}
        <Script id="ga-init" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-DZ64073P77');`}
        </Script>
        <Header navPosts={navPosts} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
