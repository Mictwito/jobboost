import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'דרושים Fullstack בישראל – React + Node, .NET + Angular | JobBoost',
  description: 'משרות Fullstack Developer בישראל. React+Node.js, .NET+Angular, Python+React. כל הרמות.',
  keywords: ['דרושים fullstack', 'משרות fullstack developer', 'fullstack ישראל', 'react node developer'],
};

export default function FullstackPage() {
  return (
    <CategoryPageLayout
      title="דרושים Fullstack בישראל – פיתוח מקצה לקצה"
      subtitle="Fullstack"
      description="משרות Fullstack Developer — פיתוח Frontend ו-Backend ביחד. React+Node.js, .NET+Angular, Python+React. מהמשרות המבוקשות ביותר בשוק הייטק הישראלי."
      currentHref="/jobs/fullstack"
      keywords={['דרושים fullstack', 'משרות fullstack developer', 'fullstack ישראל']}
      filterFn={(t, d) =>
        t.includes('fullstack') || t.includes('full stack') ||
        d.includes('fullstack') || d.includes('full stack')
      }
      extraContent={
        <>
          <h2 className="font-bold text-base text-gray-900">למה Fullstack מבוקש?</h2>
          <p>
            מפתח/ת Fullstack יכול/ה לעבוד על כל חלקי המוצר — Frontend, Backend ו-Database. בסטארטאפים ובצוותים קטנים זה שווה זהב.
            הביקוש גבוה ורמת השכר גבוהה יותר מ-<Link href="/jobs/frontend" className="text-blue-600 hover:underline">Frontend</Link> או{' '}
            <Link href="/jobs/backend" className="text-blue-600 hover:underline">Backend</Link> בנפרד.
          </p>
          <h2 className="font-bold text-base text-gray-900">כמה מרוויח מפתח/ת Fullstack?</h2>
          <p>
            Junior: 15,000–22,000 ₪ | Mid: 25,000–38,000 ₪ | Senior: 38,000–55,000 ₪ | Tech Lead: 50,000–65,000 ₪.
            בסטארטאפים ובחברות product שכר ה-Fullstack לרוב גבוה ב-10–20% ממפתח Backend בלבד.
          </p>
          <h2 className="font-bold text-base text-gray-900">סטאקים נפוצים בישראל</h2>
          <p>
            React + Node.js (TypeScript), .NET Core + Angular/React, Python (FastAPI/Django) + React.
            שליטה ב-SQL ו-NoSQL — חובה. ניסיון ב-Docker ו-Cloud (AWS/Azure) — יתרון גדול.
          </p>
          <h2 className="font-bold text-base text-gray-900">איך נכנסים לתפקיד Fullstack?</h2>
          <p>
            הדרך הנפוצה היא להתחיל מ-Frontend או Backend ואז להרחיב לצד השני. בניית פרויקטים אישיים ב-GitHub
            שמדגימים שני הצדדים — API + UI — זו הדרך הטובה ביותר להוכיח יכולת Fullstack אמיתית.
          </p>
        </>
      }
    />
  );
}
