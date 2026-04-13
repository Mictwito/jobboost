'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type Message = { role: 'user' | 'agent'; text: string };

const SUGGESTED = [
  'איך להיכנס להייטק בלי ניסיון?',
  'מה שכר ממוצע ל-Full Stack?',
  'איך מכינים קורות חיים טובים?',
  'מה לוקח יותר זמן — DevOps או פיתוח?',
  'איך מתכוננים לראיון טכני?',
  'כמה זמן לוקח מעבר קריירה?',
];

const ANSWERS: Record<string, string> = {
  'איך להיכנס להייטק בלי ניסיון?':
    'הנתיב המהיר ביותר: Bootcamp ממוקד (4-6 חודשים) + 2-3 פרויקטים ב-GitHub + LinkedIn מעודכן. חברות רבות מגייסות Junior מכוון. המיקוד חשוב: QA Automation, Frontend, ו-Data Analytics הם הנתיבים הכי נגישים.',
  'מה שכר ממוצע ל-Full Stack?':
    'Junior (0-2 שנים): ₪13,000-19,000. Mid (2-5 שנים): ₪21,000-31,000. Senior (5+): ₪30,000-48,000. חברות אמריקאיות ו-MNC משלמות לרוב 20-40% יותר. השתמש במחשבון השכר שלנו לנתונים לפי תפקיד ספציפי.',
  'איך מכינים קורות חיים טובים?':
    '3 כללי הזהב: (1) פורמט פשוט שעובר ATS — ללא טבלאות או עמודות. (2) מספרים ותוצאות מדידות לכל תפקיד — "ניהלתי צוות של 4" ולא "ניהלתי צוות". (3) GitHub / Portfolio — בתפקידים טכניים זה חצי ה-CV. השתמש בכלי שיפור קורות החיים שלנו לניתוח מלא.',
  'מה לוקח יותר זמן — DevOps או פיתוח?':
    'שניהם דורשים 6-12 חודשי הכנה ברצינות לרמת Junior. פיתוח נגיש יותר — יש יותר חומרי לימוד ויותר משרות Junior. DevOps דורש הבנת תשתיות + ענן — אבל שכר הכניסה גבוה יותר (₪18K+ לעומת ₪13K). אם מגיע מרקע IT — DevOps מהיר יותר.',
  'איך מתכוננים לראיון טכני?':
    'תלוי בסוג הראיון. Take-Home (הכי נפוץ בישראל): כתוב README, טפל ב-error handling, ואל תנסה להרשים — תכתוב קוד נקי. Coding Interview: Leetcode Easy ×20, Medium ×30 מספיק. System Design: תרגל 5-6 designs מלאים. הכי חשוב: תסביר את החשיבה שלך בקול.',
  'כמה זמן לוקח מעבר קריירה?':
    'ממוצע: 6-12 חודשי לימוד + 2-4 חודשי חיפוש. סך הכל: 8-16 חודשים עד עבודה ראשונה. מי שמתמקד ומקדיש 3-4 שעות ביום — יכול לקצר זאת. מי שלומד חלקי — מאריך. הנתיב המהיר ביותר: Bootcamp + פרויקטים + networking מקבילי.',
};

const DEFAULT_RESPONSE =
  'שאלה מעניינת! אני ממליץ לבדוק את המאמרים שלנו לתשובה מעמיקה. אם תרצה — שאל שאלה ספציפית יותר ואנסה לעזור.';

export default function CareerPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'agent', text: 'שלום! אני הסוכן שלך לקריירה. שאל אותי כל שאלה על חיפוש עבודה, ראיונות, שכר, או מעבר לתחום חדש.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const answer = ANSWERS[text] ?? DEFAULT_RESPONSE;
      setMessages((prev) => [...prev, { role: 'agent', text: answer }]);
      setLoading(false);
    }, 900);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-400 mb-6 flex gap-1 items-center">
        <Link href="/tools" className="hover:text-blue-600 transition-colors">כלים</Link>
        <span>/</span>
        <span className="text-gray-600">סוכן קריירה</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">סוכן קריירה</h1>
      <p className="text-gray-500 mb-6">שאל שאלות על קריירה, שכר, ראיונות וחיפוש עבודה.</p>

      {/* Chat window */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[460px]">
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
              <div
                className={`max-w-[82%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-sm'
                    : 'bg-gray-100 text-gray-800 rounded-tl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-end">
              <div className="bg-gray-100 text-gray-400 px-4 py-3 rounded-2xl rounded-tl-sm text-sm">
                מעבד...
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-100 p-3">
          <form
            onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
            className="flex gap-2"
          >
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="shrink-0 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-40"
            >
              שלח
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="כתוב שאלה..."
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </div>
      </div>

      {/* Suggested questions */}
      <div className="mt-5">
        <p className="text-sm text-gray-400 mb-3">שאלות נפוצות:</p>
        <div className="flex flex-wrap gap-2">
          {SUGGESTED.map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              disabled={loading}
              className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full hover:border-blue-400 hover:text-blue-600 transition-colors disabled:opacity-40"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
