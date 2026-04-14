import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'דרושים IT Support בישראל – טכנאי מחשבים, SCCM, Intune | JobBoost',
  description: 'משרות IT Support בישראל. טכנאי IT, SCCM, Intune, Windows, End User Support. כל הרמות.',
  keywords: ['דרושים it support', 'משרות טכנאי it', 'sccm intune ישראל', 'end user support', 'it technician'],
};

export default function ITSupportPage() {
  return (
    <CategoryPageLayout
      title="דרושים IT Support בישראל – טכנאי IT ו-End User Support"
      subtitle="IT Support"
      description="משרות IT Support בחברות הייטק ובארגונים גדולים בישראל. טכנאי IT, SCCM/Intune Specialist, Windows Admin. Entry Level ועד Specialist."
      currentHref="/jobs/it-support"
      keywords={['דרושים it support', 'טכנאי it ישראל', 'sccm specialist', 'end user support']}
      filterFn={(t, d) =>
        t.includes('טכנאי') || t.includes(' it') ||
        t.includes('sccm') || t.includes('intune') ||
        d.includes('sccm') || d.includes('intune') || d.includes('end user')
      }
      extraContent={
        <>
          <h2 className="font-bold text-base text-gray-900">מה עושה איש/ת IT Support?</h2>
          <p>
            IT Support מטפל/ת בתשתית הטכנולוגית של הארגון — החל מפתרון תקלות של עובדים (End User Support),
            דרך ניהול מחשבים וציוד (SCCM/Intune), ועד ניהול Active Directory, Email ושרתים בסיסיים.
            בחברות גדולות תחום ה-IT מחולק: Tier 1 (Help Desk), Tier 2 (IT Support), Tier 3 (System Admin / Infrastructure).
          </p>
          <h2 className="font-bold text-base text-gray-900">שכר ומסלול קריירה</h2>
          <p>
            Entry Level IT: 10,000–14,000 ₪ | IT Support Mid: 14,000–22,000 ₪ | IT Specialist (SCCM/Intune): 22,000–32,000 ₪.
            הסמכות Microsoft (MD-102, MS-900) ו-CompTIA A+ / Network+ פותחות את הדלת לתפקידים בכירים.
          </p>
          <h2 className="font-bold text-base text-gray-900">IT Support כנקודת קפיצה</h2>
          <p>
            IT Support הוא אחד מנקודות הכניסה הנגישות ביותר לעולם ההייטק — ללא דרישה לתואר קודם.
            מ-IT Support ניתן להתקדם ל-<Link href="/jobs/system-admin" className="text-blue-600 hover:underline">System Admin</Link>,{' '}
            <Link href="/jobs/network-engineer" className="text-blue-600 hover:underline">רשתות</Link>, ועם הכשרה נוספת —{' '}
            <Link href="/jobs/devops" className="text-blue-600 hover:underline">DevOps</Link> או{' '}
            <Link href="/jobs/information-security" className="text-blue-600 hover:underline">אבטחת מידע</Link>.
          </p>
        </>
      }
    />
  );
}
