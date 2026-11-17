// Генератор SVG-иллюстрации книжного форзаца
function createEndpaperSvg(author, titleLine1, titleLine2, subtitle, year, tom, coverColor, ribbonColor) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='500' height='300' viewBox='0 0 500 300'>
    <rect width='500' height='300' rx='6' fill='${coverColor}'/>
    <rect x='12' y='10' width='236' height='280' fill='#f3ead8'/>
    <rect x='252' y='10' width='236' height='280' fill='#faf6ed'/>
    <rect x='246' y='10' width='8' height='280' fill='#cbbba0'/>
    <line x1='250' y1='10' x2='250' y2='290' stroke='#5c3a21' stroke-width='1.5'/>
    <rect x='24' y='22' width='212' height='256' fill='#e6dac3' stroke='#8c6d53' stroke-width='1.5' stroke-dasharray='4,4'/>
    <rect x='55' y='92' width='150' height='116' fill='#faf6ed' stroke='${coverColor}' stroke-width='1.5'/>
    <text x='130' y='120' font-family='Georgia, serif' font-size='10' fill='#5c3a21' text-anchor='middle' letter-spacing='2'>EX LIBRIS</text>
    <line x1='75' y1='130' x2='185' y2='130' stroke='#8c6d53' stroke-width='1'/>
    <text x='130' y='154' font-family='Georgia, serif' font-size='14' font-weight='bold' fill='${coverColor}' text-anchor='middle'>LITBRIEF</text>
    <text x='130' y='174' font-family='Arial, sans-serif' font-size='9' fill='#6b5b4d' text-anchor='middle'>Библиотека классики</text>
    <text x='130' y='194' font-family='Georgia, serif' font-size='10' fill='#8c6d53' text-anchor='middle'>${tom} • ${year}</text>
    <rect x='266' y='22' width='208' height='256' fill='none' stroke='#8c6d53' stroke-width='1.5'/>
    <rect x='271' y='27' width='198' height='246' fill='none' stroke='#8c6d53' stroke-width='0.6'/>
    <text x='370' y='72' font-family='Georgia, serif' font-size='12' fill='#5c3a21' text-anchor='middle'>${author}</text>
    <line x1='310' y1='85' x2='430' y2='85' stroke='#8c6d53' stroke-width='1'/>
    <text x='370' y='126' font-family='Georgia, serif' font-size='17' font-weight='bold' fill='#2b1810' text-anchor='middle'>${titleLine1}</text>
    <text x='370' y='148' font-family='Georgia, serif' font-size='17' font-weight='bold' fill='#2b1810' text-anchor='middle'>${titleLine2}</text>
    <text x='370' y='182' font-family='Georgia, serif' font-size='11' font-style='italic' fill='#6b5b4d' text-anchor='middle'>${subtitle}</text>
    <circle cx='370' cy='218' r='15' fill='none' stroke='#8c6d53' stroke-width='1'/>
    <text x='370' y='222' font-family='Georgia, serif' font-size='10' fill='#5c3a21' text-anchor='middle'>${year}</text>
    <text x='370' y='256' font-family='Georgia, serif' font-size='9' fill='#8c6d53' text-anchor='middle'>АКАДЕМИЧЕСКОЕ ИЗДАНИЕ</text>
    <path d='M248,10 L255,10 L255,215 L251.5,207 L248,215 Z' fill='${ribbonColor}'/>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const BOOKS_DATA = {
  dostoevsky: {
    key: 'dostoevsky',
    title: 'Преступление и наказание',
    author: 'Ф. М. Достоевский',
    shortTag: '12 мин',
    badgeClass: 'bg-success',
    badge: 'Время чтения: 12 минут',
    epoch: 'Золотой век (1866 г.)',
    pagesCount: 580,
    cardText: 'Подробный пересказ 6 частей и эпилога. Анализ теории Раскольникова, образов Сони Мармеладовой, Порфирия Петровича и Свидригайлова.',
    lead: 'Социально-психологический и философский роман Ф. М. Достоевского о бывшем студенте Родионе Раскольникове, решившем проверить теорию о «праве сильной личности».',
    pages: 'Объём оригинала: 580 стр.',
    moral: '<strong>Главная мысль:</strong> Невозможно построить счастье на пролитой крови; переступая нравственный закон, человек прежде всего разрушает собственную душу.',
    image: createEndpaperSvg('Ф. М. ДОСТОЕВСКИЙ', 'Преступление', 'и наказание', 'Роман в шести частях', '1866', 'Том I', '#3b1728', '#991b1b'),
    table: [
      ['Автор и год публикации', 'Ф. М. Достоевский, 1866 год (журнал «Русский вестник»)'],
      ['Родион Раскольников', 'Главный герой, бывший студент. Автор теории о делении людей на «тварей дрожащих» и «право имеющих»'],
      ['Соня Мармеладова', 'Олицетворение христианского милосердия, жертвенной любви и духовного возрождения'],
      ['Свидригайлов и Лужин', 'Двойники Раскольникова, показывающие тупик эгоизма и вседозволенности'],
      ['Порфирий Петрович', 'Следователь, ведущий тонкий психологический поединок с главным героем']
    ],
    chapters: [
      ['Часть 1–2. Замысел, теория и совершение убийства', 'Живущий в крайней бедности студент Раскольников убивает старуху-процентщицу Алёну Ивановну и её сестру Лизавету, чтобы проверить, способен ли он переступить черту как Наполеон.'],
      ['Часть 3–4. Поединок со следователем и встреча с Соней', 'Следователь Порфирий Петрович разгадывает психологию преступника. Соня Мармеладова читает Раскольникову евангельскую главу о воскрешении Лазаря.'],
      ['Часть 5–6 и Эпилог. Признание и духовное воскресение', 'После исповеди Соне и самоубийства Свидригайлова Раскольников делает явку с повинной. На каторге в Сибири любовь Сони возвращает его к жизни.']
    ],
    quotes: [
      ['«Тварь ли я дрожащая или право имею...»', '— Родион Раскольников'],
      ['«Страдание и боль всегда обязательны для широкого сознания и глубокого сердца.»', '— Ф. М. Достоевский']
    ]
  },
  bulgakov: {
    key: 'bulgakov',
    title: 'Мастер и Маргарита',
    author: 'М. А. Булгаков',
    shortTag: '15 мин',
    badgeClass: 'bg-warning text-dark',
    badge: 'Время чтения: 15 минут',
    epoch: 'XX век (1940 г.)',
    pagesCount: 480,
    cardText: 'Похождения Воланда со свитой в Москве 1930-х годов, ершалаимские главы о Понтии Пилате и Иешуа, бал у сатаны и спасение рукописи Мастера.',
    lead: 'Философско-мистический роман М. А. Булгакова, объединяющий визит Воланда в Москву, историю любви Мастера и суд Понтия Пилата над Иешуа.',
    pages: 'Объём оригинала: 480 стр.',
    moral: '<strong>Главная мысль:</strong> «Рукописи не горят» — подлинное творчество, милосердие и преданная любовь сильнее трусости, конформизма и смерти.',
    image: createEndpaperSvg('М. А. БУЛГАКОВ', 'Мастер', 'и Маргарита', 'Философско-мистический роман', '1940', 'Том II', '#172035', '#d97706'),
    table: [
      ['Автор и годы создания', 'М. А. Булгаков, 1928–1940 гг. (опубликован в 1966–1967 гг.)'],
      ['Мастер и Маргарита', 'Автор романа о Понтии Пилате и его возлюбленная, готовая на сделку с Воландом ради спасения Мастера'],
      ['Воланд и его свита', 'Князь тьмы, Коровьев-Фагот, Азазелло, Кот Бегемот и Гелла, вскрывающие пороки москвичей'],
      ['Иешуа Га-Ноцри', 'Бродячий философ в Ершалаиме, проповедующий, что все люди добры'],
      ['Понтий Пилат', 'Пятый прокуратор Иудеи, пославший Иешуа на казнь из-за страха погубить карьеру']
    ],
    chapters: [
      ['Книга 1. Воланд на Патриарших прудах и сеанс в Варьете', 'Спор Берлиоза и поэта Ивана Бездомного с загадочным иностранцем. Гибель Берлиоза, заселение свиты Воланда в «нехорошую квартиру» и сеанс в театре Варьете.'],
      ['Книга 2. Полёт Маргариты и Великий бал у сатаны', 'Маргарита принимает крем Азазелло, становится невидимой ведьмой и исполняет роль королевы на весеннем балу полнолуния ради спасения возлюбленного.'],
      ['Финал. Воссоединение влюблённых и прощение Пилата', 'Воланд возвращает сожжённую рукопись романа. По просьбе Левия Матвея Мастер и Маргарита обретают вечный покой, а Понтий Пилат получает прощение.']
    ],
    quotes: [
      ['«Рукописи не горят.»', '— Воланд (М. А. Булгаков)'],
      ['«Никогда и ничего не просите! Никогда и ничего, и в особенности у тех, кто сильнее вас.»', '— Воланд']
    ]
  },
  turgenev: {
    key: 'turgenev',
    title: 'Отцы и дети',
    author: 'И. С. Тургенев',
    shortTag: '9 мин',
    badgeClass: 'bg-info text-dark',
    badge: 'Время чтения: 9 минут',
    epoch: 'Золотой век (1862 г.)',
    pagesCount: 280,
    cardText: 'Конфликт либералов-дворян Кирсановых и разночинца-нигилиста Евгения Базарова. Испытание нигилизма любовью к Анне Одинцовой.',
    lead: 'Социально-психологический роман И. С. Тургенева об идейном столкновении дворян-либералов 1840-х годов («отцов») и разночинцев 1860-х годов («детей»).',
    pages: 'Объём оригинала: 280 стр.',
    moral: '<strong>Главная мысль:</strong> Жизнь, природа и человеческое чувство всегда шире и сильнее любых радикальных теорий и полного отрицания.',
    image: createEndpaperSvg('И. С. ТУРГЕНЕВ', 'Отцы', 'и дети', 'Социально-психологический роман', '1862', 'Том III', '#143829', '#059669'),
    table: [
      ['Автор и год публикации', 'И. С. Тургенев, 1862 год (журнал «Русский вестник»)'],
      ['Евгений Базаров', 'Студент-медик, разночинец, убеждённый нигилист, отрицающий авторитеты, искусство и сентиментальность'],
      ['Павел Петрович Кирсанов', 'Дворянин-аристократ, главный идейный оппонент Базарова, защищающий традиции и принципы'],
      ['Николай Петрович и Аркадий', 'Мягкий отец-помещик и его сын Аркадий, выбирающий созидательное семейное счастье'],
      ['Анна Сергеевна Одинцова', 'Умная и независимая богатая вдова, любовь к которой разрушает нигилистическую броню Базарова']
    ],
    chapters: [
      ['Часть 1. Приезд в Марьино и спор о нигилизме', 'Аркадий Кирсанов приезжает в имение отца вместе с другом Евгением Базаровым. Между Базаровым и Павлом Петровичем вспыхивает ожесточённый спор об искусстве и науке.'],
      ['Часть 2. Знакомство с Одинцовой и кризис Базарова', 'В губернском городе друзья знакомятся с Анной Одинцовой. В её имении Никольском Базаров осознаёт, что страстно влюблён, но после признания получает отказ.'],
      ['Часть 3. Дуэль, разрыв с Аркадием и смерть героя', 'Дуэль с Павлом Петровичем и отъезд Базарова к родителям. Заразившись тифом при вскрытии больного крестьянина, Базаров мужественно встречает смерть.']
    ],
    quotes: [
      ['«Природа не храм, а мастерская, и человек в ней работник.»', '— Евгений Базаров'],
      ['«Нигилист — это человек, который не склоняется ни перед какими авторитетами.»', '— Аркадий Кирсанов']
    ]
  },
  tolstoy: {
    key: 'tolstoy',
    title: 'Война и мир',
    author: 'Л. Н. Толстой',
    shortTag: '25 мин',
    badgeClass: 'bg-primary',
    badge: 'Время чтения: 25 минут',
    epoch: 'Золотой век (1869 г.)',
    pagesCount: 1300,
    cardText: 'Все 4 тома в чёткой структуре: духовные искания Андрея Болконского и Пьера Безухова, Наташа Ростова, Аустерлиц и Бородинское сражение.',
    lead: 'Монументальный роман-эпопея Л. Н. Толстого о судьбах русского дворянства и всего народа в эпоху войн с Наполеоном 1805–1812 годов.',
    pages: 'Объём оригинала: 1300 стр.',
    moral: '<strong>Главная мысль:</strong> Истинное величие человека — в простоте, добре и единении с народом («мысль народная» и «мысль семейная»).',
    image: createEndpaperSvg('Л. Н. ТОЛСТОЙ', 'Война', 'и мир', 'Роман-эпопея в четырёх томах', '1869', 'Том IV', '#1e2952', '#2563eb'),
    table: [
      ['Автор и годы создания', 'Л. Н. Толстой, 1863–1869 гг.'],
      ['Андрей Болконский', 'Князь, ищущий свой «Тулон» и славу, но открывающий вечную истину под высоким небом Аустерлица'],
      ['Пьер Безухов', 'Любимый герой Толстого, проходящий путь от светских кутежей и масонства до плена и народной мудрости Платона Каратаева'],
      ['Наташа Ростова', 'Воплощение естественности, искренности, поэзии жизни и семейного начала'],
      ['Кутузов и Наполеон', 'Два полюса истории: смиренный выразитель народного духа Кутузов и самонадеянный индивидуалист Наполеон']
    ],
    chapters: [
      ['Том 1–2. Кампания 1805 года и мирная жизнь героев', 'Вечер в салоне Шерер, Шенграбенское и Аустерлицкое сражения. Ранение князя Андрея. Первый бал Наташи Ростовой, её любовь к Болконскому и роковая ошибка с Анатолем.'],
      ['Том 3. Отечественная война 1812 года и Бородино', 'Вторжение Наполеона, оставление Смоленска, назначение Кутузова. Бородинское сражение глазами Пьера Безухова и смертельное ранение Андрея Болконского.'],
      ['Том 4 и Эпилог. Партизанская война, плен Пьера и семьи', 'Примирение Наташи с умирающим князем Андреем. Встреча Пьера в плену с Платоном Каратаевым. Изгнание французов, брак Пьера с Наташей и Николая Ростова с княжной Марьей.']
    ],
    quotes: [
      ['«Нет величия там, где нет простоты, добра и правды.»', '— Л. Н. Толстой'],
      ['«Чтобы жить честно, надо рваться, путаться, биться, ошибаться, начинать и бросать...»', '— Л. Н. Толстой']
    ]
  },
  pushkin: {
    key: 'pushkin',
    title: 'Евгений Онегин',
    author: 'А. С. Пушкин',
    shortTag: '7 мин',
    badgeClass: 'bg-secondary',
    badge: 'Время чтения: 7 минут',
    epoch: 'Золотой век (1833 г.)',
    pagesCount: 220,
    cardText: '«Энциклопедия русской жизни». Характер Онегина как «лишнего человека», письмо Татьяны Лариной и трагическая дуэль с Владимиром Ленским.',
    lead: 'Первый русский реалистический роман в стихах А. С. Пушкина, названный В. Г. Белинским «энциклопедией русской жизни».',
    pages: 'Объём оригинала: 220 стр.',
    moral: '<strong>Главная мысль:</strong> Эгоизм, скептицизм и оторванность от национальной почвы обрекают одарённого человека на духовную пустоту и одиночество.',
    image: createEndpaperSvg('А. С. ПУШКИН', 'Евгений', 'Онегин', 'Роман в стихах', '1833', 'Том V', '#2e1042', '#7c3aed'),
    table: [
      ['Автор и годы создания', 'А. С. Пушкин, 1823–1831 гг.'],
      ['Евгений Онегин', 'Молодой петербургский дворянин, подверженный «русской хандре», родоначальник типа «лишнего человека»'],
      ['Татьяна Ларина', 'Нравственный идеал Пушкина («милый идеал»): цельная, глубокая и верная долгу русская натура'],
      ['Владимир Ленский', 'Юный поэт-романтик с «душою прямо геттингенской», друг Онегина, погибший на дуэли'],
      ['Ольга Ларина', 'Младшая сестра Татьяны, весёлая, но поверхностная невеста Ленского']
    ],
    chapters: [
      ['Глава 1–3. Петербургская хандра, деревня и письмо Татьяны', 'Устав от светских развлечений, Онегин переезжает в деревню, сближается с поэтом Ленским и знакомится с Лариными. Татьяна влюбляется в Евгения и пишет ему письмо.'],
      ['Глава 4–6. Проповедь Онегина, именины и дуэль с Ленским', 'Онегин отвергает Татьяну. На именинах Татьяны Евгений ради шутки ухаживает за Ольгой, вызывая ревность Ленского, и убивает друга на дуэли.'],
      ['Глава 7–8. Встреча в Петербурге и отказ Татьяны', 'Спустя годы вернувшийся из странствий Онегин встречает в свете Татьяну, ставшую княгиней. Теперь уже Онегин пишет ей письмо, но Татьяна остаётся верна мужу.']
    ],
    quotes: [
      ['«Чем меньше женщину мы любим, тем легче нравимся мы ей...»', '— А. С. Пушкин'],
      ['«Но я другому отдана; я буду век ему верна.»', '— Татьяна Ларина']
    ]
  },
  orwell: {
    key: 'orwell',
    title: '1984',
    author: 'Джордж Оруэлл',
    shortTag: '8 мин',
    badgeClass: 'bg-danger',
    badge: 'Время чтения: 8 минут',
    epoch: 'Зарубежная классика (1949 г.)',
    pagesCount: 320,
    cardText: 'Антиутопия о тоталитарном мире Океании, двоемыслии, новоязе, Министерстве правды и попытке Уинстона Смита сохранить человечность.',
    lead: 'Культовый роман-антиутопия Джорджа Оруэлла об обществе тотальной слежки, манипуляции историей и подавлении человеческой личности.',
    pages: 'Объём оригинала: 320 стр.',
    moral: '<strong>Главная мысль:</strong> Когда власть получает контроль над прошлым, языком и внутренним миром человека, свобода уничтожается изнутри.',
    image: createEndpaperSvg('ДЖОРДЖ ОРУЭЛЛ', 'Роман-антиутопия', '1984', 'Три части с приложением о Новоязе', '1949', 'Том VI', '#450a0a', '#dc2626'),
    table: [
      ['Автор и год издания', 'Джордж Оруэлл (Эрик Артур Блэр), 1949 год'],
      ['Уинстон Смит', 'Рядовой сотрудник Министерства правды, пытающийся сохранить память, дневник и личную свободу'],
      ['Джулия', 'Возлюбленная Уинстона, бунтующая против партийного аскетизма через тайную частную жизнь'],
      ['О’Брайен', 'Высокопоставленный член Внутренней партии, заманивший Уинстона в ловушку и сломивший его в Министерстве любви'],
      ['Большой Брат', 'Символ всевидящей и непогрешимой диктатуры партии ангсоца']
    ],
    chapters: [
      ['Часть 1. Жизнь в Океании и тайный дневник Уинстона', 'Уинстон Смит ежедневно переписывает старые газеты в Министерстве правды, чтобы прогнозы партии всегда сбывались. Тайком от телекрана он начинает вести дневник.'],
      ['Часть 2. Любовь к Джулии и вступление в «Братство»', 'Уинстон и Джулия снимают комнату без телекрана над лавкой мистера Чаррингтона. Они доверяются О’Брайену, но комната оказывается ловушкой Полиции мыслей.'],
      ['Часть 3. Пытки в Министерстве любви и Комната 101', 'Под пытками О’Брайена Уинстон учится считать, что «дважды два — пять». В Комнате 101 он предаёт Джулию и в финале любит Большого Брата.']
    ],
    quotes: [
      ['«Война — это мир. Свобода — это рабство. Незнание — сила.»', '— Лозунг партии (Дж. Оруэлл)'],
      ['«Свобода — это возможность сказать, что дважды два — четыре.»', '— Уинстон Смит']
    ]
  },
  lermontov: {
    key: 'lermontov',
    title: 'Герой нашего времени',
    author: 'М. Ю. Лермонтов',
    shortTag: '10 мин',
    badgeClass: 'bg-success',
    badge: 'Время чтения: 10 минут',
    epoch: 'Золотой век (1840 г.)',
    pagesCount: 224,
    cardText: 'Первый русский психологический роман в прозе. История Григория Печорина в пяти повестях: «Бэла», «Максим Максимыч», «Тамань», «Княжна Мери», «Фаталист».',
    lead: 'Социально-психологический и философский роман М. Ю. Лермонтова, раскрывающий противоречивую душу офицера Григория Печорина на Кавказе.',
    pages: 'Объём оригинала: 224 стр.',
    moral: '<strong>Главная мысль:</strong> Нерастраченные богатые силы души, лишённые высокой жизненной цели, оборачиваются разрушением для самого человека и окружающих.',
    image: createEndpaperSvg('М. Ю. ЛЕРМОНТОВ', 'Герой нашего', 'времени', 'Психологический роман в пяти повестях', '1840', 'Том VII', '#1e3a3a', '#0d9488'),
    table: [
      ['Автор и год издания', 'М. Ю. Лермонтов, 1840 год'],
      ['Григорий Александрович Печорин', 'Молодой офицер, яркий представитель поколения 1830-х годов, наделённый острым умом, но страдающий от душевной охлаждённости'],
      ['Максим Максимыч', 'Добродушный штабс-капитан, человек цельного характера и простого сердца, рассказчик истории о Бэле'],
      ['Княжна Мери и Вера', 'Две женщины в судьбе Печорина: юная княжна Лиговская и единственная женщина, которую Печорин искренне любил'],
      ['Грушницкий и Вулич', 'Самолюбивый юнкер-позёр Грушницкий (двойник-пародия Печорина) и сербский поручик-фаталист Вулич']
    ],
    chapters: [
      ['«Бэла» и «Максим Максимыч». Взгляд на Печорина со стороны', 'Странствующий офицер знакомится со штабс-капитаном Максимом Максимычем, который рассказывает историю похищения Печориным черкешенки Бэлы и её трагической гибели от руки Казбича.'],
      ['Журнал Печорина: «Тамань» и «Княжна Мери»', 'Исповедь самого Печорина. Столкновение с «честными контрабандистами» в Тамани. Курортная интрига в Пятигорске, влюблённость княжны Мери, прощальное письмо Веры и дуэль с Грушницким.'],
      ['«Фаталист». Испытание судьбы и предопределения', 'Пари поручика Вулича со смертью в казачьей станице. Гибель Вулича от шашки пьяного казака и отчаянный поступок Печорина, берущего убийцу живым.']
    ],
    quotes: [
      ['«Во мне два человека: один живёт в полном смысле этого слова, другой мыслит и судит его.»', '— Григорий Печорин'],
      ['«Герой Нашего Времени, милостивые государи мои, точно, портрет, но не одного человека: это портрет, составленный из пороков всего нашего поколения.»', '— М. Ю. Лермонтов']
    ]
  },
  gogol: {
    key: 'gogol',
    title: 'Мёртвые души',
    author: 'Н. В. Гоголь',
    shortTag: '14 мин',
    badgeClass: 'bg-warning text-dark',
    badge: 'Время чтения: 14 минут',
    epoch: 'Золотой век (1842 г.)',
    pagesCount: 352,
    cardText: 'Авантюра Павла Ивановича Чичикова по скупке умерших крестьян. Галерея помещиков: Манилов, Коробочка, Ноздрёв, Собакевич и Плюшкин.',
    lead: 'Бессмертная поэма в прозе Н. В. Гоголя, в которой через путешествие предприимчивого Чичикова показана широкая панорама России и духовного омертвения.',
    pages: 'Объём оригинала: 352 стр.',
    moral: '<strong>Главная мысль:</strong> Страшнее физической смерти — духовное омертвение человека, разменявшего живую душу на мелочную корысть и пошлость.',
    image: createEndpaperSvg('Н. В. ГОГОЛЬ', 'Похождения Чичикова,', 'или Мёртвые души', 'Поэма в прозе', '1842', 'Том VIII', '#422006', '#ca8a04'),
    table: [
      ['Автор и год издания', 'Н. В. Гоголь, 1842 год (первый том)'],
      ['Павел Иванович Чичиков', 'Коллежский советник в отставке, «приобретатель», задумавший заложить в Опекунский совет фиктивные ревизские души'],
      ['Манилов и Коробочка', 'Мечтательно-бесплодный барин Манилов и мелочно-накопительная «дубинноголовая» помещица Коробочка'],
      ['Ноздрёв и Собакевич', 'Безудержный враль и скандалист Ноздрёв и кулак-материалист Михаил Семёнович Собакевич'],
      ['Степан Плюшкин', 'Высшая степень падения человеческой души — прореха на человечестве, опустившийся от скупости богатый помещик']
    ],
    chapters: [
      ['Глава 1–6. Приезд в губернский город NN и объезд помещиков', 'Чичиков очаровывает чиновников города NN и отправляется по усадьбам скупать умерших крестьян, числящихся по ревизии живыми: от слащавого Манилова до скряги Плюшкина.'],
      ['Глава 7–10. Оформление купчих, бал у губернатора и разоблачение', 'Чичиков оформляет сделки и становится главным героем губернского бала. Однако появление Ноздрёва и Коробочки порождает нелепые слухи, включая «Повесть о капитане Копейкине».'],
      ['Глава 11. Прошлое Чичикова и образ Птицы-тройки', 'Бегство Чичикова из города. История его жизни и завета отца «беречь копейку». Лирическое отступление о Руси как о неудержимой птице-тройке.']
    ],
    quotes: [
      ['«Русь, куда ж несёшься ты? дай ответ. Не даёт ответа.»', '— Н. В. Гоголь'],
      ['«Больше всего береги и копи копейку: эта вещь надёжнее всего на свете.»', '— Завет отца Чичикову']
    ]
  },
  chekhov: {
    key: 'chekhov',
    title: 'Вишнёвый сад',
    author: 'А. П. Чехов',
    shortTag: '8 мин',
    badgeClass: 'bg-info text-dark',
    badge: 'Время чтения: 8 минут',
    epoch: 'Рубеж XIX–XX вв. (1903 г.)',
    pagesCount: 96,
    cardText: 'Последняя пьеса А. П. Чехова о продаже дворянского имения. Образы Раневской, Гаева, купца Лопахина и молодых героев Пети Трофимова и Ани.',
    lead: 'Лирическая комедия в четырёх действиях А. П. Чехова, отразившая смену исторических эпох: уход дворянских гнёзд в прошлое и приход деловых людей.',
    pages: 'Объём оригинала: 96 стр.',
    moral: '<strong>Главная мысль:</strong> Время неумолимо сметает тех, кто живёт одними воспоминаниями, но за разрушением старого мира открывается надежда на созидательный труд будущего.',
    image: createEndpaperSvg('А. П. ЧЕХОВ', 'Вишнёвый', 'сад', 'Комедия в четырёх действиях', '1903', 'Том IX', '#3f1d38', '#db2777'),
    table: [
      ['Автор и год создания', 'А. П. Чехов, 1903 год (премьера в МХТ в январе 1904 г.)'],
      ['Любовь Андреевна Раневская и Гаев', 'Владельцы имения, живущие прошлым: добрая, но легкомысленная и непрактичная Раневская и её брат Леонид Гаев'],
      ['Ермолай Алексеевич Лопахин', 'Богатый купец из бывших крепостных, предлагающий практичный план спасения имения и в итоге покупающий вишнёвый сад'],
      ['Петя Трофимов и Аня', '«Вечный студент» Трофимов и юная дочь Раневской Аня, устремлённые в будущее («Вся Россия — наш сад!»)'],
      ['Фирс', 'Старый лакей 87 лет, символ преданности уходящему барскому укладу, забытый в заколоченном доме']
    ],
    chapters: [
      ['Действие 1–2. Возвращение Раневской и проект Лопахина', 'После пяти лет в Париже Раневская возвращается в цветущее родовое имение, которое должно пойти с молотка за долги. Купец Лопахин предлагает вырубить вишнёвый сад и разбить участки под дачи.'],
      ['Действие 3. Бал в день торгов и покупка сада Лопахиным', 'В день аукциона в усадьбе устраивают нелепый бал. Появляется потрясённый Лопахин и объявляет: «Вишнёвый сад теперь мой! Я купил!». Раневская горько плачет, а Аня утешает мать.'],
      ['Действие 4. Прощание с домом, стук топоров и забытый Фирс', 'Октябрь. Обитатели имения разъезжаются в разные стороны. В саду уже слышен глухой стук топора по деревьям и звук лопнувшей струны. В запертом пустом доме остаётся старик Фирс.']
    ],
    quotes: [
      ['«Вся Россия наш сад. Земля велика и прекрасна, есть на ней много чудесных мест.»', '— Петя Трофимов'],
      ['«Человека забыли... Ничего... я тут посижу... Жизнь прошла, словно и не жил.»', '— Фирс']
    ]
  }
};

