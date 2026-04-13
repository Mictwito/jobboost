import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-24">
      <div className="text-8xl font-bold text-gray-100 mb-2 select-none">404</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-3">הדף לא נמצא</h1>
      <p className="text-gray-500 mb-8 max-w-sm">
        הדף שחיפשת אינו קיים, או שהקישור שגוי. אולי המשרה הוסרה?
      </p>
      <div className="flex gap-3 flex-wrap justify-center">
        <Link
          href="/jobs"
          className="bg-blue-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          לכל המשרות
        </Link>
        <Link
          href="/"
          className="border border-gray-200 text-gray-700 font-medium px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm"
        >
          דף הבית
        </Link>
      </div>
    </div>
  );
}
