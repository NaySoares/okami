interface SupporterData {
  id: number;
  img: string;
  nick: string;
  level: string;
  king: boolean;
  active: boolean;
  initial: string[];
  finish: string[];
}

export const SupporterData: SupporterData[] = [
  {
    id: 22,
    img: "img",
    nick: "Apollo",
    level: "Torre",
    king: false,
    active: true,
    initial: ["23/05/2021"],
    finish: [],
  },
  {
    id: 23,
    img: "img",
    nick: "Enrig",
    level: "Bispo",
    king: true,
    active: true,
    initial: ["03/01/2021"],
    finish: [],
  },
  {
    id: 24,
    img: "img",
    nick: "Relover",
    level: "Cavalo",
    king: false,
    active: true,
    initial: ["14/07/2021"],
    finish: [],
  },
]
