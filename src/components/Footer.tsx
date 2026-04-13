import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-2">JobBoost</div>
            <p className="text-sm text-gray-400 max-w-xs">
              מצא עבודה. תבלוט. תתקבל.
            </p>
          </div>
          <nav className="flex flex-col gap-3 text-sm">
            <p className="text-white font-medium mb-1">ניווט</p>
            <Link href="/" className="hover:text-white transition-colors">דף הבית</Link>
            <Link href="/jobs" className="hover:text-white transition-colors">משרות עבודה</Link>
            <Link href="/articles" className="hover:text-white transition-colors">מאמרים</Link>
          </nav>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
          © 2026 JobBoost. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
