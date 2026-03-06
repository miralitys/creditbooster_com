const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealNodes = document.querySelectorAll(".reveal");
if (revealNodes.length > 0) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealNodes.forEach((node) => io.observe(node));
}

const translations = {
  en: {
    htmlLang: "en",
    pageTitle: "CreditBooster - Financial Infrastructure for Better Credit",
    pageDescription:
      "CreditBooster helps you scan, fix, and grow your credit profile with a transparent process and measurable progress.",
    texts: {
      "nav.how": "How it works",
      "nav.results": "Results",
      "nav.security": "Security",
      "nav.faq": "FAQ",
      "nav.call": "Call (866) 662-6678",
      "hero.eyebrow": "Credit performance platform",
      "hero.title": "Your solution to credit. Faster, clearer, measurable.",
      "hero.lead":
        "Start with a $1 credit scan, remove negative items across all three bureaus, and build a stronger profile with guided tradeline growth.",
      "hero.ctaStart": "Start for $1",
      "hero.ctaBook": "Book a strategy call",
      "hero.stat1Title": "27 days",
      "hero.stat1Text": "first visible score movement",
      "hero.stat2Title": "3 bureaus",
      "hero.stat2Text": "aligned dispute strategy",
      "hero.stat3Title": "Upfront pricing",
      "hero.stat3Text": "prepayment model with clear terms",
      "case.eyebrow": "Real client case",
      "brands.caption": "Trusted by clients across major US markets",
      "brands.states": "We work in all 50 states.",
      "workflow.eyebrow": "How it works",
      "workflow.title": "Four phases to rebuild your credit foundation.",
      "workflow.step1Title": "We check",
      "workflow.step1Text": "For $1, we scan all three reports and map every removable negative item.",
      "workflow.step2Title": "We fix",
      "workflow.step2Text": "Dispute strategy removes inaccurate and harmful entries with bureau-level coordination.",
      "workflow.step3Title": "We build",
      "workflow.step3Text": "Add positive tradelines and improve payment profile depth for long-term score health.",
      "workflow.step4Title": "Get funded",
      "workflow.step4Text": "Unlock lending opportunities when your profile reaches your target risk tier.",
      "platform.eyebrow": "Why CreditBooster",
      "platform.title": "Modern operations for credit repair and growth.",
      "platform.lead":
        "We combine analytics, dispute execution, and profile-building tactics in one guided system. No hidden fees. No unclear timelines. Every phase is visible and tied to outcomes.",
      "platform.bullet1": "Transparent onboarding and clear weekly updates",
      "platform.bullet2": "Upfront payment plans with transparent billing terms",
      "platform.bullet3": "Structured support from scan to funding readiness",
      "platform.card1Title": "Score Analysis",
      "platform.card1Text": "Initial report breakdown for $1 with a custom risk map and action list.",
      "platform.card2Title": "No Hidden Fees",
      "platform.card2Text": "Simple pricing and clear deliverables, from day one through completion.",
      "platform.card3Title": "Priority Execution",
      "platform.card3Text": "Accelerated dispute cycle designed for first results in under 30 days.",
      "proof.metric1": "average review rating",
      "proof.metric2": "credit items challenged",
      "proof.metric3": "client data encryption uptime",
      "proof.quote1":
        '"Easy to work with, fast communication, and a process that felt simple from day one. The score movement was visible within the first month."',
      "proof.quote2":
        '"Their team kept me informed every week and explained each dispute stage. The transparency was the reason I stayed."',
      "proof.quote3":
        '"Best investment for fixing report discrepancies. I finally had a structured plan, not random suggestions."',
      "security.eyebrow": "Security and trust",
      "security.title": "We handle your data like regulated financial infrastructure.",
      "security.card1Title": "Security",
      "security.card1Text": "128-bit encrypted transfer paths and strict access controls across all workflows.",
      "security.card2Title": "Privacy",
      "security.card2Text": "We never sell or share personal information with unaffiliated marketing third parties.",
      "security.card3Title": "Billing terms",
      "security.card3Text": "Services are provided on a prepayment basis with clear scope, timeline, and deliverables.",
      "cta.eyebrow": "Start now",
      "cta.title": "Make a credit plan built for your real profile.",
      "cta.text": "Talk to our team and get your custom roadmap in minutes.",
      "cta.start": "Start for $1",
      "cta.call": "Call support",
      "footer.tagline": "Financial infrastructure for credit recovery and growth.",
      "footer.companyTitle": "Company",
      "footer.companyAbout": "About us",
      "footer.companyCareers": "Careers",
      "footer.companyContact": "Contact",
      "footer.servicesTitle": "Services",
      "footer.servicesRepair": "Credit repair",
      "footer.servicesTradelines": "Tradelines",
      "footer.servicesFunding": "Funding assistance",
      "footer.supportTitle": "Support",
      "footer.supportFaq": "FAQ",
      "footer.supportPrivacy": "Privacy policy",
    },
    caseUi: {
      before: "Before",
      what: "What we did",
      startingLabel: "Starting score",
      negativeLabel: "Negative items removed",
      positiveLabel: "Positive tradelines added",
      currentLabel: "Current score",
      roadmapLabel: "Roadmap completion:",
      result: (weeks) => `Result (${weeks} weeks)`,
    },
    caseStudies: [
      {
        client: "Client: Alex, Miami",
        startingScore: "548",
        negativeRemoved: "9 of 11",
        positiveTradelines: "+3 accounts",
        weeks: 8,
        currentScore: "710",
        roadmapCompletion: "82%",
        meter: 82,
        note: "Done already: 3-bureau audit, 2 dispute rounds filed, utilization ratio optimized, positive history building launched.",
      },
      {
        client: "Client: Maria, Chicago",
        startingScore: "521",
        negativeRemoved: "7 of 9",
        positiveTradelines: "+2 accounts",
        weeks: 10,
        currentScore: "689",
        roadmapCompletion: "77%",
        meter: 77,
        note: "Done already: full report cleanup strategy, 2 bureau escalations submitted, and card utilization reduced below 25%.",
      },
      {
        client: "Client: David, Houston",
        startingScore: "574",
        negativeRemoved: "10 of 12",
        positiveTradelines: "+4 accounts",
        weeks: 12,
        currentScore: "724",
        roadmapCompletion: "88%",
        meter: 88,
        note: "Done already: identity and address corrections completed, high-impact disputes resolved, and installment mix improved.",
      },
    ],
  },
  ru: {
    htmlLang: "ru",
    pageTitle: "CreditBooster - Платформа для роста кредитного рейтинга",
    pageDescription:
      "CreditBooster помогает проверить, исправить и усилить кредитный профиль с прозрачным процессом и измеримыми результатами.",
    texts: {
      "nav.how": "Как это работает",
      "nav.results": "Результаты",
      "nav.security": "Безопасность",
      "nav.faq": "FAQ",
      "nav.call": "Позвонить: (866) 662-6678",
      "hero.eyebrow": "Платформа улучшения кредита",
      "hero.title": "Решение по кредиту. Быстро, понятно, с измеримым результатом.",
      "hero.lead":
        "Начните с кредитного скана за $1, уберите негативные записи во всех трех бюро и укрепите профиль за счет роста положительных кредитных линий.",
      "hero.ctaStart": "Начать за $1",
      "hero.ctaBook": "Записаться на консультацию",
      "hero.stat1Title": "27 дней",
      "hero.stat1Text": "до первых видимых изменений рейтинга",
      "hero.stat2Title": "3 бюро",
      "hero.stat2Text": "единая стратегия оспаривания",
      "hero.stat3Title": "Предоплата",
      "hero.stat3Text": "понятные условия и фиксированный объем работ",
      "case.eyebrow": "Реальный кейс клиента",
      "brands.caption": "Нам доверяют клиенты в ключевых городах США",
      "brands.states": "Работаем во всех 50 штатах США.",
      "workflow.eyebrow": "Как это работает",
      "workflow.title": "4 этапа к сильному кредитному профилю.",
      "workflow.step1Title": "Проверяем",
      "workflow.step1Text": "За $1 анализируем отчеты из трех бюро и формируем точный список записей к удалению.",
      "workflow.step2Title": "Исправляем",
      "workflow.step2Text": "Запускаем оспаривания и убираем неточные записи с координацией по всем бюро.",
      "workflow.step3Title": "Усиливаем",
      "workflow.step3Text": "Добавляем положительные кредитные линии и укрепляем платежную историю.",
      "workflow.step4Title": "Готовим к финансированию",
      "workflow.step4Text": "Помогаем выйти на лучшие условия, когда профиль достигает нужного уровня.",
      "platform.eyebrow": "Почему CreditBooster",
      "platform.title": "Современный подход к восстановлению и росту кредита.",
      "platform.lead":
        "Мы объединяем аналитику, оспаривание и тактику роста профиля в одной системе. Без скрытых платежей и без размытых сроков.",
      "platform.bullet1": "Прозрачный старт и понятные еженедельные обновления",
      "platform.bullet2": "Планы с предоплатой и прозрачными условиями оплаты",
      "platform.bullet3": "Структурная поддержка от скана до готовности к финансированию",
      "platform.card1Title": "Анализ рейтинга",
      "platform.card1Text": "Стартовый разбор за $1 с персональной картой рисков и планом действий.",
      "platform.card2Title": "Без скрытых платежей",
      "platform.card2Text": "Простая стоимость и понятные результаты работ от старта до завершения.",
      "platform.card3Title": "Ускоренное сопровождение",
      "platform.card3Text": "Быстрый цикл оспаривания, ориентированный на первые результаты до 30 дней.",
      "proof.metric1": "средняя оценка клиентов",
      "proof.metric2": "оспоренных кредитных записей",
      "proof.metric3": "стабильность шифрования данных клиентов",
      "proof.quote1":
        '"С ними легко работать, быстрая коммуникация и понятный процесс с первого дня. Изменения в рейтинге были видны уже в первый месяц."',
      "proof.quote2":
        '"Команда держала меня в курсе каждую неделю и объясняла каждый этап споров. Прозрачность была решающим фактором."',
      "proof.quote3":
        '"Лучшее вложение для исправления ошибок в отчете. Наконец-то был четкий план, а не случайные советы."',
      "security.eyebrow": "Безопасность и доверие",
      "security.title": "Мы работаем с вашими данными как финансовая инфраструктура уровня регулирования.",
      "security.card1Title": "Безопасность",
      "security.card1Text": "128-битное шифрование передачи и строгий контроль доступа во всех процессах.",
      "security.card2Title": "Конфиденциальность",
      "security.card2Text": "Мы не продаем и не передаем персональные данные сторонним маркетинговым компаниям.",
      "security.card3Title": "Условия оплаты",
      "security.card3Text": "Услуги оказываются по предоплате с прозрачным объемом, сроками и ожидаемым результатом.",
      "cta.eyebrow": "Старт сейчас",
      "cta.title": "Получите кредитный план под ваш реальный профиль.",
      "cta.text": "Свяжитесь с командой и получите персональную дорожную карту за несколько минут.",
      "cta.start": "Начать за $1",
      "cta.call": "Позвонить в поддержку",
      "footer.tagline": "Платформа для восстановления и роста кредитного рейтинга.",
      "footer.companyTitle": "Компания",
      "footer.companyAbout": "О нас",
      "footer.companyCareers": "Карьера",
      "footer.companyContact": "Контакты",
      "footer.servicesTitle": "Услуги",
      "footer.servicesRepair": "Кредитное восстановление",
      "footer.servicesTradelines": "Tradelines",
      "footer.servicesFunding": "Помощь с финансированием",
      "footer.supportTitle": "Поддержка",
      "footer.supportFaq": "FAQ",
      "footer.supportPrivacy": "Политика конфиденциальности",
    },
    caseUi: {
      before: "До старта",
      what: "Что уже сделали",
      startingLabel: "Стартовый рейтинг",
      negativeLabel: "Удалено негативных записей",
      positiveLabel: "Добавлено положительных линий",
      currentLabel: "Текущий рейтинг",
      roadmapLabel: "Выполнение плана:",
      result: (weeks) => `Результат (${weeks} недель)`,
    },
    caseStudies: [
      {
        client: "Клиент: Alex, Miami",
        startingScore: "548",
        negativeRemoved: "9 из 11",
        positiveTradelines: "+3 кредитные линии",
        weeks: 8,
        currentScore: "710",
        roadmapCompletion: "82%",
        meter: 82,
        note: "Сделано: аудит 3 бюро, поданы 2 раунда оспариваний, оптимизирована кредитная нагрузка, запущен рост положительной истории.",
      },
      {
        client: "Клиент: Maria, Chicago",
        startingScore: "521",
        negativeRemoved: "7 из 9",
        positiveTradelines: "+2 кредитные линии",
        weeks: 10,
        currentScore: "689",
        roadmapCompletion: "77%",
        meter: 77,
        note: "Сделано: план очистки отчета, эскалации в 2 бюро, снижение загрузки карт ниже 25%.",
      },
      {
        client: "Клиент: David, Houston",
        startingScore: "574",
        negativeRemoved: "10 из 12",
        positiveTradelines: "+4 кредитные линии",
        weeks: 12,
        currentScore: "724",
        roadmapCompletion: "88%",
        meter: 88,
        note: "Сделано: исправлены данные адреса и личности, закрыты ключевые споры, улучшена структура кредитных продуктов.",
      },
    ],
  },
  uk: {
    htmlLang: "uk",
    pageTitle: "CreditBooster - Платформа для зростання кредитного рейтингу",
    pageDescription:
      "CreditBooster допомагає перевірити, виправити та посилити кредитний профіль із прозорим процесом і вимірюваним результатом.",
    texts: {
      "nav.how": "Як це працює",
      "nav.results": "Результати",
      "nav.security": "Безпека",
      "nav.faq": "FAQ",
      "nav.call": "Зателефонувати: (866) 662-6678",
      "hero.eyebrow": "Платформа покращення кредиту",
      "hero.title": "Рішення для кредиту. Швидко, зрозуміло, з вимірюваним результатом.",
      "hero.lead":
        "Почніть із кредитного скану за $1, приберіть негативні записи в усіх трьох бюро та посильте профіль завдяки зростанню позитивних кредитних ліній.",
      "hero.ctaStart": "Почати за $1",
      "hero.ctaBook": "Записатися на консультацію",
      "hero.stat1Title": "27 днів",
      "hero.stat1Text": "до перших помітних змін рейтингу",
      "hero.stat2Title": "3 бюро",
      "hero.stat2Text": "єдина стратегія оскаржень",
      "hero.stat3Title": "Передплата",
      "hero.stat3Text": "прозорі умови та фіксований обсяг робіт",
      "case.eyebrow": "Реальний кейс клієнта",
      "brands.caption": "Нам довіряють клієнти у ключових містах США",
      "brands.states": "Працюємо в усіх 50 штатах США.",
      "workflow.eyebrow": "Як це працює",
      "workflow.title": "4 етапи до сильного кредитного профілю.",
      "workflow.step1Title": "Перевіряємо",
      "workflow.step1Text": "За $1 аналізуємо звіти з трьох бюро та формуємо точний список записів до видалення.",
      "workflow.step2Title": "Виправляємо",
      "workflow.step2Text": "Запускаємо оскарження та прибираємо неточні записи з координацією між бюро.",
      "workflow.step3Title": "Підсилюємо",
      "workflow.step3Text": "Додаємо позитивні кредитні лінії та зміцнюємо платіжну історію.",
      "workflow.step4Title": "Готуємо до фінансування",
      "workflow.step4Text": "Допомагаємо вийти на кращі умови, коли профіль досягає потрібного рівня.",
      "platform.eyebrow": "Чому CreditBooster",
      "platform.title": "Сучасний підхід до відновлення та зростання кредиту.",
      "platform.lead":
        "Ми поєднуємо аналітику, оскарження та тактики зростання профілю в одній системі. Без прихованих платежів і без розмитих термінів.",
      "platform.bullet1": "Прозорий старт і зрозумілі щотижневі оновлення",
      "platform.bullet2": "Плани з передплатою та прозорими умовами оплати",
      "platform.bullet3": "Структурна підтримка від скану до готовності до фінансування",
      "platform.card1Title": "Аналіз рейтингу",
      "platform.card1Text": "Початковий розбір за $1 із персональною картою ризиків і списком дій.",
      "platform.card2Title": "Без прихованих платежів",
      "platform.card2Text": "Просте ціноутворення і чіткі результати робіт від старту до завершення.",
      "platform.card3Title": "Прискорений супровід",
      "platform.card3Text": "Швидкий цикл оскаржень, орієнтований на перші результати до 30 днів.",
      "proof.metric1": "середній рейтинг відгуків",
      "proof.metric2": "оспорених кредитних записів",
      "proof.metric3": "стабільність шифрування даних клієнтів",
      "proof.quote1":
        '"З ними легко працювати, швидка комунікація і простий процес із першого дня. Рух рейтингу був помітний вже в перший місяць."',
      "proof.quote2":
        '"Команда щотижня тримала мене в курсі та пояснювала кожен етап спорів. Прозорість стала вирішальною."',
      "proof.quote3":
        '"Найкраща інвестиція для виправлення помилок у звіті. Нарешті був чіткий план, а не випадкові поради."',
      "security.eyebrow": "Безпека та довіра",
      "security.title": "Ми працюємо з вашими даними як регульована фінансова інфраструктура.",
      "security.card1Title": "Безпека",
      "security.card1Text": "128-бітове шифрування передачі та суворий контроль доступу в усіх процесах.",
      "security.card2Title": "Приватність",
      "security.card2Text": "Ми не продаємо і не передаємо персональні дані стороннім маркетинговим компаніям.",
      "security.card3Title": "Умови оплати",
      "security.card3Text": "Послуги надаються за передплатою з прозорим обсягом, строками та очікуваними результатами.",
      "cta.eyebrow": "Почати зараз",
      "cta.title": "Отримайте кредитний план під ваш реальний профіль.",
      "cta.text": "Зв'яжіться з нашою командою та отримайте персональну дорожню карту за кілька хвилин.",
      "cta.start": "Почати за $1",
      "cta.call": "Подзвонити в підтримку",
      "footer.tagline": "Платформа для відновлення та зростання кредитного рейтингу.",
      "footer.companyTitle": "Компанія",
      "footer.companyAbout": "Про нас",
      "footer.companyCareers": "Кар'єра",
      "footer.companyContact": "Контакти",
      "footer.servicesTitle": "Послуги",
      "footer.servicesRepair": "Кредитне відновлення",
      "footer.servicesTradelines": "Tradelines",
      "footer.servicesFunding": "Допомога з фінансуванням",
      "footer.supportTitle": "Підтримка",
      "footer.supportFaq": "FAQ",
      "footer.supportPrivacy": "Політика конфіденційності",
    },
    caseUi: {
      before: "До старту",
      what: "Що вже зроблено",
      startingLabel: "Стартовий рейтинг",
      negativeLabel: "Прибрано негативних записів",
      positiveLabel: "Додано позитивних ліній",
      currentLabel: "Поточний рейтинг",
      roadmapLabel: "Виконання плану:",
      result: (weeks) => `Результат (${weeks} тижнів)`,
    },
    caseStudies: [
      {
        client: "Клієнт: Alex, Miami",
        startingScore: "548",
        negativeRemoved: "9 з 11",
        positiveTradelines: "+3 кредитні лінії",
        weeks: 8,
        currentScore: "710",
        roadmapCompletion: "82%",
        meter: 82,
        note: "Зроблено: аудит 3 бюро, подано 2 раунди оскаржень, оптимізовано кредитне навантаження, запущено зростання позитивної історії.",
      },
      {
        client: "Клієнт: Maria, Chicago",
        startingScore: "521",
        negativeRemoved: "7 з 9",
        positiveTradelines: "+2 кредитні лінії",
        weeks: 10,
        currentScore: "689",
        roadmapCompletion: "77%",
        meter: 77,
        note: "Зроблено: план очищення звіту, ескалації у 2 бюро, знижено завантаження карт нижче 25%.",
      },
      {
        client: "Клієнт: David, Houston",
        startingScore: "574",
        negativeRemoved: "10 з 12",
        positiveTradelines: "+4 кредитні лінії",
        weeks: 12,
        currentScore: "724",
        roadmapCompletion: "88%",
        meter: 88,
        note: "Зроблено: виправлено дані адреси та особи, закрито ключові оскарження, покращено структуру кредитних продуктів.",
      },
    ],
  },
  kk: {
    htmlLang: "kk",
    pageTitle: "CreditBooster - Кредиттік рейтингті өсіруге арналған платформа",
    pageDescription:
      "CreditBooster ашық процесс және өлшенетін нәтиже арқылы несие профилін тексеруге, түзетуге және күшейтуге көмектеседі.",
    texts: {
      "nav.how": "Қалай жұмыс істейді",
      "nav.results": "Нәтижелер",
      "nav.security": "Қауіпсіздік",
      "nav.faq": "FAQ",
      "nav.call": "Қоңырау шалу (866) 662-6678",
      "hero.eyebrow": "Несие өнімділігі платформасы",
      "hero.title": "Кредитке арналған шешім. Жылдам, түсінікті, нәтижесі өлшенетін.",
      "hero.lead":
        "$1-ға кредит сканынан бастаңыз, үш бюро бойынша теріс жазбаларды алып тастаңыз және оң кредиттік желілер арқылы профиліңізді күшейтіңіз.",
      "hero.ctaStart": "$1-ға бастау",
      "hero.ctaBook": "Стратегиялық қоңырауға жазылу",
      "hero.stat1Title": "27 күн",
      "hero.stat1Text": "кредиттік баллдағы алғашқы көрінетін өсім",
      "hero.stat2Title": "3 бюро",
      "hero.stat2Text": "біріктірілген даулар стратегиясы",
      "hero.stat3Title": "Алдын ала төлем",
      "hero.stat3Text": "нақты шарттары бар алдын ала төлем",
      "case.eyebrow": "Нақты клиент кейсі",
      "brands.caption": "АҚШ-тың ірі нарықтарындағы клиенттер сенім артады",
      "brands.states": "АҚШ-тың барлық 50 штатында жұмыс істейміз.",
      "workflow.eyebrow": "Қалай жұмыс істейді",
      "workflow.title": "Кредит профилін күшейтудің 4 кезеңі.",
      "workflow.step1Title": "Тексереміз",
      "workflow.step1Text": "$1-ға үш есепті қарап, жойылатын теріс жазбалардың картасын жасаймыз.",
      "workflow.step2Title": "Түзетеміз",
      "workflow.step2Text": "Даулар стратегиясы бюро деңгейінде қателіктерді жояды.",
      "workflow.step3Title": "Күшейтеміз",
      "workflow.step3Text": "Оң кредиттік желілер қосып, төлем тарихының сапасын арттырамыз.",
      "workflow.step4Title": "Қаржыландыруға шығамыз",
      "workflow.step4Text": "Профиль тәуекел деңгейіне жеткенде қаржыландыру мүмкіндігін ашамыз.",
      "platform.eyebrow": "Неге CreditBooster",
      "platform.title": "Кредитті қалпына келтіру және өсірудің заманауи жүйесі.",
      "platform.lead":
        "Біз аналитиканы, дауларды және профиль өсу тактикасын бір жүйеге біріктіреміз. Жасырын төлем жоқ. Белгісіз мерзім жоқ.",
      "platform.bullet1": "Айқын онбординг және апта сайынғы жаңарту",
      "platform.bullet2": "Алдын ала төлем жоспарлары және ашық биллинг шарттары",
      "platform.bullet3": "Сканнан қаржыландыруға дейінгі құрылымды қолдау",
      "platform.card1Title": "Кредиттік балл талдауы",
      "platform.card1Text": "$1-ға бастапқы талдау: тәуекел картасы мен әрекет жоспары.",
      "platform.card2Title": "Жасырын төлем жоқ",
      "platform.card2Text": "Бірінші күннен аяқталғанға дейінгі түсінікті баға және нәтиже.",
      "platform.card3Title": "Басым орындау",
      "platform.card3Text": "30 күнге дейін алғашқы нәтиже беруге бағытталған жедел цикл.",
      "proof.metric1": "орташа клиент бағасы",
      "proof.metric2": "дауланған несие жазбалары",
      "proof.metric3": "клиент деректерін шифрлау тұрақтылығы",
      "proof.quote1":
        '"Жұмыс істеу жеңіл, байланыс жылдам, процесс бірінші күннен түсінікті болды. Кредиттік балл өзгерісі бірінші айда-ақ көрінді."',
      "proof.quote2":
        '"Команда апта сайын ақпарат берді және әр даудың кезеңін түсіндірді. Ашықтық ең маңызды себеп болды."',
      "proof.quote3":
        '"Есептегі қателерді түзетуге ең дұрыс инвестиция. Кездейсоқ кеңес емес, нақты жоспар алдым."',
      "security.eyebrow": "Қауіпсіздік және сенім",
      "security.title": "Біз деректеріңізбен реттелетін қаржы инфрақұрылымы деңгейінде жұмыс істейміз.",
      "security.card1Title": "Қауіпсіздік",
      "security.card1Text": "128-биттік шифрлау және барлық процестерде қатаң қолжетімділік бақылауы.",
      "security.card2Title": "Құпиялық",
      "security.card2Text": "Жеке деректерді үшінші тарап маркетинг компанияларына сатпаймыз және бермейміз.",
      "security.card3Title": "Төлем шарттары",
      "security.card3Text": "Қызметтер алдын ала төлем арқылы, көлемі мен мерзімі нақты көрсетіліп ұсынылады.",
      "cta.eyebrow": "Қазір бастау",
      "cta.title": "Нақты профиліңізге сай несие жоспарын жасаңыз.",
      "cta.text": "Командамызбен сөйлесіп, жеке жол картасын бірнеше минутта алыңыз.",
      "cta.start": "$1-ға бастау",
      "cta.call": "Қолдауға қоңырау",
      "footer.tagline": "Кредиттік рейтингті қалпына келтіру және өсіруге арналған платформа.",
      "footer.companyTitle": "Компания",
      "footer.companyAbout": "Біз туралы",
      "footer.companyCareers": "Мансап",
      "footer.companyContact": "Байланыс",
      "footer.servicesTitle": "Қызметтер",
      "footer.servicesRepair": "Несиені түзету",
      "footer.servicesTradelines": "Tradelines",
      "footer.servicesFunding": "Қаржыландыру көмегі",
      "footer.supportTitle": "Қолдау",
      "footer.supportFaq": "FAQ",
      "footer.supportPrivacy": "Құпиялық саясаты",
    },
    caseUi: {
      before: "Бастапқы жағдай",
      what: "Не істедік",
      startingLabel: "Бастапқы кредиттік балл",
      negativeLabel: "Жойылған теріс жазбалар",
      positiveLabel: "Қосылған оң кредиттік желілер",
      currentLabel: "Қазіргі кредиттік балл",
      roadmapLabel: "Жоспардың орындалуы:",
      result: (weeks) => `Нәтиже (${weeks} апта)`,
    },
    caseStudies: [
      {
        client: "Клиент: Alex, Miami",
        startingScore: "548",
        negativeRemoved: "9 / 11",
        positiveTradelines: "+3 кредиттік желі",
        weeks: 8,
        currentScore: "710",
        roadmapCompletion: "82%",
        meter: 82,
        note: "Орындалды: 3 бюро аудиті, 2 раунд дау жіберілді, жүктеме коэффициенті оңтайландырылды, оң тарих құрылды.",
      },
      {
        client: "Клиент: Maria, Chicago",
        startingScore: "521",
        negativeRemoved: "7 / 9",
        positiveTradelines: "+2 кредиттік желі",
        weeks: 10,
        currentScore: "689",
        roadmapCompletion: "77%",
        meter: 77,
        note: "Орындалды: есепті тазарту жоспары, 2 бюроға эскалация, карта жүктемесі 25%-дан төмендетілді.",
      },
      {
        client: "Клиент: David, Houston",
        startingScore: "574",
        negativeRemoved: "10 / 12",
        positiveTradelines: "+4 кредиттік желі",
        weeks: 12,
        currentScore: "724",
        roadmapCompletion: "88%",
        meter: 88,
        note: "Орындалды: жеке және мекенжай деректері түзетілді, жоғары әсерлі даулар шешілді, несие миксі жақсарды.",
      },
    ],
  },
  ky: {
    htmlLang: "ky",
    pageTitle: "CreditBooster - Кредиттик рейтингди өстүрүү платформасы",
    pageDescription:
      "CreditBooster ачык процесс жана өлчөнүүчү жыйынтык аркылуу кредит профилиңизди текшерүүгө, оңдоого жана күчөтүүгө жардам берет.",
    texts: {
      "nav.how": "Кантип иштейт",
      "nav.results": "Натыйжалар",
      "nav.security": "Коопсуздук",
      "nav.faq": "FAQ",
      "nav.call": "Чалуу (866) 662-6678",
      "hero.eyebrow": "Кредит натыйжалуулук платформасы",
      "hero.title": "Кредит боюнча чечим. Тез, түшүнүктүү, жыйынтыгы өлчөнүүчү.",
      "hero.lead":
        "$1 кредит сканынан баштаңыз, үч бюро боюнча терс жазууларды алып салыңыз жана оң кредиттик линиялар аркылуу профилди күчөтүңүз.",
      "hero.ctaStart": "$1 менен баштоо",
      "hero.ctaBook": "Стратегиялык чалууга жазылуу",
      "hero.stat1Title": "27 күн",
      "hero.stat1Text": "кредиттик баллдагы алгачкы көрүнгөн өсүш",
      "hero.stat2Title": "3 бюро",
      "hero.stat2Text": "бирдиктүү талаш стратегиясы",
      "hero.stat3Title": "Алдын ала төлөм",
      "hero.stat3Text": "так шарттары бар алдын ала төлөм",
      "case.eyebrow": "Чыныгы кардар кейси",
      "brands.caption": "АКШнын ири рынокторундагы кардарлар ишенет",
      "brands.states": "АКШнын бардык 50 штатында иштейбиз.",
      "workflow.eyebrow": "Кантип иштейт",
      "workflow.title": "Күчтүү кредит профилине алып баруучу 4 баскыч.",
      "workflow.step1Title": "Текшеребиз",
      "workflow.step1Text": "$1 үчүн үч отчетту карап, өчүрүлө турган терс жазууларды белгилейбиз.",
      "workflow.step2Title": "Оңдойбуз",
      "workflow.step2Text": "Талаш стратегиясы бюро деңгээлинде так эмес жазууларды жок кылат.",
      "workflow.step3Title": "Күчөтөбүз",
      "workflow.step3Text": "Оң кредиттик линияларды кошуп, төлөм тарыхын бекемдейбиз.",
      "workflow.step4Title": "Каржылоого чыгабыз",
      "workflow.step4Text": "Профиль максаттуу тобокел деңгээлине жеткенде каржылоо мүмкүнчүлүгү ачылат.",
      "platform.eyebrow": "Эмне үчүн CreditBooster",
      "platform.title": "Кредитти оңдоо жана өстүрүүнүн заманбап системасы.",
      "platform.lead":
        "Биз аналитиканы, талаш иштерин жана профиль өстүрүү тактикасын бириктиребиз. Жашыруун төлөм жок. Так эмес мөөнөт жок.",
      "platform.bullet1": "Ачык баштоо жана жума сайын түшүнүктүү жаңылоо",
      "platform.bullet2": "Алдын ала төлөм пландары жана ачык биллинг шарттары",
      "platform.bullet3": "Скандан каржылоого даярдыкка чейинки структураланган колдоо",
      "platform.card1Title": "Кредиттик балл талдоосу",
      "platform.card1Text": "$1 үчүн баштапкы талдоо: тобокел картасы жана аракет планы.",
      "platform.card2Title": "Жашыруун төлөм жок",
      "platform.card2Text": "Биринчи күндөн аяктоого чейин жөнөкөй баа жана так аткарылчу иштер.",
      "platform.card3Title": "Приоритеттүү аткаруу",
      "platform.card3Text": "30 күнгө чейин алгачкы натыйжага багытталган ылдам цикл.",
      "proof.metric1": "орточо кардар баасы",
      "proof.metric2": "талашка коюлган кредит жазуулары",
      "proof.metric3": "кардар маалыматтарын шифрлөөнүн туруктуулугу",
      "proof.quote1":
        '"Иштөө оңой, байланыш ылдам, процесс биринчи күндөн түшүнүктүү болду. Кредиттик баллдагы өзгөрүү биринчи айда эле көрүндү."',
      "proof.quote2":
        '"Команда ар жума сайын маалымат берип, талаштын ар бир этаптарын түшүндүрдү. Ачыктык негизги себеп болду."',
      "proof.quote3":
        '"Отчеттогу каталарды оңдоого эң жакшы инвестиция. Акыры кокус кеңеш эмес, так план алдым."',
      "security.eyebrow": "Коопсуздук жана ишеним",
      "security.title": "Биз маалыматтарыңызды жөнгө салынган каржы инфраструктурасы деңгээлинде иштетебиз.",
      "security.card1Title": "Коопсуздук",
      "security.card1Text": "128-биттик шифрлөө жана бардык процесстерде катуу жеткиликтүүлүк көзөмөлү.",
      "security.card2Title": "Купуялык",
      "security.card2Text": "Жеке маалыматтарды үчүнчү тарап маркетинг компанияларына сатпайбыз жана бербейбиз.",
      "security.card3Title": "Төлөм шарттары",
      "security.card3Text": "Кызматтар алдын ала төлөм менен, көлөмү жана мөөнөтү так көрсөтүлүп берилет.",
      "cta.eyebrow": "Азыр баштаңыз",
      "cta.title": "Чыныгы профилиңизге ылайык кредит планын түзүңүз.",
      "cta.text": "Командабыз менен сүйлөшүп, жеке жол картасын бир нече мүнөттө алыңыз.",
      "cta.start": "$1 менен баштоо",
      "cta.call": "Колдоого чалуу",
      "footer.tagline": "Кредиттик рейтингди калыбына келтирүү жана өстүрүү платформасы.",
      "footer.companyTitle": "Компания",
      "footer.companyAbout": "Биз жөнүндө",
      "footer.companyCareers": "Карьера",
      "footer.companyContact": "Байланыш",
      "footer.servicesTitle": "Кызматтар",
      "footer.servicesRepair": "Кредит оңдоо",
      "footer.servicesTradelines": "Tradelines",
      "footer.servicesFunding": "Каржылоо жардамы",
      "footer.supportTitle": "Колдоо",
      "footer.supportFaq": "FAQ",
      "footer.supportPrivacy": "Купуялык саясаты",
    },
    caseUi: {
      before: "Баштапкы абал",
      what: "Эмне жасалды",
      startingLabel: "Баштапкы кредиттик балл",
      negativeLabel: "Өчүрүлгөн терс жазуулар",
      positiveLabel: "Кошулган оң кредиттик линиялар",
      currentLabel: "Азыркы кредиттик балл",
      roadmapLabel: "Пландын аткарылышы:",
      result: (weeks) => `Натыйжа (${weeks} жума)`,
    },
    caseStudies: [
      {
        client: "Кардар: Alex, Miami",
        startingScore: "548",
        negativeRemoved: "9 / 11",
        positiveTradelines: "+3 кредиттик линия",
        weeks: 8,
        currentScore: "710",
        roadmapCompletion: "82%",
        meter: 82,
        note: "Жасалды: 3 бюро аудит, 2 раунд талаш жөнөтүлдү, жүктөм коэффициенти оптималдаштырылды, оң тарых түзүлдү.",
      },
      {
        client: "Кардар: Maria, Chicago",
        startingScore: "521",
        negativeRemoved: "7 / 9",
        positiveTradelines: "+2 кредиттик линия",
        weeks: 10,
        currentScore: "689",
        roadmapCompletion: "77%",
        meter: 77,
        note: "Жасалды: отчетту тазалоо планы, 2 бюрого эскалация, карта жүктөмү 25%дан төмөндөтүлдү.",
      },
      {
        client: "Кардар: David, Houston",
        startingScore: "574",
        negativeRemoved: "10 / 12",
        positiveTradelines: "+4 кредиттик линия",
        weeks: 12,
        currentScore: "724",
        roadmapCompletion: "88%",
        meter: 88,
        note: "Жасалды: дарек жана инсандык маалыматтары оңдолду, негизги талаштар чечилди, кредиттик микс жакшыртылды.",
      },
    ],
  },
  sr: {
    htmlLang: "sr",
    pageTitle: "CreditBooster - Platforma za rast kreditnog rejtinga",
    pageDescription:
      "CreditBooster pomaže da proverite, ispravite i ojačate kreditni profil kroz transparentan proces i merljive rezultate.",
    texts: {
      "nav.how": "Kako funkcioniše",
      "nav.results": "Rezultati",
      "nav.security": "Bezbednost",
      "nav.faq": "FAQ",
      "nav.call": "Pozovite (866) 662-6678",
      "hero.eyebrow": "Platforma za kreditni napredak",
      "hero.title": "Rešenje za vaš kredit. Brzo, jasno i sa merljivim rezultatima.",
      "hero.lead":
        "Počnite sa kreditnim skenom za $1, uklonite negativne stavke u sva tri biroa i ojačajte profil kroz pozitivne kreditne linije.",
      "hero.ctaStart": "Počni za $1",
      "hero.ctaBook": "Zakaži strateški poziv",
      "hero.stat1Title": "27 dana",
      "hero.stat1Text": "do prvog vidljivog pomaka kreditnog rejtinga",
      "hero.stat2Title": "3 biroa",
      "hero.stat2Text": "usklađena strategija sporova",
      "hero.stat3Title": "Avansno plaćanje",
      "hero.stat3Text": "model avansnog plaćanja sa jasnim uslovima",
      "case.eyebrow": "Stvarni slučaj klijenta",
      "brands.caption": "Klijenti nam veruju širom glavnih tržišta SAD",
      "brands.states": "Radimo u svih 50 saveznih država SAD-a.",
      "workflow.eyebrow": "Kako funkcioniše",
      "workflow.title": "Četiri faze za obnovu kreditne osnove.",
      "workflow.step1Title": "Proveravamo",
      "workflow.step1Text": "Za $1 analiziramo sva tri izveštaja i mapiramo svaku negativnu stavku koja može da se ukloni.",
      "workflow.step2Title": "Ispravljamo",
      "workflow.step2Text": "Strategija sporova uklanja netačne i štetne stavke uz koordinaciju između biroa.",
      "workflow.step3Title": "Gradimo",
      "workflow.step3Text": "Dodajemo pozitivne kreditne linije i poboljšavamo dubinu istorije plaćanja.",
      "workflow.step4Title": "Dolazimo do finansiranja",
      "workflow.step4Text": "Otključavamo bolje opcije finansiranja kada profil dostigne ciljani nivo rizika.",
      "platform.eyebrow": "Zašto CreditBooster",
      "platform.title": "Savremen sistem za popravku i rast kredita.",
      "platform.lead":
        "Spajamo analitiku, obradu sporova i taktike rasta profila u jedan vođen sistem. Bez skrivenih naknada. Bez nejasnih rokova.",
      "platform.bullet1": "Transparentan početak i jasna nedeljna ažuriranja",
      "platform.bullet2": "Avansni planovi plaćanja sa transparentnim uslovima",
      "platform.bullet3": "Strukturisana podrška od skena do spremnosti za finansiranje",
      "platform.card1Title": "Analiza rejtinga",
      "platform.card1Text": "Početna analiza za $1 sa mapom rizika i listom akcija.",
      "platform.card2Title": "Bez skrivenih naknada",
      "platform.card2Text": "Jednostavne cene i jasne isporuke od prvog dana do završetka.",
      "platform.card3Title": "Ubrzana realizacija",
      "platform.card3Text": "Ubrzani ciklus sporova, dizajniran za prve rezultate za manje od 30 dana.",
      "proof.metric1": "prosečna ocena korisnika",
      "proof.metric2": "osporenih kreditnih stavki",
      "proof.metric3": "stabilnost enkripcije podataka klijenata",
      "proof.quote1":
        '"Lako je raditi sa njima, komunikacija je brza, a proces je jasan od prvog dana. Pomak rejtinga se video već u prvom mesecu."',
      "proof.quote2":
        '"Tim me je svake nedelje informisao i objašnjavao svaki korak spora. Transparentnost je bila ključna."',
      "proof.quote3":
        '"Najbolja investicija za ispravljanje grešaka u izveštaju. Konačno sam imao jasan plan, ne nasumične savete."',
      "security.eyebrow": "Bezbednost i poverenje",
      "security.title": "Sa vašim podacima radimo kao regulisana finansijska infrastruktura.",
      "security.card1Title": "Bezbednost",
      "security.card1Text": "128-bitna enkripcija prenosa i stroga kontrola pristupa kroz ceo proces.",
      "security.card2Title": "Privatnost",
      "security.card2Text": "Ne prodajemo i ne delimo lične podatke sa nepovezanim marketinškim stranama.",
      "security.card3Title": "Uslovi naplate",
      "security.card3Text": "Usluge se pružaju uz avansno plaćanje sa jasnim obimom, rokovima i isporukama.",
      "cta.eyebrow": "Počnite sada",
      "cta.title": "Napravite kreditni plan zasnovan na vašem stvarnom profilu.",
      "cta.text": "Razgovarajte sa timom i dobijte personalizovanu mapu puta za nekoliko minuta.",
      "cta.start": "Počni za $1",
      "cta.call": "Pozovi podršku",
      "footer.tagline": "Platforma za oporavak i rast kreditnog rejtinga.",
      "footer.companyTitle": "Kompanija",
      "footer.companyAbout": "O nama",
      "footer.companyCareers": "Karijera",
      "footer.companyContact": "Kontakt",
      "footer.servicesTitle": "Usluge",
      "footer.servicesRepair": "Popravka kredita",
      "footer.servicesTradelines": "Tradelines",
      "footer.servicesFunding": "Pomoć za finansiranje",
      "footer.supportTitle": "Podrška",
      "footer.supportFaq": "FAQ",
      "footer.supportPrivacy": "Politika privatnosti",
    },
    caseUi: {
      before: "Pre početka",
      what: "Šta smo uradili",
      startingLabel: "Početni rejting",
      negativeLabel: "Uklonjene negativne stavke",
      positiveLabel: "Dodate pozitivne kreditne linije",
      currentLabel: "Trenutni rejting",
      roadmapLabel: "Završenost plana:",
      result: (weeks) => `Rezultat (${weeks} nedelja)`,
    },
    caseStudies: [
      {
        client: "Klijent: Alex, Miami",
        startingScore: "548",
        negativeRemoved: "9 od 11",
        positiveTradelines: "+3 računa",
        weeks: 8,
        currentScore: "710",
        roadmapCompletion: "82%",
        meter: 82,
        note: "Urađeno: audit 3 biroa, poslata 2 kruga sporova, optimizovan odnos iskorišćenja i pokrenuta izgradnja pozitivne istorije.",
      },
      {
        client: "Klijent: Maria, Chicago",
        startingScore: "521",
        negativeRemoved: "7 od 9",
        positiveTradelines: "+2 računa",
        weeks: 10,
        currentScore: "689",
        roadmapCompletion: "77%",
        meter: 77,
        note: "Urađeno: plan čišćenja izveštaja, eskalacije u 2 biroa i smanjenje iskorišćenja kartica ispod 25%.",
      },
      {
        client: "Klijent: David, Houston",
        startingScore: "574",
        negativeRemoved: "10 od 12",
        positiveTradelines: "+4 računa",
        weeks: 12,
        currentScore: "724",
        roadmapCompletion: "88%",
        meter: 88,
        note: "Urađeno: ispravke identiteta i adrese, rešeni visoko-prioritetni sporovi i poboljšan kreditni miks.",
      },
    ],
  },
  uz: {
    htmlLang: "uz",
    pageTitle: "CreditBooster - Kredit reytingini oshirish platformasi",
    pageDescription:
      "CreditBooster shaffof jarayon va o'lchanadigan natija orqali kredit profilingizni tekshirish, tuzatish va kuchaytirishga yordam beradi.",
    texts: {
      "nav.how": "Qanday ishlaydi",
      "nav.results": "Natijalar",
      "nav.security": "Xavfsizlik",
      "nav.faq": "FAQ",
      "nav.call": "Qo'ng'iroq: (866) 662-6678",
      "hero.eyebrow": "Kredit samaradorligi platformasi",
      "hero.title": "Kredit uchun yechim. Tez, aniq va natijasi o'lchanadigan.",
      "hero.lead":
        "$1 kredit skanidan boshlang, uchta byuro bo'yicha salbiy yozuvlarni olib tashlang va ijobiy kredit liniyalari orqali profilingizni mustahkamlang.",
      "hero.ctaStart": "$1 evaziga boshlash",
      "hero.ctaBook": "Strategik qo'ng'iroqqa yozilish",
      "hero.stat1Title": "27 kun",
      "hero.stat1Text": "reytingdagi ilk ko'rinadigan o'zgarish",
      "hero.stat2Title": "3 byuro",
      "hero.stat2Text": "muvofiqlashtirilgan nizolar strategiyasi",
      "hero.stat3Title": "Oldindan to'lov",
      "hero.stat3Text": "aniq shartli oldindan to'lov modeli",
      "case.eyebrow": "Haqiqiy mijoz keysi",
      "brands.caption": "AQShning yirik bozorlaridagi mijozlar ishonadi",
      "brands.states": "AQShning barcha 50 shtatida ishlaymiz.",
      "workflow.eyebrow": "Qanday ishlaydi",
      "workflow.title": "Kredit asosini tiklashning 4 bosqichi.",
      "workflow.step1Title": "Tekshiramiz",
      "workflow.step1Text": "$1 evaziga uchta hisobotni tahlil qilib, olib tashlanadigan salbiy yozuvlarni belgilaymiz.",
      "workflow.step2Title": "Tuzatamiz",
      "workflow.step2Text": "Nizolar strategiyasi byuro darajasida noaniq yozuvlarni olib tashlaydi.",
      "workflow.step3Title": "Kuchaytiramiz",
      "workflow.step3Text": "Ijobiy kredit liniyalarini qo'shib, to'lov tarixini mustahkamlaymiz.",
      "workflow.step4Title": "Moliyalashtirishga chiqamiz",
      "workflow.step4Text": "Profil maqsadli risk darajasiga yetganda moliyaviy imkoniyatlar ochiladi.",
      "platform.eyebrow": "Nega CreditBooster",
      "platform.title": "Kreditni tiklash va o'stirish uchun zamonaviy tizim.",
      "platform.lead":
        "Biz analitika, nizo ishlari va profil o'sish taktikasini bitta tizimga birlashtiramiz. Yashirin to'lovlar yo'q. Noaniq muddatlar yo'q.",
      "platform.bullet1": "Shaffof boshlanish va haftalik aniq yangilanishlar",
      "platform.bullet2": "Oldindan to'lov rejalari va aniq to'lov shartlari",
      "platform.bullet3": "Skandan moliyalashtirishga tayyorgacha strukturalangan yordam",
      "platform.card1Title": "Score tahlili",
      "platform.card1Text": "$1 evaziga boshlang'ich tahlil: risk xaritasi va amallar ro'yxati.",
      "platform.card2Title": "Yashirin to'lovlarsiz",
      "platform.card2Text": "Birinchi kundan yakungacha sodda narx va aniq natija.",
      "platform.card3Title": "Ustuvor bajarish",
      "platform.card3Text": "30 kundan kam muddatda ilk natijalarga yo'naltirilgan tezlashtirilgan sikl.",
      "proof.metric1": "o'rtacha mijoz bahosi",
      "proof.metric2": "bahsga chiqarilgan kredit yozuvlari",
      "proof.metric3": "mijoz ma'lumotlari shifrlanishining barqarorligi",
      "proof.quote1":
        '"Ular bilan ishlash oson, aloqa tez, jarayon esa birinchi kundan tushunarli bo\'ldi. Scoredagi o\'zgarish birinchi oyda ko\'rindi."',
      "proof.quote2":
        '"Jamoa har hafta holatni tushuntirdi va har bir nizo bosqichini aniq ko\'rsatdi. Shaffoflik asosiy sabab bo\'ldi."',
      "proof.quote3":
        '"Hisobotdagi xatolarni tuzatish uchun eng yaxshi sarmoya. Nihoyat, tasodifiy maslahat emas, aniq reja oldim."',
      "security.eyebrow": "Xavfsizlik va ishonch",
      "security.title": "Ma'lumotlaringiz bilan tartibga solinadigan moliyaviy infratuzilma darajasida ishlaymiz.",
      "security.card1Title": "Xavfsizlik",
      "security.card1Text": "128-bit shifrlash va barcha jarayonlarda qat'iy kirish nazorati.",
      "security.card2Title": "Maxfiylik",
      "security.card2Text": "Shaxsiy ma'lumotlarni uchinchi tomon marketing kompaniyalariga sotmaymiz yoki ulashmaymiz.",
      "security.card3Title": "To'lov shartlari",
      "security.card3Text": "Xizmatlar oldindan to'lov asosida, hajm va muddat aniq ko'rsatilgan holda taqdim etiladi.",
      "cta.eyebrow": "Hozir boshlang",
      "cta.title": "Haqiqiy profilingizga mos kredit rejasini tuzing.",
      "cta.text": "Jamoamiz bilan gaplashing va bir necha daqiqada shaxsiy yo'l xaritasini oling.",
      "cta.start": "$1 evaziga boshlash",
      "cta.call": "Qo'llab-quvvatlashga qo'ng'iroq",
      "footer.tagline": "Kredit reytingini tiklash va o'stirish platformasi.",
      "footer.companyTitle": "Kompaniya",
      "footer.companyAbout": "Biz haqimizda",
      "footer.companyCareers": "Karyera",
      "footer.companyContact": "Aloqa",
      "footer.servicesTitle": "Xizmatlar",
      "footer.servicesRepair": "Kreditni tiklash",
      "footer.servicesTradelines": "Tradelines",
      "footer.servicesFunding": "Moliyalashtirish yordami",
      "footer.supportTitle": "Yordam",
      "footer.supportFaq": "FAQ",
      "footer.supportPrivacy": "Maxfiylik siyosati",
    },
    caseUi: {
      before: "Boshlanishi",
      what: "Nima qilindi",
      startingLabel: "Boshlang'ich reyting",
      negativeLabel: "Olib tashlangan salbiy yozuvlar",
      positiveLabel: "Qo'shilgan ijobiy kredit liniyalari",
      currentLabel: "Joriy reyting",
      roadmapLabel: "Reja bajarilishi:",
      result: (weeks) => `Natija (${weeks} hafta)`,
    },
    caseStudies: [
      {
        client: "Mijoz: Alex, Miami",
        startingScore: "548",
        negativeRemoved: "9 dan 11",
        positiveTradelines: "+3 kredit liniyasi",
        weeks: 8,
        currentScore: "710",
        roadmapCompletion: "82%",
        meter: 82,
        note: "Bajarildi: 3 byuro auditi, 2 bosqichli nizo yuborildi, yuklama ko'rsatkichi optimallashtirildi, ijobiy tarix qurilishi boshlandi.",
      },
      {
        client: "Mijoz: Maria, Chicago",
        startingScore: "521",
        negativeRemoved: "7 dan 9",
        positiveTradelines: "+2 kredit liniyasi",
        weeks: 10,
        currentScore: "689",
        roadmapCompletion: "77%",
        meter: 77,
        note: "Bajarildi: hisobotni tozalash rejasi, 2 byuroga eskalatsiya, karta yuklamasi 25% dan pastga tushirildi.",
      },
      {
        client: "Mijoz: David, Houston",
        startingScore: "574",
        negativeRemoved: "10 dan 12",
        positiveTradelines: "+4 kredit liniyasi",
        weeks: 12,
        currentScore: "724",
        roadmapCompletion: "88%",
        meter: 88,
        note: "Bajarildi: shaxs va manzil ma'lumotlari tuzatildi, yuqori ta'sirli nizolar yopildi, kredit aralashmasi yaxshilandi.",
      },
    ],
  },
  "es-mx": {
    htmlLang: "es-MX",
    pageTitle: "CreditBooster - Plataforma para elevar tu historial crediticio",
    pageDescription:
      "CreditBooster te ayuda a revisar, corregir y fortalecer tu perfil crediticio con un proceso transparente y resultados medibles.",
    texts: {
      "nav.how": "Cómo funciona",
      "nav.results": "Resultados",
      "nav.security": "Seguridad",
      "nav.faq": "FAQ",
      "nav.call": "Llamar (866) 662-6678",
      "hero.eyebrow": "Plataforma de rendimiento crediticio",
      "hero.title": "La solución para tu crédito. Rápida, clara y medible.",
      "hero.lead":
        "Empieza con un escaneo de crédito por $1, elimina registros negativos en los tres burós y fortalece tu perfil con más líneas positivas.",
      "hero.ctaStart": "Empezar por $1",
      "hero.ctaBook": "Agendar llamada estratégica",
      "hero.stat1Title": "27 días",
      "hero.stat1Text": "para ver el primer cambio visible en tu score",
      "hero.stat2Title": "3 burós",
      "hero.stat2Text": "estrategia de disputas alineada",
      "hero.stat3Title": "Pago por adelantado",
      "hero.stat3Text": "modelo de prepago con términos claros",
      "case.eyebrow": "Caso real de cliente",
      "brands.caption": "Con la confianza de clientes en los principales mercados de EE.UU.",
      "brands.states": "Trabajamos en los 50 estados de EE.UU.",
      "workflow.eyebrow": "Cómo funciona",
      "workflow.title": "Cuatro fases para reconstruir tu base crediticia.",
      "workflow.step1Title": "Revisamos",
      "workflow.step1Text": "Por $1 analizamos tus 3 reportes y mapeamos cada registro negativo removible.",
      "workflow.step2Title": "Corregimos",
      "workflow.step2Text": "La estrategia de disputas elimina registros inexactos y dañinos con coordinación entre burós.",
      "workflow.step3Title": "Construimos",
      "workflow.step3Text": "Agregamos líneas positivas y fortalecemos la profundidad del historial de pago.",
      "workflow.step4Title": "Listo para financiarte mejor",
      "workflow.step4Text": "Desbloquea mejores oportunidades de financiamiento cuando tu perfil alcanza el nivel de riesgo objetivo.",
      "platform.eyebrow": "Por qué CreditBooster",
      "platform.title": "Sistema moderno para reparar y hacer crecer tu crédito.",
      "platform.lead":
        "Combinamos analítica, ejecución de disputas y tácticas de crecimiento de perfil en un solo sistema guiado. Sin cargos ocultos. Sin tiempos ambiguos.",
      "platform.bullet1": "Inicio transparente y actualizaciones semanales claras",
      "platform.bullet2": "Planes de prepago con términos de cobro transparentes",
      "platform.bullet3": "Acompañamiento estructurado desde el escaneo hasta la preparación para financiamiento",
      "platform.card1Title": "Análisis de score",
      "platform.card1Text": "Diagnóstico inicial por $1 con mapa de riesgo y plan de acción.",
      "platform.card2Title": "Sin cargos ocultos",
      "platform.card2Text": "Precios simples y entregables claros, desde el día uno hasta el cierre.",
      "platform.card3Title": "Ejecución acelerada",
      "platform.card3Text": "Ciclo acelerado de disputas pensado para primeros resultados en menos de 30 días.",
      "proof.metric1": "calificación promedio",
      "proof.metric2": "registros crediticios disputados",
      "proof.metric3": "estabilidad de cifrado de datos de clientes",
      "proof.quote1":
        '"Trabajar con ellos fue fácil: comunicación rápida y proceso claro desde el día uno. El avance en el score se notó en el primer mes."',
      "proof.quote2":
        '"Su equipo me mantuvo informado cada semana y explicó cada etapa de la disputa. La transparencia fue clave para mí."',
      "proof.quote3":
        '"La mejor inversión para corregir discrepancias del reporte. Por fin tuve un plan estructurado, no sugerencias al azar."',
      "security.eyebrow": "Seguridad y confianza",
      "security.title": "Tratamos tus datos como infraestructura financiera regulada.",
      "security.card1Title": "Seguridad",
      "security.card1Text": "Transferencia cifrada de 128 bits y controles de acceso estrictos en todos los procesos.",
      "security.card2Title": "Privacidad",
      "security.card2Text": "Nunca vendemos ni compartimos datos personales con terceros de marketing no afiliados.",
      "security.card3Title": "Términos de pago",
      "security.card3Text": "Los servicios se brindan con prepago y con alcance, tiempos y entregables claros.",
      "cta.eyebrow": "Empieza ahora",
      "cta.title": "Crea un plan de crédito basado en tu perfil real.",
      "cta.text": "Habla con nuestro equipo y obtén tu hoja de ruta personalizada en minutos.",
      "cta.start": "Empezar por $1",
      "cta.call": "Llamar a soporte",
      "footer.tagline": "Plataforma para recuperar y elevar tu historial crediticio.",
      "footer.companyTitle": "Compañía",
      "footer.companyAbout": "Sobre nosotros",
      "footer.companyCareers": "Carreras",
      "footer.companyContact": "Contacto",
      "footer.servicesTitle": "Servicios",
      "footer.servicesRepair": "Reparación de crédito",
      "footer.servicesTradelines": "Tradelines",
      "footer.servicesFunding": "Asistencia de financiamiento",
      "footer.supportTitle": "Soporte",
      "footer.supportFaq": "FAQ",
      "footer.supportPrivacy": "Política de privacidad",
    },
    caseUi: {
      before: "Antes",
      what: "Lo que hicimos",
      startingLabel: "Score inicial",
      negativeLabel: "Registros negativos removidos",
      positiveLabel: "Líneas positivas agregadas",
      currentLabel: "Score actual",
      roadmapLabel: "Avance del plan:",
      result: (weeks) => `Resultado (${weeks} semanas)`,
    },
    caseStudies: [
      {
        client: "Cliente: Alex, Miami",
        startingScore: "548",
        negativeRemoved: "9 de 11",
        positiveTradelines: "+3 cuentas",
        weeks: 8,
        currentScore: "710",
        roadmapCompletion: "82%",
        meter: 82,
        note: "Ya realizado: auditoría en 3 burós, 2 rondas de disputas enviadas, optimización de utilización y arranque de historial positivo.",
      },
      {
        client: "Cliente: Maria, Chicago",
        startingScore: "521",
        negativeRemoved: "7 de 9",
        positiveTradelines: "+2 cuentas",
        weeks: 10,
        currentScore: "689",
        roadmapCompletion: "77%",
        meter: 77,
        note: "Ya realizado: plan de limpieza del reporte, escalaciones en 2 burós y reducción de utilización de tarjetas por debajo de 25%.",
      },
      {
        client: "Cliente: David, Houston",
        startingScore: "574",
        negativeRemoved: "10 de 12",
        positiveTradelines: "+4 cuentas",
        weeks: 12,
        currentScore: "724",
        roadmapCompletion: "88%",
        meter: 88,
        note: "Ya realizado: correcciones de identidad y dirección, disputas de alto impacto resueltas y mejora de mezcla de crédito.",
      },
    ],
  },
};