// ==========================================================================
// УПРАВЛЕНИЕ ИЗБРАННЫМ + АНИМАЦИЯ ВЫЛЕТА СЕРДЕЧЕК
// ==========================================================================
const FAV_STORAGE_KEY = 'litbrief_favorites';

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAV_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveFavorites(list) {
  localStorage.setItem(FAV_STORAGE_KEY, JSON.stringify(list));
  updateFavoriteUI();
}

function spawnFlyingHearts(btnEl) {
  const trajectories = [
    { tx: '-34px', ty: '-42px', rot: '-25deg' },
    { tx: '0px', ty: '-52px', rot: '5deg' },
    { tx: '34px', ty: '-40px', rot: '28deg' },
    { tx: '-44px', ty: '-14px', rot: '-40deg' },
    { tx: '44px', ty: '-12px', rot: '35deg' },
    { tx: '-24px', ty: '28px', rot: '-18deg' },
    { tx: '26px', ty: '26px', rot: '22deg' },
    { tx: '-14px', ty: '-48px', rot: '-12deg' },
    { tx: '18px', ty: '-46px', rot: '16deg' }
  ];

  trajectories.forEach((t) => {
    const span = document.createElement('span');
    span.className = 'flying-heart';
    span.textContent = '♥';
    span.style.setProperty('--tx', t.tx);
    span.style.setProperty('--ty', t.ty);
    span.style.setProperty('--rot', t.rot);
    btnEl.appendChild(span);
    setTimeout(() => span.remove(), 950);
  });
}

