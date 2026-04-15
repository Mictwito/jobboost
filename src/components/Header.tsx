'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

type NavPost = { slug: string; title: string };

export default function Header({ navPosts = [] }: { navPosts?: NavPost[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'דף הבית' },
    { href: '/jobs', label: 'משרות' },
    { href: '/articles', label: 'מאמרים' },
    { href: '/tools', label: 'כלים' },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
          JobBoost
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) =>
            link.href === '/articles' && navPosts.length > 0 ? (
              <div key={link.href} className="relative">
                <button
                  onMouseEnter={() => setArticlesOpen(true)}
                  onMouseLeave={() => setArticlesOpen(false)}
                  className={`transition-colors flex items-center gap-1 ${
                    pathname.startsWith('/articles')
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {articlesOpen && (
                  <div
                    onMouseEnter={() => setArticlesOpen(true)}
                    onMouseLeave={() => setArticlesOpen(false)}
                    className="absolute top-full right-0 mt-1 w-72 bg-white rounded-xl border border-gray-100 shadow-lg py-2 z-50"
                  >
                    <Link
                      href="/articles"
                      className="block px-4 py-2 text-sm font-medium text-blue-600 border-b border-gray-50 hover:bg-gray-50"
                    >
                      כל המאמרים ←
                    </Link>
                    {navPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/articles/${post.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 truncate"
                      >
                        {post.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 hover:text-gray-900 p-1"
          aria-label="תפריט"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 text-sm font-medium border-b border-gray-50 ${
                    pathname === link.href || pathname.startsWith(link.href + '/')
                      ? 'text-blue-600'
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
                {link.href === '/articles' && navPosts.length > 0 && (
                  <div className="pb-2">
                    {navPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/articles/${post.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 pr-4 text-xs text-gray-500 hover:text-blue-600 truncate"
                      >
                        — {post.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
