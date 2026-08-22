import type { Locale } from "@/i18n/config";

export type ProjectSlug = "yastoboyou" | "buddy" | "autocore" | "shelfy";

export const projectSlugs: ProjectSlug[] = [
  "yastoboyou",
  "buddy",
  "autocore",
  "shelfy",
];

type ProjectMeta = {
  slug: ProjectSlug;
  year: string;
  platform: string;
  pattern: 4 | 5 | 6 | 7;
  liveUrl?: string;
  coverImage?: string;
  coverFit?: "cover" | "contain";
  tools?: string;
  video?: { src: string; poster: string };
};

export const projectMeta: Record<ProjectSlug, ProjectMeta> = {
  yastoboyou: {
    slug: "yastoboyou",
    year: "2026",
    platform: "Web / Responsive",
    pattern: 4,
    liveUrl: "https://www.yastoboyou.de/",
    coverImage: "/works/yastoboyou-cover.png",
    tools: "Figma, Claude Code, Vercel, GitHub",
  },
  buddy: {
    slug: "buddy",
    year: "2026",
    platform: "Web / Prototype",
    pattern: 5,
    liveUrl: "https://buddy-landing.webflow.io/",
    coverImage: "/works/buddy-cover.png",
    tools: "Figma, Webflow",
  },
  autocore: {
    slug: "autocore",
    year: "2026",
    platform: "Web / Responsive",
    pattern: 6,
    liveUrl: "https://autocore.kyiv.ua/",
    tools: "Figma, Framer",
  },
  shelfy: {
    slug: "shelfy",
    year: "2026",
    platform: "Mobile App / Prototype",
    pattern: 7,
    liveUrl:
      "https://www.figma.com/design/1VAH3wZLfASsfLSUDVyU8r/MVP-Shelfy?node-id=0-1",
    tools: "Figma",
    video: {
      src: "/works/shelfy/prototype-walkthrough.mp4",
      poster: "/works/shelfy/video-poster.jpg",
    },
  },
};

type ProjectCopy = {
  name: string;
  industry: string;
  role: string;
  tagline: string;
  overview: string;
  challenge: string;
  approach: string;
  research?: string;
  userFlow?: string;
  designProcess?: string;
  scope?: {
    inMvp: string[];
    notInMvp: string[];
    future: string[];
    note: string;
  };
  outcome: string;
  results?: string[];
  liveLinkLabel?: string;
};

type ProjectDictionary = Record<ProjectSlug, ProjectCopy>;