const caseElements = {
  wrapper: document.querySelector("#client-case"),
  client: document.querySelector("#case-client"),
  beforeLabel: document.querySelector("#case-before-label"),
  whatLabel: document.querySelector("#case-what-label"),
  startingLabel: document.querySelector("#case-starting-label"),
  startingScore: document.querySelector("#case-starting-score"),
  negativeLabel: document.querySelector("#case-negative-label"),
  negativeRemoved: document.querySelector("#case-negative-removed"),
  positiveLabel: document.querySelector("#case-positive-label"),
  positiveTradelines: document.querySelector("#case-positive-tradelines"),
  meterFill: document.querySelector("#case-meter-fill"),
  resultLabel: document.querySelector("#case-result-label"),
  currentLabel: document.querySelector("#case-current-label"),
  currentScore: document.querySelector("#case-current-score"),
  roadmapLabel: document.querySelector("#case-roadmap-label"),
  roadmapCompletion: document.querySelector("#case-roadmap-completion"),
  note: document.querySelector("#case-note"),
};

const languageSwitcher = document.querySelector("#language-switcher");
const metaDescription = document.querySelector('meta[name="description"]');
const translatableNodes = document.querySelectorAll("[data-i18n]");

const storageKey = "creditbooster_lang";
let activeLanguage = "en";
let caseIndex = 0;
let caseRotationId = null;
let isCaseRotationPaused = false;