function toggleFavorite(bookKey, btnEl) {
  const favs = getFavorites();
  const idx = favs.indexOf(bookKey);
  if (idx === -1) {
    favs.push(bookKey);
  } else {
    favs.splice(idx, 1);
  }
  saveFavorites(favs);

  if (btnEl) {
    btnEl.classList.remove('animating');
    void btnEl.offsetWidth;
    btnEl.classList.add('animating');
    spawnFlyingHearts(btnEl);
  }
}

function updateFavoriteUI() {
  const favs = getFavorites();
  document.querySelectorAll('.fav-btn').forEach((btn) => {
    const key = btn.dataset.book;
    const isFav = favs.includes(key);
    btn.classList.toggle('is-favorite', isFav);
  });
}

// Карточка книги: сердечко справа на одном уровне с кнопками «Читать разбор» и «Краткая справка»
function createBookCardHtml(b, index, isCatalogPage) {
  const favs = getFavorites();
  const isFav = favs.includes(b.key);
  const analysisLink = isCatalogPage
    ? `#book-analysis-section`
    : `catalog.html?book=${b.key}#book-analysis-section`;

  return `
    <div class="col-12 col-md-6 col-lg-4 book-card-col">
      <article class="card h-100 shadow-sm">
        <img src="${b.image}" class="card-img-top" alt="Форзац книги ${b.title}">
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h2 class="card-title h5 mb-0">${b.title}</h2>
            <span class="badge ${b.badgeClass}">${b.shortTag}</span>
          </div>
          <p class="text-muted small mb-2">${b.author} • ${b.epoch}</p>
          <p class="card-text text-muted">${b.cardText}</p>
          <p class="fw-bold fs-6 mt-auto mb-3">${b.pages}</p>
          <div class="d-flex align-items-center gap-2 card-actions-row">
            <a class="btn btn-primary open-analysis-btn" href="${analysisLink}" data-book="${b.key}">
              Читать разбор
            </a>
            <button class="btn btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#bookModal${index + 1}">
              Краткая справка
            </button>
            <button
              type="button"
              class="btn btn-outline-danger fav-btn ms-auto ${isFav ? 'is-favorite' : ''}"
              data-book="${b.key}"
              aria-label="Добавить в избранное"
              title="В избранное"
            >
              <span class="heart-icon">♥</span>
            </button>
          </div>
        </div>
      </article>
    </div>`;
}