const en: ProjectDictionary = {
  yastoboyou: {
    name: "Yastobo.You",
    industry: "Mental Health",
    role: "Brand Identity, UX/UI Design, Vibecoding",
    tagline:
      "A landing page for psychologist and art therapist Ramina, designed and built solo through vibecoding.",
    overview:
      "Ramina Kolbaya created Yastobo.You as a safe space for Ukrainians in Germany. I designed it in my own UI system and built it end to end with AI-assisted development, then released it in August 2026.",
    challenge:
      "Ramina needed a calling card that would show her personality, introduce her and her services, and lower the fear of reaching out to a psychologist.",
    approach:
      "I designed the site in Figma, then used vibecoding with Claude Code to go from design straight to a live, working site. I deployed it on Vercel, with the code on GitHub.",
    outcome:
      "In a short time I built a full brand identity: a logo, copywriting, and a three-language site adapted to every device, all with AI-assisted development.",
  },
  buddy: {
    name: "Buddy",
    industry: "EdTech",
    role: "UX Research, UX/UI Design, Prototyping",
    tagline:
      "A free mentoring platform connecting junior UX/UI designers with mid-level mentors through real design tasks. A personal MVP I'd love to launch.",
    overview:
      "Buddy is a free mentoring platform that pairs junior UX/UI designers with mentors who share real design challenges from their own work, so juniors build a portfolio that looks credible to employers. This was my final project at IT Career Hub. I built it solo, from research through UX design to a clickable prototype and a promo landing page.",
    challenge:
      "Junior designers face a catch-22: you need commercial experience to get hired, but you need to get hired to gain that experience. Courses teach theory. They skip the real feedback, constraints, and accountability of an actual project, so portfolio pieces made in class rarely earn an employer's trust.",
    approach:
      "Before designing anything, I interviewed and surveyed 25 people across three groups: juniors, mid-to-senior designers, and HR specialists. The research overturned my starting assumption. I'd expected senior designers to be the natural mentors, but seniors don't have the time or motivation to delegate real, often NDA-bound work to juniors. Mid-level designers turned out to be the real audience: mentoring gives them leadership practice on the way to a lead role, plus an optional income stream from paid sessions. That finding changed the whole product, from 'seniors delegate tasks' to 'mids mentor and grow'. From there I mapped user flows for both personas, built wireframes, a basic design system, a high-fidelity clickable prototype, and a promo landing page. I scoped it around one core loop: a junior takes a task, gets mentor feedback, and I mark the work verified.",
    outcome:
      "A researched, validated MVP concept: user personas, flows, a high-fidelity prototype, and a live promo landing page. A project I want to build and launch.",
    results: [
      "Interviewed and surveyed 25 people across 3 user groups",
      "Found that mid-level designers, not seniors, are the right mentor audience",
      "Pivoted the MVP from task-matching to a verified feedback loop",
      "Delivered personas, user flows, a high-fidelity prototype, and a promo landing page",
    ],
  },
  autocore: {
    name: "AutoCore",
    industry: "Automotive",
    role: "UX/UI Design, Content, Framer Development",
    tagline:
      "A full rebuild for a Kyiv car-buyback service, redesigned in Figma and shipped in Framer for speed and trust.",
    overview:
      "AutoCore buys used cars directly from owners across Kyiv. The brand had an old site that no longer matched its business. I rewrote the content from scratch, added the new services, and rebuilt the site in Figma and Framer.",
    challenge:
      "The client needed a fast turnaround and a site that converts. Owners selling a car want to trust the buyer within seconds, and the old site didn't do that job or show the services AutoCore had grown into.",
    approach:
      "I rewrote all the copy, structured the new service lineup: buyback, commission sales, and vehicle sourcing. I designed the site in Figma, then built it in Framer to move from design to launch fast.",
    outcome:
      "AutoCore got a site that builds trust with car owners, presents its new services clearly, and gave the business room to grow. Launched in June 2026.",
  },
  shelfy: {
    name: "Shelfy",
    industry: "E-commerce",
    role: "UX Research, UX/UI Design, Brand Identity",
    tagline:
      "A physical-book subscription concept built solo in four days, from idea to an investor-ready prototype.",
    overview:
      "Shelfy lets people subscribe to physical books and pick them up from branded boxes around the city instead of ordering delivery. I developed the concept solo in four days, from idea to a high-fidelity prototype in Figma. I wanted to show how fast I can take a project from zero to a clickable product.",
    challenge:
      "I set myself a 4-day goal: take a project from idea to a clickable prototype. Build a product I could present to an investor. Physical books are having a new wave of popularity, especially among Gen Z. Young people are picking up analog hobbies instead of scrolling social media. I also wanted to tie the concept to the growing relevance of reusing things.",
    approach:
      "I worked in three stages: research, user flow, and design.",
    research:
      "I started with a market analysis. There were no direct competitors, so I studied 10 comparable apps for their strengths and weaknesses. Then I surveyed 30 people from the target audience through Google Forms. The results confirmed the concept was interesting and viable, and showed what people expect from an app like this.",
    userFlow:
      "I mapped the main user journeys. For the MVP I picked three key scenarios: onboarding and subscribing, finding a book and picking it up from a shelf, and returning a book by scanning its QR code.",
    designProcess:
      "I moved from low-fidelity wireframes to high-fidelity screens. Alongside that, I designed a logo, chose fonts and a color palette, defined the tone of voice, and built a basic design system. After that, I put together detailed, clickable prototypes.",
    scope: {
      inMvp: [
        "Core subscription flow",
        "Book discovery and availability",
        "Pick up and return",
        "QR-based actions",
        "Basic account and access logic",
      ],
      notInMvp: [
        "Smart recommendations",
        "Community and social features",
        "Automated condition validation",
        "Advanced analytics",
        "Custom pricing tiers",
      ],
      future: [
        "AI-assisted book condition scoring",
        "Reader profiles and history",
        "Partner expansion",
        "Dynamic subscriptions",
      ],
      note: "I cut every non-essential detail and saved it for later. This version holds only the core concept.",
    },
    outcome:
      "A complete MVP concept, from research to a high-fidelity, investor-ready prototype, built solo in four days with a design system that can scale.",
    results: [
      "Took an MVP from concept to a dev-ready handoff in 4 days",
      "Surveyed 30 people and analyzed 10 comparable apps before designing",
      "Built a scalable design system: logo, palette, type, and components",
      "Ran research, design, and prototyping solo end to end",
    ],
    liveLinkLabel: "Open in Figma",
  },
};

