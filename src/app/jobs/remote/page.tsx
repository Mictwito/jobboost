import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'דרושים Remote ו-היברידי בישראל – משרות מרחוק | JobBoost',
  description: 'משרות Remote ו-היברידי בחברות הייטק בישראל. עבודה מהבית, גמישות, פיתוח ועוד.',
  keywords: ['דרושים remote', 'עבודה מהבית ישראל', 'משרות היברידי', 'remote jobs israel', 'work from home tech'],
};

export default function RemotePage() {
  return (
    <CategoryPageLayout
      title="דרושים Remote ו-היברידי בישראל"
      subtitle="Remote"
      description="משרות הייטק עם אפשרות עבודה מרחוק (Remote) או היברידית בישראל. גמישות מקסימלית — עבוד/י מאיפה שנוח לך."
      currentHref="/jobs/remote"
      keywords={['דרושים remote', 'עבודה מהבית', 'משרות היברידי ישראל']}
      filterFn={(t, d) =>
        d.includes('היברידי') || d.includes('remote') || d.includes('מרחוק')
      }
      extraContent={
        <>
          <h2 className="font-bold text-base text-gray-900">Remote ו-היברידי — מה ההבדל?</h2>
          <p>
            Remote מלא = עבודה 100% מרחוק, ללא ימי נוכחות. היברידי = שילוב של ימי בית ונוכחות פיזית (לרוב 2–3 ימים בשבוע).
            בשוק הישראלי, מרבית המשרות ב-2026 הן היברידיות — חברות גדולות רבות חזרו לדרוש נוכחות חלקית לאחר תקופת הקורונה.
            Remote מלא נפוץ יותר בחברות בינלאומיות עם מרכזי R&D בישראל.
          </p>
          <h2 className="font-bold text-base text-gray-900">איזה תחומים מציעים הכי הרבה גמישות?</h2>
          <p>
            <Link href="/jobs/backend" className="text-blue-600 hover:underline">Backend</Link> ו-<Link href="/jobs/frontend" className="text-blue-600 hover:underline">Frontend</Link> —
            תחומים עם הכי הרבה אפשרויות היברידי/Remote. <Link href="/jobs/devops" className="text-blue-600 hover:underline">DevOps</Link> ו-<Link href="/jobs/ai" className="text-blue-600 hover:underline">AI</Link> —
            גמישות גבוהה מאוד. <Link href="/jobs/help-desk" className="text-blue-600 hover:underline">Help Desk</Link> ו-IT Support — בדרך כלל דורשים נוכחות פיזית.
          </p>
          <h2 className="font-bold text-base text-gray-900">טיפים לראיון עבודה Remote</h2>
          <p>
            הדגש/י ניסיון בעבודה עצמאית, ניהול זמן ותקשורת אסינכרונית (Slack, Jira, Confluence).
            הכן/י סביבת עבודה מקצועית ברקע הוידאו — זה חשוב יותר ממה שחושבים.
            שאל/י על תרבות ה-Remote של הצוות — האם יש standup יומי? כלי תיעוד? זמינות ציפיות?
          </p>
        </>
      }
    />
  );
}
