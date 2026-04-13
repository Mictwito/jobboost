import { NextResponse } from 'next/server';

// MVP: logs lead to console. In production, connect to DB or Resend Audience.
export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'כתובת אימייל לא תקינה' }, { status: 400 });
    }

    // TODO: store in DB (Supabase) or add to Resend Audience
    console.log('[Lead]', new Date().toISOString(), email);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Leads API error:', err);
    return NextResponse.json({ error: 'שגיאה בשרת' }, { status: 500 });
  }
}
