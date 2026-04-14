import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'דרושים סטארטאפים בישראל – כל המשרות | JobBoost',
  description: 'משרות הייטק בסטארטאפים ישראליים. פיתוח, QA, DevOps, דאטה, סייבר ועוד. הצטרף/י לאקוסיסטם הסטארטאפ הישראלי.',
  keywords: ['דרושים סטארטאפ', 'startup jobs ישראל', 'משרות הייטק סטארטאפ', 'tech startup israel'],
};

export default function StartupsPage() {
  return (
    <CategoryPageLayout
      title="דרושים בסטארטאפים ישראליים – כל המשרות"
      subtitle="סטארטאפים"
      description="כל משרות ההייטק שלנו — לחברות שמחפשות אנשים שרוצים להשפיע. פיתוח, QA, DevOps, דאטה, סייבר ועוד."
      currentHref="/jobs/startups"
      keywords={['דרושים סטארטאפ', 'startup jobs ישראל', 'משרות הייטק']}
      filterFn={() => true}
      extraContent={
        <>
          <h2 className="font-bold text-base text-gray-900">למה לעבוד בסטארטאפ?</h2>
          <p>
            בסטארטאפ ישראלי תעבוד על מוצר אמיתי, תרגיש את ההשפעה ישירות, ותלמד פי 3 ממה שתלמד בארגון גדול.
            הסיכון? יציבות נמוכה יחסית לחברות הגדולות. הפרס? אקוויטי, קידום מהיר, וקריירה שנבנית מהר.
            אקוסיסטם הסטארטאפ הישראלי הוא מהחזקים בעולם — Tel Aviv Tech מדורגת בין 10 הערים הטכנולוגיות המובילות גלובלית.
          </p>
          <h2 className="font-bold text-base text-gray-900">מה לחפש בהצעת עבודה מסטארטאפ?</h2>
          <p>
            בדוק/י: מימון (Seed, Series A, B?), Runway (כמה חודשים יש לחברה?), גודל הצוות, הלגיטימציה של המייסדים.
            שכר בסטארטאפ לרוב 10–20% מתחת לשוק — אבל צריך להחשיב את האופציות (Options).
            חברה בשלב Series A+ עם 20–50 עובדים היא נקודת הכניסה המומלצת ביותר.
          </p>
          <h2 className="font-bold text-base text-gray-900">תחומים מבוקשים בסטארטאפים</h2>
          <p>
            <Link href="/jobs/fullstack" className="text-blue-600 hover:underline">Fullstack</Link> הוא התפקיד הכי מבוקש בסטארטאפים קטנים.{' '}
            <Link href="/jobs/devops" className="text-blue-600 hover:underline">DevOps</Link> ו-<Link href="/jobs/ai" className="text-blue-600 hover:underline">AI</Link> הם הכי חמים ב-2026.
            בסטארטאפ אחד תקבל ניסיון שבחברה גדולה היה לוקח 5 שנים.
          </p>
        </>
      }
    />
  );
}
