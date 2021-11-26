import cover01 from "../assets/images/coverPost01.jpg";
import cover02 from "../assets/images/coverPost02.jpg";
import cover03 from "../assets/images/coverPost03.jpg";
import cover04 from "../assets/images/coverPost04.jpg";
import cover05 from "../assets/images/coverPost05.jpg";
import cover06 from "../assets/images/coverPost06.jpg";

interface TopPostProps {
  id: number;
  img: string;
  title: string;
  type: string;
  subtype: string;
  description: string;
  date: string;
  author: string;
  imgAuthor: string;
  statusCard: boolean;
  statusTop: boolean;
}

export const TopPostData: TopPostProps[] = [
  {
    id: 4,
    img: cover01,
    title: "Temporada de Inverno",
    type: "Post",
    subtype: "Análise",
    description: "Mais uma temporada de animes chegando e temos alguns conhecidos entre eles, venha conferir o que estamos esperando dessa temporada",
    date: "8 de Novembro de 2021",
    author: "Axios",
    imgAuthor: "Axios",
    statusTop: true,
    statusCard: false,
  },
  {
    id: 5,
    img: cover02,
    title: "Devaneio #16: Mais um dias sobo olhar do vigia",
    type: "Post",
    subtype: "Devaneio",
    description: "Devaneio novo chegando!",
    date: "8 de Novembro de 2021",
    author: "Plon",
    imgAuthor: "Plon",
    statusTop: true,
    statusCard: false,  
  },
  {
    id: 6,
    img: cover03,
    title: "TsunCats: Mushoku Tensei",
    type: "Post",
    subtype: "TsunCast",
    description: "Um bate papo com a galera que traduz Moshuko Tensei",
    date: "8 de Novembro de 2021",
    author: "Axios",
    imgAuthor: "Axios",
    statusTop: true,
    statusCard: false,
  },
  {
    id: 7,
    img: cover04,
    title: "Panini, NewPop, JBC: Light Novels no Brasil",
    type: "Post",
    subtype: "Análise",
    description: "Todas as Light Novels já publicadas no Brasil e um pouquinho sobre as que vem por aí",
    date: "8 de Novembro de 2021",
    author: "Axios",
    imgAuthor: "Axios",
    statusTop: true,
    statusCard: false,
  },
  {
    id: 11,
    img: cover05,
    title: "Bate papo com parceiros: Plaiades Translations",
    type: "Post",
    subtype: "Análise",
    description: "É a vez do nosso mais novo parceiro: Pleiades, falamos do que esperamos para o futuro e, claro, aquele conversa de bar sobre Re:zero e quantas vezes o Subaru ainda vai bater as botas.",
    date: "15 de Novembro de 2021",
    author: "Axios",
    imgAuthor: "https://github.com/NaySoares.png",
    statusTop: false,
    statusCard: true,
  },
  {
    id: 12,
    img: cover06,
    title: "Devaneio #17: Hashire sori yokaze no you ni...",
    type: "Post",
    subtype: "Devaneio",
    description: "Aaah.. O doce e reconfortante clima natalino. Vem conferir com a gente mais uma edição do nosso querido devaneio, e fique por dentro de tudo que anda rolando no nosso servidor (até nos canais que você não ver).",
    date: "19 de Novembro de 2021",
    author: "Plon",
    imgAuthor: "https://github.com/NaySoares.png",
    statusTop: false,
    statusCard: true,
  },
]
