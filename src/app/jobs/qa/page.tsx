import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'דרושים QA בישראל – בדיקות תוכנה, אוטומציה, Selenium | JobBoost',
  description: 'משרות QA Engineer בישראל. בדיקות ידניות, אוטומציה, Selenium, Playwright. Junior עד QA Lead.',
  keywords: ['דרושים qa', 'משרות בדיקות תוכנה', 'qa automation ישראל', 'selenium developer', 'qa engineer'],
};

export default function QAPage() {
  return (
    <CategoryPageLayout
      title="דרושים QA בישראל – בדיקות תוכנה ואוטומציה"
      subtitle="QA"
      description="משרות QA Engineer ו-Automation Engineer בחברות הייטק בישראל. בדיקות ידניות, Selenium, Playwright, Cypress. כל הרמות — Junior עד QA Lead."
      currentHref="/jobs/qa"
      keywords={['דרושים qa', 'משרות qa engineer', 'בדיקות תוכנה ישראל', 'automation tester']}
      filterFn={(t, d) =>
        t.includes('qa') || d.includes(' qa') ||
        d.includes('בדיקות') || d.includes('selenium') ||
        d.includes('playwright') || d.includes('cypress') ||
        d.includes('automation test')
      }
      extraContent={
        <>
          <h2 className="font-bold text-base text-gray-900">מה עושה מהנדס/ת QA?</h2>
          <p>
            מהנדס/ת QA (Quality Assurance) מבטיח/ה שהתוכנה עובדת כצפוי לפני שהיא מגיעה למשתמשים.
            זה כולל כתיבת תסריטי בדיקה, הרצת בדיקות ידניות, פיתוח תשתיות אוטומציה, ודיווח על באגים.
            בשוק הישראלי, הביקוש למהנדסי QA Automation (שיודעים לכתוב קוד) גבוה במיוחד וממשיך לעלות.
          </p>
          <h2 className="font-bold text-base text-gray-900">ידני vs. אוטומציה — ומה מרוויחים?</h2>
          <p>
            QA Manual (Junior): 12,000–18,000 ₪ | QA Mid: 20,000–28,000 ₪ | QA Automation: 25,000–40,000 ₪ | QA Lead: 35,000–50,000 ₪.
            המעבר מ-Manual ל-Automation מביא עלייה של 30–50% בשכר. כלי האוטומציה המבוקשים ביותר: Selenium, Playwright, Cypress, RestAssured.
          </p>
          <h2 className="font-bold text-base text-gray-900">איך מתקדמים בקריירת QA?</h2>
          <p>
            Manual QA → Automation QA (Python/Java + Selenium) → QA Lead → SDET (Software Development Engineer in Test).
            מי שמעמיק בקוד יכול לעבור גם ל-<Link href="/jobs/backend" className="text-blue-600 hover:underline">פיתוח Backend</Link>.
            כלי CICD (Jenkins, GitHub Actions) ועבודה ב-Agile הם דרישות בסיסיות כמעט בכל משרה.
          </p>
        </>
      }
    />
  );
}
