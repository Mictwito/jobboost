'use client';

import { useState, useRef } from 'react';

export default function ApplyForm({ jobTitle, jobSlug }: { jobTitle: string; jobSlug: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">מועמדות נשלחה!</h2>
        <p className="text-gray-500 text-sm">
          תודה על הגשתך ל{jobTitle}. ניצור איתך קשר בקרוב.
        </p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('jobTitle', jobTitle);
      formData.append('jobSlug', jobSlug);
      formData.append('message', message);
      if (file) formData.append('cv', file);

      const res = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'שגיאה בשליחה');
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'שגיאה בשליחת המועמדות. נסה שוב.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          שם מלא <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ישראל ישראלי"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          כתובת אימייל <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
          dir="ltr"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          קורות חיים <span className="text-red-500">*</span>
        </label>
        <label
          className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors"
          onClick={() => fileRef.current?.click()}
        >
          <div className="text-3xl mb-2">📎</div>
          {fileName ? (
            <p className="text-sm font-medium text-blue-600">{fileName}</p>
          ) : (
            <>
              <p className="text-sm font-medium text-gray-700">לחץ לבחירת קובץ</p>
              <p className="text-xs text-gray-400 mt-1">PDF או DOCX בלבד • עד 5MB</p>
            </>
          )}
          <input
            ref={fileRef}
            type="file"
            accept=".pdf,.docx"
            className="hidden"
            onChange={(e) => {
                const f = e.target.files?.[0];
                setFile(f ?? null);
                setFileName(f?.name ?? '');
              }}
          />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          מכתב מקדים{' '}
          <span className="text-gray-400 font-normal">(אופציונלי)</span>
        </label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="ספר לנו בקצרה למה אתה מתאים לתפקיד..."
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading || !name || !email || !file}
        className="w-full bg-blue-600 text-white text-base font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {loading ? 'שולח...' : 'שלח מועמדות'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        המידע שלך מאובטח ולא יועבר לגורמים שלישיים
      </p>
    </form>
  );
}
