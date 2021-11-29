interface StaffData {
  id: number;
  avatar: string;
  nick: string;
  category: string[];
  up: uploadsProps;
}

interface uploadsProps{
    majoNoTabitabi: number,
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const StaffData: StaffData[] = [
  {
    id: 25,
    avatar: "cover",
    nick: "Axios",
    category: ["Editor"],
    up: {
      majoNoTabitabi: 8,
  }},
  {
    id: 26,
    avatar: "cover",
    nick: "Plon",
    category: ["Editor"],
    up: {
      majoNoTabitabi: 16,
  }},
  {
    id: 27,
    avatar: "cover",
    nick: "Nero",
    category: ["Tradutor"],
    up: {
      majoNoTabitabi: 18,
  }},
  {
    id: 28,
    avatar: "cover",
    nick: "Taiyo",
    category: ["Tradutor"],
    up: {
      majoNoTabitabi: 6,
  }},
  {
    id: 29,
    avatar: "cover",
    nick: "Sin",
    category: ["Revisor"],
    up: {
      majoNoTabitabi: 31,
  }},
  {
    id: 30,
    avatar: "cover",
    nick: "Guilherme",
    category: ["Revisor"],
    up: {
      majoNoTabitabi: 3,
  }},
  {
    id: 31,
    avatar: "cover",
    nick: "Another",
    category: ["Tradutor"],
    up: {
      majoNoTabitabi: 8,
  }},
  {
    id: 32,
    avatar: "cover",
    nick: "Ouro",
    category: ["Tradutor"],
    up: {
      majoNoTabitabi: 11,
  }},
  {
    id: 33,
    avatar: "cover",
    nick: "Bloop",
    category: ["Editor"],
    up: {
      majoNoTabitabi: 9,
  }},
]
