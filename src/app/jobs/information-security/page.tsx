import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'דרושים אבטחת מידע בישראל – CISO, מנהל אבטחה, GRC | JobBoost',
  description: 'משרות אבטחת מידע בישראל. מנהל אבטחת מידע, CISO, GRC, ISO 27001, Firewall. כל הרמות.',
  keywords: ['דרושים אבטחת מידע', 'ciso ישראל', 'information security jobs', 'grc analyst', 'iso 27001'],
};

export default function InformationSecurityPage() {
  return (
    <CategoryPageLayout
      title="דרושים אבטחת מידע בישראל – CISO, GRC ומנהלי אבטחה"
      subtitle="אבטחת מידע"
      description="משרות אבטחת מידע בחברות הייטק, פיננסים ובריאות בישראל. CISO, מנהל אבטחת מידע, GRC Analyst, ISO 27001. כל הרמות."
      currentHref="/jobs/information-security"
      keywords={['דרושים אבטחת מידע', 'ciso ישראל', 'information security', 'grc analyst']}
      filterFn={(t, d) =>
        t.includes('אבטחת מידע') || d.includes('אבטחת מידע') ||
        t.includes('ciso') || d.includes('iso 27001') ||
        d.includes('fortigate') || d.includes('nac')
      }
      extraContent={
        <>
          <h2 className="font-bold text-base text-gray-900">אבטחת מידע vs. סייבר — מה ההבדל?</h2>
          <p>
            אבטחת מידע (Information Security) מתמקדת בהגנה על נתונים ועמידה ברגולציה — ISO 27001, GDPR, PCI-DSS.
            תחום הסייבר מתמקד יותר בהיבטים הטכניים-תקיפיים. בפועל, תפקידים רבים מחברים את שניהם:
            מנהל/ת אבטחת מידע יכולה לנהל גם את הטכנולוגיה (Firewall, SIEM) וגם את הרגולציה (מדיניות, ביקורות, הדרכות).
          </p>
          <h2 className="font-bold text-base text-gray-900">שכר בתחום אבטחת המידע</h2>
          <p>
            GRC Analyst Junior: 18,000–26,000 ₪ | Mid: 25,000–38,000 ₪ | Senior IS Manager: 38,000–55,000 ₪ | CISO: 55,000–85,000 ₪.
            הסמכות CISSP, CISM ו-ISO 27001 Lead Auditor מוסיפות משמעותית לשכר ולביקוש.
          </p>
          <h2 className="font-bold text-base text-gray-900">מסלול קריירה</h2>
          <p>
            IT Support / רשתות → מהנדס/ת אבטחת מידע → מנהל/ת אבטחת מידע → CISO.
            הדרך המהירה דרך GRC: קורס ISO 27001 + הסמכה → Compliance Analyst → IS Manager.
            מי שמגיע מ-<Link href="/jobs/network-engineer" className="text-blue-600 hover:underline">רשתות</Link> עם ניסיון ב-Firewall ו-VPN
            נכנס ישר לתפקידי אבטחת מידע טכנולוגית.
          </p>
        </>
      }
    />
  );
}
