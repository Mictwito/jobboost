'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

type Suggestion = { type: 'error' | 'warning' | 'tip'; text: string };

const MOCK_RESULTS: Suggestion[] = [
  { type: 'error', text: 'חסרים קישורים ל-GitHub או portfolio — זה שדה חובה בתפקידים טכניים.' },
  { type: 'error', text: 'אין מספרים ותוצאות מדידות — "ניהלתי צוות" לא אומר כלום. הוסף: "ניהלתי צוות של 4 ושיפרתי delivery ב-30%".' },
  { type: 'warning', text: 'הסעיף "על עצמי" ארוך מדי — שני משפטים מספיקים. מגייסים לא קוראים יותר.' },
  { type: 'warning', text: 'פורמט ה-CV עשוי לגרום לבעיות ב-ATS — הימנע מטבלאות ומעמודות.' },
  { type: 'warning', text: 'תאריכי תעסוקה לא עקביים — יש 3 חודשים ללא הסבר. מגייסים שמים לב.' },
  { type: 'tip', text: 'הוסף סעיף "Tech Stack" ברור עם השפות והכלים שאתה שולט בהם — מגדיל שיעור מעבר ATS.' },
  { type: 'tip', text: 'שקול להוסיף project highlights ישירות בסעיף הניסיון — לא בנפרד.' },
];

const iconMap = { error: '🔴', warning: '🟡', tip: '🟢' };
const labelMap = { error: 'דחוף לתיקון', warning: 'מומלץ לשפר', tip: 'טיפ לשיפור' };

export default function CVPage() {
  const [step, setStep] = useState<'upload' | 'loading' | 'result'>('upload');
  const [fileName, setFileName] = useState('');
  const [score] = useState(61);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    setFileName(file.name);
  };

  const handleAnalyze = () => {
    if (!fileName) return;
    setStep('loading');
    setTimeout(() => setStep('result'), 2200);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-400 mb-6 flex gap-1 items-center">
        <Link href="/tools" className="hover:text-blue-600 transition-colors">כלים</Link>
        <span>/</span>
        <span className="text-gray-600">שיפור קורות חיים</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">שיפור קורות חיים</h1>
      <p className="text-gray-500 mb-8">קבל ציון, ניתוח והמלצות — תוך שניות.</p>

      {step === 'upload' && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => fileRef.current?.click()}
            className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all"
          >
            <div className="text-4xl mb-3">📄</div>
            {fileName ? (
              <p className="font-medium text-blue-600">{fileName}</p>
            ) : (
              <>
                <p className="font-medium text-gray-700">גרור קובץ לכאן או לחץ לבחירה</p>
                <p className="text-sm text-gray-400 mt-1">PDF או DOCX בלבד • עד 5MB</p>
              </>
            )}
            <input
              ref={fileRef}
              type="file"
              accept=".pdf,.docx"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            />
          </div>

          <button
            onClick={handleAnalyze}
            disabled={!fileName}
            className="w-full mt-5 bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-40"
          >
            נתח את קורות החיים שלי
          </button>
          <p className="text-xs text-gray-400 text-center mt-3">
            הקובץ לא נשמר — מעובד ומוחק מיד.
          </p>
        </div>
      )}

      {step === 'loading' && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
          <div className="text-4xl mb-4 animate-spin">⚙️</div>
          <p className="font-medium text-gray-700">מנתח את קורות החיים שלך...</p>
          <p className="text-sm text-gray-400 mt-1">בודק מבנה, ATS-compatibility, ומילות מפתח</p>
        </div>
      )}

      {step === 'result' && (
        <div className="space-y-5">
          {/* Score card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div
                  className={`text-6xl font-bold ${
                    score >= 80 ? 'text-green-500' : score >= 60 ? 'text-yellow-500' : 'text-red-400'
                  }`}
                >
                  {score}
                </div>
                <div className="text-sm text-gray-400 mt-1">מתוך 100</div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {score >= 80 ? 'קורות חיים חזקים' : score >= 60 ? 'יש מה לשפר' : 'נדרש שיפור משמעותי'}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {score >= 60
                    ? 'עם מספר שיפורים ממוקדים, קורות החיים שלך יהיו מוכנים למשרות בכירות.'
                    : 'קורות החיים שלך עוברים חלק מהמסננים — אבל יש שינויים שיעשו הבדל גדול.'}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-5 bg-gray-100 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all ${
                  score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-400'
                }`}
                style={{ width: `${score}%` }}
              />
            </div>
          </div>

          {/* Suggestions */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-4">המלצות לשיפור</h3>
            <div className="space-y-3">
              {MOCK_RESULTS.map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                  <span className="text-lg shrink-0">{iconMap[s.type]}</span>
                  <div>
                    <span className="text-xs font-medium text-gray-400 block mb-0.5">
                      {labelMap[s.type]}
                    </span>
                    <p className="text-sm text-gray-700">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => { setStep('upload'); setFileName(''); }}
            className="w-full border border-gray-200 text-gray-600 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            נתח קובץ אחר
          </button>
        </div>
      )}
    </div>
  );
}
