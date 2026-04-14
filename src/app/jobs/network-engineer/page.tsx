import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'דרושים רשתות בישראל – Network Engineer, NOC, Cisco | JobBoost',
  description: 'משרות Network Engineer בישראל. NOC, Cisco, Aruba, Firewall, רשתות תקשורת. כל הרמות.',
  keywords: ['דרושים רשתות', 'network engineer ישראל', 'noc operator', 'cisco ccna jobs', 'network administrator'],
};

export default function NetworkEngineerPage() {
  return (
    <CategoryPageLayout
      title="דרושים רשתות בישראל – Network Engineer ו-NOC"
      subtitle="רשתות"
      description="משרות Network Engineer, NOC Operator ומהנדס/ת רשתות בחברות הייטק ובארגונים גדולים בישראל. Cisco, Aruba, FortiGate, SD-WAN."
      currentHref="/jobs/network-engineer"
      keywords={['דרושים רשתות', 'network engineer ישראל', 'noc jobs', 'cisco engineer']}
      filterFn={(t, d) =>
        t.includes('noc') || t.includes('רשתות') ||
        d.includes('noc') || d.includes('aruba') ||
        d.includes('cisco') || d.includes('routing') ||
        d.includes('switching') || (d.includes('רשת') && !d.includes('מכירות'))
      }
      extraContent={
        <>
          <h2 className="font-bold text-base text-gray-900">מה עושה מהנדס/ת רשתות?</h2>
          <p>
            מהנדס/ת רשתות מתכנן/ת, מיישם/ת ומתפעל/ת את תשתית התקשורת של הארגון — רשתות LAN/WAN, Routing ו-Switching,
            Firewall, VPN ואבטחת רשתות. NOC Operator מנטר/ת תקלות רשת בזמן אמת ומגיב/ה לאירועים.
            ציוד מוביל בשוק: Cisco, Aruba (HP), Fortinet, Palo Alto Networks.
          </p>
          <h2 className="font-bold text-base text-gray-900">שכר מהנדס/ת רשתות</h2>
          <p>
            NOC Operator: 12,000–18,000 ₪ | Network Engineer Junior: 18,000–26,000 ₪ | Network Engineer Mid: 26,000–38,000 ₪ | Senior / Architect: 38,000–55,000 ₪.
            הסמכות CCNA ו-CCNP הן הסטנדרט בתחום. מי שמוסיף Security (Firewall, NGFW) — מגיע לשכר גבוה משמעותית.
          </p>
          <h2 className="font-bold text-base text-gray-900">מסלול קריירה</h2>
          <p>
            NOC Operator → Network Engineer → Senior Network Engineer → Network Architect.
            תחום הרשתות מהווה גם בסיס מצוין ל-<Link href="/jobs/information-security" className="text-blue-600 hover:underline">אבטחת מידע</Link> ול-{' '}
            <Link href="/jobs/devops" className="text-blue-600 hover:underline">DevOps</Link> — מי שמוסיף ידע ב-Cloud Networking (AWS VPC, Azure Virtual Network) נמצא בביקוש גבוה.
          </p>
        </>
      }
    />
  );
}
