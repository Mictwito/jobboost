import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'דרושים System Admin בישראל – Windows Server, VMware, Active Directory | JobBoost',
  description: 'משרות System Administrator בישראל. Windows Server, VMware, Active Directory, SCCM, Intune. כל הרמות.',
  keywords: ['דרושים system admin', 'sysadmin ישראל', 'windows server jobs', 'active directory admin', 'vmware administrator'],
};

export default function SystemAdminPage() {
  return (
    <CategoryPageLayout
      title="דרושים System Admin בישראל – Windows Server, VMware ו-Cloud"
      subtitle="System Admin"
      description="משרות System Administrator בחברות הייטק ובארגונים גדולים בישראל. Windows Server, VMware, Active Directory, Azure AD, SCCM, Intune."
      currentHref="/jobs/system-admin"
      keywords={['דרושים sysadmin', 'system admin ישראל', 'windows server admin', 'vmware administrator']}
      filterFn={(t, d) =>
        t.includes('sccm') || t.includes('intune') ||
        d.includes('sccm') || d.includes('intune') ||
        d.includes('active directory') || d.includes('windows server') ||
        d.includes('vmware') || d.includes('hyper-v') ||
        (t.includes('מערכות') && d.includes('שרתים'))
      }
      extraContent={
        <>
          <h2 className="font-bold text-base text-gray-900">מה עושה System Administrator?</h2>
          <p>
            System Admin מנהל/ת את תשתית השרתים והמחשבים בארגון — Windows Server, Active Directory, Exchange/Microsoft 365,
            וירטואליזציה (VMware/Hyper-V), גיבויים ו-Patch Management. בארגונים מודרניים, Sysadmin עוסק/ת יותר ויותר גם ב-Azure AD,
            Intune ו-Cloud Hybrid — תחום שגדל מהר בשנים האחרונות.
          </p>
          <h2 className="font-bold text-base text-gray-900">שכר System Admin</h2>
          <p>
            Junior Sysadmin: 15,000–22,000 ₪ | Mid: 22,000–32,000 ₪ | Senior / Infrastructure Lead: 30,000–45,000 ₪.
            הסמכות Microsoft (AZ-104, MD-102) ו-VMware (VCP) מוסיפות לשכר ולביקוש. מי שמשלב ידע ב-Linux ו-Cloud — יכול להגיע ל-DevOps.
          </p>
          <h2 className="font-bold text-base text-gray-900">Sysadmin ב-2026 — תחום בשינוי</h2>
          <p>
            תחום ה-Sysadmin עובר שינוי: פחות on-premise, יותר Azure/AWS Hybrid. מי שלא מתעדכן/ת בענן — יתקשה.
            המסלול הטבעי לעתיד: Sysadmin → <Link href="/jobs/devops" className="text-blue-600 hover:underline">DevOps</Link> עם
            ידע ב-Terraform ו-Kubernetes, או לאבטחת מידע עם<Link href="/jobs/information-security" className="text-blue-600 hover:underline">מומחיות IS</Link>.
          </p>
        </>
      }
    />
  );
}
