import { createContext, useContext, useMemo, useState } from "react"

const translations = {
  ru: {
    header: {
      home: "Главная",
      about: "О нас",
      contact: "Контакты",
      stuff: "Сотрудники",
      brand: "TrustGuard"
    },
    footer: {
      description: "Защищаем вас от мошенников 24/7.",
      home: "Главная",
      about: "О нас",
      contact: "Контакты",
      stuff: "Сотрудники"
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
      case3Text: "Мы помогли жертве мошенничества вернуть украденные средства, работая с банком и правоохранительными органами. Благодаря нашей поддержке, клиент смог восстановить финансовую стабильность и избежать дальнейших потерь."
    },
    contact: {
      eyebrow: "Контакты",
      title: "Напишите нам, и мы ответим в течение рабочего дня.",
      intro: "Если вы заметили подозрительный аккаунт или уже стали жертвой мошенников, мы готовы помочь — быстро, профессионально и конфиденциально.",
      emailLabel: "Электронная почта",
      emailAddress: "support@yourcompany.com",
      requestLabel: "Оставить заявку",
      requestButton: "Отправить заявку на почту",
      requestSubject: "Заявка",
      requestBody: "Здравствуйте,\n\nпожалуйста свяжитесь со мной по заявке.\n\nС уважением:",
      phoneLabel: "Телефон",
      phoneNumber: "+1 234 567 8901",
      addressLabel: "Адрес",
      addressText: "123 Trust Lane, Safe City, Country",
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
      brand: "TrustGuard"
    },
    footer: {
      description: "Protecting you from fraud 24/7.",
      home: "Home",
      about: "About",
      contact: "Contact",
      stuff: "Team"
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
      case3Text: "We helped a fraud victim recover stolen funds by working with the bank and law enforcement. With our support, the client restored financial stability and avoided further losses."
    },
    contact: {
      eyebrow: "Contact",
      title: "Write to us and we will reply during the business day.",
      intro: "If you noticed a suspicious account or have already become a victim of fraud, we are ready to help — fast, professional, and confidential.",
      emailLabel: "Email",
      emailAddress: "support@yourcompany.com",
      requestLabel: "Leave a request",
      requestButton: "Send request by email",
      requestSubject: "Request",
      requestBody: "Hello,\n\nplease contact me regarding a request.\n\nRegards:",
      phoneLabel: "Phone",
      phoneNumber: "+1 234 567 8901",
      addressLabel: "Address",
      addressText: "123 Trust Lane, Safe City, Country",
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
      brand: "TrustGuard"
    },
    footer: {
      description: "Біз сізді алаяқтардан тәулік бойы қорғаймыз.",
      home: "Басты бет",
      about: "Біз туралы",
      contact: "Байланыс",
      stuff: "Қызметкерлер"
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
      case3Text: "Біз банктен және құқық қорғау органдарынан көмек алып, алаяқтық құрбанына ұрланған қаражатын қайтаруға көмектестік. Қолдауымыздың арқасында клиент қаржылық тұрақтылығын қалпына келтіріп, одан әрі шығыннан қорғай алды."
    },
    contact: {
      eyebrow: "Байланыс",
      title: "Бізге жазыңыз, және біз жұмыс күні ішінде жауап береміз.",
      intro: "Егер сіз күдікті аккаунтты байқасаңыз немесе алаяқтық құрбаны болсаңыз, біз көмектесуге дайынбыз — тез, кәсіби және құпиялылықпен.",
      emailLabel: "Электрондық пошта",
      emailAddress: "support@yourcompany.com",
      requestLabel: "Өтінім қалдыру",
      requestButton: "Поштаға өтінім жіберу",
      requestSubject: "Өтінім",
      requestBody: "Сәлеметсіз бе,\n\nөтінім туралы хабарласыңызшы.\n\nІзгі ниетпен:",
      phoneLabel: "Телефон",
      phoneNumber: "+1 234 567 8901",
      addressLabel: "Мекенжай",
      addressText: "123 Trust Lane, Safe City, Country",
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
  const [language, setLanguage] = useState("ru")

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (path) => getTranslation(language, path),
      languages: [
        { code: "ru", label: "РУС" },
        { code: "en", label: "ENG" },
        { code: "kk", label: "ҚАЗ" }
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