const getLanguagePack = (lang) => translations[lang] || translations.en;

const applyStaticTranslations = (langPack) => {
  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const translated = langPack.texts[key];

    if (typeof translated === "string") {
      node.textContent = translated;
    }
  });
};

const applyCaseLabels = (langPack) => {
  if (!caseElements.wrapper) {
    return;
  }

  caseElements.beforeLabel.textContent = langPack.caseUi.before;
  caseElements.whatLabel.textContent = langPack.caseUi.what;
  caseElements.startingLabel.textContent = langPack.caseUi.startingLabel;
  caseElements.negativeLabel.textContent = langPack.caseUi.negativeLabel;
  caseElements.positiveLabel.textContent = langPack.caseUi.positiveLabel;
  caseElements.currentLabel.textContent = langPack.caseUi.currentLabel;
  caseElements.roadmapLabel.textContent = langPack.caseUi.roadmapLabel;
};

const renderCase = (animate = true) => {
  if (!caseElements.wrapper) {
    return;
  }

  const langPack = getLanguagePack(activeLanguage);
  const studies = langPack.caseStudies;

  if (!Array.isArray(studies) || studies.length === 0) {
    return;
  }

  const caseData = studies[caseIndex % studies.length];
  const update = () => {
    caseElements.client.textContent = caseData.client;
    caseElements.startingScore.textContent = caseData.startingScore;
    caseElements.negativeRemoved.textContent = caseData.negativeRemoved;
    caseElements.positiveTradelines.textContent = caseData.positiveTradelines;
    caseElements.resultLabel.textContent = langPack.caseUi.result(caseData.weeks);
    caseElements.currentScore.textContent = caseData.currentScore;
    caseElements.roadmapCompletion.textContent = caseData.roadmapCompletion;
    caseElements.note.textContent = caseData.note;
    caseElements.meterFill.style.width = `${caseData.meter}%`;
    caseElements.wrapper.classList.remove("is-updating");
  };

  if (animate) {
    caseElements.wrapper.classList.add("is-updating");
    window.setTimeout(update, 120);
    return;
  }

  update();
};