const de: ProjectDictionary = {
  yastoboyou: {
    name: "Yastobo.You",
    industry: "Mental Health",
    role: "Markenidentität, UX/UI Design, Vibecoding",
    tagline:
      "Eine Landingpage für die Psychologin und Kunsttherapeutin Ramina, allein per Vibecoding designt und gebaut.",
    overview:
      "Ramina Kolbaya hat Yastobo.You als sicheren Raum für Ukrainer:innen in Deutschland geschaffen. Ich habe die Seite im eigenen UI-System gestaltet, komplett mit KI-gestützter Entwicklung gebaut und im August 2026 veröffentlicht.",
    challenge:
      "Ramina brauchte eine Visitenkarte, die ihre Persönlichkeit zeigt, sie und ihre Leistungen vorstellt und die Hemmschwelle senkt, sich an eine Psychologin zu wenden.",
    approach:
      "Ich habe die Seite in Figma gestaltet und dann per Vibecoding mit Claude Code direkt vom Design zur lebenden, funktionierenden Seite gebracht. Ich habe sie auf Vercel deployed, mit dem Code auf GitHub.",
    outcome:
      "In kurzer Zeit habe ich so ein vollständiges Markendesign gebaut: Logo, Copywriting und eine dreisprachige Seite, angepasst an alle Geräte, alles mit KI-gestützter Entwicklung.",
  },
  buddy: {
    name: "Buddy",
    industry: "EdTech",
    role: "UX Research, UX/UI Design, Prototyping",
    tagline:
      "Eine kostenlose Mentoring-Plattform, die Junior-UX/UI-Designer:innen mit Mid-Level-Mentor:innen über echte Design-Aufgaben verbindet. Ein persönliches MVP, das ich gerne launchen würde.",
    overview:
      "Buddy ist eine kostenlose Mentoring-Plattform, die Junior-UX/UI-Designer:innen mit Mentor:innen zusammenbringt, die echte Design-Herausforderungen aus ihrer eigenen Arbeit teilen, damit Juniors ein Portfolio aufbauen, das bei Arbeitgeber:innen glaubwürdig wirkt. Das war mein Abschlussprojekt am IT Career Hub. Ich habe es allein umgesetzt, von der Recherche über UX-Design bis zum klickbaren Prototyp und einer Promo-Landingpage.",
    challenge:
      "Junior-Designer:innen stecken in einer Zwickmühle: Um eingestellt zu werden, braucht man kommerzielle Erfahrung, aber um die zu bekommen, muss man erst eingestellt werden. Kurse vermitteln Theorie. Sie übergehen das echte Feedback, die Constraints und die Verantwortung eines echten Projekts, deshalb gewinnen Portfolio-Arbeiten aus dem Unterricht selten das Vertrauen von Arbeitgeber:innen.",
    approach:
      "Bevor ich etwas gestaltet habe, befragte ich 25 Personen aus drei Gruppen: Juniors, Mid- bis Senior-Designer:innen und HR-Spezialist:innen. Die Recherche widerlegte meine Ausgangsannahme. Ich hatte erwartet, dass Senior-Designer:innen die natürlichen Mentor:innen wären, aber Seniors haben weder die Zeit noch die Motivation, echte, oft NDA-geschützte Arbeit an Juniors zu delegieren. Mid-Level-Designer:innen erwiesen sich als die eigentliche Zielgruppe: Mentoring gibt ihnen Führungspraxis auf dem Weg zur Lead-Rolle, plus optional ein Einkommen durch bezahlte Sessions. Dieser Befund veränderte für mich die gesamte Produktlogik, von 'Seniors delegieren Aufgaben' zu 'Mids mentoren und wachsen'. Danach erstellte ich User Flows für beide Personas, Wireframes, ein einfaches Designsystem, einen High-Fidelity-Klickprototyp und eine Promo-Landingpage. Ich habe alles um einen Kernloop gebaut: Ein Junior übernimmt eine Aufgabe, bekommt Feedback vom Mentor, und ich markiere die Arbeit als verifiziert.",
    outcome:
      "Ein recherchiertes, validiertes MVP-Konzept: User Personas, Flows, ein High-Fidelity-Prototyp und eine live Promo-Landingpage. Ein Projekt, das ich bauen und launchen möchte.",
    results: [
      "25 Personen aus 3 Nutzergruppen befragt",
      "Herausgefunden, dass Mid-Level-Designer:innen, nicht Seniors, die richtige Mentor:innen-Zielgruppe sind",
      "MVP vom Task-Matching zu einem verifizierten Feedback-Loop verschoben",
      "Personas, User Flows, High-Fidelity-Prototyp und Promo-Landingpage geliefert",
    ],
  },
  autocore: {
    name: "AutoCore",
    industry: "Automotive",
    role: "UX/UI Design, Content, Framer-Entwicklung",
    tagline:
      "Ein kompletter Relaunch für einen Kiewer Autoankauf-Service, in Figma gestaltet und in Framer umgesetzt, für Tempo und Vertrauen.",
    overview:
      "AutoCore kauft Gebrauchtwagen direkt von Besitzer:innen in Kiew. Die Marke hatte eine alte Website, die nicht mehr zum Geschäft passte. Ich habe die Inhalte komplett neu geschrieben, die neuen Leistungen ergänzt und die Seite in Figma und Framer neu gebaut.",
    challenge:
      "Der Kunde brauchte eine schnelle Umsetzung und eine Seite, die konvertiert. Wer ein Auto verkauft, will dem Käufer innerhalb von Sekunden vertrauen. Die alte Seite hat das nicht geleistet und die neuen Leistungen von AutoCore nicht gezeigt.",
    approach:
      "Ich habe alle Texte neu geschrieben und das neue Leistungsangebot strukturiert: Ankauf, Kommissionsverkauf und Fahrzeugsuche. Ich habe die Seite in Figma gestaltet und dann in Framer gebaut, um schnell vom Design zum Launch zu kommen.",
    outcome:
      "AutoCore hat jetzt eine Seite, die bei Autobesitzer:innen Vertrauen aufbaut, die neuen Leistungen klar zeigt und dem Geschäft Raum zum Wachsen gibt. Gelauncht im Juni 2026.",
  },
  shelfy: {
    name: "Shelfy",
    industry: "E-commerce",
    role: "UX Research, UX/UI Design, Markenidentität",
    tagline:
      "Ein Konzept für ein Physische-Bücher-Abo, allein in vier Tagen gebaut, von der Idee zum investor-reifen Prototyp.",
    overview:
      "Shelfy lässt Menschen physische Bücher abonnieren und sie an gebrandeten Boxen in der Stadt abholen, statt sie liefern zu lassen. Ich habe das Konzept allein in vier Tagen entwickelt, von der Idee bis zu einem High-Fidelity-Prototyp in Figma. Ich wollte zeigen, wie schnell ich ein Projekt von null zu einem klickbaren Produkt bringen kann.",
    challenge:
      "Ich habe mir ein 4-Tage-Ziel gesetzt: von der Idee zu einem klickbaren Prototyp zu kommen. Ein Produkt zu bauen, das ich einem Investor präsentieren kann. Physische Bücher erleben gerade einen neuen Popularitätsschub, besonders bei der Gen Z. Junge Menschen suchen sich analoge Hobbys, statt durch soziale Medien zu scrollen. Ich wollte das Konzept außerdem mit der wachsenden Relevanz der Wiederverwendung von Dingen verknüpfen.",
    approach:
      "Ich habe in drei Etappen gearbeitet: Recherche, User Flow und Design.",
    research:
      "Ich habe mit einer Marktanalyse angefangen. Es gab keine direkten Konkurrenten, also habe ich 10 vergleichbare Apps auf Stärken und Schwächen untersucht. Danach habe ich 30 Personen aus der Zielgruppe über Google Forms befragt. Die Ergebnisse bestätigten, dass das Konzept interessant und tragfähig ist, und zeigten, was Nutzer:innen von so einer App erwarten.",
    userFlow:
      "Ich habe die wichtigsten User Journeys kartiert. Für das MVP habe ich drei zentrale Szenarien ausgewählt: Onboarding und Abo, ein Buch finden und an einem Regal abholen, und ein Buch per QR-Scan zurückgeben.",
    designProcess:
      "Ich bin von Low-Fidelity-Wireframes zu High-Fidelity-Screens gegangen. Parallel dazu habe ich ein Logo entworfen, Schriften und eine Farbpalette gewählt, den Tone of Voice festgelegt und ein einfaches Designsystem gebaut. Danach habe ich detaillierte, klickbare Prototypen zusammengestellt.",
    scope: {
      inMvp: [
        "Kern-Abo-Flow",
        "Buchsuche und Verfügbarkeit",
        "Abholen und Zurückgeben",
        "QR-basierte Aktionen",
        "Einfache Konto- und Zugangslogik",
      ],
      notInMvp: [
        "Smarte Empfehlungen",
        "Community- und Social-Features",
        "Automatisierte Zustandsprüfung",
        "Erweiterte Analytics",
        "Individuelle Preisstufen",
      ],
      future: [
        "KI-gestützte Zustandsbewertung von Büchern",
        "Leser:innen-Profile und Historie",
        "Partner-Expansion",
        "Dynamische Abos",
      ],
      note: "Ich habe jedes nicht essenzielle Detail gestrichen und für später aufgehoben. Diese Version enthält nur das Kernkonzept.",
    },
    outcome:
      "Ein vollständiges MVP-Konzept, von der Recherche bis zu einem High-Fidelity-Prototyp für Investor:innen, allein in vier Tagen gebaut, mit einem Designsystem, das skaliert.",
    results: [
      "MVP in 4 Tagen von der Idee bis zur entwicklungsreifen Übergabe gebracht",
      "30 Personen befragt und 10 vergleichbare Apps analysiert, bevor ich zu gestalten begann",
      "Ein skalierbares Designsystem gebaut: Logo, Farbpalette, Typografie und Komponenten",
      "Recherche, Design und Prototyping allein end-to-end durchgeführt",
    ],
    liveLinkLabel: "In Figma öffnen",
  },
};

