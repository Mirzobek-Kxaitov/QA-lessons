export const answers = {
  "manual-junior-01": {
    "uz": {
      "answer": "Testlash — dastur talabga mos ishlashini tekshirish va xatolarni aniqlash jarayoni.",
      "example": "Login oynasida to‘g‘ri parol bilan kirish, noto‘g‘ri parol bilan rad etilishni tekshiramiz."
    },
    "ru": {
      "answer": "Тестирование проверяет соответствие программы требованиям и помогает обнаружить дефекты.",
      "example": "С верным паролем вход разрешён, с неверным — отклонён."
    },
    "en": {
      "answer": "Testing checks software against requirements and helps find defects.",
      "example": "A correct password allows login; an incorrect one is rejected."
    }
  },
  "manual-junior-02": {
    "uz": {
      "answer": "QA jarayon sifatini yaxshilab xatolarning oldini olishga, QC esa mahsulotdagi xatolarni topishga qaratilgan.",
      "example": "Talablarni birgalikda ko‘rib chiqish — QA; tayyor login formasini tekshirish — QC."
    },
    "ru": {
      "answer": "QA улучшает процессы для предотвращения дефектов; QC выявляет дефекты продукта.",
      "example": "Совместный разбор требований — QA, проверка готовой формы входа — QC."
    },
    "en": {
      "answer": "QA improves processes to prevent defects; QC detects defects in the product.",
      "example": "Reviewing requirements is QA; checking the finished login form is QC."
    }
  },
  "manual-junior-03": {
    "uz": {
      "answer": "Verification — belgilangan talablarga moslik; validation — foydalanuvchi ehtiyojiga moslikni tekshirish.",
      "example": "Tugma talabdagi joydami — verification; foydalanuvchi u bilan buyurtma bera oladimi — validation."
    },
    "ru": {
      "answer": "Verification проверяет соответствие требованиям, validation — потребностям пользователя.",
      "example": "Кнопка на указанном месте — verification; удобное оформление заказа — validation."
    },
    "en": {
      "answer": "Verification checks specified requirements; validation checks user needs.",
      "example": "A button matches its specification; users can actually complete their order."
    }
  },
  "manual-junior-04": {
    "uz": {
      "answer": "Smoke asosiy funksiyalarni, sanity odatda tor o‘zgarishni, regression oldingi funksiyalarni tekshiradi. Confirmation aynan tuzatilgan xatoni qayta tekshiradi.",
      "example": "Login tuzatildi: confirmation eski xatoni, regression esa boshqa login holatlarini tekshiradi."
    },
    "ru": {
      "answer": "Smoke проверяет основные функции, sanity обычно узкое изменение, regression — прежние функции. Confirmation повторно проверяет исправленный дефект.",
      "example": "После исправления входа confirmation проверяет старую ошибку, regression — другие сценарии входа."
    },
    "en": {
      "answer": "Smoke checks core functions, sanity usually a narrow change, regression existing behavior. Confirmation rechecks a fixed defect.",
      "example": "After a login fix, confirmation retests the defect; regression checks other login scenarios."
    }
  },
  "manual-junior-05": {
    "uz": {
      "answer": "Test case shartlar, qadamlar va kutilgan natijani batafsil yozadi. Checklist tekshiriladigan bandlarning qisqa ro‘yxati.",
      "example": "Murakkab to‘lov oqimiga test case; tezkor sahifa ko‘rigiga checklist ishlatamiz."
    },
    "ru": {
      "answer": "Тест-кейс подробно описывает условия, шаги и ожидаемый результат. Чек-лист — краткий список проверок.",
      "example": "Для сложного платежа — тест-кейс, для быстрого осмотра страницы — чек-лист."
    },
    "en": {
      "answer": "A test case specifies conditions, steps and expected results. A checklist is a brief list of checks.",
      "example": "Use a test case for complex payments and a checklist for a quick page review."
    }
  },
  "manual-junior-06": {
    "uz": {
      "answer": "Sarlavha, muhit, boshlang‘ich shartlar, takrorlash qadamlari, kutilgan va haqiqiy natija, severity va dalillar yoziladi.",
      "example": "“Chrome’da Buyurtma tugmasi ishlamaydi” deb, qadamlar va ekran yozuvini ilova qilamiz."
    },
    "ru": {
      "answer": "Нужны заголовок, окружение, условия, шаги, ожидаемый и фактический результат, severity и доказательства.",
      "example": "«Кнопка заказа не работает в Chrome»: добавляем шаги и запись экрана."
    },
    "en": {
      "answer": "Include a title, environment, preconditions, steps, expected and actual results, severity and evidence.",
      "example": "Report “Order button does not work in Chrome” with steps and a recording."
    }
  },
  "manual-junior-07": {
    "uz": {
      "answer": "Severity — xatoning ta’siri; priority — uni tuzatishning ustuvorligi. Ustuvorlik biznes vaziyatiga bog‘liq.",
      "example": "Bosh sahifadagi reklama matni xatosi yengil bo‘lishi mumkin, ammo kampaniya sabab tez tuzatiladi."
    },
    "ru": {
      "answer": "Severity — влияние дефекта, priority — срочность исправления с учётом бизнеса.",
      "example": "Опечатка в рекламе не критична технически, но перед кампанией исправляется срочно."
    },
    "en": {
      "answer": "Severity is defect impact; priority is fix urgency in the business context.",
      "example": "An advertisement typo has low technical impact but may need an urgent campaign fix."
    }
  },
  "manual-junior-08": {
    "uz": {
      "answer": "Chegara va uning qo‘shnilarini tekshiramiz: 17, 18, 19, 59, 60, 61. 18 va 60 ham qabul qilinishi kerak.",
      "example": "17 rad etiladi, 18 qabul qilinadi; 60 qabul qilinadi, 61 rad etiladi."
    },
    "ru": {
      "answer": "Проверяем границы и соседние значения: 17, 18, 19, 59, 60, 61. Границы включены.",
      "example": "17 отклоняется, 18 принимается; 60 принимается, 61 отклоняется."
    },
    "en": {
      "answer": "Check boundaries and neighbors: 17, 18, 19, 59, 60, 61. Both endpoints are allowed.",
      "example": "17 is rejected, 18 accepted; 60 accepted, 61 rejected."
    }
  },
  "manual-junior-09": {
    "uz": {
      "answer": "Valid, noto‘g‘ri, bo‘sh va boundary ma’lumotlarni, bloklangan account, xabarlar va sessiyani tekshiramiz. Parol ko‘rinishi, reset oqimi, kirish cheklovlari, Enter/klaviatura, brauzer/device va zarur performance ham muhim.",
      "example": "To‘g‘ri hisob bilan profil ochiladi; bo‘sh parolda tushunarli xabar chiqadi."
    },
    "ru": {
      "answer": "Проверяем valid/неверные/пустые/boundary данные, заблокированный account, сообщения и session. Также маскирование пароля, reset, ограничения входа, Enter/клавиатуру, browsers/devices и нужную performance.",
      "example": "С верными данными открывается профиль; пустой пароль вызывает понятное сообщение."
    },
    "en": {
      "answer": "Check valid, invalid, empty and boundary inputs, locked accounts, messages and sessions. Include password masking, reset flows, login restrictions, Enter/keyboard behavior, supported browsers/devices and required performance.",
      "example": "Valid credentials open the profile; an empty password produces a clear message."
    }
  },
  "manual-junior-10": {
    "uz": {
      "answer": "Javob tanasi, maydon turlari va qiymatlari, headers, javob vaqti hamda bazadagi o‘zgarishni tekshiramiz.",
      "example": "Foydalanuvchi yaratishda 201 bilan birga yangi id va to‘g‘ri email kelishi kerak."
    },
    "ru": {
      "answer": "Проверяем тело, типы и значения полей, headers, время ответа и изменения в базе.",
      "example": "При создании пользователя вместе с 201 приходят новый id и верный email."
    },
    "en": {
      "answer": "Check the body, field types and values, headers, response time and database changes.",
      "example": "Creating a user should return 201 plus a new id and the correct email."
    }
  },
  "manual-junior-11": {
    "uz": {
      "answer": "Email bo‘yicha guruhlab, soni bittadan ko‘p bo‘lgan guruhlarni tanlaymiz.",
      "example": "SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;"
    },
    "ru": {
      "answer": "Группируем по email и выбираем группы с количеством записей больше одной.",
      "example": "SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;"
    },
    "en": {
      "answer": "Group by email and select groups containing more than one row.",
      "example": "SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;"
    }
  },
  "manual-junior-12": {
    "uz": {
      "answer": "Ekran holati, kiritilgan ma’lumotlar, sessiya va davom etayotgan amallar saqlanishini tekshiramiz.",
      "example": "Forma to‘ldirib boshqa ilovaga o‘tamiz; qaytganda matn talabga ko‘ra saqlangan bo‘lishi kerak."
    },
    "ru": {
      "answer": "Проверяем состояние экрана, введённые данные, сессию и незавершённые действия.",
      "example": "Заполняем форму и переключаемся; после возврата текст сохраняется, если это требуется."
    },
    "en": {
      "answer": "Check screen state, entered data, session and ongoing operations.",
      "example": "Fill a form and switch apps; returning should preserve the text when required."
    }
  },
  "manual-junior-13": {
    "uz": {
      "answer": "QA Engineer mahsulot sifatiga yordam beradi: talablarni tahlil qiladi, testlarni rejalaydi, xatolarni bildiradi va risklarni baholaydi.",
      "example": "To‘lov talabini aniqlashtiradi, tekshiradi va topilgan ikki marta yechish xatosini yozadi."
    },
    "ru": {
      "answer": "QA Engineer анализирует требования, планирует проверки, сообщает дефекты и оценивает риски качества.",
      "example": "Уточняет требования оплаты, проверяет их и сообщает о двойном списании."
    },
    "en": {
      "answer": "A QA engineer analyzes requirements, plans checks, reports defects and assesses quality risks.",
      "example": "They clarify payment requirements, test them and report a duplicate charge."
    }
  },
  "manual-junior-14": {
    "uz": {
      "answer": "SDLC: talablar, dizayn, kodlash, testlash, chiqarish va qo‘llab-quvvatlash. STLC — shu jarayon ichidagi test faoliyatlari; testlash faqat oxirida boshlanmaydi.",
      "example": "Yangi savat yaratilganda QA talab tahlilidan boshlab testlarni tayyorlaydi."
    },
    "ru": {
      "answer": "SDLC: требования, дизайн, код, тестирование, выпуск и сопровождение. STLC — тестовые активности внутри этого цикла; тестирование начинается не только в конце.",
      "example": "При создании корзины QA начинает подготовку проверок с анализа требований."
    },
    "en": {
      "answer": "SDLC includes requirements, design, coding, testing, release and maintenance. STLC covers testing activities within it; testing need not start only at the end.",
      "example": "QA prepares cart checks starting from requirements analysis."
    }
  },
  "manual-junior-15": {
    "uz": {
      "answer": "Rejalash, kuzatish, tahlil, dizayn, tayyorlash, bajarish va yakunlash mavjud. Ular qayta-qayta yoki parallel bajarilishi mumkin.",
      "example": "Talabni o‘rganamiz, login tekshiruvini yozamiz, bajaramiz va natijani hisobot qilamiz."
    },
    "ru": {
      "answer": "Есть планирование, контроль, анализ, дизайн, подготовка, выполнение и завершение. Действия могут повторяться или идти параллельно.",
      "example": "Изучаем требование входа, готовим проверку, выполняем и сообщаем результат."
    },
    "en": {
      "answer": "Activities include planning, monitoring, analysis, design, implementation, execution and completion. They can repeat or overlap.",
      "example": "Analyze login requirements, prepare a check, execute it and report the result."
    }
  },
  "manual-junior-16": {
    "uz": {
      "answer": "Component/unit, component integration, system, system integration va acceptance darajalari mavjud. Ular turli ko‘lamni tekshiradi.",
      "example": "Funksiya — unit; modullar aloqasi — integration; butun do‘kon — system; biznes ehtiyoji — acceptance."
    },
    "ru": {
      "answer": "Уровни: component/unit, component integration, system, system integration и acceptance. Они проверяют разный масштаб.",
      "example": "Функция — unit; связь модулей — integration; магазин целиком — system; потребности бизнеса — acceptance."
    },
    "en": {
      "answer": "Levels include component/unit, component integration, system, system integration and acceptance, covering different scopes.",
      "example": "A function is unit-level; module interaction is integration; a whole shop is system; business suitability is acceptance."
    }
  },
  "manual-junior-17": {
    "uz": {
      "answer": "Funksional test nima ishlashini, nofunksional test esa tezlik, qulaylik va xavfsizlik kabi sifatlarni tekshiradi.",
      "example": "Buyurtma yaratilishi — funksional; yuklama ostida tez ishlashi — nofunksional."
    },
    "ru": {
      "answer": "Функциональные тесты проверяют поведение, нефункциональные — скорость, удобство, безопасность и другие качества.",
      "example": "Создание заказа — функциональная проверка; скорость под нагрузкой — нефункциональная."
    },
    "en": {
      "answer": "Functional testing checks behavior; non-functional testing checks qualities such as speed, usability and security.",
      "example": "Order creation is functional; response speed under load is non-functional."
    }
  },
  "manual-junior-18": {
    "uz": {
      "answer": "O‘zgartirishdan keyin mavjud funksiyalar buzilmaganini tekshirish uchun regression o‘tkaziladi. Ko‘lami ta’sir tahliliga bog‘liq.",
      "example": "Chegirma kodi o‘zgarsa, savat summasi va to‘lovni qayta tekshiramiz."
    },
    "ru": {
      "answer": "Регрессия проверяет, что изменения не нарушили прежние функции. Объём зависит от анализа влияния.",
      "example": "После изменения скидок повторно проверяем сумму корзины и оплату."
    },
    "en": {
      "answer": "Regression checks that changes have not broken existing behavior. Scope depends on impact analysis.",
      "example": "After changing discount logic, recheck cart totals and payments."
    }
  },
  "manual-junior-19": {
    "uz": {
      "answer": "Black-box ichki kodsiz, white-box kod tuzilishini bilib, grey-box esa qisman ichki ma’lumot bilan tekshiradi.",
      "example": "Faqat forma — black-box; kod tarmoqlari — white-box; forma va baza tuzilmasi — grey-box."
    },
    "ru": {
      "answer": "Black-box не требует знания кода, white-box использует его структуру, grey-box — частичное знание внутреннего устройства.",
      "example": "Форма — black-box; ветви кода — white-box; форма и схема базы — grey-box."
    },
    "en": {
      "answer": "Black-box uses external behavior; white-box uses code structure; grey-box uses partial internal knowledge.",
      "example": "A form is black-box; code branches white-box; a form plus database knowledge grey-box."
    }
  },
  "manual-junior-20": {
    "uz": {
      "answer": "Xato katta zarar yetkazishi mumkin, ammo ta’sir qiladigan funksiya hozir ishlatilmasa, priority pastroq bo‘lishi mumkin.",
      "example": "O‘chirilgan eski eksport funksiyasi faylni buzadi; uni qayta yoqishdan oldin tuzatish rejalashtiriladi."
    },
    "ru": {
      "answer": "Дефект серьёзный, но приоритет может быть ниже, если затронутая функция сейчас не используется.",
      "example": "Отключённый старый экспорт повреждает файл; исправление планируют до его включения."
    },
    "en": {
      "answer": "A severe defect may have lower priority if the affected feature is currently unused.",
      "example": "A disabled legacy export corrupts files; it must be fixed before being enabled again."
    }
  },
  "manual-junior-21": {
    "uz": {
      "answer": "Waterfall ko‘proq ketma-ket bosqichlarga, Agile qisqa iteratsiya va fikr-mulohazaga tayangan. Ikkalasida ham erta tekshiruv foydali.",
      "example": "Agile’da har sprintdagi yangi buyurtma funksiyasi o‘sha sprintda tekshiriladi."
    },
    "ru": {
      "answer": "Waterfall строится на последовательных этапах, Agile — на коротких итерациях и обратной связи. Ранние проверки полезны в обоих.",
      "example": "В Agile новую функцию заказа проверяют в том же спринте."
    },
    "en": {
      "answer": "Waterfall emphasizes sequential phases; Agile short iterations and feedback. Early checks benefit both.",
      "example": "In Agile, a new order feature is checked within its sprint."
    }
  },
  "manual-junior-22": {
    "uz": {
      "answer": "Ekvivalent sinflar, chegaraviy qiymatlar, qarorlar jadvali va holatlar o‘tishi tekshiruvlarni tizimli tanlashga yordam beradi.",
      "example": "18–60 oralig‘i uchun sinflar: 18 dan kichik, ruxsat etilgan oraliq, 60 dan katta."
    },
    "ru": {
      "answer": "Классы эквивалентности, границы, таблицы решений и переходы состояний помогают системно выбирать проверки.",
      "example": "Для возраста 18–60 классы: ниже 18, допустимый диапазон, выше 60."
    },
    "en": {
      "answer": "Equivalence partitions, boundaries, decision tables and state transitions help select checks systematically.",
      "example": "For ages 18–60: below 18, allowed range and above 60 are partitions."
    }
  },
  "manual-junior-23": {
    "uz": {
      "answer": "Bu usul ruxsat etilgan chegaralar va yaqin qiymatlarni tekshiradi: taqqoslash shartlarida xato tez-tez uchraydi.",
      "example": "Maksimum 100 bo‘lsa, 99, 100 va 101 ni tekshiramiz."
    },
    "ru": {
      "answer": "Метод проверяет границы и соседние значения: ошибки часто возникают в условиях сравнения.",
      "example": "При максимуме 100 проверяем 99, 100 и 101."
    },
    "en": {
      "answer": "This technique checks boundaries and nearby values, where comparison mistakes often occur.",
      "example": "For a maximum of 100, check 99, 100 and 101."
    }
  },
  "manual-junior-24": {
    "uz": {
      "answer": "Hujjatlar nimani, qanday va qanday natija bilan tekshirilganini saqlaydi: test plan, test case, checklist va hisobot.",
      "example": "Login test case’ini boshqa QA ham bir xil qadamlar bilan bajara oladi."
    },
    "ru": {
      "answer": "Документы сохраняют план, проверки и результаты: test plan, тест-кейсы, чек-листы и отчёты.",
      "example": "Другой QA может выполнить тест-кейс входа по тем же шагам."
    },
    "en": {
      "answer": "Documentation records plans, checks and results: test plans, cases, checklists and reports.",
      "example": "Another QA can follow the same login test case steps."
    }
  },
  "manual-junior-25": {
    "uz": {
      "answer": "Test case bitta maqsadni takror tekshirishni tasvirlaydi: ID/nom, preconditions, data, qadamlar va tekshiriladigan expected result. Ishga tushirishda actual result va status qayd etiladi.",
      "example": "Shart: hisob mavjud. Qadam: to‘g‘ri login/parol kiriting. Natija: profil ochiladi."
    },
    "ru": {
      "answer": "Test case описывает повторяемую проверку одной цели: ID/название, preconditions, data, шаги и проверяемый expected result. При выполнении фиксируем actual result и status.",
      "example": "Условие: аккаунт существует. Шаг: ввести верные данные. Результат: открывается профиль."
    },
    "en": {
      "answer": "A test case describes a repeatable check of one objective: ID/title, preconditions, data, steps and a verifiable expected result. Record actual results and status during execution.",
      "example": "Existing account; enter valid credentials; the profile opens."
    }
  },
  "manual-junior-26": {
    "uz": {
      "answer": "TestRail, Qase va Zephyr kabi vositalar test case, test run va natijalarni boshqarishga yordam beradi.",
      "example": "Regression run ochib, o‘tgan va yiqilgan testlarni qayd qilamiz."
    },
    "ru": {
      "answer": "TestRail, Qase и Zephyr помогают управлять тест-кейсами, запусками и результатами.",
      "example": "Создаём регрессионный запуск и отмечаем успешные и неуспешные проверки."
    },
    "en": {
      "answer": "Tools such as TestRail, Qase and Zephyr manage test cases, runs and results.",
      "example": "Create a regression run and record passed and failed checks."
    }
  },
  "manual-junior-27": {
    "uz": {
      "answer": "Klient so‘rov yuboradi, server uni qayta ishlab javob beradi. Brauzer ko‘pincha klient vazifasini bajaradi.",
      "example": "Brauzer mahsulotlar ro‘yxatini so‘raydi, server JSON qaytaradi."
    },
    "ru": {
      "answer": "Клиент отправляет запрос, сервер обрабатывает его и отвечает. Браузер часто выступает клиентом.",
      "example": "Браузер запрашивает список товаров, сервер возвращает JSON."
    },
    "en": {
      "answer": "A client sends a request; a server processes it and responds. Browsers often act as clients.",
      "example": "A browser requests products and the server returns JSON."
    }
  },
  "manual-junior-28": {
    "uz": {
      "answer": "HTTP — ma’lumot almashish protokoli. HTTPS uni TLS orqali shifrlaydi va serverni sertifikat orqali tekshirish imkonini beradi.",
      "example": "HTTPS’da parol tarmoq orqali shifrlangan holda uzatiladi."
    },
    "ru": {
      "answer": "HTTP — протокол обмена. HTTPS защищает его TLS-шифрованием и проверкой сертификата сервера.",
      "example": "В HTTPS пароль передаётся по сети в зашифрованном виде."
    },
    "en": {
      "answer": "HTTP is an exchange protocol. HTTPS protects it with TLS encryption and server certificate validation.",
      "example": "With HTTPS, the password travels over an encrypted connection."
    }
  },
  "manual-junior-29": {
    "uz": {
      "answer": "Chrome, Firefox, Safari va Edge mavjud. Brauzer dvigatellari sabab ko‘rinish va funksiyalar farqlanishi mumkin.",
      "example": "Sana tanlash maydonini Chrome va Safari’da tekshiramiz."
    },
    "ru": {
      "answer": "Есть Chrome, Firefox, Safari и Edge. Разные движки могут менять отображение и поведение.",
      "example": "Проверяем поле выбора даты в Chrome и Safari."
    },
    "en": {
      "answer": "Browsers include Chrome, Firefox, Safari and Edge. Different engines can affect appearance and behavior.",
      "example": "Check a date picker in both Chrome and Safari."
    }
  },
  "manual-junior-30": {
    "uz": {
      "answer": "Elements — HTML/CSS, Console — xabar va xatolar, Network — so‘rov va javoblarni ko‘rsatadi.",
      "example": "Buyurtma ishlamasa, Network’da yuborilgan so‘rov va javobni ko‘ramiz."
    },
    "ru": {
      "answer": "Elements показывает HTML/CSS, Console — сообщения и ошибки, Network — запросы и ответы.",
      "example": "Если заказ не создаётся, смотрим запрос и ответ в Network."
    },
    "en": {
      "answer": "Elements shows HTML/CSS, Console messages and errors, Network requests and responses.",
      "example": "If an order fails, inspect its request and response in Network."
    }
  },
  "manual-junior-31": {
    "uz": {
      "answer": "Kesh resurs nusxalarini saqlaydi; cookies kichik ma’lumot bo‘lib, mos so‘rovlarda serverga yuborilishi mumkin. Kesh brauzer sozlamalaridan tozalanadi.",
      "example": "Eski CSS ko‘rinsa, faqat keshni tozalash sahifani yangilaydi; cookies’ni o‘chirish sessiyani tugatishi mumkin."
    },
    "ru": {
      "answer": "Кеш хранит копии ресурсов; cookies — небольшие данные, отправляемые с подходящими запросами. Кеш очищают в настройках браузера.",
      "example": "Очистка кеша обновляет старый CSS; удаление cookies может завершить сессию."
    },
    "en": {
      "answer": "Cache stores resource copies; cookies are small data sent with matching requests. Clear cache in browser settings.",
      "example": "Clearing cache refreshes old CSS; deleting cookies may end the session."
    }
  },
  "manual-junior-32": {
    "uz": {
      "answer": "API — dasturlar bir-biri bilan ishlashi uchun belgilangan interfeys. U so‘rov va javob shaklini belgilaydi.",
      "example": "Ob-havo ilovasi API’dan haroratni olib, ekranga chiqaradi."
    },
    "ru": {
      "answer": "API — определённый интерфейс взаимодействия программ, задающий запросы и ответы.",
      "example": "Приложение погоды получает температуру через API и показывает её."
    },
    "en": {
      "answer": "An API is a defined interface for programs to interact, specifying requests and responses.",
      "example": "A weather app gets temperature through an API and displays it."
    }
  },
  "manual-junior-33": {
    "uz": {
      "answer": "REST — resurslarga asoslangan arxitektura uslubi; SOAP — XML xabarli protokol. REST faqat JSON bilan cheklanmaydi.",
      "example": "REST’da GET /users/1; SOAP’da XML envelope ichida foydalanuvchi so‘rovi yuboriladi."
    },
    "ru": {
      "answer": "REST — архитектурный стиль ресурсов; SOAP — протокол XML-сообщений. REST не ограничен JSON.",
      "example": "REST: GET /users/1; SOAP: запрос пользователя внутри XML envelope."
    },
    "en": {
      "answer": "REST is a resource-oriented architectural style; SOAP is an XML messaging protocol. REST is not limited to JSON.",
      "example": "REST uses GET /users/1; SOAP sends a user request in an XML envelope."
    }
  },
  "manual-junior-34": {
    "uz": {
      "answer": "CRUD — Create, Read, Update, Delete: yaratish, o‘qish, yangilash va o‘chirish amallari.",
      "example": "Kontakt qo‘shish, ko‘rish, telefonini o‘zgartirish va o‘chirish — CRUD."
    },
    "ru": {
      "answer": "CRUD — Create, Read, Update, Delete: создание, чтение, обновление и удаление.",
      "example": "Добавить контакт, прочитать, изменить номер и удалить — CRUD."
    },
    "en": {
      "answer": "CRUD means Create, Read, Update and Delete.",
      "example": "Add a contact, read it, change its number and delete it."
    }
  },
  "manual-junior-35": {
    "uz": {
      "answer": "Metod amalni, URL manzilni, headers qo‘shimcha ma’lumotni bildiradi. Body kerak bo‘lganda yuboriladigan ma’lumotni saqlaydi.",
      "example": "POST /users, Content-Type: application/json va body: {\"name\":\"Ali\"}."
    },
    "ru": {
      "answer": "Метод задаёт действие, URL — адрес, headers — метаданные. Необязательное body содержит передаваемые данные.",
      "example": "POST /users, Content-Type: application/json и body: {\"name\":\"Ali\"}."
    },
    "en": {
      "answer": "The method specifies an action, URL the address, headers metadata, and an optional body the payload.",
      "example": "POST /users with Content-Type: application/json and body: {\"name\":\"Ali\"}."
    }
  },
  "manual-junior-36": {
    "uz": {
      "answer": "GET o‘qiydi, POST qayta ishlash yoki yaratish uchun, PUT almashtirish, PATCH qisman o‘zgartirish, DELETE o‘chirish uchun ishlatiladi.",
      "example": "GET /users — ro‘yxat; DELETE /users/1 — foydalanuvchini o‘chirish."
    },
    "ru": {
      "answer": "GET читает, POST обрабатывает или создаёт, PUT заменяет, PATCH частично изменяет, DELETE удаляет.",
      "example": "GET /users — список; DELETE /users/1 — удаление пользователя."
    },
    "en": {
      "answer": "GET reads, POST processes or creates, PUT replaces, PATCH partially modifies, DELETE removes.",
      "example": "GET /users lists users; DELETE /users/1 removes one."
    }
  },
  "manual-junior-37": {
    "uz": {
      "answer": "GET ma’lumotni o‘zgartirmasdan olishi kerak; POST esa yuborilgan ma’lumotni qayta ishlaydi yoki resurs yaratadi. POST’ni takrorlash yangi natija yaratishi mumkin. Ikkalasini ham HTTPS bilan himoyalaymiz.",
      "example": "GET /products ro‘yxat oladi; POST /orders buyurtma yaratadi."
    },
    "ru": {
      "answer": "GET должен получать данные без изменения состояния; POST обрабатывает данные или создаёт ресурс. Повтор POST может создать новый результат. Для защиты обоих используют HTTPS.",
      "example": "GET /products получает список; POST /orders создаёт заказ."
    },
    "en": {
      "answer": "GET should retrieve data without changing state; POST processes data or creates a resource. Repeating POST can create another result. Use HTTPS to protect both.",
      "example": "GET /products retrieves products; POST /orders creates an order."
    }
  },
  "manual-junior-38": {
    "uz": {
      "answer": "PUT resurs holatini berilgan tasvir bilan almashtiradi; PATCH ayrim o‘zgarishlarni qo‘llaydi. Aniq xatti-harakat API shartnomasiga bog‘liq.",
      "example": "Ism va telefonni PUT’da to‘liq yuborish; faqat telefonni PATCH’da o‘zgartirish."
    },
    "ru": {
      "answer": "PUT заменяет состояние ресурса переданным представлением; PATCH применяет отдельные изменения. Детали зависят от контракта API.",
      "example": "PUT передаёт имя и телефон полностью; PATCH меняет только телефон."
    },
    "en": {
      "answer": "PUT replaces resource state with a representation; PATCH applies partial changes. Details depend on the API contract.",
      "example": "Send a full name-and-phone representation with PUT; update only the phone with PATCH."
    }
  },
  "manual-junior-39": {
    "uz": {
      "answer": "JSON obyekt, massiv va qiymatlar bilan; XML esa teg va atributlar bilan tuziladi.",
      "example": "JSON: {\"name\":\"Ali\"}. XML: <user><name>Ali</name></user>."
    },
    "ru": {
      "answer": "JSON использует объекты, массивы и значения; XML — теги и атрибуты.",
      "example": "JSON: {\"name\":\"Ali\"}. XML: <user><name>Ali</name></user>."
    },
    "en": {
      "answer": "JSON uses objects, arrays and values; XML uses tags and attributes.",
      "example": "JSON: {\"name\":\"Ali\"}. XML: <user><name>Ali</name></user>."
    }
  },
  "manual-junior-40": {
    "uz": {
      "answer": "1xx — axborot, 2xx — muvaffaqiyat, 3xx — yo‘naltirish/kesh, 4xx — klient, 5xx — server xatolari.",
      "example": "100 Continue, 200 OK, 301 Moved Permanently, 404 Not Found, 500 Internal Server Error."
    },
    "ru": {
      "answer": "1xx — информация, 2xx — успех, 3xx — перенаправление/кеш, 4xx — ошибки клиента, 5xx — сервера.",
      "example": "100 Continue, 200 OK, 301 Moved Permanently, 404 Not Found, 500 Internal Server Error."
    },
    "en": {
      "answer": "1xx is informational, 2xx success, 3xx redirection/cache, 4xx client errors, 5xx server errors.",
      "example": "100 Continue, 200 OK, 301 Moved Permanently, 404 Not Found, 500 Internal Server Error."
    }
  },
  "manual-junior-41": {
    "uz": {
      "answer": "Authentication kimligingizni, authorization esa qaysi amallarga ruxsatingiz borligini tekshiradi.",
      "example": "Ali hisobiga kira oladi, lekin admin sahifasini ochishga ruxsati yo‘q."
    },
    "ru": {
      "answer": "Authentication проверяет личность, authorization — разрешённые действия.",
      "example": "Али может войти в аккаунт, но не имеет доступа к странице администратора."
    },
    "en": {
      "answer": "Authentication verifies identity; authorization checks permitted actions.",
      "example": "Ali can sign in but cannot access the admin page."
    }
  },
  "manual-junior-42": {
    "uz": {
      "answer": "Relyatsion bazalar jadvallar va aloqalarga tayangan; norelyatsion bazalar hujjat, key-value yoki boshqa modellarni ishlatadi.",
      "example": "PostgreSQL’da users jadvali; MongoDB’da foydalanuvchi hujjati saqlanadi."
    },
    "ru": {
      "answer": "Реляционные базы используют таблицы и связи; нереляционные — документы, key-value и другие модели.",
      "example": "В PostgreSQL — таблица users, в MongoDB — документ пользователя."
    },
    "en": {
      "answer": "Relational databases use tables and relationships; non-relational databases use documents, key-value and other models.",
      "example": "PostgreSQL stores a users table; MongoDB stores user documents."
    }
  },
  "manual-junior-43": {
    "uz": {
      "answer": "SQL — ma’lumotlar bazasini so‘rash va boshqarish tili. U ma’lumotni o‘qish va o‘zgartirishga yordam beradi.",
      "example": "SELECT name FROM users; foydalanuvchi ismlarini oladi."
    },
    "ru": {
      "answer": "SQL — язык запросов и управления базой данных, позволяющий читать и изменять данные.",
      "example": "SELECT name FROM users; возвращает имена пользователей."
    },
    "en": {
      "answer": "SQL is a language for querying and managing databases, including reading and changing data.",
      "example": "SELECT name FROM users; retrieves user names."
    }
  },
  "manual-junior-44": {
    "uz": {
      "answer": "SELECT o‘qiydi, WHERE shart beradi, INSERT qo‘shadi, UPDATE o‘zgartiradi, DELETE o‘chiradi.",
      "example": "SELECT name FROM users WHERE active = TRUE; faqat faol foydalanuvchilarni oladi."
    },
    "ru": {
      "answer": "SELECT читает, WHERE фильтрует, INSERT добавляет, UPDATE изменяет, DELETE удаляет.",
      "example": "SELECT name FROM users WHERE active = TRUE; выбирает активных пользователей."
    },
    "en": {
      "answer": "SELECT reads, WHERE filters, INSERT adds, UPDATE changes and DELETE removes.",
      "example": "SELECT name FROM users WHERE active = TRUE; selects active users."
    }
  },
  "manual-junior-45": {
    "uz": {
      "answer": "JOIN jadvallarni bog‘laydi. INNER faqat mos qatorlarni, LEFT chapdagi, RIGHT o‘ngdagi barcha qatorlarni saqlaydi; moslik bo‘lmasa NULL chiqadi.",
      "example": "LEFT JOIN bilan buyurtmasi yo‘q mijoz ham ro‘yxatda qoladi."
    },
    "ru": {
      "answer": "JOIN связывает таблицы. INNER сохраняет совпадения, LEFT все левые строки, RIGHT все правые; без совпадения появляется NULL.",
      "example": "LEFT JOIN сохраняет в списке клиента без заказов."
    },
    "en": {
      "answer": "JOIN connects tables. INNER keeps matches, LEFT all left rows, RIGHT all right rows; unmatched values are NULL.",
      "example": "A LEFT JOIN keeps customers even when they have no orders."
    }
  },
  "manual-junior-46": {
    "uz": {
      "answer": "Ha, bir xil ON va tanlangan ustunlarda bir xil ma’lumot olinadi. SELECT * ustun tartibini o‘zgartirishi mumkin; qator tartibi ORDER BY’siz kafolatlanmaydi.",
      "example": "customers LEFT JOIN orders va orders RIGHT JOIN customers mijozlarni bir xil saqlaydi."
    },
    "ru": {
      "answer": "Да, при одинаковых ON и выбранных столбцах данные совпадут. SELECT * может менять порядок столбцов; без ORDER BY порядок строк не гарантирован.",
      "example": "customers LEFT JOIN orders и orders RIGHT JOIN customers сохраняют тех же клиентов."
    },
    "en": {
      "answer": "Yes, with the same ON condition and selected columns, the data matches. SELECT * may change column order; row order needs ORDER BY.",
      "example": "customers LEFT JOIN orders and orders RIGHT JOIN customers preserve the same customers."
    }
  },
  "manual-middle-01": {
    "uz": {
      "answer": "Product owner yoki analitik bilan talabni aniqlashtirib, kelishilgan misollarni acceptance criteria sifatida yozamiz.",
      "example": "“Tez qidiruv” o‘rniga: natija odatiy yuklamada 2 soniyagacha chiqishi kerak, deb kelishamiz."
    },
    "ru": {
      "answer": "Уточняем требование с product owner или аналитиком и фиксируем согласованные примеры как acceptance criteria.",
      "example": "Вместо «быстрого поиска» согласуем ответ до 2 секунд при обычной нагрузке."
    },
    "en": {
      "answer": "Clarify requirements with the product owner or analyst and record agreed examples as acceptance criteria.",
      "example": "Replace “fast search” with an agreed response within 2 seconds at normal load."
    }
  },
  "manual-middle-02": {
    "uz": {
      "answer": "Biznesga muhim, o‘zgargan va xato ehtimoli katta joylarni avval tekshiramiz. Tekshirilmagan risklarni ochiq yozamiz.",
      "example": "Avval login, savat va to‘lov; kam ishlatiladigan rang sozlamasi keyin."
    },
    "ru": {
      "answer": "Сначала проверяем важные, изменённые и рискованные области. Непроверенные риски явно фиксируем.",
      "example": "Сначала вход, корзина и оплата; редко используемая настройка цвета — позже."
    },
    "en": {
      "answer": "Prioritize critical, changed and high-risk areas. Document risks left unchecked.",
      "example": "Check login, cart and payment before a rarely used color setting."
    }
  },
  "manual-middle-03": {
    "uz": {
      "answer": "Shartlarning kombinatsiyalarini jadvalga yozib, har biriga kutilgan natijani belgilaymiz.",
      "example": "VIP va summa ≥100 bo‘lsa 10%; VIP emas va summa <100 bo‘lsa 0% — deb talabda belgilangan bo‘lsin."
    },
    "ru": {
      "answer": "Записываем сочетания условий и ожидаемый результат для каждого.",
      "example": "Допустим, по требованиям VIP и сумма ≥100 дают 10%, а не-VIP и сумма <100 — 0%."
    },
    "en": {
      "answer": "List condition combinations and the expected outcome for each.",
      "example": "Suppose requirements give VIP orders ≥100 a 10% discount and non-VIP orders <100 none."
    }
  },
  "manual-middle-04": {
    "uz": {
      "answer": "Ko‘p parametrda barcha juftliklarni kamroq test bilan qamraydi. Uch yoki ko‘proq shart birgalikdagi xatoni o‘tkazishi mumkin.",
      "example": "Brauzer, til va qurilma juftliklari tekshiriladi, lekin uchalasi birga sabab bo‘ladigan xato qolishi mumkin."
    },
    "ru": {
      "answer": "Покрывает пары параметров меньшим числом тестов. Ошибки сочетаний трёх и более условий могут остаться.",
      "example": "Пары браузер–язык–устройство покрыты, но дефект конкретной тройки может остаться."
    },
    "en": {
      "answer": "Pairwise covers parameter pairs with fewer tests; interactions of three or more factors may be missed.",
      "example": "Browser, language and device pairs are covered, but one specific triple may fail."
    }
  },
  "manual-middle-05": {
    "uz": {
      "answer": "Bir to‘lovni takror yuborib, yechish va buyurtma sonini tekshiramiz. Timeout to‘lov bajarilmaganini anglatmaydi; idempotency kaliti muhim.",
      "example": "Bir xil kalitli ikki so‘rovdan keyin faqat bitta to‘lov yozuvi bo‘lishi kerak."
    },
    "ru": {
      "answer": "Повторяем тот же платёж и проверяем списания и заказы. Timeout не означает отказ; важен ключ идемпотентности.",
      "example": "Два запроса с одним ключом должны оставить один платёж."
    },
    "en": {
      "answer": "Repeat the same payment and inspect charges and orders. A timeout does not mean failure; an idempotency key matters.",
      "example": "Two requests with the same key should produce one payment record."
    }
  },
  "manual-middle-06": {
    "uz": {
      "answer": "Authentication uchun hisob va tokenlarni, authorization uchun rol va resursga egalikni tekshiramiz.",
      "example": "Ali tokeni bilan Valining yopiq buyurtmasini olish rad etilishi kerak."
    },
    "ru": {
      "answer": "Для authentication проверяем учётные данные и токены, для authorization — роли и владение ресурсами.",
      "example": "Токен Али не должен давать доступ к закрытому заказу Вали."
    },
    "en": {
      "answer": "Test credentials and tokens for authentication; roles and resource ownership for authorization.",
      "example": "Ali's token must not provide access to Vali's private order."
    }
  },
  "manual-middle-07": {
    "uz": {
      "answer": "Avval filtr, keyin belgilangan saralash va pagination natijasini kutamiz. Sahifalar orasida yo‘qolgan yoki takrorlangan yozuvlarni tekshiramiz.",
      "example": "Faol mahsulotlarni narx va id bo‘yicha saralab, ikki sahifada barcha kerakli id’larni solishtiramiz."
    },
    "ru": {
      "answer": "Проверяем фильтр, заданную сортировку и пагинацию, включая пропуски и повторы между страницами.",
      "example": "Активные товары сортируем по цене и id, затем сравниваем id на двух страницах."
    },
    "en": {
      "answer": "Check filtering, defined sorting and pagination, including missing or duplicate records across pages.",
      "example": "Sort active products by price and id, then compare IDs across two pages."
    }
  },
  "manual-middle-08": {
    "uz": {
      "answer": "DevTools’da so‘rov va javobni tekshirib, API’ni alohida chaqiramiz. Keyin log va ma’lumotlar bilan sababni toraytiramiz.",
      "example": "API summa 100 qaytarsa, sahifa 10 ko‘rsatsa, frontend hisoblashini tekshiramiz."
    },
    "ru": {
      "answer": "Проверяем запрос и ответ в DevTools, вызываем API отдельно и уточняем причину по логам и данным.",
      "example": "API возвращает 100, страница показывает 10 — проверяем расчёт frontend."
    },
    "en": {
      "answer": "Inspect requests and responses, call the API separately, and narrow the cause using logs and data.",
      "example": "If the API returns 100 but the page displays 10, inspect frontend calculations."
    }
  },
  "manual-middle-09": {
    "uz": {
      "answer": "JOIN sharti va jadvallardagi munosabatni tekshiramiz. Birga-ko‘p aloqada ko‘proq qator normal bo‘lishi mumkin.",
      "example": "Mijozning uch buyurtmasi bo‘lsa, JOIN’dan uch qator chiqadi; bu har doim xato emas."
    },
    "ru": {
      "answer": "Проверяем условие JOIN и связи таблиц. При связи один-ко-многим дополнительные строки могут быть нормой.",
      "example": "У клиента три заказа — JOIN возвращает три строки; это не обязательно дефект."
    },
    "en": {
      "answer": "Check the join condition and table relationships. One-to-many relationships naturally produce extra rows.",
      "example": "A customer with three orders produces three joined rows; that is not automatically a defect."
    }
  },
  "manual-middle-10": {
    "uz": {
      "answer": "Tarjima, matn sig‘ishi, sana/son formati, saralash va til almashtirishni tekshiramiz. Har til uchun bir xil asosiy oqimni bajaramiz.",
      "example": "Ruscha uzun tugma matni sig‘adimi va inglizchaga o‘tganda tanlangan til saqlanadimi?"
    },
    "ru": {
      "answer": "Проверяем переводы, длину текста, даты, числа, сортировку и смену языка. Основные сценарии одинаковы для всех языков.",
      "example": "Помещается ли длинная русская надпись и сохраняется ли выбранный английский язык?"
    },
    "en": {
      "answer": "Check translations, text fit, date/number formats, sorting and language switching. Run core flows in each language.",
      "example": "Does a long Russian button label fit, and does the English selection persist?"
    }
  },
  "manual-middle-11": {
    "uz": {
      "answer": "So‘rov paytida tarmoqni uzib, qayta ulaymiz. Xabar, ma’lumot saqlanishi va takroriy amallarni tekshiramiz.",
      "example": "Rasm yuklash uzilsa, qayta urinishdan keyin bitta rasm saqlanishi kerak."
    },
    "ru": {
      "answer": "Отключаем сеть во время запроса и возвращаем её. Проверяем сообщения, сохранность данных и повторы.",
      "example": "После прерванной загрузки и повторной попытки должна сохраниться одна фотография."
    },
    "en": {
      "answer": "Disconnect and restore the network during a request. Check messages, data preservation and duplicates.",
      "example": "An interrupted upload followed by a retry should save one photo."
    }
  },
  "manual-middle-12": {
    "uz": {
      "answer": "Bajarilmagan mezon, biznes ta’siri va variantlarni ko‘rsatamiz. Vakolatli mas’ullar release yoki kechiktirish qarorini risk bilan qabul qiladi.",
      "example": "To‘lov xatosi qolsa, chiqarishni kechiktirish yoki shu funksiyani o‘chirishni tavsiya qilamiz."
    },
    "ru": {
      "answer": "Показываем невыполненные критерии, влияние и варианты. Уполномоченные лица решают выпускать или отложить с учётом риска.",
      "example": "При дефекте оплаты рекомендуем отложить релиз или отключить функцию."
    },
    "en": {
      "answer": "Present unmet criteria, impact and options. Authorized owners decide whether to release or delay with known risks.",
      "example": "For a payment defect, recommend postponing release or disabling the feature."
    }
  },
  "manual-senior-01": {
    "uz": {
      "answer": "Riskni ehtimol va ta’sir bilan baholab, muhim oqimlarga ko‘proq tekshiruv ajratamiz. Muhit, usul va chiqish mezonlarini belgilaymiz.",
      "example": "Bank ilovasida pul o‘tkazish tekshiruvi profil rangidan ustun turadi."
    },
    "ru": {
      "answer": "Оцениваем вероятность и влияние рисков, усиливаем критичные проверки и определяем среду, методы и критерии завершения.",
      "example": "В банковском приложении переводы важнее цвета профиля."
    },
    "en": {
      "answer": "Assess likelihood and impact, focus checks on critical flows, and define environments, methods and exit criteria.",
      "example": "In a banking app, transfer checks take priority over profile colors."
    }
  },
  "manual-senior-02": {
    "uz": {
      "answer": "Productiondagi jiddiy xatolar, aniqlash va tiklash vaqti, risk qamrovi va qayta ishni kuzatamiz. Metrikalarni kontekstda baholaymiz.",
      "example": "Bug soni ko‘p bo‘lishi emas, to‘lovdagi zararli xatolar kamayishi foydali natija."
    },
    "ru": {
      "answer": "Отслеживаем серьёзные production-дефекты, время обнаружения и восстановления, покрытие рисков и переделки в контексте.",
      "example": "Полезный результат — меньше опасных платёжных ошибок, а не просто больше баг-репортов."
    },
    "en": {
      "answer": "Track severe escaped defects, detection/recovery time, risk coverage and rework in context.",
      "example": "Fewer harmful payment failures matters more than simply filing more bugs."
    }
  },
  "manual-senior-03": {
    "uz": {
      "answer": "Vaqt chizig‘i va dalillarni yig‘ib, tizimli sababni aniqlaymiz. Oldini oladigan choraga mas’ul va muddat belgilaymiz.",
      "example": "Chegirma xatosi tushunarsiz talabdan kelgan bo‘lsa, misollar bilan talab review’ini kuchaytiramiz."
    },
    "ru": {
      "answer": "Собираем хронологию и доказательства, находим системную причину и назначаем владельца и срок профилактики.",
      "example": "Если ошибка скидки вызвана неясным требованием, усиливаем review примерами."
    },
    "en": {
      "answer": "Build a timeline, gather evidence, find the systemic cause and assign preventive actions with owners and dates.",
      "example": "If an unclear requirement caused a discount defect, improve requirement reviews with examples."
    }
  },
  "manual-senior-04": {
    "uz": {
      "answer": "Servis egasi, API shartnomasi va o‘zgarish kelishuvlarini belgilaymiz. Contract, integration va muhim E2E testlarni qo‘shamiz.",
      "example": "users API maydoni o‘zgarsa, unga bog‘langan buyurtma jamoasi ham tekshiruvdan xabardor bo‘ladi."
    },
    "ru": {
      "answer": "Определяем владельца, контракт API и правила изменений. Используем contract, integration и ключевые E2E-проверки.",
      "example": "При изменении поля users API уведомляем и проверяем потребителя из команды заказов."
    },
    "en": {
      "answer": "Define ownership, API contracts and change agreements; use contract, integration and critical E2E checks.",
      "example": "When a users API field changes, involve and check the ordering team that consumes it."
    }
  },
  "manual-senior-05": {
    "uz": {
      "answer": "Majburiy tekshiruvlarni risk bo‘yicha tanlab, qolgan scope, muddat yoki resursni kelishamiz. Qolgan riskka mas’ulni aniqlaymiz.",
      "example": "Bir QA bilan to‘lov va loginni tekshirib, kam ishlatiladigan hisobotni keyingi release’ga qoldiramiz."
    },
    "ru": {
      "answer": "Выбираем обязательные проверки по риску и согласуем объём, сроки или ресурсы. Назначаем владельца остаточного риска.",
      "example": "Один QA проверяет оплату и вход; редкий отчёт переносится на следующий релиз."
    },
    "en": {
      "answer": "Prioritize required checks by risk, negotiate scope, dates or resources, and assign residual risk ownership.",
      "example": "With one QA, check payment and login while moving a rare report to the next release."
    }
  },
  "manual-senior-06": {
    "uz": {
      "answer": "Qamrov nimaga nisbatan hisoblanganini yozamiz: talab, risk, kod yoki platforma. Test mavjudligi va o‘tganligini ajratamiz.",
      "example": "100 testdan 90 tasi o‘tishi talablarning 90% qamralganini bildirmaydi."
    },
    "ru": {
      "answer": "Указываем базу покрытия: требования, риски, код или платформы. Разделяем наличие тестов и успешность выполнения.",
      "example": "90 успешных тестов из 100 не означают покрытие 90% требований."
    },
    "en": {
      "answer": "State the coverage basis: requirements, risks, code or platforms. Separate test existence from execution success.",
      "example": "90 passing tests out of 100 does not mean 90% requirement coverage."
    }
  },
  "manual-senior-07": {
    "uz": {
      "answer": "Mahsulot va texnik mas’ullar qaror qiladi; QA natijalar va qolgan risklarni beradi. Jiddiy xatolar va rollback tayyorligi hisobga olinadi.",
      "example": "Checkout ishlamasa, QA dalil beradi; release egasi chiqarishni to‘xtatish qarorini qayd qiladi."
    },
    "ru": {
      "answer": "Решают продуктовые и технические владельцы; QA предоставляет результаты и риски. Учитываются критичные дефекты и готовность rollback.",
      "example": "QA показывает отказ checkout; владелец релиза фиксирует решение остановить выпуск."
    },
    "en": {
      "answer": "Product and technical owners decide; QA provides results and residual risks, including serious defects and rollback readiness.",
      "example": "QA presents a checkout failure; the release owner records a decision to stop the release."
    }
  },
  "manual-senior-08": {
    "uz": {
      "answer": "QA’ni talab review’i va dizaynga qo‘shib, aniq acceptance criteria va erta unit/API tekshiruvlarini joriy qilamiz.",
      "example": "Chegirma chegarasini kod yozilishidan oldin misollar bilan kelishamiz."
    },
    "ru": {
      "answer": "Подключаем QA к требованиям и дизайну, задаём acceptance criteria и ранние unit/API-проверки.",
      "example": "Согласуем границы скидки на примерах до написания кода."
    },
    "en": {
      "answer": "Include QA in requirement/design reviews, define acceptance criteria and introduce early unit/API checks.",
      "example": "Agree discount boundaries using examples before writing code."
    }
  },
  "manual-senior-09": {
    "uz": {
      "answer": "Real foydalanish statistikasi asosida oqimlar, tezlik, parallel foydalanuvchilar va ma’lumot hajmini tanlaymiz. Maqsad metrikalarni kelishamiz.",
      "example": "Do‘konda ko‘rish 80%, savat 15%, to‘lov 5% bo‘lsa, yuklama shu aralashmani takrorlaydi."
    },
    "ru": {
      "answer": "По статистике использования выбираем сценарии, интенсивность, число пользователей и объём данных, согласуем метрики.",
      "example": "Если просмотры дают 80%, корзина 15%, оплата 5%, нагрузка повторяет смесь."
    },
    "en": {
      "answer": "Use real usage data to choose flows, rates, concurrency and data volumes, then agree performance targets.",
      "example": "If browsing is 80%, cart 15% and payment 5%, model that workload mix."
    }
  },
  "manual-senior-10": {
    "uz": {
      "answer": "Talab va dizaynda xavfsizlik risklarini ko‘rib, kod/dependency tekshiruvlari hamda ruxsat testlarini CI’ga qo‘shamiz.",
      "example": "API release’idan oldin oddiy foydalanuvchi admin amalini bajara olmasligini tekshiramiz."
    },
    "ru": {
      "answer": "Рассматриваем риски в требованиях и дизайне, добавляем анализ кода/зависимостей и проверки прав в CI.",
      "example": "До выпуска API проверяем, что обычный пользователь не выполняет действие администратора."
    },
    "en": {
      "answer": "Review security risks in requirements/design and add code/dependency checks and authorization checks to CI.",
      "example": "Before an API release, check that a regular user cannot perform admin actions."
    }
  },
  "manual-senior-11": {
    "uz": {
      "answer": "Kelishilgan talab, takrorlash qadamlari va biznes ta’siriga tayanamiz. Talab noaniq bo‘lsa, product owner bilan aniqlashtiramiz.",
      "example": "Dasturchi “bu normal” desa, acceptance criteria va foydalanuvchi natijasini birga ko‘ramiz."
    },
    "ru": {
      "answer": "Опираемся на требования, воспроизводимость и бизнес-влияние. Неясность уточняем с product owner.",
      "example": "Если разработчик говорит «так задумано», вместе сверяем acceptance criteria и результат пользователя."
    },
    "en": {
      "answer": "Use agreed requirements, reproducibility and business impact. Clarify ambiguity with the product owner.",
      "example": "If a developer says “expected behavior,” review the acceptance criteria and user outcome together."
    }
  },
  "manual-senior-12": {
    "uz": {
      "answer": "Qator soni bilan birga qiymatlar, aloqalar va biznes natijani solishtiramiz. Rollbackni mos muhitda va yangi yozuvlar bilan tekshiramiz.",
      "example": "1000 buyurtma ko‘chdi: son, summa va mijoz id’lari mos; rollbackda yangi buyurtma yo‘qolmaydi."
    },
    "ru": {
      "answer": "Сравниваем количество, значения, связи и бизнес-результат. Проверяем rollback в подходящей среде с новыми записями.",
      "example": "Перенесены 1000 заказов: совпадают числа, суммы и id; откат не теряет новые заказы."
    },
    "en": {
      "answer": "Compare counts, values, relationships and business outcomes; verify rollback in a suitable environment with new writes.",
      "example": "For 1000 migrated orders, check counts, totals and customer IDs; rollback must preserve new orders."
    }
  },
  "automation-junior-01": {
    "uz": {
      "answer": "Ko‘p takrorlanadigan, muhim va kutilgan natijasi aniq tekshiruvlardan boshlaymiz. Barqaror API testlari yaxshi boshlanish bo‘lishi mumkin.",
      "example": "Har release’da bajariladigan login va buyurtma yaratish tekshiruvini avtomatlashtiramiz."
    },
    "ru": {
      "answer": "Начинаем с частых, важных и однозначных проверок. Стабильные API-тесты могут быть хорошим стартом.",
      "example": "Автоматизируем вход и создание заказа, проверяемые при каждом релизе."
    },
    "en": {
      "answer": "Start with frequent, important checks with clear expected outcomes. Stable API checks can be a good starting point.",
      "example": "Automate login and order creation checks repeated every release."
    }
  },
  "automation-junior-02": {
    "uz": {
      "answer": "Assertion haqiqiy natija kutilganiga mosligini tekshiradi. Mos bo‘lmasa test yiqiladi.",
      "example": "Savatga bitta mahsulot qo‘shilgach, mahsulot soni 1 ekanini tekshiramiz."
    },
    "ru": {
      "answer": "Assertion сравнивает фактический результат с ожидаемым. Несовпадение делает тест неуспешным.",
      "example": "После добавления одного товара проверяем, что количество в корзине равно 1."
    },
    "en": {
      "answer": "An assertion checks the actual result against the expected result; a mismatch fails the test.",
      "example": "After adding one item, assert the cart count is 1."
    }
  },
  "automation-junior-03": {
    "uz": {
      "answer": "Mustaqil test boshqa testning natijasi yoki tartibiga bog‘lanmaydi. Uni alohida yoki parallel ishga tushirish mumkin.",
      "example": "Buyurtma testi o‘z foydalanuvchisini yaratadi, oldingi login testiga tayanmaydi."
    },
    "ru": {
      "answer": "Независимый тест не зависит от результата и порядка других тестов; его можно запустить отдельно или параллельно.",
      "example": "Тест заказа создаёт своего пользователя, а не ждёт предыдущего теста входа."
    },
    "en": {
      "answer": "Independent tests do not depend on another test's result or order and can run alone or in parallel.",
      "example": "An order test creates its own user instead of relying on a previous login test."
    }
  },
  "automation-junior-04": {
    "uz": {
      "answer": "Avval role va accessible name, label yoki barqaror test id tanlaymiz. Locator kerakli bitta elementni aniqlashi kerak.",
      "example": "“Kirish” nomli tugmani role=button va nomi orqali topamiz."
    },
    "ru": {
      "answer": "Предпочитаем role и accessible name, label или стабильный test id. Локатор должен однозначно находить нужный элемент.",
      "example": "Находим кнопку по role=button и имени «Войти»."
    },
    "en": {
      "answer": "Prefer role and accessible name, labels or stable test IDs; a locator should identify the intended element uniquely.",
      "example": "Find the login button by its button role and accessible name."
    }
  },
  "automation-junior-05": {
    "uz": {
      "answer": "Auto-waiting harakat uchun element tayyorligini tekshiradi, biznes natijasini emas. Natija uchun retry qiladigan assertion yoki aniq hodisani kutamiz.",
      "example": "To‘lash bosilgach, “Buyurtma qabul qilindi” matni ko‘rinishini kutamiz."
    },
    "ru": {
      "answer": "Auto-waiting проверяет готовность элемента к действию, а не бизнес-результат. Результат ждём assertion с повторами или конкретным событием.",
      "example": "После оплаты ждём появления текста «Заказ принят»."
    },
    "en": {
      "answer": "Auto-waiting checks action readiness, not the business outcome. Use a retrying assertion or a specific event for the result.",
      "example": "After clicking Pay, wait for “Order accepted” to appear."
    }
  },
  "automation-junior-06": {
    "uz": {
      "answer": "Har browser context alohida cookies va brauzer saqlash holatiga ega. Bu serverdagi umumiy ma’lumotni avtomatik ajratmaydi.",
      "example": "Bir context’da Ali, boshqasida Vali bilan kiramiz; ularning cookies’i aralashmaydi."
    },
    "ru": {
      "answer": "У каждого browser context свои cookies и браузерное хранилище. Общие серверные данные автоматически не изолируются.",
      "example": "Али и Вали входят в разных contexts, их cookies не смешиваются."
    },
    "en": {
      "answer": "Each browser context has separate cookies and browser storage. Shared server data is not automatically isolated.",
      "example": "Ali and Vali sign in using different contexts without mixing cookies."
    }
  },
  "automation-junior-07": {
    "uz": {
      "answer": "Implicit wait element qidirishda umumiy kutish; explicit wait esa aniq shartni kutadi. Ularni aralashtirish vaqtni kutilmagan uzaytirishi mumkin.",
      "example": "Tugma bosiladigan holatga kelishini explicit wait bilan kutamiz."
    },
    "ru": {
      "answer": "Implicit wait задаёт ожидание поиска элемента; explicit wait ждёт конкретного условия. Смешивание может непредсказуемо увеличить время.",
      "example": "Explicit wait ждёт, пока кнопка станет доступной для нажатия."
    },
    "en": {
      "answer": "Implicit wait affects element lookup globally; explicit wait waits for a condition. Mixing them can cause unpredictable delays.",
      "example": "Use an explicit wait until a button is clickable."
    }
  },
  "automation-junior-08": {
    "uz": {
      "answer": "Avval topilgan element endi joriy DOM’ga bog‘lanmagan. Yangilanishdan keyin elementni qayta topib, kerakli holatni kutamiz.",
      "example": "Ro‘yxat qayta chizilgach, eski tugma o‘rniga yangisini topamiz."
    },
    "ru": {
      "answer": "Ранее найденный элемент больше не связан с текущим DOM. После обновления находим его заново и ждём нужного состояния.",
      "example": "После перерисовки списка находим новую кнопку вместо старой ссылки на элемент."
    },
    "en": {
      "answer": "A previously found element is no longer attached to the current DOM. Locate it again and wait for the required state.",
      "example": "After a list rerenders, find the new button instead of reusing the old reference."
    }
  },
  "automation-junior-09": {
    "uz": {
      "answer": "iframe elementini barqaror CSS/XPath bilan topib unga switch qilamiz, ichki amalni bajarib defaultContent’ga qaytamiz. ID/name bo‘lmasa ham element orqali switch mumkin; indeks tartibga bog‘liq.",
      "example": "iframe[data-testid=\"payment\"] orqali karta formasiga o‘tamiz; frame va maydon tayyorligini kutamiz."
    },
    "ru": {
      "answer": "Находим iframe устойчивым CSS/XPath, переключаемся, выполняем действие и возвращаемся в defaultContent. ID/name не обязательны при переключении по элементу; индекс зависит от порядка.",
      "example": "Переходим в iframe[data-testid=\"payment\"] и ждём готовности frame/поля."
    },
    "en": {
      "answer": "Locate the iframe with stable CSS/XPath, switch into it, perform the action and return to defaultContent. Switching by element does not require an ID/name; an index depends on order.",
      "example": "Switch using iframe[data-testid=\"payment\"] and wait for the frame and field to be ready."
    }
  },
  "automation-junior-10": {
    "uz": {
      "answer": "Fixture testga resurs tayyorlaydi. pytest’da yield’dan oldin setup, undan keyin teardown qilish mumkin.",
      "example": "Fixture test foydalanuvchisini yaratadi, test tugagach uni o‘chiradi."
    },
    "ru": {
      "answer": "Fixture подготавливает ресурс. В pytest до yield выполняют setup, после него — teardown.",
      "example": "Fixture создаёт тестового пользователя и удаляет после теста."
    },
    "en": {
      "answer": "A fixture prepares resources; in pytest, setup can run before yield and teardown after it.",
      "example": "A fixture creates a test user and deletes it after the test."
    }
  },
  "automation-junior-11": {
    "uz": {
      "answer": "JUnit’da assertThrows bilan amal kutilgan exception turini chiqarishini tekshiramiz. Zarur bo‘lsa xabarini ham tekshiramiz.",
      "example": "Noto‘g‘ri yosh kiritilganda IllegalArgumentException chiqishi kutiladi."
    },
    "ru": {
      "answer": "В JUnit assertThrows проверяет ожидаемый тип исключения; при необходимости проверяем сообщение.",
      "example": "Неверный возраст должен вызвать IllegalArgumentException."
    },
    "en": {
      "answer": "In JUnit, assertThrows checks the expected exception type; verify its message when relevant.",
      "example": "An invalid age should throw IllegalArgumentException."
    }
  },
  "automation-junior-12": {
    "uz": {
      "answer": "Promise asinxron natijani bildiradi; await u tugashini kutadi. Test Promise’ni qaytarishi yoki kutishi kerak.",
      "example": "Buyurtma so‘rovi tugamasdan uning javobini tekshirmaymiz."
    },
    "ru": {
      "answer": "Promise представляет асинхронный результат; await ждёт его. Тест должен вернуть Promise или дождаться его.",
      "example": "Не проверяем ответ заказа до завершения запроса."
    },
    "en": {
      "answer": "A Promise represents an asynchronous result; await waits for it. A test must return or await its Promise.",
      "example": "Wait for an order request to finish before checking its response."
    }
  },
  "automation-middle-01": {
    "uz": {
      "answer": "Log, trace va ma’lumot bilan vaqt, umumiy state va muhit sabablarini ajratamiz. Retry sababni tuzatish o‘rnini bosmaydi.",
      "example": "Tugma hali tayyor emasligi aniqlansa, tasodifiy sleep o‘rniga tayyorlik shartini kutamiz."
    },
    "ru": {
      "answer": "По логам, trace и данным разделяем проблемы времени, общего состояния и среды. Retry не заменяет исправление причины.",
      "example": "Если кнопка не готова, ждём нужного состояния вместо случайного sleep."
    },
    "en": {
      "answer": "Use logs, traces and data to isolate timing, shared state and environment problems. Retries do not fix causes.",
      "example": "If a button is not ready, wait for readiness instead of adding an arbitrary sleep."
    }
  },
  "automation-middle-02": {
    "uz": {
      "answer": "Har test yoki worker uchun alohida hisob, noyob id va cleanup tashkil qilamiz. Umumiy yozuvni bir vaqtda o‘zgartirmaymiz.",
      "example": "Ikki parallel test user-A va user-B hisoblarida alohida buyurtma yaratadi."
    },
    "ru": {
      "answer": "Каждому тесту или worker выделяем аккаунт, уникальные id и очистку. Избегаем одновременного изменения общей записи.",
      "example": "Два параллельных теста создают заказы под user-A и user-B."
    },
    "en": {
      "answer": "Give each test or worker separate accounts, unique IDs and cleanup; avoid simultaneous updates to shared records.",
      "example": "Two parallel tests create orders under user-A and user-B separately."
    }
  },
  "automation-middle-03": {
    "uz": {
      "answer": "Tez va muhim smoke testlar har o‘zgarishda, keng regression esa kelishilgan jadval yoki release oldidan ishlaydi.",
      "example": "Pull request’da login/API smoke; kechasi barcha asosiy brauzerlar uchun regression."
    },
    "ru": {
      "answer": "Быстрые критичные smoke запускаем на изменениях, полную регрессию — по расписанию или перед релизом.",
      "example": "В pull request — login/API smoke; ночью — регрессия основных браузеров."
    },
    "en": {
      "answer": "Run quick critical smoke checks on changes and broader regression on a schedule or before release.",
      "example": "Run login/API smoke on pull requests and cross-browser regression overnight."
    }
  },
  "automation-middle-04": {
    "uz": {
      "answer": "API login UI login oqimini qamramaydi. Storage state’da maxfiy tokenlar bo‘lishi, sessiya eskirishi va umumiy hisob testlarni bog‘lashi mumkin.",
      "example": "Har worker’ga alohida hisob; state faylini Git’ga qo‘shmaymiz, UI loginni alohida tekshiramiz."
    },
    "ru": {
      "answer": "API login не проверяет UI-вход. Storage state может содержать секреты, истекать и связывать тесты через общий аккаунт.",
      "example": "Отдельный аккаунт на worker; state не коммитим; UI-вход проверяем отдельно."
    },
    "en": {
      "answer": "API login bypasses the UI flow. Storage state can hold secrets, expire or link tests through shared accounts.",
      "example": "Use separate worker accounts, keep state out of Git and test UI login separately."
    }
  },
  "automation-middle-05": {
    "uz": {
      "answer": "UI holatini barqaror tekshirish uchun mock, haqiqiy integratsiya uchun real API ishlatamiz. Mock shartnoma bilan mos bo‘lishi kerak.",
      "example": "500 javobdagi xabarni mock bilan, real buyurtma saqlanishini API bilan tekshiramiz."
    },
    "ru": {
      "answer": "Mock подходит для стабильных UI-состояний, реальный API — для интеграции. Mock должен соответствовать контракту.",
      "example": "Сообщение при 500 проверяем mock, реальное сохранение заказа — через API."
    },
    "en": {
      "answer": "Use mocks for controlled UI states and real APIs for integration; keep mocks consistent with the contract.",
      "example": "Mock a 500 response to check its message; use a real API to check order persistence."
    }
  },
  "automation-middle-06": {
    "uz": {
      "answer": "Trace’da muvaffaqiyatsiz qadam, DOM snapshot, Network va xabarlarni ko‘rib, kutilgan holat bilan solishtiramiz.",
      "example": "Click vaqtida tugmani modal yopganini trace snapshot’dan ko‘ramiz."
    },
    "ru": {
      "answer": "В trace смотрим неудачный шаг, снимок DOM, Network и сообщения, сравниваем с ожидаемым состоянием.",
      "example": "Снимок trace показывает, что кнопку перекрыло модальное окно."
    },
    "en": {
      "answer": "Inspect the failed action, DOM snapshot, network and messages in the trace against the expected state.",
      "example": "A trace snapshot shows a modal covering the button at click time."
    }
  },
  "automation-middle-07": {
    "uz": {
      "answer": "Har parallel test/worker uchun mustaqil driver session yaratiladi. Teardown’da quit qilinib resurslar bo‘shatiladi.",
      "example": "Ikki worker bir driver’ni bo‘lishmaydi; biri tugashi boshqasini yopmaydi."
    },
    "ru": {
      "answer": "Каждый параллельный тест/worker получает свою driver session. В teardown вызываем quit и освобождаем ресурсы.",
      "example": "Два worker не делят driver; завершение одного не закрывает другого."
    },
    "en": {
      "answer": "Each parallel test or worker gets its own driver session; call quit in teardown to release resources.",
      "example": "Two workers do not share a driver, so finishing one does not close the other."
    }
  },
  "automation-middle-08": {
    "uz": {
      "answer": "Barqaror id yoki ma’noli locator tanlab, kerakli holatni explicit wait bilan kutamiz. DOM yangilansa elementni qayta topamiz.",
      "example": "Mahsulot id’si bilan satrni topib, “Savatga” tugmasi bosiladigan bo‘lishini kutamiz."
    },
    "ru": {
      "answer": "Выбираем стабильный id или смысловой локатор и explicit wait для нужного состояния. После обновления DOM ищем заново.",
      "example": "Находим строку по id товара и ждём доступности кнопки добавления."
    },
    "en": {
      "answer": "Use stable IDs or meaningful locators with explicit conditions; relocate elements after DOM changes.",
      "example": "Find the product row by ID and wait for its Add button to be clickable."
    }
  },
  "automation-middle-09": {
    "uz": {
      "answer": "Brauzerning download sozlamasi va alohida papkasini tayyorlaymiz; tugallangan faylning nomi, hajmi va mazmunini tekshiramiz.",
      "example": "CSV’ning vaqtinchalik fayli yo‘qolgach, kutilgan ustun va qatorlarni o‘qiymiz."
    },
    "ru": {
      "answer": "Настраиваем download и отдельную папку; проверяем завершение, имя, размер и содержимое файла.",
      "example": "После исчезновения временного файла читаем ожидаемые столбцы и строки CSV."
    },
    "en": {
      "answer": "Configure downloads and a separate folder; check completion, filename, size and contents.",
      "example": "After the temporary download file disappears, inspect the CSV columns and rows."
    }
  },
  "automation-middle-10": {
    "uz": {
      "answer": "Scope fixture qancha vaqt yashashini belgilaydi. Umumiy mutable obyektni bir test o‘zgartirsa, boshqasiga ta’sir qiladi.",
      "example": "Session-scope ro‘yxatdan element o‘chirilib, keyingi test uni topolmay qoladi."
    },
    "ru": {
      "answer": "Scope задаёт время жизни fixture. Изменение общего mutable-объекта одним тестом влияет на остальные.",
      "example": "Тест удаляет элемент из session-scope списка, и следующий его не находит."
    },
    "en": {
      "answer": "Scope determines fixture lifetime. One test modifying a shared mutable object can affect others.",
      "example": "A test removes an item from a session-scoped list; the next test cannot find it."
    }
  },
  "automation-middle-11": {
    "uz": {
      "answer": "Umumiy mutable state’dan qochib, testga alohida obyekt va hisob beramiz. Zarur umumiy resurslarni xavfsiz boshqaramiz.",
      "example": "Static driver o‘rniga har testga mustaqil driver lifecycle beriladi."
    },
    "ru": {
      "answer": "Избегаем общего mutable state, выдаём тестам свои объекты и аккаунты; необходимый общий ресурс защищаем.",
      "example": "Вместо static driver каждый тест получает свой жизненный цикл driver."
    },
    "en": {
      "answer": "Avoid shared mutable state using per-test objects and accounts; protect genuinely shared resources.",
      "example": "Use a separate driver lifecycle per test instead of a static shared driver."
    }
  },
  "automation-middle-12": {
    "uz": {
      "answer": "Await bo‘lmasa test amal tugamasdan yakunlanishi mumkin. Promise’larni kutamiz/qaytaramiz, xatolarni runner bilan ko‘ramiz va lint qo‘llaymiz.",
      "example": "Buyurtma yaratish Promise’i rad etilgan, lekin test uni kutmagani uchun tekshiruvdan chetda qolgan."
    },
    "ru": {
      "answer": "Без await тест может закончиться раньше операции. Ждём/возвращаем Promise, проверяем ошибки runner и используем lint.",
      "example": "Promise создания заказа отклонён, но тест не ждал его и пропустил проверку."
    },
    "en": {
      "answer": "Missing await can end a test before its operation. Await/return Promises, inspect runner errors and use linting.",
      "example": "The order-creation Promise rejects, but a test that never awaited it misses the check."
    }
  },
  "automation-senior-01": {
    "uz": {
      "answer": "Nisbat risk, arxitektura va feedback tezligiga bog‘liq. Ko‘p mantiqni unit/API’da, muhim foydalanuvchi oqimini UI’da tekshiramiz.",
      "example": "Chegirma kombinatsiyalari unit’da, buyurtma API’da, bitta asosiy checkout UI’da."
    },
    "ru": {
      "answer": "Баланс зависит от рисков, архитектуры и скорости обратной связи. Логику проверяем unit/API, важные пользовательские пути — UI.",
      "example": "Комбинации скидок — unit, заказ — API, основной checkout — UI."
    },
    "en": {
      "answer": "Balance depends on risk, architecture and feedback speed; check logic at unit/API level and critical journeys through UI.",
      "example": "Discount combinations at unit level, orders via API, one critical checkout through UI."
    }
  },
  "automation-senior-02": {
    "uz": {
      "answer": "Tejalgan vaqt va erta topilgan xatolar foydasini ishlab chiqish, infratuzilma va xizmat xarajatlari bilan solishtiramiz.",
      "example": "Haftasiga 8 soat tejasa, ammo 10 soat tuzatish talab qilsa, testlar qayta ko‘rib chiqiladi."
    },
    "ru": {
      "answer": "Сравниваем экономию времени и раннее обнаружение с затратами на разработку, инфраструктуру и сопровождение.",
      "example": "Если экономится 8 часов, а исправление тестов занимает 10, подход пересматривают."
    },
    "en": {
      "answer": "Compare time saved and earlier defect detection with development, infrastructure and maintenance costs.",
      "example": "If tests save 8 hours but need 10 hours of repairs weekly, reassess them."
    }
  },
  "automation-senior-03": {
    "uz": {
      "answer": "Izolyatsiya, maqsadli suite’lar, resursga mos parallelism va kuzatuv qo‘llaymiz. Sekin/flaky testlarni o‘lchab tuzatamiz.",
      "example": "API testlar parallel, og‘ir UI testlar alohida worker’da; navbat va muvaffaqiyatsizliklar kuzatiladi."
    },
    "ru": {
      "answer": "Используем изоляцию, целевые suite, посильный parallelism и мониторинг; измеряем и исправляем медленные/flaky тесты.",
      "example": "API идут параллельно, тяжёлые UI — в отдельных workers; отслеживаем очереди и сбои."
    },
    "en": {
      "answer": "Use isolation, targeted suites, resource-aware parallelism and monitoring; measure and fix slow/flaky tests.",
      "example": "Run APIs in parallel and heavy UI checks in separate workers while monitoring queues and failures."
    }
  },
  "automation-senior-04": {
    "uz": {
      "answer": "Fixture resurs va lifecycle’ni, page object sahifa amallarini boshqaradi. Biznes natijasi testda aniq ko‘rinishi kerak.",
      "example": "Fixture foydalanuvchi beradi; LoginPage kirishni bajaradi; test profil ochilganini tekshiradi."
    },
    "ru": {
      "answer": "Fixture управляет ресурсами и lifecycle, page object — действиями страницы. Бизнес-проверка должна быть видна в тесте.",
      "example": "Fixture даёт пользователя, LoginPage выполняет вход, тест проверяет открытый профиль."
    },
    "en": {
      "answer": "Fixtures manage resources/lifecycle; page objects manage page interactions. Keep business assertions clear in the test.",
      "example": "A fixture supplies a user, LoginPage signs in, and the test asserts the profile is open."
    }
  },
  "automation-senior-05": {
    "uz": {
      "answer": "Sharding suite’ni CI job’lariga bo‘ladi, workers esa ichki parallelismni beradi. CPU, xotira va backend limitlariga qarab sozlaymiz.",
      "example": "4 job × 2 worker bir vaqtda 8 worker ishlatishi mumkin; backend bunga tayyor bo‘lishi kerak."
    },
    "ru": {
      "answer": "Sharding делит suite между CI jobs, workers задают внутренний parallelism. Учитываем CPU, память и ограничения backend.",
      "example": "4 jobs по 2 worker дают до 8 одновременных workers; backend должен выдержать."
    },
    "en": {
      "answer": "Sharding divides a suite across CI jobs; workers control per-job parallelism. Tune to CPU, memory and backend limits.",
      "example": "Four jobs with two workers each can run eight workers; the backend must support that."
    }
  },
  "automation-senior-06": {
    "uz": {
      "answer": "Brauzer testini risk xaritasiga solishtiramiz. Backend mantiqi, yuklama, native qurilma va keng xavfsizlik tekshiruvlari alohida kerak bo‘lishi mumkin.",
      "example": "Checkout UI o‘tishi ming parallel to‘lovda tizim barqarorligini isbotlamaydi."
    },
    "ru": {
      "answer": "Сравниваем браузерные тесты с рисками. Backend, нагрузка, native-устройства и безопасность могут требовать отдельных проверок.",
      "example": "Успешный UI checkout не доказывает устойчивость тысячи параллельных платежей."
    },
    "en": {
      "answer": "Compare browser coverage to risks; backend logic, load, native devices and security may need separate checks.",
      "example": "A passing UI checkout does not prove stability under a thousand simultaneous payments."
    }
  },
  "automation-senior-07": {
    "uz": {
      "answer": "Pilotda qamrov, barqarorlik, tezlik, jamoa tajribasi va migratsiya xarajatini solishtiramiz. Faqat vosita mashhurligiga qarab tanlamaymiz.",
      "example": "10 muhim testni yangi vositada sinab, eski suite bilan xizmat va bajarish xarajatini solishtiramiz."
    },
    "ru": {
      "answer": "На пилоте сравниваем покрытие, стабильность, скорость, навыки и цену миграции; популярности недостаточно.",
      "example": "Переносим 10 ключевых тестов и сравниваем выполнение и сопровождение со старой suite."
    },
    "en": {
      "answer": "Pilot and compare coverage, reliability, speed, skills and migration cost; popularity alone is insufficient.",
      "example": "Try ten critical tests in the new tool and compare execution and maintenance costs."
    }
  },
  "automation-senior-08": {
    "uz": {
      "answer": "Band sessionlar, slotlar, navbat, boshlanish kechikishi va node resurslarini kuzatamiz. Limitni real talabga moslaymiz.",
      "example": "Chrome slotlari band, Firefox bo‘sh bo‘lsa, Chrome talabiga mos sig‘imni oshiramiz."
    },
    "ru": {
      "answer": "Наблюдаем sessions, slots, очередь, задержки запуска и ресурсы nodes; подстраиваем лимиты под спрос.",
      "example": "Если Chrome slots заняты, а Firefox свободны, корректируем ёмкость под Chrome."
    },
    "en": {
      "answer": "Monitor sessions, slots, queue delays and node resources; tune capacity to actual demand.",
      "example": "If Chrome slots are saturated but Firefox is idle, adjust capacity for Chrome demand."
    }
  },
  "automation-senior-09": {
    "uz": {
      "answer": "Retry soni cheklangan bo‘ladi; birinchi xato dalillari saqlanadi. Retry’dan keyin o‘tgan test ham flaky sifatida tekshiriladi.",
      "example": "Birinchi urinishdagi screenshot/log saqlanadi; ikkinchida o‘tish xatoni yopmaydi."
    },
    "ru": {
      "answer": "Ограничиваем retry и сохраняем доказательства первого сбоя. Прошедший повтор проверяем как flaky.",
      "example": "Screenshot/log первой попытки сохраняется; успех второй не закрывает проблему."
    },
    "en": {
      "answer": "Limit retries, preserve first-failure evidence and investigate retry passes as flaky behavior.",
      "example": "Keep the first attempt's screenshot/log; a second-attempt pass does not close the issue."
    }
  },
  "automation-senior-10": {
    "uz": {
      "answer": "Kichik, aniq parametrli va hujjatlashtirilgan API yaratamiz. Fixture lifecycle, scope va xatolari oldindan tushunarli bo‘ladi.",
      "example": "user fixture rol parametrini oladi va yaratgan hisobini o‘zi tozalaydi."
    },
    "ru": {
      "answer": "Создаём небольшой документированный API с понятными параметрами, lifecycle, scope и ошибками fixtures.",
      "example": "Fixture user принимает роль и очищает созданный аккаунт."
    },
    "en": {
      "answer": "Design small documented APIs with clear parameters, fixture lifecycle, scope and errors.",
      "example": "A user fixture accepts a role and cleans up the account it creates."
    }
  },
  "automation-senior-11": {
    "uz": {
      "answer": "Takrorlanadigan va barqaror amallarni ajratamiz; bir marta ishlatiladigan mantiq uchun ortiqcha qatlam yaratmaymiz.",
      "example": "Bir nechta sahifadagi login amali umumlashtiriladi, bitta assertion uchun yangi framework yaratilmaydi."
    },
    "ru": {
      "answer": "Выделяем повторяемые устойчивые действия, не добавляем лишние слои для разовой логики.",
      "example": "Общий вход переиспользуем, но ради одной проверки не создаём новый framework."
    },
    "en": {
      "answer": "Extract repeated stable operations without adding layers for one-off logic.",
      "example": "Reuse a common login action; do not build a new framework for one assertion."
    }
  },
  "automation-senior-12": {
    "uz": {
      "answer": "Bloklovchi ishlar, unawaited Promise’lar va umumiy state’ni profil/log bilan tekshiramiz. Workerlar va bitta event loop’ni farqlaymiz.",
      "example": "Katta sinxron fayl o‘qish boshqa callback’larni kechiktiradi va timeout chaqirishi mumkin."
    },
    "ru": {
      "answer": "По profiling и логам проверяем блокирующие операции, незавершённые Promise и общий state; различаем workers и один event loop.",
      "example": "Большое синхронное чтение файла задерживает callbacks и может вызвать timeout."
    },
    "en": {
      "answer": "Use profiling and logs to inspect blocking work, unawaited Promises and shared state; distinguish workers from one event loop.",
      "example": "A large synchronous file read delays callbacks and may cause timeouts."
    }
  },
  "manual-junior-47": {
    "uz": {
      "answer": "Testlash xatolarni ko‘rsatadi; hammasini tekshirish imkonsiz; erta boshlash foydali; xatolar ayrim joylarda to‘planadi; testlar eskiradi; kontekst muhim; xatosizlik mahsulot foydasini kafolatlamaydi.",
      "example": "Barcha parollar o‘rniga muhim sinflarni tanlaymiz."
    },
    "ru": {
      "answer": "Тесты показывают дефекты; всё проверить невозможно; раннее начало полезно; дефекты группируются; тесты устаревают; контекст важен; отсутствие дефектов не гарантирует полезность продукта.",
      "example": "Вместо всех паролей выбираем важные классы."
    },
    "en": {
      "answer": "Testing shows defects; exhaustive testing is impossible; test early; defects cluster; tests wear out; context matters; defect-free software is not necessarily useful.",
      "example": "Choose key password partitions instead of every possible password."
    }
  },
  "manual-junior-48": {
    "uz": {
      "answer": "Statik tekshiruv dastur bajarilmasdan, dinamik tekshiruv esa uni ishga tushirib qilinadi.",
      "example": "Talab review’i — statik, loginni bajarish — dinamik."
    },
    "ru": {
      "answer": "Статическая проверка не запускает программу, динамическая выполняет её.",
      "example": "Review требований — статический, выполнение входа — динамический."
    },
    "en": {
      "answer": "Static checks do not execute software; dynamic checks do.",
      "example": "Review requirements statically; execute login dynamically."
    }
  },
  "manual-junior-49": {
    "uz": {
      "answer": "O‘rganish, testni loyihalash va bajarish birga boradi. Odam kuzatuvi manual testlashga mos, vositalar yordam berishi mumkin. Maqsad, vaqt chegarasi va topilmalarni yozamiz — bu tasodifiy bosish emas.",
      "example": "20 daqiqada savat risklarini tekshirib, topilmalarni yozamiz."
    },
    "ru": {
      "answer": "Изучение, проектирование и выполнение идут вместе. Человеческое наблюдение подходит manual testing, инструменты могут помогать. Фиксируем цель, timebox и находки — это не случайные клики.",
      "example": "20 минут исследуем риски корзины и записываем находки."
    },
    "en": {
      "answer": "Learning, designing and executing checks happen together. Human observation suits manual testing and tools can help. Record objectives, a timebox and findings; it is not random clicking.",
      "example": "Explore cart risks for 20 minutes and record findings."
    }
  },
  "manual-junior-50": {
    "uz": {
      "answer": "Muhim jarayonni boshidan yakuniy natijagacha, qatnashuvchi qismlari bilan tekshiradi.",
      "example": "Mahsulot tanlashdan buyurtma tasdig‘igacha."
    },
    "ru": {
      "answer": "Проверяет путь от начала до результата через участвующие компоненты.",
      "example": "От выбора товара до подтверждения заказа."
    },
    "en": {
      "answer": "Checks a workflow from its beginning to its outcome across involved components.",
      "example": "From product selection to order confirmation."
    }
  },
  "manual-junior-51": {
    "uz": {
      "answer": "Performance — umumiy tezlik/barqarorlik; load — kutilgan yuklama; stress — odatiy chegaradan oshirish.",
      "example": "100 foydalanuvchi — load; quvvat chegarasidan oshirish — stress."
    },
    "ru": {
      "answer": "Performance оценивает скорость/стабильность; load — ожидаемую нагрузку; stress — превышение нормальных пределов.",
      "example": "100 пользователей — load; превышение мощности — stress."
    },
    "en": {
      "answer": "Performance evaluates speed/stability; load uses expected traffic; stress exceeds normal limits.",
      "example": "100 expected users is load; exceeding capacity is stress."
    }
  },
  "manual-junior-52": {
    "uz": {
      "answer": "Dastur qo‘llanadigan qurilma, tizim va sozlamalar kombinatsiyalarida ishlashini tekshiradi.",
      "example": "Turli ekran va brauzer sozlamalarida checkout."
    },
    "ru": {
      "answer": "Проверяет работу на поддерживаемых сочетаниях устройств, систем и настроек.",
      "example": "Checkout на разных экранах и настройках браузера."
    },
    "en": {
      "answer": "Checks operation across supported device, system and configuration combinations.",
      "example": "Checkout under different screen and browser settings."
    }
  },
  "manual-junior-53": {
    "uz": {
      "answer": "Inson xatosi defect yaratishi, defect bajarilishda failure keltirishi mumkin.",
      "example": "Noto‘g‘ri chegirma sharti summani xato hisoblaydi."
    },
    "ru": {
      "answer": "Ошибка человека может создать defect, проявляющийся при выполнении как failure.",
      "example": "Неверное условие скидки вызывает ошибочную сумму."
    },
    "en": {
      "answer": "A human error can introduce a defect that causes a runtime failure.",
      "example": "An incorrect discount condition produces a wrong total."
    }
  },
  "manual-junior-54": {
    "uz": {
      "answer": "Jamoaga bog‘liq: yangi, tahlil, tuzatish, qayta tekshirish, yopish yoki qayta ochish.",
      "example": "Tuzatilgan login xatosi qolsa, qayta ochiladi."
    },
    "ru": {
      "answer": "Зависит от команды: новый, анализ, исправление, перепроверка, закрытие или переоткрытие.",
      "example": "Если ошибка входа осталась, её переоткрывают."
    },
    "en": {
      "answer": "Team-specific: new, triaged, fixed, retested, closed or reopened.",
      "example": "Reopen a login defect if the fix does not work."
    }
  },
  "manual-junior-55": {
    "uz": {
      "answer": "Testing muammo va sifat haqida ma’lumot beradi; debugging sababni topib tuzatadi.",
      "example": "QA noto‘g‘ri summani topadi, dasturchi formulani tuzatadi."
    },
    "ru": {
      "answer": "Testing выявляет проблемы и оценивает качество; debugging находит и исправляет причину.",
      "example": "QA находит неверную сумму, разработчик исправляет формулу."
    },
    "en": {
      "answer": "Testing identifies problems and evaluates quality; debugging diagnoses and fixes causes.",
      "example": "QA finds a wrong total; a developer fixes the formula."
    }
  },
  "manual-junior-56": {
    "uz": {
      "answer": "Takroriy testlar yangi risklarni qamramasligi mumkin; o‘zgarish va topilmalarga qarab yangilaymiz.",
      "example": "Yangi chegirma turi uchun yangi tekshiruv qo‘shamiz."
    },
    "ru": {
      "answer": "Одни и те же проверки могут не покрывать новые риски; обновляем по изменениям и находкам.",
      "example": "Добавляем проверки нового типа скидки."
    },
    "en": {
      "answer": "Repeated checks can miss new risks; revise them using changes and findings.",
      "example": "Add checks for a newly introduced discount type."
    }
  },
  "manual-junior-57": {
    "uz": {
      "answer": "Scope, risk, yondashuv, resurs, muhit, jadval va boshlash/yakunlash mezonlari.",
      "example": "To‘lov tekshiruvi uchun sandbox va mas’ulni belgilaymiz."
    },
    "ru": {
      "answer": "Объём, риски, подход, ресурсы, среда, расписание и критерии начала/завершения.",
      "example": "Определяем sandbox и ответственного за проверку платежей."
    },
    "en": {
      "answer": "Scope, risks, approach, resources, environment, schedule and entry/exit criteria.",
      "example": "Specify the payment sandbox and responsible tester."
    }
  },
  "manual-junior-58": {
    "uz": {
      "answer": "Entry — boshlash shartlari; exit — ishni yakunlash uchun kelishilgan shartlar.",
      "example": "Muhit tayyor — entry; muhim testlar o‘tgan — exit."
    },
    "ru": {
      "answer": "Entry — условия начала; exit — согласованные условия завершения.",
      "example": "Среда готова — entry; критичные тесты пройдены — exit."
    },
    "en": {
      "answer": "Entry criteria enable starting; exit criteria define agreed completion conditions.",
      "example": "Environment ready is entry; critical checks passed is exit."
    }
  },
  "manual-junior-59": {
    "uz": {
      "answer": "Talablarni tekshiruvlar bilan bog‘lab, qamralmagan joylarni ko‘rsatadi.",
      "example": "“Parol tiklash” talabi ikkita testga bog‘lanadi."
    },
    "ru": {
      "answer": "Связывает требования с проверками и выявляет пробелы.",
      "example": "Требование сброса пароля связано с двумя тестами."
    },
    "en": {
      "answer": "Links requirements to checks and exposes coverage gaps.",
      "example": "Link a password-reset requirement to two tests."
    }
  },
  "manual-junior-60": {
    "uz": {
      "answer": "Kutilgan xatti-harakatni aniq va tekshiriladigan shartlarda yozamiz.",
      "example": "Bo‘sh email yuborilsa, hisob yaratilmaydi va xabar chiqadi."
    },
    "ru": {
      "answer": "Описываем ожидаемое поведение конкретными проверяемыми условиями.",
      "example": "Пустой email не создаёт аккаунт и вызывает сообщение."
    },
    "en": {
      "answer": "Describe expected behavior using concrete, verifiable conditions.",
      "example": "An empty email must not create an account and must show feedback."
    }
  },
  "manual-junior-61": {
    "uz": {
      "answer": "Bir xil kutilgan xulqli qiymatlarni guruhlab, har guruhdan vakil tanlaymiz.",
      "example": "1–10 dona uchun 5, 0 va 11 ni tanlaymiz."
    },
    "ru": {
      "answer": "Группируем значения с одинаковым ожидаемым поведением и выбираем представителей.",
      "example": "Для 1–10 штук выбираем 5, 0 и 11."
    },
    "en": {
      "answer": "Group inputs with similar expected behavior and choose representatives.",
      "example": "For quantities 1–10, choose 5, 0 and 11."
    }
  },
  "manual-junior-62": {
    "uz": {
      "answer": "Holatlar, ruxsat etilgan va taqiqlangan o‘tishlarni tekshiramiz.",
      "example": "To‘langan buyurtma yana “to‘lanmagan”ga o‘tmasligi kerak."
    },
    "ru": {
      "answer": "Проверяем состояния, допустимые и запрещённые переходы.",
      "example": "Оплаченный заказ не должен снова стать неоплаченным."
    },
    "en": {
      "answer": "Check states plus valid and invalid transitions.",
      "example": "A paid order must not unexpectedly become unpaid."
    }
  },
  "manual-junior-63": {
    "uz": {
      "answer": "Positive ruxsat etilgan foydalanishni, negative noto‘g‘ri ma’lumot va amallarni tekshiradi.",
      "example": "To‘g‘ri email va bo‘sh email bilan ro‘yxatdan o‘tish."
    },
    "ru": {
      "answer": "Positive проверяет допустимое использование, negative — неверные данные и действия.",
      "example": "Регистрация с верным и пустым email."
    },
    "en": {
      "answer": "Positive checks valid usage; negative checks invalid inputs and actions.",
      "example": "Register using a valid email and an empty email."
    }
  },
  "manual-junior-64": {
    "uz": {
      "answer": "Tajriba va avvalgi xatolar asosida ehtimolli muammolarni qidiramiz; tizimli dizaynni to‘ldiradi.",
      "example": "Bo‘sh joyli parol va ikki marta bosishni tekshiramiz."
    },
    "ru": {
      "answer": "Ищем вероятные проблемы по опыту и прошлым дефектам; дополняет системный дизайн.",
      "example": "Проверяем пароль с пробелами и двойное нажатие."
    },
    "en": {
      "answer": "Use experience and past defects to predict problems; it complements systematic design.",
      "example": "Check passwords containing spaces and double clicks."
    }
  },
  "manual-junior-65": {
    "uz": {
      "answer": "HTML tuzilma, CSS ko‘rinish, JavaScript interaktiv xatti-harakatni beradi.",
      "example": "Tugma — HTML, rang — CSS, click amali — JavaScript."
    },
    "ru": {
      "answer": "HTML задаёт структуру, CSS оформление, JavaScript интерактивное поведение.",
      "example": "Кнопка — HTML, цвет — CSS, действие — JavaScript."
    },
    "en": {
      "answer": "HTML defines structure, CSS appearance and JavaScript interactive behavior.",
      "example": "Button structure is HTML, color CSS, click behavior JavaScript."
    }
  },
  "manual-junior-66": {
    "uz": {
      "answer": "Server foydalanuvchining bir muddatli ishlash holatini taniydigan mexanizm.",
      "example": "Login’dan keyin sessiya bilan profilga kiramiz."
    },
    "ru": {
      "answer": "Механизм, позволяющий серверу распознавать временное состояние работы пользователя.",
      "example": "После входа session даёт доступ к профилю."
    },
    "en": {
      "answer": "A mechanism allowing the server to recognize a user's temporary interaction state.",
      "example": "A session lets you access your profile after login."
    }
  },
  "manual-junior-67": {
    "uz": {
      "answer": "Ikkalasi origin bo‘yicha saqlaydi; sessionStorage tab sessiyasiga, localStorage uzoqroq saqlashga mo‘ljallangan.",
      "example": "Tema localStorage’da qoladi; vaqtinchalik forma sessionStorage’da."
    },
    "ru": {
      "answer": "Оба привязаны к origin; sessionStorage к сессии вкладки, localStorage к длительному хранению.",
      "example": "Тема остаётся в localStorage; временная форма в sessionStorage."
    },
    "en": {
      "answer": "Both are origin-scoped; sessionStorage is tab-session scoped, localStorage persists longer.",
      "example": "Store a persistent theme in localStorage, a temporary form in sessionStorage."
    }
  },
  "manual-junior-68": {
    "uz": {
      "answer": "Ekran o‘lchami, yo‘nalish, matn sig‘ishi va asosiy amallarni tekshiramiz.",
      "example": "Tor ekranda tugmalar ustma-ust tushmasligi kerak."
    },
    "ru": {
      "answer": "Проверяем размеры, ориентацию, размещение текста и основные действия.",
      "example": "На узком экране кнопки не перекрываются."
    },
    "en": {
      "answer": "Check screen sizes, orientation, text fit and key interactions.",
      "example": "Buttons must not overlap on a narrow screen."
    }
  },
  "manual-junior-69": {
    "uz": {
      "answer": "Klaviatura, fokus, element nomlari, kontrast va yordamchi texnologiyalar bilan foydalanishni tekshiradi.",
      "example": "Faqat klaviatura bilan loginni bajarish."
    },
    "ru": {
      "answer": "Проверяет клавиатуру, фокус, названия элементов, контраст и вспомогательные технологии.",
      "example": "Выполнить вход только клавиатурой."
    },
    "en": {
      "answer": "Checks keyboard access, focus, element names, contrast and assistive technologies.",
      "example": "Complete login using only the keyboard."
    }
  },
  "manual-junior-70": {
    "uz": {
      "answer": "Ma’lumot sahifani to‘liq qayta yuklamasdan olinishi yoki yuborilishi mumkin.",
      "example": "Qidiruv natijalari sahifa yangilanmasdan chiqadi."
    },
    "ru": {
      "answer": "Данные можно получать и отправлять без полной перезагрузки страницы.",
      "example": "Результаты поиска появляются без перезагрузки."
    },
    "en": {
      "answer": "Data can be fetched or submitted without reloading the whole page.",
      "example": "Search results appear without a page reload."
    }
  },
  "manual-junior-71": {
    "uz": {
      "answer": "Postman, curl yoki kod orqali so‘rov yuborib, javob va ta’sirni tekshiramiz.",
      "example": "curl bilan health endpoint’ni chaqirish."
    },
    "ru": {
      "answer": "Через Postman, curl или код отправляем запрос и проверяем ответ и последствия.",
      "example": "Вызвать health endpoint через curl."
    },
    "en": {
      "answer": "Send requests using Postman, curl or code and inspect responses and effects.",
      "example": "Call a health endpoint using curl."
    }
  },
  "manual-junior-72": {
    "uz": {
      "answer": "401 odatda autentifikatsiya kerak yoki yaroqsiz; 403 — server amalni ruxsat bermaydi.",
      "example": "Tokensiz so‘rov — 401; oddiy rol admin amaliga — 403."
    },
    "ru": {
      "answer": "401 обычно означает отсутствие корректной аутентификации; 403 — отказ в разрешении.",
      "example": "Без токена — 401; обычная роль на admin — 403."
    },
    "en": {
      "answer": "401 generally means valid authentication is missing; 403 means the action is forbidden.",
      "example": "No token returns 401; a regular role on an admin action returns 403."
    }
  },
  "manual-junior-73": {
    "uz": {
      "answer": "Path resurs manzilining qismi; query qo‘shimcha tanlash yoki sozlash parametridir.",
      "example": "/users/7 — path; /users?active=true — query."
    },
    "ru": {
      "answer": "Path — часть адреса ресурса; query задаёт дополнительные условия.",
      "example": "/users/7 — path; /users?active=true — query."
    },
    "en": {
      "answer": "Path belongs to the resource address; query supplies additional selection/options.",
      "example": "/users/7 uses path; /users?active=true uses query."
    }
  },
  "manual-junior-74": {
    "uz": {
      "answer": "Maydon yo‘qligi, null va bo‘sh qiymatlarni shartnoma bo‘yicha alohida tekshiramiz.",
      "example": "name yo‘q, name:null va name:\"\" uch xil holat."
    },
    "ru": {
      "answer": "Отсутствие поля, null и пустое значение проверяем отдельно по контракту.",
      "example": "Нет name, name:null и name:\"\" — три случая."
    },
    "en": {
      "answer": "Check omitted fields, null and empty values separately against the contract.",
      "example": "Missing name, name:null and name:\"\" are three cases."
    }
  },
  "manual-junior-75": {
    "uz": {
      "answer": "Bir xil so‘rovni takrorlash server holatiga bir martalikdek ta’sir qiladi; javob bir xil bo‘lishi shart emas.",
      "example": "Bir resursni DELETE bilan ikki marta o‘chirish yangi o‘chirish yaratmaydi."
    },
    "ru": {
      "answer": "Повтор одинакового запроса имеет тот же эффект на состояние; ответ может отличаться.",
      "example": "Повтор DELETE не создаёт нового удаления."
    },
    "en": {
      "answer": "Repeating an identical request has the same state effect; responses may differ.",
      "example": "Repeating DELETE does not create another deletion."
    }
  },
  "manual-junior-76": {
    "uz": {
      "answer": "Primary key qatorni noyob belgilaydi; foreign key boshqa jadvalga havola yaxlitligini saqlaydi.",
      "example": "orders.user_id users.id’ga bog‘lanadi."
    },
    "ru": {
      "answer": "Primary key уникально определяет строку; foreign key обеспечивает целостность ссылки.",
      "example": "orders.user_id ссылается на users.id."
    },
    "en": {
      "answer": "A primary key identifies a row; a foreign key maintains referential integrity.",
      "example": "orders.user_id references users.id."
    }
  },
  "manual-junior-77": {
    "uz": {
      "answer": "WHERE guruhlashdan oldin qatorlarni, HAVING guruhlash natijalarini filtrlaydi.",
      "example": "HAVING COUNT(*) > 2 ikki buyurtmadan ko‘p guruhni oladi."
    },
    "ru": {
      "answer": "WHERE фильтрует строки до группировки, HAVING — результат группировки.",
      "example": "HAVING COUNT(*) > 2 выбирает группы больше двух."
    },
    "en": {
      "answer": "WHERE filters rows before grouping; HAVING filters grouped results.",
      "example": "HAVING COUNT(*) > 2 selects groups larger than two."
    }
  },
  "manual-junior-78": {
    "uz": {
      "answer": "NULL noma’lum/yo‘q qiymat; tekshirish uchun IS NULL yoki IS NOT NULL ishlatamiz.",
      "example": "WHERE phone IS NULL telefon kiritmaganlarni topadi."
    },
    "ru": {
      "answer": "NULL означает отсутствующее/неизвестное значение; используем IS NULL или IS NOT NULL.",
      "example": "WHERE phone IS NULL находит записи без телефона."
    },
    "en": {
      "answer": "NULL means missing/unknown; use IS NULL or IS NOT NULL.",
      "example": "WHERE phone IS NULL finds records without phone numbers."
    }
  },
  "manual-junior-79": {
    "uz": {
      "answer": "Native platformaga, web brauzerga tayangan; hybrid native qobiqda web qismini ishlatadi.",
      "example": "Native kamera ilovasi va brauzerdagi do‘kon."
    },
    "ru": {
      "answer": "Native использует платформу, web браузер, hybrid web-контент в native-оболочке.",
      "example": "Native камера и магазин в браузере."
    },
    "en": {
      "answer": "Native targets a platform, web runs in browsers, hybrid uses web content in a native shell.",
      "example": "A native camera app and a browser-based shop."
    }
  },
  "manual-junior-80": {
    "uz": {
      "answer": "APK o‘rnatish paketi; AAB tarqatish uchun bundle bo‘lib, undan qurilmaga mos APK olinadi.",
      "example": "Sinovga APK, Play tarqatishiga AAB berilishi mumkin."
    },
    "ru": {
      "answer": "APK — установочный пакет; AAB — bundle для распространения, из которого формируются APK.",
      "example": "Для проверки APK, для распространения в Play AAB."
    },
    "en": {
      "answer": "APK is an installable package; AAB is a distribution bundle used to generate APKs.",
      "example": "A test may receive an APK, while Play distribution uses an AAB."
    }
  },
  "manual-junior-81": {
    "uz": {
      "answer": "Android qurilma bilan aloqa, paket o‘rnatish, shell, log va fayl amallarini bajaradi.",
      "example": "adb devices qurilmalar ro‘yxatini ko‘rsatadi."
    },
    "ru": {
      "answer": "Обеспечивает связь с Android: установка, shell, логи и файлы.",
      "example": "adb devices показывает устройства."
    },
    "en": {
      "answer": "Communicates with Android for installation, shell commands, logs and file operations.",
      "example": "adb devices lists connected devices."
    }
  },
  "manual-junior-82": {
    "uz": {
      "answer": "Apple platformalarida ilovaning beta build’larini testerga tarqatish vositasi.",
      "example": "Tester taklif orqali beta build’ni o‘rnatadi."
    },
    "ru": {
      "answer": "Инструмент распространения beta-сборок приложений на платформах Apple.",
      "example": "Тестер по приглашению устанавливает beta-сборку."
    },
    "en": {
      "answer": "A tool for distributing beta app builds on Apple platforms.",
      "example": "An invited tester installs a beta build."
    }
  },
  "manual-junior-83": {
    "uz": {
      "answer": "Emulator muhitni taqlid qiladi; haqiqiy qurilma apparat va real ishlash cheklovlarini ko‘rsatadi.",
      "example": "Kamera va batareya oqimini haqiqiy telefonda tekshiramiz."
    },
    "ru": {
      "answer": "Эмулятор имитирует среду; устройство показывает реальные аппаратные ограничения.",
      "example": "Камеру и расход батареи проверяем на телефоне."
    },
    "en": {
      "answer": "Emulators imitate an environment; real devices expose actual hardware behavior and limits.",
      "example": "Check camera behavior and battery use on a real phone."
    }
  },
  "manual-junior-84": {
    "uz": {
      "answer": "Ruxsat berish, rad etish, qayta so‘rash va sozlamadan o‘zgartirishni tekshiramiz.",
      "example": "Mikrofon rad etilganda ilova tushunarli xabar beradi."
    },
    "ru": {
      "answer": "Проверяем разрешение, отказ, повторный запрос и изменение в настройках.",
      "example": "При отказе микрофона приложение показывает понятное сообщение."
    },
    "en": {
      "answer": "Check granting, denying, requesting again and changing permissions in settings.",
      "example": "Denying microphone access should produce clear feedback."
    }
  },
  "manual-junior-85": {
    "uz": {
      "answer": "Uzilishda holat, ovoz va davom etish xulqini talabga ko‘ra tekshiramiz.",
      "example": "Ovoz yozayotganda qo‘ng‘iroq kelsa, yozuv holati aniqligi."
    },
    "ru": {
      "answer": "Проверяем состояние, звук и продолжение работы при прерывании по требованиям.",
      "example": "При звонке во время записи состояние записи понятно."
    },
    "en": {
      "answer": "Check state, audio and resumption during interruptions against requirements.",
      "example": "A call during recording leaves a clear recording state."
    }
  },
  "manual-junior-86": {
    "uz": {
      "answer": "Android’da logcat, Apple vositalarida qurilma loglarini vaqt va qadamlar bilan yig‘amiz.",
      "example": "Crash vaqtini qayd qilib, shu davr logini saqlaymiz."
    },
    "ru": {
      "answer": "На Android используем logcat, на Apple инструменты логов; фиксируем время и шаги.",
      "example": "Фиксируем время crash и сохраняем соответствующие логи."
    },
    "en": {
      "answer": "Use Android logcat or Apple device logging tools; record timestamps and steps.",
      "example": "Record the crash time and retain matching logs."
    }
  },
  "manual-junior-87": {
    "uz": {
      "answer": "Muvaffaqiyat, xato, bekor qilish, mavjud emaslik va fallback kirishni tekshiramiz.",
      "example": "Barmoq tanilmasa PIN orqali kirish imkonini tekshiramiz."
    },
    "ru": {
      "answer": "Проверяем успех, ошибку, отмену, недоступность и запасной вход.",
      "example": "Если отпечаток не распознан, проверяем вход по PIN."
    },
    "en": {
      "answer": "Check success, failure, cancellation, unavailability and fallback authentication.",
      "example": "If recognition fails, verify the PIN fallback."
    }
  },
  "manual-junior-88": {
    "uz": {
      "answer": "Qo‘shish, miqdor, o‘chirish, summa, bo‘sh holat va saqlanishni qamraymiz.",
      "example": "2 × 10 narxli mahsulot summasi 20 bo‘lishi kerak."
    },
    "ru": {
      "answer": "Охватываем добавление, количество, удаление, сумму, пустое состояние и сохранение.",
      "example": "2 товара по 10 дают сумму 20."
    },
    "en": {
      "answer": "Cover adding, quantity, removal, totals, empty state and persistence.",
      "example": "Two items priced at 10 should total 20."
    }
  },
  "manual-junior-89": {
    "uz": {
      "answer": "Kelishilgan bugungi sana va vaqt zonasida chegara kunlarini tekshiramiz.",
      "example": "18 yoshga bugun, ertaga va kecha to‘lgan holatlar."
    },
    "ru": {
      "answer": "Проверяем граничные даты относительно согласованных текущей даты и часового пояса.",
      "example": "18 лет сегодня, завтра и вчера."
    },
    "en": {
      "answer": "Check boundary dates against an agreed current date and timezone.",
      "example": "Turning 18 today, tomorrow and yesterday."
    }
  },
  "manual-junior-90": {
    "uz": {
      "answer": "Faqat test ma’lumotlari bilan format, muddat, bo‘sh maydon va xato xabarlarini tekshiramiz.",
      "example": "O‘tgan muddatli test kartasi bilan tushunarli rad javobi."
    },
    "ru": {
      "answer": "На тестовых данных проверяем формат, срок, пустые поля и сообщения.",
      "example": "Просроченная тестовая карта вызывает понятный отказ."
    },
    "en": {
      "answer": "Use test data to check format, expiry, empty fields and errors.",
      "example": "An expired test card gets a clear rejection."
    }
  },
  "manual-junior-91": {
    "uz": {
      "answer": "Majburiylik, format, chegaralar, takroriy hisob va parol mosligini tekshiramiz.",
      "example": "Turli parollar bilan hisob yaratilmasligi kerak."
    },
    "ru": {
      "answer": "Проверяем обязательность, формат, границы, дубликаты и совпадение паролей.",
      "example": "При разных паролях аккаунт не создаётся."
    },
    "en": {
      "answer": "Check required fields, format, boundaries, duplicates and matching passwords.",
      "example": "Mismatching passwords must not create an account."
    }
  },
  "manual-junior-92": {
    "uz": {
      "answer": "Talab, takrorlash qadamlari va haqiqiy/kutilgan natijani yozamiz.",
      "example": "Bo‘sh username qabul qilindi; kutilgani — validatsiya xabari."
    },
    "ru": {
      "answer": "Указываем требование, шаги и фактический/ожидаемый результат.",
      "example": "Пустой username принят; ожидается сообщение валидации."
    },
    "en": {
      "answer": "Record the requirement, steps and actual/expected behavior.",
      "example": "Empty username accepted; expected validation feedback."
    }
  },
  "manual-junior-93": {
    "uz": {
      "answer": "To‘g‘ri natija, nolga bo‘lish, aniqlik, chegaralar va noto‘g‘ri formatni tekshiramiz.",
      "example": "10/2=5; 10/0 uchun kelishilgan xato xabari."
    },
    "ru": {
      "answer": "Проверяем результат, деление на ноль, точность, границы и формат.",
      "example": "10/2=5; для 10/0 согласованная ошибка."
    },
    "en": {
      "answer": "Check results, division by zero, precision, boundaries and formats.",
      "example": "10/2=5; 10/0 produces the specified error."
    }
  },
  "manual-junior-94": {
    "uz": {
      "answer": "Kirish, chat ochish, yuborish va qabul qilish asosiy tekshiruvlardir.",
      "example": "Ikki test hisob orasida matn yuboramiz."
    },
    "ru": {
      "answer": "Вход, открытие чата, отправка и получение — основные проверки.",
      "example": "Отправляем текст между двумя тестовыми аккаунтами."
    },
    "en": {
      "answer": "Core checks are login, opening a chat, sending and receiving.",
      "example": "Send a message between two test accounts."
    }
  },
  "manual-junior-95": {
    "uz": {
      "answer": "Bir xil qoida va natija izchilligini, bo‘sh va topilmagan holatlarni tekshiramiz.",
      "example": "“Kitob” so‘rovi bosh va katalog sahifalarida mos ishlaydi."
    },
    "ru": {
      "answer": "Проверяем согласованность правил и результатов, пустой и ненайденный запрос.",
      "example": "«Книга» одинаково работает на главной и каталоге."
    },
    "en": {
      "answer": "Check consistent rules/results plus empty and no-result searches.",
      "example": "“Book” behaves consistently on the home and catalog pages."
    }
  },
  "manual-junior-96": {
    "uz": {
      "answer": "SELECT va WHERE bilan narx shartini belgilaymiz.",
      "example": "SELECT name FROM products WHERE price > 50;"
    },
    "ru": {
      "answer": "Задаём условие цены через SELECT и WHERE.",
      "example": "SELECT name FROM products WHERE price > 50;"
    },
    "en": {
      "answer": "Apply the price condition using SELECT and WHERE.",
      "example": "SELECT name FROM products WHERE price > 50;"
    }
  },
  "manual-junior-97": {
    "uz": {
      "answer": "Maqsad va shartlarni aniqlab, yozish, ushlash, mustahkamlik va turli muhitlarni tekshiramiz.",
      "example": "Oddiy qog‘ozda uzluksiz yozishi va oqmasligi."
    },
    "ru": {
      "answer": "Определяем назначение и условия, проверяем письмо, удобство, прочность и среды.",
      "example": "Непрерывно пишет на обычной бумаге и не течёт."
    },
    "en": {
      "answer": "Clarify purpose and conditions; check writing, grip, durability and environments.",
      "example": "It writes continuously on ordinary paper without leaking."
    }
  },
  "automation-junior-13": {
    "uz": {
      "answer": "Testlarni topadi, ishga tushiradi va natijalarni hisobot qiladi.",
      "example": "pytest test fayllarini topib natijani chiqaradi."
    },
    "ru": {
      "answer": "Находит тесты, запускает и сообщает результаты.",
      "example": "pytest находит файлы тестов и выводит результат."
    },
    "en": {
      "answer": "Discovers tests, executes them and reports results.",
      "example": "pytest discovers test files and reports results."
    }
  },
  "automation-junior-14": {
    "uz": {
      "answer": "Setup kerakli holatni tayyorlaydi, teardown ishlatilgan resurslarni tozalaydi.",
      "example": "Oldin hisob yaratamiz, keyin uni tozalaymiz."
    },
    "ru": {
      "answer": "Setup подготавливает состояние, teardown очищает ресурсы.",
      "example": "Сначала создаём аккаунт, затем очищаем."
    },
    "en": {
      "answer": "Setup prepares required state; teardown cleans resources.",
      "example": "Create an account before the check and clean it up afterward."
    }
  },
  "automation-junior-15": {
    "uz": {
      "answer": "Bir xil tekshiruvni turli ma’lumot bilan takrorlashni soddalashtiradi.",
      "example": "17, 18 va 60 yosh uchun bir test mantiqi."
    },
    "ru": {
      "answer": "Упрощает повтор одинаковой проверки с разными данными.",
      "example": "Одна проверка для возраста 17, 18 и 60."
    },
    "en": {
      "answer": "Simplifies running the same check with different data.",
      "example": "Use one test logic for ages 17, 18 and 60."
    }
  },
  "automation-junior-16": {
    "uz": {
      "answer": "Commit — qayd etilgan o‘zgarish; branch — rivojlanishning alohida yo‘nalishi.",
      "example": "Login testlari alohida branch’da yoziladi."
    },
    "ru": {
      "answer": "Commit фиксирует изменение, branch задаёт отдельную линию разработки.",
      "example": "Тесты входа пишут в отдельной branch."
    },
    "en": {
      "answer": "A commit records a change; a branch is a development line.",
      "example": "Develop login checks on a separate branch."
    }
  },
  "automation-junior-17": {
    "uz": {
      "answer": "Push commitlarni remote’ga yuboradi; pull remote o‘zgarishni olib birlashtiradi.",
      "example": "Jamoa tuzatishini pull qilib, o‘z tuzatishimizni push qilamiz."
    },
    "ru": {
      "answer": "Push отправляет commits, pull получает и интегрирует удалённые изменения.",
      "example": "Получаем правку команды через pull, отправляем свою через push."
    },
    "en": {
      "answer": "Push sends commits; pull fetches and integrates remote changes.",
      "example": "Pull a teammate's fix and push your own."
    }
  },
  "automation-junior-18": {
    "uz": {
      "answer": "O‘zgarishni birlashtirishdan oldin review va avtomatik tekshiruvga imkon beradi.",
      "example": "Yangi API testi review’dan keyin main’ga kiradi."
    },
    "ru": {
      "answer": "Позволяет review и автоматические проверки перед объединением.",
      "example": "Новый API-тест попадает в main после review."
    },
    "en": {
      "answer": "Enables review and automated checks before merging changes.",
      "example": "A new API check reaches main after review."
    }
  },
  "automation-junior-19": {
    "uz": {
      "answer": "Git o‘zgarishlarni avtomatik kelishtira olmasa, mos yakuniy matnni tanlash kerak.",
      "example": "Ikki odam bir test qatorini turlicha o‘zgartirdi."
    },
    "ru": {
      "answer": "Git не может автоматически согласовать изменения; нужно выбрать правильный итог.",
      "example": "Два человека изменили одну строку по-разному."
    },
    "en": {
      "answer": "Git cannot reconcile changes automatically; resolve the intended final content.",
      "example": "Two people changed the same test line differently."
    }
  },
  "automation-junior-20": {
    "uz": {
      "answer": "O‘zgarishlarni tez-tez birlashtirib, avtomatik build va tekshiruv bajarish amaliyoti.",
      "example": "Har pull request’da testlar ishga tushadi."
    },
    "ru": {
      "answer": "Практика частого объединения изменений с автоматическими build и проверками.",
      "example": "Тесты запускаются на каждом pull request."
    },
    "en": {
      "answer": "Frequently integrate changes with automated builds and checks.",
      "example": "Run checks for every pull request."
    }
  },
  "automation-junior-21": {
    "uz": {
      "answer": "Commit yoki build pipeline’ni boshlaydi: kod/runtime/dependency/muhit tayyorlanadi, unit va integration/API, keyin zarur E2E/regression tekshiruvlar bajariladi. Natijalar va artifactlar saqlanadi; kelishilgan gate keyingi bosqichni boshqaradi.",
      "example": "Dependency o‘rnatishdan keyin pytest ishga tushadi."
    },
    "ru": {
      "answer": "Commit/build запускает pipeline: готовим код/runtime/dependencies/среду, выполняем unit, integration/API и нужные E2E/regression. Сохраняем результаты/artifacts; согласованный gate управляет следующим этапом.",
      "example": "После установки зависимостей запускается pytest."
    },
    "en": {
      "answer": "A commit or build triggers the pipeline: prepare code/runtime/dependencies/environment, run unit and integration/API checks, then required E2E/regression checks. Save results/artifacts; agreed gates control the next stage.",
      "example": "Run pytest after dependency installation."
    }
  },
  "automation-junior-22": {
    "uz": {
      "answer": "Build, muhit, test natijalari, davomiylik va xato dalillari.",
      "example": "Yiqilgan login testi uchun log va screenshot."
    },
    "ru": {
      "answer": "Build, окружение, результаты, длительность и доказательства сбоев.",
      "example": "Log и screenshot упавшего теста входа."
    },
    "en": {
      "answer": "Build, environment, results, duration and failure evidence.",
      "example": "Attach logs and a screenshot for a failed login check."
    }
  },
  "automation-junior-23": {
    "uz": {
      "answer": "Encapsulation, abstraction, inheritance va polymorphism obyektlar bilan kodni tashkil qiladi. Encapsulation state va amalni bir joyda tutadi; information hiding ichki qarorlarni tashqaridan yashiradi.",
      "example": "Page obyektida locator va sahifa amallari saqlanadi."
    },
    "ru": {
      "answer": "Encapsulation, abstraction, inheritance и polymorphism организуют код через объекты. Encapsulation объединяет состояние и операции; information hiding скрывает внутренние решения.",
      "example": "Page-объект хранит локаторы и действия."
    },
    "en": {
      "answer": "Encapsulation, abstraction, inheritance and polymorphism organize code around objects. Encapsulation groups state and operations; information hiding conceals internal design decisions.",
      "example": "A page object holds locators and page interactions."
    }
  },
  "automation-junior-24": {
    "uz": {
      "answer": "Takrorni kamaytirish, sodda yechim va hozir kerak bo‘lmagan funksiyani yozmaslik.",
      "example": "Bitta login helper; kelajak uchun ortiqcha qatlam yo‘q."
    },
    "ru": {
      "answer": "Уменьшать дублирование, сохранять простоту, не делать ненужное заранее.",
      "example": "Один login helper без лишних будущих слоёв."
    },
    "en": {
      "answer": "Reduce duplication, keep solutions simple and avoid unneeded functionality.",
      "example": "Use one login helper without speculative layers."
    }
  },
  "automation-junior-25": {
    "uz": {
      "answer": "Sahifa locator va amallarini alohida obyektga yig‘ib, test mantiqidan ajratadi.",
      "example": "LoginPage kirish amalini saqlaydi."
    },
    "ru": {
      "answer": "Собирает локаторы и действия страницы в объект отдельно от тестовой логики.",
      "example": "LoginPage содержит действие входа."
    },
    "en": {
      "answer": "Groups page locators and interactions separately from test logic.",
      "example": "LoginPage encapsulates sign-in interactions."
    }
  },
  "automation-junior-26": {
    "uz": {
      "answer": "Chromium, Firefox va WebKit; real Safari bilan to‘liq bir xil deb hisoblamaymiz.",
      "example": "Bir suite’ni uch engine project’da ishga tushiramiz."
    },
    "ru": {
      "answer": "Chromium, Firefox и WebKit; WebKit не считаем полной заменой реального Safari.",
      "example": "Запускаем suite в трёх engine projects."
    },
    "en": {
      "answer": "Chromium, Firefox and WebKit; WebKit is not identical to actual Safari.",
      "example": "Run a suite using three engine projects."
    }
  },
  "automation-junior-27": {
    "uz": {
      "answer": "Frame locator orqali iframe’ni, keyin uning ichidagi elementni tanlaymiz.",
      "example": "To‘lov iframe’i ichidagi karta maydoni."
    },
    "ru": {
      "answer": "Через frame locator выбираем iframe, затем внутренний элемент.",
      "example": "Поле карты внутри платёжного iframe."
    },
    "en": {
      "answer": "Choose the frame with a frame locator, then its element.",
      "example": "The card field inside a payment iframe."
    }
  },
  "automation-junior-28": {
    "uz": {
      "answer": "Download kutishini bosishdan oldin boshlaymiz, so‘ng faylni saqlab tekshiramiz.",
      "example": "Eksport tugmasidan kelgan CSV mazmunini tekshiramiz."
    },
    "ru": {
      "answer": "Начинаем ожидание download до нажатия, затем сохраняем и проверяем файл.",
      "example": "Проверяем CSV от кнопки экспорта."
    },
    "en": {
      "answer": "Start waiting for the download before triggering it, then save and inspect it.",
      "example": "Inspect the CSV from an export button."
    }
  },
  "automation-junior-29": {
    "uz": {
      "answer": "Dialog handler’ni oldindan o‘rnatib, matnni tekshiramiz va accept/dismiss qilamiz.",
      "example": "O‘chirish tasdig‘ini bekor qilib, qator qolganini tekshiramiz."
    },
    "ru": {
      "answer": "Заранее ставим handler, проверяем текст и вызываем accept/dismiss.",
      "example": "Отменяем подтверждение удаления, строка остаётся."
    },
    "en": {
      "answer": "Register a handler first, inspect its message and accept or dismiss it.",
      "example": "Dismiss a deletion confirmation and verify the row remains."
    }
  },
  "automation-junior-30": {
    "uz": {
      "answer": "Kod WebDriver orqali browser driver’iga buyruq yuboradi. ChromeDriver, Firefox uchun GeckoDriver yoki remote/Grid ishlatilishi mumkin; loyiha va browser versiyalari mosligini qayd qiling.",
      "example": "Driver orqali URL ochib tugma bosamiz."
    },
    "ru": {
      "answer": "Код отправляет WebDriver-команды browser driver. Используют ChromeDriver, GeckoDriver для Firefox или remote/Grid; фиксируйте совместимость версий проекта и браузера.",
      "example": "Через driver открываем URL и нажимаем кнопку."
    },
    "en": {
      "answer": "Code sends WebDriver commands through a browser driver. Examples include ChromeDriver, GeckoDriver for Firefox and remote/Grid execution; record project/browser version compatibility.",
      "example": "Open a URL and click a button through the driver."
    }
  },
  "automation-junior-31": {
    "uz": {
      "answer": "Barqaror ID yoki CSS’ni afzal ko‘ramiz; XPath zarur aloqalar uchun ishlatiladi.",
      "example": "Tasodifiy class o‘rniga id=\"login\"."
    },
    "ru": {
      "answer": "Предпочитаем стабильные ID/CSS; XPath используем для нужных связей.",
      "example": "id=\"login\" вместо случайного class."
    },
    "en": {
      "answer": "Prefer stable IDs or CSS; use XPath for needed structural relationships.",
      "example": "Use id=\"login\" instead of a random class."
    }
  },
  "automation-junior-32": {
    "uz": {
      "answer": "Alert mavjudligini kutib, switch qilamiz, matnni tekshirib accept/dismiss qilamiz.",
      "example": "“O‘chirasizmi?” alert’ini rad etamiz."
    },
    "ru": {
      "answer": "Ждём alert, переключаемся, проверяем текст и accept/dismiss.",
      "example": "Отклоняем alert «Удалить?»."
    },
    "en": {
      "answer": "Wait for the alert, switch to it, inspect its text and accept/dismiss it.",
      "example": "Dismiss a “Delete?” alert."
    }
  },
  "automation-junior-33": {
    "uz": {
      "answer": "Oldingi handles’ni saqlab, yangi handle’ni kutamiz va unga switch qilamiz.",
      "example": "Havola ochgan yangi tab sarlavhasini tekshiramiz."
    },
    "ru": {
      "answer": "Сохраняем handles, ждём новый и переключаемся.",
      "example": "Проверяем заголовок вкладки, открытой ссылкой."
    },
    "en": {
      "answer": "Save existing handles, wait for a new handle and switch to it.",
      "example": "Check the title of a tab opened by a link."
    }
  },
  "automation-junior-34": {
    "uz": {
      "answer": "List o‘zgaruvchan, tuple esa tuzilmasi o‘zgarmas ketma-ketlikdir.",
      "example": "List’ga yangi test ma’lumotini append qilamiz."
    },
    "ru": {
      "answer": "List изменяемый, tuple — неизменяемая последовательность.",
      "example": "Добавляем данные в list через append."
    },
    "en": {
      "answer": "A list is mutable; a tuple is an immutable sequence.",
      "example": "Append another test input to a list."
    }
  },
  "automation-junior-35": {
    "uz": {
      "answer": "Bir testni berilgan ma’lumotlar to‘plami uchun alohida holatlarda bajaradi.",
      "example": "Bo‘sh, qisqa va to‘g‘ri parollar uchun holatlar."
    },
    "ru": {
      "answer": "Запускает один тест отдельными случаями для набора данных.",
      "example": "Случаи пустого, короткого и верного пароля."
    },
    "en": {
      "answer": "Runs one test as separate cases for supplied input sets.",
      "example": "Cases for empty, short and valid passwords."
    }
  },
  "automation-junior-36": {
    "uz": {
      "answer": "Interface shartnomani belgilaydi; abstract class umumiy holat va realizatsiyani saqlashi mumkin.",
      "example": "Driver interface’i uchun turli realizatsiyalar."
    },
    "ru": {
      "answer": "Interface задаёт контракт; abstract class может содержать общее состояние и реализацию.",
      "example": "Разные реализации интерфейса driver."
    },
    "en": {
      "answer": "An interface defines a contract; an abstract class can share state and implementation.",
      "example": "Different implementations of a driver interface."
    }
  },
  "automation-junior-37": {
    "uz": {
      "answer": "Java testlarini tashkil qilish, bajarish, assertion va lifecycle’ni boshqarishga yordam beradi.",
      "example": "Setup’dan so‘ng test bajarilib, cleanup ishlaydi."
    },
    "ru": {
      "answer": "Организуют Java-тесты, выполнение, assertions и lifecycle.",
      "example": "После setup выполняется тест и cleanup."
    },
    "en": {
      "answer": "Organize Java tests, execution, assertions and lifecycle.",
      "example": "Run setup, a check and then cleanup."
    }
  },
  "automation-junior-38": {
    "uz": {
      "answer": "== tur o‘zgartirish bilan solishtirishi mumkin; === qat’iy, tur o‘zgartirmaydi.",
      "example": "\"1\" == 1 true, \"1\" === 1 false."
    },
    "ru": {
      "answer": "== может преобразовать тип, === сравнивает без преобразования.",
      "example": "\"1\" == 1 true, \"1\" === 1 false."
    },
    "en": {
      "answer": "== may coerce types; === compares without type coercion.",
      "example": "\"1\" == 1 is true; \"1\" === 1 is false."
    }
  },
  "manual-middle-13": {
    "uz": {
      "answer": "Scrum iteratsiyalarga, Kanban ish oqimi va WIP limitiga tayangan; QA har ikkisida ham sifatga hamkorlik qiladi.",
      "example": "Kanban’da tekshiruv navbati limitdan oshsa, jamoa yordam beradi."
    },
    "ru": {
      "answer": "Scrum использует итерации, Kanban поток и WIP limits; QA сотрудничает по качеству в обоих.",
      "example": "При переполнении очереди проверок команда помогает."
    },
    "en": {
      "answer": "Scrum uses iterations; Kanban uses flow and WIP limits. QA collaborates on quality in both.",
      "example": "The team helps when the testing queue hits its WIP limit."
    }
  },
  "manual-middle-14": {
    "uz": {
      "answer": "Stub boshqariladigan javob beradi; mock odatda kutilgan chaqiriqlarni ham tekshiradi. Termin vositaga qarab farqlanadi.",
      "example": "Stub narxni beradi; mock narx servisi chaqirilganini tekshiradi."
    },
    "ru": {
      "answer": "Stub задаёт ответ; mock обычно ещё проверяет вызовы. Термины зависят от инструмента.",
      "example": "Stub возвращает цену; mock проверяет вызов сервиса."
    },
    "en": {
      "answer": "A stub supplies responses; a mock typically also verifies interactions. Tool terminology varies.",
      "example": "A stub returns a price; a mock checks the pricing call."
    }
  },
  "manual-middle-15": {
    "uz": {
      "answer": "Variant taqsimoti, tajriba izchilligi, voqea o‘lchovi va funksional ishlash tekshiriladi.",
      "example": "A foydalanuvchi refresh’dan keyin tasodifan B’ga o‘tmaydi."
    },
    "ru": {
      "answer": "Проверяем распределение, постоянство варианта, измерение событий и работу функций.",
      "example": "Пользователь A не становится B после refresh."
    },
    "en": {
      "answer": "Check assignment, stable variants, event measurement and functional behavior.",
      "example": "An A user does not unexpectedly switch to B on refresh."
    }
  },
  "manual-middle-16": {
    "uz": {
      "answer": "O‘zgarish ta’siri, biznes qiymati, foydalanish chastotasi, dependency va riskni baholaymiz. Eng katta zarar keltiradigan oqimlar birinchi, qolgan qarorlar dalil bilan tushuntiriladi.",
      "example": "To‘lov o‘zgarsa, eksportdan oldin to‘lov oqimi tekshiriladi."
    },
    "ru": {
      "answer": "Оцениваем влияние изменений, бизнес-ценность, частоту использования, dependencies и риск. Сначала проверяем потоки с наибольшим ущербом и объясняем приоритеты фактами.",
      "example": "При изменении оплаты проверяем её до экспорта."
    },
    "en": {
      "answer": "Assess change impact, business value, usage frequency, dependencies and risk. Check flows with the greatest potential harm first and explain priorities with evidence.",
      "example": "A payment change is checked before a low-risk export."
    }
  },
  "manual-middle-17": {
    "uz": {
      "answer": "Statement bajarilgan buyruqlarni, branch qaror natijalarini qamraydi; foiz sifat kafolati emas.",
      "example": "if uchun true va false natijalarini bajarish."
    },
    "ru": {
      "answer": "Statement покрывает инструкции, branch исходы решений; процент не гарантирует качество.",
      "example": "Для if выполнить исходы true и false."
    },
    "en": {
      "answer": "Statement covers executed statements; branch covers decision outcomes. Percentages do not guarantee quality.",
      "example": "Exercise both true and false outcomes of an if."
    }
  },
  "manual-middle-18": {
    "uz": {
      "answer": "Ko‘p noodatiy ma’lumot bilan parser va kirish chegaralaridagi muammolarni qidiradi.",
      "example": "JSON parser’ga buzilgan test ma’lumotlari beriladi."
    },
    "ru": {
      "answer": "Ищет проблемы на необычных входах и границах парсеров.",
      "example": "Парсер получает повреждённый тестовый JSON."
    },
    "en": {
      "answer": "Finds problems using unusual inputs and parser boundaries.",
      "example": "Feed malformed test JSON to a parser."
    }
  },
  "manual-middle-19": {
    "uz": {
      "answer": "Talabdagi ruxsat jadvali bilan amaldagi o‘tishlarni solishtiramiz.",
      "example": "Bekor qilingan buyurtmani jo‘natishga urinish rad etiladi."
    },
    "ru": {
      "answer": "Сравниваем фактические переходы с разрешёнными по требованиям.",
      "example": "Отправка отменённого заказа отклоняется."
    },
    "en": {
      "answer": "Compare observed transitions with the allowed transition table.",
      "example": "Attempting to ship a canceled order must be rejected."
    }
  },
  "manual-middle-20": {
    "uz": {
      "answer": "Odatiy, chegara, xato va real muammoga yaqin sinflarni tanlaymiz.",
      "example": "Import uchun bo‘sh, bitta va juda katta fayl."
    },
    "ru": {
      "answer": "Выбираем обычные, граничные, неверные и проблемные классы.",
      "example": "Для импорта пустой, одиночный и большой файл."
    },
    "en": {
      "answer": "Choose typical, boundary, invalid and historically problematic classes.",
      "example": "Use empty, single-row and large import files."
    }
  },
  "manual-middle-21": {
    "uz": {
      "answer": "Talab/risk mosligi, aniqlik, takror, ma’lumot va tekshiriladigan natijani ko‘ramiz.",
      "example": "“To‘g‘ri ishlaydi” o‘rniga aniq summa kutiladi."
    },
    "ru": {
      "answer": "Проверяем требования/риски, ясность, дубли, данные и проверяемый результат.",
      "example": "Вместо «работает» указываем точную сумму."
    },
    "en": {
      "answer": "Check requirement/risk alignment, clarity, duplicates, data and verifiable outcomes.",
      "example": "Replace “works correctly” with the expected total."
    }
  },
  "manual-middle-22": {
    "uz": {
      "answer": "O‘zgarish, incident va foydalanish asosida qo‘shamiz; eskirgan va takroriy testlarni qayta ko‘ramiz.",
      "example": "O‘chirilgan feature testi suite’dan chiqariladi."
    },
    "ru": {
      "answer": "Обновляем по изменениям, incidents и использованию; пересматриваем устаревшие дубли.",
      "example": "Тест удалённой функции исключается."
    },
    "en": {
      "answer": "Update using changes, incidents and usage; review obsolete and duplicate checks.",
      "example": "Remove checks for a retired feature."
    }
  },
  "manual-middle-23": {
    "uz": {
      "answer": "Natija, biznes ta’siri, qolgan risk va zarur qarorni sodda ko‘rsatamiz.",
      "example": "“Checkout ikki holatda yiqildi; release xavfi bor”."
    },
    "ru": {
      "answer": "Показываем результат, бизнес-влияние, остаточный риск и нужное решение.",
      "example": "«Checkout падает в двух случаях; есть риск релиза»."
    },
    "en": {
      "answer": "Explain outcomes, business impact, residual risks and required decisions.",
      "example": "“Checkout fails in two cases; release carries risk.”"
    }
  },
  "manual-middle-24": {
    "uz": {
      "answer": "Ulanish, uzilish, qayta ulanish va xabarlar izchilligini tekshiramiz.",
      "example": "Qayta ulanishdan so‘ng xabar ikki marta kelmaydi."
    },
    "ru": {
      "answer": "Проверяем соединение, разрыв, восстановление и целостность сообщений.",
      "example": "После reconnect сообщение не дублируется."
    },
    "en": {
      "answer": "Check connection, loss, reconnection and message consistency.",
      "example": "Messages must not duplicate after reconnection."
    }
  },
  "manual-middle-25": {
    "uz": {
      "answer": "Javob headers va yangilanishdan keyin klient/server holatini solishtiramiz.",
      "example": "Narx o‘zgarsa, eski narx kelishilgan muddatdan ortiq qolmaydi."
    },
    "ru": {
      "answer": "Сравниваем headers и состояния клиента/сервера после изменения.",
      "example": "Старая цена не остаётся дольше согласованного срока."
    },
    "en": {
      "answer": "Compare headers and client/server states after changes.",
      "example": "An old price must not persist beyond its allowed lifetime."
    }
  },
  "manual-middle-26": {
    "uz": {
      "answer": "Origin, preflight va ruxsat headers’ini ko‘ramiz; CORS authorization o‘rnini bosmaydi.",
      "example": "API ishlaydi, ammo brauzer ruxsat header yo‘qligidan javobni bermaydi."
    },
    "ru": {
      "answer": "Проверяем origin, preflight и headers; CORS не заменяет authorization.",
      "example": "API работает, браузер блокирует чтение без нужного header."
    },
    "en": {
      "answer": "Inspect origin, preflight and response headers; CORS does not replace authorization.",
      "example": "The API works, but the browser blocks reading without the required header."
    }
  },
  "manual-middle-27": {
    "uz": {
      "answer": "Bir-biriga yaqin amallar va teskari javob tartibida yakuniy holatni tekshiramiz.",
      "example": "Eski qidiruv javobi yangi natijani bosib ketmasligi kerak."
    },
    "ru": {
      "answer": "Проверяем близкие действия и обратный порядок ответов.",
      "example": "Старый ответ поиска не заменяет новый."
    },
    "en": {
      "answer": "Check closely timed actions and out-of-order responses.",
      "example": "An old search response must not overwrite newer results."
    }
  },
  "manual-middle-28": {
    "uz": {
      "answer": "Provider va consumer kelishgan so‘rov/javob shartnomasi saqlanishini tekshiradi.",
      "example": "Consumer kutgan orderId maydoni olib tashlanmaydi."
    },
    "ru": {
      "answer": "Проверяет сохранение согласованного контракта provider и consumer.",
      "example": "Ожидаемое consumer поле orderId не исчезает."
    },
    "en": {
      "answer": "Checks that provider and consumer expectations remain compatible.",
      "example": "The orderId field expected by a consumer remains available."
    }
  },
  "manual-middle-29": {
    "uz": {
      "answer": "Eski consumer mosligi va yangi versiyaning belgilangan xulqini tekshiramiz.",
      "example": "v1 mijoz v2 release’dan keyin ishlashda davom etadi."
    },
    "ru": {
      "answer": "Проверяем совместимость старых consumer и поведение новой версии.",
      "example": "Клиент v1 продолжает работать после релиза v2."
    },
    "en": {
      "answer": "Check existing consumer compatibility and specified new-version behavior.",
      "example": "A v1 client keeps working after a v2 release."
    }
  },
  "manual-middle-30": {
    "uz": {
      "answer": "Kelishilgan limit, vaqt oynasi, javob va qayta urinish xulqini tekshiramiz.",
      "example": "Limit oshganda 429 va kelishilgan kutish ko‘rsatmasi."
    },
    "ru": {
      "answer": "Проверяем лимит, окно времени, ответ и повторную попытку.",
      "example": "При превышении 429 и согласованное указание ожидания."
    },
    "en": {
      "answer": "Check the limit, time window, response and retry behavior.",
      "example": "Exceeding the limit returns 429 with the specified wait guidance."
    }
  },
  "manual-middle-31": {
    "uz": {
      "answer": "Schema, maydonlar, resolver ruxsati va errors’ni tekshiramiz; HTTP 200 yakka o‘zi muvaffaqiyat emas.",
      "example": "200 javobning errors qismida rad etish chiqishi mumkin."
    },
    "ru": {
      "answer": "Проверяем schema, поля, права resolver и errors; HTTP 200 недостаточно.",
      "example": "Ответ 200 может содержать отказ в errors."
    },
    "en": {
      "answer": "Check schema, fields, resolver permissions and errors; HTTP 200 alone is insufficient.",
      "example": "A 200 response may still contain an errors entry."
    }
  },
  "manual-middle-32": {
    "uz": {
      "answer": "Hodisa, imzo, takroriy yetkazish, kechikish va qabul qilish natijasini tekshiramiz.",
      "example": "Bir hodisa ikki kelganda buyurtma ikki yaratilmaydi."
    },
    "ru": {
      "answer": "Проверяем событие, подпись, повторы, задержку и обработку.",
      "example": "Повтор события не создаёт второй заказ."
    },
    "en": {
      "answer": "Check event content, signatures, duplicate delivery, delay and processing.",
      "example": "A duplicate event must not create another order."
    }
  },
  "manual-middle-33": {
    "uz": {
      "answer": "Boshlang‘ich qabul va yakuniy natijani ajratib, belgilangan shart/muddat bilan polling qilamiz.",
      "example": "202’dan keyin job status completed bo‘lishini kutamiz."
    },
    "ru": {
      "answer": "Разделяем принятие и завершение, опрашиваем до условия или срока.",
      "example": "После 202 ждём status completed."
    },
    "en": {
      "answer": "Separate acceptance from completion and poll within defined conditions/time limits.",
      "example": "After 202, wait for the job to reach completed."
    }
  },
  "manual-middle-34": {
    "uz": {
      "answer": "Format, hajm, bo‘sh/buzilgan fayl, ruxsat va saqlangan mazmunni tekshiramiz.",
      "example": "PNG ruxsatida oddiy .exe kengaytmasi qabul qilinmaydi."
    },
    "ru": {
      "answer": "Проверяем тип, размер, пустой/повреждённый файл, права и содержимое.",
      "example": "При разрешённых PNG файл .exe отклоняется."
    },
    "en": {
      "answer": "Check type, size, empty/corrupt files, permissions and stored content.",
      "example": "An .exe upload must be rejected when only PNG is allowed."
    }
  },
  "manual-middle-35": {
    "uz": {
      "answer": "Transaction bog‘liq ishlarni birlashtiradi: atomicity — hammasi yoki hech biri; consistency — invariantlar; isolation — parallel ishlar ta’siri; durability — commit natijasi saqlanadi. Xatoda rollback qilinadi.",
      "example": "Pul yechildi, lekin order yaratilmasa, transaction qaytariladi."
    },
    "ru": {
      "answer": "Transaction объединяет операции: atomicity — всё или ничего; consistency — инварианты; isolation — взаимодействие параллельных операций; durability — сохранение commit. При ошибке используют rollback.",
      "example": "При отказе создания order списание откатывается."
    },
    "en": {
      "answer": "A transaction groups operations: atomicity is all-or-nothing, consistency preserves invariants, isolation governs concurrent interaction and durability preserves committed results. Roll back incomplete work.",
      "example": "Roll back a debit when creating its order fails."
    }
  },
  "manual-middle-36": {
    "uz": {
      "answer": "So‘rovni tezlashtirishi mumkin, lekin yozish xarajati va query plan ham o‘zgaradi.",
      "example": "Email qidirish tezlashadi; import tezligini ham solishtiramiz."
    },
    "ru": {
      "answer": "Может ускорить запрос, но меняет стоимость записи и query plan.",
      "example": "Поиск email ускоряется; сравниваем и скорость импорта."
    },
    "en": {
      "answer": "May speed reads while changing write cost and query plans.",
      "example": "Email lookup speeds up; also compare import performance."
    }
  },
  "manual-middle-37": {
    "uz": {
      "answer": "Mijoz bo‘yicha guruhlab SUM bilan yig‘amiz.",
      "example": "SELECT user_id, SUM(total) FROM orders GROUP BY user_id;"
    },
    "ru": {
      "answer": "Группируем по клиенту и используем SUM.",
      "example": "SELECT user_id, SUM(total) FROM orders GROUP BY user_id;"
    },
    "en": {
      "answer": "Group by customer and aggregate with SUM.",
      "example": "SELECT user_id, SUM(total) FROM orders GROUP BY user_id;"
    }
  },
  "manual-middle-38": {
    "uz": {
      "answer": "DELETE qatorlarni, TRUNCATE odatda barcha qatorlarni, DROP obyektni olib tashlaydi. Tranzaksiya xulqi DB’ga bog‘liq.",
      "example": "Test bazasida WHERE bilan bitta yozuvni DELETE qilish."
    },
    "ru": {
      "answer": "DELETE удаляет строки, TRUNCATE обычно все строки, DROP объект; транзакции зависят от DB.",
      "example": "Удаление одной тестовой записи через WHERE."
    },
    "en": {
      "answer": "DELETE removes rows, TRUNCATE usually all rows, DROP the object; transaction behavior is database-specific.",
      "example": "Delete one test record with a WHERE condition."
    }
  },
  "manual-middle-39": {
    "uz": {
      "answer": "Schema, qiymatlar, aloqalar va dastur mosligini oldin/keyin solishtiramiz.",
      "example": "Yangi ustun uchun eski yozuvlarda to‘g‘ri default."
    },
    "ru": {
      "answer": "Сравниваем schema, значения, связи и совместимость до/после.",
      "example": "Верный default нового столбца у старых записей."
    },
    "en": {
      "answer": "Compare schema, values, relationships and application compatibility before/after.",
      "example": "Existing records receive the correct default for a new column."
    }
  },
  "manual-middle-40": {
    "uz": {
      "answer": "Pause, stop va qayta yaratishda holatning saqlanishini tekshiramiz.",
      "example": "Ekran aylanganda forma ma’lumoti yo‘qolmaydi."
    },
    "ru": {
      "answer": "Проверяем сохранение состояния при pause, stop и пересоздании.",
      "example": "Данные формы не теряются при повороте."
    },
    "en": {
      "answer": "Check state preservation through pausing, stopping and recreation.",
      "example": "Form data survives screen rotation when required."
    }
  },
  "manual-middle-41": {
    "uz": {
      "answer": "Activity tark etilganda yo‘q qilinishi holat tiklash xatolarini ko‘rsatishi mumkin; barcha process-death holatini taqlid qilmaydi.",
      "example": "Ilovaga qaytganda savat holatini tiklash."
    },
    "ru": {
      "answer": "Уничтожение activity выявляет проблемы восстановления; не моделирует все случаи process death.",
      "example": "Восстановление корзины после возврата."
    },
    "en": {
      "answer": "Destroying activities exposes restoration issues; it does not model all process-death cases.",
      "example": "Restore cart state after returning to the app."
    }
  },
  "manual-middle-42": {
    "uz": {
      "answer": "Ruxsatli test muhitida proxy yoki debug log bilan so‘rovlarni tekshiramiz; TLS/pinning cheklovini hisobga olamiz.",
      "example": "Test build’da yuborilgan login request’ni ko‘ramiz."
    },
    "ru": {
      "answer": "В разрешённой тестовой среде используем proxy/debug logs, учитываем TLS/pinning.",
      "example": "В test build смотрим запрос входа."
    },
    "en": {
      "answer": "Use proxies or debug logs in an authorized test environment, considering TLS/pinning limits.",
      "example": "Inspect a login request in a test build."
    }
  },
  "manual-middle-43": {
    "uz": {
      "answer": "Eski build’da ma’lumot yaratib, yangilashdan keyin schema va qiymatlarni tekshiramiz.",
      "example": "Offline draft yangilanishdan keyin qoladi."
    },
    "ru": {
      "answer": "Создаём данные в старом build, после update проверяем schema и значения.",
      "example": "Offline draft сохраняется после update."
    },
    "en": {
      "answer": "Create data in an older build and inspect schema/values after updating.",
      "example": "An offline draft survives the update."
    }
  },
  "manual-middle-44": {
    "uz": {
      "answer": "Ilova ochiq/yopiq, login bor/yo‘q va noto‘g‘ri resurs holatlarini tekshiramiz.",
      "example": "Order link login’dan so‘ng to‘g‘ri buyurtmaga olib boradi."
    },
    "ru": {
      "answer": "Проверяем открытое/закрытое приложение, вход/выход и неверный ресурс.",
      "example": "Order link после входа открывает нужный заказ."
    },
    "en": {
      "answer": "Check app running/closed, authenticated/unauthenticated and invalid-resource cases.",
      "example": "An order link opens the intended order after login."
    }
  },
  "manual-middle-45": {
    "uz": {
      "answer": "Takroriy oqimlarda xotira trendini profiler bilan kuzatib, qaytmay qolgan obyektlarni tekshiramiz.",
      "example": "Chatni takror ochib yopganda xotira doim ortib bormasligi."
    },
    "ru": {
      "answer": "Profiler показывает тренд при повторении; проверяем удержанные объекты.",
      "example": "Память не растёт бесконечно при открытии/закрытии чата."
    },
    "en": {
      "answer": "Use a profiler on repeated flows and investigate retained objects.",
      "example": "Repeatedly opening and closing chat must not grow memory indefinitely."
    }
  },
  "manual-middle-46": {
    "uz": {
      "answer": "Real tezlik, oqim aralashmasi, think time va ma’lumot hajmiga tayangan model tuzamiz.",
      "example": "Har daqiqadagi 100 qidiruv va 5 checkout."
    },
    "ru": {
      "answer": "Используем реальные интенсивность, смесь сценариев, think time и объёмы данных.",
      "example": "100 поисков и 5 checkout в минуту."
    },
    "en": {
      "answer": "Model realistic rates, workflow mixes, think times and data volumes.",
      "example": "100 searches and 5 checkouts per minute."
    }
  },
  "manual-middle-47": {
    "uz": {
      "answer": "O‘lchangan javoblarning 95%i shu qiymatdan tez yoki teng bo‘lgan chegaradir.",
      "example": "p95=2s bo‘lsa, taxminan 5% javoblar sekinroq."
    },
    "ru": {
      "answer": "Порог, не превышаемый примерно 95% измеренных ответов.",
      "example": "При p95=2s около 5% ответов медленнее."
    },
    "en": {
      "answer": "A threshold at or below which roughly 95% of measured responses fall.",
      "example": "With p95=2s, roughly 5% of responses are slower."
    }
  },
  "manual-middle-48": {
    "uz": {
      "answer": "Uzoq vaqt davomida barqaror yuklamada resurs yig‘ilishi va degradatsiyani izlaydi.",
      "example": "8 soat ishlaganda xotira va javob vaqtini kuzatamiz."
    },
    "ru": {
      "answer": "Ищет накопление ресурсов и деградацию под длительной нагрузкой.",
      "example": "8 часов наблюдаем память и время ответа."
    },
    "en": {
      "answer": "Finds resource accumulation and degradation under sustained load.",
      "example": "Monitor memory and response time over eight hours."
    }
  },
  "manual-middle-49": {
    "uz": {
      "answer": "Klient va server metrikalari, trace hamda DB/queue vaqtlarini birga ko‘ramiz.",
      "example": "CPU bo‘sh, ammo DB query sekin — DB’ni tekshiramiz."
    },
    "ru": {
      "answer": "Сопоставляем клиентские/серверные метрики, traces и время DB/queue.",
      "example": "CPU свободен, query медленный — исследуем DB."
    },
    "en": {
      "answer": "Correlate client/server metrics, traces and database/queue times.",
      "example": "Low CPU with slow queries points toward investigating the database."
    }
  },
  "manual-middle-50": {
    "uz": {
      "answer": "Ruxsatli test muhitida parametrli query va kirish validatsiyasini tekshiramiz; zararli ta’sirga yo‘l qo‘ymaymiz.",
      "example": "Ismdagi apostrof query xatosi yoki qo‘shimcha qator bermaydi."
    },
    "ru": {
      "answer": "В разрешённой среде проверяем параметризованные queries и валидацию без разрушительных действий.",
      "example": "Апостроф в имени не ломает query и не расширяет результат."
    },
    "en": {
      "answer": "In an authorized test environment, verify parameterized queries and validation without destructive actions.",
      "example": "An apostrophe in a name must not break a query or broaden results."
    }
  },
  "manual-middle-51": {
    "uz": {
      "answer": "Foydalanuvchi matni xavfsiz chiqarilishi va kerakli kontekstda kod sifatida bajarilmasligini tekshiramiz.",
      "example": "Izohdagi HTML matn yoki sanitizatsiyalangan mazmun bo‘lib qoladi."
    },
    "ru": {
      "answer": "Проверяем безопасный вывод текста без исполнения как кода в данном контексте.",
      "example": "HTML в комментарии остаётся текстом или очищенным содержимым."
    },
    "en": {
      "answer": "Check safe output rendering so user input is not executed as code.",
      "example": "Comment HTML remains text or sanitized content."
    }
  },
  "manual-middle-52": {
    "uz": {
      "answer": "Cookie’li amallarda token/origin va tegishli cookie siyosatini test muhitida tekshiramiz.",
      "example": "Yo‘q yoki noto‘g‘ri CSRF tokenli o‘zgartirish rad etiladi."
    },
    "ru": {
      "answer": "Для cookie-запросов проверяем token/origin и политику cookies в тестовой среде.",
      "example": "Изменение с отсутствующим/неверным CSRF token отклоняется."
    },
    "en": {
      "answer": "For cookie-based actions, check tokens/origin and appropriate cookie policy in a test environment.",
      "example": "Reject a state change with a missing or invalid CSRF token."
    }
  },
  "manual-middle-53": {
    "uz": {
      "answer": "Parol, token va shaxsiy ma’lumot keraksiz qayd etilmaganini ko‘ramiz.",
      "example": "Login xatosida parol logga yozilmaydi."
    },
    "ru": {
      "answer": "Проверяем отсутствие ненужных паролей, токенов и личных данных.",
      "example": "При ошибке входа пароль не попадает в лог."
    },
    "en": {
      "answer": "Check that passwords, tokens and personal data are not unnecessarily logged.",
      "example": "A login failure must not log the password."
    }
  },
  "manual-middle-54": {
    "uz": {
      "answer": "Risk, ta’sir va avtomatik qamrovga qarab ustuvorlik beramiz; qoldirilgan riskni hujjatlashtiramiz.",
      "example": "200 muhim test avval; qolganlar uchun kelishilgan scope."
    },
    "ru": {
      "answer": "Приоритизируем по рискам, влиянию и автоматизации, фиксируем остаточный риск.",
      "example": "Сначала 200 ключевых тестов, остальное по согласованному scope."
    },
    "en": {
      "answer": "Prioritize by risk, impact and automation, recording residual risk.",
      "example": "Run 200 critical checks first and agree the remaining scope."
    }
  },
  "manual-middle-55": {
    "uz": {
      "answer": "Yo‘q. Muhit va talabga qarab sababni ajratamiz; to‘g‘ri xabar normal bo‘lishi mumkin.",
      "example": "Tarmoq yo‘q — normal xabar; xabar saqlandi, lekin failure — bug."
    },
    "ru": {
      "answer": "Нет. Сверяем среду и требования; корректное сообщение может быть ожидаемым.",
      "example": "Без сети сообщение нормально; сохранение с failure может быть bug."
    },
    "en": {
      "answer": "No. Inspect environment and requirements; correct feedback may be expected.",
      "example": "Offline failure is expected; reporting failure after successful saving may be a bug."
    }
  },
  "manual-middle-56": {
    "uz": {
      "answer": "Foydalanish va riskka qarab chuqurlikni, hammasida esa muhim oqimni tanlaymiz.",
      "example": "Asosiy brauzerda keng, boshqalarida checkout smoke."
    },
    "ru": {
      "answer": "Глубину выбираем по использованию/рискам, ключевые пути проверяем везде.",
      "example": "Полная проверка основного, checkout smoke остальных."
    },
    "en": {
      "answer": "Choose depth by usage/risk and cover critical journeys in all browsers.",
      "example": "Deep checks in the main browser and checkout smoke in the others."
    }
  },
  "manual-middle-57": {
    "uz": {
      "answer": "Har narx oralig‘i va chegarasi, kutilgan formula va umumiy summani tekshiramiz.",
      "example": "1–10 narxi 5, 11+ narxi 4: 10 va 11 muhim."
    },
    "ru": {
      "answer": "Проверяем диапазоны, границы, формулу и сумму.",
      "example": "1–10 по 5, 11+ по 4: важны 10 и 11."
    },
    "en": {
      "answer": "Check price bands, boundaries, specified formulas and totals.",
      "example": "For 1–10 at 5 and 11+ at 4, check 10 and 11."
    }
  },
  "manual-middle-58": {
    "uz": {
      "answer": "Yaratilgan id bilan o‘qib, qiymat, ruxsat, xato va cleanup’ni tekshiramiz.",
      "example": "Ali yaratildi; GET shu id bilan Ali qaytaradi."
    },
    "ru": {
      "answer": "Читаем созданный id, проверяем поля, права, ошибки и cleanup.",
      "example": "Создан Али; GET того же id возвращает Али."
    },
    "en": {
      "answer": "Read the created ID, verify fields, permissions and errors, then clean up.",
      "example": "Create Ali, then GET that ID and expect Ali."
    }
  },
  "manual-middle-59": {
    "uz": {
      "answer": "Format tekshiruvi manzil mavjudligi yoki egalikni isbotlamaydi.",
      "example": "Format to‘g‘ri, lekin tasdiqlash xati kelmasligi mumkin."
    },
    "ru": {
      "answer": "Проверка формата не доказывает существование адреса или владение.",
      "example": "Формат верный, но письмо подтверждения не приходит."
    },
    "en": {
      "answer": "Format validation does not prove that an address exists or belongs to someone.",
      "example": "The format can be valid while confirmation mail never arrives."
    }
  },
  "manual-middle-60": {
    "uz": {
      "answer": "Network zanjiri, cookies va sessiya tekshiruvlarini solishtiramiz.",
      "example": "Login cookie saqlanmaganidan profil yana login’ga yuboradi."
    },
    "ru": {
      "answer": "Сопоставляем цепочку Network, cookies и проверку сессии.",
      "example": "Без сохранённой cookie профиль возвращает на вход."
    },
    "en": {
      "answer": "Inspect redirect chains, cookies and session validation.",
      "example": "A missing login cookie sends the profile back to login."
    }
  },
  "manual-middle-61": {
    "uz": {
      "answer": "Qo‘llash tartibi, yaxlitlash va valyuta qoidalarini talab bilan kelishamiz.",
      "example": "100 dan 10% chegirma, so‘ng 5% soliq — 94.50."
    },
    "ru": {
      "answer": "Уточняем порядок, округление и валютные правила.",
      "example": "100 минус 10%, затем налог 5% — 94.50."
    },
    "en": {
      "answer": "Agree calculation order, rounding and currency rules.",
      "example": "100 minus 10%, then 5% tax gives 94.50."
    }
  },
  "automation-middle-13": {
    "uz": {
      "answer": "Sabab, mas’ul, muddat va risk ko‘rinadi; test yashirincha yo‘qolmaydi.",
      "example": "Flaky checkout vaqtincha ajratilib, tuzatish task’iga bog‘lanadi."
    },
    "ru": {
      "answer": "Видны причина, владелец, срок и риск; тест не исчезает незаметно.",
      "example": "Flaky checkout изолируют и связывают с задачей исправления."
    },
    "en": {
      "answer": "Keep cause, owner, deadline and risk visible; do not silently lose coverage.",
      "example": "Temporarily isolate flaky checkout with a linked repair task."
    }
  },
  "automation-middle-14": {
    "uz": {
      "answer": "API’da tayyorlab, id orqali UI’da tekshiramiz va o‘z ma’lumotimizni tozalaymiz.",
      "example": "API’da order yaratiladi, UI’da aynan uning statusi ko‘riladi."
    },
    "ru": {
      "answer": "Готовим через API, проверяем по id в UI и очищаем свои данные.",
      "example": "Order создан API, его status проверен UI."
    },
    "en": {
      "answer": "Prepare data via API, check it by ID in the UI and clean up your records.",
      "example": "Create an order through API and inspect its status in the UI."
    }
  },
  "automation-middle-15": {
    "uz": {
      "answer": "Kutilgan tuzilma yoki ko‘rinish o‘zgarishini topadi; baseline tasdiqlanishi kerak.",
      "example": "Hisobot ustuni yo‘qolishi snapshot farqini beradi."
    },
    "ru": {
      "answer": "Выявляет изменения структуры/вида; baseline должен быть проверен.",
      "example": "Исчезнувший столбец создаёт snapshot diff."
    },
    "en": {
      "answer": "Detects structural/visual changes; baselines must be reviewed.",
      "example": "A missing report column creates a snapshot difference."
    }
  },
  "automation-middle-16": {
    "uz": {
      "answer": "Xatoni qayd etib, birlamchi test xatosini yashirmaymiz; qoldiq uchun tiklash yo‘lini belgilaymiz.",
      "example": "Test yiqildi, delete ham yiqildi: ikkala dalil saqlanadi."
    },
    "ru": {
      "answer": "Фиксируем ошибку, не скрываем основную; задаём уборку остатков.",
      "example": "Упали тест и delete — сохраняем обе ошибки."
    },
    "en": {
      "answer": "Record the failure without hiding the original test error and arrange residual cleanup.",
      "example": "If both the check and delete fail, retain both errors."
    }
  },
  "automation-middle-17": {
    "uz": {
      "answer": "Merge tarixlarni birlashtiradi; rebase commitlarni yangi bazaga qayta qo‘yadi va identifikatorlarni o‘zgartiradi.",
      "example": "Umumiy branch tarixini kelishuvsiz qayta yozmaymiz."
    },
    "ru": {
      "answer": "Merge объединяет истории; rebase переносит commits и меняет их идентификаторы.",
      "example": "Не переписываем общую историю без согласования."
    },
    "en": {
      "answer": "Merge combines histories; rebase replays commits onto a base and changes their IDs.",
      "example": "Do not rewrite shared history without agreement."
    }
  },
  "automation-middle-18": {
    "uz": {
      "answer": "Yaxshi va yomon commit oralig‘ida xatoni kiritgan o‘zgarishni qidiradi.",
      "example": "Kecha o‘tgan API testi qaysi commitdan yiqilganini topish."
    },
    "ru": {
      "answer": "Ищет изменение, вызвавшее дефект, между хорошим и плохим commits.",
      "example": "Найти commit, после которого API-тест падает."
    },
    "en": {
      "answer": "Finds a regression-inducing change between known good and bad commits.",
      "example": "Locate the commit that started an API failure."
    }
  },
  "automation-middle-19": {
    "uz": {
      "answer": "Assertion qiymati, locator, izolyatsiya, wait, cleanup va xato dalilini tekshiramiz.",
      "example": "Sleep o‘rniga aniq holat kutishini taklif qilamiz."
    },
    "ru": {
      "answer": "Проверяем assertions, локаторы, изоляцию, ожидания, cleanup и диагностику.",
      "example": "Предлагаем условное ожидание вместо sleep."
    },
    "en": {
      "answer": "Review assertions, locators, isolation, waits, cleanup and diagnostics.",
      "example": "Replace an arbitrary sleep with a condition-based wait."
    }
  },
  "automation-middle-20": {
    "uz": {
      "answer": "Secret store’dan runtime’da beramiz; kod, log va artifact’da chiqarishni cheklaymiz.",
      "example": "API token environment’dan olinib logga chiqarilmaydi."
    },
    "ru": {
      "answer": "Передаём из secret store, ограничиваем вывод в коде, логах и artifacts.",
      "example": "Token берётся из environment без вывода в log."
    },
    "en": {
      "answer": "Inject from a secret store; avoid exposure in code, logs and artifacts.",
      "example": "Read an API token from the environment without logging it."
    }
  },
  "automation-middle-21": {
    "uz": {
      "answer": "Versiya, muhit, timezone, resurs va parallelismni solishtiramiz.",
      "example": "CI’da UTC bo‘lgani sana testini o‘zgartirgan."
    },
    "ru": {
      "answer": "Сравниваем версии, среду, timezone, ресурсы и parallelism.",
      "example": "UTC в CI изменил результат проверки даты."
    },
    "en": {
      "answer": "Compare versions, environment, timezone, resources and parallelism.",
      "example": "UTC on CI changed a date check's result."
    }
  },
  "automation-middle-22": {
    "uz": {
      "answer": "Sababni aniqlaydigan log/trace/reportni saqlab, maxfiylik va hajmni hisobga olamiz.",
      "example": "Yiqilgan UI testi uchun trace, muvaffaqiyatli test uchun qisqa natija."
    },
    "ru": {
      "answer": "Сохраняем полезные log/trace/report, учитывая секреты и размер.",
      "example": "Trace для сбоя UI, краткий результат для успеха."
    },
    "en": {
      "answer": "Retain diagnostic logs/traces/reports considering secrets and size.",
      "example": "Keep a trace for failed UI checks and compact results for passes."
    }
  },
  "automation-middle-23": {
    "uz": {
      "answer": "Bir xil muhitni qayta yaratish uchun versiya/lockfile ishlatamiz; yangilashni nazorat qilamiz.",
      "example": "Runner versiyasi tasodifan o‘zgarib suite’ni buzmaydi."
    },
    "ru": {
      "answer": "Для воспроизводимости фиксируем версии/lockfile и контролируем обновления.",
      "example": "Случайная смена runner не ломает suite."
    },
    "en": {
      "answer": "Use versions/lockfiles for reproducibility and control upgrades.",
      "example": "An unexpected runner upgrade must not silently break the suite."
    }
  },
  "automation-middle-24": {
    "uz": {
      "answer": "Normal davomiylik va tashqi kutishlarga asoslaymiz; cheksiz kutishni oldini olamiz.",
      "example": "5 daqiqalik suite uchun o‘lchangan zaxira bilan limit."
    },
    "ru": {
      "answer": "Ориентируемся на обычную длительность и внешние ожидания, избегаем зависаний.",
      "example": "Лимит с измеренным запасом для suite на 5 минут."
    },
    "en": {
      "answer": "Base it on normal runtime and external waits while preventing hangs.",
      "example": "Use measured headroom for a five-minute suite."
    }
  },
  "automation-middle-25": {
    "uz": {
      "answer": "Container host kernel’ini bo‘lishadi; VM odatda alohida guest OS ishlatadi.",
      "example": "Docker’dagi test runner va to‘liq Android VM."
    },
    "ru": {
      "answer": "Container разделяет kernel host, VM обычно имеет guest OS.",
      "example": "Runner в Docker и полноценная Android VM."
    },
    "en": {
      "answer": "Containers share a host kernel; VMs typically run a guest OS.",
      "example": "A runner in Docker versus a full Android VM."
    }
  },
  "automation-middle-26": {
    "uz": {
      "answer": "Ruxsatli remote tizimda shell va diagnostika uchun shifrlangan aloqa beradi.",
      "example": "Test server logini remote shell’da ko‘ramiz."
    },
    "ru": {
      "answer": "Даёт защищённый доступ к shell и диагностике разрешённой системы.",
      "example": "Смотрим log тестового сервера в remote shell."
    },
    "en": {
      "answer": "Provides encrypted shell/diagnostic access to an authorized remote system.",
      "example": "Inspect a test server log over a remote shell."
    }
  },
  "automation-middle-27": {
    "uz": {
      "answer": "Vaqt, request id va error bilan filtrlab, atrofdagi voqealarni tekshiramiz.",
      "example": "Bir order id’si bo‘yicha API va worker loglarini bog‘laymiz."
    },
    "ru": {
      "answer": "Фильтруем по времени, request id и error, смотрим контекст.",
      "example": "Связываем API и worker по order id."
    },
    "en": {
      "answer": "Filter by time, request ID and errors, then inspect context.",
      "example": "Correlate API and worker logs using an order ID."
    }
  },
  "automation-middle-28": {
    "uz": {
      "answer": "Muhit konfiguratsiyasi kutilganidan farqlanib ketishi testlarni chalg‘itadi.",
      "example": "Test bazada boshqa feature flag qolib ketgan."
    },
    "ru": {
      "answer": "Отклонение конфигурации от ожидаемой может искажать результаты.",
      "example": "В тестовой базе остался другой feature flag."
    },
    "en": {
      "answer": "Configuration diverges from its intended state and distorts test results.",
      "example": "A test environment retained an unexpected feature flag."
    }
  },
  "automation-middle-29": {
    "uz": {
      "answer": "Aniq mas’uliyat va bog‘liqlik chegaralari o‘zgarishni lokal qiladi; ortiqcha qatlam shart emas.",
      "example": "API klienti assertion hisobotini boshqarmaydi."
    },
    "ru": {
      "answer": "Ясные обязанности и зависимости локализуют изменения; лишние слои не нужны.",
      "example": "API client не управляет assertion-отчётом."
    },
    "en": {
      "answer": "Clear responsibilities and dependencies localize changes without unnecessary layers.",
      "example": "An API client does not own assertion reporting."
    }
  },
  "automation-middle-30": {
    "uz": {
      "answer": "Tashqi bog‘liqlikni almashtirish va kerakli holatni boshqarish imkonini beradi.",
      "example": "Real soat o‘rniga test soatini beramiz."
    },
    "ru": {
      "answer": "Позволяет заменить внешнюю зависимость и управлять условиями.",
      "example": "Передаём тестовые часы вместо реальных."
    },
    "en": {
      "answer": "Allows substituting external dependencies and controlling conditions.",
      "example": "Inject a test clock instead of the real clock."
    }
  },
  "automation-middle-31": {
    "uz": {
      "answer": "Helper tayyorlash/amalni bajaradi; test kutilgan biznes natijani ochiq tekshiradi.",
      "example": "createOrder yordamchi, summa tengligi esa testda."
    },
    "ru": {
      "answer": "Helper готовит/действует; тест явно проверяет бизнес-результат.",
      "example": "createOrder helper, равенство суммы проверяется в тесте."
    },
    "en": {
      "answer": "Helpers prepare or act; tests explicitly assert business outcomes.",
      "example": "createOrder is a helper; the total assertion stays in the test."
    }
  },
  "automation-middle-32": {
    "uz": {
      "answer": "Bitta element talab qiladigan amal ko‘p moslik topsa yiqiladi; locatorni aniqlashtiramiz.",
      "example": "Ikki “Saqlash” tugmasidan kerakli formadagisini tanlash."
    },
    "ru": {
      "answer": "Операция для одного элемента падает при нескольких совпадениях; уточняем locator.",
      "example": "Выбрать «Сохранить» внутри нужной формы."
    },
    "en": {
      "answer": "Single-element operations fail on multiple matches; refine the locator.",
      "example": "Choose Save within the intended form."
    }
  },
  "automation-middle-33": {
    "uz": {
      "answer": "So‘rovni boshlaydigan navigation yoki action’dan oldin o‘rnatamiz.",
      "example": "Sahifa ochilishidan oldin products javobini tayyorlash."
    },
    "ru": {
      "answer": "До navigation/action, запускающего запрос.",
      "example": "Mock products до открытия страницы."
    },
    "en": {
      "answer": "Before the navigation or action that triggers the request.",
      "example": "Mock products before opening the page."
    }
  },
  "automation-middle-34": {
    "uz": {
      "answer": "Test soati bilan vaqtni boshqarib, belgilangan chegara va natijani tekshiramiz.",
      "example": "OTP muddati tugashini real daqiqa kutmasdan tekshirish."
    },
    "ru": {
      "answer": "Управляем временем тестовыми часами, проверяем границу и результат.",
      "example": "Проверить истечение OTP без реального ожидания."
    },
    "en": {
      "answer": "Control time with a test clock and check boundaries/outcomes.",
      "example": "Check OTP expiry without waiting real minutes."
    }
  },
  "automation-middle-35": {
    "uz": {
      "answer": "Muhitni barqaror qilib, farqni review’dan so‘ng tasdiqlaymiz; avtomatik ko‘r-ko‘rona yangilamaymiz.",
      "example": "Matn kesilishini yangi baseline deb qabul qilmaymiz."
    },
    "ru": {
      "answer": "Стабилизируем среду и подтверждаем diff после review, не обновляем вслепую.",
      "example": "Обрезанный текст не принимаем как новый baseline."
    },
    "en": {
      "answer": "Stabilize the environment and approve changes after review, not blindly.",
      "example": "Do not approve clipped text as a new baseline."
    }
  },
  "automation-middle-36": {
    "uz": {
      "answer": "Hover, klaviatura kombinatsiyasi va murakkab pointer amallarini tuzish uchun.",
      "example": "Hover bilan menyu ochib band tanlaymiz."
    },
    "ru": {
      "answer": "Для hover, комбинаций клавиш и сложных pointer-действий.",
      "example": "Через hover открываем меню и выбираем пункт."
    },
    "en": {
      "answer": "For hover, key combinations and complex pointer interactions.",
      "example": "Hover to open a menu and choose an item."
    }
  },
  "automation-middle-37": {
    "uz": {
      "answer": "Zarur diagnostika yoki standart API yetmagan amalda; real foydalanuvchi oqimini chetlab o‘tishini hisobga olamiz.",
      "example": "DOM qiymatini o‘qiymiz; yashirin tugmani majburan bosib pass qilmaymiz."
    },
    "ru": {
      "answer": "Для диагностики/недостающих API, учитывая обход реального пользовательского поведения.",
      "example": "Читаем DOM; не делаем pass принудительным click скрытой кнопки."
    },
    "en": {
      "answer": "Use for diagnostics or missing capabilities, considering bypassed user behavior.",
      "example": "Inspect the DOM without forcing a hidden-button click to make a test pass."
    }
  },
  "automation-middle-38": {
    "uz": {
      "answer": "Session uchun browser, versiya va platforma talablari hamda browser sozlamalarini beradi.",
      "example": "Headless mode va download papkasini sozlash."
    },
    "ru": {
      "answer": "Задают требования browser/версии/платформы и настройки session.",
      "example": "Настройка headless и папки download."
    },
    "en": {
      "answer": "Specify browser/version/platform requirements and session/browser settings.",
      "example": "Configure headless mode and a download directory."
    }
  },
  "automation-middle-39": {
    "uz": {
      "answer": "Shadow root orqali ichki elementni topamiz; oddiy tashqi locator ichkariga o‘tmasligi mumkin.",
      "example": "Web component ichidagi input’ni root orqali olish."
    },
    "ru": {
      "answer": "Получаем shadow root и ищем внутри; внешний locator может не проходить границу.",
      "example": "Получить input компонента через root."
    },
    "en": {
      "answer": "Access the shadow root and locate within it; ordinary selectors may not cross the boundary.",
      "example": "Find a component's input through its shadow root."
    }
  },
  "automation-middle-40": {
    "uz": {
      "answer": "Testlarni tasniflash va kerakli guruhni tanlash uchun.",
      "example": "smoke marker’i bilan tez suite’ni ishga tushirish."
    },
    "ru": {
      "answer": "Для классификации и выбора групп тестов.",
      "example": "Запуск быстрой suite по marker smoke."
    },
    "en": {
      "answer": "To classify and select test groups.",
      "example": "Run a fast suite using a smoke marker."
    }
  },
  "automation-middle-41": {
    "uz": {
      "answer": "Shallow tashqi nusxa yaratib, ichki obyektlarni bo‘lishishi mumkin; deep ichki tuzilmani ham nusxalaydi.",
      "example": "Ichki list’ni o‘zgartirish shallow nusxaga ham ta’sir qiladi."
    },
    "ru": {
      "answer": "Shallow может разделять вложенные объекты, deep копирует вложенную структуру.",
      "example": "Изменение вложенного list влияет на shallow копию."
    },
    "en": {
      "answer": "Shallow copies may share nested objects; deep copies copy nested structures.",
      "example": "Changing a nested list can affect a shallow copy."
    }
  },
  "automation-middle-42": {
    "uz": {
      "answer": "Har thread uchun alohida qiymat saqlaydi; lifecycle va remove’ni baribir boshqaramiz.",
      "example": "Parallel threadlar o‘z driver session’idan foydalanadi."
    },
    "ru": {
      "answer": "Хранит отдельное значение на thread; lifecycle и remove всё равно управляются.",
      "example": "Параллельные threads используют свои sessions."
    },
    "en": {
      "answer": "Stores one value per thread; lifecycle and removal still require management.",
      "example": "Parallel threads use their own driver sessions."
    }
  },
  "automation-middle-43": {
    "uz": {
      "answer": "Obyektlarda == reference’ni, equals esa realizatsiyasiga ko‘ra tenglikni tekshiradi.",
      "example": "Ikki String matni equals bilan solishtiriladi."
    },
    "ru": {
      "answer": "Для объектов == сравнивает references, equals равенство по реализации.",
      "example": "Текст двух String сравнивают через equals."
    },
    "en": {
      "answer": "For objects, == checks references; equals checks implementation-defined equality.",
      "example": "Compare two String contents using equals."
    }
  },
  "automation-middle-44": {
    "uz": {
      "answer": "Natija Promise’i rad etiladi, ammo boshlangan boshqa amallar avtomatik bekor qilinmaydi.",
      "example": "Uch request’dan biri yiqilsa ham boshqalari saqlashni tugatishi mumkin."
    },
    "ru": {
      "answer": "Итоговый Promise отклоняется, остальные начатые операции автоматически не отменяются.",
      "example": "Другие requests могут завершить сохранение несмотря на один сбой."
    },
    "en": {
      "answer": "The aggregate rejects, but other started operations are not automatically canceled.",
      "example": "Other requests may finish saving after one request fails."
    }
  },
  "manual-senior-13": {
    "uz": {
      "answer": "Scope, risk, bog‘liqlik va taxminlarni ajratib, oraliq baho va noaniqlikni ko‘rsatamiz.",
      "example": "Yangi integratsiya tayyor bo‘lmasa, alohida vaqt zaxirasi."
    },
    "ru": {
      "answer": "Разделяем scope, риски, зависимости и допущения, показываем диапазон и неопределённость.",
      "example": "Резерв на неготовую интеграцию выделяется отдельно."
    },
    "en": {
      "answer": "Separate scope, risks, dependencies and assumptions; present a range and uncertainty.",
      "example": "Show separate contingency for an unfinished integration."
    }
  },
  "manual-senior-14": {
    "uz": {
      "answer": "Yangi ish, regression, incident va texnik qarzni real mavjud vaqtga solishtiramiz.",
      "example": "Release haftasida incident zaxirasini ham ajratamiz."
    },
    "ru": {
      "answer": "Сопоставляем новые задачи, regression, incidents и долг с доступным временем.",
      "example": "В неделю релиза оставляем резерв на incidents."
    },
    "en": {
      "answer": "Compare new work, regression, incidents and debt against available time.",
      "example": "Reserve capacity for incidents during release week."
    }
  },
  "manual-senior-15": {
    "uz": {
      "answer": "Jamoa bilan tekshiriladigan umumiy mezonlarni kelishamiz; faqat QA tasdig‘i bilan cheklanmaymiz.",
      "example": "Review, testlar va monitoring tayyorligi Done shartidir."
    },
    "ru": {
      "answer": "Согласуем проверяемые критерии команды, не ограничиваясь подписью QA.",
      "example": "Review, тесты и monitoring входят в Done."
    },
    "en": {
      "answer": "Agree verifiable team criteria beyond simply requiring QA sign-off.",
      "example": "Review, checks and monitoring readiness belong in Done."
    }
  },
  "manual-senior-16": {
    "uz": {
      "answer": "Exit criteria va qolgan riskni baholaymiz; barcha buglar tugashi mumkin emas.",
      "example": "Muhim oqimlar tasdiq, kichik risklar egasi bilan qabul qilingan."
    },
    "ru": {
      "answer": "Оцениваем exit criteria и остаточный риск; все дефекты не обязаны исчезнуть.",
      "example": "Ключевые пути подтверждены, остаточные риски приняты владельцем."
    },
    "en": {
      "answer": "Assess exit criteria and residual risk; eliminating every defect is not realistic.",
      "example": "Core journeys verified and residual risks accepted by their owners."
    }
  },
  "manual-senior-17": {
    "uz": {
      "answer": "Qarz ta’siri, tez-tezligi va riskini ko‘rsatib, mahsulot ishiga yonma-yon ustuvorlik beramiz.",
      "example": "Ko‘p yiqiladigan testni yangi rang feature’dan oldin tuzatish."
    },
    "ru": {
      "answer": "Оцениваем влияние, частоту и риск долга, приоритизируем вместе с продуктом.",
      "example": "Часто падающий тест чинят до новой цветовой функции."
    },
    "en": {
      "answer": "Assess impact, frequency and risk, then prioritize debt alongside product work.",
      "example": "Repair a frequently failing check before a cosmetic feature."
    }
  },
  "manual-senior-18": {
    "uz": {
      "answer": "BDD biznes va texnik jamoa xulq misollarini birga aniqlaganda foydali. Faqat Gherkin yozish yoki texnik detallarni ko‘paytirish overhead bo‘lishi mumkin. UI/API tanlovi xulq tekshiriladigan eng arzon ishonchli qatlamga bog‘liq.",
      "example": "Chegirma qoidasini API’da, foydalanuvchining asosiy checkout oqimini UI’da tekshirish mumkin."
    },
    "ru": {
      "answer": "BDD полезен для совместного уточнения поведения. Один Gherkin или технические детали создают overhead; UI/API выбираем по самому дешёвому надёжному слою проверки поведения.",
      "example": "Правило скидки можно проверить в API, основной checkout пользователя — в UI."
    },
    "en": {
      "answer": "BDD helps business and technical teams clarify behavior together. Gherkin alone or excessive technical detail can add overhead; choose UI/API at the cheapest reliable layer that verifies the behavior.",
      "example": "Check a discount rule through an API and the main user checkout flow through the UI."
    }
  },
  "manual-senior-19": {
    "uz": {
      "answer": "Biznes riskini kamaytirish va qaror uchun dalilni xarajat/foyda bilan ko‘rsatamiz.",
      "example": "Ikki marta to‘lovning oldini olish mijoz ishonchini saqlaydi."
    },
    "ru": {
      "answer": "Показываем снижение бизнес-риска и доказательства для решений с затратами/выгодой.",
      "example": "Предотвращение двойной оплаты сохраняет доверие."
    },
    "en": {
      "answer": "Explain reduced business risk and decision evidence in cost/benefit terms.",
      "example": "Preventing duplicate payments protects customer trust."
    }
  },
  "manual-senior-20": {
    "uz": {
      "answer": "Foydalanuvchi oqimi, stakeholder va tizim dalilidan boshlaymiz; noaniq qoidalarni kelishib yozamiz.",
      "example": "Checkout’ni kuzatib, narx qoidalarini product bilan tasdiqlash."
    },
    "ru": {
      "answer": "Начинаем с путей пользователей, stakeholder и системы, согласуем неясные правила.",
      "example": "Наблюдать checkout и подтвердить правила цен с product."
    },
    "en": {
      "answer": "Start with user journeys, stakeholders and system evidence; agree uncertain rules.",
      "example": "Observe checkout and confirm pricing rules with product."
    }
  },
  "manual-senior-21": {
    "uz": {
      "answer": "Talab, build, muhit, natija va qarorni izchil bog‘laymiz; kirish va saqlash muddatini belgilaymiz.",
      "example": "Bir release test natijasi aynan uning build id’siga bog‘lanadi."
    },
    "ru": {
      "answer": "Связываем требование, build, среду, результат и решение; задаём доступ и срок хранения.",
      "example": "Результат релиза связан с его build id."
    },
    "en": {
      "answer": "Link requirements, builds, environments, results and decisions with access and retention rules.",
      "example": "A release result links to its exact build ID."
    }
  },
  "manual-senior-22": {
    "uz": {
      "answer": "Arxitektura, risk, mijoz ishlatishi yoki incident dalili o‘zgarganda.",
      "example": "Monolit servisga bo‘linsa, contract tekshiruvlari kuchayadi."
    },
    "ru": {
      "answer": "При изменении архитектуры, рисков, использования или данных incidents.",
      "example": "После разделения монолита усиливают contract проверки."
    },
    "en": {
      "answer": "When architecture, risks, usage or incident evidence changes.",
      "example": "Splitting a monolith increases the need for contract checks."
    }
  },
  "manual-senior-23": {
    "uz": {
      "answer": "Qisman muvaffaqiyat, retry, compensation va yakuniy izchillikni tekshiramiz.",
      "example": "To‘lov o‘tdi, zaxira band bo‘lmadi: refund oqimi."
    },
    "ru": {
      "answer": "Проверяем частичный успех, retry, compensation и итоговую согласованность.",
      "example": "Оплата прошла, резерв не создан: проверка refund."
    },
    "en": {
      "answer": "Check partial success, retries, compensation and eventual consistency.",
      "example": "Payment succeeds but reservation fails: verify the refund path."
    }
  },
  "manual-senior-24": {
    "uz": {
      "answer": "Ruxsat etilgan kechikish va yakuniy invariantni kelishib, belgilangan muddat ichida tekshiramiz.",
      "example": "Order yozildi; qidiruv indeksi 5 soniyagacha yangilanadi."
    },
    "ru": {
      "answer": "Согласуем задержку и конечный invariant, проверяем в пределах срока.",
      "example": "Order создан; индекс обновляется до 5 секунд."
    },
    "en": {
      "answer": "Agree allowed delay and final invariants, checking within the time bound.",
      "example": "A new order must appear in the search index within five seconds."
    }
  },
  "manual-senior-25": {
    "uz": {
      "answer": "Nazoratli test muhitida timeout, xato va qisman javoblarni kiritib, fallback va tiklanishni tekshiramiz.",
      "example": "Narx servisi ishlamasa, eski narx siyosatga mos ko‘rsatiladi."
    },
    "ru": {
      "answer": "В контролируемой среде вводим timeout, ошибки и частичные ответы, проверяем fallback/восстановление.",
      "example": "При отказе цены fallback соответствует политике."
    },
    "en": {
      "answer": "Inject timeouts, errors and partial responses in a controlled environment; check fallback/recovery.",
      "example": "A pricing failure follows the specified fallback policy."
    }
  },
  "manual-senior-26": {
    "uz": {
      "answer": "Qo‘llab-quvvatlangan consumer versiyalari va shartnomalar bo‘yicha dalil talab qilamiz.",
      "example": "Eski mobil build yangi API’da checkout qila oladi."
    },
    "ru": {
      "answer": "Требуем доказательства для поддерживаемых версий consumer и контрактов.",
      "example": "Старый mobile build выполняет checkout с новым API."
    },
    "en": {
      "answer": "Require evidence across supported consumer versions and contracts.",
      "example": "An older supported mobile build can checkout against the new API."
    }
  },
  "manual-senior-27": {
    "uz": {
      "answer": "Biznes invariant, transaction isolation va constraint’larni parallel amallar bilan tekshiramiz.",
      "example": "Oxirgi mahsulotni ikki xaridor birga sotib ololmaydi."
    },
    "ru": {
      "answer": "Проверяем invariants, isolation и constraints параллельными действиями.",
      "example": "Два покупателя не могут купить последний товар."
    },
    "en": {
      "answer": "Check business invariants, isolation and constraints under concurrent operations.",
      "example": "Two buyers must not both purchase the last item."
    }
  },
  "manual-senior-28": {
    "uz": {
      "answer": "Eski/yangi kod mosligi, bosqichli schema o‘zgarishi va rollback chegaralarini tekshiramiz.",
      "example": "Ustun qo‘shilib, eski build ishlashda davom etadi."
    },
    "ru": {
      "answer": "Проверяем совместимость старого/нового кода, этапы schema и ограничения rollback.",
      "example": "После добавления столбца старый build работает."
    },
    "en": {
      "answer": "Check old/new code compatibility, staged schema changes and rollback limits.",
      "example": "Adding a column must leave the old build operational."
    }
  },
  "manual-senior-29": {
    "uz": {
      "answer": "Yozilgan ma’lumot o‘qishda vaqtincha ko‘rinmasligi mumkin; read-after-write talabini tekshiramiz.",
      "example": "Profil saqlandi, replica’dan eski ism qaytdi."
    },
    "ru": {
      "answer": "Новая запись может временно не читаться; проверяем read-after-write требования.",
      "example": "Профиль сохранён, replica вернула старое имя."
    },
    "en": {
      "answer": "New writes may not immediately appear in reads; verify read-after-write requirements.",
      "example": "A saved profile read from a replica returns its old name."
    }
  },
  "manual-senior-30": {
    "uz": {
      "answer": "Foydalanish, OS qo‘llovi, apparat va yuqori risk oqimlariga asoslaymiz.",
      "example": "Ko‘p ishlatiladigan arzon Android’da ham to‘lov tekshiriladi."
    },
    "ru": {
      "answer": "По использованию, поддержке OS, аппаратуре и критичным сценариям.",
      "example": "Оплата проверяется и на популярном бюджетном Android."
    },
    "en": {
      "answer": "Base it on usage, supported OS versions, hardware and high-risk flows.",
      "example": "Include payment checks on popular budget Android devices."
    }
  },
  "manual-senior-31": {
    "uz": {
      "answer": "Bosqichli chiqarish, crash, asosiy oqimlar va qaytarish/tez tuzatish imkonini kuzatamiz.",
      "example": "Crash oshsa, tarqatishni to‘xtatish mezoni ishlaydi."
    },
    "ru": {
      "answer": "Следим за staged rollout, crashes, ключевыми путями и вариантами восстановления.",
      "example": "Рост crash включает критерий остановки rollout."
    },
    "en": {
      "answer": "Monitor staged rollout, crashes, critical journeys and recovery/hotfix options.",
      "example": "A crash increase triggers the rollout stop criterion."
    }
  },
  "manual-senior-32": {
    "uz": {
      "answer": "Bir resursning ikki nusxasi o‘zgarganda kelishilgan konflikt qoidasini tekshiramiz.",
      "example": "Ikki qurilma bir draft’ni tahrirlaydi; jim yo‘qotish bo‘lmaydi."
    },
    "ru": {
      "answer": "При двух изменённых копиях проверяем согласованное разрешение конфликта.",
      "example": "Два устройства меняют draft без тихой потери данных."
    },
    "en": {
      "answer": "Check the agreed conflict policy when two copies of one resource change.",
      "example": "Two devices edit one draft without silent data loss."
    }
  },
  "manual-senior-33": {
    "uz": {
      "answer": "Real yuklama va muhitda latency, error rate va quvvat limitlarini biznes bilan kelishamiz.",
      "example": "p95 va xato foizi ikkalasi ham mezonga mos."
    },
    "ru": {
      "answer": "Согласуем latency, error rate и capacity на реалистичной нагрузке/среде.",
      "example": "p95 и доля ошибок соответствуют обоим критериям."
    },
    "en": {
      "answer": "Agree latency, error rate and capacity limits under realistic workload/environment.",
      "example": "Both p95 latency and error rate meet their limits."
    }
  },
  "manual-senior-34": {
    "uz": {
      "answer": "Yuklama oshish/pasayishida scale, kechikish, state va xarajatni kuzatamiz.",
      "example": "Node qo‘shilganda foydalanuvchi sessiyasi yo‘qolmaydi."
    },
    "ru": {
      "answer": "При росте/спаде нагрузки проверяем scale, задержку, state и стоимость.",
      "example": "Добавление node не теряет сессию."
    },
    "en": {
      "answer": "Observe scaling, delay, state and cost as load rises and falls.",
      "example": "Adding a node must not lose user sessions."
    }
  },
  "manual-senior-35": {
    "uz": {
      "answer": "Hozirgi/kelajak yuklama, bottleneck va o‘lchangan xavfsiz quvvat kerak.",
      "example": "Kampaniya ikki baravar trafik keltirsa, zaxira o‘lchanadi."
    },
    "ru": {
      "answer": "Нужны текущая/будущая нагрузка, bottleneck и измеренная безопасная capacity.",
      "example": "Для удвоения трафика измеряют запас capacity."
    },
    "en": {
      "answer": "Use current/projected traffic, bottlenecks and measured safe capacity.",
      "example": "Measure headroom for a campaign doubling traffic."
    }
  },
  "manual-senior-36": {
    "uz": {
      "answer": "Aktiv, kirish chegarasi va tahdidlarni aniqlab, riskka mos tekshiruv tanlaymiz.",
      "example": "To‘lov tasdig‘ini kim o‘zgartira olishi tahlil qilinadi."
    },
    "ru": {
      "answer": "Выявляем assets, границы доверия и угрозы для риск-ориентированных проверок.",
      "example": "Анализируем, кто может менять подтверждение оплаты."
    },
    "en": {
      "answer": "Identify assets, trust boundaries and threats to select risk-based checks.",
      "example": "Analyze who can modify a payment confirmation."
    }
  },
  "manual-senior-37": {
    "uz": {
      "answer": "Mahsulot arxitekturasiga mos risklarni tanlab, ruxsatli muhitda tekshiruv va mas’uliyat belgilaymiz.",
      "example": "Resursga egalik tekshiruvi API suite’ga kiritiladi."
    },
    "ru": {
      "answer": "Выбираем применимые риски, задаём проверки и владельцев в разрешённой среде.",
      "example": "Проверка владения ресурсом входит в API suite."
    },
    "en": {
      "answer": "Select applicable risks and assign checks/owners in an authorized environment.",
      "example": "Include resource ownership checks in the API suite."
    }
  },
  "manual-senior-38": {
    "uz": {
      "answer": "Kelishilgan siyosatga ko‘ra rozilik, foydalanish, saqlash va o‘chirish izlarini tekshiramiz.",
      "example": "Rozilik qaytarilganda yangi yig‘ish to‘xtaydi, o‘chirish oqimi bajariladi."
    },
    "ru": {
      "answer": "По согласованной политике проверяем согласие, использование, хранение и удаление.",
      "example": "Отзыв consent прекращает сбор и запускает согласованное удаление."
    },
    "en": {
      "answer": "Verify consent, usage, retention and deletion against the agreed policy.",
      "example": "Withdrawal stops new collection and follows the agreed deletion flow."
    }
  },
  "manual-senior-39": {
    "uz": {
      "answer": "Kritik oqim va incidentlardan boshlaymiz, qisqa checklist va avtomatlashtirishni bosqichlaymiz.",
      "example": "Avval to‘lov xaritasi, keyin kam ishlatiladigan hisobot."
    },
    "ru": {
      "answer": "Начинаем с критичных путей/incidents, постепенно добавляем чек-листы и автоматизацию.",
      "example": "Сначала карта платежей, потом редкие отчёты."
    },
    "en": {
      "answer": "Start with critical journeys/incidents, gradually add checklists and automation.",
      "example": "Document payments before rare reports."
    }
  },
  "manual-senior-40": {
    "uz": {
      "answer": "Kirish, uzatilgan request, backend hisob va UI chiqarishni bosqichma-bosqich solishtiramiz.",
      "example": "API 2 qaytarib UI 3 chiqarsa, render/mantiqni tekshiramiz."
    },
    "ru": {
      "answer": "Сравниваем ввод, request, расчёт backend и отображение UI по этапам.",
      "example": "API вернул 2, UI показывает 3 — проверяем вывод."
    },
    "en": {
      "answer": "Compare input, request, backend calculation and UI output step by step.",
      "example": "If API returns 2 but UI shows 3, investigate rendering/logic."
    }
  },
  "manual-senior-41": {
    "uz": {
      "answer": "Bugni tasdiqlab, takrorlash qadami va ta’sirini yozamiz, darhol release egasi va jamoaga yetkazamiz. Fix va retest, kechiktirish, feature’ni o‘chirish yoki rollback qarorini birga baholaymiz; QA yakka qaror qilmaydi.",
      "example": "Yangi to‘lov flag’i o‘chirilib, xavfsiz eski oqim tekshiriladi."
    },
    "ru": {
      "answer": "Подтверждаем баг, фиксируем воспроизведение и влияние, сразу сообщаем release owner и команде. Оцениваем fix/retest, перенос, отключение функции или rollback; QA не решает единолично.",
      "example": "Новый payment flag выключают и проверяют старый путь."
    },
    "en": {
      "answer": "Confirm the defect, record reproduction and impact, and promptly notify the release owner and team. Assess fixing/retesting, delaying, disabling the feature or rolling back; QA does not decide alone.",
      "example": "Disable the new payment flag and verify the safe older flow."
    }
  },
  "automation-senior-13": {
    "uz": {
      "answer": "Suite, muhit, ma’lumot va incidentlar uchun aniq egalar hamda xizmat chegaralarini belgilaymiz.",
      "example": "Platforma runner’ni, mahsulot jamoasi assertion’larni boshqaradi."
    },
    "ru": {
      "answer": "Определяем владельцев suite, среды, данных и incidents, границы поддержки.",
      "example": "Платформа поддерживает runner, продуктовая команда assertions."
    },
    "en": {
      "answer": "Define owners for suites, environments, data and incidents with support boundaries.",
      "example": "The platform owns runners; product teams own assertions."
    }
  },
  "automation-senior-14": {
    "uz": {
      "answer": "Kichik umumiy fixture/config va locator siyosatini berib, mahsulot testini jamoada qoldiramiz.",
      "example": "Barcha jamoa bir xil trace siyosati bilan ishlaydi."
    },
    "ru": {
      "answer": "Даём общие fixture/config и правила локаторов, продуктовые тесты остаются командам.",
      "example": "Команды используют общую политику trace."
    },
    "en": {
      "answer": "Provide small shared fixtures/config and locator policies; product teams retain their tests.",
      "example": "Teams share a trace retention policy."
    }
  },
  "automation-senior-15": {
    "uz": {
      "answer": "Session, node va browser loglarini tekshirib, infra va mahsulot xatosini alohida belgilaymiz.",
      "example": "Session yaratilmagan bo‘lsa, checkout bug deb yozmaymiz."
    },
    "ru": {
      "answer": "По session/node/browser logs отделяем infrastructure от продукта.",
      "example": "Если session не создана, это не checkout bug."
    },
    "en": {
      "answer": "Use session, node and browser logs to classify infrastructure versus product failures.",
      "example": "A failed session creation is not a checkout defect."
    }
  },
  "automation-senior-16": {
    "uz": {
      "answer": "Qo‘llanadigan versiya matritsasi, barqaror hook/fixture contract va migratsiya yo‘lini tekshiramiz.",
      "example": "Yangi plugin eski user fixture’ini jim buzmaydi."
    },
    "ru": {
      "answer": "Проверяем matrix версий, стабильные hook/fixture contracts и миграцию.",
      "example": "Новый plugin не ломает старую user fixture незаметно."
    },
    "en": {
      "answer": "Verify supported versions, stable hook/fixture contracts and migration paths.",
      "example": "A plugin upgrade must not silently break an existing user fixture."
    }
  },
  "automation-senior-17": {
    "uz": {
      "answer": "Resource lifecycle va scope aniq, umumiy state minimal, failure/cleanup mustaqil bo‘ladi.",
      "example": "Bir suite yiqilishi boshqa worker driver’ini yopmaydi."
    },
    "ru": {
      "answer": "Ясные lifecycle/scope, минимум общего state, независимые failure/cleanup.",
      "example": "Сбой suite не закрывает driver другого worker."
    },
    "en": {
      "answer": "Define lifecycle/scope, minimize shared state and isolate failures/cleanup.",
      "example": "One suite's failure does not close another worker's driver."
    }
  },
  "automation-senior-18": {
    "uz": {
      "answer": "Async kutishlarni boshqaradi, sinxron CPU ishini avtomatik parallel qilmaydi; worker alohida ijro beradi.",
      "example": "Og‘ir parsing event loop’ni band qilsa, worker variantini o‘lchaymiz."
    },
    "ru": {
      "answer": "Async управляет ожиданием, не распараллеливает синхронный CPU; worker даёт отдельное выполнение.",
      "example": "При тяжёлом parsing оцениваем worker."
    },
    "en": {
      "answer": "Async manages waiting, not automatic CPU parallelism; workers provide separate execution.",
      "example": "Evaluate a worker for parsing that blocks the event loop."
    }
  },
  "automation-senior-19": {
    "uz": {
      "answer": "Xavfli failure release’ni to‘xtatadi; infra/flaky holatlar ham egasi va dalil bilan ko‘rinadi.",
      "example": "Checkout assertion yiqilsa, retry yashirmaydi va gate yopiladi."
    },
    "ru": {
      "answer": "Опасные failures блокируют релиз; infra/flaky остаются видимыми с владельцем и данными.",
      "example": "Сбой checkout assertion не скрывается retry и блокирует gate."
    },
    "en": {
      "answer": "High-risk failures block release; infra/flaky results remain visible with owners and evidence.",
      "example": "A checkout assertion failure is not hidden by retry and blocks the gate."
    }
  },
  "manual-junior-98": {
    "uz": {
      "answer": "Bottom-up quyi qismlardan, top-down yuqoridan boshlaydi; big-bang hammasini birga ulaydi, sababni ajratish qiyinroq.",
      "example": "Top-down’da tayyor bo‘lmagan servis stub bilan almashtiriladi."
    },
    "ru": {
      "answer": "Bottom-up начинает снизу, top-down сверху, big-bang соединяет всё сразу и усложняет диагностику.",
      "example": "В top-down неготовый сервис заменяет stub."
    },
    "en": {
      "answer": "Bottom-up starts low, top-down high; big-bang combines everything and makes diagnosis harder.",
      "example": "A top-down check can replace an unfinished service with a stub."
    }
  },
  "manual-junior-99": {
    "uz": {
      "answer": "Mahsulot dizayni, platforma qoidalari, accessibility va izchillik mezonlariga tayanamiz.",
      "example": "Bir xil amal tugmalari bir xil nom va holatga ega."
    },
    "ru": {
      "answer": "Опираемся на дизайн продукта, правила платформы, accessibility и согласованность.",
      "example": "Одинаковые действия имеют одинаковые названия и состояния."
    },
    "en": {
      "answer": "Use product design, platform guidelines, accessibility and consistency criteria.",
      "example": "Equivalent action buttons have consistent names and states."
    }
  },
  "manual-junior-100": {
    "uz": {
      "answer": "Ruxsatli muhitda ma’lumot, kirish va amallarni ruxsatsiz foydalanishdan himoyalashni tekshiradi.",
      "example": "Oddiy foydalanuvchi boshqaning buyurtmasini o‘zgartira olmaydi."
    },
    "ru": {
      "answer": "В разрешённой среде проверяет защиту данных, доступа и действий.",
      "example": "Пользователь не меняет чужой заказ."
    },
    "en": {
      "answer": "Checks protection of data, access and actions in an authorized environment.",
      "example": "A regular user cannot modify another user's order."
    }
  },
  "manual-junior-101": {
    "uz": {
      "answer": "Ehtimol va ta’sirga qarab tekshiruvlar ustuvorligini belgilash.",
      "example": "To‘lov xatosi riskini fon rangidan oldin tekshiramiz."
    },
    "ru": {
      "answer": "Приоритизация проверок по вероятности и влиянию риска.",
      "example": "Оплату проверяем раньше цвета фона."
    },
    "en": {
      "answer": "Prioritize checks by risk likelihood and impact.",
      "example": "Check payment risks before background colors."
    }
  },
  "manual-junior-102": {
    "uz": {
      "answer": "Reja kerak, shakli ko‘lamga mos bo‘lishi mumkin. O‘zgargan risk va scope bilan yangilanadi.",
      "example": "Kichik feature uchun qisqa checklist va muhit kelishuvi yetishi mumkin."
    },
    "ru": {
      "answer": "План нужен, форма зависит от масштаба; обновляем scope и риски.",
      "example": "Для небольшой функции хватит краткого плана и среды."
    },
    "en": {
      "answer": "Planning matters; format depends on scale. Update it with scope and risk changes.",
      "example": "A small feature may use a short plan and environment agreement."
    }
  },
  "automation-junior-39": {
    "uz": {
      "answer": "Factory yaratishni, Strategy variantli xulqni, Builder murakkab obyekt tayyorlashni ajratadi.",
      "example": "Builder bilan turli test buyurtmalari tuzamiz."
    },
    "ru": {
      "answer": "Factory отделяет создание, Strategy поведение, Builder сборку сложных объектов.",
      "example": "Builder создаёт разные тестовые заказы."
    },
    "en": {
      "answer": "Factory separates creation, Strategy alternate behavior, Builder complex object construction.",
      "example": "Use a Builder to create different test orders."
    }
  },
  "automation-junior-40": {
    "uz": {
      "answer": "Page Object — dizayn yondashuvi; PageFactory — element maydonlarini yaratishga yordam beradigan Selenium yordamchisi.",
      "example": "PageFactory ishlatmasdan ham LoginPage yaratish mumkin."
    },
    "ru": {
      "answer": "Page Object — подход, PageFactory — helper Selenium для инициализации полей элементов.",
      "example": "LoginPage можно создать без PageFactory."
    },
    "en": {
      "answer": "Page Object is a design pattern; PageFactory is a Selenium helper for initializing element fields.",
      "example": "A LoginPage can exist without PageFactory."
    }
  },
  "automation-junior-41": {
    "uz": {
      "answer": "NoSuchElement — topilmadi; Timeout — shart kelmadi; Stale — eski element; ClickIntercepted — bosishni to‘siq yopdi.",
      "example": "Modal yopgan tugma uchun locatorni emas, to‘siqni tekshiramiz."
    },
    "ru": {
      "answer": "NoSuchElement — не найден; Timeout — условие не наступило; Stale — старый элемент; ClickIntercepted — перекрытие.",
      "example": "При перекрытии modal проверяем препятствие."
    },
    "en": {
      "answer": "NoSuchElement means missing, Timeout unmet condition, Stale outdated reference, ClickIntercepted an obstruction.",
      "example": "Investigate the overlay when a modal intercepts a click."
    }
  },
  "automation-junior-42": {
    "uz": {
      "answer": "Remote browser sessionlarni turli mashina va brauzerlarga taqsimlab boshqaradi.",
      "example": "Chrome va Firefox testlari remote node’larda ishlaydi."
    },
    "ru": {
      "answer": "Распределяет и управляет remote browser sessions на разных машинах.",
      "example": "Chrome и Firefox тесты идут на remote nodes."
    },
    "en": {
      "answer": "Distributes and manages remote browser sessions across machines.",
      "example": "Run Chrome and Firefox checks on remote nodes."
    }
  },
  "automation-junior-43": {
    "uz": {
      "answer": "Oddiy bosish/yozishda WebElement, murakkab pointer yoki klaviatura ketma-ketligida Actions ishlatamiz.",
      "example": "Input’ga sendKeys, hover menyusiga Actions."
    },
    "ru": {
      "answer": "WebElement для простого нажатия/ввода, Actions для сложных последовательностей.",
      "example": "sendKeys для input, Actions для hover меню."
    },
    "en": {
      "answer": "Use WebElement for simple clicks/input and Actions for complex input sequences.",
      "example": "Use sendKeys for an input and Actions for a hover menu."
    }
  },
  "automation-junior-44": {
    "uz": {
      "answer": "Mavjudlik, ko‘rinish va ishlatishga tayyorlik alohida; kerakli holatni vaqt chegarasi bilan kutamiz.",
      "example": "DOM’da bor tugma yashirin bo‘lishi mumkin."
    },
    "ru": {
      "answer": "Наличие, видимость и готовность различаются; ждём нужное состояние с пределом времени.",
      "example": "Кнопка в DOM может быть скрытой."
    },
    "en": {
      "answer": "Presence, visibility and readiness differ; wait for the intended state with a timeout.",
      "example": "A button can be present in the DOM but hidden."
    }
  },
  "automation-junior-45": {
    "uz": {
      "answer": "Ma’lumot yuklanishini kutib, noyob kalit bo‘yicha qator va ustun qiymatini tekshiramiz.",
      "example": "Order id’si bilan satr topilib status tekshiriladi."
    },
    "ru": {
      "answer": "Ждём загрузки и проверяем строку по уникальному ключу.",
      "example": "Строка находится по order id, проверяется status."
    },
    "en": {
      "answer": "Wait for loading and inspect rows by unique keys and column values.",
      "example": "Locate an order by ID and verify its status."
    }
  },
  "automation-junior-46": {
    "uz": {
      "answer": "WebDriver, WebElement, SearchContext, JavascriptExecutor, TakesScreenshot; shuningdek Alert, Capabilities va Navigation, Options, TargetLocator interfeyslari mavjud.",
      "example": "TakesScreenshot — ekran yozuvi emas, screenshot olish imkoniyati."
    },
    "ru": {
      "answer": "WebDriver, WebElement, SearchContext, JavascriptExecutor, TakesScreenshot, Alert, Capabilities, Navigation, Options и TargetLocator.",
      "example": "TakesScreenshot делает снимок, не video."
    },
    "en": {
      "answer": "Examples include WebDriver, WebElement, SearchContext, JavascriptExecutor, TakesScreenshot, Alert, Capabilities, Navigation, Options and TargetLocator.",
      "example": "TakesScreenshot captures an image, not a video recording."
    }
  },
  "automation-junior-47": {
    "uz": {
      "answer": "Test muhitida kelishilgan test key yoki test konfiguratsiyasi qo‘llanadi; production CAPTCHA’ni chetlab o‘tmaymiz.",
      "example": "Test build’da rasmiy test key bilan ro‘yxatdan o‘tish."
    },
    "ru": {
      "answer": "Используем test key или согласованную test-конфигурацию, не обходим production CAPTCHA.",
      "example": "Регистрация с официальным test key в test build."
    },
    "en": {
      "answer": "Use approved test keys or test configuration rather than bypassing production CAPTCHA.",
      "example": "Register using an official test key in a test build."
    }
  },
  "automation-junior-48": {
    "uz": {
      "answer": "Manzil ochish, oldinga, orqaga va sahifani qayta yuklash.",
      "example": "Mahsulotdan orqaga qaytib qidiruv holatini tekshiramiz."
    },
    "ru": {
      "answer": "Открытие адреса, вперёд, назад и обновление.",
      "example": "Возвращаемся с товара и проверяем поиск."
    },
    "en": {
      "answer": "Open a URL, go forward/back and refresh.",
      "example": "Go back from a product and check search state."
    }
  },
  "automation-junior-49": {
    "uz": {
      "answer": "URL’larni yig‘ib, HTTP javobi va foydalanuvchi uchun kerakli manzilni tekshiramiz; ruxsat/redirect’ni hisobga olamiz.",
      "example": "404 maqola havolasi topilib, to‘g‘ri URL bilan solishtiriladi."
    },
    "ru": {
      "answer": "Собираем URL, проверяем HTTP и назначение, учитывая права/redirect.",
      "example": "Находим ссылку 404 и сверяем адрес."
    },
    "en": {
      "answer": "Collect URLs and check HTTP responses and destinations, accounting for auth and redirects.",
      "example": "Identify a 404 article link and compare its intended URL."
    }
  },
  "automation-junior-50": {
    "uz": {
      "answer": "Collection Iterable’dan kelib chiqadi; List tartibli, Set takrorsiz, Queue navbat, Deque ikki uchli navbat. Map key/value saqlaydi va Collection vorisi emas.",
      "example": "Takrorlanmas id’lar Set’da saqlanadi."
    },
    "ru": {
      "answer": "Collection наследует Iterable; List упорядочен, Set уникален, Queue — очередь, Deque — двусторонняя очередь. Map хранит key/value и не наследует Collection.",
      "example": "Уникальные id сохраняют в Set."
    },
    "en": {
      "answer": "Collection extends Iterable; List is ordered, Set unique, Queue a queue and Deque a double-ended queue. Map stores key/value pairs and is not a Collection subtype.",
      "example": "Store unique IDs in a Set."
    }
  },
  "automation-junior-51": {
    "uz": {
      "answer": "Thread bajarilish oqimini, Runnable bajariladigan vazifani bildiradi; vazifa va ishga tushirishni ajratish foydali.",
      "example": "Bir Runnable executor orqali ishga tushirilishi mumkin."
    },
    "ru": {
      "answer": "Thread представляет поток, Runnable задачу; полезно разделять задачу и запуск.",
      "example": "Runnable можно выполнить через executor."
    },
    "en": {
      "answer": "Thread represents an execution thread; Runnable a task. Separate work from execution.",
      "example": "An executor can run a Runnable task."
    }
  },
  "automation-junior-52": {
    "uz": {
      "answer": "String o‘zgarmas; Builder o‘zgaruvchan; Buffer ko‘p amallarini sinxronlashtiradi. Umumiy foydalanish baribir ehtiyotkorlik talab qiladi.",
      "example": "Bir thread’da katta matnni StringBuilder bilan yig‘amiz."
    },
    "ru": {
      "answer": "String неизменяемый, Builder изменяемый, Buffer синхронизирует многие операции; общее использование требует внимания.",
      "example": "В одном thread собираем текст StringBuilder."
    },
    "en": {
      "answer": "String is immutable, Builder mutable, Buffer synchronizes many operations; sharing still needs care.",
      "example": "Build large text with StringBuilder in one thread."
    }
  },
  "automation-junior-53": {
    "uz": {
      "answer": "final qayta tayinlash/merosni cheklaydi; finally cleanup bloki; finalize eskirgan, olib tashlashga belgilangan mexanizm.",
      "example": "Resursni try-with-resources bilan yopamiz, finalize’ga tayanmaymiz."
    },
    "ru": {
      "answer": "final ограничивает изменение/наследование, finally блок cleanup, finalize устарел и подлежит удалению.",
      "example": "Ресурс закрываем try-with-resources, не через finalize."
    },
    "en": {
      "answer": "final restricts assignment/inheritance, finally is cleanup, finalize is deprecated for removal.",
      "example": "Close resources with try-with-resources, not finalize."
    }
  },
  "automation-junior-54": {
    "uz": {
      "answer": "Test va oldin/keyin bajariladigan setup/cleanup amallarini belgilaydi; nomlar runner’ga bog‘liq.",
      "example": "JUnit’da @BeforeEach, TestNG’da @BeforeMethod."
    },
    "ru": {
      "answer": "Отмечают тесты и setup/cleanup до/после; имена зависят от runner.",
      "example": "JUnit: @BeforeEach, TestNG: @BeforeMethod."
    },
    "en": {
      "answer": "Mark tests and before/after setup/cleanup; names depend on the runner.",
      "example": "JUnit uses @BeforeEach; TestNG uses @BeforeMethod."
    }
  },
  "automation-junior-55": {
    "uz": {
      "answer": "Tenglik, true/false, null, kolleksiya va kutilgan exception’ni tekshirish.",
      "example": "Savat miqdori uchun assertEquals; xato uchun assertThrows."
    },
    "ru": {
      "answer": "Проверки равенства, true/false, null, коллекций и exceptions.",
      "example": "assertEquals для количества, assertThrows для ошибки."
    },
    "en": {
      "answer": "Check equality, booleans, nulls, collections and expected exceptions.",
      "example": "Use assertEquals for cart count and assertThrows for an exception."
    }
  },
  "automation-junior-56": {
    "uz": {
      "answer": "Runner konfiguratsiyasida yoqib, test resursi va ma’lumotini alohida qilamiz.",
      "example": "Parallel testlar bitta static driver’ni bo‘lishmaydi."
    },
    "ru": {
      "answer": "Включаем в конфигурации runner и изолируем ресурсы/данные.",
      "example": "Parallel тесты не разделяют static driver."
    },
    "en": {
      "answer": "Enable runner parallelism and isolate test resources/data.",
      "example": "Parallel checks do not share one static driver."
    }
  },
  "automation-junior-57": {
    "uz": {
      "answer": "Fayl holatlarini commit sifatida saqlaydi; lokal tarix va branchlar bilan o‘zgarishlarni kuzatadi.",
      "example": "Test buzilsa, oldingi commit bilan farqni ko‘ramiz."
    },
    "ru": {
      "answer": "Сохраняет snapshots в commits, отслеживает изменения локальной историей и branches.",
      "example": "При сбое сравниваем с прошлым commit."
    },
    "en": {
      "answer": "Records snapshots as commits and tracks changes with local history and branches.",
      "example": "Compare a broken check with an earlier commit."
    }
  },
  "automation-junior-58": {
    "uz": {
      "answer": "Git versiya nazorati; GitHub/GitLab repository hosting, review va hamkorlik xizmatlari.",
      "example": "Git lokal ishlaydi; PR hosting xizmatida ko‘riladi."
    },
    "ru": {
      "answer": "Git управляет версиями; GitHub/GitLab дают hosting, review и совместную работу.",
      "example": "Git работает локально; PR рассматривают в hosting сервисе."
    },
    "en": {
      "answer": "Git manages versions; GitHub/GitLab provide repository hosting, review and collaboration.",
      "example": "Git works locally; review a PR on a hosting service."
    }
  },
  "automation-junior-59": {
    "uz": {
      "answer": "Runner HTML/JUnit XML chiqishi yoki Allure kabi vosita; dalil va muhit bilan bog‘laymiz.",
      "example": "CI JUnit XML’ni o‘qib yiqilgan testni ko‘rsatadi."
    },
    "ru": {
      "answer": "HTML/JUnit XML от runner или Allure; связываем с данными и средой.",
      "example": "CI читает JUnit XML и показывает сбой."
    },
    "en": {
      "answer": "Use runner HTML/JUnit XML output or tools such as Allure with evidence and environment metadata.",
      "example": "CI reads JUnit XML to display failed checks."
    }
  },
  "manual-junior-103": {
    "uz": {
      "answer": "Yo‘q; mobil ilova, boshqa servis yoki CLI ham klient bo‘lishi mumkin.",
      "example": "curl API’ga so‘rov yuboradi."
    },
    "ru": {
      "answer": "Нет; mobile app, другой сервис или CLI тоже клиент.",
      "example": "curl отправляет запрос API."
    },
    "en": {
      "answer": "No; a mobile app, another service or a CLI can be a client.",
      "example": "curl sends a request to an API."
    }
  },
  "manual-junior-104": {
    "uz": {
      "answer": "HTTP(S), WebSocket, DNS, TCP/UDP va tizim ishlatadigan boshqa protokollar.",
      "example": "DNS nomni topadi, HTTPS API javobini olib keladi."
    },
    "ru": {
      "answer": "HTTP(S), WebSocket, DNS, TCP/UDP и протоколы продукта.",
      "example": "DNS разрешает имя, HTTPS получает ответ API."
    },
    "en": {
      "answer": "HTTP(S), WebSocket, DNS, TCP/UDP and product-specific protocols.",
      "example": "DNS resolves the name; HTTPS carries the API response."
    }
  },
  "manual-junior-105": {
    "uz": {
      "answer": "Input, button, link, select, checkbox, jadval, dialog va ularning holatlari.",
      "example": "Disabled tugma bosilmaydi, label input’ni tushuntiradi."
    },
    "ru": {
      "answer": "Input, button, link, select, checkbox, таблицы, dialogs и их состояния.",
      "example": "Disabled кнопка не нажимается, label описывает input."
    },
    "en": {
      "answer": "Inputs, buttons, links, selects, checkboxes, tables, dialogs and their states.",
      "example": "A disabled button cannot activate; a label identifies its input."
    }
  },
  "manual-junior-106": {
    "uz": {
      "answer": "Session va boshqa kichik qiymatlarni saqlab, mos request’da yuboradi; Secure/HttpOnly/SameSite siyosati muhim.",
      "example": "Session cookie o‘chsa, qayta login kerak bo‘lishi mumkin."
    },
    "ru": {
      "answer": "Хранят session и другие значения для подходящих requests; важны Secure/HttpOnly/SameSite.",
      "example": "Удаление session cookie может потребовать нового входа."
    },
    "en": {
      "answer": "Store session/other values for matching requests; Secure/HttpOnly/SameSite policies matter.",
      "example": "Deleting a session cookie can require signing in again."
    }
  },
  "manual-junior-107": {
    "uz": {
      "answer": "Sahifa ichida boshqa hujjatni ko‘rsatadi; uning alohida kontekstiga o‘tish kerak.",
      "example": "To‘lov maydoni tashqi iframe ichida bo‘lishi mumkin."
    },
    "ru": {
      "answer": "Встраивает другой документ; нужен переход в его контекст.",
      "example": "Поле оплаты может быть внутри внешнего iframe."
    },
    "en": {
      "answer": "Embeds another document requiring its own interaction context.",
      "example": "A payment field may live inside an external iframe."
    }
  },
  "manual-junior-108": {
    "uz": {
      "answer": "DOM daraxti, semantik bo‘lim, forma va ularga bog‘langan CSS/JS’ni ko‘ramiz.",
      "example": "Header, main va footer semantik bo‘limlar."
    },
    "ru": {
      "answer": "Смотрим DOM, семантические разделы, формы и CSS/JS.",
      "example": "Header, main и footer — семантические разделы."
    },
    "en": {
      "answer": "Inspect the DOM tree, semantic sections, forms and attached CSS/JS.",
      "example": "Header, main and footer are semantic sections."
    }
  },
  "manual-junior-109": {
    "uz": {
      "answer": "Brauzer mosligi, havolalar, origin/cookies va HTML/DOM xulqi; ko‘p test turlari boshqa platformalarda ham bor.",
      "example": "Safari va Chrome’da bir forma xulqini solishtirish."
    },
    "ru": {
      "answer": "Совместимость браузеров, ссылки, origin/cookies и DOM; многие виды testing общие.",
      "example": "Сравнить форму в Safari и Chrome."
    },
    "en": {
      "answer": "Browser compatibility, links, origins/cookies and DOM behavior; many test types are cross-platform.",
      "example": "Compare a form in Safari and Chrome."
    }
  },
  "manual-junior-110": {
    "uz": {
      "answer": "Sinxron oqimda natija javobda; asinxronda qabul va yakun alohida bo‘lishi mumkin.",
      "example": "202 job id beradi, yakuniy status keyin olinadi."
    },
    "ru": {
      "answer": "Sync обычно возвращает результат, async разделяет принятие и завершение.",
      "example": "202 возвращает job id, итоговый status читается позже."
    },
    "en": {
      "answer": "Synchronous flows return results; asynchronous flows may separate acceptance and completion.",
      "example": "202 returns a job ID; retrieve the final status later."
    }
  },
  "manual-junior-111": {
    "uz": {
      "answer": "JSON/XML tuzilma, CSV jadval, binary ixcham kodlash uchun ishlatilishi mumkin; tanlov shartnomaga bog‘liq.",
      "example": "CSV eksportida vergul va newline’ni to‘g‘ri escape qilish."
    },
    "ru": {
      "answer": "JSON/XML структурные, CSV табличный, binary компактный; выбор зависит от контракта.",
      "example": "Верно экранировать запятые/newlines в CSV."
    },
    "en": {
      "answer": "JSON/XML are structured, CSV tabular, binary compact; choose by contract.",
      "example": "Correctly escape commas and newlines in a CSV export."
    }
  },
  "manual-junior-112": {
    "uz": {
      "answer": "Shifrlash kalit bilan qaytariladi; hash qaytarish uchun emas; encoding ko‘rsatish/uzatish shakli, maxfiylik emas.",
      "example": "Base64 parolni himoyalamaydi; HTTPS TLS ishlatadi."
    },
    "ru": {
      "answer": "Encryption обратим с ключом, hash не для восстановления, encoding не обеспечивает секретность.",
      "example": "Base64 не защищает пароль; HTTPS использует TLS."
    },
    "en": {
      "answer": "Encryption is reversible with a key; hashes are not for recovery; encoding is not secrecy.",
      "example": "Base64 does not protect passwords; HTTPS uses TLS."
    }
  },
  "manual-junior-113": {
    "uz": {
      "answer": "REST cheklovlari: client-server, stateless, cacheable, uniform interface, layered system va ixtiyoriy code-on-demand. Faqat JSON yoki HTTP ishlatish REST degani emas.",
      "example": "GET mahsulotni o‘qiydi, holatni o‘zgartirmaydi; har so‘rov o‘ziga zarur kontekstni olib boradi."
    },
    "ru": {
      "answer": "Ограничения REST: client-server, stateless, cacheable, uniform interface, layered system и необязательный code-on-demand. JSON или HTTP сами не делают API REST.",
      "example": "GET читает товар, не меняет состояние; запрос несёт необходимый контекст."
    },
    "en": {
      "answer": "REST constraints include client-server, statelessness, cacheability, a uniform interface, layered systems and optional code-on-demand. JSON or HTTP alone does not make an API RESTful.",
      "example": "GET reads a product without changing state; each request carries the context needed to handle it."
    }
  },
  "manual-junior-114": {
    "uz": {
      "answer": "Qo‘llab-quvvatlash kelishuvi va real foydalanuvchi statistikasi kerak; versiyalar doim o‘zgaradi.",
      "example": "Minimal qo‘llab-quvvatlangan va keng tarqalgan versiyalar."
    },
    "ru": {
      "answer": "Нужны договор поддержки и статистика; версии меняются.",
      "example": "Минимальная поддерживаемая и популярные версии."
    },
    "en": {
      "answer": "Use support agreements and actual usage; available versions change over time.",
      "example": "Include the minimum supported and widely used versions."
    }
  },
  "manual-junior-115": {
    "uz": {
      "answer": "Minimal chegara, muhim OS o‘zgarishi va ko‘p ishlatiladigan versiyalarni risk bo‘yicha tanlaymiz.",
      "example": "Ruxsat modeli o‘zgargan versiyada alohida tekshiruv."
    },
    "ru": {
      "answer": "Выбираем нижнюю границу, важные изменения OS и популярные версии по рискам.",
      "example": "Отдельная проверка версии с изменённой моделью разрешений."
    },
    "en": {
      "answer": "Select the support boundary, major behavior changes and popular versions by risk.",
      "example": "Include a version where the permission model changes."
    }
  },
  "manual-junior-116": {
    "uz": {
      "answer": "Android’da APK/AAB; iOS’da imzolangan paket va TestFlight/App Store kabi tarqatish yo‘llari.",
      "example": "iOS tester build’ni TestFlight taklifidan oladi."
    },
    "ru": {
      "answer": "Android APK/AAB; iOS подписанный пакет и TestFlight/App Store.",
      "example": "iOS тестер получает build по приглашению TestFlight."
    },
    "en": {
      "answer": "Android uses APK/AAB; iOS uses signed packages with channels such as TestFlight/App Store.",
      "example": "An iOS tester gets a build through TestFlight."
    }
  },
  "automation-junior-60": {
    "uz": {
      "answer": "Espresso/UI Automator kabi native vositalar va instrumented testlar ishlatilishi mumkin.",
      "example": "Espresso ilova ichidagi login formasi bilan ishlaydi."
    },
    "ru": {
      "answer": "Возможны Espresso/UI Automator и instrumented tests.",
      "example": "Espresso проверяет форму входа в приложении."
    },
    "en": {
      "answer": "Use native tools such as Espresso/UI Automator and instrumented tests.",
      "example": "Espresso can interact with an app's login form."
    }
  },
  "automation-junior-61": {
    "uz": {
      "answer": "Klient WebDriver buyruqlarini serverga yuboradi; platform driver qurilma avtomatizatsiyasi bilan ishlaydi.",
      "example": "Android uchun UiAutomator2, iOS uchun XCUITest driver."
    },
    "ru": {
      "answer": "Клиент шлёт WebDriver команды серверу, platform driver управляет автоматизацией устройства.",
      "example": "Android UiAutomator2, iOS XCUITest driver."
    },
    "en": {
      "answer": "A client sends WebDriver commands to a server; a platform driver controls device automation.",
      "example": "Use UiAutomator2 for Android and XCUITest for iOS."
    }
  },
  "manual-junior-117": {
    "uz": {
      "answer": "Sandbox’da muvaffaqiyat, rad, bekor, timeout, qayta urinish va order/payment izchilligini tekshiramiz.",
      "example": "Qayta bosilganda bitta order va bitta yechish."
    },
    "ru": {
      "answer": "В sandbox проверяем успех, отказ, отмену, timeout, retry и согласованность order/payment.",
      "example": "Повторное нажатие даёт один order и одно списание."
    },
    "en": {
      "answer": "In a sandbox, check success, rejection, cancellation, timeout, retries and order/payment consistency.",
      "example": "A repeated click creates one order and one charge."
    }
  },
  "manual-junior-118": {
    "uz": {
      "answer": "Model/muhit, shart, qadam, kutilgan/haqiqiy natija va dalilni yozamiz; sababni taxmin qilib hukm bermaymiz.",
      "example": "“Yoqish bosildi; indikator yonmadi; kutilgani — indikator yonishi”."
    },
    "ru": {
      "answer": "Указываем модель/условия, шаги, ожидаемое/фактическое и доказательства без выдуманной причины.",
      "example": "«Нажато включение; индикатор не горит; ожидалось включение»."
    },
    "en": {
      "answer": "Record model/conditions, steps, expected/actual behavior and evidence without guessing the cause.",
      "example": "“Pressed Start; indicator remained off; expected the indicator to turn on.”"
    }
  },
  "manual-junior-119": {
    "uz": {
      "answer": "Ma’lumot tartibli saqlanadigan va keraklisini topish mumkin bo‘lgan joy deb tushuntiramiz.",
      "example": "Kutubxona katalogidan kitob nomini topish kabi."
    },
    "ru": {
      "answer": "Это место, где сведения хранятся по порядку и легко находятся.",
      "example": "Как найти название книги в каталоге."
    },
    "en": {
      "answer": "A place where information is organized and can be found when needed.",
      "example": "Like finding a book's title in a library catalog."
    }
  },
  "manual-junior-120": {
    "uz": {
      "answer": "Universal son yo‘q; talab, risk, ma’lumot sinfi va qamrov mezoni kerak.",
      "example": "Bo‘sh maydon, to‘g‘ri hisob va noto‘g‘ri parol — boshlang‘ich holatlar."
    },
    "ru": {
      "answer": "Универсального числа нет; нужны требования, риски, классы и критерий покрытия.",
      "example": "Пустое поле, верные данные и неверный пароль — старт."
    },
    "en": {
      "answer": "There is no universal count; specify requirements, risks, partitions and coverage criteria.",
      "example": "Empty fields, valid credentials and invalid passwords are a starting set."
    }
  },
  "manual-junior-121": {
    "uz": {
      "answer": "Ikki shartni AND bilan birlashtirib, chegaralar kiritilganini talabga moslaymiz.",
      "example": "SELECT name FROM books WHERE price > 15 AND page_count BETWEEN 30 AND 120;"
    },
    "ru": {
      "answer": "Соединяем условия AND, включение границ сверяем с требованием.",
      "example": "SELECT name FROM books WHERE price > 15 AND page_count BETWEEN 30 AND 120;"
    },
    "en": {
      "answer": "Combine conditions with AND and use the specified inclusive/exclusive boundaries.",
      "example": "SELECT name FROM books WHERE price > 15 AND page_count BETWEEN 30 AND 120;"
    }
  },
  "manual-junior-122": {
    "uz": {
      "answer": "WHERE kontaktni, JOIN mijoz/order aloqasini, COUNT/SUM statistikani beradi.",
      "example": "SELECT phone, address FROM users WHERE name='Ali'; SELECT u.name FROM users u JOIN orders o ON o.user_id=u.id WHERE o.total>500; SELECT COUNT(*),SUM(total) FROM orders;"
    },
    "ru": {
      "answer": "WHERE находит контакт, JOIN связывает users/orders, COUNT/SUM дают статистику.",
      "example": "SELECT phone, address FROM users WHERE name='Ali'; SELECT u.name FROM users u JOIN orders o ON o.user_id=u.id WHERE o.total>500; SELECT COUNT(*),SUM(total) FROM orders;"
    },
    "en": {
      "answer": "WHERE retrieves a contact, JOIN connects users/orders, COUNT/SUM aggregate statistics.",
      "example": "SELECT phone, address FROM users WHERE name='Ali'; SELECT u.name FROM users u JOIN orders o ON o.user_id=u.id WHERE o.total>500; SELECT COUNT(*),SUM(total) FROM orders;"
    }
  },
  "manual-junior-123": {
    "uz": {
      "answer": "Har mustaqil shart uchun ekvivalent sinflar, sonli shart uchun chegaralar va birikmalar uchun decision table tuzamiz. “100%” sinflar, qoidalar yoki barcha kombinatsiyalarmi — aniqlashtiramiz; ularning test soni bir xil emas.",
      "example": "Obuna misoli: faol a’zo −10, anketa to‘ldirilsa −5; tekshiruvdan o‘tganlarga score ≤20 uchun −15, 20<score<30 uchun −8, ≥30 uchun 0. Premium −12, kursdagi basic −4, kurssiz basic +7. Sinflar va shartlarning birga ishlashini tekshiring; tier chegirmalari jamlanmaydi."
    },
    "ru": {
      "answer": "Для независимых условий строим классы, для чисел границы, для сочетаний decision table. Уточняем, что значит 100%: классы, правила или все комбинации; число проверок различается.",
      "example": "Пример подписки: active member −10, анкета −5; прошедшим проверку score ≤20 даёт −15, 20<score<30 — −8, ≥30 — 0. Premium −12, basic с курсом −4, без курса +7. Проверяем классы/сочетания; скидки tiers не суммируются."
    },
    "en": {
      "answer": "Partition independent conditions, check numeric boundaries and build a decision table for combinations. Clarify whether 100% means classes, rules or every combination; these require different test counts.",
      "example": "Subscription example: active member −10, completed survey −5; verified members receive −15 for score ≤20, −8 for 20<score<30, or 0 for ≥30. Premium −12, basic with a course −4, basic without a course +7. Check partitions and combinations; tier discounts do not accumulate."
    }
  },
  "manual-junior-124": {
    "uz": {
      "answer": "Eligibility, yosh oraliqlari va qo‘shimcha tarifni ajratib, decision table va boundary qiymatlarni olamiz. Minimum test soni kerakli coverage mezoniga bog‘liq.",
      "example": "Xizmat tarifi: 16 yoshdan kichiklar qabul qilinmaydi; 16–59 yoshda basic 80, pro 100; 60+ uchun 120. Pro va tezkor xizmat birga bo‘lsa +10%. 15/16, 59/60 hamda pro/basic × oddiy/tezkor kombinatsiyalarini tekshiring."
    },
    "ru": {
      "answer": "Разделяем eligibility, возрастные интервалы и доплату, используем decision table и границы. Минимум зависит от критерия покрытия.",
      "example": "Тариф: до 16 лет нельзя; 16–59 basic 80, pro 100; 60+ — 120. Pro + срочный сервис добавляет 10%. Проверяем 15/16, 59/60 и pro/basic × обычный/срочный."
    },
    "en": {
      "answer": "Separate eligibility, age bands and surcharges, then use a decision table and boundary values. The minimum count depends on the coverage criterion.",
      "example": "Service tariff: under 16 is ineligible; ages 16–59 cost 80 for basic and 100 for pro; age 60+ costs 120. Pro plus express service adds 10%. Check 15/16, 59/60 and pro/basic × regular/express combinations."
    }
  },
  "automation-junior-62": {
    "uz": {
      "answer": "Noyob locator, saralangan sonlar, tanlangan mahsulot va cleanup; README va CI orqali qayta bajarish yo‘lini belgilaymiz.",
      "example": "[5,12,20] tartibda, tanlangan id savatda va to‘g‘ri miqdorda."
    },
    "ru": {
      "answer": "Задаём locators, порядок чисел, товар, cleanup, README и запуск в CI.",
      "example": "[5,12,20] по порядку, выбранный id в корзине."
    },
    "en": {
      "answer": "Specify locators, numeric ordering, selected items, cleanup, README and CI execution.",
      "example": "Prices [5,12,20] are ordered and the selected ID appears in the cart."
    }
  },
  "manual-senior-42": {
    "uz": {
      "answer": "Har shart boshqalardan mustaqil natijani o‘zgartirishini tekshiradi. Test soni mantiq va mumkin bo‘lgan kombinatsiyalarga bog‘liq; branch coverage bilan teng emas.",
      "example": "A AND B uchun (true,true), (false,true), (true,false) ikkala ta’sirni ko‘rsatadi."
    },
    "ru": {
      "answer": "Проверяет независимое влияние каждого условия на результат. Число тестов зависит от логики/достижимости, не равно branch coverage.",
      "example": "Для A AND B пары (true,true), (false,true), (true,false) показывают оба влияния."
    },
    "en": {
      "answer": "Checks each condition's independent effect on the decision. Test count depends on logic/feasibility, not just branch coverage.",
      "example": "For A AND B, (true,true), (false,true), (true,false) demonstrate both effects."
    }
  },
  "manual-middle-62": {
    "uz": {
      "answer": "Matn shaklini qidirish/tekshirish uchun pattern; barcha biznes validatsiyasini almashtirmaydi.",
      "example": "Logdan bir shakldagi request id’larni topish."
    },
    "ru": {
      "answer": "Pattern для поиска/проверки текста; не заменяет всю бизнес-валидацию.",
      "example": "Найти request ids одного формата в log."
    },
    "en": {
      "answer": "A text-matching pattern; it does not replace all business validation.",
      "example": "Find request IDs of a specified format in logs."
    }
  },
  "manual-middle-63": {
    "uz": {
      "answer": "Kech topishda qayta ish, tarqatish va zarar ortishi mumkin; universal qat’iy ko‘paytirgich yo‘q.",
      "example": "Talabdagi xato productionda data migratsiyasini ham talab qiladi."
    },
    "ru": {
      "answer": "Поздно найденный defect может увеличить переделки, выпуск и ущерб; универсального множителя нет.",
      "example": "Ошибка требования в production требует миграции данных."
    },
    "en": {
      "answer": "Late discovery can increase rework, deployment cost and harm; no universal multiplier applies.",
      "example": "A requirement defect found in production can also require data migration."
    }
  },
  "manual-middle-64": {
    "uz": {
      "answer": "Foydalanuvchi maqsadi, daromad/xarajat va riskni stakeholder bilan tushunib olamiz.",
      "example": "Do‘kon uchun checkout banner animatsiyasidan muhim."
    },
    "ru": {
      "answer": "Со stakeholder уточняем цели пользователя, доход/затраты и риски.",
      "example": "Для магазина checkout важнее анимации баннера."
    },
    "en": {
      "answer": "Clarify user goals, value/cost and risks with stakeholders.",
      "example": "Checkout matters more to a shop than banner animation."
    }
  },
  "manual-middle-65": {
    "uz": {
      "answer": "Yo‘q; talab, kirish sinfi va risk belgilaydi. 50/50 kabi universal qoida yo‘q.",
      "example": "Ko‘p rad sharti bo‘lsa, negative holatlar ko‘proq bo‘ladi."
    },
    "ru": {
      "answer": "Нет; зависит от требований, классов и рисков, не универсальные 50/50.",
      "example": "При многих отказах negative случаев больше."
    },
    "en": {
      "answer": "No; requirements, input partitions and risks determine it, not a universal 50/50 rule.",
      "example": "Many rejection rules naturally require more negative cases."
    }
  },
  "manual-middle-66": {
    "uz": {
      "answer": "Leakage odatda testdan o‘tib productionda topilgan xato; bug release ba’zi jamoalarda ma’lum xato bilan chiqarishni bildiradi. Terminlarni kelishish kerak.",
      "example": "Ma’lum kichik xato risk bilan qabul qilingan release."
    },
    "ru": {
      "answer": "Leakage — пропущенный production-дефект; bug release иногда означает выпуск с известной ошибкой. Термины согласуют.",
      "example": "Известная мелкая ошибка принята как риск релиза."
    },
    "en": {
      "answer": "Leakage generally means an escaped defect; bug release sometimes means knowingly releasing one. Agree terminology.",
      "example": "A known minor defect is accepted as a release risk."
    }
  },
  "manual-middle-67": {
    "uz": {
      "answer": "Qisqa muddatli exploratory yoki tez o‘zgaruvchi past-risk vazifada yengil checklist mosroq bo‘lishi mumkin.",
      "example": "Bir martalik prototip review’i uchun charter yozish."
    },
    "ru": {
      "answer": "В кратком exploratory или меняющейся low-risk задаче лучше лёгкий checklist.",
      "example": "Charter для разового review прототипа."
    },
    "en": {
      "answer": "A short exploratory task or changing low-risk area may suit a lightweight checklist.",
      "example": "Use a charter for a one-off prototype review."
    }
  },
  "manual-middle-68": {
    "uz": {
      "answer": "Noaniq talab, ehtimolli natija va ko‘p integratsiyada oracle qiyin; invariant va mezonlarni kelishamiz.",
      "example": "Tavsiya tizimida bitta aniq mahsulot o‘rniga sifat mezoni."
    },
    "ru": {
      "answer": "При неясных требованиях, вероятностных результатах и интеграциях; согласуем invariants/критерии.",
      "example": "Для рекомендаций критерий качества вместо одного товара."
    },
    "en": {
      "answer": "Ambiguous, probabilistic and integrated behavior needs agreed invariants and evaluation criteria.",
      "example": "Evaluate recommendations using agreed criteria, not one fixed product."
    }
  },
  "manual-middle-69": {
    "uz": {
      "answer": "Control-flow graph uchun M=E−N+2P; E — edge, N — node, P — bog‘langan komponent. Oddiy oqimda qarorlar+1 ishlashi mumkin.",
      "example": "Bitta mustaqil if oddiy graph’da complexity 2 beradi."
    },
    "ru": {
      "answer": "Для графа M=E−N+2P: edges, nodes, components. В простом случае решения+1.",
      "example": "Один независимый if в простом графе даёт 2."
    },
    "en": {
      "answer": "For a control-flow graph, M=E−N+2P; edges, nodes, components. Simple flows may use decisions+1.",
      "example": "One independent if in a simple graph has complexity 2."
    }
  },
  "manual-middle-70": {
    "uz": {
      "answer": "DDP aniqlangan xatolarni, DRE topib olib tashlangan xatolarni kelishilgan bazaga solishtiradi; denominator, davr va scope yozilishi kerak.",
      "example": "80 topilgan, 70 yopilgan: detection va removal bir xil emas."
    },
    "ru": {
      "answer": "DDP про обнаружение, DRE про удаление; задают denominator, период и scope.",
      "example": "80 найдены, 70 устранены: detection и removal различаются."
    },
    "en": {
      "answer": "DDP concerns detection; DRE removal. Specify denominators, period and scope before comparing.",
      "example": "80 found and 70 removed are different detection/removal outcomes."
    }
  },
  "manual-middle-71": {
    "uz": {
      "answer": "Likelihood×impact jadvali, FMEA yoki ekspert ustuvorligi; aniqlik va kontekstga mosini tanlaymiz.",
      "example": "Yuqori ta’sirli to‘lovga kattaroq test budjeti."
    },
    "ru": {
      "answer": "Likelihood×impact, FMEA или экспертная оценка; выбираем по контексту.",
      "example": "Больше бюджета на оплату с высоким impact."
    },
    "en": {
      "answer": "Use likelihood×impact, FMEA or expert prioritization appropriate to context.",
      "example": "Allocate more checking effort to high-impact payments."
    }
  },
  "manual-middle-72": {
    "uz": {
      "answer": "Product Owner, Scrum Master, Developers; Sprint va planning/daily/review/retrospective. Qadriyatlar: commitment, focus, openness, respect, courage.",
      "example": "Review mahsulot feedback’i, retrospective jarayon yaxshilash uchun."
    },
    "ru": {
      "answer": "PO, SM, Developers; Sprint и planning/daily/review/retrospective. Ценности: commitment, focus, openness, respect, courage.",
      "example": "Review даёт feedback продукта, retrospective улучшает процесс."
    },
    "en": {
      "answer": "PO, SM, Developers; Sprint and planning/daily/review/retrospective. Values: commitment, focus, openness, respect and courage.",
      "example": "Review gathers product feedback; retrospective improves the process."
    }
  },
  "manual-middle-73": {
    "uz": {
      "answer": "Protokol, real yuklama, taqsimlangan ishga tushirish va jamoa tajribasiga mos tanlaymiz.",
      "example": "HTTP yuklamasi uchun k6/JMeter; frontend uchun browser profiling."
    },
    "ru": {
      "answer": "Выбираем по протоколу, нагрузке, распределению и навыкам.",
      "example": "k6/JMeter для HTTP, profiling для frontend."
    },
    "en": {
      "answer": "Choose by protocol, workload, distributed execution and team skills.",
      "example": "Use k6/JMeter for HTTP workloads and browser profiling for frontend behavior."
    }
  },
  "automation-middle-45": {
    "uz": {
      "answer": "Build, configuration, kirish, dependencies, data va observability’ni tekshiramiz.",
      "example": "QA hisoblari va health endpoint ishlashi tasdiqlanadi."
    },
    "ru": {
      "answer": "Build, configuration, доступ, dependencies, данные и observability.",
      "example": "Подтверждены QA-аккаунты и health endpoint."
    },
    "en": {
      "answer": "Prepare builds, configuration, access, dependencies, data and observability.",
      "example": "Verify QA accounts and the health endpoint work."
    }
  },
  "automation-middle-46": {
    "uz": {
      "answer": "Simulator xulqni modellashtiradi, emulator platforma ijrosini taqlid qiladi; cheklovlar vositaga bog‘liq.",
      "example": "iOS Simulator haqiqiy telefon sensorini to‘liq almashtirmaydi."
    },
    "ru": {
      "answer": "Simulator моделирует поведение, emulator имитирует выполнение платформы; ограничения зависят от инструмента.",
      "example": "iOS Simulator не заменяет все датчики устройства."
    },
    "en": {
      "answer": "Simulators model behavior; emulators imitate platform execution; limitations are tool-specific.",
      "example": "An iOS Simulator does not replace every real-device sensor."
    }
  },
  "automation-middle-47": {
    "uz": {
      "answer": "IaaS infratuzilma resursi, PaaS boshqariladigan dastur platformasi; mas’uliyat darajasi farq qiladi.",
      "example": "VM’ni o‘zimiz sozlash va tayyor platformaga deploy qilish."
    },
    "ru": {
      "answer": "IaaS даёт инфраструктуру, PaaS управляемую платформу; отличается ответственность.",
      "example": "Настроить VM или deploy на готовую платформу."
    },
    "en": {
      "answer": "IaaS provides infrastructure; PaaS a managed application platform with different responsibilities.",
      "example": "Configure your own VM versus deploying to a managed platform."
    }
  },
  "automation-middle-48": {
    "uz": {
      "answer": "Tizim sozlamalarini versiyalab, izchil qo‘llash va o‘zgarishlarni kuzatish.",
      "example": "Test va staging’dagi feature flag farqi qayd qilinadi."
    },
    "ru": {
      "answer": "Версионирование, согласованное применение и учёт изменений конфигурации.",
      "example": "Разница flags test/staging зафиксирована."
    },
    "en": {
      "answer": "Version, apply and track configuration consistently.",
      "example": "Record feature-flag differences between test and staging."
    }
  },
  "automation-middle-49": {
    "uz": {
      "answer": "Kerakli resurs va kirishlarni yaratib, ishlashga tayyorlash.",
      "example": "CI worker uchun VM va test baza ajratish."
    },
    "ru": {
      "answer": "Создание и подготовка ресурсов и доступа.",
      "example": "Выделить VM и test DB для CI worker."
    },
    "en": {
      "answer": "Create and prepare resources and access for use.",
      "example": "Provision a VM and test database for a CI worker."
    }
  },
  "automation-middle-50": {
    "uz": {
      "answer": "ipconfig tarmoqni, PowerShell/Get-Content/Select-String yoki CMD vositalari logni tekshirishga yordam beradi.",
      "example": "ipconfig bilan test mashina manzilini topish."
    },
    "ru": {
      "answer": "ipconfig для сети, PowerShell Get-Content/Select-String или CMD для логов.",
      "example": "Найти адрес test-машины через ipconfig."
    },
    "en": {
      "answer": "Use ipconfig for networking and PowerShell Get-Content/Select-String or CMD tools for logs.",
      "example": "Use ipconfig to inspect the test machine's address."
    }
  },
  "automation-middle-51": {
    "uz": {
      "answer": "Tayyorlash, runner va artifact yig‘ishni takrorlanadigan buyruqlarga aylantiradi.",
      "example": "Bir script data tayyorlab runner’ni ishga tushiradi."
    },
    "ru": {
      "answer": "Автоматизируют подготовку, запуск и сбор artifacts.",
      "example": "Script готовит data и запускает runner."
    },
    "en": {
      "answer": "Automate repeatable setup, execution and artifact collection.",
      "example": "A script prepares data and starts a runner."
    }
  },
  "automation-middle-52": {
    "uz": {
      "answer": "Desktop qobiq va web-renderer’ni ajratib, Electron/versionga mos vositani tanlaymiz; har Selenium yo‘li mos emas.",
      "example": "Web dialog va OS fayl oynasi turli qatlamda tekshiriladi."
    },
    "ru": {
      "answer": "Разделяем desktop и renderer, выбираем совместимый инструмент; не любой Selenium подходит.",
      "example": "Web dialog и OS picker проверяются разными слоями."
    },
    "en": {
      "answer": "Separate desktop shell and renderer and choose compatible tools; not every Selenium path fits.",
      "example": "A web dialog and an OS file picker need different interaction layers."
    }
  },
  "automation-middle-53": {
    "uz": {
      "answer": "Kuzatish, kutish yoki test mock bilan boshqaramiz; real integratsiya dalilini alohida saqlaymiz.",
      "example": "Sekin javobda loading indikatorini tekshiramiz."
    },
    "ru": {
      "answer": "Наблюдаем, ждём или mock, отдельно сохраняем реальные integration проверки.",
      "example": "Проверяем loading при медленном ответе."
    },
    "en": {
      "answer": "Observe, wait for or mock requests while retaining separate real-integration evidence.",
      "example": "Check a loading indicator under delayed responses."
    }
  },
  "automation-middle-54": {
    "uz": {
      "answer": "Scope, muddat, yozish/o‘chirish va xavfsizlik atributlarini tekshiramiz.",
      "example": "Logout’dan keyin eski session qayta ishlamaydi."
    },
    "ru": {
      "answer": "Проверяем scope, срок, сохранение/удаление и защитные атрибуты.",
      "example": "После logout старая session не действует."
    },
    "en": {
      "answer": "Check scope, expiry, writes/deletion and protective attributes.",
      "example": "An old session cannot be reused after logout."
    }
  },
  "manual-middle-74": {
    "uz": {
      "answer": "Har so‘rovda ishonchli sessiya/token, rol va obyekt egasini tekshiradi. UI cheklovi yetmaydi.",
      "example": "Tugma yashirin bo‘lsa ham, boshqa user buyurtmasiga so‘rov rad etiladi."
    },
    "ru": {
      "answer": "Каждый запрос проверяет сессию/token, роль и владельца объекта; ограничения UI недостаточно.",
      "example": "Даже со скрытой кнопкой запрос к чужому заказу отклоняется."
    },
    "en": {
      "answer": "Check a trusted session/token, role and object ownership on every request; UI restrictions are insufficient.",
      "example": "A request to another user's order is rejected even if the button is hidden."
    }
  },
  "manual-middle-75": {
    "uz": {
      "answer": "400 noto‘g‘ri mijoz so‘rovini, 5xx server tomonidagi muammoni bildiradi. Kodni API shartnomasi va sabab bilan tekshiramiz.",
      "example": "DB ishlamay qolsa, uni “noto‘g‘ri email” deb ko‘rsatish chalg‘itadi."
    },
    "ru": {
      "answer": "400 означает проблему запроса клиента, 5xx — серверную; сверяем код с причиной и контрактом.",
      "example": "Сбой БД не стоит выдавать за неверный email."
    },
    "en": {
      "answer": "400 indicates a client request problem; 5xx indicates server failure. Check the cause and API contract.",
      "example": "A database outage should not be presented as an invalid email."
    }
  },
  "manual-middle-76": {
    "uz": {
      "answer": "DevTools Performance/Network va Lighthouse yordamida yuklanish, uzun vazifalar va renderingni o‘rganamiz; haqiqiy qurilma sharoitini ham hisobga olamiz.",
      "example": "Sekin telefonda katta JavaScript vazifasi tugmani kech javob berishga olib keladi."
    },
    "ru": {
      "answer": "DevTools Performance/Network и Lighthouse помогают изучить загрузку, long tasks и rendering; учитываем реальные устройства.",
      "example": "На медленном телефоне большая JS-задача задерживает кнопку."
    },
    "en": {
      "answer": "Use DevTools Performance/Network and Lighthouse for loading, long tasks and rendering; include real device conditions.",
      "example": "A large JS task can delay a button response on a slow phone."
    }
  },
  "manual-middle-77": {
    "uz": {
      "answer": "Charles/mitmproxy HTTP(S) debugging proxy, Wireshark paket tahlilchisidir. HTTPS mazmunini ko‘rish uchun ruxsatli test konfiguratsiyasi kerak.",
      "example": "Proxy’da API so‘rovini, Wireshark’da DNS paketlarini o‘rganamiz."
    },
    "ru": {
      "answer": "Charles/mitmproxy — HTTP(S) debugging proxy, Wireshark — анализатор пакетов. HTTPS требует разрешённой тестовой настройки.",
      "example": "В proxy смотрим API, в Wireshark — DNS-пакеты."
    },
    "en": {
      "answer": "Charles/mitmproxy are HTTP(S) debugging proxies; Wireshark analyzes packets. HTTPS content needs an authorized test setup.",
      "example": "Inspect an API request in a proxy and DNS packets in Wireshark."
    }
  },
  "manual-middle-78": {
    "uz": {
      "answer": "CASE shartga mos qiymat qaytaradigan ifodadir, oddiy funksiya emas.",
      "example": "SELECT CASE WHEN total >= 100 THEN 'large' ELSE 'small' END FROM orders;"
    },
    "ru": {
      "answer": "CASE — выражение, возвращающее значение по условию, а не обычная функция.",
      "example": "SELECT CASE WHEN total >= 100 THEN 'large' ELSE 'small' END FROM orders;"
    },
    "en": {
      "answer": "CASE is an expression returning a value by condition, not an ordinary function.",
      "example": "SELECT CASE WHEN total >= 100 THEN 'large' ELSE 'small' END FROM orders;"
    }
  },
  "manual-middle-79": {
    "uz": {
      "answer": "Matnni taqqoslash va saralash qoidalarini belgilaydi: registr, aksent va til qoidalari DB sozlamasiga bog‘liq.",
      "example": "A va a teng hisoblanishi unique chekloviga ta’sir qiladi."
    },
    "ru": {
      "answer": "Определяет сравнение и сортировку текста: регистр, акценты и язык зависят от настройки БД.",
      "example": "Равенство A и a влияет на unique constraint."
    },
    "en": {
      "answer": "Defines text comparison and sorting; case, accents and language rules depend on DB configuration.",
      "example": "Treating A and a as equal affects a unique constraint."
    }
  },
  "manual-middle-80": {
    "uz": {
      "answer": "OLTP kundalik tranzaksiyalar uchun, OLAP katta hajmli tahlil uchun. Yuklama va tekshiruvlar ham farqlanadi.",
      "example": "Buyurtma yaratish — OLTP; yil savdo hisoboti — OLAP."
    },
    "ru": {
      "answer": "OLTP — текущие транзакции, OLAP — объёмная аналитика; проверки и нагрузка различаются.",
      "example": "Создание заказа — OLTP; годовой отчёт продаж — OLAP."
    },
    "en": {
      "answer": "OLTP serves operational transactions; OLAP serves large analytical queries, with different checks and workloads.",
      "example": "Creating an order is OLTP; an annual sales analysis is OLAP."
    }
  },
  "manual-middle-81": {
    "uz": {
      "answer": "Snapshot bir vaqtdagi nusxani, transactional o‘zgarishlarni tartib bilan, merge esa ikki tomondagi o‘zgarishlarni sinxronlaydi.",
      "example": "Merge’da bir yozuvni ikki tomon o‘zgartirsa, konflikt qoidasini tekshiramiz."
    },
    "ru": {
      "answer": "Snapshot передаёт снимок, transactional — изменения по порядку, merge синхронизирует изменения с двух сторон.",
      "example": "При merge проверяем конфликт изменений одной записи."
    },
    "en": {
      "answer": "Snapshot distributes a point-in-time copy, transactional ordered changes, and merge synchronizes changes from both sides.",
      "example": "For merge replication, check conflict handling when both sides edit a record."
    }
  },
  "manual-middle-82": {
    "uz": {
      "answer": "Jadvalni turli alias bilan o‘ziga ulashdir.",
      "example": "SELECT e.name, m.name FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;"
    },
    "ru": {
      "answer": "Соединение таблицы с самой собой через разные alias.",
      "example": "SELECT e.name, m.name FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;"
    },
    "en": {
      "answer": "Joining a table to itself using different aliases.",
      "example": "SELECT e.name, m.name FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;"
    }
  },
  "manual-middle-83": {
    "uz": {
      "answer": "Natija qatorlarini bittadan qayta ishlashga imkon beradi. Odatda set-based query sodda va tezroq; cursor lifecycle’i DBga bog‘liq.",
      "example": "Declare, open, fetch, close; kerak bo‘lsa deallocate bilan resurs bo‘shatiladi."
    },
    "ru": {
      "answer": "Обрабатывает строки по одной. Обычно set-based query проще и быстрее; lifecycle зависит от СУБД.",
      "example": "Declare, open, fetch, close; при необходимости deallocate освобождает ресурс."
    },
    "en": {
      "answer": "Processes rows one at a time. Set-based queries are often simpler and faster; lifecycle depends on the DB.",
      "example": "Declare, open, fetch, close; deallocate resources where required."
    }
  },
  "manual-middle-84": {
    "uz": {
      "answer": "Ilova komponentlari, permissions va intent-filter kabi deklaratsiyalarni. Bu runtime foydalanuvchi roziligi o‘rnini bosmaydi.",
      "example": "Kamera permission’i deklaratsiyasi va uning rad etilishidagi xulqni tekshiramiz."
    },
    "ru": {
      "answer": "Компоненты, permissions и intent filters. Не заменяет разрешения пользователя в runtime.",
      "example": "Проверяем camera permission и поведение при отказе."
    },
    "en": {
      "answer": "App components, permissions and intent filters; it does not replace runtime user consent.",
      "example": "Check camera permission declaration and behavior after denial."
    }
  },
  "manual-middle-85": {
    "uz": {
      "answer": "Fayl, preferences/key-value, lokal DB va platformaning himoyalangan saqlash joyida; maxfiy ma’lumot uchun mos himoya kerak.",
      "example": "Tokenni oddiy log yoki ochiq faylda saqlamaslik tekshiriladi."
    },
    "ru": {
      "answer": "Файлы, preferences/key-value, локальная БД и защищённое хранилище платформы; секреты требуют защиты.",
      "example": "Проверяем, что token не записан в открытый файл или лог."
    },
    "en": {
      "answer": "Files, preferences/key-value, local databases and platform secure storage; secrets need suitable protection.",
      "example": "Check that tokens are not written to plaintext files or logs."
    }
  },
  "manual-middle-86": {
    "uz": {
      "answer": "Activity — ekran, service — fon ishi, receiver — xabar qabul qilish, provider — ma’lumot almashish. Fragment UI qismi, intent-filter mos intentlarni belgilaydi.",
      "example": "Deep link kerakli activity’ni ochadi, fragment esa uning ichidagi formani ko‘rsatadi."
    },
    "ru": {
      "answer": "Activity — экран, service — фон, receiver — сообщения, provider — данные. Fragment — часть UI, intent-filter задаёт подходящие intents.",
      "example": "Deep link открывает activity, fragment отображает форму."
    },
    "en": {
      "answer": "Activity provides UI, service background work, receiver events and provider shared data. A fragment is a UI portion; intent filters declare matching intents.",
      "example": "A deep link opens an activity whose fragment displays a form."
    }
  },
  "manual-middle-87": {
    "uz": {
      "answer": "Ilovalar va API framework, runtime/native kutubxonalar, HAL va Linux kernel qatlamlari bor.",
      "example": "Kamera API’si framework orqali qurilma implementatsiyasiga boradi."
    },
    "ru": {
      "answer": "Приложения/API framework, runtime/native библиотеки, HAL и Linux kernel.",
      "example": "Camera API через framework обращается к реализации устройства."
    },
    "en": {
      "answer": "Applications/API framework, runtime/native libraries, HAL and the Linux kernel.",
      "example": "A camera API reaches device implementation through the framework."
    }
  },
  "manual-middle-88": {
    "uz": {
      "answer": "Imzolangan build, versiya va muhitni tekshiramiz. Android uchun test track yoki ruxsatli install, iOS uchun TestFlight kabi kanal ishlatiladi.",
      "example": "Eski versiya ustiga yangilashda login va lokal ma’lumot saqlanishini tekshiramiz."
    },
    "ru": {
      "answer": "Проверяем подпись, версию и среду; Android — test track/разрешённая установка, iOS — например TestFlight.",
      "example": "При обновлении проверяем login и сохранность локальных данных."
    },
    "en": {
      "answer": "Check signed builds, version and environment; use Android test tracks/authorized installation or iOS TestFlight.",
      "example": "Verify login and local data survive an upgrade from an older version."
    }
  },
  "manual-middle-89": {
    "uz": {
      "answer": "Dalil va talqinlarni yozamiz, riskni baholaymiz; vaqtinchalik taxminni ochiq belgilab, vakolatli egadan qarorni kutamiz. Taxminni talab deb e’lon qilmaymiz.",
      "example": "Pul yechilishi noaniq bo‘lsa, blocker sifatida ko‘tarib, boshqa tekshiruvlarni davom ettiramiz."
    },
    "ru": {
      "answer": "Фиксируем факты и варианты, оцениваем риск; явно обозначаем временное допущение и ждём решения владельца.",
      "example": "Неясное списание денег эскалируем и продолжаем другие проверки."
    },
    "en": {
      "answer": "Record evidence and interpretations, assess risk, label provisional assumptions and seek the authorized owner's decision.",
      "example": "Escalate ambiguous charging behavior while continuing independent checks."
    }
  },
  "manual-middle-90": {
    "uz": {
      "answer": "Qolgan hajm va riskni ochiq aytamiz; resurs, parallel ish va eng muhim tekshiruvlarni taklif qilamiz. Riskni release egasi qabul qiladi, QA kafolat bermaydi.",
      "example": "1000 tekshiruvning hammasi bajarilmaganini hisobotda yashirmaymiz."
    },
    "ru": {
      "answer": "Показываем объём и риски, предлагаем ресурсы, параллельную работу и приоритетные проверки; риск принимает release owner.",
      "example": "Не скрываем, что часть из 1000 проверок не выполнена."
    },
    "en": {
      "answer": "Expose remaining work and risks; propose resources, parallel work and priority checks. The release owner accepts residual risk.",
      "example": "Do not conceal unexecuted checks in the release report."
    }
  },
  "manual-middle-91": {
    "uz": {
      "answer": "Kritik oqim, arxitektura va riskni o‘rganadi, joriy feature tekshiruviga parallel eng muhim yetishmagan hujjat va smoke’ni yaratadi.",
      "example": "Barcha eski hujjatni qayta yozishdan oldin checkout oqimini tekshiramiz."
    },
    "ru": {
      "answer": "Изучает критические потоки, архитектуру и риски; параллельно текущим функциям восстанавливает важные документы и smoke.",
      "example": "До переписывания всех документов проверяем checkout."
    },
    "en": {
      "answer": "Learn critical flows, architecture and risks; recover essential documentation and smoke checks alongside current feature testing.",
      "example": "Check checkout before rewriting all historical documentation."
    }
  },
  "manual-middle-92": {
    "uz": {
      "answer": "Yo‘q. Network so‘rov/javobi va qayta o‘qish orqali tekshiramiz; DB kirishi bo‘lsa mos yozuvni tekshiramiz. DBsiz UI/API read-back dalil, ichki DB yozuvining to‘liq isboti emas.",
      "example": "Sahifani qayta ochib yoki GET orqali yaratilgan profilni tekshiramiz."
    },
    "ru": {
      "answer": "Нет. Проверяем Network и повторное чтение; с доступом к БД — запись. Без него read-back даёт внешнее подтверждение, не полный аудит БД.",
      "example": "Повторно открываем профиль или читаем через GET."
    },
    "en": {
      "answer": "No. Inspect the request/response and read back the data; check the record with DB access. UI/API read-back without access is external evidence, not a full DB audit.",
      "example": "Reopen the profile or retrieve it through GET."
    }
  },
  "manual-middle-93": {
    "uz": {
      "answer": "Foydalanuvchi vazifasi, kuzatilgan qiyinchilik va o‘lchanadigan natijani bog‘laymiz; taxminni usability tekshiruvi bilan tekshiramiz.",
      "example": "Email xatosini maydon yonida aniq ko‘rsatish qayta urinishni osonlashtiradi."
    },
    "ru": {
      "answer": "Связываем задачу пользователя, наблюдаемую трудность и измеримый результат; проверяем гипотезу usability-тестом.",
      "example": "Ясная ошибка рядом с email облегчает исправление."
    },
    "en": {
      "answer": "Connect the user task, observed difficulty and measurable outcome; validate the hypothesis through usability checks.",
      "example": "A clear error beside the email field makes correction easier."
    }
  },
  "manual-middle-94": {
    "uz": {
      "answer": "Asosiy sahifa, login, qidiruv, vakansiya tafsiloti va asosiy murojaat oqimini tekshiramiz; real tashqi xabar yubormasdan test muhitidan foydalanamiz.",
      "example": "“QA” qidiruvi mos vakansiyani ochadi va test ariza tasdig‘ini ko‘rsatadi."
    },
    "ru": {
      "answer": "Главная, login, поиск, карточка вакансии и отклик; используем тестовую среду без реальных внешних сообщений.",
      "example": "Поиск QA открывает вакансию и подтверждает тестовый отклик."
    },
    "en": {
      "answer": "Check home, login, search, job details and applying in a test environment.",
      "example": "A QA search opens a job and confirms a test application."
    }
  },
  "manual-middle-95": {
    "uz": {
      "answer": "Kartasiz, karta kiritilgan, PIN tekshiruvi, ruxsatli amal va kartani qaytarish holatlarini, valid/invalid o‘tishlarni belgilaymiz.",
      "example": "PIN tasdiqlanmasdan pul yechish mumkin emas; cancel kartani qaytaradi."
    },
    "ru": {
      "answer": "Выделяем состояния без карты, вставлена карта, PIN, разрешённые операции и возврат; проверяем допустимые и запретные переходы.",
      "example": "Без PIN нельзя снять деньги; cancel возвращает карту."
    },
    "en": {
      "answer": "Model no card, card inserted, PIN verification, authorized operations and card return; check valid and invalid transitions.",
      "example": "Withdrawal requires PIN approval; cancel returns the card."
    }
  },
  "manual-middle-96": {
    "uz": {
      "answer": "Minimum, maximum, valyuta aniqligi va yaxlitlash qoidasini bilib, chegaraning o‘zi va eng yaqin valid/invalid qiymatlarni olamiz.",
      "example": "1.00–500.00 uchun 0.99, 1.00, 1.01, 499.99, 500.00, 500.01."
    },
    "ru": {
      "answer": "Уточняем min/max, точность валюты и округление; проверяем границу и соседние значения.",
      "example": "Для 1.00–500.00: 0.99, 1.00, 1.01, 499.99, 500.00, 500.01."
    },
    "en": {
      "answer": "Clarify minimum, maximum, currency precision and rounding; test boundaries and adjacent values.",
      "example": "For 1.00–500.00: 0.99, 1.00, 1.01, 499.99, 500.00, 500.01."
    }
  },
  "manual-middle-97": {
    "uz": {
      "answer": "Valid, yo‘q/null/noto‘g‘ri tip, format/uzunlik, duplicate, ruxsat va ortiqcha maydonlarni tekshiramiz; rad etishda yozuv yaratilmasligi kerak.",
      "example": "Bir email ikki marta yuborilganda contractga mos xato va bitta account qoladi."
    },
    "ru": {
      "answer": "Valid, отсутствующие/null/неверные типы, формат/длина, дубликаты, права и лишние поля; при отказе запись не создаётся.",
      "example": "Повтор email даёт ошибку по контракту, account остаётся один."
    },
    "en": {
      "answer": "Check valid, missing/null/wrong types, formats/lengths, duplicates, permissions and unexpected fields; rejection must not create a record.",
      "example": "Submitting the same email twice returns a contract-defined error and leaves one account."
    }
  },
  "manual-middle-98": {
    "uz": {
      "answer": "Qayta ishlab, validatsiya, Console, Network, loading va javobni tekshiramiz; muammoning UI yoki server qismida ekanini dalil bilan ajratamiz.",
      "example": "Request yo‘q bo‘lsa UI handler; request 500 bo‘lsa server tomoni o‘rganiladi."
    },
    "ru": {
      "answer": "Воспроизводим, смотрим validation, Console, Network, loading и ответ; локализуем по фактам.",
      "example": "Нет request — изучаем UI handler; 500 — сервер."
    },
    "en": {
      "answer": "Reproduce and inspect validation, Console, Network, loading and responses to localize the failure.",
      "example": "No request suggests investigating the UI handler; a 500 suggests server investigation."
    }
  },
  "manual-middle-99": {
    "uz": {
      "answer": "Ko‘rinadigan muammo va taxminni ajratamiz; joyi, holati va ta’siri bilan bug yozamiz, talab noma’lum bo‘lsa aniqlashtiramiz.",
      "example": "Mahsulot kartasida rasm yuklanmagan va narx matni ustma-ust: ikki alohida bug. Boshqa valyuta esa talab bilan tekshiriladi."
    },
    "ru": {
      "answer": "Разделяем видимый дефект и предположение; фиксируем место, состояние и влияние, уточняем неизвестные требования.",
      "example": "Нет картинки и перекрыт текст цены: два дефекта; другую валюту сверяем с требованиями."
    },
    "en": {
      "answer": "Separate observable defects from assumptions; record location, state and impact, and clarify unknown requirements.",
      "example": "A missing image and overlapping price text are separate defects; a different currency requires checking requirements."
    }
  },
  "automation-middle-55": {
    "uz": {
      "answer": "Test account/token, create javobidagi ID, GET orqali fayl mazmuni, negative auth va cleanupni rejalaymiz. CI’da secret va artifactlar boshqariladi.",
      "example": "Create’dan olingan ID bilan GET qilib mazmunni solishtiramiz, so‘ng test gist’ni o‘chiramiz."
    },
    "ru": {
      "answer": "Планируем test account/token, ID из create, чтение содержимого через GET, negative auth и cleanup; CI управляет secrets/artifacts.",
      "example": "Читаем gist по созданному ID, сверяем содержимое и удаляем."
    },
    "en": {
      "answer": "Plan a test account/token, create response ID, GET content checks, negative authentication and cleanup; manage CI secrets and artifacts.",
      "example": "Retrieve the created gist by its ID, compare contents, then delete the test gist."
    }
  },
  "manual-senior-43": {
    "uz": {
      "answer": "Biznes maqsad, foydalanuvchi oqimi va riskni bilib, quality mezonlari, mas’uliyat, muhit, ma’lumot va feedback jarayonini kelishamiz.",
      "example": "Checkout uchun qabul mezoni, test to‘lov muhiti va release gate belgilanadi."
    },
    "ru": {
      "answer": "Изучаем цели, потоки и риски, согласуем критерии качества, ответственность, среду, данные и feedback.",
      "example": "Для checkout определяем критерии, тестовую оплату и release gate."
    },
    "en": {
      "answer": "Understand goals, flows and risks; agree quality criteria, ownership, environments, data and feedback.",
      "example": "Define checkout acceptance criteria, a payment sandbox and a release gate."
    }
  },
  "manual-senior-44": {
    "uz": {
      "answer": "Tez o‘zgaruvchi scope, kech feedback, noaniq talab va ajralgan jamoa riskdir. Erta hamkorlik va kichik testlanadigan o‘zgarishlar yordam beradi.",
      "example": "Sprint oxirida katta batch o‘rniga kichik feature’lar kunma-kun tekshiriladi."
    },
    "ru": {
      "answer": "Риски: изменчивый scope, поздний feedback, неясные требования и разобщённость; помогают раннее сотрудничество и небольшие изменения.",
      "example": "Малые функции проверяются ежедневно вместо большого batch в конце sprint."
    },
    "en": {
      "answer": "Changing scope, late feedback, unclear requirements and silos create risk; early collaboration and small testable changes help.",
      "example": "Check small features daily instead of one large batch at sprint end."
    }
  },
  "manual-senior-45": {
    "uz": {
      "answer": "Product risk sifatga, project risk yetkazishga ta’sir qiladi. Rejada sabab, ehtimol/ta’sir, oldini olish, fallback, owner va trigger bo‘ladi.",
      "example": "To‘lov servisi ishlamasa: monitoring, test, fallback va javobgar shaxs belgilanadi."
    },
    "ru": {
      "answer": "Product risk влияет на качество, project risk на выполнение; план содержит вероятность/влияние, меры, fallback, owner и trigger.",
      "example": "Для сбоя оплаты задаём monitoring, тесты, fallback и owner."
    },
    "en": {
      "answer": "Product risks affect quality; project risks affect delivery. A plan names likelihood/impact, prevention, fallback, owner and triggers.",
      "example": "For payment outages, define monitoring, checks, fallback and ownership."
    }
  },
  "manual-senior-46": {
    "uz": {
      "answer": "Talab, risk, arxitektura yoki bug o‘zgarganda va kelishilgan davriy review’da. Faqat kalendar yetarli emas.",
      "example": "Login MFA bilan o‘zgarsa, tegishli case’lar shu o‘zgarishda yangilanadi."
    },
    "ru": {
      "answer": "При изменении требований, рисков, архитектуры или дефектов, плюс согласованные регулярные review.",
      "example": "При добавлении MFA сразу обновляем login cases."
    },
    "en": {
      "answer": "When requirements, risks, architecture or defects change, plus agreed periodic reviews.",
      "example": "Update login cases when MFA is introduced."
    }
  },
  "manual-senior-47": {
    "uz": {
      "answer": "Kritik foydalanuvchi oqimi, asosiy integratsiya va muhit tayyorligini qisqa, ishonchli to‘plamga olamiz.",
      "example": "Login → mahsulot → buyurtma tasdig‘i; barcha chekka holatlar regression’da."
    },
    "ru": {
      "answer": "Берём критические потоки, основные интеграции и готовность среды в короткий надёжный набор.",
      "example": "Login → товар → подтверждение; edge cases остаются regression."
    },
    "en": {
      "answer": "Choose a short reliable set of critical flows, key integrations and environment readiness checks.",
      "example": "Login → product → order confirmation; edge cases belong in regression."
    }
  },
  "manual-senior-48": {
    "uz": {
      "answer": "Universal raqam yo‘q. Bitta maqsad, aniq shart va natija bo‘lsin; juda uzun case mustaqil tekshiruvlarga bo‘linadi.",
      "example": "Login va refund bitta case emas, alohida maqsadlardir."
    },
    "ru": {
      "answer": "Универсального числа нет: одна цель, ясные условия и результат; длинные cases делим на независимые проверки.",
      "example": "Login и refund — разные цели, не один case."
    },
    "en": {
      "answer": "There is no universal number: keep one goal, clear conditions and expected results; split long cases into independent checks.",
      "example": "Login and refund are separate goals and cases."
    }
  },
  "automation-senior-20": {
    "uz": {
      "answer": "Kichik mantiq qismini tez, ajratilgan holda tekshiradi va xatoni yaqin joyda topadi. Integratsiyani to‘liq isbotlamaydi.",
      "example": "Chegirma hisoblash funksiyasi DBsiz tekshiriladi."
    },
    "ru": {
      "answer": "Быстро проверяют небольшой изолированный участок логики и локализуют дефект; не доказывают всю интеграцию.",
      "example": "Функцию скидки проверяем без БД."
    },
    "en": {
      "answer": "Quickly check small isolated logic and localize defects; they do not prove complete integration.",
      "example": "Check a discount function without the database."
    }
  },
  "automation-senior-21": {
    "uz": {
      "answer": "Maintenance, flaky natija, muhit va noto‘g‘ri oracle xarajati bor. Exploratory va usability inson mulohazasini ham talab qiladi.",
      "example": "Har hafta o‘zgaradigan prototip UI’sida avval qo‘lda feedback foydaliroq bo‘lishi mumkin."
    },
    "ru": {
      "answer": "Есть стоимость поддержки, flaky результатов, среды и oracle; exploratory/usability требуют человеческой оценки.",
      "example": "На постоянно меняющемся UI сначала полезнее ручной feedback."
    },
    "en": {
      "answer": "Maintenance, flakiness, environments and poor oracles cost effort; exploratory/usability work also needs human judgment.",
      "example": "A rapidly changing prototype may benefit first from manual feedback."
    }
  },
  "automation-senior-22": {
    "uz": {
      "answer": "Bir davr uchun ROI = (foyda − jami xarajat) / jami xarajat × 100%. Yaratish, maintenance va infra ham xarajatga kiradi; taxminlarni ko‘rsatamiz.",
      "example": "Foyda 150, xarajat 100 bo‘lsa ROI 50%; qayta ishlash xarajati ham qo‘shiladi."
    },
    "ru": {
      "answer": "За один период ROI = (выгода − все затраты) / все затраты × 100%; включаем создание, поддержку и инфраструктуру.",
      "example": "Выгода 150, затраты 100: ROI 50%; учитываем переделки."
    },
    "en": {
      "answer": "For one period, ROI = (benefit − total cost) / total cost × 100%; include creation, maintenance and infrastructure and state assumptions.",
      "example": "Benefit 150 and cost 100 gives 50% ROI, including rework costs."
    }
  },
  "automation-senior-23": {
    "uz": {
      "answer": "CI o‘zgarishlarni tez-tez birlashtirib tekshiradi. Delivery release’ga tayyorlaydi, deployment esa o‘tgan buildni avtomatik chiqaradi. QA tekshiruvlari pipeline’da erta feedback va release gate beradi; muhit va gate’larni saqlash xarajati bor.",
      "example": "Delivery’da production uchun approval qolishi mumkin; deployment’da chiqarish avtomatik."
    },
    "ru": {
      "answer": "CI часто объединяет и проверяет изменения; delivery готовит release, deployment автоматически выпускает прошедший build. QA-проверки дают ранний feedback и release gates; среды и gates требуют поддержки.",
      "example": "В delivery возможен approval на production, в deployment выпуск автоматический."
    },
    "en": {
      "answer": "CI integrates and checks frequently; delivery prepares releases, deployment releases passing builds automatically. QA checks provide early feedback and release gates in the pipeline; environments and gates need upkeep.",
      "example": "Delivery may retain production approval; deployment releases automatically."
    }
  },
  "manual-senior-49": {
    "uz": {
      "answer": "Tarmoq aloqa endpoint’idir. Protokol shartnomasi, ulanish, timeout, uzilish, partial data va resurslarni qo‘lda/avtomatik tekshiramiz.",
      "example": "TCP’da bitta send bitta read’ga teng bo‘lishi shart emas; xabar chegarasi protokolda aniqlanadi."
    },
    "ru": {
      "answer": "Endpoint сетевого обмена. Проверяем протокол, соединение, timeout, разрыв, partial data и ресурсы вручную/автоматически.",
      "example": "В TCP один send не обязан равняться одному read; границы задаёт протокол."
    },
    "en": {
      "answer": "A network communication endpoint. Check the protocol, connection, timeout, disconnects, partial data and resources manually or automatically.",
      "example": "One TCP send need not equal one read; the protocol defines message boundaries."
    }
  },
  "manual-senior-50": {
    "uz": {
      "answer": "Handshake kalitlarni kelishadi va sertifikatni tekshiradi; simmetrik AEAD, masalan AES-GCM yoki ChaCha20-Poly1305, trafikni himoyalaydi.",
      "example": "HTTPS uchun sertifikat muddati va noto‘g‘ri hostname rad etilishi tekshiriladi."
    },
    "ru": {
      "answer": "Handshake согласует ключи и проверяет сертификат; symmetric AEAD, например AES-GCM или ChaCha20-Poly1305, защищает трафик.",
      "example": "Для HTTPS проверяем срок сертификата и отказ при неверном hostname."
    },
    "en": {
      "answer": "A handshake establishes keys and validates certificates; symmetric AEAD such as AES-GCM or ChaCha20-Poly1305 protects traffic.",
      "example": "Check certificate validity and rejection of a mismatched hostname."
    }
  },
  "manual-senior-51": {
    "uz": {
      "answer": "Network interface controller — qurilmani tarmoqqa ulaydigan interfeys. Ethernet yoki Wi-Fi bo‘lishi mumkin.",
      "example": "Tarmoq muammosida interfeys holati, IP va packet loss tekshiriladi."
    },
    "ru": {
      "answer": "Network interface controller — сетевой интерфейс устройства, например Ethernet или Wi-Fi.",
      "example": "При проблеме смотрим состояние интерфейса, IP и packet loss."
    },
    "en": {
      "answer": "A network interface controller connects a device to a network, such as Ethernet or Wi-Fi.",
      "example": "For a connection problem, inspect interface status, IP and packet loss."
    }
  },
  "manual-senior-52": {
    "uz": {
      "answer": "Real-time audio/video uzatishda sequence va timestamp beradi; delivery yoki sifatni kafolatlamaydi. RTCP sifat kuzatuviga yordam beradi.",
      "example": "Qo‘ng‘iroqda packet loss, jitter va kechikish o‘lchanadi."
    },
    "ru": {
      "answer": "Даёт sequence/timestamp для real-time audio/video, не гарантирует доставку или качество; RTCP помогает мониторингу.",
      "example": "Для звонка измеряем packet loss, jitter и задержку."
    },
    "en": {
      "answer": "Provides sequencing and timestamps for real-time audio/video; it does not guarantee delivery or quality. RTCP helps monitoring.",
      "example": "Measure packet loss, jitter and latency during a call."
    }
  },
  "manual-senior-53": {
    "uz": {
      "answer": "SIP IP orqali session signalizatsiyasi, PRI ISDN trunk interfeysidir. Tanlov mavjud infra, kanal sig‘imi, ishonchlilik va xarajatga bog‘liq.",
      "example": "SIP uchun internet/failover, PRI uchun mavjud liniya va kanal cheklovi tekshiriladi."
    },
    "ru": {
      "answer": "SIP — сигнализация sessions по IP, PRI — ISDN trunk interface. Выбор зависит от инфраструктуры, ёмкости, надёжности и затрат.",
      "example": "Для SIP оцениваем сеть/failover, для PRI линию и число каналов."
    },
    "en": {
      "answer": "SIP provides IP session signaling; PRI is an ISDN trunk interface. Choose by infrastructure, capacity, reliability and cost.",
      "example": "Assess connectivity/failover for SIP and available lines/channel capacity for PRI."
    }
  },
  "manual-senior-54": {
    "uz": {
      "answer": "Ichki va tashqi IP manzillarni, ko‘pincha portlarni ham almashtiradi. Inbound ulanish, timeout va real-time trafik uchun muhim.",
      "example": "Uzoq idle’dan so‘ng NAT mapping yo‘qolsa, chat qayta ulanadi."
    },
    "ru": {
      "answer": "Преобразует внутренние/внешние IP, часто и порты; влияет на inbound connections, timeout и real-time трафик.",
      "example": "После idle NAT mapping может исчезнуть, чат должен переподключиться."
    },
    "en": {
      "answer": "Translates internal/external IP addresses, often ports too; affects inbound connections, timeouts and real-time traffic.",
      "example": "After an idle NAT mapping expires, a chat may need to reconnect."
    }
  },
  "manual-senior-55": {
    "uz": {
      "answer": "1) Client→server→DB: bitta failure nuqtasi. 2) Ko‘p client→server→DB: sig‘im. 3) Client→ko‘p server→DB: routing, sessiya, umumiy DB bottleneck. 4) Ko‘p server→DB balancer→ko‘p DB: read/write routing, replication va consistency. Diagrammaning o‘zi ishlashni isbotlamaydi.",
      "example": "Server almashganda login sessiyasi yo‘qolmasligi, DB replica’da yangi buyurtma kech ko‘rinishi tekshiriladi."
    },
    "ru": {
      "answer": "1) Client→server→БД: единая точка отказа. 2) Много clients→server→БД: ёмкость. 3) Client→много servers→БД: routing, sessions, узкое место БД. 4) Servers→DB balancer→много БД: read/write routing, replication/consistency. Схема сама не доказывает работоспособность.",
      "example": "Проверяем сохранность session при смене server и задержку заказа на replica."
    },
    "en": {
      "answer": "1) Client→server→DB: single points of failure. 2) Many clients→server→DB: capacity. 3) Client→many servers→DB: routing, sessions and shared DB bottleneck. 4) Servers→DB balancer→many DBs: read/write routing, replication and consistency. A diagram alone does not prove viability.",
      "example": "Check session continuity after switching servers and delayed visibility on a replica."
    }
  },
  "manual-senior-56": {
    "uz": {
      "answer": "Credential URLga tushmasin: odatda POST over HTTPS. Javob API contractga mos; autentifikatsiya va ruxsat farqlanadi. TLS o‘rniga o‘zboshimcha payload shifrlashni yechim deb qabul qilmaymiz.",
      "example": "GET /login?password=... history va logga tushishi mumkin; HTTPS bu URLning lokal logini yashirmaydi."
    },
    "ru": {
      "answer": "Credentials не должны попадать в URL: обычно POST over HTTPS. Ответ по контракту, authentication отдельно от authorization; самодельное шифрование payload не заменяет TLS.",
      "example": "GET с password может попасть в history/log; HTTPS не скрывает локальное логирование URL."
    },
    "en": {
      "answer": "Keep credentials out of URLs, usually with POST over HTTPS. Responses follow the contract; distinguish authentication from authorization. Custom payload encryption does not replace TLS.",
      "example": "A GET URL containing a password may enter history/logs; HTTPS does not hide local URL logging."
    }
  },
  "manual-senior-57": {
    "uz": {
      "answer": "Ruxsatli muhitda access control, injection/XSS, auth/session, CSRF, maxfiy ma’lumot, sozlamalar va dependency risklarini tekshiramiz; OWASP ro‘yxati riskga yo‘nalish beradi.",
      "example": "Parol logga tushmasin, boshqa user yozuvi ochilmasin, sessiya logout’dan so‘ng yaroqsiz bo‘lsin."
    },
    "ru": {
      "answer": "В разрешённой среде проверяем access control, injection/XSS, auth/session, CSRF, секреты, настройки и dependencies; OWASP задаёт ориентиры риска.",
      "example": "Пароль не в логах, чужие записи закрыты, session недействительна после logout."
    },
    "en": {
      "answer": "In an authorized environment check access control, injection/XSS, auth/sessions, CSRF, secrets, configuration and dependencies; OWASP guides risk selection.",
      "example": "Ensure passwords stay out of logs, other users' records are protected and logout invalidates sessions."
    }
  },
  "manual-junior-125": {
    "uz": {
      "answer": "QA sifatli mahsulot yaratishga yordam beradigan jarayonlarni tashkil qiladi va muammolarni oldini olishga qaratiladi; testlash uning bir qismidir.",
      "example": "Talabni birga review qilish xatoni kod yozilishidan oldin topishi mumkin."
    },
    "ru": {
      "answer": "QA организует процессы для качества и предотвращения проблем; тестирование — одна из частей.",
      "example": "Совместный review требований находит проблему до кода."
    },
    "en": {
      "answer": "QA organizes processes supporting quality and preventing problems; testing is one part.",
      "example": "Reviewing requirements together can reveal a problem before coding."
    }
  },
  "manual-junior-126": {
    "uz": {
      "answer": "Talab va qabul mezonidan boshlaymiz; asosiy oqim, edge case, permissions, tarmoq va device/OS farqlarini tekshiramiz. Buglarni dalil bilan yozib, tuzatishdan keyin qayta tekshiramiz.",
      "example": "Rasm yuklashda muvaffaqiyat, kamera ruxsati rad etilishi va uzilgan upload tekshiriladi."
    },
    "ru": {
      "answer": "Начинаем с требований и критериев; проверяем основной поток, edge cases, permissions, сеть и device/OS различия. Фиксируем дефекты с доказательствами и перепроверяем исправления.",
      "example": "Для upload фото проверяем успех, отказ camera permission и разрыв."
    },
    "en": {
      "answer": "Start with requirements and acceptance criteria; check main flows, edge cases, permissions, network and device/OS variations. Document defects with evidence and confirm fixes.",
      "example": "For photo upload, check success, denied camera access and interrupted upload."
    }
  },
  "manual-junior-127": {
    "uz": {
      "answer": "Odatdagi oqimdan tashqaridagi chekka yoki kam uchraydigan holat; riskga qarab tekshiriladi.",
      "example": "Savatdagi oxirgi mahsulotni o‘chirganda bo‘sh holat to‘g‘ri ko‘rinadi."
    },
    "ru": {
      "answer": "Граничная или редкая ситуация вне обычного потока; проверяется по риску.",
      "example": "Удаление последнего товара показывает пустую корзину."
    },
    "en": {
      "answer": "A boundary or unusual condition beyond the typical flow; choose checks by risk.",
      "example": "Removing the last cart item shows the correct empty state."
    }
  },
  "manual-junior-128": {
    "uz": {
      "answer": "Talab, risk va foydalanuvchi oqimini testlarga bog‘laymiz, pozitiv/negativ va chegaralarni review qilamiz. Test sonining o‘zi yetmaydi.",
      "example": "Checkout talabi to‘lov muvaffaqiyati va rad etilishi case’lariga bog‘lanadi."
    },
    "ru": {
      "answer": "Связываем требования, риски и потоки с тестами, review позитивных/негативных проверок и границ; одного количества мало.",
      "example": "Checkout связан с успешной и отклонённой оплатой."
    },
    "en": {
      "answer": "Map requirements, risks and flows to checks and review positive/negative cases and boundaries; a count alone is insufficient.",
      "example": "Map checkout to successful and declined payment cases."
    }
  },
  "automation-junior-63": {
    "uz": {
      "answer": "Manual’da odam tekshiruvni bajarib baholaydi; automation’da kod/vosita belgilangan tekshiruvni takrorlaydi. Ikkisi bir-birini to‘ldiradi.",
      "example": "Usability kuzatuvi qo‘lda, barqaror API regression avtomatik bo‘lishi mumkin."
    },
    "ru": {
      "answer": "В manual человек выполняет и оценивает проверку, в automation код/инструмент повторяет заданную проверку; они дополняют друг друга.",
      "example": "Usability вручную, стабильный API regression автоматически."
    },
    "en": {
      "answer": "A person performs and evaluates manual checks; code/tools repeat defined automated checks. They complement each other.",
      "example": "Usability observation may be manual and stable API regression automated."
    }
  },
  "automation-junior-64": {
    "uz": {
      "answer": "Yangi, tez o‘zgaradigan, bir martalik yoki inson mulohazasi zarur bo‘lgan tekshiruvlarda.",
      "example": "Yangi formaning matni tushunarliligini foydalanuvchi bilan ko‘ramiz."
    },
    "ru": {
      "answer": "Для новых, быстро меняющихся, разовых проверок или оценки человеком.",
      "example": "Понятность новой формы оцениваем с пользователем."
    },
    "en": {
      "answer": "For new, rapidly changing, one-off checks or checks needing human judgment.",
      "example": "Evaluate a new form's clarity with a user."
    }
  },
  "automation-junior-65": {
    "uz": {
      "answer": "Takrorlanish, barqarorlik, aniq expected result, boshqariladigan data/muhit va maintenance foydasini baholaymiz.",
      "example": "Har release’da ishlaydigan total hisoblash testi barqaror va natijasi aniq."
    },
    "ru": {
      "answer": "Повторяемость, стабильность, ясный expected result, управляемые data/среда и стоимость поддержки.",
      "example": "Расчёт total в каждом release стабилен и имеет ясный результат."
    },
    "en": {
      "answer": "Assess repeatability, stability, clear expected results, controllable data/environments and maintenance value.",
      "example": "A total calculation repeated each release is stable with a clear result."
    }
  },
  "automation-junior-66": {
    "uz": {
      "answer": "Tez takrorlash va izchillik beradi, lekin yaratish/maintenance talab qiladi va yozilmagan muammoni kafolatli topmaydi.",
      "example": "API regression tez ishlaydi, ammo yangi usability muammosi uchun inson kuzatuvi kerak."
    },
    "ru": {
      "answer": "Быстрые повторения и согласованность, но создание/поддержка стоят усилий; непредусмотренные проблемы не гарантированы.",
      "example": "API regression быстрый, новая usability проблема требует наблюдения."
    },
    "en": {
      "answer": "Fast repeatability and consistency, but creation/maintenance cost effort and unspecified problems are not guaranteed to be found.",
      "example": "API regression runs quickly, but a new usability issue needs human observation."
    }
  },
  "automation-junior-67": {
    "uz": {
      "answer": "Ko‘p tez unit, kamroq integration/API va oz kritik E2E tekshiruvga yo‘nalish. Aniq ulush arxitektura va riskga bog‘liq.",
      "example": "Narx mantiqi unit’da, checkout’ning asosiy oqimi E2E’da."
    },
    "ru": {
      "answer": "Ориентир: много быстрых unit, меньше integration/API, немного критических E2E; доли зависят от рисков и архитектуры.",
      "example": "Логика цены в unit, основной checkout в E2E."
    },
    "en": {
      "answer": "A guide favoring many fast unit checks, fewer integration/API checks and a small set of critical E2E checks; balance depends on risks and architecture.",
      "example": "Check pricing logic at unit level and the main checkout flow end to end."
    }
  },
  "automation-junior-68": {
    "uz": {
      "answer": "Ko‘rinadigan oynasiz brauzer ishlashi; CI uchun qulay, lekin headed muhit bilan farqlar bo‘lishi mumkin.",
      "example": "CI headless ishlatadi, xatoni tahlil qilish uchun trace/screenshot saqlaydi."
    },
    "ru": {
      "answer": "Браузер без видимого окна; удобен для CI, но возможны отличия от headed режима.",
      "example": "CI использует headless и сохраняет trace/screenshots."
    },
    "en": {
      "answer": "A browser running without a visible window; useful in CI, though headed behavior may differ.",
      "example": "CI runs headless and saves traces/screenshots for diagnosis."
    }
  },
  "manual-junior-129": {
    "uz": {
      "answer": "Yaxshi dataset valid/invalid, min/max va yonidagi qiymatlar, null/bo‘sh, noto‘g‘ri tip va noodatiy holatlarni qamraydi. Kutilgan natija aniq; ma’lumotlar sintetik yoki himoyalangan, testlar orasida izolyatsiya qilingan bo‘lsin.",
      "example": "Yosh maydoni uchun valid, boundary, bo‘sh va noto‘g‘ri tipdagi qiymatlar."
    },
    "ru": {
      "answer": "Хороший dataset включает valid/invalid, min/max и соседние значения, null/пустые, неверные типы и необычные случаи. Expected result ясен; данные синтетические или защищённые, изолированы между тестами.",
      "example": "Для возраста: valid, boundary, пустые и неверные типы."
    },
    "en": {
      "answer": "A good dataset includes valid/invalid inputs, min/max and adjacent values, null/empty values, wrong types and unusual cases. Expected results are clear; use synthetic or protected data isolated between tests.",
      "example": "For an age field, include valid, boundary, empty and wrong-type values."
    }
  },
  "manual-middle-100": {
    "uz": {
      "answer": "Schema, constraints, CRUD, transaction, data integrity, migration va kerakli performance’ni talabga ko‘ra tekshiramiz.",
      "example": "Foreign key buzilmasin, rollback’dan so‘ng yarim buyurtma qolmasin."
    },
    "ru": {
      "answer": "Schema, constraints, CRUD, transactions, целостность, migration и нужную performance по требованиям.",
      "example": "Foreign key не нарушен, rollback не оставляет половину заказа."
    },
    "en": {
      "answer": "Check schema, constraints, CRUD, transactions, integrity, migration and required performance against requirements.",
      "example": "A foreign key must hold and rollback must not leave half an order."
    }
  },
  "manual-middle-101": {
    "uz": {
      "answer": "Kritik oqim, tizim chegaralari, real integratsiyalar, test data va cleanupni kelishamiz; kam, maqsadli va kuzatiladigan tekshiruvlar tanlanadi.",
      "example": "Test buyurtma UI’dan boshlanib, payment sandbox va order status’gacha boradi."
    },
    "ru": {
      "answer": "Согласуем критический поток, границы, реальные интеграции, test data и cleanup; выбираем немного целевых наблюдаемых проверок.",
      "example": "Заказ идёт от UI через payment sandbox до order status."
    },
    "en": {
      "answer": "Agree critical flows, system boundaries, real integrations, test data and cleanup; choose a small targeted observable suite.",
      "example": "A test order runs from UI through a payment sandbox to order status."
    }
  },
  "manual-middle-102": {
    "uz": {
      "answer": "O‘zgarish ta’siri va riskga qarab smoke, o‘zgargan feature, regression va zarur non-functional tekshiruvlar tanlanadi; bitta universal tur yo‘q.",
      "example": "Payment o‘zgarsa, checkout regression va duplicate charge riski ustuvor."
    },
    "ru": {
      "answer": "По влиянию изменений и рискам: smoke, изменённые функции, regression и нужные non-functional проверки; одного универсального вида нет.",
      "example": "Изменение payment приоритизирует checkout regression и повторное списание."
    },
    "en": {
      "answer": "Select smoke, changed features, regression and necessary non-functional checks by impact and risk; there is no single universal type.",
      "example": "A payment change prioritizes checkout regression and duplicate-charge risks."
    }
  },
  "manual-middle-103": {
    "uz": {
      "answer": "Feedback va release tezligi, talab boshqaruvi va hamkorlikni o‘zgartiradi. Metodologiya nomi sifatni kafolatlamaydi.",
      "example": "Agile’da QA refinement’da qatnashib, acceptance criteria’ni erta aniqlaydi."
    },
    "ru": {
      "answer": "Меняет скорость feedback/release, работу с требованиями и сотрудничество; название не гарантирует качество.",
      "example": "В Agile QA уточняет acceptance criteria на refinement."
    },
    "en": {
      "answer": "Changes feedback/release speed, requirement management and collaboration; its name does not guarantee quality.",
      "example": "In Agile, QA clarifies acceptance criteria during refinement."
    }
  },
  "manual-middle-104": {
    "uz": {
      "answer": "Asosiy oqim, install/update, device/OS, permissions, interruptions, tarmoq, lokal data, performance va accessibility.",
      "example": "Upload vaqtida qo‘ng‘iroq, background va tarmoq uzilishi natijani buzmasin."
    },
    "ru": {
      "answer": "Основные потоки, install/update, device/OS, permissions, interruptions, сеть, локальные данные, performance и accessibility.",
      "example": "Звонок, background и потеря сети не должны портить upload."
    },
    "en": {
      "answer": "Main flows, installation/upgrades, devices/OS, permissions, interruptions, network, local data, performance and accessibility.",
      "example": "A call, backgrounding or network loss must not corrupt an upload."
    }
  },
  "manual-middle-105": {
    "uz": {
      "answer": "Build ID/versiya, imzo, muhit va device mosligini tekshiramiz; clean install/update, launch, smoke va loglarni ko‘ramiz.",
      "example": "Test build production APIga tasodifan ulanmaganini tekshiramiz."
    },
    "ru": {
      "answer": "Проверяем build ID/версию, подпись, среду и device; clean install/update, launch, smoke и логи.",
      "example": "Проверяем, что test build случайно не использует production API."
    },
    "en": {
      "answer": "Check build ID/version, signing, environment and device compatibility; inspect clean install/upgrade, launch, smoke and logs.",
      "example": "Ensure a test build does not accidentally use the production API."
    }
  },
  "automation-junior-69": {
    "uz": {
      "answer": "Actions murakkab input ketma-ketligini quradi; Action bajariladigan amal interfeysi, build() shu amalni yaratadi.",
      "example": "Hover va click ketma-ketligi Actions bilan tuziladi, perform bilan bajariladi."
    },
    "ru": {
      "answer": "Actions строит цепочку ввода; Action — интерфейс выполняемого действия, build() создаёт его.",
      "example": "Цепочка hover/click строится Actions и запускается perform."
    },
    "en": {
      "answer": "Actions builds an input sequence; Action is an executable action interface produced by build().",
      "example": "Build a hover/click sequence with Actions and execute it with perform."
    }
  },
  "manual-senior-58": {
    "uz": {
      "answer": "Barqaror test muhitida kutilgan yukdan oshib limit va tiklanishni tekshiramiz. Real trafik modeli, safety limit, monitoring va generator sig‘imi hisobga olinadi.",
      "example": "Yuk oshganda tizim nazoratli rad etsin, pasayganda qayta ishlasin."
    },
    "ru": {
      "answer": "В стабильной тестовой среде превышаем ожидаемую нагрузку, проверяем предел и восстановление; учитываем модель, лимиты, monitoring и generator.",
      "example": "Под нагрузкой система контролируемо отказывает и восстанавливается после снижения."
    },
    "en": {
      "answer": "In a stable test environment exceed expected load to check limits and recovery; account for workload, safety limits, monitoring and generator capacity.",
      "example": "The system should reject work predictably under overload and recover after load falls."
    }
  },
  "manual-junior-130": {
    "uz": {
      "answer": "Mahsulot, asosiy oqim, sodda arxitektura, o‘z vazifangiz va natijani ayting. Tajriba bo‘lmasa, o‘quv loyihasini ochiq belgilang.",
      "example": "O‘quv do‘konida savatni tekshirdim, narx yaxlitlash xatosini topib bug report yozdim."
    },
    "ru": {
      "answer": "Расскажите о продукте, основном потоке, архитектуре, своей работе и результате. Учебный проект прямо называйте учебным.",
      "example": "В учебном магазине проверил корзину и описал дефект округления."
    },
    "en": {
      "answer": "Describe the product, main flow, simple architecture, your work and results. Clearly identify a learning project if you lack commercial experience.",
      "example": "In a learning store, I checked the cart and reported a rounding defect."
    }
  },
  "manual-junior-131": {
    "uz": {
      "answer": "Asosiy biznes oqimini to‘xtatish, data yo‘qotish yoki katta zarar bilan baholanadi. Severity mezonini jamoa kelishadi; priority alohida.",
      "example": "Barcha xaridorlar to‘lay olmayapti — asosiy oqim bloklangan."
    },
    "ru": {
      "answer": "Оцениваем блокировку основного потока, потерю данных и большой ущерб. Severity согласует команда; priority отдельно.",
      "example": "Ни один покупатель не может оплатить — основной поток заблокирован."
    },
    "en": {
      "answer": "Assess blocked core flows, data loss and major harm. Agree severity criteria as a team; priority is separate.",
      "example": "No customer can pay, so the core flow is blocked."
    }
  },
  "manual-junior-132": {
    "uz": {
      "answer": "Ad-hoc odatda oldindan batafsil rejasiz tekshiruv; exploratory o‘rganish va tekshiruvni birlashtiradi, charter va qaydlar bilan boshqarilishi mumkin.",
      "example": "Ad-hoc’da kutilmagan oqimni sinaymiz; exploratory sessiyada savat risklari uchun maqsad va topilmalarni yozamiz."
    },
    "ru": {
      "answer": "Ad-hoc обычно без подробного плана; exploratory совмещает изучение и проверку, может управляться charter и заметками.",
      "example": "В ad-hoc пробуем необычный поток; exploratory-сессию корзины ведём с целью и заметками."
    },
    "en": {
      "answer": "Ad-hoc checks usually lack detailed planning; exploratory combines learning and checking and can use charters and notes.",
      "example": "Try an unusual flow ad hoc; record objectives and findings in a cart exploration session."
    }
  },
  "manual-junior-133": {
    "uz": {
      "answer": "URI resursni identifikatsiya qiladi, URL esa uning joylashuvi/kirish usulini bildiradigan URI turidir.",
      "example": "https://example.test/orders/7 — URL ham, URI ham; urn:isbn:... joylashuvni ko‘rsatmaydigan identifikator."
    },
    "ru": {
      "answer": "URI идентифицирует ресурс; URL — вид URI, указывающий расположение и способ доступа.",
      "example": "https://example.test/orders/7 — URL и URI; urn:isbn:... не задаёт место доступа."
    },
    "en": {
      "answer": "A URI identifies a resource; a URL is a URI specifying its location and access method.",
      "example": "https://example.test/orders/7 is both; urn:isbn:... identifies without specifying a retrieval location."
    }
  },
  "manual-middle-106": {
    "uz": {
      "answer": "Contractga ko‘ra Content-Type, Accept, auth, cache va correlation headerlarini, yo‘q/noto‘g‘ri qiymatlarni tekshiramiz. Token va shaxsiy ma’lumot logda yashiriladi.",
      "example": "JSON kutilgan endpoint’da noto‘g‘ri Content-Type contractga mos rad etiladi."
    },
    "ru": {
      "answer": "По контракту проверяем Content-Type, Accept, auth, cache/correlation headers и отсутствующие/неверные значения. Маскируем tokens и персональные данные в логах.",
      "example": "Неверный Content-Type на JSON endpoint отклоняется по контракту."
    },
    "en": {
      "answer": "Check contract-defined content type, Accept, authentication, caching/correlation headers and missing/invalid values. Redact tokens and personal data from logs.",
      "example": "A wrong content type at a JSON endpoint is rejected according to its contract."
    }
  },
  "manual-middle-107": {
    "uz": {
      "answer": "Joy, vaqt/timezone, birlik, schema, interval va freshness’ni tekshiramiz. O‘zgaruvchan haqiqiy ob-havo uchun manba/tolerans kelishiladi; deterministik holatlar fixture bilan tekshiriladi.",
      "example": "20°C’ni 20°F bilan solishtirmaymiz; fixture’da kutilgan birlik va timestamp aniq."
    },
    "ru": {
      "answer": "Проверяем место, время/timezone, единицы, schema, диапазоны и freshness. Для живых данных согласуем источник/допуск, для детерминированных — fixtures.",
      "example": "Не сравниваем 20°C с 20°F; fixture задаёт единицу и timestamp."
    },
    "en": {
      "answer": "Check location, time/timezone, units, schema, ranges and freshness. Agree a source/tolerance for live data and use fixtures for deterministic cases.",
      "example": "Do not compare 20°C with 20°F; the fixture defines units and timestamp."
    }
  },
  "manual-middle-108": {
    "uz": {
      "answer": "Yo‘q, malformed, expired, noto‘g‘ri signature/issuer/audience va revoke holatlarini contractga ko‘ra tekshiramiz. Rad etilgan so‘rov hech qanday himoyalangan amal bajarmasin.",
      "example": "Expired token bilan buyurtma yaratilmaydi; refresh oqimi alohida tekshiriladi."
    },
    "ru": {
      "answer": "Проверяем отсутствие, malformed, expired, неверные signature/issuer/audience и revoke по контракту; отклонённый запрос не выполняет защищённое действие.",
      "example": "Expired token не создаёт заказ; refresh проверяем отдельно."
    },
    "en": {
      "answer": "Check missing, malformed, expired, wrong signature/issuer/audience and revoked tokens against the contract; rejected requests must not perform protected actions.",
      "example": "An expired token creates no order; check the refresh flow separately."
    }
  },
  "manual-middle-109": {
    "uz": {
      "answer": "Kirish nuqtasida routing, auth, rate limit va observability’ni birlashtirishi mumkin. Noto‘g‘ri route/policy, latency va failure riskini tekshiramiz; backend ruxsat tekshiruvlari ham kerak.",
      "example": "Gateway limitni qo‘llaydi, ammo servis boshqa user’ning yozuvini berib yubormasligi kerak."
    },
    "ru": {
      "answer": "Может объединять routing, auth, rate limits и observability; проверяем неверные routes/policies, latency и сбои. Backend тоже должен проверять права.",
      "example": "Gateway ограничивает запросы, сервис не должен выдавать чужие записи."
    },
    "en": {
      "answer": "Can centralize routing, authentication, rate limits and observability. Check wrong routes/policies, latency and failures; backend authorization remains necessary.",
      "example": "The gateway limits requests while the service still protects another user's records."
    }
  },
  "manual-middle-110": {
    "uz": {
      "answer": "HTTP qoidasi va cache implementatsiyasini ajrating: POST aniq freshness va mos Content-Location shartlari bilan cacheable bo‘lishi mumkin, amalda kam qo‘llanadi. PUT javoblari cacheable emas; GET cache eskirishini tekshiring.",
      "example": "Mahsulot PUT bilan yangilangach, keyingi GET eski narxni qaytarmasligi kerak."
    },
    "ru": {
      "answer": "Разделяйте HTTP и реализацию cache: POST может кэшироваться с явной freshness и подходящим Content-Location, но поддерживается редко. PUT responses не cacheable; проверяйте устаревание GET cache.",
      "example": "После PUT товара GET не должен возвращать старую цену."
    },
    "en": {
      "answer": "Separate HTTP semantics from cache implementation: POST can be cacheable with explicit freshness and matching Content-Location conditions, though support is uncommon. PUT responses are not cacheable; check GET cache invalidation.",
      "example": "After updating a product with PUT, a subsequent GET must not return a stale price."
    }
  },
  "manual-middle-111": {
    "uz": {
      "answer": "Struktura, tip, required va cheklovlarni tekshiradi. Biznes qiymati to‘g‘riligini alohida assertion tekshiradi; format tekshiruvi validator sozlamasiga bog‘liq.",
      "example": "total number bo‘lishi schema’dan o‘tadi, lekin 2×10 uchun 25 chiqishi biznes xatosi."
    },
    "ru": {
      "answer": "Проверяет структуру, типы, required и ограничения. Бизнес-значения проверяем отдельно; format validation зависит от настройки validator.",
      "example": "Числовой total проходит schema, но 25 для 2×10 — ошибка логики."
    },
    "en": {
      "answer": "Checks structure, types, required fields and constraints. Assert business values separately; format validation depends on validator configuration.",
      "example": "A numeric total passes a schema, but returning 25 for 2×10 is a business defect."
    }
  },
  "automation-middle-56": {
    "uz": {
      "answer": "Request’da header(s) qo‘llanadi, javob headeri response’dan olinadi; tayyor request specification ichidagini SpecificationQuerier bilan ko‘rish mumkin. Qaysi yo‘nalishdan olinayotganini ajrating.",
      "example": "Javobdagi correlation ID’ni diagnostikada saqlaymiz; Authorization’ni logga ochiq chiqarmaymiz."
    },
    "ru": {
      "answer": "Передаём через header(s), response header читаем из response; headers готовой request specification можно читать через SpecificationQuerier. Не путайте направления.",
      "example": "Сохраняем correlation ID ответа для диагностики, не логируем Authorization открыто."
    },
    "en": {
      "answer": "Set request headers with header(s), read response headers from the response, and inspect a prepared request specification through SpecificationQuerier. Distinguish the direction of extraction.",
      "example": "Retain a response correlation ID for diagnosis and redact Authorization from logs."
    }
  },
  "automation-middle-57": {
    "uz": {
      "answer": "POJO Java’da data model; serialization uni JSONga, deserialization JSONni obyektga aylantiradi. Field nomi, null, sana va son aniqligini tekshiramiz.",
      "example": "Order obyektidagi total va customerId JSON’da contractga mos yozilishi kerak."
    },
    "ru": {
      "answer": "POJO — Java-модель; serialization преобразует в JSON, deserialization обратно. Проверяем имена fields, null, даты и точность чисел.",
      "example": "total/customerId объекта Order должны соответствовать JSON contract."
    },
    "en": {
      "answer": "A POJO is a Java data model; serialization converts it to JSON and deserialization back. Check field names, nulls, dates and numeric precision.",
      "example": "An Order object's total and customerId must match the JSON contract."
    }
  },
  "automation-middle-58": {
    "uz": {
      "answer": "Runner, qatlamlar, locator/API client, data/fixture, config, assertions, reporting va CI oqimini ayting; tanlov sababini va kamchiliklarni ko‘rsating.",
      "example": "Playwright’da testlar fixture orqali account oladi, page object UI amalini, test esa natijani tekshiradi."
    },
    "ru": {
      "answer": "Объясните runner, слои, locators/API client, data/fixtures, config, assertions, reporting и CI; обоснуйте решения и ограничения.",
      "example": "Playwright test получает account через fixture, page object выполняет UI действие, test проверяет результат."
    },
    "en": {
      "answer": "Explain the runner, layers, locators/API clients, data/fixtures, configuration, assertions, reporting and CI; justify choices and limitations.",
      "example": "A Playwright test obtains an account through a fixture, the page object acts on UI and the test asserts the outcome."
    }
  },
  "manual-middle-112": {
    "uz": {
      "answer": "Build, device, data va vaqtni yozib, log/network dalillarni yig‘amiz; resurs, concurrency va tarmoq taxminlarini bittadan tekshiramiz. “Takrorlanmadi” uni yo‘q degani emas.",
      "example": "Ikki tab bir buyurtmani o‘zgartirganda xato chiqsa, request tartibi va correlation ID saqlanadi."
    },
    "ru": {
      "answer": "Фиксируем build/device/data/время, собираем logs/network; проверяем гипотезы ресурсов, concurrency и сети по одной. Невоспроизведение не доказывает отсутствие.",
      "example": "При изменении заказа в двух tabs сохраняем порядок requests и correlation IDs."
    },
    "en": {
      "answer": "Record build/device/data/time and collect logs/network evidence; test resource, concurrency and network hypotheses one at a time. Failure to reproduce does not prove absence.",
      "example": "If two tabs editing an order trigger it, retain request ordering and correlation IDs."
    }
  },
  "manual-middle-113": {
    "uz": {
      "answer": "Vaziyat, vazifangiz, dalil/sinov, jamoa bilan yechim va natijani tartiblang. O‘z hissangizni ajrating, bo‘lmagan natijani uydirmang.",
      "example": "Men timeout dalilini topdim, developer retry’ni tuzatdi, men double-charge regression’ni tekshirdim — o‘quv misoli."
    },
    "ru": {
      "answer": "Структурируйте ситуацию, задачу, доказательства/проверки, совместное решение и результат. Отделяйте свой вклад, не выдумывайте результаты.",
      "example": "Я нашёл timeout, developer исправил retry, я проверил regression — учебный пример."
    },
    "en": {
      "answer": "Structure the situation, task, evidence/checks, team resolution and outcome. Distinguish your contribution and do not invent results.",
      "example": "I found timeout evidence, a developer fixed retry handling and I checked the regression: a learning example."
    }
  },
  "manual-middle-114": {
    "uz": {
      "answer": "Scope/build/muhit, bajarilgan va bajarilmagan tekshiruvlar, coverage, ochiq bug/risk va readiness tavsiyasi. Pass rate’ni yolg‘iz ishlatmang.",
      "example": "98% test o‘tsa ham to‘lovdagi blocker release tavsiyasiga ta’sir qiladi."
    },
    "ru": {
      "answer": "Scope/build/среда, выполненные и невыполненные проверки, coverage, открытые bugs/risks и readiness recommendation. Одного pass rate мало.",
      "example": "Даже при 98% pass blocker оплаты меняет рекомендацию."
    },
    "en": {
      "answer": "Scope/build/environment, executed and unexecuted checks, coverage, open defects/risks and a readiness recommendation. Pass rate alone is insufficient.",
      "example": "Even with a 98% pass rate, a payment blocker affects the recommendation."
    }
  },
  "manual-senior-59": {
    "uz": {
      "answer": "On-call jarayoniga amal qilib, ta’sir va dalilni yig‘amiz, mas’ullarni eskalatsiya qilamiz. Vakolatli jamoa mitigation/rollbackni bajaradi; keyin fix, regression va RCA.",
      "example": "Takroriy to‘lov riskida release egasi feature flag’ni o‘chiradi, QA xavfsiz oqimni tasdiqlaydi."
    },
    "ru": {
      "answer": "Следуем on-call процессу, собираем impact/evidence, эскалируем ответственным. Уполномоченная команда делает mitigation/rollback; затем fix, regression и RCA.",
      "example": "При риске двойной оплаты owner выключает feature flag, QA проверяет безопасный поток."
    },
    "en": {
      "answer": "Follow the on-call process, gather impact/evidence and escalate to owners. The authorized team performs mitigation/rollback, followed by fixing, regression and RCA.",
      "example": "For duplicate-payment risk, the owner disables the feature flag and QA verifies the safe flow."
    }
  },
  "manual-senior-60": {
    "uz": {
      "answer": "Boshlang‘ich ko‘nikmani baholab, kichik real vazifa, pairing, tushunarli review va muntazam feedback beramiz; mustaqillikni bosqichma-bosqich oshiramiz.",
      "example": "Avval birga bug report yozamiz, keyingi safar junior dalilni o‘zi yig‘adi."
    },
    "ru": {
      "answer": "Оцениваем навыки, даём небольшую реальную задачу, pairing, понятный review и регулярный feedback; постепенно повышаем самостоятельность.",
      "example": "Сначала вместе пишем report, затем junior сам собирает доказательства."
    },
    "en": {
      "answer": "Assess skills, offer a small real task, pairing, clear reviews and regular feedback, then increase independence gradually.",
      "example": "Write a bug report together first, then let the junior gather evidence independently."
    }
  },
  "manual-senior-61": {
    "uz": {
      "answer": "Owner, handoff, qisqa overlap va umumiy board kelishiladi. Qaror, blocker va keyingi qadam yozma saqlanadi; doimiy ortiqcha ish talab qilinmaydi.",
      "example": "Handoff: qaysi build tekshirildi, qaysi bug ochiq, keyingi test kimda."
    },
    "ru": {
      "answer": "Согласуем owners, handoff, небольшой overlap и общий board. Письменно фиксируем решения, blockers и следующие шаги без постоянных переработок.",
      "example": "Handoff: проверенный build, открытый bug, owner следующей проверки."
    },
    "en": {
      "answer": "Agree owners, handoffs, a small overlap and a shared board. Record decisions, blockers and next steps without requiring constant overtime.",
      "example": "A handoff names the tested build, open defect and owner of the next check."
    }
  },
  "manual-senior-62": {
    "uz": {
      "answer": "Rol ehtiyojlarini real misollar bilan bog‘lang: qaror, jamoa rivoji, risk va o‘lchangan natija. Bilmagan joyni ochiq ayting, faqat tool ro‘yxati yetmaydi.",
      "example": "“Men jarayonni yaxshiladim” o‘rniga qanday o‘zgarish, dalil va o‘z hissangizni ayting."
    },
    "ru": {
      "answer": "Свяжите потребности роли с реальными решениями, развитием команды, рисками и измеренными результатами. Признавайте пробелы; списка tools мало.",
      "example": "Вместо “улучшил процесс” объясните изменение, доказательства и свой вклад."
    },
    "en": {
      "answer": "Connect role needs to actual decisions, team development, risk management and measured outcomes. Acknowledge gaps; a tool list is insufficient.",
      "example": "Explain the change, evidence and your contribution instead of only saying you improved the process."
    }
  },
  "manual-senior-63": {
    "uz": {
      "answer": "Talab/acceptance criteria’ni erta kelishadi, bugni dalil bilan muhokama qiladi, risk va qaror egasini ko‘rsatadi; qarama-qarshi maqsadlarda biznes ta’siriga tayanadi.",
      "example": "PO chegirma qoidasini, developer implementatsiyani, QA valid/invalid misollarni birga aniqlaydi."
    },
    "ru": {
      "answer": "Рано согласует requirements/criteria, обсуждает дефекты по фактам, обозначает риск и decision owner; конфликт целей решает через бизнес-влияние.",
      "example": "PO, developer и QA вместе уточняют правило скидки и примеры."
    },
    "en": {
      "answer": "Agree requirements/criteria early, discuss defects with evidence and identify risks/decision owners; resolve conflicting goals using business impact.",
      "example": "PO, developer and QA clarify the discount rule and examples together."
    }
  },
  "automation-senior-24": {
    "uz": {
      "answer": "Muhit izolyatsiyasi, identity/permissions, config, region, elasticity, observability, dependency failure va xarajatni tekshirish rejasiga olamiz; vendor tajribasini uydirmaymiz.",
      "example": "Test autoscaling uchun yuk chegarasi belgilanadi va testdan keyin ortiqcha resurslar tozalanadi."
    },
    "ru": {
      "answer": "Планируем isolation, identity/permissions, config, regions, elasticity, observability, dependency failures и cost; не выдумываем опыт vendor.",
      "example": "Для autoscaling ограничиваем нагрузку и убираем лишние test resources."
    },
    "en": {
      "answer": "Plan checks for isolation, identities/permissions, configuration, regions, elasticity, observability, dependency failures and cost; do not invent vendor experience.",
      "example": "Bound an autoscaling test's load and clean up excess resources afterward."
    }
  },
  "manual-junior-134": {
    "uz": {
      "answer": "Scenario nima tekshirilishini umumiy aytadi; case aniq data, qadam va expected result bilan bir tekshiruvni tasvirlaydi.",
      "example": "Scenario: login. Case: mavjud account va to‘g‘ri parol bilan profil ochilishi."
    },
    "ru": {
      "answer": "Scenario описывает, что проверять в целом; case задаёт данные, шаги и ожидаемый результат конкретной проверки.",
      "example": "Scenario: login. Case: существующий account с верным паролем открывает профиль."
    },
    "en": {
      "answer": "A scenario describes what to check broadly; a case specifies data, steps and expected results for a concrete check.",
      "example": "Scenario: login. Case: an existing account with a correct password opens its profile."
    }
  },
  "manual-junior-135": {
    "uz": {
      "answer": "Strategy risk va umumiy yondashuvni belgilaydi; plan scope, resurs, muhit, muddat va bajarishni rejalaydi. Hujjatlar shakli loyihaga moslashadi.",
      "example": "Strategy API’da ko‘proq tekshiruv tanlaydi; plan shu release uchun kim, qachon va qayerda bajarishini aytadi."
    },
    "ru": {
      "answer": "Strategy задаёт риски и общий подход; plan — scope, ресурсы, среду, сроки и выполнение. Формат зависит от проекта.",
      "example": "Strategy делает упор на API; plan задаёт исполнителей, сроки и среду release."
    },
    "en": {
      "answer": "Strategy sets risks and the overall approach; a plan organizes scope, resources, environment, timing and execution. Formats vary by project.",
      "example": "A strategy emphasizes API checks; a plan names who runs them, when and where for a release."
    }
  },
  "manual-junior-136": {
    "uz": {
      "answer": "Foydalanuvchi vazifani qanchalik tushunarli, samarali va qoniqarli bajarayotganini kuzatadi. Ishlaydigan tugma qulay oqimni kafolatlamaydi.",
      "example": "Yangi foydalanuvchi yordamsiz buyurtma bera oladimi, qayerda adashadi — kuzatiladi."
    },
    "ru": {
      "answer": "Наблюдает понятность, эффективность и удовлетворённость выполнением задачи. Рабочая кнопка не гарантирует удобный поток.",
      "example": "Смотрим, может ли новый пользователь оформить заказ без помощи и где путается."
    },
    "en": {
      "answer": "Observes how clearly, efficiently and satisfactorily users complete tasks. A working button does not guarantee a usable flow.",
      "example": "Observe whether a new user can order without help and where they become confused."
    }
  },
  "manual-junior-137": {
    "uz": {
      "answer": "Globalization turli til/regionlarga moslashish imkoniyatini, localization esa muayyan locale’dagi tarjima va formatlarni tekshiradi.",
      "example": "Unicode va RTL qo‘llash — umumiy tayyorgarlik; o‘zbekcha sana/matn — localization."
    },
    "ru": {
      "answer": "Globalization проверяет готовность к разным языкам/регионам; localization — перевод и форматы конкретного locale.",
      "example": "Unicode и RTL — общая готовность; узбекские тексты и даты — localization."
    },
    "en": {
      "answer": "Globalization checks readiness for multiple languages/regions; localization checks translations and formats for a specific locale.",
      "example": "Unicode and RTL support are general readiness; Uzbek text and dates are localization."
    }
  },
  "manual-junior-138": {
    "uz": {
      "answer": "Alpha odatda tashkilot nazoratidagi dastlabki acceptance tekshiruvi; beta tashqi vakil foydalanuvchilar bilan real sharoitdagi feedback. Aniq jarayon jamoada kelishiladi.",
      "example": "Ichki jamoa alpha’da asosiy oqimni ko‘radi, taklif qilingan foydalanuvchilar beta’da kundalik foydalanadi."
    },
    "ru": {
      "answer": "Alpha обычно ранняя acceptance-проверка под контролем организации; beta — feedback внешних пользователей в реальных условиях. Процесс согласует команда.",
      "example": "Внутренняя команда проверяет alpha, приглашённые пользователи используют beta."
    },
    "en": {
      "answer": "Alpha is usually early acceptance testing under the organization's control; beta gathers external representative users' feedback in real conditions. Teams define the exact process.",
      "example": "An internal team checks alpha while invited users use beta in daily work."
    }
  },
  "manual-junior-139": {
    "uz": {
      "answer": "Tasodifiy amal/inputlar bilan crash va g‘ayrioddiy xulq izlanadi. Maqsadli test va expected result o‘rnini bosmaydi; seed va log takrorlashga yordam beradi.",
      "example": "Test ilovada tasodifiy bosishlar ketma-ketligi saqlanib, crash qayta tekshiriladi."
    },
    "ru": {
      "answer": "Случайные действия/input ищут crashes и необычное поведение; не заменяют целевые проверки. Seed и логи помогают воспроизведению.",
      "example": "В тестовом приложении сохраняем последовательность кликов и повторяем crash."
    },
    "en": {
      "answer": "Random actions/inputs seek crashes and unusual behavior; they do not replace targeted checks. Seeds and logs help reproduction.",
      "example": "Retain a random click sequence in a test app and replay a crash."
    }
  },
  "automation-middle-59": {
    "uz": {
      "answer": "Bir xil data, viewport, font va muhitdagi screenshotni tasdiqlangan baseline bilan solishtiradi. Farq review qilinadi; baseline ko‘r-ko‘rona yangilanmaydi.",
      "example": "Narx matni ustma-ust tushgan diff xatoni ko‘rsatadi, sana kabi dinamik joy alohida boshqariladi."
    },
    "ru": {
      "answer": "Сравнивает screenshot с утверждённым baseline при одинаковых data, viewport, fonts и среде. Различия review, baseline не обновляем вслепую.",
      "example": "Diff перекрытой цены показывает дефект; динамическую дату обрабатываем отдельно."
    },
    "en": {
      "answer": "Compares a screenshot with an approved baseline using consistent data, viewport, fonts and environment. Review differences rather than blindly updating baselines.",
      "example": "An overlapping-price diff exposes a defect; handle dynamic dates separately."
    }
  },
  "automation-middle-60": {
    "uz": {
      "answer": "Yo‘q. Delivery davomida mos qatlamlarda tez risk feedback beradi: review, unit/API/UI, kerakli non-functional va monitoring. Gate’lar riskga mos bo‘lsin.",
      "example": "PR’da tez testlar, release’da kengroq tekshiruv va rollout’da monitoring."
    },
    "ru": {
      "answer": "Нет. Быстрый risk feedback на этапах delivery: review, unit/API/UI, нужные non-functional checks и monitoring. Gates зависят от риска.",
      "example": "Быстрые PR checks, расширенные release checks и rollout monitoring."
    },
    "en": {
      "answer": "No. It supplies timely risk feedback throughout delivery through reviews, unit/API/UI checks, required non-functional checks and monitoring. Gates follow risk.",
      "example": "Fast PR checks, broader release checks and rollout monitoring."
    }
  },
  "automation-middle-61": {
    "uz": {
      "answer": "Platforma/brauzer, kerakli qatlam, jamoa tili, CI, data izolyatsiyasi va maintenance xarajatini baholang; kichik pilot bilan tekshiring.",
      "example": "Web uchun Playwright/Selenium’ni haqiqiy kritik oqimda solishtiramiz; mobile talabi uchun mos native/Appium yo‘li kerak."
    },
    "ru": {
      "answer": "Оцените platform/browsers, слой, язык команды, CI, data isolation и поддержку; проверьте выбор небольшим pilot.",
      "example": "Playwright/Selenium сравниваем на критическом web-потоке; mobile требует подходящего native/Appium пути."
    },
    "en": {
      "answer": "Assess platform/browsers, test layer, team language, CI, data isolation and maintenance; verify the choice through a small pilot.",
      "example": "Compare Playwright/Selenium on a real critical web flow; mobile needs a suitable native/Appium approach."
    }
  },
  "manual-middle-115": {
    "uz": {
      "answer": "API service contract, data va ruxsatni UI’dan ajratib tekshiradi; UI foydalanuvchi amal, rendering va frontend integratsiyasini ham ko‘radi. Bir qatlam ikkinchisini to‘liq almashtirmaydi.",
      "example": "API to‘g‘ri total qaytarsa ham UI uni noto‘g‘ri formatda ko‘rsatishi mumkin."
    },
    "ru": {
      "answer": "API изолированно проверяет contract, data и права; UI также проверяет действия, rendering и frontend integration. Слои не заменяют друг друга полностью.",
      "example": "API возвращает верный total, UI может показать неверный формат."
    },
    "en": {
      "answer": "API checks service contracts, data and permissions independently of UI; UI also covers user actions, rendering and frontend integration. Neither fully replaces the other.",
      "example": "An API can return the correct total while the UI formats it incorrectly."
    }
  },
  "manual-middle-116": {
    "uz": {
      "answer": "Response time percentillari, throughput, error rate, concurrency va CPU/memory/queue kabi resurslar. O‘lchash sharti va maqsad aniq bo‘lsin.",
      "example": "RPS oshganda p95 va xatolar ham oshsa, “tez” deb faqat o‘rtacha vaqtga qaramaymiz."
    },
    "ru": {
      "answer": "Percentiles response time, throughput, error rate, concurrency и CPU/memory/queue; фиксируем условия и цели.",
      "example": "При росте RPS смотрим p95/errors, не только среднее время."
    },
    "en": {
      "answer": "Response-time percentiles, throughput, error rate, concurrency and resources such as CPU/memory/queues; define conditions and targets.",
      "example": "When RPS rises, inspect p95 and errors rather than only average time."
    }
  },
  "manual-middle-117": {
    "uz": {
      "answer": "Security keng qamrovli himoya tekshiruvlari; penetration ruxsatli scope’da zaiflikdan real zarar yo‘lini baholaydi. Qoidalar, vaqt va dalil talabi oldindan kelishiladi.",
      "example": "Test muhitida ruxsatsiz obyektga kirish riskini tasdiqlash va uni tuzatishni qayta tekshirish."
    },
    "ru": {
      "answer": "Security — широкий набор проверок защиты; penetration оценивает путь реального воздействия уязвимостей в разрешённом scope. Правила/время/evidence согласуются заранее.",
      "example": "В test среде подтверждаем риск доступа к чужому объекту и проверяем fix."
    },
    "en": {
      "answer": "Security testing broadly checks protections; penetration testing assesses exploitable impact paths within an authorized scope. Agree rules, timing and evidence beforehand.",
      "example": "Confirm an unauthorized-object-access risk in a test environment and verify the fix."
    }
  },
  "manual-middle-118": {
    "uz": {
      "answer": "Xulq modelidan testlar tanlanadi yoki hosil qilinadi. Model to‘g‘riligi, o‘tishlar, data va coverage mezoni muhim; avtomatik generatsiya shart emas.",
      "example": "Buyurtma draft→paid→shipped modelidan valid va taqiqlangan o‘tishlarni tanlaymiz."
    },
    "ru": {
      "answer": "Проверки выбираются/генерируются из модели поведения. Важны корректность модели, transitions, data и coverage; автоматическая генерация не обязательна.",
      "example": "Из draft→paid→shipped выбираем разрешённые и запрещённые переходы."
    },
    "en": {
      "answer": "Select or derive checks from a behavioral model. Model correctness, transitions, data and coverage criteria matter; automated generation is optional.",
      "example": "Use draft→paid→shipped to select valid and prohibited transitions."
    }
  },
  "manual-senior-64": {
    "uz": {
      "answer": "Qo‘llanadigan standart/talab, versiya va scope’ni mas’ul mutaxassis bilan kelishing; talabni tekshiruv/dalilga bog‘lang. QA testi yuridik tasdiqning o‘rnini bosmaydi.",
      "example": "Kelishilgan accessibility mezoni uchun keyboard va screen-reader dalili saqlanadi."
    },
    "ru": {
      "answer": "Согласуйте применимые требования, версии и scope с ответственным специалистом; свяжите с checks/evidence. QA не заменяет юридическое подтверждение.",
      "example": "Для согласованного accessibility criterion сохраняем keyboard/screen-reader evidence."
    },
    "en": {
      "answer": "Agree applicable requirements, versions and scope with the responsible specialist; link them to checks/evidence. QA checks do not replace legal determination.",
      "example": "Retain keyboard/screen-reader evidence for an agreed accessibility criterion."
    }
  },
  "manual-junior-140": {
    "uz": {
      "answer": "Rolga mos ta’lim/tajriba, ikki kuchli ko‘nikma va keyingi maqsadni qisqa bog‘lang. Sertifikat, diplom yoki tijoriy tajribani uydirmang.",
      "example": "“O‘quv loyihada API va SQL tekshirdim; bugni dalil bilan yozaman; keyin Playwright’ni chuqurlashtirmoqchiman.”"
    },
    "ru": {
      "answer": "Кратко свяжите релевантное обучение/опыт, два сильных навыка и следующую цель. Не выдумывайте сертификаты, дипломы или коммерческий опыт.",
      "example": "“В учебном проекте проверял API/SQL, описываю bugs по фактам и хочу углубить Playwright.”"
    },
    "en": {
      "answer": "Briefly connect relevant learning/experience, two strengths and your next goal. Do not invent credentials or commercial experience.",
      "example": "“I checked API/SQL in a learning project, report bugs with evidence and want to deepen my Playwright skills.”"
    }
  },
  "manual-junior-141": {
    "uz": {
      "answer": "Haqiqiy qiziqish va ishdagi qiymatni kompaniya vazifalariga bog‘lang; nimasi yoqishini misol bilan ayting, bilmagan mahsulotni o‘rganganman demang.",
      "example": "Muammoni topishdan tashqari sababini ajratish yoqadi; bu rol API tekshiruvlarini rivojlantirishga mos."
    },
    "ru": {
      "answer": "Свяжите искренний интерес и пользу работы с задачами компании; приведите пример, не притворяйтесь знакомым с продуктом.",
      "example": "Нравится локализовать причины; роль соответствует развитию API checks."
    },
    "en": {
      "answer": "Connect genuine interest and work value to the company's needs; give an example without pretending to know an unfamiliar product.",
      "example": "I enjoy isolating causes, and this role fits developing API checks."
    }
  },
  "manual-junior-142": {
    "uz": {
      "answer": "Haqiqiy sabab, kerakli o‘sish yoki sharoitni professional ayting; oldingi jamoani haqoratlamang, maxfiy ma’lumotni ochmang.",
      "example": "“Ko‘proq API automation mas’uliyati bo‘lgan rol izlayapman.”"
    },
    "ru": {
      "answer": "Профессионально объясните реальную причину, рост или условия; не оскорбляйте бывшую команду и не раскрывайте секреты.",
      "example": "“Ищу роль с большей ответственностью за API automation.”"
    },
    "en": {
      "answer": "Explain the genuine reason, growth or conditions professionally without insulting the previous team or exposing confidential information.",
      "example": "“I am seeking a role with more API automation responsibility.”"
    }
  },
  "manual-junior-143": {
    "uz": {
      "answer": "Kuchli tomon uchun dalil, kamchilik uchun real yaxshilash rejasini bering. O‘zingizni faqat sifatlar ro‘yxati bilan tavsiflamang.",
      "example": "“Bug report’im aniq; load model tajribam kam, shu sabab kichik amaliy loyiha qilyapman.”"
    },
    "ru": {
      "answer": "Дайте доказательство сильной стороны и реальный план улучшения; одного списка качеств мало.",
      "example": "“Ясно пишу bugs; опыта load models мало, делаю практический проект.”"
    },
    "en": {
      "answer": "Support a strength with evidence and give a realistic improvement plan; a list of adjectives is insufficient.",
      "example": "“My bug reports are clear; I have limited load-model experience, so I am building a practice project.”"
    }
  },
  "manual-junior-144": {
    "uz": {
      "answer": "Rasmiy docs, amaliy kichik loyiha, review va feedback’dan foydalaning. Yangi toolni faqat nomi uchun emas, kerakli vazifa orqali o‘rganing.",
      "example": "Yangi wait mexanizmini docs’dan o‘qib, sekin yuklanadigan test sahifada tekshiramiz."
    },
    "ru": {
      "answer": "Используйте официальные docs, небольшой проект, review и feedback. Изучайте tool через нужную задачу, не только название.",
      "example": "Изучаем wait в docs и пробуем на медленной test page."
    },
    "en": {
      "answer": "Use official docs, small practice projects, reviews and feedback. Learn a tool through a relevant task rather than its name alone.",
      "example": "Read about waiting in the docs and try it on a slow test page."
    }
  },
  "manual-junior-145": {
    "uz": {
      "answer": "Manbani aniq ayting; hamkorlik/feedback sharoiti va real rivojlanish yo‘nalishini tushuntiring. “Ideal ish”ni vazifalar va kutishlar bilan aniqlang.",
      "example": "“Vakansiyani kompaniya saytida ko‘rdim; review bo‘lgan jamoada test dizayn va automation’ni rivojlantirmoqchiman.”"
    },
    "ru": {
      "answer": "Назовите источник, нужные условия сотрудничества/feedback и реалистичный путь развития; связывайте идеальную работу с задачами.",
      "example": "“Нашёл вакансию на сайте компании; хочу развивать test design/automation с командным review.”"
    },
    "en": {
      "answer": "State the vacancy source, useful collaboration/feedback conditions and a realistic growth direction; connect an ideal job to concrete work.",
      "example": "“I found the vacancy on your website and want to develop test design/automation with team reviews.”"
    }
  },
  "manual-middle-119": {
    "uz": {
      "answer": "Plan maqsad/taxmin, Do kichik sinov, Check dalilni baholash, Act foydali o‘zgarishni joriy qilish yoki qayta rejalash. Bu faqat bir martalik test sikli emas.",
      "example": "Flaky test sababini kamaytirish o‘zgarishini pilot qilib, oldin/keyin natijalarini solishtiramiz."
    },
    "ru": {
      "answer": "Plan — цель/гипотеза, Do — небольшой эксперимент, Check — оценка, Act — внедрение или перепланирование. Это не разовый тестовый цикл.",
      "example": "Проверяем pilot против flakiness и сравниваем результаты до/после."
    },
    "en": {
      "answer": "Plan sets a goal/hypothesis, Do runs a small trial, Check evaluates evidence and Act adopts or revises the change. It is not a one-off test cycle.",
      "example": "Pilot a flakiness reduction change and compare before/after results."
    }
  },
  "manual-middle-120": {
    "uz": {
      "answer": "Ta’sirni baholab, dalilni to‘plang va mas’ullarga bildiring; fix va coverage bo‘shlig‘ini tekshiring. Ayb yashirish o‘rniga jarayon sababi va yaxshilashni yozing.",
      "example": "Chegara qiymati o‘tkazilgan bo‘lsa, tegishli partition va regression case qo‘shiladi."
    },
    "ru": {
      "answer": "Оцените impact, соберите evidence, сообщите owners; проверьте fix и пробел coverage. Разберите процесс, не скрывайте факт.",
      "example": "Если пропущена граница, добавляем partition/regression case."
    },
    "en": {
      "answer": "Assess impact, gather evidence and inform owners; verify the fix and coverage gap. Analyze the process rather than concealing the issue.",
      "example": "If a boundary was missed, add its partition/regression check."
    }
  },
  "manual-middle-121": {
    "uz": {
      "answer": "Dalilni tekshirib, yozuv egasi bilan aniqlashtiring; tuzatish tarixini saqlang. Ataylab buzish yoki release riski bo‘lsa mas’ul rahbar/jarayon orqali ko‘taring.",
      "example": "Bajarilmagan case “passed” bo‘lsa, uni to‘g‘ri statusga o‘zgartirib release hisobotini yangilaymiz."
    },
    "ru": {
      "answer": "Проверьте факты, уточните с owner, сохраните историю исправления. Умышленное искажение или release risk эскалируйте по процессу.",
      "example": "Невыполненный case с passed исправляем и обновляем release report."
    },
    "en": {
      "answer": "Verify evidence, clarify with the owner and retain correction history. Escalate deliberate falsification or release risk through the responsible process.",
      "example": "Correct an unexecuted case marked passed and update the release report."
    }
  },
  "manual-middle-122": {
    "uz": {
      "answer": "Vaziyat, o‘z hissangiz, hamkorlik va natijani dalil bilan tushuntiring. Mentor ta’sirini o‘rgangan ko‘nikma bilan ko‘rsating; soxta foizlar ishlatmang.",
      "example": "Review’dan keyin bug report’larimda expected/actual va build ID aniq yoziladigan bo‘ldi."
    },
    "ru": {
      "answer": "Объясните ситуацию, свой вклад, сотрудничество и результат по фактам. Влияние mentor покажите навыком, не выдумывайте проценты.",
      "example": "После review мои reports стали содержать ясные expected/actual и build ID."
    },
    "en": {
      "answer": "Explain the situation, your contribution, collaboration and outcome with evidence. Show a mentor's impact through a learned skill; do not invent percentages.",
      "example": "Reviews helped my reports include clear expected/actual results and build IDs."
    }
  },
  "manual-middle-123": {
    "uz": {
      "answer": "Risk, dependency, deadline va mavjud vaqtni birga ko‘rib, owner va ustuvorlikni kelishing; limit va blockerlarni ochiq ko‘rsating.",
      "example": "Ikki release to‘qnashsa, eng muhim oqimlarni ajratib, resurs qarorini rahbar bilan kelishamiz."
    },
    "ru": {
      "answer": "Сопоставьте риск, dependencies, сроки и время; согласуйте owners/priority, показывайте limits/blockers.",
      "example": "При двух release согласуем критические потоки и ресурсы с руководителем."
    },
    "en": {
      "answer": "Compare risk, dependencies, deadlines and available time; agree owners/priorities and expose limits/blockers.",
      "example": "When two releases conflict, agree critical flows and resource decisions with leadership."
    }
  },
  "manual-middle-124": {
    "uz": {
      "answer": "Aniq, izchil, to‘liq, kuzatiladigan va tekshiriladigan mezon bo‘lsin. Noaniq “tez/qulay” o‘rniga kontekst va o‘lchanadigan expected result kelishiladi.",
      "example": "“Tez yuklansin” o‘rniga kelishilgan qurilma/tarmoqdagi p95 chegarasi belgilanadi."
    },
    "ru": {
      "answer": "Нужны ясность, согласованность, полнота, traceability и проверяемость. Для “быстро/удобно” согласуем контекст и измеримые criteria.",
      "example": "Для “быстро” задаём согласованный device/network и p95 limit."
    },
    "en": {
      "answer": "Require clarity, consistency, completeness, traceability and verifiability. Replace vague fast/easy claims with contextual measurable criteria.",
      "example": "Define an agreed device/network and p95 limit for a claim of fast loading."
    }
  },
  "manual-middle-125": {
    "uz": {
      "answer": "Business/user talablar, acceptance criteria, dizayn, API contract, risk va tarixiy buglar. CRS/BRS/SRS/FRS nomlari va ularni kim yozishi jamoaga bog‘liq.",
      "example": "PO/BA talabni aniqlashtiradi, developer texnik cheklovni aytadi, QA testlanish mezonini review qiladi."
    },
    "ru": {
      "answer": "Business/user requirements, acceptance criteria, design, API contract, risks и прошлые bugs. Имена CRS/BRS/SRS/FRS и owners зависят от команды.",
      "example": "PO/BA уточняют требование, developer ограничения, QA проверяемость."
    },
    "en": {
      "answer": "Use business/user requirements, acceptance criteria, designs, API contracts, risks and past defects. Names such as CRS/BRS/SRS/FRS and authors vary by team.",
      "example": "PO/BA clarify needs, developers explain constraints and QA reviews testability."
    }
  },
  "manual-middle-126": {
    "uz": {
      "answer": "Walkthrough’da muallif izohlaydi; inspection’da moderator, muallif, reviewer va yozib boruvchi kabi rollar, mezon va qaydlar belgilanadi. Maqsad — nuqsonni erta topish.",
      "example": "Talab walkthrough’da savollar beriladi; inspection’da checklist va topilma ro‘yxati saqlanadi."
    },
    "ru": {
      "answer": "Walkthrough ведёт автор; inspection определяет роли moderator, author, reviewers, recorder, критерии и записи. Цель — раннее обнаружение дефектов.",
      "example": "В walkthrough обсуждают требование, inspection сохраняет checklist/findings."
    },
    "en": {
      "answer": "An author guides a walkthrough; inspection defines roles such as moderator, author, reviewers and recorder, with criteria and records. Both seek early defects.",
      "example": "Discuss requirements in a walkthrough; retain checklists/findings in an inspection."
    }
  },
  "manual-middle-127": {
    "uz": {
      "answer": "Testlashga kerakli artefaktlar: plan, case/script, data, muhit config va natijalar. Deliverable topshiriladigan kelishilgan natija; owner/reviewer oldindan aniqlanadi.",
      "example": "Release uchun test summary va ochiq risklar release egasiga topshiriladi."
    },
    "ru": {
      "answer": "Test artifacts: plan, cases/scripts, data, config и результаты. Deliverable — согласованный передаваемый результат; owners/reviewers определяются заранее.",
      "example": "Test summary и риски передаются release owner."
    },
    "en": {
      "answer": "Testware includes plans, cases/scripts, data, configuration and results. A deliverable is an agreed output handed over; identify owners/reviewers beforehand.",
      "example": "A test summary and open risks are delivered to the release owner."
    }
  },
  "manual-middle-128": {
    "uz": {
      "answer": "Use case foydalanuvchi maqsadini; case tekshiruvni; procedure bajarish tartibini; script esa bajariladigan ko‘rsatma/kodni ifodalaydi. Terminlar jamoada kelishiladi.",
      "example": "“Buyurtma berish” use case’idan valid to‘lov case’i va uni bajaradigan script kelib chiqadi."
    },
    "ru": {
      "answer": "Use case — цель пользователя, case — проверка, procedure — порядок выполнения, script — инструкции/код. Термины согласуют в команде.",
      "example": "Из use case заказа получаем case оплаты и исполняющий script."
    },
    "en": {
      "answer": "A use case expresses a user goal, a case a check, a procedure execution order and a script executable instructions/code. Teams agree terminology.",
      "example": "An ordering use case leads to a valid-payment case and its execution script."
    }
  },
  "manual-middle-129": {
    "uz": {
      "answer": "Build — yaratilgan versiyali artefakt; release — chiqarilgan kelishilgan versiya; patch — maqsadli tuzatish; pilot — cheklangan auditoriyada sinov. ID/tag va config natijalarni bog‘laydi.",
      "example": "Bug report’da build ID; release tag’da aynan tekshirilgan commit qayd etiladi."
    },
    "ru": {
      "answer": "Build — версия артефакта, release — согласованный выпуск, patch — целевое исправление, pilot — ограниченная проба. ID/tag и config связывают evidence.",
      "example": "В report — build ID; release tag указывает проверенный commit."
    },
    "en": {
      "answer": "A build is a versioned artifact, a release an agreed distribution, a patch a targeted fix and a pilot a limited trial. IDs/tags/configuration link evidence.",
      "example": "A report names the build ID and a release tag identifies the tested commit."
    }
  },
  "manual-junior-146": {
    "uz": {
      "answer": "Talab va mavjud imkoniyatni aniqlang: group’da bitta tanlov, majburiylik, disabled/keyboard/focus holatlari. UI prototipidan serverda data saqlanishini isbotlab bo‘lmaydi.",
      "example": "Ikkinchi radio tanlanganda birinchi yechiladi; mandatory group bo‘sh bo‘lsa kelishilgan xabar chiqadi."
    },
    "ru": {
      "answer": "Уточните требования: один выбор в group, обязательность, disabled/keyboard/focus. UI prototype не доказывает сохранение на server.",
      "example": "Второй radio снимает первый; пустая mandatory group показывает согласованное сообщение."
    },
    "en": {
      "answer": "Clarify requirements: one selection per group, required input, disabled/keyboard/focus behavior. A UI prototype cannot prove server persistence.",
      "example": "Selecting a second radio clears the first; an empty required group shows the agreed message."
    }
  },
  "manual-junior-147": {
    "uz": {
      "answer": "Tugmaning o‘zi sonli interval emas. Uni yoqadigan input yoki vaqt sharti bo‘lsa o‘sha chegarani tekshiramiz; aks holda state/interaction mezonini ishlatamiz.",
      "example": "1–20 belgida yoqilsa 0/1 va 20/21 uzunlikni tekshiring."
    },
    "ru": {
      "answer": "Кнопка сама не числовой диапазон. Проверяем границы входа/времени, управляющих кнопкой, иначе состояния и взаимодействия.",
      "example": "Если active при 1–20 символах, проверяем длины 0/1 и 20/21."
    },
    "en": {
      "answer": "A button itself is not a numeric range. Check boundaries of inputs/time conditions controlling it, otherwise use state/interaction criteria.",
      "example": "If enabled for 1–20 characters, check lengths 0/1 and 20/21."
    }
  },
  "manual-junior-148": {
    "uz": {
      "answer": "Birinchi/barcha moslik, registr, bo‘sh/null input, Unicode va regex/literal qoidasini aniqlang. Kutilgan natija contractga bog‘liq.",
      "example": "“aba”dagi barcha “a”ni “x”ga almashtirish “xbx” beradi; first-only bo‘lsa “xba”."
    },
    "ru": {
      "answer": "Уточните first/all matches, регистр, empty/null, Unicode и regex/literal semantics. Expected result зависит от контракта.",
      "example": "Все “a” в “aba” → “xbx”; только первое → “xba”."
    },
    "en": {
      "answer": "Clarify first/all matches, case, empty/null input, Unicode and regex/literal semantics. Expected results depend on the contract.",
      "example": "Replacing all a's in aba produces xbx; first-only produces xba."
    }
  },
  "manual-junior-149": {
    "uz": {
      "answer": "Talabdagi matching, ranking, category, til/sinonim va filter qoidalarini data bilan tekshiring. Har natijada kalit so‘z borligi yetarli emas.",
      "example": "“Ko‘ylak” qidiruvida nom, kategoriya va kelishilgan sinonim bo‘yicha mos fixture’lar chiqadi."
    },
    "ru": {
      "answer": "Проверяйте matching, ranking, categories, язык/синонимы и filters по требованиям. Одного наличия ключевого слова мало.",
      "example": "Для “shirt” проверяем fixtures по названию, category и согласованным synonyms."
    },
    "en": {
      "answer": "Check specified matching, ranking, categories, language/synonyms and filters using controlled data. A keyword's presence alone is insufficient.",
      "example": "A shirt search returns fixtures matching names, categories and agreed synonyms."
    }
  },
  "manual-middle-130": {
    "uz": {
      "answer": "Agile qadriyat/prinsiplar to‘plami; Scrum shu yo‘nalishga mos frameworklardan biri. Kanban ham jamoa ish oqimini boshqarishda ishlatiladi.",
      "example": "“Agile ishlaymiz” deyish Sprint, PO va Scrum eventlari borligini avtomatik anglatmaydi."
    },
    "ru": {
      "answer": "Agile — ценности/принципы, Scrum — один из соответствующих frameworks; Kanban помогает управлять потоком работы.",
      "example": "Agile не обязательно означает наличие Sprint, PO и Scrum events."
    },
    "en": {
      "answer": "Agile is a set of values/principles; Scrum is one aligned framework. Kanban also helps manage work flow.",
      "example": "Working with Agile does not automatically imply Sprints, a PO and Scrum events."
    }
  },
  "manual-middle-131": {
    "uz": {
      "answer": "Gorilla odatda bir komponentni chuqur/takror tekshirish; monkey tasodifiy amallar; fuzz noodatiy yoki malformed input. Terminlarni jamoada aniqlashtiring.",
      "example": "Checkout’ni chuqur tekshirish, tasodifiy navigation va buzilgan JSON uch xil yondashuv."
    },
    "ru": {
      "answer": "Gorilla обычно глубоко/повторно проверяет компонент, monkey — случайные действия, fuzz — необычный/malformed input. Термины уточняйте.",
      "example": "Глубокий checkout, случайная navigation и malformed JSON — разные подходы."
    },
    "en": {
      "answer": "Gorilla usually repeatedly probes one component, monkey uses random actions and fuzz uses unusual/malformed input. Clarify team terminology.",
      "example": "Deep checkout probing, random navigation and malformed JSON are different approaches."
    }
  },
  "manual-middle-132": {
    "uz": {
      "answer": "Fix keyinroqqa qoldirilishi sababi/owner/risk yoziladi. Defectni defer qilish failed testni passed qilmaydi; status haqiqiy bajarilish natijasiga mos qoladi.",
      "example": "Kam ishlatiladigan ekrandagi bug defer bo‘lsa ham o‘sha tekshiruv failure’i hisobotda qoladi."
    },
    "ru": {
      "answer": "Фиксируем причину отсрочки, owner и риск. Deferred defect не превращает failed test в passed; статус отражает реальный результат.",
      "example": "Bug редкого экрана deferred, но failed check остаётся в отчёте."
    },
    "en": {
      "answer": "Record the deferral reason, owner and risk. Deferring a defect does not turn a failed test into a pass; status reflects actual execution.",
      "example": "A rare-screen defect may be deferred while its failed check remains in the report."
    }
  },
  "manual-middle-133": {
    "uz": {
      "answer": "Tasdiqlangan user story, contract, foydalanuvchi oqimi va stakeholder qarorlarini manba qilib, taxminlarni belgilang. Bor testlarni haqiqiy talab deb e’lon qilmang.",
      "example": "Login oqimi product owner bilan tasdiqlanib, unga case va natija bog‘lanadi."
    },
    "ru": {
      "answer": "Используйте подтверждённые stories, contracts, потоки и решения; отмечайте допущения. Существующий test сам не доказывает требование.",
      "example": "Login согласуется с PO, затем связывается с case/result."
    },
    "en": {
      "answer": "Use confirmed stories, contracts, flows and decisions and label assumptions. An existing test does not itself establish a requirement.",
      "example": "Confirm the login flow with the product owner, then link checks and results to it."
    }
  },
  "manual-middle-134": {
    "uz": {
      "answer": "To‘g‘ri build/muhit/data/precondition, bajarilgan qadam va expected/actual dalilni tekshiring. “Passed” yozuvining o‘zi yetmaydi; known bugga tegishli mustaqil testlar davom etishi mumkin.",
      "example": "Backend ishlamagan va UI cached data ko‘rsatayotgan testni yangi yozuv yaratildi deb passed qilmaymiz."
    },
    "ru": {
      "answer": "Проверяйте build/среду/data/preconditions, шаги и expected/actual evidence. Одной метки passed мало; независимые checks могут продолжаться при known bug.",
      "example": "Cached UI при недоступном backend не доказывает создание записи."
    },
    "en": {
      "answer": "Verify build/environment/data/preconditions, executed steps and expected/actual evidence. A passed label alone is insufficient; independent checks can continue despite a known defect.",
      "example": "Cached UI data with an unavailable backend does not prove record creation."
    }
  },
  "manual-middle-135": {
    "uz": {
      "answer": "Seed boshlang‘ich tanish dataset; conditioning muayyan case uchun data’ni tayyorlash/holatga keltirish. Izolyatsiya, cleanup va maxfiylikni saqlang.",
      "example": "Test user seed qilinadi, expired subscription case’i uchun uning sana/holati alohida tayyorlanadi."
    },
    "ru": {
      "answer": "Seed — известный начальный dataset; conditioning — подготовка состояния для case. Сохраняйте isolation, cleanup и privacy.",
      "example": "Seed user получает подготовленную дату/status для expired subscription case."
    },
    "en": {
      "answer": "Seed data is a known initial dataset; conditioning prepares data/state for a case. Preserve isolation, cleanup and privacy.",
      "example": "Seed a test user, then prepare its date/status for an expired-subscription case."
    }
  },
  "manual-middle-136": {
    "uz": {
      "answer": "Benchmark bir xil sharoitdagi baseline bilan solishtiradi; load kutilgan yuk, stress limit/tiklanish, volume katta data hajmini tekshiradi.",
      "example": "Bir xil 100 RPS’da ikki build; ko‘p parallel user; overload; million yozuvli DB — alohida mezonlar."
    },
    "ru": {
      "answer": "Benchmark сравнивает с baseline при одинаковых условиях; load — ожидаемая нагрузка, stress — предел/восстановление, volume — объём данных.",
      "example": "Два builds при 100 RPS, concurrency, overload и миллион записей — разные условия."
    },
    "en": {
      "answer": "Benchmark compares against a baseline under consistent conditions; load checks expected traffic, stress limits/recovery and volume large data sizes.",
      "example": "Two builds at 100 RPS, concurrency, overload and a million records represent distinct conditions."
    }
  },
  "manual-middle-137": {
    "uz": {
      "answer": "Maqsadga mos topology/data, izolyatsiya, monitoring va generator sig‘imi kerak. Bir necha qo‘lda sessiya 500 concurrent user’ni isbotlamaydi; o‘lchanmagan natijani capacity deb bermang.",
      "example": "Qo‘lda smoke qilamiz, kelishilgan katta load uchun o‘lchaydigan generator kerakligini qayd etamiz."
    },
    "ru": {
      "answer": "Нужны topology/data, isolation, monitoring и generator capacity. Несколько ручных sessions не доказывают 500 concurrent users; не выдавайте их за capacity.",
      "example": "Ручной smoke выполняем, для большого load фиксируем необходимость измеримого generator."
    },
    "en": {
      "answer": "Use suitable topology/data, isolation, monitoring and generator capacity. A few manual sessions do not prove 500 concurrent users; do not label unmeasured results as capacity evidence.",
      "example": "Run manual smoke checks and record the need for a measurable generator for high load."
    }
  },
  "manual-middle-138": {
    "uz": {
      "answer": "Well-formed syntax, namespaces, element/attribute, XSD tip/cheklovi va biznes qiymatlarni alohida tekshiring. XML valid bo‘lishi biznes to‘g‘riligini isbotlamaydi.",
      "example": "XSD’da amount decimal, biznesda esa total line-item summasiga teng bo‘lishi kerak."
    },
    "ru": {
      "answer": "Отдельно проверяйте syntax, namespaces, elements/attributes, XSD types/constraints и бизнес-значения. Valid XML не доказывает правильность бизнеса.",
      "example": "XSD требует decimal amount, бизнес — сумму line items."
    },
    "en": {
      "answer": "Separately check well-formed syntax, namespaces, elements/attributes, XSD types/constraints and business values. Valid XML does not prove business correctness.",
      "example": "An XSD requires a decimal amount while business rules require the line-item sum."
    }
  },
  "manual-middle-139": {
    "uz": {
      "answer": "Intent, kontekst, ko‘p bosqichli suhbat, xato/fallback, til va privacy’ni tekshiring. Javob o‘zgaruvchan bo‘lsa baholash mezoni va reprezentativ dataset kelishiladi.",
      "example": "“Buyurtmam qayerda?” so‘rovida to‘g‘ri account/order va tushunilmagan savolda xavfsiz fallback."
    },
    "ru": {
      "answer": "Проверяйте intent, context, многошаговый диалог, fallback, язык и privacy. Для меняющихся ответов согласуйте критерии и dataset.",
      "example": "На вопрос об order — верный account/order; на непонятный — безопасный fallback."
    },
    "en": {
      "answer": "Check intents, context, multi-turn dialogs, fallbacks, language and privacy. Agree evaluation criteria and representative data for variable responses.",
      "example": "An order-status query uses the right account/order; an unclear query has a safe fallback."
    }
  },
  "manual-middle-140": {
    "uz": {
      "answer": "Domain mutaxassisi, glossary, kelishilgan qoidalar va oqimlardan boshlang. Pul/data integrity, rounding, ruxsat va auditga risk asosida qarang; qoidalarni taxmin qilmang.",
      "example": "Transfer’da jami balans saqlanishi tekshiriladi, insurance eligibility esa tasdiqlangan qoidalardan olinadi."
    },
    "ru": {
      "answer": "Начните с эксперта, glossary, согласованных правил и потоков; риски денег/data integrity, rounding, прав и audit. Не придумывайте правила.",
      "example": "Для transfer проверяем общий баланс, insurance eligibility берём из согласованных правил."
    },
    "en": {
      "answer": "Start with domain experts, a glossary, agreed rules and flows; assess money/data integrity, rounding, permissions and audit risks. Do not invent rules.",
      "example": "Check total balance in transfers and derive insurance eligibility from approved rules."
    }
  },
  "manual-middle-141": {
    "uz": {
      "answer": "Create/upload, read/open, update/delete, ruxsat, tip/hajm, offline/xato va qayta urinishni tekshiring; print/email kabi tashqi amallar test kanalida bo‘lsin.",
      "example": "Bir user o‘chirgan fayl boshqa user’ga ruxsatsiz ochilmasin, failed upload yarim dokument qoldirmasin."
    },
    "ru": {
      "answer": "Проверяйте upload/read/update/delete, права, тип/размер, offline/errors/retry; print/email — через test channels.",
      "example": "Удалённый файл не доступен чужому user, failed upload не оставляет неполный документ."
    },
    "en": {
      "answer": "Check upload/read/update/delete, permissions, type/size, offline/errors/retries; use test channels for print/email actions.",
      "example": "A deleted file must not be exposed to another user; failed upload must not leave an incomplete document."
    }
  },
  "manual-middle-142": {
    "uz": {
      "answer": "Maqsad, foydalanuvchi va sharoitni aniqlashtirib, taxminlarni yozing; funksiya, usability, chidamlilik va xavfsizlik mezonini tanlang. Xavfli real sinovlarni tajriba deb boshlamang.",
      "example": "Qopqoqli idishda oqmaslik/ochilish; maishiy texnikada xavfsiz test tartibi kelishiladi."
    },
    "ru": {
      "answer": "Уточните назначение, пользователей и условия, обозначьте допущения; выберите функцию, usability, прочность и безопасность. Не импровизируйте опасные испытания.",
      "example": "Для бутылки — герметичность/открытие; для прибора — согласованный безопасный протокол."
    },
    "en": {
      "answer": "Clarify purpose, users and conditions, label assumptions and select function, usability, durability and safety criteria. Do not improvise hazardous trials.",
      "example": "Check a lidded container's sealing/opening; agree a safe protocol for an appliance."
    }
  },
  "manual-senior-65": {
    "uz": {
      "answer": "Audit kelishilgan jarayon/mezon bajarilganini obyektiv dalil bilan baholaydi; product testi xulqni tekshiradi. Findings, owner va corrective action kuzatiladi.",
      "example": "Code review talab qilinsa, audit tasdiq tarixini tekshiradi; unit test esa hisoblash natijasini."
    },
    "ru": {
      "answer": "Audit оценивает соблюдение согласованных процессов/criteria по evidence; product testing проверяет поведение. Отслеживаем findings, owners и actions.",
      "example": "Audit смотрит историю обязательного review, unit test — результат расчёта."
    },
    "en": {
      "answer": "An audit evaluates adherence to agreed processes/criteria through objective evidence; product testing checks behavior. Track findings, owners and corrective actions.",
      "example": "An audit checks required-review history; a unit test checks a calculation."
    }
  },
  "manual-senior-66": {
    "uz": {
      "answer": "Bug dalili, ta’sir, severity/priority, duplicate, owner va fix/release yo‘lini kelishadi. QA barcha ustuvorlikni yakka belgilamaydi.",
      "example": "Data yo‘qotish bug’i blocker, kosmetik xato esa kelishilgan backlog’ga tushishi mumkin."
    },
    "ru": {
      "answer": "Согласуют evidence, impact, severity/priority, duplicates, owner и fix/release path; QA не решает всё единолично.",
      "example": "Потеря data — blocker, cosmetic issue может идти в backlog."
    },
    "en": {
      "answer": "Agree evidence, impact, severity/priority, duplicates, ownership and fix/release handling; QA does not decide every priority alone.",
      "example": "Data loss may block a release while a cosmetic issue enters an agreed backlog."
    }
  },
  "manual-senior-67": {
    "uz": {
      "answer": "Measurement xom o‘lchov; metric kontekst/formulali ko‘rsatkich. Quality cost prevention, appraisal hamda ichki/tashqi failure xarajatlarini qamraydi.",
      "example": "Bug soni xom o‘lchov; escaped defect ulushi metric; rework/support esa failure xarajati."
    },
    "ru": {
      "answer": "Measurement — исходное измерение, metric — показатель с контекстом/формулой. Quality cost включает prevention, appraisal и внутренние/внешние failures.",
      "example": "Число bugs — measurement, доля escaped — metric, rework/support — failure cost."
    },
    "en": {
      "answer": "A measurement is raw observation; a metric is a contextual/formula-based indicator. Quality costs include prevention, appraisal and internal/external failures.",
      "example": "Bug count is a measurement, escaped-defect proportion a metric and rework/support a failure cost."
    }
  },
  "manual-senior-68": {
    "uz": {
      "answer": "Formula va birlikni kelishing: (actual−planned)/planned×100%, density=defect/kelishilgan size. Manfiy/ijobiy belgi va davr talqini yozilsin; bu EVA schedule variance bilan bir xil formula emas.",
      "example": "10 soat reja, 12 soat actual → +20%; 4 defect/2 KLOC → 2 defect/KLOC."
    },
    "ru": {
      "answer": "Согласуйте формулу/единицы: (actual−planned)/planned×100%, density=defects/size. Укажите знак и период; это не формула EVA schedule variance.",
      "example": "План 10ч, actual 12ч → +20%; 4 defects/2 KLOC → 2 defects/KLOC."
    },
    "en": {
      "answer": "Agree formulas/units: (actual−planned)/planned×100%, density=defects/agreed size. State sign/period; this is not the earned-value schedule-variance formula.",
      "example": "Planned 10h and actual 12h gives +20%; 4 defects/2 KLOC gives 2 defects/KLOC."
    }
  },
  "manual-senior-69": {
    "uz": {
      "answer": "Muammo va maqsadni dalil bilan kelishib, kichik pilot, feedback va owner belgilang. Jamoaga ortiqcha hujjat yuklamasdan foydani o‘lchang.",
      "example": "Release checklist pilotida missed risk kamayishi va bajarish vaqtini solishtiramiz."
    },
    "ru": {
      "answer": "Согласуйте проблему/цель по evidence, сделайте pilot с feedback/owner; измеряйте пользу без лишней бюрократии.",
      "example": "В pilot checklist сравниваем риски и время выполнения."
    },
    "en": {
      "answer": "Agree the problem/goal with evidence, run a small pilot with feedback/ownership and measure value without unnecessary bureaucracy.",
      "example": "In a release-checklist pilot, compare missed risks and execution time."
    }
  },
  "manual-senior-70": {
    "uz": {
      "answer": "Service/dependency compatibility, backup/restore, monitoring, alert, access, deploy/rollback va support tartibini tekshiring. Test va rollback rejasi upgrade’dan oldin kelishiladi.",
      "example": "Staging’da OS upgrade’dan keyin smoke, sertifikat, scheduled job va restore oqimi tekshiriladi."
    },
    "ru": {
      "answer": "Проверяйте compatibility, backup/restore, monitoring/alerts, access, deploy/rollback и support. План согласуется до upgrade.",
      "example": "После staging upgrade проверяем smoke, certificates, jobs и restore."
    },
    "en": {
      "answer": "Check compatibility, backup/restore, monitoring/alerts, access, deployment/rollback and support procedures. Agree plans before upgrading.",
      "example": "After a staging upgrade, check smoke flows, certificates, scheduled jobs and restoration."
    }
  },
  "manual-senior-71": {
    "uz": {
      "answer": "QA manager quality strategiya, jamoa va dalilga; PM delivery scope, muddat, dependency va koordinatsiyaga e’tibor beradi. Mas’uliyatlar jamoada aniq kelishiladi.",
      "example": "QA ochiq riskni ko‘rsatadi, PM resurs/muddatni koordinatsiya qiladi, release egasi qaror beradi."
    },
    "ru": {
      "answer": "QA manager — качество, команда и evidence; PM — delivery scope, сроки, dependencies и координация. Ответственность согласуется явно.",
      "example": "QA показывает risk, PM координирует ресурсы/сроки, release owner решает."
    },
    "en": {
      "answer": "A QA manager focuses on quality strategy, team and evidence; a PM on delivery scope, timing, dependencies and coordination. Agree responsibilities explicitly.",
      "example": "QA exposes risk, the PM coordinates resources/timing and the release owner decides."
    }
  },
  "manual-senior-72": {
    "uz": {
      "answer": "EDI’da format/version, mapping, acknowledgement va duplicate/retry; mainframe’da batch/job, dataset encoding, transaction, reconciliation va resurslar. Product contract va domain mezoni asos bo‘ladi.",
      "example": "Bir biznes xabari qayta yuborilganda ikkinchi to‘lovga aylanishi yoki encoding’da ism buzilishi tekshiriladi."
    },
    "ru": {
      "answer": "EDI: format/version, mapping, acknowledgements, duplicates/retry. Mainframe: batch/jobs, encoding, transactions, reconciliation/resources. Основа — contract и domain criteria.",
      "example": "Повтор EDI сообщения не создаёт вторую оплату; encoding сохраняет имя."
    },
    "en": {
      "answer": "For EDI check format/version, mapping, acknowledgements and duplicates/retries; for mainframes check batch/jobs, encoding, transactions, reconciliation and resources. Use product contracts/domain criteria.",
      "example": "A repeated business message must not create a second payment and encoding must preserve names."
    }
  },
  "automation-middle-62": {
    "uz": {
      "answer": "Hard failure odatda testni to‘xtatadi; soft failure qayd etib davom etishi mumkin, lekin yakuniy test failed qolishi kerak. “Assert/verify” nomi barcha frameworklarda bir xil emas.",
      "example": "Login bo‘lmasa davom etish ma’nosiz; mustaqil bir nechta label xatosini soft assertion bilan yig‘ish mumkin."
    },
    "ru": {
      "answer": "Hard failure обычно прекращает test; soft может продолжать, но итог должен быть failed. Имена assert/verify не универсальны.",
      "example": "Без login продолжать бессмысленно; независимые label issues можно собрать soft assertions."
    },
    "en": {
      "answer": "Hard failures usually stop a test; soft failures may continue but must still leave the final test failed. Assert/verify names are not universal.",
      "example": "Stop when login fails; collect independent label errors with soft assertions."
    }
  },
  "automation-middle-63": {
    "uz": {
      "answer": "Keyword amal nomini implementatsiyaga bog‘laydi, data-driven input variantlarini ajratadi. Environment config URL/feature/secret kabi muhit parametrini beradi; secret log/repoga tushmasin.",
      "example": "“Login” keyword test account data bilan QA URL’da bajariladi; production secret ishlatilmaydi."
    },
    "ru": {
      "answer": "Keyword связывает действие с кодом, data-driven отделяет inputs; config задаёт URL/features/secrets. Не раскрывайте secrets в logs/repo.",
      "example": "Login keyword использует test data и QA URL без production secret."
    },
    "en": {
      "answer": "Keywords map action names to implementations; data-driven designs separate input variants. Environment configuration supplies URLs/features/secrets; keep secrets out of logs/repos.",
      "example": "A Login keyword uses test-account data and a QA URL without production secrets."
    }
  },
  "manual-middle-143": {
    "uz": {
      "answer": "Bajariladigan statement, decision outcome va feasible path’larni ajrating. Imkonsiz yo‘lni majburan sanamang; loop’da barcha paths ko‘pincha cheksiz.",
      "example": "Model: a>10 bo‘lsa b>10 da P; a<10 da N. P/N uchun statement 2; branch 3 ((11,11),(11,0),(0,0)); feasible path 4 — a=10 holati ham qo‘shiladi."
    },
    "ru": {
      "answer": "Разделите statements, outcomes и feasible paths; не считайте невозможные пути. С loops все paths часто бесконечны.",
      "example": "Модель: a>10 и b>10 → P; a<10 → N. Statement 2, branch 3 ((11,11),(11,0),(0,0)), paths 4 с a=10."
    },
    "en": {
      "answer": "Distinguish executed statements, decision outcomes and feasible paths. Do not count impossible paths; loops can make full path coverage unbounded.",
      "example": "Model: a>10 then b>10 emits P; a<10 emits N. Statement: 2; branch: 3 ((11,11),(11,0),(0,0)); feasible paths: 4 including a=10."
    }
  },
  "manual-middle-144": {
    "uz": {
      "answer": "0-switch bitta o‘tish, 1-switch ketma-ket ikki o‘tishni tekshiradi. Tarixga bog‘liq qoida bo‘lsa, model holatini kengaytiring va taqiqlangan yo‘llarni chiqaring.",
      "example": "A→B/C, B→A/C, C→A/B; A’dan C’ga kelganda faqat A’ga qaytish sharti: A’dan 0-switch 2, allowed 1-switch 3 (A-B-A, A-B-C, A-C-A)."
    },
    "ru": {
      "answer": "0-switch покрывает один transition, 1-switch пару последовательных transitions. Для history-dependent rules расширяйте state и исключайте запрещённые paths.",
      "example": "A→B/C, B→A/C, C→A/B; после A-C возвращаться только A: из A 0-switch 2, allowed 1-switch 3 (A-B-A, A-B-C, A-C-A)."
    },
    "en": {
      "answer": "0-switch covers single transitions; 1-switch consecutive pairs. Enrich states for history-dependent rules and exclude forbidden paths.",
      "example": "A→B/C, B→A/C, C→A/B; after A-C only return to A: from A, 0-switch 2 and allowed 1-switch 3 (A-B-A, A-B-C, A-C-A)."
    }
  },
  "manual-middle-145": {
    "uz": {
      "answer": "Level komponent/integratsiya/tizim ko‘lamini, turi maqsadni, texnika case tanlashni bildiradi. Functional test faqat integration’dan keyin bo‘lmaydi; readiness va dependencyga qarab boshlanadi.",
      "example": "Discount unit testi functional ham white-box ham bo‘lishi mumkin; system integration tashqi tizimlar almashinuvini tekshiradi."
    },
    "ru": {
      "answer": "Level задаёт scope, тип — цель, техника — выбор cases. Functional checks не только после integration; старт зависит от readiness/dependencies.",
      "example": "Unit discount может быть functional/white-box; system integration проверяет обмен внешних систем."
    },
    "en": {
      "answer": "A level sets scope, a type the objective and a technique case selection. Functional checks need not wait until after integration; start depends on readiness/dependencies.",
      "example": "A discount unit check can be functional and white-box; system integration checks exchanges between systems."
    }
  },
  "manual-middle-146": {
    "uz": {
      "answer": "Review/inspection, analysis, demonstration va test orqali specified mezon dalili olinadi. Verification faqat static, validation faqat dynamic degan cheklov universal emas.",
      "example": "Formula review va hisoblash testi specification’ni tekshiradi; foydalanuvchi vazifasi foydasini baholash validation’ga yordam beradi."
    },
    "ru": {
      "answer": "Review/inspection, analysis, demonstration и test дают evidence specified criteria. Ограничение verification=только static, validation=только dynamic не универсально.",
      "example": "Review формулы и test проверяют specification; оценка задачи user помогает validation."
    },
    "en": {
      "answer": "Reviews/inspection, analysis, demonstrations and tests can provide evidence of specified criteria. Verification-only-static and validation-only-dynamic are not universal rules.",
      "example": "Formula review and calculation checks verify specifications; evaluating user-task usefulness supports validation."
    }
  },
  "manual-senior-73": {
    "uz": {
      "answer": "Optimistic/likely/pessimistic bahoni dalil bilan oling; PERT usulida (O+4M+P)/6. Least-squares model tarixiy bog‘liqlikni baholaydi, ammo data/scope farqi va noaniqlik hisobga olinadi.",
      "example": "O=3, M=6, P=15 → 7 soat; dependency risklari va oraliq alohida ko‘rsatiladi."
    },
    "ru": {
      "answer": "Обоснуйте optimistic/likely/pessimistic; PERT: (O+4M+P)/6. Least-squares model оценивает историческую связь, но учитывайте scope/data и uncertainty.",
      "example": "O=3, M=6, P=15 → 7ч; отдельно указываем risks и диапазон."
    },
    "en": {
      "answer": "Justify optimistic/likely/pessimistic estimates; PERT uses (O+4M+P)/6. Least-squares models estimate historical relationships but require scope/data and uncertainty checks.",
      "example": "O=3, M=6, P=15 yields 7 hours; state risks and the range separately."
    }
  },
  "manual-senior-74": {
    "uz": {
      "answer": "LOC, function point yoki kelishilgan feature count boshqa-boshqa size mezonlari. Micro/macro atamasining jamoaviy ma’nosini aniqlang; granular/aggregate metrikani kontekstsiz taqqoslamang.",
      "example": "Bir modul bug density’sini butun loyiha umumiy bug soniga bevosita tenglashtirmaymiz."
    },
    "ru": {
      "answer": "LOC, function points и feature count — разные size меры. Уточните смысл micro/macro в команде; не сравнивайте granular/aggregate без контекста.",
      "example": "Density модуля не равна общему числу bugs проекта."
    },
    "en": {
      "answer": "LOC, function points and feature counts are different size measures. Clarify team meanings of micro/macro and avoid comparing granular/aggregate metrics without context.",
      "example": "A module's defect density is not directly comparable to a project's total bug count."
    }
  },
  "manual-middle-147": {
    "uz": {
      "answer": "Server trafik/TLS/static content/routing kabi xizmatni beradi; app biznes oqim/data/ruxsatni bajaradi. Boundary va dependency bo‘yicha ikkalasini alohida va integratsiyada tekshiramiz.",
      "example": "Server health yaxshi bo‘lsa ham checkout API xato qaytarishi mumkin."
    },
    "ru": {
      "answer": "Server обслуживает traffic/TLS/static content/routing; app — бизнес/data/права. Проверяем отдельно и вместе по boundaries/dependencies.",
      "example": "Здоровый server не гарантирует рабочий checkout API."
    },
    "en": {
      "answer": "A server handles traffic/TLS/static content/routing; an app implements business/data/permissions. Check separately and together across boundaries/dependencies.",
      "example": "A healthy server does not guarantee a working checkout API."
    }
  },
  "manual-junior-150": {
    "uz": {
      "answer": "Bug tracker issue, owner va workflow’ni; test management case/run/natijani boshqaradi. Masalan Jira issue’ni test case/build daliliga bog‘lash mumkin; tool nomi yaxshi report o‘rnini bosmaydi.",
      "example": "Failed case’ning bug ID’si va fix retest natijasi bir-biriga bog‘lanadi."
    },
    "ru": {
      "answer": "Bug tracker ведёт issues/owners/workflow, test management — cases/runs/results. Jira issue можно связать с case/build evidence; tool не заменяет хороший report.",
      "example": "Failed case связан с bug ID и fix retest result."
    },
    "en": {
      "answer": "Bug trackers manage issues/owners/workflows; test-management tools manage cases/runs/results. Link a Jira issue to case/build evidence; a tool does not replace a good report.",
      "example": "Link a failed case to its defect ID and fix-retest result."
    }
  },
  "manual-middle-148": {
    "uz": {
      "answer": "Risk coverage, vaqt bo‘yicha escaped defects, flaky trend yoki response percentillari kerakli savolga qarab tanlanadi. Denominator, davr va bajarilmagan tekshiruvlarni yozing.",
      "example": "“Passed foizi” yonida blockerlar va bajarilmagan scope ham ko‘rsatiladi."
    },
    "ru": {
      "answer": "Выбирайте risk coverage, escaped-defect/flaky trends или latency percentiles по цели; указывайте denominator, период и unexecuted checks.",
      "example": "Рядом с pass rate показываем blockers и непройденный scope."
    },
    "en": {
      "answer": "Choose risk coverage, escaped-defect/flaky trends or latency percentiles by the decision needed; state denominators, periods and unexecuted checks.",
      "example": "Show blockers and unexecuted scope alongside a pass rate."
    }
  },
  "manual-middle-149": {
    "uz": {
      "answer": "V-model development artefaktlarini mos test darajalari bilan bog‘lab erta rejalashga yordam beradi. RAD prototip va qisqa feedback sikliga urg‘u beradi; regression va risk baribir boshqariladi.",
      "example": "System talabi asosida system test, component dizaynidan unit test rejalaymiz; prototipda foydalanuvchi feedback’i erta olinadi."
    },
    "ru": {
      "answer": "V-model связывает артефакты с test levels для раннего планирования. RAD акцентирует prototypes и короткий feedback; regression/риски остаются управляемыми.",
      "example": "Из system requirements планируем system tests, из component design — unit tests; prototype даёт ранний user feedback."
    },
    "en": {
      "answer": "The V-model links development artifacts to test levels for early planning. RAD emphasizes prototypes and short feedback cycles; regression and risks still need management.",
      "example": "Plan system checks from system requirements and unit checks from component design; prototypes gather early user feedback."
    }
  },
  "manual-senior-75": {
    "uz": {
      "answer": "Rollback oldingi versiya/holatga qaytadi; roll-forward yangi fix orqali tiklaydi. Data/schema compatibility, yarim amallar, backup va tiklanish vaqtini nazoratli muhitda tekshiring.",
      "example": "Yangi schema eski build’ga mos kelmasa, rollback’ni taxmin qilmay, kelishilgan forward-fix yo‘lini sinaymiz."
    },
    "ru": {
      "answer": "Rollback возвращает предыдущую версию/состояние, roll-forward восстанавливает новым fix. Проверяйте data/schema, частичные операции, backup и recovery time.",
      "example": "Если новая schema несовместима, проверяем согласованный forward-fix вместо предположения о rollback."
    },
    "en": {
      "answer": "Rollback restores a previous version/state; roll-forward recovers through a new fix. Check data/schema compatibility, partial operations, backups and recovery time in a controlled environment.",
      "example": "If a new schema is incompatible with the old build, verify an agreed forward-fix path rather than assuming rollback works."
    }
  },
  "automation-junior-70": {
    "uz": {
      "answer": "Birinchisi bitta mos elementni qaytaradi, topilmasa exception; ikkinchisi ro‘yxat, topilmasa bo‘sh ro‘yxat qaytaradi. Kutish strategiyasini alohida belgilang.",
      "example": "Savat qatorlari ro‘yxatida 0 element bo‘lishi normal bo‘lishi mumkin."
    },
    "ru": {
      "answer": "Первый возвращает один элемент или exception; второй — список, включая пустой. Отдельно определите ожидание.",
      "example": "Список строк корзины может законно иметь 0 элементов."
    },
    "en": {
      "answer": "The first returns one element or throws; the second returns a list, possibly empty. Define waiting separately.",
      "example": "An empty cart-row list may be a valid state."
    }
  },
  "automation-junior-71": {
    "uz": {
      "answer": "Absolute yo‘l DOM tuzilishiga qattiq bog‘lanadi. Barqaror attribute, label va yaqin parent orqali scope tanlang; contains/starts-with juda keng moslashmasin.",
      "example": "//label[normalize-space()='Email']/following-sibling::input — DOM shu tuzilishga ega bo‘lsa."
    },
    "ru": {
      "answer": "Absolute path хрупок; используйте стабильные attributes/labels и parent scope. contains/starts-with не должны совпадать слишком широко.",
      "example": "//label[normalize-space()='Email']/following-sibling::input — если DOM соответствует."
    },
    "en": {
      "answer": "Absolute paths are brittle; use stable attributes/labels and parent scopes. Avoid overly broad contains/starts-with matches.",
      "example": "//label[normalize-space()='Email']/following-sibling::input works if the DOM has that structure."
    }
  },
  "automation-junior-72": {
    "uz": {
      "answer": "close joriy oynani, quit sessiyani yopadi. get URL ochadi; navigate to/back/forward/refresh beradi. get va navigate.to’ni tezlik haqidagi taxmin bilan ajratmang.",
      "example": "Har test cleanup’da driver.quit; boshqa tabga o‘tganda window handle ishlatiladi."
    },
    "ru": {
      "answer": "close закрывает текущее окно, quit session; get открывает URL, navigate даёт to/back/forward/refresh. Не придумывайте различия скорости.",
      "example": "Cleanup вызывает quit; для перехода к tab используем window handle."
    },
    "en": {
      "answer": "close closes the current window, quit the session; get opens a URL, navigate provides to/back/forward/refresh. Do not invent speed differences.",
      "example": "Cleanup calls quit; switch tabs using window handles."
    }
  },
  "automation-junior-73": {
    "uz": {
      "answer": "Select helper faqat haqiqiy select uchun. Custom’da trigger, option va tanlangan holatni locators bilan tekshiring; visible text/value/index shartga mos tanlanadi.",
      "example": "Mamlakat ro‘yxatida value tanlovi tartib o‘zgarganda ham barqaror bo‘lishi mumkin."
    },
    "ru": {
      "answer": "Select helper только для select. Custom требует locators для trigger/options/state; text/value/index выбирайте по условиям.",
      "example": "Выбор country по value может сохраняться при перестановке списка."
    },
    "en": {
      "answer": "Use Select helpers only for actual select elements. Custom controls need trigger/option/state locators; choose text/value/index appropriately.",
      "example": "Selecting a country by value may remain stable when list order changes."
    }
  },
  "automation-junior-74": {
    "uz": {
      "answer": "DOM’da borligi ko‘rinishi degani emas. getText, attribute/property va computed CSS maqsadiga qarab ishlatiladi; dynamic holat uchun expected condition kuting.",
      "example": "Input qiymati ko‘pincha value property’da, oddiy matn esa getText orqali olinadi."
    },
    "ru": {
      "answer": "Присутствие не равно видимости. Выбирайте getText, attribute/property и computed CSS по цели, ждите dynamic condition.",
      "example": "Input часто хранит value property, обычный текст читают getText."
    },
    "en": {
      "answer": "Presence is not visibility. Choose getText, attributes/properties and computed CSS by purpose and wait for dynamic conditions.",
      "example": "An input's value is often a property while ordinary visible text is read with getText."
    }
  },
  "automation-junior-75": {
    "uz": {
      "answer": "Asosiy chegarasi browser DOM. OS dialog/desktop/native mobile uchun mos alohida vosita kerak. File upload’da input[type=file] imkoniyatidan foydalanish mumkin.",
      "example": "Web payment iframe Selenium’da, bankning native app oqimi esa boshqa qatlamda tekshiriladi."
    },
    "ru": {
      "answer": "Основной scope — browser DOM; native OS/desktop/mobile требуют подходящего tool. Upload возможен через input[type=file].",
      "example": "Payment iframe — Selenium, native banking app — другой слой."
    },
    "en": {
      "answer": "Its main scope is the browser DOM; native OS/desktop/mobile interactions need suitable tools. Uploads can use input[type=file].",
      "example": "Check a payment iframe with Selenium and a native banking app through another layer."
    }
  },
  "automation-junior-76": {
    "uz": {
      "answer": "Failure va cleanup tartibini boshqarib, screenshot, build/browser/test ID va logni artifact sifatida saqlang. Maxfiy inputlar ko‘rinmasin.",
      "example": "Bir xil nomli parallel testlar artifactni ustiga yozmasligi uchun unique ID ishlatiladi."
    },
    "ru": {
      "answer": "Сохраняйте screenshot/build/browser/test ID/log до cleanup; маскируйте секреты.",
      "example": "Parallel tests используют unique artifact IDs."
    },
    "en": {
      "answer": "Capture screenshots/build/browser/test IDs/logs before cleanup and redact secrets.",
      "example": "Parallel tests use unique artifact IDs to avoid overwriting evidence."
    }
  },
  "automation-middle-64": {
    "uz": {
      "answer": "Constructor obyektni boshlaydi; public — ochiq, private — sinf ichida, package-private — paketda, protected — paket va subclass’da. static sinfga tegishli; top-level sinf static bo‘lmaydi, nested bo‘lishi mumkin.",
      "example": "Odatiy public static void main(String[] args): public — kirish, static — obyekt shart emas, void — qiymat qaytarmaydi; args — argumentlar."
    },
    "ru": {
      "answer": "Constructor инициализирует объект. public — общий доступ, private — класс, package-private — пакет, protected — пакет и subclasses. static принадлежит классу; top-level class не static, nested может быть.",
      "example": "Обычный public static void main(String[] args): public — доступ, static — без экземпляра, void — нет возвращаемого значения; args — аргументы."
    },
    "en": {
      "answer": "Constructors initialize objects. public is broadly accessible, private within the class, package-private within the package, protected within the package/subclasses. static belongs to a class; nested classes can be static, top-level ones cannot.",
      "example": "In conventional public static void main(String[] args), public controls access, static avoids an instance, void returns no value and args holds arguments."
    }
  },
  "automation-middle-65": {
    "uz": {
      "answer": "Overload bir nomli turli parametrlar; override vorisda mos instance method xulqini almashtiradi. Java bir class’dan meros oladi, ko‘p interface’ni implement qilishi mumkin.",
      "example": "ApiClient vorisi send’ni override qiladi; send(String) va send(Request) overload bo‘lishi mumkin."
    },
    "ru": {
      "answer": "Overload — разные параметры одного имени, override — новая реализация inherited instance method. Один superclass, несколько interfaces.",
      "example": "Наследник ApiClient override send; send(String)/send(Request) могут быть overload."
    },
    "en": {
      "answer": "Overloading uses different parameters for one name; overriding replaces inherited instance-method behavior. Java supports one superclass and multiple interfaces.",
      "example": "An ApiClient subclass overrides send; send(String)/send(Request) may be overloads."
    }
  },
  "automation-middle-66": {
    "uz": {
      "answer": "Checked odatda declare/handle qilinadi; unchecked runtime xato. Catch tegishli turga mos, finally cleanup uchun; try-with-resources close’ni boshqaradi. Xatoni yutib passed qilmang.",
      "example": "File yo‘q bo‘lsa aniq xabar bering, browser failure’dan keyin resurslarni yoping."
    },
    "ru": {
      "answer": "Checked обычно declare/handle, unchecked — runtime. Catch по типу, finally cleanup, try-with-resources управляет close. Не превращайте failure в pass.",
      "example": "При missing file даём ясный error, после browser failure закрываем ресурсы."
    },
    "en": {
      "answer": "Checked exceptions generally require declaration/handling; unchecked ones occur at runtime. Use type-specific catches, finally cleanup and try-with-resources; do not swallow failures into passes.",
      "example": "Report missing files clearly and close resources after browser failures."
    }
  },
  "automation-middle-67": {
    "uz": {
      "answer": "Array uzunligi fixed; ArrayList random access uchun qulay; LinkedList’da joyni topish xarajati bor. HashMap order kafolatlamaydi, LinkedHashMap odatda insertion order, TreeMap key sort beradi.",
      "example": "Test ID→result Map’da, saralangan IDlar uchun TreeMap tanlanishi mumkin."
    },
    "ru": {
      "answer": "Array фиксирован, ArrayList удобен для random access; LinkedList требует поиска позиции. HashMap без порядка, LinkedHashMap обычно insertion order, TreeMap сортирует keys.",
      "example": "ID→result храним в Map, для sorted IDs можно TreeMap."
    },
    "en": {
      "answer": "Arrays are fixed-size; ArrayList suits random access; LinkedList insertion still costs locating a position. HashMap has no order guarantee, LinkedHashMap usually preserves insertion order, TreeMap sorts keys.",
      "example": "Use a map for test-ID results and possibly TreeMap for sorted keys."
    }
  },
  "automation-middle-68": {
    "uz": {
      "answer": "Obyektlar odatda heap’da, local execution frame stack’da; JIT detali boshqacha bo‘lishi mumkin. Wrapper primitive’ni obyekt qiladi; interface to‘g‘ridan-to‘g‘ri yaratilmaydi, implementatsiya ishlatiladi.",
      "example": "Integer null bo‘lsa int’ga unboxing NullPointerException berishi mumkin."
    },
    "ru": {
      "answer": "Objects обычно heap, execution frames stack; JIT может менять детали. Wrapper упаковывает primitive; interface используют через implementation.",
      "example": "Unboxing null Integer может дать NullPointerException."
    },
    "en": {
      "answer": "Objects typically live on the heap and execution frames on the stack; JIT may alter details. Wrappers box primitives; instantiate an implementation, not an interface directly.",
      "example": "Unboxing a null Integer can throw NullPointerException."
    }
  },
  "automation-middle-69": {
    "uz": {
      "answer": "Java split regex ishlatadi; trim barcha Unicode whitespace’ni qamramaydi, strip maqsadiga qarab mos. Reverse/count’da char, code point va grapheme farqini aniqlang.",
      "example": "“a.b”ni literal nuqtada split qilish regex escape talab qiladi."
    },
    "ru": {
      "answer": "split использует regex; trim не охватывает весь Unicode whitespace, strip выбирайте по цели. Для reverse/count различайте char/code point/grapheme.",
      "example": "Literal dot в split требует regex escaping."
    },
    "en": {
      "answer": "Java split uses regex; trim does not cover all Unicode whitespace, so consider strip. Distinguish characters, code points and graphemes for reversing/counting.",
      "example": "Splitting a.b on a literal dot requires regex escaping."
    }
  },
  "automation-junior-77": {
    "uz": {
      "answer": "Unicode va bo‘shliq qoidalarini kelishing. Reverse va palindrome uchun ikki uchdan taqqoslash/aylantirish, takrorlar uchun hisoblagich, so‘zlar uchun token ajratish ishlatiladi; empty/null holatini belgilang.",
      "example": "“aba”: reverse “aba”, a soni 2, distinct a/b; “a  b” odatiy token qoidasida 2 so‘z."
    },
    "ru": {
      "answer": "Согласуйте Unicode/пробелы. Для reverse/palindrome используйте разворот или сравнение с двух концов, для повторов — счётчик, для слов — токены; определите empty/null.",
      "example": "aba: reverse aba, count a=2, distinct a/b; a  b обычно 2 слова."
    },
    "en": {
      "answer": "Agree Unicode/whitespace rules. Reverse or compare from both ends for palindrome tasks, count duplicates and tokenize words; define empty/null behavior.",
      "example": "aba reverses to aba, a occurs twice, distinct letters are a/b; a  b usually has two words."
    }
  },
  "automation-junior-78": {
    "uz": {
      "answer": "Token order va har tokenning harflari farqli operatsiya. Tinish belgisi, takroriy bo‘shliq va locale case qoidasini belgilang; “har ikkinchisini reverse”ni aniqlashtiring.",
      "example": "“ab cd”: token order “cd ab”, har token reverse “ba dc”; orasiga space “a b   c d” qoidaga bog‘liq."
    },
    "ru": {
      "answer": "Порядок tokens и буквы внутри token — разные операции. Уточните punctuation/spaces/locale и неоднозначное every-second reversal.",
      "example": "ab cd: порядок cd ab, reverse букв ba dc; spacing зависит от правила."
    },
    "en": {
      "answer": "Reversing token order differs from reversing letters inside tokens. Define punctuation/spaces/locale and clarify ambiguous every-second reversal.",
      "example": "ab cd becomes cd ab by token order or ba dc by letter reversal; spacing depends on the contract."
    }
  },
  "automation-junior-79": {
    "uz": {
      "answer": "0!, 1 ning prime emasligi, manfiy input, overflow va exponent qoidasini belgilang. Loop chegarasi va numeric tip muhim.",
      "example": "0!=1; 13 prime; 204 digit sum=6; 3^4=81, Java’da ^ esa XOR."
    },
    "ru": {
      "answer": "Определите 0!, что 1 не prime, negative input, overflow и exponent rules; важны loops/types.",
      "example": "0!=1; 13 prime; сумма 204=6; 3^4=81, но Java ^ — XOR."
    },
    "en": {
      "answer": "Define 0!, 1 not being prime, negative inputs, overflow and exponent rules; loop bounds and numeric types matter.",
      "example": "0!=1; 13 is prime; 204 sums to 6; 3 to the fourth is 81, but Java ^ means XOR."
    }
  },
  "automation-junior-80": {
    "uz": {
      "answer": "Distinct yoki takrorli ranking, yetarli element, key order va tenglik qoidasini aniqlang. Numeric sort string sort bilan bir xil emas.",
      "example": "[9,9,4] uchun second distinct=4; frequency map {9:2,4:1}."
    },
    "ru": {
      "answer": "Уточните distinct/duplicate ranks, достаточность, key order и ties. Numeric sort не равен string sort.",
      "example": "[9,9,4]: второй distinct=4, частоты {9:2,4:1}."
    },
    "en": {
      "answer": "Define distinct/duplicate ranks, minimum size, key order and ties. Numeric sorting differs from string sorting.",
      "example": "For [9,9,4], second distinct is 4 and frequencies are {9:2,4:1}."
    }
  },
  "automation-junior-81": {
    "uz": {
      "answer": "Pattern row/column qoidasini va count’da takrorlangan element kiradimi aniqlang. Seen set ilk takrorni topadi, nested loops patternni chiqaradi.",
      "example": "“abca”da takrorgacha unique count=3; 3 qator yulduz naqshi 1,2,3 yulduz bo‘lishi mumkin."
    },
    "ru": {
      "answer": "Уточните rows/columns и включается ли повтор; seen set ищет первый повтор, nested loops строят pattern.",
      "example": "В abca до повтора unique count=3; pattern 3 rows может иметь 1,2,3 stars."
    },
    "en": {
      "answer": "Define rows/columns and whether the duplicate is included; a seen set detects the first repeat and nested loops generate patterns.",
      "example": "abca has three distinct characters before a repeat; a three-row pattern may have 1,2,3 stars."
    }
  },
  "automation-middle-70": {
    "uz": {
      "answer": "Suite/test/class/method setup ko‘lamini ajrating; priority ordering biznes ahamiyati emas. Teng priority yoki parallel tartibga tayanmang, dependency’ni minimal tuting.",
      "example": "BeforeMethod har test uchun data tayyorlaydi; static umumiy data testlarni bog‘lamasin."
    },
    "ru": {
      "answer": "Различайте suite/test/class/method setup; priority order не бизнес-приоритет. Не полагайтесь на ties/parallel order, минимум dependencies.",
      "example": "BeforeMethod готовит data для каждого test без общего mutable static state."
    },
    "en": {
      "answer": "Separate suite/test/class/method setup; execution priority is not business priority. Avoid depending on ties/parallel order and minimize dependencies.",
      "example": "BeforeMethod prepares each test's data without shared mutable static state."
    }
  },
  "automation-middle-71": {
    "uz": {
      "answer": "DataProvider dataset iteratsiya, parameters config qiymati, groups tanlov beradi. Disabled/skip bajarilmagan testdir; failed’ni yashirish uchun ishlatilmaydi.",
      "example": "Smoke group CI’da tanlanadi; parol variantlari alohida DataProvider qatorlaridir."
    },
    "ru": {
      "answer": "DataProvider даёт dataset iterations, parameters config, groups selection. Disabled/skip — unexecuted, не способ скрыть failure.",
      "example": "CI выбирает smoke group, варианты password — rows DataProvider."
    },
    "en": {
      "answer": "DataProvider supplies dataset iterations, parameters configuration and groups selection. Disabled/skipped means unexecuted, not a way to hide failure.",
      "example": "CI selects a smoke group while password variants are DataProvider rows."
    }
  },
  "automation-middle-72": {
    "uz": {
      "answer": "Listener natija hodisasini qayd etadi; failure artifacti cleanup’dan oldin olinadi. Retry original failure’ni saqlasin; failed selection yangi to‘liq regression o‘rnini bosmaydi.",
      "example": "Retry o‘tsa ham birinchi xato, urinishlar soni va sabab hisobotda qoladi."
    },
    "ru": {
      "answer": "Listener записывает events; artifacts до cleanup. Retry сохраняет исходный failure; failed selection не заменяет regression.",
      "example": "Первый failure, attempts и причина остаются даже после pass retry."
    },
    "en": {
      "answer": "Listeners record result events and collect artifacts before cleanup. Retries preserve original failures; selecting failed tests does not replace regression.",
      "example": "The first failure, attempt count and cause remain visible after a passing retry."
    }
  },
  "automation-junior-82": {
    "uz": {
      "answer": "Maven dependency/buildni boshqaradi; pom.xml loyiha modelidir, Page Object Model emas. validate→compile→test→package→verify→install→deploy fazalari tanlangan fazagacha bajariladi.",
      "example": "mvn test testlarni, mvn verify tekshiruv lifecycle’ini verify’gacha bajaradi."
    },
    "ru": {
      "answer": "Maven управляет dependencies/build; pom.xml — project model, не Page Object Model. Фазы выполняются до выбранной включительно.",
      "example": "mvn test запускает tests, mvn verify проходит до verify."
    },
    "en": {
      "answer": "Maven manages dependencies/builds; pom.xml is a project model, not Page Object Model. Phases execute up to the selected phase.",
      "example": "mvn test runs tests while mvn verify advances through verification."
    }
  },
  "automation-junior-83": {
    "uz": {
      "answer": "Yo‘q. Kod change/review orqali tuzatiladi. Skip testni bajarmaslikdir, sifatsiz kodni tuzatish emas; test compilation va execution flaglari farqlanadi.",
      "example": "-DskipTests odatda execution’ni o‘tkazadi; nima skip bo‘lganini report’da ochiq ayting."
    },
    "ru": {
      "answer": "Нет, код правят через change/review. Skip не исправляет код; test compilation и execution flags различаются.",
      "example": "-DskipTests обычно пропускает execution; явно фиксируйте skipped checks."
    },
    "en": {
      "answer": "No, fix code through changes/reviews. Skipping does not fix code; flags for test compilation and execution differ.",
      "example": "-DskipTests generally skips execution; report skipped checks explicitly."
    }
  },
  "automation-junior-84": {
    "uz": {
      "answer": "init repo yaratadi; fetch remote ma’lumotni olib, joriy branchni birlashtirmaydi; pull fetch va merge/rebase qiladi. Faqat review qilingan fayllarni stage qiling.",
      "example": "git status/diff ko‘rib, git add path orqali kerakli o‘zgarish commit qilinadi."
    },
    "ru": {
      "answer": "init создаёт repo; fetch получает remote без интеграции в branch; pull добавляет merge/rebase. Stage только проверенные файлы.",
      "example": "Проверяем status/diff и stage нужного path."
    },
    "en": {
      "answer": "init creates a repo; fetch retrieves remote data without integration; pull fetches and merges/rebases. Stage only reviewed files.",
      "example": "Inspect status/diff and stage selected paths before committing."
    }
  },
  "automation-junior-85": {
    "uz": {
      "answer": "Untracked ish, data yoki secret bo‘lishi mumkin. Dry-run ro‘yxatini ko‘rib scope’ni toraytiring va kerakli faylni saqlang; clean commit yaratmaydi.",
      "example": "git clean -n o‘chiriladigan nomzodlarni ko‘rsatadi; natijani tekshirishdan boshlang."
    },
    "ru": {
      "answer": "Untracked может быть работой/data/secret; сначала dry-run, narrow scope и сохранение нужного. clean не создаёт commit.",
      "example": "git clean -n показывает кандидатов на удаление; сначала проверьте список."
    },
    "en": {
      "answer": "Untracked files may be work/data/secrets; inspect a dry run, narrow scope and preserve needed files. clean does not create a commit.",
      "example": "git clean -n previews removal candidates; inspect the list first."
    }
  },
  "automation-middle-73": {
    "uz": {
      "answer": "Scenario bitta xulq misoli; Outline Examples qatorlari bilan parametrli misollar; DataTable step’ga strukturali data beradi. Steps biznes xulqini tushunarli yozsin.",
      "example": "Login Outline’da valid/invalid satrlar, buyurtma step’ida esa mahsulotlar jadvali bo‘ladi."
    },
    "ru": {
      "answer": "Scenario — один пример, Outline/Examples — parameterized examples, DataTable — структурированная data для step. Описывайте бизнес-поведение.",
      "example": "Login Outline имеет valid/invalid rows, order step — таблицу товаров."
    },
    "en": {
      "answer": "A Scenario is one example, an Outline/Examples supplies parameterized examples and a DataTable supplies structured data to a step. Express business behavior clearly.",
      "example": "A login outline has valid/invalid rows while an order step uses a product table."
    }
  },
  "automation-middle-74": {
    "uz": {
      "answer": "Hooks setup/cleanup kodi, Background umumiy visible Given steps, tags tanlash/metadatadir. ignore universal Gherkin keyword emas; tag expression yoki runner config tanlovni boshqaradi.",
      "example": "@smoke tanlanadi; @ignore chiqarilishi config’da kelishiladi, “passed” hisoblanmaydi."
    },
    "ru": {
      "answer": "Hooks — setup/cleanup code, Background — общие Given steps, tags — selection/metadata. ignore не универсальный Gherkin keyword.",
      "example": "@smoke выбирают, @ignore исключают настройкой и не считают passed."
    },
    "en": {
      "answer": "Hooks run setup/cleanup code, Background shares visible Given steps and tags provide selection/metadata. ignore is not a universal Gherkin keyword.",
      "example": "Select @smoke and exclude an agreed @ignore tag through configuration; excluded tests are not passes."
    }
  },
  "automation-middle-75": {
    "uz": {
      "answer": "Data-driven inputni koddan, keyword-driven amal nomini implementatsiyadan ajratadi; hybrid aralashadi. Oddiylik va maintenance foydasi nomidan muhimroq.",
      "example": "CSV data + Login keyword birlashsa hybrid yondashuv bo‘lishi mumkin."
    },
    "ru": {
      "answer": "Data-driven отделяет input, keyword-driven — имена actions от кода; hybrid комбинирует. Простота/поддержка важнее названия.",
      "example": "CSV data + Login keyword могут быть hybrid."
    },
    "en": {
      "answer": "Data-driven separates inputs, keyword-driven separates action names from implementation and hybrids combine them. Simplicity/maintenance matter more than labels.",
      "example": "CSV data combined with a Login keyword can form a hybrid approach."
    }
  },
  "automation-middle-76": {
    "uz": {
      "answer": "Workbook/sheet/row/cell, tip/formula/date/blank holati va resurs yopilishini boshqaring. Parallel test data’ni tasodifan o‘zgartirmasin; secret spreadsheetga qo‘yilmasin.",
      "example": "Telefon raqamini numeric o‘qish boshlang‘ich 0’ni yo‘qotishi mumkin."
    },
    "ru": {
      "answer": "Учитывайте workbook/sheet/row/cell, types/formulas/dates/blanks и close. Не меняйте общую data параллельно и не храните secrets.",
      "example": "Numeric чтение телефона может потерять начальный 0."
    },
    "en": {
      "answer": "Handle workbook/sheet/row/cells, types/formulas/dates/blanks and resource closure. Avoid parallel data mutation and storing secrets.",
      "example": "Reading phone numbers numerically can lose leading zeros."
    }
  },
  "manual-middle-150": {
    "uz": {
      "answer": "Sekinlikning o‘zi kodni belgilamaydi: client timeout’da javob umuman bo‘lmasligi mumkin. 408 client so‘rov timeouti, 504 gateway upstream timeouti; 202 async qabul qilingan ish uchun.",
      "example": "Server keyin javob bersa ham client kutishni to‘xtatgan bo‘lishi mumkin."
    },
    "ru": {
      "answer": "Медленность сама не задаёт код: client timeout может не иметь ответа. 408 — timeout запроса клиента, 504 — upstream timeout gateway, 202 — принятая async работа.",
      "example": "Server может ответить после того, как client перестал ждать."
    },
    "en": {
      "answer": "Slowness alone does not determine a code; a client timeout may have no response. 408 concerns client request timeout, 504 gateway upstream timeout and 202 accepted asynchronous work.",
      "example": "The server may respond after the client has stopped waiting."
    }
  },
  "manual-middle-151": {
    "uz": {
      "answer": "Yo‘q. Natija va contractga bog‘liq: created 201, accepted 202, body yo‘q muvaffaqiyat 204 bo‘lishi mumkin. UPDATE standard HTTP metod emas.",
      "example": "Yangi resurs yaratgan PUT ham 201 qaytarishi mumkin; status bilan state’ni birga tekshiring."
    },
    "ru": {
      "answer": "Нет, зависит от результата/контракта: created 201, accepted 202, success без body 204. UPDATE не standard HTTP method.",
      "example": "Создающий PUT может вернуть 201; проверяйте state вместе со status."
    },
    "en": {
      "answer": "No, outcomes/contracts matter: created 201, accepted 202 and successful no-body responses 204 are possible. UPDATE is not a standard HTTP method.",
      "example": "A PUT creating a resource can return 201; check state as well as status."
    }
  },
  "manual-middle-152": {
    "uz": {
      "answer": "Contract endpoint/method/schema/auth/errorni tasvirlaydi; unit kichik ichki mantiqni tekshiradi. API testi tashqi interface/integratsiyani ko‘radi; OpenAPI va misollar contract review’ga yordam beradi.",
      "example": "Unit discount to‘g‘ri bo‘lsa ham API serialization yoki role xatosi bo‘lishi mumkin."
    },
    "ru": {
      "answer": "Contract описывает endpoints/schema/auth/errors, unit — малую логику, API tests — внешний interface/integration. OpenAPI/examples помогают review.",
      "example": "Верный unit discount не исключает ошибку API serialization/roles."
    },
    "en": {
      "answer": "Contracts describe endpoints/methods/schema/auth/errors; units check small internal logic and API checks cover external interfaces/integration. OpenAPI/examples support review.",
      "example": "A correct discount unit does not rule out API serialization/role defects."
    }
  },
  "automation-middle-77": {
    "uz": {
      "answer": "Tasdiqlangan test account va test-provider/sandbox yo‘lini kelishing. Expiry, replay, noto‘g‘ri kod va fallback tekshirilsin; production himoyasini o‘chirib muammo yashirmang.",
      "example": "Bir martalik kod qayta ishlatilganda rad etilishi kerak."
    },
    "ru": {
      "answer": "Согласуйте test accounts/provider/sandbox; проверяйте expiry, replay, неверный код/fallback. Не скрывайте проблему отключением production защиты.",
      "example": "Повторное использование одноразового кода отклоняется."
    },
    "en": {
      "answer": "Agree test accounts/providers/sandboxes; check expiry, replay, invalid codes and fallbacks. Do not conceal problems by disabling production protections.",
      "example": "Reusing a one-time code must be rejected."
    }
  },
  "automation-middle-78": {
    "uz": {
      "answer": "Hostname, muddat, trust chain, client va server vaqti/sozlamasini tekshiring. Validation’ni o‘chirish fix emas; test trust konfiguratsiyasi alohida kelishiladi.",
      "example": "To‘g‘ri cert o‘rnatilgach client ulanishi va noto‘g‘ri cert rad etilishi qayta tekshiriladi."
    },
    "ru": {
      "answer": "Проверяйте hostname, срок, trust chain, часы/settings. Отключение validation не fix; test trust согласуется отдельно.",
      "example": "После замены проверяем valid connection и отказ для неверного cert."
    },
    "en": {
      "answer": "Inspect hostnames, validity, trust chains, clocks and settings. Disabling validation is not a fix; agree test-trust configuration separately.",
      "example": "After replacement verify valid connections and rejection of invalid certificates."
    }
  },
  "automation-junior-86": {
    "uz": {
      "answer": "YAML config/data formati, Log4j logging kutubxonasi, secret store himoyalangan credential saqlash tizimi. Typing/indentation, log level/redaction va access boshqariladi.",
      "example": "CI tokenni secret store’dan oladi, log faqat correlation ID’ni ko‘rsatadi."
    },
    "ru": {
      "answer": "YAML — config/data, Log4j — logging, secret store — protected credentials. Проверяйте indentation/types, redaction и access.",
      "example": "CI берёт token из secret store, логирует correlation ID."
    },
    "en": {
      "answer": "YAML is a config/data format, Log4j a logging library and secret stores protect credentials. Manage indentation/types, redaction and access.",
      "example": "CI retrieves a token from a secret store and logs a correlation ID."
    }
  },
  "manual-middle-153": {
    "uz": {
      "answer": "Distinct ranking va ties qoidasini aniqlang. MAX, subquery yoki window DENSE_RANK ishlatilishi mumkin; NULL/no-second holati ham tekshirilsin.",
      "example": "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);"
    },
    "ru": {
      "answer": "Уточните distinct ranks/ties; используйте MAX/subquery/DENSE_RANK, проверяйте NULL/no-second.",
      "example": "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);"
    },
    "en": {
      "answer": "Define distinct ranks/ties; use MAX/subqueries/DENSE_RANK and check null/no-second cases.",
      "example": "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);"
    }
  },
  "manual-middle-154": {
    "uz": {
      "answer": "Sana intervali, timezone, user grouping va tie qoidasini kelishing. Bonus jadvalini key bilan JOIN qiling; SQL date syntax DBga bog‘liq.",
      "example": "WHERE created_at >= :start AND created_at < :end bilan filter; user_id bo‘yicha SUM va GROUP BY, keyin ORDER BY."
    },
    "ru": {
      "answer": "Согласуйте interval/timezone/grouping/ties; JOIN bonuses по key, date syntax зависит от DB.",
      "example": "Filter по :start/:end, затем SUM/GROUP BY user_id и ORDER BY."
    },
    "en": {
      "answer": "Agree date intervals/timezones/grouping/ties; join bonuses by key, with DB-specific date syntax.",
      "example": "Filter with :start/:end, then SUM/GROUP BY user_id and ORDER BY."
    }
  },
  "manual-middle-155": {
    "uz": {
      "answer": "Aggregate guruh qiymatini, scalar bitta qiymatni hisoblaydi; DISTINCT duplicate selected rows’ni chiqaradi; COALESCE birinchi non-null’ni beradi. NVL Oracle’ga xos alternativa.",
      "example": "COUNT(*) barcha rows, COUNT(email) non-null rows; COALESCE(phone,'unknown')."
    },
    "ru": {
      "answer": "Aggregate считает группу, scalar значение, DISTINCT убирает duplicate selected rows, COALESCE даёт первый non-null; NVL — Oracle-specific.",
      "example": "COUNT(*) все rows, COUNT(email) non-null; COALESCE(phone,'unknown')."
    },
    "en": {
      "answer": "Aggregates compute group values, scalars individual values, DISTINCT removes duplicate selected rows and COALESCE returns the first non-null; NVL is Oracle-specific.",
      "example": "COUNT(*) counts rows, COUNT(email) non-null rows; COALESCE(phone,'unknown')."
    }
  },
  "manual-middle-156": {
    "uz": {
      "answer": "PRIMARY/FOREIGN KEY, UNIQUE, NOT NULL, CHECK integrityni saqlaydi. 1:1, 1:N, N:M aloqalar bor. 1NF — atomar qiymatlar; 2NF — kalitning bir qismiga bog‘liqlik yo‘q; 3NF — non-key orqali tranzitiv bog‘liqlik yo‘q.",
      "example": "N:M students/courses aloqasi enrollment jadvali va ikki FK bilan beriladi."
    },
    "ru": {
      "answer": "PRIMARY/FOREIGN KEY, UNIQUE, NOT NULL, CHECK защищают integrity. Связи: 1:1, 1:N, N:M. 1NF — атомарные значения; 2NF — нет зависимости от части ключа; 3NF — нет транзитивной зависимости через non-key.",
      "example": "N:M students/courses задаётся enrollment и двумя FK."
    },
    "en": {
      "answer": "PRIMARY/FOREIGN KEY, UNIQUE, NOT NULL and CHECK protect integrity. Relationships include 1:1, 1:N and N:M. 1NF uses atomic values, 2NF removes partial-key dependencies and 3NF removes transitive dependencies through non-key attributes.",
      "example": "Model student/course many-to-many relationships with enrollment and two foreign keys."
    }
  },
  "manual-middle-157": {
    "uz": {
      "answer": "View query natijasini beradi, har view updatable emas; trigger hodisada qo‘shimcha amal bajaradi. GRANT/REVOKE hamda role/obyekt ruxsatini valid/invalid user bilan tekshiring.",
      "example": "Order insert trigger audit row yaratsa, rollback’da ikkala o‘zgarish ham contractga mos bo‘lsin."
    },
    "ru": {
      "answer": "View — query result, не каждый updatable; trigger выполняет action по event. Проверяйте GRANT/REVOKE и roles/object rights.",
      "example": "Если insert trigger пишет audit, rollback должен соответствовать contract."
    },
    "en": {
      "answer": "A view exposes a query result and may not be updatable; triggers execute event-driven actions. Check GRANT/REVOKE and role/object rights.",
      "example": "If an insert trigger writes an audit row, rollback behavior must match the contract."
    }
  },
  "manual-middle-158": {
    "uz": {
      "answer": "Correlated subquery tashqi qator qiymatiga bog‘liq; mustaqil nested query o‘z natijasini beradi. EXISTS/IN, ANY/ALL va taqqoslash operatorlari, NULL hamda execution plan’ni tekshiring.",
      "example": "O‘z bo‘limi o‘rtachasidan katta salary outer department_id’ga bog‘lanadi."
    },
    "ru": {
      "answer": "Correlated subquery зависит от внешней строки; независимый nested query возвращает собственный результат. Проверяйте EXISTS/IN, ANY/ALL, операторы сравнения, NULL и execution plan.",
      "example": "Salary выше среднего своего department коррелирует по department_id."
    },
    "en": {
      "answer": "Correlated subqueries depend on outer-row values; independent nested queries produce their own result. Check EXISTS/IN, ANY/ALL, comparison operators, nulls and execution plans.",
      "example": "A salary above its own department average correlates by department_id."
    }
  },
  "manual-middle-159": {
    "uz": {
      "answer": "DB implementatsiyasini biling: clustered/nonclustered talqini vendor’ga bog‘liq. SQL til, MySQL DBMS, PL/SQL Oracle procedural extension. Column metadata’ni catalogdan oling.",
      "example": "INFORMATION_SCHEMA.COLUMNS’da table/schema filter bilan ustunlar sanaladi."
    },
    "ru": {
      "answer": "Семантика clustered/nonclustered зависит от vendor. SQL — язык, MySQL — DBMS, PL/SQL — Oracle extension; metadata берите из catalog.",
      "example": "Считайте columns через INFORMATION_SCHEMA с table/schema filter."
    },
    "en": {
      "answer": "Clustered/nonclustered semantics vary by vendor. SQL is a language, MySQL a DBMS and PL/SQL an Oracle extension; retrieve metadata from catalogs.",
      "example": "Count columns through INFORMATION_SCHEMA with table/schema filters."
    }
  },
  "manual-middle-160": {
    "uz": {
      "answer": "Suite case’lar to‘plami; harness execution yordamchilari; bed kelishilgan muhit. Closure natija/risk, handover va lesson learned’ni yakunlaydi, faqat pass soni emas.",
      "example": "Smoke suite test account/stub muhitida ishlaydi, closure’da qolgan bug va owner yoziladi."
    },
    "ru": {
      "answer": "Suite — cases, harness — execution support, bed — среда. Closure фиксирует результаты/риски, handover и lessons, не только pass count.",
      "example": "Smoke suite использует account/stub, closure указывает remaining bugs/owners."
    },
    "en": {
      "answer": "A suite groups cases, a harness supports execution and a test bed is the agreed environment. Closure records results/risks, handover and lessons, not just passes.",
      "example": "A smoke suite uses test accounts/stubs; closure identifies remaining defects/owners."
    }
  },
  "manual-middle-161": {
    "uz": {
      "answer": "Install/update/uninstall va data saqlanishi, failure’dan tiklanish, vaqt davomida to‘g‘ri xizmat ko‘rsatish mezonlari farqlanadi; platforma va operational shartlarni aniqlang.",
      "example": "Upgrade’dan so‘ng login/data qoladi, crash’dan keyin yarim tranzaksiya yo‘q, uzoq ishlashda xato ulushi nazorat qilinadi."
    },
    "ru": {
      "answer": "Различайте install/update/data retention, recovery и корректную работу во времени; задайте platform/operational условия.",
      "example": "После upgrade сохраняются data, после crash нет partial transaction, при долгой работе измеряем errors."
    },
    "en": {
      "answer": "Distinguish installation/upgrades/data retention, failure recovery and sustained correct service; define platform/operational conditions.",
      "example": "Preserve data after upgrades, prevent partial transactions after crashes and measure errors over time."
    }
  },
  "manual-middle-162": {
    "uz": {
      "answer": "Gamma talqini universal emas; qaysi stage, owner va exit criteria nazarda tutilganini so‘rang. Formal testing odatda kelishilgan tartib, case va dalil bilan bajariladi.",
      "example": "“Gamma tugadi” o‘rniga qaysi build, suite va risk qarori tasdiqlanganini yozamiz."
    },
    "ru": {
      "answer": "Gamma не универсально: уточните stage/owner/exit criteria. Formal testing обычно следует согласованным процедурам/cases/evidence.",
      "example": "Вместо gamma done фиксируем build/suite/risk decision."
    },
    "en": {
      "answer": "Gamma has no universal meaning: clarify stage/owner/exit criteria. Formal testing usually follows agreed procedures/cases/evidence.",
      "example": "Record the approved build/suite/risk decision instead of only gamma done."
    }
  },
  "manual-middle-163": {
    "uz": {
      "answer": "Dastlabki nuqson keyingi qatlamlarga noto‘g‘ri data yoki xulq uzatib bir nechta simptom keltiradi. Simptomlarni umumiy sabab bilan tekshirish kerak.",
      "example": "Noto‘g‘ri tax qiymati total, invoice va report’ni birga buzishi mumkin."
    },
    "ru": {
      "answer": "Первичный дефект передаёт ошибку дальше и создаёт несколько симптомов; ищите общую причину.",
      "example": "Ошибка tax портит total, invoice и report."
    },
    "en": {
      "answer": "An initial defect propagates incorrect data/behavior and creates multiple symptoms; investigate a common cause.",
      "example": "An incorrect tax value can break totals, invoices and reports together."
    }
  },
  "manual-middle-164": {
    "uz": {
      "answer": "Epic katta maqsad, story foydalanuvchi qiymati, task ish qismi; product backlog umumiy, sprint backlog Sprint maqsadi uchun tanlangan ish/reja. Task board status oqimini ko‘rsatadi.",
      "example": "Checkout epic’ida “kupon ishlatish” story va API/UI test tasklari bo‘lishi mumkin."
    },
    "ru": {
      "answer": "Epic — крупная цель, story — user value, task — работа; product backlog общий, sprint backlog — работа/план Sprint. Board показывает flow.",
      "example": "В checkout epic — coupon story и API/UI tasks."
    },
    "en": {
      "answer": "Epics express broad goals, stories user value and tasks work; product backlogs are overall, sprint backlogs selected work/plans. Boards show flow.",
      "example": "A checkout epic may contain a coupon story and API/UI test tasks."
    }
  },
  "manual-middle-165": {
    "uz": {
      "answer": "Velocity jamoaning tugallangan story point’lari; jamoalarni solishtirish mezoni emas. Burn-up completed/scope, burn-down remaining ishni ko‘rsatadi; spillover sababi review qilinadi.",
      "example": "Scope oshsa burn-up’da ko‘rinadi; tugallanmagan story’ni yarim done deb velocity’ga qo‘shmang."
    },
    "ru": {
      "answer": "Velocity — завершённые points команды, не рейтинг команд. Burn-up показывает completed/scope, burn-down remaining; spillover анализируют.",
      "example": "Рост scope виден в burn-up; unfinished story не считаем half-done velocity."
    },
    "en": {
      "answer": "Velocity measures a team's completed points, not a cross-team ranking. Burn-up shows completed/scope, burn-down remaining work; review spillover causes.",
      "example": "Scope growth appears in burn-up; do not count an unfinished story as half-done velocity."
    }
  },
  "manual-middle-166": {
    "uz": {
      "answer": "Spike noaniqlikni vaqt chegarasida o‘rganadi; tracer bullet kichik end-to-end yo‘lni tekshiradi. Sprint zero Scrum’ning majburiy rasmiy eventi emas, setup ishlari jamoa kelishuvidir.",
      "example": "Payment sandbox feasibility spike, UI→API→DB kichik oqimi tracer bullet bo‘ladi."
    },
    "ru": {
      "answer": "Spike timeboxes uncertainty, tracer bullet проверяет thin E2E. Sprint zero не обязательный официальный Scrum event, setup — соглашение команды.",
      "example": "Spike проверяет payment sandbox, thin UI→API→DB — tracer bullet."
    },
    "en": {
      "answer": "Spikes timebox uncertainty; tracer bullets test thin end-to-end paths. Sprint zero is not a required official Scrum event; setup is a team agreement.",
      "example": "A spike explores a payment sandbox while a thin UI→API→DB flow is a tracer bullet."
    }
  },
  "manual-middle-167": {
    "uz": {
      "answer": "TDD red→green→refactor orqali kichik xulqni ishlab chiqadi; pairing tez review/knowledge sharing beradi; refactor tashqi xulqni saqlab tuzilishni yaxshilaydi.",
      "example": "Discount test failed bo‘ladi, minimal logic o‘tkazadi, keyin duplicate code olib tashlanadi."
    },
    "ru": {
      "answer": "TDD использует red→green→refactor, pairing даёт feedback/knowledge sharing, refactor улучшает структуру без изменения внешнего поведения.",
      "example": "Discount test сначала red, затем green, потом убираем duplication."
    },
    "en": {
      "answer": "TDD uses red→green→refactor; pairing supports feedback/knowledge sharing; refactoring improves structure while preserving external behavior.",
      "example": "A discount check starts red, passes with minimal logic, then duplication is removed."
    }
  },
  "manual-middle-168": {
    "uz": {
      "answer": "Incremental bo‘lak qiymat qo‘shadi, iterative mavjud yechimni takomillashtiradi; prototype feedback, spiral riskga asoslangan sikllarga urg‘u beradi. Test rejasini har o‘zgarishga moslang.",
      "example": "Checkout avval card, keyin wallet qo‘shishi incremental; mavjud card oqimini yaxshilash iterative."
    },
    "ru": {
      "answer": "Incremental добавляет части, iterative улучшает решение; prototype собирает feedback, spiral акцентирует риски. Адаптируйте проверки.",
      "example": "Card затем wallet — incremental; улучшение card flow — iterative."
    },
    "en": {
      "answer": "Incremental adds value in pieces, iterative improves a solution, prototypes gather feedback and spirals emphasize risk cycles. Adapt checks to changes.",
      "example": "Adding card then wallet checkout is incremental; improving an existing card flow is iterative."
    }
  },
  "manual-middle-169": {
    "uz": {
      "answer": "Refinement kelajak ishni aniqlashtiradi; Daily Sprint Goal’ga progressni moslaydi; Review product feedback, Retro ish usulini yaxshilaydi. Scrumban aralash yondashuv bo‘lishi mumkin.",
      "example": "Daily rahbarga individual status hisobotigina emas; blocker jamoa rejasiga ta’sir qiladi."
    },
    "ru": {
      "answer": "Refinement уточняет work, Daily адаптирует progress к Sprint Goal, Review — product feedback, Retro — process improvement. Scrumban может смешивать подходы.",
      "example": "Daily не только индивидуальный status manager; blocker меняет общий план."
    },
    "en": {
      "answer": "Refinement clarifies work, Daily adapts progress toward the Sprint Goal, Review gathers product feedback and Retro improves working methods. Scrumban may mix approaches.",
      "example": "Daily is not merely individual reporting to a manager; blockers affect the team's plan."
    }
  },
  "automation-senior-25": {
    "uz": {
      "answer": "API source/interface shartnomasi; ABI binary level’da calling convention, data layout va linkage shartlari. Native kutubxona/version almashishi binary compatibility’ga ta’sir qiladi.",
      "example": "Bir xil method nomi bo‘lsa ham native binary noto‘g‘ri arxitekturada yuklanmasligi mumkin."
    },
    "ru": {
      "answer": "API — source/interface contract, ABI — binary calling conventions/data layout/linkage. Native version меняет compatibility.",
      "example": "Одинаковое имя метода не гарантирует загрузку native binary."
    },
    "en": {
      "answer": "APIs are source/interface contracts; ABIs define binary calling conventions, data layouts and linkage. Native versions affect compatibility.",
      "example": "An unchanged method name does not guarantee a native binary will load on another architecture."
    }
  },
  "automation-junior-87": {
    "uz": {
      "answer": "Instance method’ning odatiy birinchi parametri, joriy obyektni ifodalaydi; keyword emas. classmethod’da cls, staticmethod’da avtomatik instance parametri bo‘lmaydi.",
      "example": "Page object self.locator orqali o‘z holatiga murojaat qiladi."
    },
    "ru": {
      "answer": "Обычный первый параметр instance method, не keyword; classmethod использует cls, staticmethod без автоматического instance.",
      "example": "Page object обращается к своему state через self.locator."
    },
    "en": {
      "answer": "The conventional first parameter of an instance method refers to the object; it is not a keyword. Class methods use cls, static methods have no automatic instance.",
      "example": "A page object refers to its own state through self.locator."
    }
  },
  "manual-senior-76": {
    "uz": {
      "answer": "Generated testni requirement, locator, oracle va data bilan review qiling; noaniq natijani inson tekshiradi. Coverage soni yoki “self-healing” va’dasi sifat isboti emas.",
      "example": "AI noto‘g‘ri expected total yaratgan bo‘lsa, ko‘p test o‘tishi xatoni yashirishi mumkin."
    },
    "ru": {
      "answer": "Review generated tests по requirements/locators/oracles/data; человек проверяет uncertainty. Count/self-healing обещания не доказательство.",
      "example": "Неверный AI oracle может скрыться за множеством passed tests."
    },
    "en": {
      "answer": "Review generated checks against requirements, locators, oracles and data; humans examine uncertainty. Counts or self-healing promises are not quality evidence.",
      "example": "An incorrect AI-generated expected total can hide behind many passing checks."
    }
  },
  "manual-junior-151": {
    "uz": {
      "answer": "Quality risk, test infra, QA hamkorligi, onboarding va muvaffaqiyat mezonini so‘rang. Savollar rolning sizga mosligini ham aniqlasin.",
      "example": "“Birinchi 90 kunda qanday natija kutiladi?” yoki “Eng katta regression muammo qaysi?”"
    },
    "ru": {
      "answer": "Спросите о quality risks, infra, QA collaboration, onboarding и success criteria; проверьте fit роли.",
      "example": "“Какой результат ждут за 90 дней?” или “Главный regression risk?”"
    },
    "en": {
      "answer": "Ask about quality risks, infrastructure, QA collaboration, onboarding and success criteria; also assess role fit.",
      "example": "“What outcome is expected in the first 90 days?” or “What is the biggest regression risk?”"
    }
  },
  "manual-junior-152": {
    "uz": {
      "answer": "Real kutish, vaqt va imkoniyatni aniq ayting; bilmagan yoki shaxsiy ma’lumot uchun chegarangizni bildiring. Boshqa offer yoki ko‘chish imkoniyatini uydirmang.",
      "example": "“Boshlashim mumkin bo‘lgan sana ...; masofaviy/ofis sharti va rol scope’ni aniqlashtiraylik.”"
    },
    "ru": {
      "answer": "Ясно сообщите реальные ожидания/сроки, обозначьте privacy boundaries; не выдумывайте offers/relocation.",
      "example": "“Могу начать ...; уточним remote/office и scope.”"
    },
    "en": {
      "answer": "State genuine expectations/timing and privacy boundaries; do not invent offers or relocation availability.",
      "example": "“My available start date is ...; let's clarify remote/office arrangements and scope.”"
    }
  },
  "automation-middle-79": {
    "uz": {
      "answer": "Thread Group virtual user/schedule, sampler so‘rov, config data, controller oqim, timer kechikish, processor data, assertion oracle, listener natijani boshqaradi.",
      "example": "HTTP sampler’ning javobidan extractor token olib, keyingi so‘rovga beradi."
    },
    "ru": {
      "answer": "Thread Group — users/schedule, sampler — запрос, config — data, controller — flow, timer — delay, processor — data, assertion — check, listener — results.",
      "example": "Extractor берёт token из HTTP response для следующего request."
    },
    "en": {
      "answer": "Thread groups define users/schedules, samplers requests, configs data, controllers flow, timers delays, processors data, assertions checks and listeners results.",
      "example": "An extractor takes a token from an HTTP response for the next request."
    }
  },
  "automation-middle-80": {
    "uz": {
      "answer": "Odatda protocol darajasida request qiladi, DOM rendering/JavaScript UX’ni browser kabi bajarmaydi. Backend load va frontend o‘lchovlari alohida.",
      "example": "API tez bo‘lsa ham sahifadagi katta JS task UI’ni sekinlashtirishi mumkin."
    },
    "ru": {
      "answer": "Обычно protocol requests без browser DOM/JS rendering; backend load и frontend measurements различаются.",
      "example": "Быстрый API не исключает медленный JS UI."
    },
    "en": {
      "answer": "It normally sends protocol-level requests without browser DOM/JavaScript rendering; backend load and frontend measurements differ.",
      "example": "A fast API does not exclude a slow JavaScript-heavy UI."
    }
  },
  "automation-middle-81": {
    "uz": {
      "answer": "GUI dizayn/debug uchun; haqiqiy load uchun CLI va minimal listener. Generator resurslarini kuzating, report generation’ni load’dan ajrating.",
      "example": "View Results Tree kichik debug uchun; Summary/Aggregate Report natija ko‘rish uchun. Yuklamada jmeter -n -t plan.jmx -l results.jtl kabi CLI ishlatiladi."
    },
    "ru": {
      "answer": "GUI для design/debug, CLI для load с минимумом listeners. Контролируйте generator и отделяйте reporting.",
      "example": "View Results Tree — малый debug, Summary/Aggregate Report — анализ результатов. Для нагрузки: jmeter -n -t plan.jmx -l results.jtl."
    },
    "en": {
      "answer": "Use GUI for design/debug and CLI for load with minimal listeners. Monitor the generator and separate reporting from load generation.",
      "example": "View Results Tree supports small debugging runs; Summary/Aggregate Report summarize results. For load: jmeter -n -t plan.jmx -l results.jtl."
    }
  },
  "automation-middle-82": {
    "uz": {
      "answer": "Universal maksimum yo‘q: CPU/RAM, JVM, plan, response hajmi/vaqti va target loadga bog‘liq. Pilotda generator bottleneck emasligini o‘lchang.",
      "example": "Ko‘p threads RPS oshirmasa, server emas generator cheklangan bo‘lishi mumkin."
    },
    "ru": {
      "answer": "Нет универсального max; зависит от hardware/JVM/plan/responses/target. Измеряйте bottleneck в pilot.",
      "example": "Если threads не повышают RPS, ограничен может быть generator."
    },
    "en": {
      "answer": "There is no universal maximum; hardware/JVM/plan/responses/targets matter. Measure generator bottlenecks in a pilot.",
      "example": "If more threads do not increase RPS, the generator may be the bottleneck."
    }
  },
  "automation-middle-83": {
    "uz": {
      "answer": "Generatorlarda mos versiya/plugin, local data fayl, tarmoq va clock kelishiladi. Har generator qo‘shadigan loadni jami hisoblang; controller/result yig‘ish ham cheklov bo‘lishi mumkin.",
      "example": "3 generatorning har biri 100 user bo‘lsa jami 300, bitta global 100 emas."
    },
    "ru": {
      "answer": "Согласуйте versions/plugins/files/network/clocks, суммируйте load generators; controller/results тоже могут ограничивать.",
      "example": "3 generators по 100 users = 300, не глобальные 100."
    },
    "en": {
      "answer": "Align versions/plugins/files/network/clocks and sum generator loads; controllers/result collection may also constrain execution.",
      "example": "Three generators with 100 users each create 300 users, not a global 100."
    }
  },
  "automation-middle-84": {
    "uz": {
      "answer": "Parameterization input variantlarini CSV/variables orqali beradi; correlation javobdagi dinamik qiymatni extractor bilan keyingi requestga uzatadi. JSON uchun JSON extractor qulayroq.",
      "example": "${user} CSV’dan, session token esa oldingi javobdan olinadi."
    },
    "ru": {
      "answer": "Parameterization даёт CSV/variable inputs; correlation извлекает динамический response для следующего request. Для JSON используйте подходящий extractor.",
      "example": "${user} из CSV, session token из предыдущего response."
    },
    "en": {
      "answer": "Parameterization supplies CSV/variable inputs; correlation extracts dynamic response values for later requests. Use suitable JSON extractors for JSON.",
      "example": "${user} comes from CSV and a session token from the previous response."
    }
  },
  "automation-middle-85": {
    "uz": {
      "answer": "Pre sampler’dan oldin, Post javobdan keyin ishlaydi. ${name} variable, ${__function(...)} function shakli; scope va thread isolation’ni tekshiring.",
      "example": "Bir user tokeni boshqa thread’ga umumiy property orqali tasodifan ulashilmasin."
    },
    "ru": {
      "answer": "Pre выполняется до sampler, Post после response; ${name} — variable, ${__function(...)} — function. Проверяйте scope/isolation.",
      "example": "Token user не должен случайно разделяться через global property."
    },
    "en": {
      "answer": "Pre-processors run before samplers and post-processors after responses; ${name} denotes a variable and ${__function(...)} a function. Check scope/isolation.",
      "example": "Do not accidentally share a user's token through a global property."
    }
  },
  "automation-middle-86": {
    "uz": {
      "answer": "Timer delayni, controller ketma-ketlik/loop/condition’ni boshqaradi. Random timer taqsimoti va constant offset workload modeliga mos bo‘lsin; bu o‘zi real arrival modelini kafolatlamaydi.",
      "example": "Gaussian normal-taqsimotli random qism, Poisson diskret random qism beradi; target throughput alohida o‘lchanadi."
    },
    "ru": {
      "answer": "Timer задаёт delay, controller flow/loop/conditions. Distribution/offset подбирайте по workload; random timer не гарантирует реальный arrivals model.",
      "example": "Gaussian даёт normal random part, Poisson — discrete; throughput измеряют отдельно."
    },
    "en": {
      "answer": "Timers control delays and controllers flow/loops/conditions. Match distributions/offsets to workload; random timers alone do not guarantee real arrival patterns.",
      "example": "Gaussian uses a normally distributed random component, Poisson a discrete one; measure throughput separately."
    }
  },
  "automation-middle-87": {
    "uz": {
      "answer": "Recorder proxy orqali trafikni qayd etadi, device UI amalini emas. HTTPS uchun ruxsatli test trust sozlamasi kerak; root CA trust anchor. Keraksiz requestlarni filterlang.",
      "example": "Mobile requestlar yozilgach unique tokenlar correlate qilinadi; recording tayyor oracle emas."
    },
    "ru": {
      "answer": "Recorder proxy пишет traffic, не UI actions. HTTPS требует разрешённой test trust настройки; root CA — trust anchor. Фильтруйте лишнее.",
      "example": "После recording correlate tokens; запись не готовый oracle."
    },
    "en": {
      "answer": "A recorder proxy captures traffic, not device UI actions. HTTPS requires authorized test-trust settings; a root CA is a trust anchor. Filter irrelevant requests.",
      "example": "Correlate tokens after recording mobile requests; a recording is not a ready-made oracle."
    }
  },
  "automation-middle-88": {
    "uz": {
      "answer": "Cookie Manager user sessiyasini boshqaradi; JDBC driver/connection/query/cleanup talab qiladi. Statusdan tashqari body/data/timing assertion’ni contractga mos tanlang.",
      "example": "HTTP 200 login error body’ni yashirmasin; JDBC data ko‘paysa cleanup tekshirilsin."
    },
    "ru": {
      "answer": "Cookie Manager управляет sessions, JDBC требует driver/connection/query/cleanup. Assertions проверяют contract beyond status.",
      "example": "HTTP 200 не скрывает login error, JDBC data очищается."
    },
    "en": {
      "answer": "Cookie managers handle sessions, JDBC needs drivers/connections/queries/cleanup and assertions check the contract beyond status codes.",
      "example": "HTTP 200 must not conceal a login-error body, and JDBC test data needs cleanup."
    }
  },
  "automation-middle-89": {
    "uz": {
      "answer": "Zamonaviy scripting uchun odatda cached JSR223/Groovy; eski BeanShell kodi review qilinadi. Tidy parsing malformed HTML’ni normalize qilishi mumkin, asl defectni yashirmasin. Plugin version/trustni tekshiring.",
      "example": "Barcha samplerlarda og‘ir script CPU’ni yeb, server latency deb noto‘g‘ri talqin qilinmasin."
    },
    "ru": {
      "answer": "Обычно cached JSR223/Groovy; old BeanShell review. Tidy может нормализовать malformed HTML, не скрывайте defects. Проверяйте plugins/version/trust.",
      "example": "Тяжёлый script generator не должен выглядеть как server latency."
    },
    "en": {
      "answer": "Usually prefer cached JSR223/Groovy; review old BeanShell. Tidy may normalize malformed HTML, so do not hide original defects. Review plugin versions/trust.",
      "example": "Heavy generator scripts must not be misread as server latency."
    }
  },
  "automation-middle-90": {
    "uz": {
      "answer": "Protocol, generator scale, license, skills va observability’ga qarang. Browser scriptsni ko‘p load user bilan tenglashtirmang; oz browser UX sample va protocol loadni ajratish mumkin.",
      "example": "HTTP(S), JDBC yoki JMS imkoniyatlarini loyiha ehtiyojiga solishtiring. API yuklamasini JMeter’da, ayrim browser o‘lchovlarini alohida bajaring."
    },
    "ru": {
      "answer": "Сравните protocols/scale/license/skills/observability. Browser scripts не равны protocol load users; отделяйте UX samples.",
      "example": "Сопоставьте HTTP(S), JDBC или JMS с потребностями. API load выполняйте в JMeter, отдельные browser measurements — отдельно."
    },
    "en": {
      "answer": "Compare protocols, scale, licensing, skills and observability. Browser scripts are not equivalent to protocol load users; separate UX samples.",
      "example": "Match HTTP(S), JDBC or JMS support to project needs. Run API load with JMeter and browser measurements separately."
    }
  },
  "manual-junior-153": {
    "uz": {
      "answer": "5 L’ni to‘ldiring, 3 L’ga quying — 2 qoladi. 3’ni bo‘shatib 2’ni unga quying. 5’ni qayta to‘ldirib 3’dagi qolgan 1 L joyni to‘ldiring — 5’da 4 qoladi.",
      "example": "Holat juftliklari (5,0)→(2,3)→(2,0)→(0,2)→(5,2)→(4,3)."
    },
    "ru": {
      "answer": "Наполните 5, перелейте в 3: остаётся 2. Опустошите 3, перенесите 2. Наполните 5 и долейте 1 в 3: остаётся 4.",
      "example": "Состояния (5,0)→(2,3)→(2,0)→(0,2)→(5,2)→(4,3)."
    },
    "en": {
      "answer": "Fill five, pour into three, leaving two. Empty three and transfer two into it. Fill five again and top up three with one, leaving four.",
      "example": "States: (5,0)→(2,3)→(2,0)→(0,2)→(5,2)→(4,3)."
    }
  },
  "manual-junior-154": {
    "uz": {
      "answer": "Matematik modelda har turdan 2 bir xil, teng ikkiga bo‘linadigan token bor. Har tokenning yarmini olish har turdan jami 1 token beradi; real obyektga bu taxmin avtomatik qo‘llanmaydi.",
      "example": "A/2+A/2=A; B/2+B/2=B."
    },
    "ru": {
      "answer": "В модели по 2 равномерно делимых tokens двух видов; половина каждого даёт по 1 каждого вида. Для реального объекта assumption не автоматичен.",
      "example": "A/2+A/2=A; B/2+B/2=B."
    },
    "en": {
      "answer": "In a mathematical model with two evenly divisible tokens of each type, half of every token totals one of each. Real objects do not automatically satisfy the assumption.",
      "example": "A/2+A/2=A; B/2+B/2=B."
    }
  },
  "manual-junior-155": {
    "uz": {
      "answer": "Lampalar sezilarli qizishi model sharti. A’ni yoqib keyin o‘chiring, B’ni yoqing: yonib turgan B, o‘chiq-iliq A, o‘chiq-sovuq C. Shart LED uchun kafolat emas.",
      "example": "Ikkinchi signal — harorat — modelning muhim cheklovi ekanini ayting."
    },
    "ru": {
      "answer": "Assumption: лампы заметно греются. Включите/выключите A, включите B: светит B, тёплая A, холодная C. Для LED не гарантировано.",
      "example": "Укажите, что температура — необходимый второй сигнал."
    },
    "en": {
      "answer": "Assume bulbs measurably retain heat. Turn A on then off and B on: lit is B, unlit warm A, unlit cool C. This is not guaranteed for LEDs.",
      "example": "State that temperature is the essential second signal in the model."
    }
  },
  "manual-junior-156": {
    "uz": {
      "answer": "Har biri 20000 masofa, bir vaqtda 4 tasi ishlasa jami 5×20000/4=25000. Ideal rotatsiya va teng eskirish taxmini kerak.",
      "example": "Mile sharti bo‘lsa natija mile; uni km deb almashtirmang."
    },
    "ru": {
      "answer": "По 20000 на ресурс, 4 active: 5×20000/4=25000. Нужны идеальная ротация и равномерный износ.",
      "example": "Если условие в miles, ответ в miles, не km."
    },
    "en": {
      "answer": "Each lasts 20000 distance units and four are active: 5×20000/4=25000, assuming ideal rotation and even wear.",
      "example": "If the premise uses miles, the result is miles, not kilometres."
    }
  },
  "manual-junior-157": {
    "uz": {
      "answer": "Oddiy booklet modelida qo‘shni juft 45/46; qarshi juftlar 65−45=20 va 65−46=19. Imposition sxemasini oldin tasdiqlang.",
      "example": "19,20,45,46 — sahifa summalari 65."
    },
    "ru": {
      "answer": "Для обычного booklet: 45/46, противоположные 65−45=20, 65−46=19. Уточните imposition.",
      "example": "19,20,45,46 — парные суммы 65."
    },
    "en": {
      "answer": "In a standard booklet model: 45/46, opposite pages 65−45=20 and 65−46=19. Confirm the imposition layout.",
      "example": "19,20,45,46 with paired sums of 65."
    }
  },
  "manual-junior-158": {
    "uz": {
      "answer": "Bir xil qatlamli simmetrik modelda ikki vertikal kesish 4 sektor, uchinchi gorizontal kesish ularni 8 ga bo‘ladi. Tenglik uchun balandlik va o‘rtani aniqlang.",
      "example": "Doira kesimini choraklash va yarim balandlikdan kesish."
    },
    "ru": {
      "answer": "В симметричной однородной модели 2 vertical cuts дают 4 sectors, horizontal делит их в 8. Уточните середину/высоту.",
      "example": "Четверти сечения и cut на половине высоты."
    },
    "en": {
      "answer": "In a symmetric uniform model, two vertical cuts make four sectors and a horizontal cut halves them into eight. Define midpoint/height.",
      "example": "Quarter the circular cross-section and cut at half height."
    }
  },
  "manual-junior-159": {
    "uz": {
      "answer": "A=1...Z=26 modelida juftlar summasi 27: M=13, N=14. Bir nechta pattern mumkinligini ayting; berilgan qoidada javob N.",
      "example": "12+15=27; 18+9=27; 5+22=27."
    },
    "ru": {
      "answer": "При A=1...Z=26 сумма пары 27, M=13 и N=14. Другие patterns возможны; по этому правилу N.",
      "example": "12+15=27; 18+9=27; 5+22=27."
    },
    "en": {
      "answer": "With A=1...Z=26, paired sums are 27; M=13 and N=14. Other patterns may exist; under this rule answer N.",
      "example": "12+15=27; 18+9=27; 5+22=27."
    }
  },
  "manual-junior-160": {
    "uz": {
      "answer": "Mahsulot qiymati 100 deb olinsa, mijoz olgan qiymat 100+400=500. Qo‘shni bilan change/repayment bir-birini qoplaydi; real cost boshqa bo‘lsa uni ishlating.",
      "example": "Cash loss 400 + inventory cost 100; 500’ni ikkinchi marta qo‘shmang."
    },
    "ru": {
      "answer": "Если cost товара 100, потеря 100+400=500; обмен/возврат соседу взаимно гасятся. При другом cost используйте его.",
      "example": "Cash 400 + inventory 100; не прибавляйте 500 дважды."
    },
    "en": {
      "answer": "If the item's cost is 100, loss is 100+400=500; the neighbor's exchange/repayment cancels. Use actual cost if different.",
      "example": "Cash 400 plus inventory 100; do not add the 500 twice."
    }
  },
  "manual-junior-161": {
    "uz": {
      "answer": "Qavs bilan ikki talqinni ko‘rsating: 2/2+2=3; (2+2)/2=2. Matn noaniq bo‘lsa yagona “texnik to‘g‘ri” javobni taxmin qilmang.",
      "example": "Talab egasidan qaysi ifoda nazarda tutilganini so‘rang."
    },
    "ru": {
      "answer": "Покажите 2/2+2=3 и (2+2)/2=2; неоднозначный текст не имеет автоматически единственного ответа.",
      "example": "Уточните intended expression у owner."
    },
    "en": {
      "answer": "Show 2/2+2=3 and (2+2)/2=2; ambiguous wording does not automatically establish one answer.",
      "example": "Ask the requirement owner which expression is intended."
    }
  },
  "manual-junior-162": {
    "uz": {
      "answer": "Har odam n−1 bilan uchrashadi, har juft ikki marta sanaladi: n(n−1)/2. Self-pair va takroriy uchrashuvni chiqaramiz.",
      "example": "5 odam → 5×4/2=10."
    },
    "ru": {
      "answer": "Каждый имеет n−1 pairs, каждую считаем дважды: n(n−1)/2. Исключаем self/repeats.",
      "example": "5 человек → 5×4/2=10."
    },
    "en": {
      "answer": "Each person has n−1 partners and each pair is counted twice: n(n−1)/2, excluding self-pairs/repeats.",
      "example": "Five people produce 5×4/2=10 pairs."
    }
  },
  "manual-junior-163": {
    "uz": {
      "answer": "3/3/3 ajrating; ikki guruhni solishtiring, og‘ir yoki qolgan guruhni tanlang. Undagi 1/1 solishtirish og‘irni yoki uchinchi sharni aniqlaydi.",
      "example": "Har tortish 3 outcome, 2 tortish 3²=9 variantni ajratadi."
    },
    "ru": {
      "answer": "Разделите 3/3/3, сравните две группы; heavier или оставшаяся. Затем сравните 1/1 из выбранной тройки.",
      "example": "3 outcomes каждого взвешивания, 3²=9 вариантов."
    },
    "en": {
      "answer": "Split 3/3/3 and compare two groups; select the heavier or unweighed group. Compare one versus one from that group.",
      "example": "Each weighing has three outcomes; two distinguish 3²=9 possibilities."
    }
  },
  "manual-middle-170": {
    "uz": {
      "answer": "ISO 9001 sifat menejmenti tizimi talablariga yo‘nalish beradi. QA jarayonni yaxshilaydi, QC mahsulotni tekshiradi; qo‘llanadigan standart va versiya loyiha doirasida aniqlanadi.",
      "example": "Jarayon auditida review dalillari ko‘riladi; mahsulot tekshiruvida esa to‘lov natijasi sinovdan o‘tadi."
    },
    "ru": {
      "answer": "ISO 9001 задаёт требования к системе менеджмента качества. QA улучшает процессы, QC проверяет продукт; применимый стандарт и редакцию уточняют для проекта.",
      "example": "Аудит процесса рассматривает evidence review, а проверка продукта — результат оплаты."
    },
    "en": {
      "answer": "ISO 9001 concerns quality management system requirements. QA improves processes and QC checks products; establish applicable standards and editions for the project.",
      "example": "A process audit examines review evidence while a product check verifies a payment result."
    }
  }
};
