import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'דרושים Frontend בישראל – משרות React, Angular, Vue | JobBoost',
  description: 'משרות Frontend Developer בישראל. React, Angular, TypeScript, Next.js. כל הרמות — Junior עד Senior ו-Team Lead.',
  keywords: ['דרושים frontend', 'משרות react', 'דרושים angular', 'frontend developer ישראל', 'typescript developer'],
};

export default function FrontendPage() {
  return (
    <CategoryPageLayout
      title="דרושים Frontend בישראל – משרות React, Angular ו-TypeScript"
      subtitle="Frontend"
      description="מצא משרות Frontend Developer בחברות טכנולוגיה מובילות בישראל. React, Angular, Vue.js, TypeScript ו-Next.js — מ-Junior ועד Senior ו-Team Lead."
      currentHref="/jobs/frontend"
      keywords={['דרושים frontend', 'משרות react', 'דרושים angular', 'frontend developer ישראל']}
      filterFn={(t, d) =>
        t.includes('frontend') ||
        d.includes('frontend') || d.includes('angular') ||
        d.includes('react') || d.includes('vue') ||
        (t.includes('ui') && !t.includes('sap'))
      }
      extraContent={
        <>
          <h2 className="font-bold text-base text-gray-900">מה עושה מפתח/ת Frontend?</h2>
          <p>
            מפתח/ת Frontend אחראי/ת על כל מה שהמשתמש רואה ומתקשר עמו — ממשקי משתמש, עיצוב רספונסיבי, ביצועים וחוויית משתמש.
            בישראל, הביקוש למפתחי Frontend גבוה, במיוחד עם ניסיון ב-React, Angular ו-TypeScript. רוב המשרות כיום דורשות שליטה ב-TypeScript
            ולפחות מסגרת JavaScript אחת (React או Angular).
          </p>
          <h2 className="font-bold text-base text-gray-900">כמה מרוויח מפתח/ת Frontend?</h2>
          <p>
            Junior Frontend: 12,000–18,000 ₪ | Mid: 20,000–30,000 ₪ | Senior: 30,000–45,000 ₪ | Team Lead: 40,000–55,000 ₪.
            שכר גבוה יותר בסטארטאפים ובחברות עם מוצרי B2C בסקייל גדול.
          </p>
          <h2 className="font-bold text-base text-gray-900">איך מתקדמים בקריירת Frontend?</h2>
          <p>
            המסלול הנפוץ: Junior React Developer → Mid עם ניסיון ב-TypeScript ו-State Management (Redux/Zustand) →
            Senior עם ידע בביצועים, Accessibility ו-Design Systems → Tech Lead עם אחריות על ארכיטקטורת ה-Frontend.
            מפתחי Frontend שרוכשים ידע ב-Node.js יכולים לעבור ל-<Link href="/jobs/fullstack" className="text-blue-600 hover:underline">Fullstack</Link>.
          </p>
          <h2 className="font-bold text-base text-gray-900">טכנולוגיות מבוקשות ב-2026</h2>
          <p>
            React + TypeScript הוא הסטאק הנפוץ ביותר. Angular פופולרי בחברות Enterprise ובמגזר הציבורי.
            Next.js הפך לסטנדרט ל-Frontend עם SSR. שליטה ב-Tailwind CSS, Testing (Jest/Playwright) ו-CI/CD — יתרון משמעותי.
          </p>
        </>
      }
    />
  );
}