const uk: ProjectDictionary = {
  yastoboyou: {
    name: "Yastobo.You",
    industry: "Mental Health",
    role: "Брендинг, UX/UI дизайн, вайбкодинг",
    tagline:
      "Лендинг для психологині та арт-терапевтки Раміни, спроєктований і зібраний самостійно через вайбкодинг.",
    overview:
      "Раміна Колбая створила Yastobo.You як безпечний простір для українців у Німеччині. Я спроєктувала сайт у власній UI-системі, повністю зібрала його за допомогою AI-розробки і випустила в серпні 2026.",
    challenge:
      "Раміні потрібна була візитівка, яка передасть її особистість, познайомить із нею та її послугами і знизить страх звернутися до психолога.",
    approach:
      "Я спроєктувала сайт у Figma, а потім через вайбкодинг із Claude Code пройшла шлях від дизайну одразу до живого робочого сайту. Задеплоїла його на Vercel, з кодом на GitHub.",
    outcome:
      "За короткий термін я зібрала повноцінний фірмовий стиль: логотип, копірайтинг і сайт трьома мовами з адаптацією під усі пристрої, і все це за участю ШІ-розробки.",
  },
  buddy: {
    name: "Buddy",
    industry: "EdTech",
    role: "UX-дослідження, UX/UI дизайн, прототипування",
    tagline:
      "Безкоштовна менторська платформа, що з'єднує junior UX/UI-дизайнерів із mid-level менторами через реальні дизайн-завдання. Особистий MVP, який я хочу колись запустити.",
    overview:
      "Безкоштовна менторська платформа Buddy з'єднує junior UX/UI-дизайнерів із менторами, які діляться реальними дизайн-челенджами зі свого досвіду, щоб джуни збирали портфоліо, яке викликає довіру у роботодавців. Це був мій дипломний проєкт в IT Career Hub. Я пройшла весь шлях самостійно: від дослідження через UX-дизайн до клікабельного прототипу та промо-лендингу.",
    challenge:
      "Junior-дизайнери потрапляють у пастку: щоб влаштуватися на роботу, потрібен комерційний досвід, а щоб отримати досвід, потрібно спочатку влаштуватися. Курси дають теорію. Вони пропускають реальний фідбек, обмеження і відповідальність справжнього проєкту, тому портфоліо-роботи з курсів рідко викликають довіру роботодавців.",
    approach:
      "Перш ніж щось проєктувати, я опитала 25 людей із трьох груп: джуніорів, мід- і сеньйор-дизайнерів та HR-спеціалістів. Дослідження спростувало мою початкову гіпотезу. Я очікувала, що сеньйори стануть природними менторами, але в них немає ні часу, ні мотивації делегувати джуніорам реальну, часто захищену NDA, роботу. Справжньою аудиторією виявилися мідли: менторство дає їм практику лідерства на шляху до lead-ролі, плюс опційний дохід від платних сесій. Це відкриття змінило для мене всю логіку продукту: від «сеньйори делегують завдання» до «мідли менторять і ростуть». Далі я побудувала user flow для обох персон, вайрфрейми, базову дизайн-систему, high-fidelity клікабельний прототип і промо-лендинг. Я вибудувала все навколо одного ключового циклу: джуніор бере завдання, отримує фідбек від ментора, і я позначаю роботу як перевірену.",
    outcome:
      "Досліджена, підтверджена концепція MVP: персони користувачів, user flow, high-fidelity прототип і живий промо-лендинг. Проєкт, який я хочу побудувати й запустити.",
    results: [
      "Опитала 25 людей із 3 груп користувачів",
      "З'ясувала, що правильна аудиторія менторів: мідли",
      "Змінила MVP з підбору завдань на верифікований цикл фідбеку",
      "Підготувала персони, user flow, high-fidelity прототип і промо-лендинг",
    ],
  },
  autocore: {
    name: "AutoCore",
    industry: "Automotive",
    role: "UX/UI дизайн, контент, розробка на Framer",
    tagline:
      "Повний ребілд сайту для київського сервісу викупу авто, спроєктований у Figma і зібраний на Framer заради швидкості та довіри.",
    overview:
      "AutoCore викуповує вживані авто напряму у власників по Києву. У бренду був старий сайт, який більше не відповідав бізнесу. Я переписала весь контент з нуля, додала нові послуги і перезібрала сайт у Figma та Framer.",
    challenge:
      "Клієнту потрібен був швидкий запуск і сайт з високою конверсією. Власник авто на продаж хоче довіритися покупцю за секунди, а старий сайт не справлявся з цим і не показував нові послуги AutoCore.",
    approach:
      "Я переписала весь текст і структурувала нову лінійку послуг: викуп, комісійний продаж і підбір авто. Спроєктувала сайт у Figma, а потім зібрала його на Framer, щоб швидко пройти шлях від дизайну до запуску.",
    outcome:
      "AutoCore отримав сайт, який викликає довіру у власників авто, чітко презентує нові послуги і дає бізнесу простір для зростання. Запущено в червні 2026.",
  },
  shelfy: {
    name: "Shelfy",
    industry: "E-commerce",
    role: "UX-дослідження, UX/UI дизайн, брендинг",
    tagline:
      "Концепція підписки на фізичні книги, зроблена самостійно за чотири дні, від ідеї до прототипу для інвестора.",
    overview:
      "Shelfy дозволяє оформити підписку на фізичні книги і забирати їх із брендованих боксів у місті замість доставки. Я розробила концепцію самостійно за чотири дні, від ідеї до high-fidelity прототипу у Figma. Я хотіла показати, наскільки швидко можу довести проєкт з нуля до клікабельного продукту.",
    challenge:
      "Я поставила собі ціль на 4 дні: пройти шлях від ідеї до клікабельного прототипу. Створити продукт, який можна презентувати інвестору. Фізичні книги переживають новий сплеск популярності, особливо серед Gen Z. Молоді люди знаходять собі аналогові хобі, замість того, щоб скролити соціальні мережі. Я хотіла також зачепити актуальність повторного використання речей у своїй концепції.",
    approach:
      "Я працювала в три етапи: дослідження, user flow і дизайн.",
    research:
      "Я почала з аналізу ринку. Прямих конкурентів не було, тож я розібрала 10 подібних застосунків на сильні та слабкі сторони. Далі опитала 30 людей із цільової аудиторії через Google Forms. Результати підтвердили, що концепція цікава і життєздатна, і показали, чого користувачі очікують від такого застосунку.",
    userFlow:
      "Я побудувала основні user journey. Для MVP обрала три ключові сценарії: знайомство і підписка, пошук книги та отримання її з шафи, а також повернення книги через сканування QR-коду.",
    designProcess:
      "Я пройшла шлях від low-fidelity вайрфреймів до high-fidelity екранів. Паралельно розробила логотип, обрала шрифти й кольорову палітру, визначила tone of voice і побудувала базову дизайн-систему. Після цього зібрала детальні клікабельні прототипи.",
    scope: {
      inMvp: [
        "Основний флоу підписки",
        "Пошук і доступність книг",
        "Отримання та повернення",
        "Дії через QR-код",
        "Базова логіка акаунту й доступу",
      ],
      notInMvp: [
        "Розумні рекомендації",
        "Соціальні функції та ком'юніті",
        "Автоматична перевірка стану книги",
        "Розширена аналітика",
        "Кастомні тарифи",
      ],
      future: [
        "ШІ-оцінка стану книги",
        "Профілі та історія читачів",
        "Розширення мережі партнерів",
        "Динамічні підписки",
      ],
      note: "Я прибрала всі неважливі деталі і відклала їх на потім. Ця версія містить лише основну концепцію.",
    },
    outcome:
      "Повноцінна концепція MVP, від дослідження до high-fidelity прототипу для інвестора, зроблена самостійно за чотири дні, з дизайн-системою, яку можна масштабувати.",
    results: [
      "Провела MVP від концепції до готової для розробки передачі за 4 дні",
      "Опитала 30 людей і проаналізувала 10 подібних застосунків перед проєктуванням",
      "Побудувала дизайн-систему, яку можна масштабувати: логотип, палітра, шрифти, компоненти",
      "Самостійно пройшла дослідження, дизайн і прототипування від початку до кінця",
    ],
    liveLinkLabel: "Відкрити у Figma",
  },
};

const projectDictionaries: Record<Locale, ProjectDictionary> = { en, de, uk };

export function getProjectCopy(locale: Locale, slug: ProjectSlug): ProjectCopy {
  return projectDictionaries[locale][slug];
}

export function getAllProjects(locale: Locale) {
  return projectSlugs.map((slug) => ({
    ...projectMeta[slug],
    ...projectDictionaries[locale][slug],
  }));
}