const applyLanguage = (nextLanguage) => {
  const resolvedLanguage = translations[nextLanguage] ? nextLanguage : "en";
  const langPack = getLanguagePack(resolvedLanguage);

  activeLanguage = resolvedLanguage;
  document.documentElement.lang = langPack.htmlLang;
  document.title = langPack.pageTitle;

  if (metaDescription) {
    metaDescription.setAttribute("content", langPack.pageDescription);
  }

  applyStaticTranslations(langPack);
  applyCaseLabels(langPack);

  caseIndex = 0;
  renderCase(false);

  if (languageSwitcher) {
    languageSwitcher.value = resolvedLanguage;
  }
};

const startCaseRotation = () => {
  if (!caseElements.wrapper) {
    return;
  }

  if (isCaseRotationPaused) {
    return;
  }

  if (caseRotationId) {
    window.clearInterval(caseRotationId);
  }

  caseRotationId = window.setInterval(() => {
    const studies = getLanguagePack(activeLanguage).caseStudies;

    if (!Array.isArray(studies) || studies.length < 2) {
      return;
    }

    caseIndex = (caseIndex + 1) % studies.length;
    renderCase(true);
  }, 3000);
};

const stopCaseRotation = () => {
  if (!caseRotationId) {
    return;
  }

  window.clearInterval(caseRotationId);
  caseRotationId = null;
};

