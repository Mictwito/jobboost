import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'דרושים סייבר בישראל – משרות Cyber Security | JobBoost',
  description: 'משרות Cyber Security בישראל. SOC Analyst, Pentester, מהנדס סייבר, CISO. כל הרמות.',
  keywords: ['דרושים סייבר', 'משרות cyber security', 'soc analyst ישראל', 'pentester', 'cybersecurity jobs'],
};

export default function CyberSecurityPage() {
  return (
    <CategoryPageLayout
      title="דרושים סייבר בישראל – Cyber Security"
      subtitle="סייבר"
      description="משרות Cyber Security בחברות הייטק, ביטחוניות ופיננסיות בישראל. SOC Analyst, Penetration Tester, מהנדס סייבר ו-CISO."
      currentHref="/jobs/cyber-security"
      keywords={['דרושים סייבר', 'משרות cyber', 'security engineer ישראל', 'soc analyst']}
      filterFn={(t, d) =>
        t.includes('סייבר') || d.includes('סייבר') ||
        t.includes('cyber') || d.includes('cyber')
      }
      extraContent={
        <>
          <h2 className="font-bold text-base text-gray-900">למה ישראל היא מעצמת סייבר?</h2>
          <p>
            ישראל היא אחת ממובילות עולם בסייבר — עשרות חברות סייבר בינלאומיות פועלות כאן, ויחידות 8200 ורפאל ייצרו דור שלם של מומחים.
            הביקוש למומחי סייבר בשוק האזרחי גבוה מאוד, עם פחות מועמדים מתאימים מהמשרות הפתוחות.
            תחום הסייבר כולל: SOC (ניטור וזיהוי איומים), אבטחה התקפית (Pentest, Red Team), הגנה (Blue Team, SIEM) ו-GRC.
          </p>
          <h2 className="font-bold text-base text-gray-900">שכר בתחום הסייבר</h2>
          <p>
            SOC Analyst Junior: 20,000–28,000 ₪ | SOC Mid: 28,000–40,000 ₪ | Pentester / Red Team: 35,000–55,000 ₪ | CISO: 60,000–90,000 ₪.
            התחום ההתקפי (Offensive Security) מתוגמל גבוה יותר מהגנתי. הסמכות OSCP, CEH, CISSP מוסיפות 15–30% לשכר.
          </p>
          <h2 className="font-bold text-base text-gray-900">כיצד נכנסים לתחום?</h2>
          <p>
            נקודת הכניסה הנפוצה: קורס סייבר ממוקד + הסמכת CompTIA Security+ + פלטפורמות תרגול (HackTheBox, TryHackMe).
            רקע ב-<Link href="/jobs/network-engineer" className="text-blue-600 hover:underline">רשתות</Link> או{' '}
            <Link href="/jobs/system-admin" className="text-blue-600 hover:underline">System Admin</Link> הוא יתרון גדול.
            שירות ב-8200 או יחידות מודיעין סייבר — פותח דלתות ישירות לתפקידים בכירים.
          </p>
        </>
      }
    />
  );
}
