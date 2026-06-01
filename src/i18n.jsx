import { createContext, useContext, useMemo, useState } from "react"

const translations = {
  ru: {
    header: {
      home: "Главная",
      about: "О нас",
      contact: "Контакты",
      stuff: "Сотрудники",
      faq: "Вопросы",
      brand: "TrustGuard"
    },
    footer: {
      description: "Защищаем вас от мошенников 24/7.",
      home: "Главная",
      about: "О нас",
      contact: "Контакты",
      stuff: "Сотрудники",
      faq: "Вопросы",
      batyr: "Батыр"
    },
    home: {
      eyebrow: "Надёжная защита",
      title: "Мы помогаем вам остановить мошенников и вернуть уверенность.",
      subtitle: "Смарт-анализ, моментальная поддержка и отчёты, которые легко понять.",
      contactButton: "Связаться с нами",
      learnButton: "Узнать больше",
      feature1Title: "Быстрый анализ",
      feature1Text: "Проверяем подозрительные аккаунты за пару минут и даём понятный результат.",
      feature2Title: "Личная поддержка",
      feature2Text: "Наши специалисты готовы ответить и помочь с любыми деталями.",
      feature3Title: "Безопасные решения",
      feature3Text: "Действуем по закону и сохраняем конфиденциальность ваших данных."
    },
    about: {
      eyebrow: "О компании",
      title: "Мы делаем мир безопаснее, одну проверку за другой.",
      intro: "Наша команда сочетает экспертные знания, технологии и практический опыт, чтобы найти мошенников и защитить пострадавших. Мы верим, что каждый человек заслуживает доверия и уверенности в цифровом мире.",
      value1Title: "Прозрачность",
      value1Text: "Отчёты понятны, без лишней терминологии и скрытых условий.",
      value2Title: "Оперативность",
      value2Text: "Реакция по каждому обращению — в течение 24 часов.",
      value3Title: "Ваше спокойствие",
      value3Text: "Работаем так, чтобы вы могли сосредоточиться на важных вещах.",
      storyTitle: "Почему нам доверяют",
      storyText: "Мы объединяем силу данных и человеческую интуицию. Сначала мы тщательно анализируем информацию, затем строим план действий и сопровождаем вас до результата. Наша цель — не просто найти проблему, а помочь вам восстановить контроль. Мы твердо сотрудничаем с ФБР и Пентагоном.",
      casesTitle: "Наши кейсы",
      casesIntro: "Здесь вы найдете примеры наших работ и достижений.",
      case1Title: "Кейс 1: Остановили мошенника, который выдавал себя за крупную компанию",
      case1Text: "Мы обнаружили и заблокировали фишинговый сайт, который пытался украсть данные клиентов. Благодаря нашей быстрой реакции, пострадало всего несколько человек, и мы помогли им восстановить доступ к аккаунтам.",
      case2Title: "Кейс 2: Предотвратили масштабную фишинговую атаку",
      case2Text: "Мы выявили и заблокировали масштабный фишинговый проект, который направлялся на тысячи пользователей. Наша команда работала круглосуточно, чтобы минимизировать ущерб и обеспечить безопасность наших клиентов.",
      case3Title: "Кейс 3: Помогли жертве вернуть украденные средства",
      case3Text: "Мы помогли жертве мошенничества вернуть украденные средства, работая с банком и правоохранительными органами. Благодаря нашей поддержке, клиент смог восстановить финансовую стабильность и избежать дальнейших потерь.",
      case4Title: "Кейс 4: Защитили бизнес от социальной инженерии",
      case4Text: "Мы разоблачили мошенническую кампанию, направленную на получение доступа к корпоративным аккаунтам. Благодаря своевременному вмешательству команда компании сохранила конфиденциальные данные и избежала крупного ущерба.",
      case5Title: "Кейс 5: Восстановили аккаунт после кражи личности",
      case5Text: "Мы помогли клиенту восстановить доступ к взломанному профилю и заблокировать дальнейшие попытки мошенников. В итоге работа закончилась полным возвратом контроля и восстановлением репутации.",
      case6Title: "Кейс 6: Выявили сложную финансовую аферу",
      case6Text: "Наши специалисты обнаружили цепочку поддельных транзакций и остановили перевод средств. Это позволило клиенту сохранить ключевые активы и укрепить внутренние процедуры безопасности."
    },
    contact: {
      eyebrow: "Контакты",
      title: "Напишите нам прямо сейчас, опишите вашу ситуацию максимально подробно, и мы сделаем всё возможное, чтобы ответить в течение рабочего дня, предоставив профессиональную помощь, безопасные рекомендации и сопровождение на каждом этапе.",
      intro: "Если вы заметили подозрительный аккаунт, подозрительную активность или уже стали жертвой мошенников, наша команда готова подключиться незамедлительно: мы предлагаем глубокий анализ, практические шаги для защиты, консультирование по дальнейшим действиям, помощь в восстановлении контроля и информацию о том, как избежать повторных атак в будущем.",
      emailLabel: "Электронная почта",
      emailAddress: "support@yourcompany.com",
      requestLabel: "Оставить заявку",
      requestButton: "Отправить заявку на почту",
      requestSubject: "Заявка",
      requestBody: "Здравствуйте,\n\nпожалуйста свяжитесь со мной по заявке.\n\nС уважением:",
      phoneLabel: "Телефон",
      phoneNumber: "+1 234 567 8901",
      addressLabel: "Адрес",
      addressText: "Проспект Мангилик Ель 53,Астана",
      telegramLabel: "Telegram",
      telegramText: "Telegram"
    },
    batyr: {
      title: "Главный сотрудник",
      description: "Меня зовут Батыр. Я пишу сайты. Я знаю Python, React и JavaScript.",
      button: "Посмотреть лучшего"
    },
    stuff: {
      section1Title: "Вынуждены сражаться в юном возрасте",
      section1Text: "Я инженер-программист. Я говорю на 9 языках. Я знаю программирование на Python.",
      section2Title: "Настоящая легенда",
      section2Text: "Я опытный специалист в IT-сфере. Я работаю в этой области уже около 45 лет.",
      section3Title: "Наши главные сотрудники",
      section3Text: "У нас много сотрудников. Они все очень хорошо выполняют свою работу. Мы ими гордимся.",
      section3Button: "Смотреть лучшего"
    }
  },
  en: {
    header: {
      home: "Home",
      about: "About",
      contact: "Contact",
      stuff: "Team",
      faq: "FAQ",
      brand: "TrustGuard"
    },
    footer: {
      description: "Protecting you from fraud 24/7.",
      home: "Home",
      about: "About",
      contact: "Contact",
      stuff: "Team",
      faq: "FAQ",
      batyr: "Batyr"
    },
    home: {
      eyebrow: "Reliable protection",
      title: "We help you stop scammers and regain confidence.",
      subtitle: "Smart analysis, instant support, and reports that are easy to understand.",
      contactButton: "Contact us",
      learnButton: "Learn more",
      feature1Title: "Fast analysis",
      feature1Text: "We check suspicious accounts in minutes and give a clear result.",
      feature2Title: "Personal support",
      feature2Text: "Our specialists are ready to answer and help with any details.",
      feature3Title: "Safe solutions",
      feature3Text: "We act by the law and keep your data confidential."
    },
    about: {
      eyebrow: "About us",
      title: "We make the world safer, one check at a time.",
      intro: "Our team combines expert knowledge, technology, and practical experience to find scammers and protect victims. We believe everyone deserves trust and confidence in the digital world.",
      value1Title: "Transparency",
      value1Text: "Reports are clear, without unnecessary terminology and hidden conditions.",
      value2Title: "Speed",
      value2Text: "We respond to every request within 24 hours.",
      value3Title: "Your peace of mind",
      value3Text: "We work so you can focus on what matters.",
      storyTitle: "Why people trust us",
      storyText: "We combine the power of data and human intuition. First we carefully analyze information, then build an action plan and support you until the result. Our goal is not only to find the problem, but to help you regain control.",
      casesTitle: "Our cases",
      casesIntro: "Here you will find examples of our work and achievements.",
      case1Title: "Case 1: Stopped a scammer posing as a major company",
      case1Text: "We discovered and blocked a phishing site trying to steal customer data. Thanks to our fast response, only a few people were affected, and we helped them restore account access.",
      case2Title: "Case 2: Prevented a large phishing attack",
      case2Text: "We identified and blocked a large phishing project targeting thousands of users. Our team worked around the clock to minimize damage and ensure client safety.",
      case3Title: "Case 3: Helped a victim recover stolen funds",
      case3Text: "We helped a fraud victim recover stolen funds by working with the bank and law enforcement. With our support, the client restored financial stability and avoided further losses.",
      case4Title: "Case 4: Protected a business from social engineering",
      case4Text: "We exposed a fraudulent campaign aimed at seizing corporate account access. Timely intervention helped the team preserve confidential data and avoid major damage.",
      case5Title: "Case 5: Restored an account after identity theft",
      case5Text: "We helped the client regain control of a compromised profile and blocked further scam attempts. The work ended with full account recovery and restored trust.",
      case6Title: "Case 6: Uncovered an elaborate financial scam",
      case6Text: "Our specialists detected a chain of fake transactions and stopped the funds transfer. This preserved the client’s key assets and strengthened internal security procedures."
    },
    contact: {
      eyebrow: "Contact",
      title: "Write to us now with as much detail as possible about your situation, and we will do our best to reply during the business day with professional guidance, secure recommendations, and support at every step.",
      intro: "If you have noticed a suspicious account, suspicious activity, or have already become a victim of fraud, our team is ready to respond immediately with a thorough analysis, practical protection steps, consultation on next actions, help restoring control, and advice on how to prevent future attacks.",
      emailLabel: "Email",
      emailAddress: "support@yourcompany.com",
      requestLabel: "Leave a request",
      requestButton: "Send request by email",
      requestSubject: "Request",
      requestBody: "Hello,\n\nplease contact me regarding a request.\n\nRegards:",
      phoneLabel: "Phone",
      phoneNumber: "+1 234 567 8901",
      addressLabel: "Address",
      addressText: "Mangilik El 53 Avenue,Astana",
      telegramLabel: "Telegram",
      telegramText: "Telegram"
    },
    batyr: {
      title: "Main team member",
      description: "My name is Batyr. I build websites. I know Python, React, and JavaScript.",
      button: "See the best one"
    },
    stuff: {
      section1Title: "Forced to fight at a young age",
      section1Text: "I am a software engineer. I can speak 9 languages. I know programming in Python.",
      section2Title: "The actual legend",
      section2Text: "I am an experienced person in the IT realm. I have been working in that sphere for about 45 years.",
      section3Title: "Our main staff",
      section3Text: "We have a lot of employees. They are all very good at their work. We are proud of them.",
      section3Button: "See the best one"
    }
  },
  kk: {
    header: {
      home: "Басты бет",
      about: "Біз туралы",
      contact: "Байланыс",
      stuff: "Қызметкерлер",
      faq: "Сұрақтар",
      brand: "TrustGuard"
    },
    footer: {
      description: "Біз сізді алаяқтардан тәулік бойы қорғаймыз.",
      home: "Басты бет",
      about: "Біз туралы",
      contact: "Байланыс",
      stuff: "Қызметкерлер",
      faq: "Сұрақтар",
      batyr: "Батыр"
    },
    home: {
      eyebrow: "Сенімді қорғау",
      title: "Сізге алаяқтарды тоқтатуға және сенімділікке қайта оралуға көмектесеміз.",
      subtitle: "Ақылды талдау, жедел қолдау және оңай түсінетін есептер.",
      contactButton: "Қатысу",
      learnButton: "Көбірек білу",
      feature1Title: "Жылдам талдау",
      feature1Text: "Күмәнді аккаунттарды бірнеше минут ішінде тексереміз және анық нәтиже береміз.",
      feature2Title: "Жеке қолдау",
      feature2Text: "Біздің мамандар кез келген сұраққа жауап беруге дайын.",
      feature3Title: "Қауіпсіз шешімдер",
      feature3Text: "Заңға сай әрекет етеміз және деректеріңіздің құпиялылығын сақтаймыз."
    },
    about: {
      eyebrow: "Компания туралы",
      title: "Біз әлемді бір тексеруден кейін қауіпсіз етеміз.",
      intro: "Біздің команда алаяқтарды анықтау және құрбандарды қорғау үшін сараптамалық білімді, технологияны және тәжірибені біріктіреді. Әркім цифрлы әлемде сенім мен қауіпсіздікке лайық.",
      value1Title: "Транспаренттілік",
      value1Text: "Есептер қажетсіз терминдерсіз және жасырын шарттарсыз түсінікті.",
      value2Title: "Жылдамдық",
      value2Text: "Әр сұранысқа 24 сағат ішінде жауап береміз.",
      value3Title: "Сіздің тыныштығыңыз",
      value3Text: "Сіз маңызды нәрсеге шоғырлануыңыз үшін жұмыс істейміз.",
      storyTitle: "Неліктен бізге сенеді",
      storyText: "Біз деректер мен адам интуициясының күшін біріктіреміз. Алғашында ақпаратты мұқият талдаймыз, содан кейін әрекет жоспарын құрып, нәтижеге дейін сізбен бірге боламыз. Мақсатымыз — тек мәселені табу емес, сонымен қатар бақылауды қайтаруға көмектесу.",
      casesTitle: "Біздің кейстер",
      casesIntro: "Мұнда сіз біздің жұмыстарымыз бен жетістіктеріміздің мысалдарын табасыз.",
      case1Title: "Кейс 1: Ірі компания ретінде әрекет еткен алаяқты тоқтаттық",
      case1Text: "Біз тұтынушылардың деректерін ұрлауға тырысқан фишингтік сайтты анықтап, блоктадық. Жылдам әрекетіміздің арқасында тек бірнеше адам зардап шекті, және біз оларға аккаунттарға қайта кіруге көмектестік.",
      case2Title: "Кейс 2: Көлемді фишингтік шабуылды болдырмадық",
      case2Text: "Біз мыңдаған пайдаланушыларға бағытталған көлемді фишингтік жобаны анықтап, блоктадық. Командамыз зиянды азайту және клиенттердің қауіпсіздігін қамтамасыз ету үшін тәулік бойы жұмыс істеді.",
      case3Title: "Кейс 3: Құрбаны ұрланған ақшаны қайтаруға көмектестік",
      case3Text: "Біз банктен және құқық қорғау органдарынан көмек алып, алаяқтық құрбанына ұрланған қаражатын қайтаруға көмектестік. Қолдауымыздың арқасында клиент қаржылық тұрақтылығын қалпына келтіріп, одан әрі шығыннан қорғай алды.",
      case4Title: "Кейс 4: Бизнесті әлеуметтік инженериядан қорғадық",
      case4Text: "Біз корпоративтік есептік жазбаларға қол жеткізуге бағытталған алаяқтық науқанын анықтадық. Уақытында әрекет ету командаға конфиденциалды деректерді сақтауға және ірі зияннан аулақ болуға көмектесті.",
      case5Title: "Кейс 5: Жеке бас ұрлығынан кейінгі есепті қалпына келтірдік",
      case5Text: "Біз клиентке бұзылған профильге бақылауды қайтаруға көмектесіп, келесі алаяқтық әрекеттерді тоқтаттық. Жұмыс толық есепті қалпына келтіру және сенімділік қайта орнату нәтижесімен аяқталды.",
      case6Title: "Кейс 6: Күрделі қаржылық алаяқтықты анықтадық",
      case6Text: "Біздің мамандар жалған транзакциялар тізбегін тауып, қаражат аударымын тоқтатты. Бұл клиенттің негізгі активтерін сақтап қалуға және ішкі қауіпсіздік процедураларын нығайтуға мүмкіндік берді."
    },
    contact: {
      eyebrow: "Байланыс",
      title: "Әрекетіңізді мүмкіндігінше толық сипаттап, бізге дәл қазір жазыңыз, біз жұмыс күні ішінде кәсіби нұсқаулықтар, қауіпсіз ұсыныстар және әр кезеңде қолдау көрсету үшін бар күшімізді саламыз.",
      intro: "Егер сіз күдікті аккаунтты, күдікті әрекетті байқасаңыз немесе алаяқтық құрбанына айналған болсаңыз, біздің команда дереу жауап беруге дайын: жан-жақты талдау, қорғану қадамдары, келесі әрекеттер жөніндегі кеңес, бақылауды қалпына келтіруге көмектесу және болашақ шабуылдардан қалай сақтану керек туралы ақпарат.",
      emailLabel: "Электрондық пошта",
      emailAddress: "support@yourcompany.com",
      requestLabel: "Өтінім қалдыру",
      requestButton: "Поштаға өтінім жіберу",
      requestSubject: "Өтінім",
      requestBody: "Сәлеметсіз бе,\n\nөтінім туралы хабарласыңызшы.\n\nІзгі ниетпен:",
      phoneLabel: "Телефон",
      phoneNumber: "+1 234 567 8901",
      addressLabel: "Мекенжай",
      addressText: "Мәңгілік Ел даңғылы 53,Aстана",
      telegramLabel: "Telegram",
      telegramText: "Telegram"
    },
    batyr: {
      title: "Негізгі қызметкер",
      description: "Менің атым Батыр. Мен сайттар жасаймын. Мен Python, React және JavaScript білемін.",
      button: "Ең жақсысын көру"
    },
    stuff: {
      section1Title: "Жас кезінен күресуге мәжбүр болды",
      section1Text: "Мен программалау инженері. Мен 9 тілде сөйлей аламын. Мен Python тілін білемін.",
      section2Title: "Шынайы аңыз",
      section2Text: "Мен IT саласында тәжірибелі маман боламын. Мен бұл салада шамамен 45 жыл жұмыс істеп келемін.",
      section3Title: "Біздің негізгі қызметкерлер",
      section3Text: "Бізде көптеген қызметкерлер бар. Олар барлығы өз жұмысын өте жақсы орындайды. Біз олармен мақтанамыз.",
      section3Button: "Ең жақсысын көру"
    }
  }
}

const LanguageContext = createContext(null)

function getTranslation(language, path) {
  const keys = path.split(".")
  let current = translations[language]

  for (const key of keys) {
    if (!current || typeof current !== "object") {
      return path
    }
    current = current[key]
  }

  return current || path
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem("language") || "ru"
  })

  function setLanguage(nextLanguage) {
    localStorage.setItem("language", nextLanguage)
    setLanguageState(nextLanguage)
    document.documentElement.lang = nextLanguage
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (path) => getTranslation(language, path),
      languages: [
        { code: "kk", label: "ҚАЗ" },
        { code: "en", label: "ENG" },
        { code: "ru", label: "РУС" }
      ]
    }),
    [language]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useTranslation must be used within LanguageProvider")
  }
  return context
}
