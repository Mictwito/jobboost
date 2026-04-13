'use client';

import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
        <div className="text-3xl mb-2">✅</div>
        <p className="font-bold text-lg">נרשמת בהצלחה!</p>
        <p className="text-blue-100 text-sm mt-1">נשלח לך עדכון כשיש משרות חדשות.</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-600 rounded-2xl p-8 text-white">
      <h2 className="text-xl font-bold mb-1 text-center">קבל משרות חדשות למייל</h2>
      <p className="text-blue-100 text-sm text-center mb-6">
        עדכון שבועי על משרות חדשות בתחום שלך — ישירות לתיבה.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="sm:shrink-0 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-60 text-sm"
        >
          {status === 'loading' ? 'שולח...' : 'הרשמה'}
        </button>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          dir="ltr"
          className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
        />
      </form>
      {status === 'error' && (
        <p className="text-red-200 text-xs text-center mt-3">שגיאה בהרשמה — נסה שוב.</p>
      )}
    </div>
  );
}
