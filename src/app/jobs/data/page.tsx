import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'דרושים דאטה בישראל – BI, Data Engineer, Data Scientist | JobBoost',
  description: 'משרות Data בישראל. BI Analyst, Data Engineer, Data Scientist, Power BI, DataStage. כל הרמות.',
  keywords: ['דרושים data', 'משרות bi', 'data engineer ישראל', 'data scientist', 'power bi developer'],
};

export default function DataPage() {
  return (
    <CategoryPageLayout
      title="דרושים דאטה בישראל – BI, Data Engineering ו-Data Science"
      subtitle="דאטה"
      description="משרות Data בחברות הייטק בישראל. BI Analyst, Data Engineer, Data Scientist, Power BI, DataStage, ETL. מ-Junior ועד Lead."
      currentHref="/jobs/data"
      keywords={['דרושים data', 'משרות bi', 'data engineer ישראל', 'data scientist jobs']}
      filterFn={(t, d) =>
        t.includes('datastage') || t.includes('power bi') ||
        t.includes('data scientist') || t.includes(' bi') ||
        d.includes('datastage') || d.includes('power bi') ||
        d.includes('etl') || d.includes('data scientist') ||
        (d.includes('bi') && d.includes('נתונים'))
      }
      extraContent={
        <>
          <h2 className="font-bold text-base text-gray-900">BI, Data Engineering או Data Science — מה ההבדל?</h2>
          <p>
            BI Analyst בונה דשבורדים ודוחות לקבלת החלטות עסקיות (Power BI, Tableau, Looker).
            Data Engineer בונה את ה-Pipelines שמביאים את הנתונים — ETL, DataStage, Spark, Kafka.
            Data Scientist מפתח/ת מודלים סטטיסטיים ו-Machine Learning לניבוי וניתוח מתקדם.
            SQL היא המיומנות המשותפת לכולם — בלי SQL לא נכנסים לאף תפקיד דאטה.
          </p>
          <h2 className="font-bold text-base text-gray-900">כמה מרוויחים בתחום הדאטה?</h2>
          <p>
            BI Analyst Junior: 18,000–26,000 ₪ | Mid: 25,000–35,000 ₪ | Senior: 32,000–45,000 ₪.
            Data Engineer: 22,000–40,000 ₪ | Data Scientist: 28,000–50,000 ₪.
            מומחי DataStage — נישה מבוקשת עם מעט מתחרים — מגיעים ל-40,000–55,000 ₪.
          </p>
          <h2 className="font-bold text-base text-gray-900">כיצד להיכנס לתחום הדאטה?</h2>
          <p>
            התחל/י עם SQL חזק + Python בסיסי. בנה/י Portfolio עם ניתוח נתונים אמיתי (Kaggle, פרויקטים פתוחים).
            BI Analyst הוא לרוב נקודת הכניסה הנגישה ביותר. מי שרוצה Data Science — Python + Pandas + Scikit-learn + קורס סטטיסטיקה.
            לתחום ה-AI המתרחב, ניתן לעיין גם ב<Link href="/jobs/ai" className="text-blue-600 hover:underline">משרות AI</Link>.
          </p>
        </>
      }
    />
  );
}
