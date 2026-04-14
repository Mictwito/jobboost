import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'דרושים DevOps בישראל – Kubernetes, Docker, AWS, CI/CD | JobBoost',
  description: 'משרות DevOps Engineer בישראל. Kubernetes, Docker, AWS, Terraform, CI/CD. Junior עד Cloud Architect.',
  keywords: ['דרושים devops', 'משרות kubernetes', 'cloud engineer ישראל', 'devops engineer', 'aws developer'],
};

export default function DevOpsPage() {
  return (
    <CategoryPageLayout
      title="דרושים DevOps בישראל – Kubernetes, Cloud ו-CI/CD"
      subtitle="DevOps"
      description="משרות DevOps Engineer, Cloud Engineer ו-SRE בחברות הייטק בישראל. Kubernetes, Docker, AWS, Azure, GCP, Terraform ו-CI/CD. כל הרמות."
      currentHref="/jobs/devops"
      keywords={['דרושים devops', 'משרות cloud', 'kubernetes engineer', 'devops ישראל']}
      filterFn={(t, d) =>
        d.includes('kubernetes') || d.includes('docker') ||
        d.includes('ci/cd') || d.includes('devops') ||
        d.includes('aws') || d.includes('azure') || d.includes('gcp') ||
        t.includes('cloud') || t.includes('devops') ||
        (t.includes('תשתיות') && !t.includes('אבטחת'))
      }
      extraContent={
        <>
          <h2 className="font-bold text-base text-gray-900">מה עושה מהנדס/ת DevOps?</h2>
          <p>
            מהנדס/ת DevOps מחבר/ת בין עולמות הפיתוח לתפעול — אחריות על CI/CD pipelines, ניהול תשתיות ענן, containerization עם Docker ו-Kubernetes,
            ואוטומציה של תהליכי deployment. בישראל, חברות הייטק מחפשות מהנדסי DevOps שיודעים לעבוד עם לפחות ספק ענן אחד (AWS, Azure או GCP)
            ומכירים Infrastructure as Code (Terraform, Pulumi).
          </p>
          <h2 className="font-bold text-base text-gray-900">כמה מרוויח מהנדס/ת DevOps?</h2>
          <p>
            Junior DevOps: 20,000–28,000 ₪ | Mid: 28,000–40,000 ₪ | Senior: 40,000–55,000 ₪ | Cloud Architect: 50,000–70,000 ₪.
            הסמכות ענן (AWS Solutions Architect, CKA לKubernetes) מעלות את השכר ב-15–25%.
          </p>
          <h2 className="font-bold text-base text-gray-900">מסלול קריירה DevOps</h2>
          <p>
            Linux Sysadmin / IT → Junior DevOps → DevOps Engineer → Senior / SRE → Cloud Architect.
            מי שבא מ-<Link href="/jobs/system-admin" className="text-blue-600 hover:underline">System Admin</Link> עם Linux ו-Networking
            מוצא את המעבר הטבעי ביותר. טכנולוגיות must-have ב-2026: Kubernetes, Terraform, GitHub Actions, Prometheus/Grafana.
          </p>
        </>
      }
    />
  );
}