const savedLanguage = window.localStorage.getItem(storageKey);
const initialLanguage = translations[savedLanguage] ? savedLanguage : "en";
applyLanguage(initialLanguage);
startCaseRotation();

if (caseElements.wrapper) {
  caseElements.wrapper.addEventListener("mouseenter", () => {
    isCaseRotationPaused = true;
    stopCaseRotation();
  });

  caseElements.wrapper.addEventListener("mouseleave", () => {
    isCaseRotationPaused = false;
    startCaseRotation();
  });
}

if (languageSwitcher) {
  languageSwitcher.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    if (!translations[selectedLanguage]) {
      return;
    }

    window.localStorage.setItem(storageKey, selectedLanguage);
    applyLanguage(selectedLanguage);
    applyLeadModalLanguage(selectedLanguage);

    if (toggle && nav && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

const leadModal = document.querySelector("#lead-modal");
const leadForm = document.querySelector("#lead-form");
const leadFormStatus = document.querySelector("#lead-form-status");
const leadModalOpeners = document.querySelectorAll("[data-open-lead-modal]");
const leadModalClosers = document.querySelectorAll("[data-close-lead-modal]");
const leadModalCloseBtn = document.querySelector("#lead-modal-close");
const leadModalTitle = document.querySelector("#lead-modal-title");
const leadModalSubtitle = document.querySelector("#lead-modal-subtitle");
const leadLabelLastName = document.querySelector("#lead-label-last-name");
const leadLabelFirstName = document.querySelector("#lead-label-first-name");
const leadLabelPhone = document.querySelector("#lead-label-phone");
const leadLabelEmail = document.querySelector("#lead-label-email");
const leadSubmitBtn = document.querySelector("#lead-submit-btn");
const leadLastNameInput = document.querySelector("#lead-last-name");
const leadFirstNameInput = document.querySelector("#lead-first-name");
const leadPhoneInput = document.querySelector("#lead-phone");
const leadEmailInput = document.querySelector("#lead-email");
const leadFirstInput = document.querySelector("#lead-last-name");
const defaultLeadSource = "creditbooster.com lead modal";
let activeLeadSource = defaultLeadSource;

const leadModalTranslations = {
  en: {
    title: "Leave your request",
    subtitle: "Fill out the form and we will contact you shortly.",
    lastName: "Last name",
    firstName: "First name",
    phone: "Phone number",
    email: "Email",
    submit: "Send",
    sending: "Sending...",
    success: "Thank you. Your request has been sent.",
    error: "Could not send request. Please try again or call us.",
    closeAria: "Close form",
    invalidPhone: "Use format +1(XXX)XXX-XXXX",
    invalidEmail: "Enter a valid email with @",
  },
  ru: {
    title: "Оставьте заявку",
    subtitle: "Заполните форму, и мы свяжемся с вами в ближайшее время.",
    lastName: "Фамилия",
    firstName: "Имя",
    phone: "Номер телефона",
    email: "Email",
    submit: "Отправить",
    sending: "Отправляем...",
    success: "Спасибо. Ваша заявка отправлена.",
    error: "Не удалось отправить заявку. Попробуйте еще раз или позвоните нам.",
    closeAria: "Закрыть форму",
    invalidPhone: "Введите номер в формате +1(XXX)XXX-XXXX",
    invalidEmail: "Введите корректный email с символом @",
  },
  uk: {
    title: "Залиште заявку",
    subtitle: "Заповніть форму, і ми зв'яжемося з вами найближчим часом.",
    lastName: "Прізвище",
    firstName: "Ім'я",
    phone: "Номер телефону",
    email: "Email",
    submit: "Надіслати",
    sending: "Надсилаємо...",
    success: "Дякуємо. Вашу заявку надіслано.",
    error: "Не вдалося надіслати заявку. Спробуйте ще раз або зателефонуйте нам.",
    closeAria: "Закрити форму",
    invalidPhone: "Введіть номер у форматі +1(XXX)XXX-XXXX",
    invalidEmail: "Введіть коректний email із символом @",
  },
  kk: {
    title: "Өтінім қалдырыңыз",
    subtitle: "Форманы толтырыңыз, біз сізбен жақын арада хабарласамыз.",
    lastName: "Тегі",
    firstName: "Аты",
    phone: "Телефон нөмірі",
    email: "Email",
    submit: "Жіберу",
    sending: "Жіберілуде...",
    success: "Рақмет. Өтініміңіз жіберілді.",
    error: "Өтінімді жіберу мүмкін болмады. Қайталап көріңіз немесе бізге қоңырау шалыңыз.",
    closeAria: "Форманы жабу",
    invalidPhone: "Нөмірді +1(XXX)XXX-XXXX форматында енгізіңіз",
    invalidEmail: "Email мекенжайын @ белгісімен дұрыс енгізіңіз",
  },
  ky: {
    title: "Өтүнмө калтырыңыз",
    subtitle: "Форманы толтуруңуз, биз жакын арада сиз менен байланышабыз.",
    lastName: "Фамилия",
    firstName: "Аты",
    phone: "Телефон номери",
    email: "Email",
    submit: "Жөнөтүү",
    sending: "Жөнөтүлүүдө...",
    success: "Рахмат. Өтүнмөңүз жөнөтүлдү.",
    error: "Өтүнмө жөнөтүлгөн жок. Кайра аракет кылыңыз же бизге чалыңыз.",
    closeAria: "Форманы жабуу",
    invalidPhone: "+1(XXX)XXX-XXXX форматында номер жазыңыз",
    invalidEmail: "Email дарегин @ белгиси менен туура жазыңыз",
  },
  sr: {
    title: "Ostavite prijavu",
    subtitle: "Popunite formu i kontaktiraćemo vas uskoro.",
    lastName: "Prezime",
    firstName: "Ime",
    phone: "Broj telefona",
    email: "Email",
    submit: "Pošalji",
    sending: "Slanje...",
    success: "Hvala. Vaša prijava je poslata.",
    error: "Slanje nije uspelo. Pokušajte ponovo ili nas pozovite.",
    closeAria: "Zatvori formu",
    invalidPhone: "Unesite broj u formatu +1(XXX)XXX-XXXX",
    invalidEmail: "Unesite ispravan email sa simbolom @",
  },
  uz: {
    title: "So'rov qoldiring",
    subtitle: "Formani to'ldiring, biz siz bilan tez orada bog'lanamiz.",
    lastName: "Familiya",
    firstName: "Ism",
    phone: "Telefon raqami",
    email: "Email",
    submit: "Yuborish",
    sending: "Yuborilmoqda...",
    success: "Rahmat. So'rovingiz yuborildi.",
    error: "So'rovni yuborib bo'lmadi. Qayta urinib ko'ring yoki bizga qo'ng'iroq qiling.",
    closeAria: "Formani yopish",
    invalidPhone: "Raqamni +1(XXX)XXX-XXXX formatida kiriting",
    invalidEmail: "Email manzilini @ belgisi bilan to'g'ri kiriting",
  },
  "es-mx": {
    title: "Deja tu solicitud",
    subtitle: "Completa el formulario y te contactaremos en breve.",
    lastName: "Apellido",
    firstName: "Nombre",
    phone: "Número de teléfono",
    email: "Correo electrónico",
    submit: "Enviar",
    sending: "Enviando...",
    success: "Gracias. Tu solicitud fue enviada.",
    error: "No se pudo enviar tu solicitud. Inténtalo de nuevo o llámanos.",
    closeAria: "Cerrar formulario",
    invalidPhone: "Usa el formato +1(XXX)XXX-XXXX",
    invalidEmail: "Ingresa un correo valido con @",
  },
};

let activeLeadCopy = leadModalTranslations.en;
const PHONE_REGEX = /^\+1\(\d{3}\)\d{3}-\d{4}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_MASK_PLACEHOLDER = "+1(555)123-4567";
const PHONE_DIGITS_LIMIT = 10;

const extractPhoneDigits = (value) => String(value || "").replace(/\D/g, "");
const stripLeadingUsCountryCode = (value) => String(value || "").replace(/^\s*\+?1[\s(.-]*/, "");

const normalizePhoneDigits = (value) => {
  let digits = extractPhoneDigits(stripLeadingUsCountryCode(value));

  if (digits.length === PHONE_DIGITS_LIMIT + 1 && digits.startsWith("1")) {
    digits = digits.slice(1);
  }

  return digits.slice(0, PHONE_DIGITS_LIMIT);
};

const formatPhoneByDigits = (digits) => {
  if (!digits) {
    return "";
  }

  if (digits.length <= 3) {
    return `+1(${digits}`;
  }

  if (digits.length <= 6) {
    return `+1(${digits.slice(0, 3)})${digits.slice(3)}`;
  }

  return `+1(${digits.slice(0, 3)})${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

const applyPhoneMask = () => {
  if (!leadPhoneInput) {
    return;
  }

  const digits = normalizePhoneDigits(leadPhoneInput.value);
  leadPhoneInput.value = formatPhoneByDigits(digits);
};

const isPhoneValid = (value) => PHONE_REGEX.test(String(value || "").trim());
const isEmailValid = (value) => EMAIL_REGEX.test(String(value || "").trim());

const applyLeadModalLanguage = (lang) => {
  const copy = leadModalTranslations[lang] || leadModalTranslations.en;
  activeLeadCopy = copy;

  if (leadModalTitle) {
    leadModalTitle.textContent = copy.title;
  }
  if (leadModalSubtitle) {
    leadModalSubtitle.textContent = copy.subtitle;
  }
  if (leadLabelLastName) {
    leadLabelLastName.textContent = copy.lastName;
  }
  if (leadLabelFirstName) {
    leadLabelFirstName.textContent = copy.firstName;
  }
  if (leadLabelPhone) {
    leadLabelPhone.textContent = copy.phone;
  }
  if (leadLabelEmail) {
    leadLabelEmail.textContent = copy.email;
  }
  if (leadSubmitBtn) {
    leadSubmitBtn.textContent = copy.submit;
  }
  if (leadFormStatus) {
    leadFormStatus.textContent = copy.success;
  }
  if (leadModalCloseBtn) {
    leadModalCloseBtn.setAttribute("aria-label", copy.closeAria);
  }
  if (leadPhoneInput) {
    leadPhoneInput.placeholder = PHONE_MASK_PLACEHOLDER;
  }
};

const isLeadModalOpen = () => leadModal && leadModal.classList.contains("is-open");

const openLeadModal = () => {
  if (!leadModal) {
    return;
  }

  leadModal.classList.add("is-open");
  leadModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  if (leadFormStatus) {
    leadFormStatus.classList.remove("is-error");
    leadFormStatus.textContent = activeLeadCopy.success;
    leadFormStatus.hidden = true;
  }

  if (leadFirstInput) {
    window.setTimeout(() => {
      leadFirstInput.focus();
    }, 40);
  }
};

const closeLeadModal = () => {
  if (!leadModal) {
    return;
  }

  leadModal.classList.remove("is-open");
  leadModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

leadModalOpeners.forEach((opener) => {
  opener.addEventListener("click", (event) => {
    event.preventDefault();
    const openerSource = opener.getAttribute("data-lead-source");
    activeLeadSource = openerSource ? `creditbooster.com:${openerSource}` : defaultLeadSource;
    openLeadModal();
  });
});

leadModalClosers.forEach((closer) => {
  closer.addEventListener("click", () => {
    closeLeadModal();
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isLeadModalOpen()) {
    closeLeadModal();
  }
});

if (leadPhoneInput) {
  leadPhoneInput.addEventListener("input", () => {
    applyPhoneMask();
  });

  leadPhoneInput.addEventListener("blur", () => {
    applyPhoneMask();
  });
}

if (leadForm) {
  leadForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    applyPhoneMask();
    const formattedPhone = leadPhoneInput ? leadPhoneInput.value.trim() : "";
    const formattedEmail = leadEmailInput ? leadEmailInput.value.trim() : "";

    if (!isPhoneValid(formattedPhone)) {
      if (leadFormStatus) {
        leadFormStatus.classList.add("is-error");
        leadFormStatus.textContent = activeLeadCopy.invalidPhone || activeLeadCopy.error || "Invalid phone format";
        leadFormStatus.hidden = false;
      }
      if (leadPhoneInput) {
        leadPhoneInput.focus();
      }
      return;
    }

    if (!isEmailValid(formattedEmail)) {
      if (leadFormStatus) {
        leadFormStatus.classList.add("is-error");
        leadFormStatus.textContent = activeLeadCopy.invalidEmail || activeLeadCopy.error || "Invalid email format";
        leadFormStatus.hidden = false;
      }
      if (leadEmailInput) {
        leadEmailInput.focus();
      }
      return;
    }

    const payload = {
      firstName: leadFirstNameInput ? leadFirstNameInput.value.trim() : "",
      lastName: leadLastNameInput ? leadLastNameInput.value.trim() : "",
      phone: formattedPhone,
      email: formattedEmail,
      language: activeLanguage,
      pageUrl: window.location.href,
      source: activeLeadSource,
    };

    if (leadSubmitBtn) {
      leadSubmitBtn.disabled = true;
    }

    if (leadFormStatus) {
      leadFormStatus.classList.remove("is-error");
      leadFormStatus.textContent = activeLeadCopy.sending || activeLeadCopy.success;
      leadFormStatus.hidden = false;
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      if (leadFormStatus) {
        leadFormStatus.classList.remove("is-error");
        leadFormStatus.textContent = activeLeadCopy.success;
      }

      leadForm.reset();
    } catch (err) {
      console.error("Lead submission failed:", err);

      if (leadFormStatus) {
        leadFormStatus.classList.add("is-error");
        leadFormStatus.textContent = activeLeadCopy.error || activeLeadCopy.success;
      }
    } finally {
      if (leadSubmitBtn) {
        leadSubmitBtn.disabled = false;
      }
    }
  });
}

applyLeadModalLanguage(activeLanguage);
