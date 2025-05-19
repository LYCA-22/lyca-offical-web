interface gameItem {
  round: string;
  classA: string;
  classB: string;
  start: boolean;
  aScore: number;
  bScore: number;
  detailScore?: gameScore;
  place: string;
  time: string;
}

interface gameScore {
  A1: number;
  A2: number;
  A3: number;
  B1: number;
  B2: number;
  B3: number;
}

export const gameSchema: gameItem[] = [
  {
    round: "(ㄧ)",
    classA: "三忠",
    classB: "一愛",
    start: true,
    aScore: 1,
    bScore: 2,
    detailScore: {
      A1: 14,
      A2: 15,
      A3: 6,
      B1: 15,
      B2: 8,
      B3: 15,
    },
    time: "2025/05/12 10:10",
    place: "A",
  },
  {
    round: "(二)",
    classA: "三仁",
    classB: "一信",
    start: true,
    aScore: 2,
    bScore: 0,
    detailScore: {
      A1: 15,
      A2: 15,
      A3: 0,
      B1: 14,
      B2: 12,
      B3: 0,
    },
    time: "2025/05/07",
    place: "A",
  },
  {
    round: "(三)",
    classA: "二仁",
    classB: "一仁",
    start: true,
    aScore: 1,
    bScore: 2,
    detailScore: {
      A1: 7,
      A2: 15,
      A3: 11,
      B1: 15,
      B2: 13,
      B3: 15,
    },
    time: "2025/05/07",
    place: "B",
  },
  {
    round: "(四)",
    classA: "三孝",
    classB: "一義",
    start: true,
    aScore: 2,
    bScore: 0,
    detailScore: {
      A1: 15,
      A2: 15,
      A3: 0,
      B1: 10,
      B2: 11,
      B3: 0,
    },
    time: "2025/05/12 10:10",
    place: "B",
  },
  {
    round: "(五)",
    classA: "一愛",
    classB: "三愛",
    start: true,
    aScore: 2,
    bScore: 0,
    detailScore: {
      A1: 15,
      A2: 15,
      A3: 0,
      B1: 8,
      B2: 12,
      B3: 0,
    },
    time: "2025/05/12 10:50",
    place: "A",
  },
  {
    round: "(六)",
    classA: "三仁",
    classB: "二忠",
    start: true,
    aScore: 0,
    bScore: 2,
    detailScore: {
      A1: 12,
      A2: 9,
      A3: 0,
      B1: 15,
      B2: 15,
      B3: 0,
    },
    time: "2025/05/07",
    place: "A",
  },
  {
    round: "(七)",
    classA: "一仁",
    classB: "二愛",
    start: true,
    aScore: 2,
    bScore: 1,
    detailScore: {
      A1: 5,
      A2: 15,
      A3: 15,
      B1: 15,
      B2: 4,
      B3: 6,
    },
    time: "2025/05/12 10:10",
    place: "C",
  },
  {
    round: "(九)",
    classA: "一愛",
    classB: "二忠",
    start: false,
    aScore: 0,
    bScore: 0,
    time: "2025/05/19 10:10",
    place: "A",
  },
  {
    round: "(十)",
    classA: "一仁",
    classB: "三孝",
    start: false,
    aScore: 0,
    bScore: 0,
    time: "2025/05/19 10:10",
    place: "B",
  },
  {
    round: "(十一)",
    classA: "（九）敗",
    classB: "（十）敗",
    start: false,
    aScore: 0,
    bScore: 0,
    time: "2025/05/19 10:50",
    place: "C",
  },
  {
    round: "(十二)",
    classA: "（九）勝",
    classB: "（十）勝",
    start: false,
    aScore: 0,
    bScore: 0,
    time: "2025/05/19 10:50",
    place: "D",
  },
];
