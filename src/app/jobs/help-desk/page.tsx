import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'דרושים Help Desk בישראל – תמיכה טכנית, Service Desk | JobBoost',
  description: 'משרות Help Desk בישראל. תומך/ת Help Desk, Service Desk, Tier 1/2/3. כניסה לתחום ה-IT.',
  keywords: ['דרושים help desk', 'משרות תמיכה טכנית', 'service desk ישראל', 'helpdesk technician', 'תמיכה טכנית'],
};

export default function HelpDeskPage() {
  return (
    <CategoryPageLayout
      title="דרושים Help Desk בישראל – תמיכה טכנית ו-Service Desk"
      subtitle="Help Desk"
      description="משרות Help Desk ו-Service Desk בחברות הייטק ובארגונים גדולים בישראל. Tier 1, Tier 2 ו-Tier 3. כניסה נוחה לעולם ה-IT."
      currentHref="/jobs/help-desk"
      keywords={['דרושים help desk', 'תומך טכני ישראל', 'service desk jobs', 'helpdesk support']}
      filterFn={(t, d) =>
        t.includes('help desk') || t.includes('helpdesk') ||
        d.includes('help desk') || d.includes('service desk')
      }
      extraContent={
        <>
          <h2 className="font-bold text-base text-gray-900">מה עושה איש/ת Help Desk?</h2>
          <p>
            Help Desk (Tier 1) הוא הקו הראשון של תמיכה טכנית — מענה לפניות עובדים, פתרון תקלות בסיסיות,
            ניהול כרטיסי תקלות ב-ITSM (ServiceNow, Jira). Tier 2 כולל תמיכה מעמיקה יותר: תצורת מחשבים, חשבונות AD, VPN.
            Tier 3 עוסק בבעיות תשתית מורכבות שה-Tier 2 לא יכול לפתור.
          </p>
          <h2 className="font-bold text-base text-gray-900">שכר Help Desk</h2>
          <p>
            Tier 1 Help Desk: 9,000–13,000 ₪ | Tier 2: 13,000–20,000 ₪ | Tier 3 / Senior HD: 20,000–30,000 ₪.
            משרות Help Desk בסביבת היי-טק בינלאומית משלמות יותר ומספקות חשיפה טכנולוגית טובה יותר.
          </p>
          <h2 className="font-bold text-base text-gray-900">Help Desk — אבן דרך לקריירת IT</h2>
          <p>
            Help Desk הוא הנקודה הנגישה ביותר לתחום ה-IT — ניתן להיכנס אפילו ללא הסמכות.
            לאחר 1–2 שנים, המסלול הטבעי הוא ל-<Link href="/jobs/it-support" className="text-blue-600 hover:underline">IT Support</Link> ומשם ל-{' '}
            <Link href="/jobs/system-admin" className="text-blue-600 hover:underline">System Admin</Link>.
            הסמכת CompTIA A+ מומלצת כצעד ראשון לכל מי שמתחיל/ה את הדרך.
          </p>
        </>
      }
    />
  );
}
