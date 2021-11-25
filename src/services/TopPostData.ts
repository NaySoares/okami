import cover01 from "../assets/images/coverPost01.jpg";
import cover02 from "../assets/images/coverPost02.jpg";
import cover03 from "../assets/images/coverPost03.jpg";
import cover04 from "../assets/images/coverPost04.jpg";

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
  },
  {
    id: 6,
    img: cover03,
    title: "TsunCats: Mushoku Tensei",
    type: "Post",
    subtype: "TsunCats",
    description: "Um bate papo com a galera que traduz Moshuko Tensei",
    date: "8 de Novembro de 2021",
    author: "Axios",
    imgAuthor: "Axios",
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
  },
]
