export type Job = {
  slug: string;
  title: string;
  company: string;
  location: string;
  type: 'משרה מלאה' | 'משרה חלקית' | 'פרילנס' | 'היברידי';
  category: string;
  description: string;
  requirements: string[];
  whyApply: string;
  whoIsItFor: string;
  tips: string;
  howToGetHired: string;
  whatRecruiterLooksFor: string;
  postedAt: string;
  isActive: boolean;
};

export const jobs: Job[] = [
  {
    slug: 'fullstack-developer-tel-aviv',
    title: 'מפתח Full Stack',
    company: 'חברת SaaS בצמיחה מהירה',
    location: 'תל אביב',
    type: 'משרה מלאה',
    category: 'פיתוח',
    description:
      'הצוות גדל ואנחנו מחפשים מפתח Full Stack שלוקח בעיה מהקצה ועד הקצה — UI, API, DB. עובדים על מוצר B2B בסקייל גבוה עם ארכיטקטורת מיקרוסרוויסים.',
    requirements: [
      'ניסיון של 3+ שנים בפיתוח Full Stack',
      'שליטה ב-React ו-Node.js',
      'ניסיון עם SQL ו-NoSQL',
      'TypeScript — חובה',
      'ניסיון עם ארכיטקטורת מיקרוסרוויסים',
    ],
    whyApply:
      'צוות קטן שמשפיע על מוצר שמשתמשים בו אלפי לקוחות. אוטונומיה מלאה, code review אמיתי ותרבות של למידה מתמשכת.',
    whoIsItFor:
      'מפתח Full Stack שרוצה בעלות על פיצ\'רים מקצה לקצה, ולא רק לקבל טיקטים לביצוע.',
    tips: 'הכן פרויקט GitHub שמראה ארכיטקטורה מחושבת — לא רק שכל הבדיקות עוברות, אלא שקיבלת החלטות מנומקות.',
    howToGetHired:
      'שלח GitHub עם README שמסביר למה קיבלת החלטות ארכיטקטוניות. בראיון הטכני: צפה ל-system design ול-live coding בנושאי async ו-state management. אם יש לך ניסיון עם performance optimization — הבא דוגמה מוכנה.',
    whatRecruiterLooksFor:
      'מי שלוקח פיצ\'ר מהסוף לסוף ולא מחכה לטיקטים. יכולת להחליט על trade-offs ולהסביר אותם. קוד שניתן לתחזוקה — לא רק קוד שעובד.',
    postedAt: '2026-04-10',
    isActive: true,
  },
  {
    slug: 'senior-frontend-herzliya',
    title: 'מפתח Frontend בכיר',
    company: 'סקייל-אפ בתחום הפינטק',
    location: 'הרצליה',
    type: 'היברידי',
    category: 'פיתוח',
    description:
      'בונים Design System חדש מאפס ומחפשים מישהו שחי את ה-Frontend — תשתית קומפוננטות, ביצועים, נגישות. לא תפקיד תחזוקה — תפקיד בנייה.',
    requirements: [
      'ניסיון של 4+ שנים ב-React',
      'שליטה עמוקה ב-TypeScript',
      'ניסיון בבניית Design Systems',
      'הבנת נגישות WCAG 2.1',
      'ניסיון עם Storybook — יתרון',
    ],
    whyApply:
      'שלב ייסודי בבניית תשתית Frontend שתשרת צוותים רבים. השפעה ארכיטקטורית אמיתית עם חופש להחליט על standard.',
    whoIsItFor:
      'מפתח שמתוסכל מפיצ\'ים קטנים ורוצה להוביל תשתית שמשפיעה על כלל הפיתוח בחברה.',
    tips: 'הכן דוגמאות לקומפוננטות שכתבת שאחרים השתמשו בהן. API design של קומפוננטה = כרטיס הביקור שלך.',
    howToGetHired:
      'הגש עם Storybook או CodeSandbox שמדגים Design System שבנית. בראיון: הכן דיון על איך תכנן קומפוננטת Button שתתמוך ב-10 variants שונים. זה מה שמבדל.',
    whatRecruiterLooksFor:
      'מישהו שחושב על API של קומפוננטה לפני שמצייר אותה. ניסיון בניהול state מורכב ויכולת להוביל frontend architecture — לא רק לממש designs.',
    postedAt: '2026-04-09',
    isActive: true,
  },
  {
    slug: 'backend-developer-jerusalem',
    title: 'מפתח Backend',
    company: 'ארגון טכנולוגי מוביל',
    location: 'ירושלים',
    type: 'משרה מלאה',
    category: 'פיתוח',
    description:
      'אם Backend הוא השפה הטבעית שלך — כנס. בונים APIs שמשרתים מיליוני בקשות ביום ומחפשים מי שמבין ביצועים, אמינות וסקייל.',
    requirements: [
      'ניסיון של 3+ שנים בפיתוח Backend',
      'שליטה ב-Python או Node.js',
      'ניסיון עם PostgreSQL, Redis ו-Kafka',
      'הבנת REST ו-gRPC',
      'ניסיון עם AWS או GCP',
    ],
    whyApply:
      'כתיבת קוד שמשפיע על מיליוני משתמשים. תשתית מודרנית, CI/CD מגובה, ותרבות של Engineering Excellence.',
    whoIsItFor:
      'מפתח שרוצה לפתור בעיות של סקייל ואמינות — לא רק להוסיף endpoints.',
    tips: 'הכן דוגמה של בעיית ביצועים שפתרת — bottleneck שזיהית, ה-profiling שעשית, והפתרון שבחרת.',
    howToGetHired:
      'הדגש ניסיון עם high-throughput systems. בראיון: שאלות DB optimization ו-concurrency הן נפוצות. הכן להסביר אינדקסים, connection pooling ואת ההבדל בין optimistic ל-pessimistic locking.',
    whatRecruiterLooksFor:
      'מי שחושב על error handling לפני שכותב happy path. ניסיון עם production incidents — ולא רק פיתוח. יכולת לכתוב קוד שאחרים יכולים לתחזק.',
    postedAt: '2026-04-09',
    isActive: true,
  },
  {
    slug: 'fullstack-senior-ramat-gan',
    title: 'Full Stack Engineer — SaaS',
    company: 'סטארטאפ בשלב Seed',
    location: 'רמת גן',
    type: 'משרה מלאה',
    category: 'פיתוח',
    description:
      'תפקיד מפתח בצוות שבונה מוצר SaaS מ-0. הצוות הטכני קטן ומשפיעי, וכל engineer נוגע בכל השכבות — product, infra, ו-code.',
    requirements: [
      'ניסיון של 5+ שנים בפיתוח Full Stack',
      'ניסיון בסביבת SaaS / Startup',
      'שליטה ב-Next.js ו-Node.js',
      'ניסיון עם cloud infrastructure',
      'יכולת לקחת ownership מלא על פיצ\'רים',
    ],
    whyApply:
      'להיות engineer מספר 5 בחברה שגייסה Seed וגדלה מהר. Equity package אמיתי, ותרגיש את ההשפעה שלך בכל sprint.',
    whoIsItFor:
      'מי שמכיר את ההבדל בין startup לקורפורייט ומעדיף מהירות, אוטונומיה וסיכון מחושב על פני בירוקרטיה.',
    tips: 'ספר על מוצר שבנית מא\' לת\'. כמה זמן לקח? מה הייתה ה-trade-off הכי קשה? זה מה שמשקף אותך.',
    howToGetHired:
      'בסטארטאפ בשלב Seed — הראיון מוציא לידי בטוי versatility. הכן לדבר על כל השכבות: DB schema design, API rate limiting, ו-UX של feature שבנית. ספר מה הייתה הטעות הכי גדולה שעשית ומה למדת.',
    whatRecruiterLooksFor:
      'מי שנוח עם uncertainty — שיכול לקבל החלטה עם 60% מידע במקום 100%. גם: ownership רגשי על המוצר. אם לא אכפת לך אם ה-feature עבד — זה לא הסביבה.',
    postedAt: '2026-04-08',
    isActive: true,
  },
  {
    slug: 'devops-engineer-tel-aviv',
    title: 'DevOps Engineer',
    company: 'חברת ענן ישראלית',
    location: 'תל אביב',
    type: 'משרה מלאה',
    category: 'DevOps',
    description:
      'DevOps לא רק כי צריך — אלא כי חיים את זה. מחפשים מישהו שבונה pipelines שאנשים אוהבים להשתמש בהם, ולא רק שעובדים.',
    requirements: [
      'ניסיון של 3+ שנים ב-DevOps',
      'שליטה ב-Kubernetes ו-Docker',
      'ניסיון עם Terraform ו-IaC',
      'ניסיון עם AWS או GCP בפרודקשן',
      'ניסיון עם Prometheus, Grafana, ו-alerting',
    ],
    whyApply:
      'תשתית cloud-native מהיום הראשון. צוות DevOps עצמאי עם גישה לכל הסטאק ושיתוף פעולה ישיר עם צוותי פיתוח.',
    whoIsItFor:
      'מישהו שמתוסכל מ-legacy infrastructure ורוצה לבנות דברים נכון — IaC, GitOps, observability מלא.',
    tips: 'הכן דוגמה לאוטומציה שחסכה זמן לצוות הפיתוח. DevOps שמשפר חיי מפתחים — זה מה שמעריכים.',
    howToGetHired:
      'הכן דיאגרמה של CI/CD pipeline שבנית — כולל rollback strategy. בראיון: שאלות על K8s troubleshooting (OOMKilled, CrashLoopBackOff) וניהול secrets הן נפוצות. הכר את ההבדל בין Helm ל-Kustomize.',
    whatRecruiterLooksFor:
      'מי שמוצא את ה-bottleneck לפני שמישהו מתלונן. יכולת לכתוב runbooks שאנשים אחרים משתמשים בהם. ולא פחות חשוב — On-Call mentality: לא רק לפתור, לגם להבין למה זה קרה.',
    postedAt: '2026-04-08',
    isActive: true,
  },
  {
    slug: 'devops-cloud-netanya',
    title: 'Cloud Engineer',
    company: 'מרכז R&D של חברה גלובלית',
    location: 'נתניה',
    type: 'היברידי',
    category: 'DevOps',
    description:
      'צוות ה-Cloud מתרחב ואנחנו מחפשים מהנדס שאוהב לחשוב בתשתית כקוד. Multi-cloud environment, EKS ו-GKE בפרודקשן, ומשימות שדורשות ראש של אדריכל.',
    requirements: [
      'ניסיון של 2+ שנים על AWS או GCP',
      'ניסיון עם Kubernetes בפרודקשן',
      'שליטה ב-Terraform',
      'הבנת רשתות, DNS, load balancing',
      'ניסיון עם CI/CD (GitHub Actions, ArgoCD)',
    ],
    whyApply:
      'סביבת multi-cloud מתקדמת, תמיכה בלמידה ורישיונות Cloud Certification, ועבודה עם צוות שאוהב לחלוק ידע.',
    whoIsItFor:
      'מישהו שמרגיש בבית בין YAML ל-Terraform, ושמבין שתשתית טובה היא זו שאנשים לא שמים לב שהיא קיימת.',
    tips: 'הכן diagram של ארכיטקטורת cloud שתכננת. להראות שאתה חושב במערכות — לא רק בשירותים בודדים.',
    howToGetHired:
      'הכר את הפרויקטים ב-CNCF Landscape — לא חייב לדעת הכל, אבל דע מה כל שכבה פותרת. בראיון: שאלות networking הן כמעט תמיד נוכחות. הכן לדבר על VPC design, private vs public subnets, ו-NAT Gateway.',
    whatRecruiterLooksFor:
      'מהנדס שחושב על cost optimization — לא רק שה-infra עובד. ניסיון עם disaster recovery ו-RTO/RPO שמבין מה הם אומרים בפרקטיקה.',
    postedAt: '2026-04-07',
    isActive: true,
  },
  {
    slug: 'qa-engineer-petah-tikva',
    title: 'QA Engineer',
    company: 'חברת B2B בצמיחה',
    location: 'פתח תקווה',
    type: 'משרה מלאה',
    category: 'QA',
    description:
      'מחפשים QA שחושב כמו מפתח ומוצא בעיות כמו משתמש. שילוב של manual ו-automation testing, עם גישה לכל השכבות — API, UI, ו-performance.',
    requirements: [
      'ניסיון של 2+ שנים ב-QA',
      'ניסיון עם Selenium או Playwright',
      'הבנת REST APIs ויכולת לבדוק עם Postman',
      'ניסיון בכתיבת test cases מובנים',
      'Python או JavaScript ברמה סבירה',
    ],
    whyApply:
      'QA שנלקח ברצינות — ישיבות design, גישה ל-codebase, ויכולת לחסום release. לא רק "לבדוק לפני release".',
    whoIsItFor:
      'QA שנמאס לו ממסמכי Excel ורוצה לכתוב קוד, להשפיע על תהליכים ולחיות בתוך צוות פיתוח אמיתי.',
    tips: 'הכן דוגמה לבאג שמצאת שאחרים לא מצאו — ואיך חשבת עליו. החשיבה האנליטית = כל הוויבה של ראיון QA.',
    howToGetHired:
      'הכן דוגמה של test plan מלא לפיצ\'ר — לא רק happy path. בראיון: תשאלו על exploratory testing methodology. מגייסים רוצים לראות שאתה חושב על edge cases שאיש לא חשב עליהם.',
    whatRecruiterLooksFor:
      'מי שמסתכל על פיצ\'ר ורואה 5 דרכים לשבור אותו לפני שהמפתח אפילו סיים. לא perfectionism — אלא prioritization: איזה באג חשוב לסגור לפני release ואיזה לא.',
    postedAt: '2026-04-07',
    isActive: true,
  },
  {
    slug: 'qa-automation-ramat-gan',
    title: 'QA Automation Engineer',
    company: 'חברת Insurtech',
    location: 'רמת גן',
    type: 'משרה מלאה',
    category: 'QA',
    description:
      'Automation בלבד — בונים מערך בדיקות אוטומטיות שמריץ אלפי טסטים ב-CI. מחפשים מישהו שרואה automation כמוצר בפני עצמו.',
    requirements: [
      'ניסיון של 3+ שנים ב-QA Automation',
      'שליטה ב-Selenium, Cypress או Playwright',
      'ניסיון עם CI/CD integration',
      'Python או Java — חובה',
      'ניסיון עם API ו-contract testing',
    ],
    whyApply:
      'תוביל בניית תשתית automation מ-0 עם budget ותמיכה. המטרה היא coverage של 80%+ תוך שנה.',
    whoIsItFor:
      'מי שמבין שבדיקה אוטומטית לא מחליפה manual — אלא מאפשרת ל-manual לעשות את מה שרק בני אדם יכולים.',
    tips: 'הכן דוגמה ל-test framework שבנית — היררכיה, naming conventions, ואיך טיפלת ב-flaky tests.',
    howToGetHired:
      'הדגש את יכולת ה-framework design — לא רק שכתבת טסטים. הכן להסביר Page Object Model, fixture management, ואיך אתה מאבחן flaky test. בונוס גדול: ניסיון עם visual regression testing.',
    whatRecruiterLooksFor:
      'Engineer שמתייחס ל-test code כמו ל-production code — עם reviews, refactoring ו-maintenance. ולא פחות חשוב: יכולת להסביר ל-developer מה השבור ולמה — בלי אגו.',
    postedAt: '2026-04-06',
    isActive: true,
  },
  {
    slug: 'data-engineer-haifa',
    title: 'Data Engineer',
    company: 'חברת ביג דאטה',
    location: 'חיפה',
    type: 'משרה מלאה',
    category: 'נתונים',
    description:
      'בונים Data Platform חדש שיחליף pipeline ישן ורעוע. מחפשים Data Engineer שמבין batch ו-streaming, ושאוהב לבנות דברים שיחזיקו מעמד.',
    requirements: [
      'ניסיון של 3+ שנים ב-Data Engineering',
      'שליטה ב-Python ו-SQL',
      'ניסיון עם Spark, Airflow או Kafka',
      'ניסיון עם Data Warehouse (BigQuery, Redshift, Snowflake)',
      'הבנת data modeling ו-ELT/ETL',
    ],
    whyApply:
      'מיגרציה מלאה ל-modern data stack — Snowflake, dbt, Airflow 2. תקצב לכלים, חופש בארכיטקטורה, וצוות שמעריך ניקיון.',
    whoIsItFor:
      'Data Engineer שמתוסכל מ-pipelines שאף אחד לא מבין, ורוצה לבנות משהו שאנשים ישמחו לתחזק.',
    tips: 'הכן דוגמה ל-pipeline שבנית — source, transformations, target, ומה שהיית משנה היום. כנות = זכרון.',
    howToGetHired:
      'הכר dbt — גם אם לא עבדת איתו, הכנה בסיסית תרשים. בראיון: שאלות על data modeling (star schema, data vault) וטיפול ב-late-arriving data. הכן לדבר על monitoring ו-data quality checks.',
    whatRecruiterLooksFor:
      'מי שמסתכל על pipeline ושואל "מה קורה אם ה-source לא הגיע?" לפני שמישהו אחר שואל. Reliability mindset — לא רק לבנות מהר.',
    postedAt: '2026-04-06',
    isActive: true,
  },
  {
    slug: 'data-scientist-herzliya',
    title: 'Data Scientist',
    company: 'חברת אנליטיקס',
    location: 'הרצליה',
    type: 'משרה מלאה',
    category: 'נתונים',
    description:
      'לא Data Analyst ולא ML Engineer — Data Scientist שבונה מודלים שעולים לפרודקשן ומשפיעים על החלטות עסקיות. מחקר, ניסויים, A/B testing, ו-deployment אמיתי.',
    requirements: [
      'ניסיון של 2+ שנים ב-Data Science',
      'שליטה ב-Python: pandas, scikit-learn, XGBoost',
      'ניסיון עם SQL בסקייל',
      'הבנת Statistical Testing ו-experimentation',
      'ניסיון עם MLflow או Weights & Biases — יתרון',
    ],
    whyApply:
      'מודלים שמשפיעים על מיליוני משתמשים. גישה לנתונים עשירים ושיתוף פעולה עם Product ו-Engineering.',
    whoIsItFor:
      'Data Scientist שרוצה שהעבודה שלו תצא מ-Jupyter Notebook ותגיע לפרודקשן — עם impact מדיד.',
    tips: 'הכן Case Study של ניסוי שהרצת: השערה, design, תוצאות, ומה למדת גם אם נכשל. אנחנו רוצים מדענים, לא רק מי שמריץ מודלים.',
    howToGetHired:
      'הכן Notebook מסודר שמציג ניתוח מעניין — לא מדגם Titanic. הדגש שאתה יודע לתקשר ממצאים ל-stakeholders שלא יודעים סטטיסטיקה. בראיון: שאלות על A/B test design ו-Simpson\'s Paradox הן נפוצות.',
    whatRecruiterLooksFor:
      'מי שיודע להגיד "המודל הזה לא טוב מספיק — עדיף rule-based כאן". Scientific skepticism כלפי תוצאות גבוהות מדי. ויכולת להסביר מודל מורכב בשתי שורות.',
    postedAt: '2026-04-05',
    isActive: true,
  },
  {
    slug: 'ml-engineer-tel-aviv',
    title: 'ML Engineer',
    company: 'סטארטאפ בתחום ה-AI',
    location: 'תל אביב',
    type: 'משרה מלאה',
    category: 'AI / ML',
    description:
      'הגבול בין Data Science לפיתוח — זה אנחנו. בונים ML pipelines מ-training ועד serving, שומרים מודלים חיים בפרודקשן, ומשלבים LLMs במוצרים אמיתיים.',
    requirements: [
      'ניסיון של 2+ שנים ב-ML Engineering',
      'שליטה ב-Python ו-PyTorch או TensorFlow',
      'ניסיון עם model serving (TorchServe, BentoML)',
      'הבנת feature stores ו-ML pipelines',
      'ניסיון עם LLMs ו-fine-tuning — יתרון',
    ],
    whyApply:
      'עבודה עם מודלים מתקדמים, תשתית MLOps מודרנית, ופרויקטים שמשלבים GenAI במוצר שמשתמשים בו מדי יום.',
    whoIsItFor:
      'מהנדס שחי בין הקוד לבין המתמטיקה — שאוהב גם לאמן מודל וגם לדאוג שה-latency בפרודקשן יהיה קביל.',
    tips: 'הכן ניסיון עם inference optimization — quantization, batching, caching. ה"קל" זה לאמן מודל. ה"קשה" זה להריץ אותו מהר.',
    howToGetHired:
      'הדגש ניסיון עם MLOps — לא רק modeling. הכן לדבר על model versioning, A/B testing בין מודלים, ו-monitoring לdrift. ניסיון עם Kubeflow או Vertex AI הוא יתרון גדול.',
    whatRecruiterLooksFor:
      'מהנדס שלא מרוצה מ-"המודל עובד על בדיקות" ורוצה לראות אותו עובד ב-production על traffic אמיתי. reliability ו-reproducibility — לא רק accuracy.',
    postedAt: '2026-04-05',
    isActive: true,
  },
  {
    slug: 'ai-engineer-tel-aviv',
    title: 'AI / LLM Engineer',
    company: 'חברת AI מובילה',
    location: 'תל אביב',
    type: 'היברידי',
    category: 'AI / ML',
    description:
      'בונים מוצר AI-native ומחפשים מהנדס שמבין LLMs לעומק — לא רק קורא API, אלא יודע מתי לעשות RAG, מתי fine-tuning, ומתי בכלל לא להשתמש ב-AI.',
    requirements: [
      'ניסיון של שנה+ עם LLMs (OpenAI, Anthropic, Gemini)',
      'ניסיון בבניית RAG pipelines',
      'שליטה ב-Python',
      'הבנת prompt engineering ו-evaluation frameworks',
      'ניסיון עם LangChain, LlamaIndex או Haystack',
    ],
    whyApply:
      'מוצר שמשתמש ב-AI כי זה הופך אותו טוב — לא כי זה trend. תעצב את הארכיטקטורה עם ה-CTO ותוביל החלטות על model selection.',
    whoIsItFor:
      'מהנדס שיכול להסביר למה GPT-4 ענה תשובה שגויה ויודע איך לתקן את זה — לא רק לכוונן את ה-prompt.',
    tips: 'הכן pipeline עם LLM — כולל evaluation: איך מדדת שזה עובד טוב? זה המבחן האמיתי.',
    howToGetHired:
      'הכן demo של RAG pipeline שבנית — עם evaluation metrics. בראיון: הכן לדבר על chunking strategies, embedding models comparison, ו-retrieval evaluation. הדגש ניסיון עם hallucination detection.',
    whatRecruiterLooksFor:
      'מי שיודע להגיד "LLM לא מתאים לזה" ומציע alternative. LLM skeptic שיודע גם לבנות — זה הפרופיל הנדיר שמחפשים.',
    postedAt: '2026-04-04',
    isActive: true,
  },
  {
    slug: 'cyber-security-analyst-tel-aviv',
    title: 'Cyber Security Analyst',
    company: 'חברת סייבר מובילה',
    location: 'תל אביב',
    type: 'משרה מלאה',
    category: 'סייבר',
    description:
      'מחפשים אנליסט סייבר לצוות ה-SOC — מי שיודע לזהות, לנתח ולהגיב לאירועי אבטחה בזמן אמת. עבודה עם SIEM, threat hunting, וניתוח forensics.',
    requirements: [
      'ניסיון של 2+ שנים ב-SOC או Incident Response',
      'ניסיון עם SIEM (Splunk, QRadar, Sentinel)',
      'הבנת TCP/IP, attack vectors ו-MITRE ATT&CK',
      'ניסיון עם malware analysis — יתרון',
      'CompTIA Security+ או CEH — יתרון',
    ],
    whyApply:
      'SOC עם תשתית מודרנית, exposure לאיומים מגוונים, ומנטורינג מאנשי סייבר עם ניסיון עשיר.',
    whoIsItFor:
      'מי שרואה alert ב-SIEM ולא נסגר עד שמבין מה קרה לגמרי — לא רק אם זה TP או FP.',
    tips: 'הכן תיאור של incident שטיפלת בו: מה ראית, מה חשדת, מה מצאת. תהליך החשיבה = הכל.',
    howToGetHired:
      'הכר את MITRE ATT&CK — לא רק כ-framework אלא כשפה. בראיון: תשאלו על Lateral Movement ו-Living off the Land attacks. הכן לדבר על how you distinguish noise from real threats.',
    whatRecruiterLooksFor:
      'Analyst שמחפש context — לא רק שמסמן FP/TP. מי שמבין שmaybe זה legitimate tool used maliciously. וגם: יכולת לכתוב report ברור שה-CISO יכול לקרוא.',
    postedAt: '2026-04-04',
    isActive: true,
  },
  {
    slug: 'penetration-tester-tel-aviv',
    title: 'Penetration Tester',
    company: 'חברת סייבר מובילה',
    location: 'תל אביב',
    type: 'משרה מלאה',
    category: 'סייבר',
    description:
      'לחפש חורים בסיסטמים לפני שמישהו אחר מוצא אותם. Pen Testing של אפליקציות web, APIs, ו-internal networks. כתיבת דוחות ברמה גבוהה.',
    requirements: [
      'ניסיון של 2+ שנים ב-Penetration Testing',
      'שליטה ב-Burp Suite, Metasploit, ו-Nmap',
      'הבנת OWASP Top 10 ו-CVE analysis',
      'ניסיון עם web application testing',
      'OSCP — יתרון משמעותי',
    ],
    whyApply:
      'פרויקטים מגוונים — web, mobile, network, ו-red team engagements. חשיפה לסביבות מורכבות ועבודה עם לקוחות אנטרפרייז.',
    whoIsItFor:
      'מי שמוצא עניין משמעותי בלמצוא ולתעד חולשות — ושמבין שdoc טוב הוא חצי מהעבודה.',
    tips: 'הכן דוגמה לממצא מעניין שמצאת — לא חייב להיות קריטי, אלא כזה שדרש חשיבה מחוץ לקופסא.',
    howToGetHired:
      'OSCP פותח דלתות — גם אם עדיין בתהליך, ציין את זה. הכן lab environment משלך (HackTheBox, TryHackMe). בראיון: צפה לתרחיש מעשי — "יש לך X שעות על מערכת זו, איפה מתחיל?"',
    whatRecruiterLooksFor:
      'Ethical hacker שחושב methodically — לא רק רץ scanners. יכולת לתעד ממצאים בצורה שMBAist יבין, לא רק טכנאים. ומנטליות של "responsible disclosure".',
    postedAt: '2026-04-03',
    isActive: true,
  },
  {
    slug: 'backend-python-beer-sheva',
    title: 'מפתח Backend — Python',
    company: 'סטארטאפ Deep Tech',
    location: 'באר שבע',
    type: 'היברידי',
    category: 'פיתוח',
    description:
      'צוות ה-Backend עובד ב-Python ומחפש מי שאוהב לכתוב קוד נקי, לתכנן APIs טובים, ולחשוב על edge cases לפני שהם הופכים לבאגים בפרודקשן.',
    requirements: [
      'ניסיון של 2+ שנים בפיתוח Backend עם Python',
      'שליטה ב-FastAPI או Django REST Framework',
      'ניסיון עם PostgreSQL ו-Redis',
      'הבנת async programming ב-Python',
      'ניסיון עם Docker ו-basic CI/CD',
    ],
    whyApply:
      'Stack נקי ומודרני, codebase שאפשר להתגאות בו, ו-on-call שלא ישבש את החיים. היברידי אמיתי.',
    whoIsItFor:
      'מפתח Python שרוצה לבנות APIs שמחזיקים מעמד, עם focus על testability ו-observability.',
    tips: 'הכן דוגמה ל-API שהוא גם מהיר וגם תיעודי — OpenAPI schema, error handling, ו-validation.',
    howToGetHired:
      'הכן דוגמה של FastAPI application עם proper error handling ו-Pydantic models. בראיון: שאלות על Python asyncio ו-GIL הן נפוצות. הדגש ניסיון עם type hints ו-testing עם pytest.',
    whatRecruiterLooksFor:
      'מי שכותב docstring לפני שכותב קוד. Pythonic code — לא Java שנכתב ב-Python. ויכולת לקרוא traceback ולאבחן בעיה בלי debugger.',
    postedAt: '2026-04-03',
    isActive: true,
  },
  {
    slug: 'system-engineer-haifa',
    title: 'System Engineer',
    company: 'קבוצת אנטרפרייז',
    location: 'חיפה',
    type: 'משרה מלאה',
    category: 'IT / תשתיות',
    description:
      'אחריות על תשתית ה-IT — servers, networking, storage ו-virtualization. תפקיד שדורש ידיים, ראש של אדריכל, ויכולת להסביר לאנשי פיתוח למה הבקשה שלהם בעייתית.',
    requirements: [
      'ניסיון של 3+ שנים כ-System Engineer',
      'שליטה ב-Linux ו-Windows Server',
      'ניסיון עם VMware או Hyper-V',
      'הבנת networking: VLANs, routing, firewalls',
      'ניסיון עם Backup ו-DR procedures',
    ],
    whyApply:
      'תשתית מודרנית, תקציב להשקעה, ועצמאות לנהל את הסביבה כפי שאתה מאמין. לא רק "לכבות שריפות".',
    whoIsItFor:
      'מישהו שמגיע בבוקר, רואה בעיה שאף אחד לא ביקש לפתור, ופותר אותה — כי זה מה שצריך.',
    tips: 'הכן דוגמה של incident תשתיתי שפתרת תחת לחץ — מה שבר, מה עשית קודם, ואיך מנעת הישנות.',
    howToGetHired:
      'הכן להסביר את ה-DR plan שתכנת או היית חלק ממנו — RTO, RPO, ו-failover testing. בראיון: שאלות troubleshooting לינוקס (high load, disk full, network latency) הן standard. הכן command שפה.',
    whatRecruiterLooksFor:
      'מהנדס שתועד — runbooks, change logs, post-mortems. תשתית שאף אחד לא מבין את הarchitecture שלה = תשתית שלא ניתן לתחזק. ולכן: documentation = first class citizen.',
    postedAt: '2026-04-02',
    isActive: true,
  },
  {
    slug: 'it-admin-rishon-lezion',
    title: 'IT Administrator',
    company: 'חברת SaaS בצמיחה',
    location: 'ראשון לציון',
    type: 'משרה מלאה',
    category: 'IT / תשתיות',
    description:
      'חברה שגדלה מהר ומחפשת IT Admin שיגדיר, יתחזק ויפתח תשתית IT ל-200+ עובדים. Endpoint management, AD, MDM, ועזרה ל-Help Desk בזמנים קשים.',
    requirements: [
      'ניסיון של 2+ שנים כ-IT Admin',
      'שליטה ב-Active Directory ו-Microsoft 365',
      'ניסיון עם MDM (Jamf, Intune)',
      'הבנת networking בסיסית',
      'כישורי שירות לקוחות ואורך רוח',
    ],
    whyApply:
      'חברה שמעריכה IT כפונקציה אסטרטגית. תתחיל ב-admin ותוכל לצמוח ל-IT Lead.',
    whoIsItFor:
      'מי שיכול לעבור בשעה אחת מ-Jamf enrollment ל-AD policy ל-helpdesk ticket — ולא להתבלבל.',
    tips: 'הכן דוגמה לאוטומציה קטנה שחסכה לך זמן. IT Admins שמתייעלים בעצמם — זה מי שמתקדמים.',
    howToGetHired:
      'הדגש ניסיון עם onboarding/offboarding automation. בראיון: שאלות על MDM policies ו-Zero Trust access הן נפוצות בחברות שגדלות. ציין ניסיון עם SSO ו-MFA rollout.',
    whatRecruiterLooksFor:
      'מי שעונה לטיקט תוך שעה — לא תוך יום. Service mindset: IT שמבין שהמשתמש לא יכול לעבוד = זה אקוטי. ובמקביל — יכולת לתעדף בין 5 דברים דחופים בו-זמנית.',
    postedAt: '2026-04-01',
    isActive: true,
  },
];
