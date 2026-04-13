'use client';

import { useState } from 'react';
import Link from 'next/link';

const roles = [
  { label: 'מפתח Frontend', junior: [12, 18], mid: [20, 30], senior: [30, 45] },
  { label: 'מפתח Backend', junior: [13, 19], mid: [22, 32], senior: [32, 50] },
  { label: 'מפתח Full Stack', junior: [13, 19], mid: [21, 31], senior: [30, 48] },
  { label: 'DevOps Engineer', junior: [18, 26], mid: [26, 40], senior: [38, 60] },
  { label: 'QA Manual', junior: [12, 18], mid: [16, 24], senior: [20, 32] },
  { label: 'QA Automation', junior: [16, 22], mid: [22, 32], senior: [28, 42] },
  { label: 'Data Engineer', junior: [18, 26], mid: [26, 38], senior: [35, 55] },
  { label: 'Data Scientist', junior: [20, 28], mid: [28, 40], senior: [38, 58] },
  { label: 'ML Engineer', junior: [22, 30], mid: [30, 45], senior: [42, 65] },
  { label: 'AI / LLM Engineer', junior: [24, 34], mid: [34, 52], senior: [48, 70] },
  { label: 'Cyber Security Analyst', junior: [18, 26], mid: [26, 38], senior: [35, 52] },
  { label: 'Penetration Tester', junior: [20, 28], mid: [28, 42], senior: [38, 60] },
  { label: 'System Engineer', junior: [16, 24], mid: [24, 36], senior: [32, 50] },
  { label: 'IT Administrator', junior: [12, 18], mid: [18, 28], senior: [26, 40] },
];

const expLevels = [
  { label: 'ג\'וניור (0-2 שנים)', key: 'junior' as const },
  { label: 'מיד (2-5 שנים)', key: 'mid' as const },
  { label: 'סניור (5+ שנים)', key: 'senior' as const },
];

export default function SalaryPage() {
  const [role, setRole] = useState('');
  const [exp, setExp] = useState<'junior' | 'mid' | 'senior' | ''>('');
  const [result, setResult] = useState<[number, number] | null>(null);

  const handleCalculate = () => {
    const found = roles.find((r) => r.label === role);
    if (!found || !exp) return;
    setResult(found[exp] as [number, number]);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-400 mb-6 flex gap-1 items-center">
        <Link href="/tools" className="hover:text-blue-600 transition-colors">כלים</Link>
        <span>/</span>
        <span className="text-gray-600">מחשבון שכר</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">מחשבון שכר</h1>
      <p className="text-gray-500 mb-8">טווח שכר ריאלי לפי תפקיד ורמת ניסיון — שוק ההייטק הישראלי, 2026.</p>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">תפקיד</label>
          <select
            value={role}
            onChange={(e) => { setRole(e.target.value); setResult(null); }}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">בחר תפקיד</option>
            {roles.map((r) => (
              <option key={r.label} value={r.label}>{r.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">רמת ניסיון</label>
          <div className="grid grid-cols-3 gap-2">
            {expLevels.map((l) => (
              <button
                key={l.key}
                onClick={() => { setExp(l.key); setResult(null); }}
                className={`py-2.5 px-3 rounded-lg border text-sm font-medium transition-all ${
                  exp === l.key
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleCalculate}
          disabled={!role || !exp}
          className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-40"
        >
          חשב שכר
        </button>

        {result && (
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
            <p className="text-sm text-blue-600 font-medium mb-2">טווח שכר משוער</p>
            <p className="text-4xl font-bold text-blue-700 mb-1">
              ₪{result[0].toLocaleString()} – ₪{result[1].toLocaleString()}
            </p>
            <p className="text-xs text-blue-400">ברוטו חודשי</p>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              הנתונים מבוססים על ממוצעי שוק 2026. חברות אמריקאיות ו-MNC משלמות לרוב 20-40% יותר.
              השתמש בנתונים אלה כבסיס למשא ומתן.
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 bg-gray-50 rounded-xl p-5 border border-gray-100">
        <p className="text-sm font-medium text-gray-700 mb-2">💡 טיפ למשא ומתן</p>
        <p className="text-sm text-gray-500 leading-relaxed">
          אל תציג מספר קבוע — תן טווח. "אני מצפה לטווח של X-Y אלף ₪" משאיר מקום לשני הצדדים.
          הכן את המספר מראש — ותהיה מוכן להסביר למה.
        </p>
      </div>
    </div>
  );
}
