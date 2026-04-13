'use client';

import { useState } from 'react';

type Props = { jobTitle: string };

const experienceLevels = [
  { label: 'מתחיל (0-1 שנים)', score: 42 },
  { label: 'ביניים (1-3 שנים)', score: 67 },
  { label: 'מנוסה (3-6 שנים)', score: 84 },
  { label: 'בכיר (6+ שנים)', score: 91 },
];

function ScoreRing({ score }: { score: number }) {
  const color =
    score >= 80 ? 'text-green-500' : score >= 60 ? 'text-yellow-500' : 'text-red-400';
  const label =
    score >= 80 ? 'התאמה גבוהה' : score >= 60 ? 'התאמה טובה' : 'התאמה חלקית';

  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`text-5xl font-bold ${color}`}>{score}%</div>
      <div className={`text-sm font-medium ${color}`}>{label}</div>
    </div>
  );
}

export default function MatchScoreWidget({ jobTitle }: Props) {
  const [step, setStep] = useState<'idle' | 'form' | 'result'>('idle');
  const [experience, setExperience] = useState('');
  const [score, setScore] = useState(0);

  const handleCheck = () => {
    const found = experienceLevels.find((l) => l.label === experience);
    setScore(found?.score ?? 70);
    setStep('result');
  };

  if (step === 'idle') {
    return (
      <button
        onClick={() => setStep('form')}
        className="w-full border-2 border-dashed border-blue-200 rounded-xl p-5 text-center hover:border-blue-400 hover:bg-blue-50 transition-all group"
      >
        <div className="text-2xl mb-2">🎯</div>
        <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          בדוק כמה אתה מתאים למשרה
        </p>
        <p className="text-sm text-gray-400 mt-1">תשובה ב-10 שניות</p>
      </button>
    );
  }

  if (step === 'form') {
    return (
      <div className="border border-gray-100 rounded-xl p-5 bg-white">
        <h3 className="font-bold text-gray-900 mb-4">בדיקת התאמה — {jobTitle}</h3>
        <div className="space-y-2 mb-4">
          {experienceLevels.map((level) => (
            <label
              key={level.label}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                experience === level.label
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="experience"
                value={level.label}
                checked={experience === level.label}
                onChange={(e) => setExperience(e.target.value)}
                className="text-blue-600"
              />
              <span className="text-sm text-gray-700">{level.label}</span>
            </label>
          ))}
        </div>
        <button
          onClick={handleCheck}
          disabled={!experience}
          className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-40 text-sm"
        >
          בדוק התאמה
        </button>
      </div>
    );
  }

  return (
    <div className="border border-gray-100 rounded-xl p-6 bg-white text-center">
      <ScoreRing score={score} />
      <p className="text-sm text-gray-600 mt-4 leading-relaxed">
        {score >= 80
          ? 'הפרופיל שלך מתאים מאוד למשרה. הגש מועמדות — יש לך סיכוי טוב.'
          : score >= 60
          ? 'יש התאמה טובה. חזק את הניסיון הרלוונטי ב-CV לפני הגשה.'
          : 'ההתאמה חלקית. שקול לחזק תחומים ספציפיים לפני הגשה.'}
      </p>
      <div className="flex gap-2 mt-5">
        <button
          onClick={() => { setStep('idle'); setExperience(''); }}
          className="flex-1 border border-gray-200 text-gray-600 text-sm py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          בדוק שוב
        </button>
        <a
          href="#apply"
          className="flex-1 bg-blue-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
        >
          הגש מועמדות
        </a>
      </div>
    </div>
  );
}