function createBookModalHtml(b, index, isCatalogPage) {
  const analysisLink = isCatalogPage
    ? `#book-analysis-section`
    : `catalog.html?book=${b.key}#book-analysis-section`;

  return `
    <div class="modal fade" id="bookModal${index + 1}" tabindex="-1" aria-labelledby="bookModalLabel${index + 1}" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h2 class="modal-title h5" id="bookModalLabel${index + 1}">📖 ${b.title} — Краткая справка об издании</h2>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Закрыть"></button>
          </div>
          <div class="modal-body">
            <p><strong>Автор:</strong> ${b.author} | <strong>Эпоха:</strong> ${b.epoch} | <strong>${b.badge}</strong></p>
            <p><strong>Краткое описание:</strong> ${b.lead}</p>
            <div class="p-3 bg-light rounded border mb-3">${b.moral}</div>
            <hr>
            <form class="modal-quick-order">
              <h3 class="h6 fw-bold">Отправить полный PDF-конспект «${b.title}» на электронную почту:</h3>
              <div class="row g-2 mt-1">
                <div class="col-12 col-md-5"><input type="text" class="form-control" placeholder="Ваше имя *" required></div>
                <div class="col-12 col-md-5"><input type="email" class="form-control" placeholder="Ваш E-mail *" required></div>
                <div class="col-12 col-md-2"><button type="submit" class="btn btn-success w-100">Получить</button></div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <a href="${analysisLink}" class="btn btn-primary modal-to-analysis-btn" data-book="${b.key}" ${isCatalogPage ? 'data-bs-dismiss="modal"' : ''}>
              Перейти к полному разбору
            </a>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
          </div>
        </div>
      </div>
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const booksArray = Object.values(BOOKS_DATA);
  const catalogGrid = document.getElementById('catalog-grid');
  const modalsContainer = document.getElementById('modals-container');
  const homePopularGrid = document.getElementById('home-popular-grid');
  const homeModalsContainer = document.getElementById('home-modals-container');
  const detailTitle = document.getElementById('detail-title');

  // 1. Отрисовка популярных карточек на главной странице
  if (homePopularGrid && homeModalsContainer) {
    const popularBooks = booksArray.slice(0, 3);
    homePopularGrid.innerHTML = popularBooks.map((b, i) => createBookCardHtml(b, i, false)).join('');
    homeModalsContainer.innerHTML = popularBooks.map((b, i) => createBookModalHtml(b, i, false)).join('');
  }

  // 2. Отрисовка каталога в Базе книг
  if (catalogGrid && modalsContainer) {
    catalogGrid.innerHTML = booksArray.map((b, i) => createBookCardHtml(b, i, true)).join('');
    modalsContainer.innerHTML = booksArray.map((b, i) => createBookModalHtml(b, i, true)).join('');
  }

  // 3. Обработка кликов по кнопке «Избранное»
  document.body.addEventListener('click', (e) => {
    const favBtn = e.target.closest('.fav-btn');
    if (favBtn && favBtn.dataset.book) {
      toggleFavorite(favBtn.dataset.book, favBtn);
      renderProfilePage();
    }
  });

  // 4. Отрисовка полного разбора выбранной книги + 3D-анимация открывания закрытой книги
  function renderBook(bookKey, playBookOpenAnimation = false) {
    const book = BOOKS_DATA[bookKey] || BOOKS_DATA.dostoevsky;
    if (!detailTitle) return;

    const stage = document.getElementById('book-open-stage');
    const overlayAuthor = document.getElementById('cover-overlay-author');
    const overlayTitle = document.getElementById('cover-overlay-title');

    if (overlayAuthor && overlayTitle) {
      overlayAuthor.textContent = book.author.toUpperCase();
      overlayTitle.textContent = book.title;
    }

    if (stage && playBookOpenAnimation) {
      stage.classList.remove('is-opening');
      void stage.offsetWidth;
      stage.classList.add('is-opening');
    }

    detailTitle.textContent = book.title;
    document.getElementById('detail-badge').textContent = book.badge;
    document.getElementById('detail-epoch').textContent = book.epoch;
    document.getElementById('detail-lead').textContent = book.lead;
    document.getElementById('detail-pages').textContent = book.pages;
    document.getElementById('detail-moral').innerHTML = book.moral;
    document.getElementById('detail-image').src = book.image;
    document.getElementById('detail-image').alt = `Форзац книги ${book.title}`;

    const detailFavBtn = document.getElementById('detail-fav-btn');
    if (detailFavBtn) {
      detailFavBtn.dataset.book = book.key;
    }

    const modalBookEl = document.getElementById('modal-current-book');
    if (modalBookEl) modalBookEl.textContent = book.title;

    const tbody = document.getElementById('detail-table-body');
    if (tbody) {
      tbody.innerHTML = book.table
        .map(([param, val]) => `<tr><th scope="row">${param}</th><td>${val}</td></tr>`)
        .join('');
    }

    book.chapters.forEach(([heading, text], idx) => {
      const btn = document.getElementById(`acc-btn-${idx + 1}`);
      const body = document.getElementById(`acc-body-${idx + 1}`);
      if (btn && body) {
        btn.textContent = heading;
        body.textContent = text;
      }
    });

    book.quotes.forEach(([qText, qAuthor], idx) => {
      const qt = document.getElementById(`quote-text-${idx + 1}`);
      const qa = document.getElementById(`quote-author-${idx + 1}`);
      if (qt && qa) {
        qt.textContent = qText;
        qa.textContent = qAuthor;
      }
    });

    updateFavoriteUI();
  }

  if (detailTitle) {
    const params = new URLSearchParams(window.location.search);
    const initialBook = params.get('book') || 'dostoevsky';
    const shouldAnimateOnLoad = window.location.hash === '#book-analysis-section' || params.has('book');
    renderBook(initialBook, shouldAnimateOnLoad);

    document.body.addEventListener('click', (e) => {
      const btn = e.target.closest('.open-analysis-btn, .modal-to-analysis-btn');
      if (btn && btn.dataset.book && detailTitle) {
        e.preventDefault();
        const key = btn.dataset.book;
        const section = document.getElementById('book-analysis-section');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        renderBook(key, true);
        window.history.replaceState({}, '', `catalog.html?book=${key}#book-analysis-section`);
      }
    });
  }

  // 5. Анимированный расчёт времени чтения (бегущие цифры + вращение песочных часов + шкалы сравнения)
  const calcPreset = document.getElementById('calc-book-preset');
  const calcPages = document.getElementById('calc-pages');
  const calcSpeed = document.getElementById('calc-speed');
  const calcBtn = document.getElementById('calc-btn');
  const hourglassIcon = document.getElementById('calc-hourglass');

  function animateValue(el, start, end, duration, suffix, isDecimal = false) {
    if (!el) return;
    const startTime = performance.now();
    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;
      el.textContent = `${isDecimal ? current.toFixed(1) : Math.round(current)}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  function updateReadingCalculation() {
    if (!calcPages || !calcSpeed) return;
    const pages = Math.max(10, Number(calcPages.value) || 300);
    const speed = Number(calcSpeed.value) || 40;
    const originalHours = pages / speed;
    const briefMinutes = Math.max(6, Math.round(pages / 42));
    const savedPercent = Math.min(99, Math.round((1 - briefMinutes / (originalHours * 60)) * 100));

    if (hourglassIcon) {
      hourglassIcon.classList.remove('spinning');
      void hourglassIcon.offsetWidth;
      hourglassIcon.classList.add('spinning');
    }

    const numOrig = document.getElementById('calc-num-orig');
    const numBrief = document.getElementById('calc-num-brief');
    const numSave = document.getElementById('calc-num-save');
    const labelPages = document.getElementById('calc-label-pages');
    const barOrigLabel = document.getElementById('calc-bar-orig-label');
    const barBriefLabel = document.getElementById('calc-bar-brief-label');
    const barOrig = document.getElementById('calc-bar-orig');
    const barBrief = document.getElementById('calc-bar-brief');

    if (labelPages) labelPages.textContent = pages;
    if (barOrigLabel) barOrigLabel.textContent = `${originalHours.toFixed(1)} ч.`;
    if (barBriefLabel) barBriefLabel.textContent = `${briefMinutes} мин.`;

    animateValue(numOrig, 0, originalHours, 900, ' ч.', true);
    animateValue(numBrief, 0, briefMinutes, 900, ' мин.', false);
    animateValue(numSave, 0, savedPercent, 900, '%', false);

    if (barOrig && barBrief) {
      barOrig.style.width = '0%';
      barBrief.style.width = '0%';
      setTimeout(() => {
        barOrig.style.width = '100%';
        const ratioWidth = Math.max(5, Math.min(35, Math.round((briefMinutes / (originalHours * 60)) * 300)));
        barBrief.style.width = `${ratioWidth}%`;
      }, 60);
    }
  }

  if (calcPreset && calcPages) {
    calcPreset.addEventListener('change', () => {
      calcPages.value = calcPreset.value;
      updateReadingCalculation();
    });
  }
  if (calcBtn) {
    calcBtn.addEventListener('click', updateReadingCalculation);
  }

  // 6. Глобальный живой поиск в шапке сайта на всех страницах
  const globalSearchInput = document.getElementById('global-search-input');
  const globalSearchResults = document.getElementById('global-search-results');

  if (globalSearchInput && globalSearchResults) {
    globalSearchInput.addEventListener('input', () => {
      const q = globalSearchInput.value.trim().toLowerCase();
      if (!q) {
        globalSearchResults.classList.add('d-none');
        return;
      }

      const matches = booksArray.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.cardText.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        globalSearchResults.innerHTML = `<div class="p-3 text-muted small">Ничего не найдено по запросу «${globalSearchInput.value}»</div>`;
      } else {
        globalSearchResults.innerHTML = matches
          .map(
            (b) => `
          <a href="catalog.html?book=${b.key}#book-analysis-section" class="d-block p-2 px-3 text-decoration-none border-bottom text-dark search-result-item">
            <div class="fw-bold small">${b.title}</div>
            <div class="text-muted" style="font-size: 12px;">${b.author} • ${b.shortTag}</div>
          </a>`
          )
          .join('');
      }
      globalSearchResults.classList.remove('d-none');
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-search-wrap')) {
        globalSearchResults.classList.add('d-none');
      }
    });
  }

  // 7. Отрисовка страницы Личного кабинета и Избранного (profile.html)
  const favListContainer = document.getElementById('favorites-list-container');
  const clearFavBtn = document.getElementById('clear-favorites-btn');

  function renderProfilePage() {
    if (!favListContainer) return;
    const favKeys = getFavorites();
    const favBooks = favKeys.map((k) => BOOKS_DATA[k]).filter(Boolean);

    if (favBooks.length === 0) {
      favListContainer.innerHTML = `
        <div class="col-12">
          <div class="p-4 text-center bg-light rounded border">
            <p class="mb-2 fw-bold">В вашем списке «Избранное» пока нет сохранённых книг.</p>
            <p class="text-muted small mb-3">Перейдите в базу книг и нажмите на значок сердечка на карточке интересующего произведения.</p>
            <a href="catalog.html" class="btn btn-primary btn-sm">Перейти в базу книг</a>
          </div>
        </div>`;
      return;
    }

    favListContainer.innerHTML = favBooks
      .map(
        (b) => `
      <div class="col-12 col-md-6">
        <div class="card h-100 shadow-sm">
          <img src="${b.image}" class="card-img-top" alt="Форзац ${b.title}">
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-start mb-1">
              <h3 class="h6 fw-bold mb-0">${b.title}</h3>
              <span class="badge ${b.badgeClass}">${b.shortTag}</span>
            </div>
            <p class="text-muted small mb-2">${b.author}</p>
            <p class="small text-muted mb-3">${b.cardText}</p>
            <div class="d-flex align-items-center gap-2 mt-auto">
              <a href="catalog.html?book=${b.key}#book-analysis-section" class="btn btn-primary btn-sm flex-grow-1">Читать разбор</a>
              <button type="button" class="btn btn-outline-danger fav-btn is-favorite ms-auto" data-book="${b.key}" title="Убрать из избранного">
                <span class="heart-icon">♥</span>
              </button>
            </div>
          </div>
        </div>
      </div>`
      )
      .join('');
  }

  if (favListContainer) {
    renderProfilePage();
    if (clearFavBtn) {
      clearFavBtn.addEventListener('click', () => {
        saveFavorites([]);
        renderProfilePage();
      });
    }
  }

  // Настройки профиля в Личном кабинете
  const profileForm = document.getElementById('profile-settings-form');
  const profileNameInput = document.getElementById('profile-name-input');
  const profileGoalInput = document.getElementById('profile-goal-input');
  const profileDisplayName = document.getElementById('profile-display-name');
  const profileDisplayBio = document.getElementById('profile-display-bio');
  const profileSaveAlert = document.getElementById('profile-save-alert');

  if (profileForm) {
    const savedName = localStorage.getItem('litbrief_user_name');
    const savedBio = localStorage.getItem('litbrief_user_bio');
    if (savedName) {
      profileNameInput.value = savedName;
      profileDisplayName.textContent = savedName;
    }
    if (savedBio) {
      profileGoalInput.value = savedBio;
      profileDisplayBio.textContent = savedBio;
    }

    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      localStorage.setItem('litbrief_user_name', profileNameInput.value);
      localStorage.setItem('litbrief_user_bio', profileGoalInput.value);
      profileDisplayName.textContent = profileNameInput.value;
      profileDisplayBio.textContent = profileGoalInput.value;
      if (profileSaveAlert) {
        profileSaveAlert.hidden = false;
        setTimeout(() => (profileSaveAlert.hidden = true), 2500);
      }
    });
  }

  // 8. Копирование цитат в буфер обмена
  document.querySelectorAll('.copy-quote-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card-body');
      const quoteText = card ? card.querySelector('p').textContent : '';
      if (navigator.clipboard && quoteText) {
        navigator.clipboard.writeText(quoteText);
      }
      const prev = btn.textContent;
      btn.textContent = 'Скопировано! ✓';
      btn.classList.replace('btn-outline-primary', 'btn-success');
      setTimeout(() => {
        btn.textContent = prev;
        btn.classList.replace('btn-success', 'btn-outline-primary');
      }, 2000);
    });
  });

  // 9. Обработка быстрых форм во всплывающих окнах
  document.body.addEventListener('submit', (e) => {
    const quickForm = e.target.closest('.modal-quick-order');
    if (quickForm) {
      e.preventDefault();
      quickForm.innerHTML = '<div class="alert alert-success mb-0">Заявка принята! PDF-конспект отправлен на указанный E-mail.</div>';
    }
  });

  // 10. Валидация формы предложения разбора на главной странице
  const orderForm = document.getElementById('order-form');
  const orderSuccess = document.getElementById('order-success');

  if (orderForm) {
    orderForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!orderForm.checkValidity()) {
        orderForm.reportValidity();
        return;
      }
      if (orderSuccess) {
        orderSuccess.hidden = false;
      }
      orderForm.reset();
    });
  }

  updateFavoriteUI();
});