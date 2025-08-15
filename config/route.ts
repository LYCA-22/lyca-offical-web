export const pages_config = [
  {
    title: "活動資訊",
    isGroup: false,
    link: "/events",
  },
  {
    title: "關於我們",
    isGroup: true,
    children: [
      {
        title: "幹部介紹",
        link: "/about/staff",
        description: "關於本屆學生會幹部",
      },

      {
        title: "我們的使命",
        link: "/about/mission",
        description: "了解我們的使命、責任與目標",
      },
      {
        title: "歷代正副會長",
        link: "/about/history",
        description: "了解我們的歷代正副會長",
      },
    ],
  },
  {
    title: "數位服務",
    isGroup: true,
    children: [
      {
        title: "資料安全",
        link: "/digital/security",
        description: "了解我們如何保護您的資料",
      },
      {
        title: "校園數位化系統",
        link: "/digital/lyps",
        description: "了解我們的校園數位化系統",
      },
    ],
  },
  {
    title: "友好夥伴",
    isGroup: false,
    link: "/partner",
  },
  {
    title: "聯絡我們",
    isGroup: false,
    link: "/contact",
  },
];
