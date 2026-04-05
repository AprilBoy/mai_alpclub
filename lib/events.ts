export type Category = "Все" | "Альпинизм" | "Скалолазание" | "Ледолазание" | "Поход";

export interface Event {
  id: number;
  title: string;
  subtitle: string;
  location: string;
  country: string;
  dates: string;
  month: string;
  difficulty: string;
  category: Exclude<Category, "Все">;
  spotsTotal: number;
  spotsLeft: number;
  price: string;
  image: string;
  description: string;
  tags: string[];
}

export const events: Event[] = [
  {
    id: 1,
    title: "Эльбрус — Западная вершина",
    subtitle: "Высшая точка Европы, маршрут с юга",
    location: "Приэльбрусье",
    country: "Россия",
    dates: "15–28 июля",
    month: "Июль",
    difficulty: "3Б",
    category: "Альпинизм",
    spotsTotal: 8,
    spotsLeft: 3,
    price: "от 45 000 ₽",
    image: "/images/event-elbrus.jpg",
    description:
      "Классическое восхождение на высшую точку Европы и России. Маршрут с юга через приют «Бочки» и «Приют 11». Подходит для подготовленных участников с опытом походов.",
    tags: ["высота 5642 м", "акклиматизация 7 дней", "снаряжение включено"],
  },
  {
    id: 2,
    title: "Скальный лагерь Крым",
    subtitle: "Интенсивный курс скалолазания",
    location: "Судак / Форос",
    country: "Россия",
    dates: "5–18 августа",
    month: "Август",
    difficulty: "5b–6b",
    category: "Скалолазание",
    spotsTotal: 12,
    spotsLeft: 7,
    price: "от 22 000 ₽",
    image: "/images/event-crimea.jpg",
    description:
      "Две недели на лучших крымских маршрутах. Утренние занятия по технике, дневные мультипитчи, разборы вечером. Подходит от 4 категории трудности.",
    tags: ["мультипитч", "обучение страховке", "проживание в лагере"],
  },
  {
    id: 3,
    title: "Фанские горы",
    subtitle: "Основной учебно-спортивный лагерь",
    location: "Артуч",
    country: "Таджикистан",
    dates: "10–25 августа",
    month: "Август",
    difficulty: "4А–5А",
    category: "Альпинизм",
    spotsTotal: 6,
    spotsLeft: 2,
    price: "от 65 000 ₽",
    image: "/images/event-fan.jpg",
    description:
      "Один из самых живописных горных районов Средней Азии. Бирюзовые озёра, острые гребни, сложные ледовые маршруты. Для разрядников и выше.",
    tags: ["выезд за рубеж", "3 восхождения", "горная болезнь — риск"],
  },
  {
    id: 4,
    title: "Ледолазание в Приэльбрусье",
    subtitle: "Зимний интенсив на льду",
    location: "Адыл-Су",
    country: "Россия",
    dates: "20–28 января",
    month: "Январь",
    difficulty: "WI3–WI5",
    category: "Ледолазание",
    spotsTotal: 10,
    spotsLeft: 6,
    price: "от 18 000 ₽",
    image: "/images/event-ice.jpg",
    description:
      "Скальные кулуары, замёрзшие водопады и ледовые стенки Адыл-Су. Базовый и продвинутый курсы параллельно. Прокат кошек и ледорубов включён.",
    tags: ["прокат снаряжения", "от новичка", "зимний лагерь"],
  },
  {
    id: 5,
    title: "Безенги — учебный лагерь",
    subtitle: "Классика советского альпинизма",
    location: "Безенги",
    country: "Россия",
    dates: "1–14 июля",
    month: "Июль",
    difficulty: "2А–4А",
    category: "Альпинизм",
    spotsTotal: 16,
    spotsLeft: 9,
    price: "от 38 000 ₽",
    image: "/images/arch-2.jpg",
    description:
      "Легендарный Безенгийский лагерь у стены высотой почти 5000 м. Программа от новичка до разрядника. Ледник, скалы, первые восхождения.",
    tags: ["для новичков", "от 1А категории", "инструктор в группе"],
  },
  {
    id: 6,
    title: "Домбай — скальный марафон",
    subtitle: "Мультипитч-маршруты и треккинг",
    location: "Домбай",
    country: "Россия",
    dates: "12–20 сентября",
    month: "Сентябрь",
    difficulty: "4b–6a",
    category: "Скалолазание",
    spotsTotal: 10,
    spotsLeft: 5,
    price: "от 28 000 ₽",
    image: "/images/arch-3.jpg",
    description:
      "Гранитные стены Домбая осенью — лучший сезон. Мультипитч до 600 м, однодневные маршруты, скалолазные тренировки в живописных ущельях.",
    tags: ["мультипитч до 600 м", "золотая осень", "трекинг в базовые дни"],
  },
  {
    id: 7,
    title: "Гималаи — Базовый лагерь Эвереста",
    subtitle: "Трекинг к подножию высочайшей горы",
    location: "Намче Базар — EBC",
    country: "Непал",
    dates: "3–20 октября",
    month: "Октябрь",
    difficulty: "Треккинг",
    category: "Поход",
    spotsTotal: 12,
    spotsLeft: 4,
    price: "от 120 000 ₽",
    image: "/images/arch-1.jpg",
    description:
      "Культовый трекинг через долину Кхумбу к базовому лагерю Эвереста на высоте 5364 м. Монастыри, шерпы, яки и панорамы, которые не забыть.",
    tags: ["5364 м над уровнем моря", "перелёт включён", "17 дней"],
  },
  {
    id: 8,
    title: "Кавказ — Зимний поход",
    subtitle: "Снегоступы и лавинная безопасность",
    location: "Чегемское ущелье",
    country: "Россия",
    dates: "10–17 февраля",
    month: "Февраль",
    difficulty: "1Б–2А",
    category: "Поход",
    spotsTotal: 8,
    spotsLeft: 8,
    price: "от 16 000 ₽",
    image: "/images/arch-6.jpg",
    description:
      "Зимний поход по Чегемскому ущелью с обучением лавинной безопасности. Снегоступы, бивуак в снегу, навигация по зимнему рельефу.",
    tags: ["лавинная безопасность", "аренда снегоступов", "малая группа"],
  },
];

export const categories: Category[] = [
  "Все",
  "Альпинизм",
  "Скалолазание",
  "Ледолазание",
  "Поход",
];

export const categoryColors: Record<string, string> = {
  Альпинизм:    "#1b4579",
  Скалолазание: "#2d6fa0",
  Ледолазание:  "#75b5d0",
  Поход:        "#3d7ea6",
};
