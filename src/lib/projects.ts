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
  video?: {
    src: string;
    poster: string;
    mode?: "scroll" | "click";
    aspect: string;
    rounded: number;
    maxWidth?: string;
  };
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
    video: {
      src: "/works/buddy-video/prototype-walkthrough.mp4",
      poster: "/works/buddy-video/video-poster.jpg",
      mode: "click",
      aspect: "1280/784",
      rounded: 12,
      maxWidth: "max-w-2xl",
    },
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
      aspect: "676/1402",
      rounded: 20,
      maxWidth: "max-w-xs",
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
      "A landing page for psychologist and art therapist Ramina, designed and built through vibecoding.",
    overview:
      "Ramina Kolbaya created Yastobo.You as a safe space for Ukrainians in Germany. I designed it in my own UI system and built it end to end with AI-assisted development, then released it in August 2026.",
    challenge:
      "Ramina needed a calling card that would show her personality, introduce her and her services, and lower the fear of reaching out to a psychologist.",
    approach:
      "I designed the site in Figma, then used vibecoding with Claude Code to go from design to a working site. I deployed it on Vercel, with the code on GitHub.",
    outcome:
      "In a short time I built a full brand identity: a logo, copywriting, and a three-language site adapted to every device, all with AI-assisted development.",
  },
  buddy: {
    name: "Buddy",
    industry: "EdTech",
    role: "UX Research, UX/UI Design, Prototyping",
    tagline:
      "A free mentoring platform connecting junior designers with mentors through real design tasks. A personal MVP I'd love to launch.",
    overview:
      "The free Buddy platform connects junior designers with mentors who share real design challenges from their own work. Through the service, juniors build a portfolio that earns employers' trust, while mid-level specialists try themselves out as mentors. This was my final project at IT Career Hub. I went through the whole process solo: from research through UX design to a clickable prototype and a promo landing page.",
    challenge:
      "Junior designers face a catch-22: you need commercial experience to get hired, but you need to get hired to gain that experience. Courses teach theory. They skip the real feedback, constraints, and accountability of an actual project, so portfolio pieces made in class rarely earn an employer's trust.",
    approach:
      "Before designing anything, I interviewed juniors, mid-to-senior designers, and HR specialists. I expected seniors to become mentors, but they don't have the time or motivation to delegate real work to juniors, often because of NDAs. The real audience turned out to be mid-level designers: mentoring gives them practice on the way to a lead role, plus income. That finding changed the whole product logic for me, from 'seniors delegate tasks' to 'mids mentor and grow'. From there: user flows, wireframes, a basic design system, a high-fidelity clickable prototype, and a promo landing page. I built it all around one core loop: a junior takes a task, gets mentor feedback, and I mark the work verified.",
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
      "A full rebuild for a Ukrainian car buyback and sourcing service, designed and built in Framer.",
    overview:
      "AutoCore buys back and sources cars for clients across Ukraine. The brand had an old site that no longer matched its business, so we rewrote the content from scratch and added new services. We chose Framer so the client could make small content updates themselves going forward.",
    challenge:
      "The client needed a fast launch and a site that converts. For most Ukrainians, selling a car can feel like a complicated, high-stakes process, so it mattered to show transparency at every step. AutoCore had to earn trust, and the old site didn't clear that bar.",
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
      "Eine Landingpage für die Psychologin und Kunsttherapeutin Ramina, gestaltet und gebaut per Vibecoding.",
    overview:
      "Ramina Kolbaya hat Yastobo.You als sicheren Raum für Ukrainer:innen in Deutschland geschaffen. Ich habe die Seite im eigenen UI-System gestaltet, komplett mit KI-gestützter Entwicklung gebaut und im August 2026 veröffentlicht.",
    challenge:
      "Ramina brauchte eine Visitenkarte, die ihre Persönlichkeit zeigt, sie und ihre Leistungen vorstellt und die Hemmschwelle senkt, sich an eine Psychologin zu wenden.",
    approach:
      "Ich habe die Seite in Figma gestaltet und dann per Vibecoding mit Claude Code den Weg vom Design zur funktionierenden Seite zurückgelegt. Ich habe sie auf Vercel deployed, mit dem Code auf GitHub.",
    outcome:
      "In kurzer Zeit habe ich so ein vollständiges Markendesign gebaut: Logo, Copywriting und eine dreisprachige Seite, angepasst an alle Geräte, alles mit KI-gestützter Entwicklung.",
  },
  buddy: {
    name: "Buddy",
    industry: "EdTech",
    role: "UX Research, UX/UI Design, Prototyping",
    tagline:
      "Eine kostenlose Mentoring-Plattform, die Junior-Designer:innen mit Mentor:innen über echte Design-Aufgaben verbindet. Ein persönliches MVP, das ich gerne launchen würde.",
    overview:
      "Die kostenlose Plattform Buddy verbindet Junior-Designer:innen mit Mentor:innen, die echte Design-Herausforderungen aus ihrer eigenen Arbeit teilen. Über den Service bauen Juniors ein Portfolio auf, das bei Arbeitgeber:innen Vertrauen schafft, während Mid-Level-Spezialist:innen sich als Mentor:innen ausprobieren. Das war mein Abschlussprojekt am IT Career Hub. Ich habe den gesamten Weg allein zurückgelegt: von der Recherche über UX-Design bis zum klickbaren Prototyp und einer Promo-Landingpage.",
    challenge:
      "Junior-Designer:innen stecken in einer Zwickmühle: Um eingestellt zu werden, braucht man kommerzielle Erfahrung, aber um die zu bekommen, muss man erst eingestellt werden. Kurse vermitteln Theorie. Sie übergehen das echte Feedback, die Constraints und die Verantwortung eines echten Projekts, deshalb gewinnen Portfolio-Arbeiten aus dem Unterricht selten das Vertrauen von Arbeitgeber:innen.",
    approach:
      "Bevor ich etwas gestaltet habe, habe ich Juniors, Mid- bis Senior-Designer:innen und HR-Spezialist:innen befragt. Ich hatte erwartet, dass Seniors zu Mentor:innen werden, aber sie haben weder die Zeit noch die Motivation, echte Arbeit an Juniors zu delegieren, oft wegen NDAs. Die eigentliche Zielgruppe waren Mid-Level-Designer:innen: Mentoring gibt ihnen Praxis auf dem Weg zur Lead-Rolle, plus Einkommen. Dieser Befund hat für mich die gesamte Produktlogik verändert, von 'Seniors delegieren Aufgaben' zu 'Mids mentoren und wachsen'. Danach: User Flows, Wireframes, ein einfaches Designsystem, ein High-Fidelity-Klickprototyp und eine Promo-Landingpage. Ich habe alles um einen Kernloop gebaut: Ein Junior übernimmt eine Aufgabe, bekommt Feedback vom Mentor, und ich markiere die Arbeit als verifiziert.",
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
      "Ein kompletter Relaunch für einen ukrainischen Autoankauf- und Vermittlungsservice, gestaltet und gebaut in Framer.",
    overview:
      "AutoCore kauft und vermittelt Autos für Kund:innen in der ganzen Ukraine. Die Marke hatte eine alte Website, die nicht mehr zum Geschäft passte, also haben wir die Inhalte komplett neu geschrieben und neue Leistungen ergänzt. Wir haben uns für Framer entschieden, damit der Kunde künftig selbst kleine Inhalte anpassen kann.",
    challenge:
      "Der Kunde brauchte einen schnellen Launch und eine Seite, die konvertiert. Für die meisten Ukrainer:innen kann der Autoverkauf ein komplizierter, verantwortungsvoller Prozess wirken, deshalb war es wichtig, die Transparenz jedes Schritts zu zeigen. AutoCore musste Vertrauen aufbauen, und die alte Seite hat das nicht geleistet.",
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
      "Лендинг для психологині та арт-терапевтки Раміни, спроєктований і зібраний через вайбкодинг.",
    overview:
      "Раміна Колбая створила Yastobo.You як безпечний простір для українців у Німеччині. Я спроєктувала сайт у власній UI-системі, повністю зібрала його за допомогою AI-розробки і випустила в серпні 2026.",
    challenge:
      "Раміні потрібна була візитівка, яка передасть її особистість, познайомить із нею та її послугами і знизить страх звернутися до психолога.",
    approach:
      "Я спроєктувала сайт у Figma, а потім через вайбкодинг із Claude Code пройшла шлях від дизайну до робочого сайту. Задеплоїла його на Vercel, з кодом на GitHub.",
    outcome:
      "За короткий термін я зібрала повноцінний фірмовий стиль: логотип, копірайтинг і сайт трьома мовами з адаптацією під усі пристрої, і все це за участю ШІ-розробки.",
  },
  buddy: {
    name: "Buddy",
    industry: "EdTech",
    role: "UX-дослідження, UX/UI дизайн, прототипування",
    tagline:
      "Безкоштовна менторська платформа, що з'єднує junior дизайнерів із менторами через реальні дизайн-завдання. Особистий MVP, який я хочу колись запустити.",
    overview:
      "Безкоштовна платформа Buddy з'єднує junior дизайнерів із менторами, які діляться реальними дизайн-челенджами зі свого досвіду. Завдяки сервісу джуни збирають портфоліо, яке викликає довіру у роботодавців, а мідл спеціалісти пробують себе в ролі менторів. Це був мій дипломний проєкт в IT Career Hub. Я пройшла весь шлях самостійно: від дослідження через UX-дизайн до клікабельного прототипу та промо-лендингу.",
    challenge:
      "Junior-дизайнери потрапляють у пастку: щоб влаштуватися на роботу, потрібен комерційний досвід, а щоб отримати досвід, потрібно спочатку влаштуватися. Курси дають теорію. Вони пропускають реальний фідбек, обмеження і відповідальність справжнього проєкту, тому портфоліо-роботи з курсів рідко викликають довіру роботодавців.",
    approach:
      "Перш ніж щось проєктувати, я опитала джуніорів, мід- і сеньйор-дизайнерів та HR-спеціалістів. Я очікувала, що сеньйори стануть менторами, але в них немає ні часу, ні мотивації делегувати джуніорам реальну роботу, часто через NDA. Справжньою аудиторією виявилися мідли: менторство дає їм практику на шляху до lead-ролі та дохід. Це відкриття змінило для мене всю логіку продукту: від «сеньйори делегують завдання» до «мідли менторять і ростуть». Далі: user flow, вайрфрейми, базова дизайн-система, high-fidelity клікабельний прототип і промо-лендинг. Я вибудувала все навколо одного ключового циклу: джуніор бере завдання, отримує фідбек від ментора, і я позначаю роботу як перевірену.",
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
      "Повний ребілд сайту для українського сервісу викупу та підбору авто, спроєктований і зібраний на Framer.",
    overview:
      "AutoCore - сервіс з викупу та підбору авто по всій Україні. У бренду був старий сайт, який більше не відповідав бізнесу. Тому було вирішено переписати весь контент з нуля і додати нові послуги. Ми вибрали платформу Framer, щоб згодом замовник міг самостійно вносити невеликі зміни у контенті.",
    challenge:
      "Клієнту потрібен був швидкий запуск і сайт з високою конверсією. Для більшості українців продаж авто може здаватися складним і відповідальним процесом, тому важливо було показати прозорість кожного кроку. AutoCore мав викликати довіру, а старий сайт не відповідав цьому критерію.",
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
