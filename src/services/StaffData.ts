interface StaffData {
  id: number;
  avatar: string;
  nick: string;
  category: string[];
  up: uploadsProps;
  draw?: number;
  trad?: number;
  proof?: number;
  dev: DevProps;
  adm: boolean;
  msg: string;
  coverCard: string;
}
interface DevProps {
  status: boolean;
  coffee?: number;
  code?: number;
}
interface uploadsProps {
  majoNoTabitabi: number;
}

const randomNumber = Math.floor(Math.random() * 1000);
// eslint-disable-next-line @typescript-eslint/no-redeclare
export const StaffData: StaffData[] = [
  {
    id: 25,
    avatar: "cover",
    nick: "Axios",
    category: ["Dev"],
    up: {
      majoNoTabitabi: 8,
    },
    adm: true,
    draw: 86,
    trad: 1000,
    proof: 2600,
    dev: {
      status: true,
      coffee: 7500,
      code: 56,
    },
    msg: "I tell computer what to do, and something they even do it.",
    coverCard: "teste",
  },
  {
    id: 26,
    avatar: "cover",
    nick: "Plon",
    category: ["Editor"],
    up: {
      majoNoTabitabi: 16,
    },
    adm: false,
    draw: 230,
    proof: 600,
    dev: {
      status: false,
    },
    msg: "Venci na Vida!",
    coverCard: "teste",
  },
  {
    id: 27,
    avatar: "cover",
    nick: "Nero",
    category: ["Tradutor"],
    up: {
      majoNoTabitabi: 18,
    },
    adm: false,
    trad: randomNumber,
    dev: {
      status: false,
    },
    msg: "O que você faz em vida ecoa pela eternidade.",
    coverCard: "teste",
  },
  {
    id: 28,
    avatar: "cover",
    nick: "Taiyo",
    category: ["Tradutor", "Revisor", "Adm"],
    up: {
      majoNoTabitabi: 6,
    },
    adm: true,
    draw: 50,
    trad: randomNumber,
    proof: randomNumber,
    dev: {
      status: false,
    },
    msg: "Fake love is worse than real hate",
    coverCard: "teste",
  },
  {
    id: 29,
    avatar: "cover",
    nick: "Sin",
    category: ["Revisor"],
    up: {
      majoNoTabitabi: 31,
    },
    adm: false,
    proof: randomNumber,
    dev: {
      status: false,
    },
    msg: "Rejeite o bom senso para torna o impossível possível",
    coverCard: "teste",
  },
  {
    id: 30,
    avatar: "cover",
    nick: "Guilherme",
    category: ["Revisor"],
    up: {
      majoNoTabitabi: 3,
    },
    adm: false,
    proof: randomNumber,
    dev: {
      status: false,
    },
    msg: "Somos todos viajantes em uma estrada de pontos infinitos.",
    coverCard: "teste",
  },
  {
    id: 31,
    avatar: "cover",
    nick: "Another",
    category: ["Tradutor"],
    up: {
      majoNoTabitabi: 8,
    },
    adm: false,
    trad: randomNumber,
    dev: {
      status: false,
    },
    msg: "Você não conhece as pessoas, você conhece apenas o que elas permitem que você veja",
    coverCard: "teste",
  },
  {
    id: 32,
    avatar: "cover",
    nick: "Ouro",
    category: ["Tradutor"],
    up: {
      majoNoTabitabi: 11,
    },
    adm: false,
    trad: randomNumber,
    dev: {
      status: false,
    },
    msg: "That things we call failure it`s not falling down, but staying down",
    coverCard: "teste",
  },
  {
    id: 33,
    avatar: "cover",
    nick: "Bloop",
    category: ["Editor"],
    up: {
      majoNoTabitabi: 9,
    },
    adm: false,
    draw: 34,
    dev: {
      status: false,
    },
    msg: "Kayo, por que me xingas?",
    coverCard: "teste",
  },
  {
    id: 34,
    avatar: "cover",
    nick: "Bravo",
    category: ["Dev"],
    up: {
      majoNoTabitabi: 0,
    },
    adm: true,
    dev: {
      status: true,
      coffee: 2100,
      code: 98,
    },
    msg: "Pense positivo e deixe o universo fazer o seu trabalho",
    coverCard: "teste",
  },
];
