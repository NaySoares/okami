import slide01 from "../../assets/images/carousel-01.jpg";
import slide02 from "../../assets/images/carousel-02.jpg";
import slide03 from "../../assets/images/carousel-03.jpg";

interface SliderProps {
  id: number;
  img: string;
  title: string;
  message: string;
}

export const SliderData: SliderProps[] = [
  {
    id: 8,
    img: slide01,
    title: "Mushoku Tensei",
    message: "Com o fim da segunda temporada de Mushoku Tensei, não deixe de acompanhar toda a aventura de Rudy na obra original!" 
  },
  {
    id: 9,
    img: slide02,
    title: "Bruxa Errante",
    message: "Elaina continua sua incrível jornada cheia de aventuras e pães, esse é o 6 volume de sua história" 
  },
  {
    id: 10,
    img: slide03,
    title: "Re:Zero",
    message: "Com Rem ainda em sono profundo, Subaru busca novas formas de trazer sua tão queria amiga ao normal" 
  },
]
