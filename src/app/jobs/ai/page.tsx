import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'דרושים AI בישראל – Machine Learning, LLM, Data Science | JobBoost',
  description: 'משרות AI ו-Machine Learning בישראל. ML Engineer, Data Scientist, LLM, GenAI. התחום הכי מבוקש ב-2026.',
  keywords: ['דרושים ai', 'machine learning jobs ישראל', 'data scientist', 'llm engineer', 'generative ai jobs'],
};

export default function AIPage() {
  return (
    <CategoryPageLayout
      title="דרושים AI ו-Machine Learning בישראל"
      subtitle="AI"
      description="משרות AI, Machine Learning ו-GenAI בחברות הייטק בישראל. ML Engineer, Data Scientist, LLM Developer, AI Product Manager. התחום הכי צומח ב-2026."
      currentHref="/jobs/ai"
      keywords={['דרושים ai', 'machine learning ישראל', 'data scientist jobs', 'llm engineer']}
      filterFn={(t, d) =>
        t.includes('ai') || t.includes('data scientist') ||
        d.includes('machine learning') || d.includes('llm') ||
        d.includes('ai-first') || d.includes('copilot') ||
        d.includes('vibe coding') || d.includes('גנרטיבי') ||
        d.includes('ai automation')
      }
      extraContent={
        <>
          <h2 className="font-bold text-base text-gray-900">AI בישראל — הזדמנות של דור</h2>
          <p>
            ישראל היא אחת מהמרכזים העולמיים של פיתוח AI — עשרות חברות ענן בינלאומיות (Google, Amazon, Intel, Microsoft) מפעילות מרכזי R&D בישראל.
            הביקוש למהנדסי AI ו-ML Engineer גדל ב-2026 באופן חסר תקדים. הכישורים הנדרשים: Python, PyTorch/TensorFlow, יסודות סטטיסטיקה, ו-LLM Fine-tuning.
          </p>
          <h2 className="font-bold text-base text-gray-900">שכר בתחום ה-AI</h2>
          <p>
            ML Engineer Junior: 28,000–38,000 ₪ | Mid: 38,000–55,000 ₪ | Senior: 55,000–75,000 ₪.
            Data Scientist: 28,000–50,000 ₪. AI Product Manager: 40,000–65,000 ₪.
            מומחי LLM ו-Fine-tuning — נישה שמגיעה ל-70,000–90,000 ₪ בחברות מובילות.
          </p>
          <h2 className="font-bold text-base text-gray-900">כיצד להיכנס לתחום ה-AI?</h2>
          <p>
            הדרך הנפוצה: <Link href="/jobs/data" className="text-blue-600 hover:underline">Data Science</Link> עם Python ו-Pandas →
            Machine Learning (Scikit-learn, PyTorch) → SpecializationB (NLP, Computer Vision, GenAI).
            מהנדסי <Link href="/jobs/backend" className="text-blue-600 hover:underline">Backend</Link> שמוסיפים ידע ב-ML APIs (OpenAI, Anthropic, Gemini) מוצאים את עצמם מבוקשים מאוד.
          </p>
        </>
      }
    />
  );
}
