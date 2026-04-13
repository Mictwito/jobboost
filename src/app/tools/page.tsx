import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'כלי קריירה חכמים | JobBoost',
  description: 'כלים חינמיים לחיפוש עבודה: שיפור קורות חיים, בדיקת שכר, סוכן קריירה אישי ועוד.',
};

const tools = [
  {
    href: '/tools/cv',
    icon: '📄',
    title: 'שיפור קורות חיים',
    description: 'העלה את קורות החיים שלך וקבל ציון, ניתוח והמלצות לשיפור — תוך שניות.',
    cta: 'נסה עכשיו',
    color: 'bg-blue-50 border-blue-100',
  },
  {
    href: '/tools/salary',
    icon: '💰',
    title: 'מחשבון שכר',
    description: 'הכנס תפקיד ורמת ניסיון — קבל טווח שכר ריאלי לפי שוק ההייטק הישראלי.',
    cta: 'חשב שכר',
    color: 'bg-green-50 border-green-100',
  },
  {
    href: '/tools/career',
    icon: '🤖',
    title: 'סוכן קריירה',
    description: 'שאל שאלות על חיפוש עבודה, ראיונות, שכר וקריירה — וקבל תשובות מעשיות.',
    cta: 'שוחח עם הסוכן',
    color: 'bg-purple-50 border-purple-100',
  },
  {
    href: '/jobs',
    icon: '🎯',
    title: 'בדיקת התאמה למשרה',
    description: 'כנס לכל משרה ובדוק כמה הפרופיל שלך מתאים — עם הסבר מפורט.',
    cta: 'עיין במשרות',
    color: 'bg-orange-50 border-orange-100',
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">כלי קריירה חכמים</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          כלים חינמיים שעוזרים לך להגיש טוב יותר, לבקש יותר, ולהתכונן בצורה חכמה יותר.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className={`border rounded-2xl p-6 hover:shadow-md transition-all ${tool.color}`}
          >
            <div className="text-4xl mb-4">{tool.icon}</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{tool.title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">{tool.description}</p>
            <span className="inline-block bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              {tool.cta} →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
