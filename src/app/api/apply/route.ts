import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const TO_EMAIL = process.env.CONTACT_EMAIL ?? 'mictwito@gmail.com';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const jobSlug = formData.get('jobSlug') as string;
    const message = formData.get('message') as string;
    const cvFile = formData.get('cv') as File | null;

    if (!name || !email || !jobTitle) {
      return NextResponse.json({ error: 'חסרים שדות חובה' }, { status: 400 });
    }

    if (!cvFile || cvFile.size === 0) {
      return NextResponse.json({ error: 'יש לצרף קורות חיים' }, { status: 400 });
    }

    // Build Resend attachments if a CV was uploaded
    const attachments: { filename: string; content: Buffer }[] = [];
    if (cvFile && cvFile.size > 0) {
      const arrayBuffer = await cvFile.arrayBuffer();
      attachments.push({
        filename: cvFile.name,
        content: Buffer.from(arrayBuffer),
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: 'JobBoost <onboarding@resend.dev>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `מועמדות חדשה: ${jobTitle}`,
      attachments,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">מועמדות חדשה התקבלה</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">שם:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">אימייל:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">משרה:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${jobTitle}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">קו"ח:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${cvFile && cvFile.size > 0 ? `מצורף (${cvFile.name})` : 'לא צורף'}</td>
            </tr>
            ${
              message
                ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; vertical-align: top;">הודעה:</td>
              <td style="padding: 8px;">${message.replace(/\n/g, '<br/>')}</td>
            </tr>`
                : ''
            }
          </table>
          <p style="margin-top: 24px; color: #666; font-size: 13px;">
            נשלח מ-JobBoost
            ${jobSlug ? ` | <a href="https://jobboost.co.il/jobs/${jobSlug}">צפה במשרה</a>` : ''}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'שגיאה בשליחת המייל' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Apply API error:', err);
    return NextResponse.json({ error: 'שגיאה בשרת' }, { status: 500 });
  }
}
