import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'דרושים Backend בישראל – Node.js, .NET, Python | JobBoost',
  description: 'משרות Backend Developer בישראל. Node.js, .NET Core, Python, Java. כל הרמות.',
  keywords: ['דרושים backend', 'משרות node.js', 'דרושים .net', 'backend developer ישראל', 'python developer'],
};

export default function BackendPage() {
  return (
    <CategoryPageLayout
      title="דרושים Backend בישראל – Node.js, .NET, Python ו-Java"
      subtitle="Backend"
      description="משרות Backend Developer בחברות הייטק בישראל. Node.js, .NET Core, Python, Java, Go, Microservices ו-APIs. Junior, Mid ו-Senior."
      currentHref="/jobs/backend"
      keywords={['דרושים backend', 'משרות node.js', 'דרושים .net', 'backend developer ישראל']}
      filterFn={(t, d) =>
        t.includes('backend') ||
        d.includes('backend') || d.includes('.net core') ||
        d.includes('node.js') || d.includes('fastapi') ||
        d.includes('web api') || d.includes('rest api') || d.includes('microservices')
      }
      extraContent={
        <>
          <h2 className="font-bold text-base text-gray-900">מה עושה מפתח/ת Backend?</h2>
          <p>
            מפתח/ת Backend מפתח/ת את הלוגיקה העסקית, מסדי הנתונים, ה-APIs והתשתיות שמאחורי הקלעים.
            בישראל הסטאק הנפוץ ביותר הוא .NET Core, Node.js ו-Python, עם מעבר הדרגתי ל-Cloud-native ו-Microservices.
            רוב המשרות דורשות שליטה ב-REST APIs, SQL ולפחות ניסיון בסביבת ענן (AWS, Azure או GCP).
          </p>
          <h2 className="font-bold text-base text-gray-900">כמה מרוויח מפתח/ת Backend?</h2>
          <p>
            Junior: 14,000–20,000 ₪ | Mid: 22,000–32,000 ₪ | Senior: 32,000–48,000 ₪ | Tech Lead: 45,000–60,000 ₪.
            מפתחי .NET ו-Java בחברות Enterprise מגיעים לשכר גבוה יותר בהשוואה לממוצע.
          </p>
          <h2 className="font-bold text-base text-gray-900">מסלול קריירה Backend</h2>
          <p>
            Junior Backend → Mid עם ניסיון בביצועים, DB optimization ו-API design → Senior עם ידע בארכיטקטורת Microservices,
            Message Queues (Kafka/RabbitMQ) ו-Distributed Systems → Architect. מפתחי Backend שרוכשים ידע ב-Frontend
            עוברים בקלות ל-<Link href="/jobs/fullstack" className="text-blue-600 hover:underline">Fullstack</Link>.
            מי שנוטה לתשתיות — הדרך היא ל-<Link href="/jobs/devops" className="text-blue-600 hover:underline">DevOps</Link>.
          </p>
          <h2 className="font-bold text-base text-gray-900">סטאקים מבוקשים בישראל ב-2026</h2>
          <p>
            .NET Core (C#) הוא הסטאק הדומיננטי בחברות Enterprise ובמגזר הציבורי. Node.js (TypeScript) פופולרי בסטארטאפים.
            Python עם FastAPI או Django עולה במהירות בחברות Data ו-AI. Java (Spring Boot) נפוץ בחברות פיננסיות וגדולות.
          </p>
        </>
      }
    />
  );
}
