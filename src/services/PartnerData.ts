import cover01 from "../assets/images/coverPleiades.jpg";
import cover02 from "../assets/images/cover3lobos.jpg";
import cover03 from "../assets/images/coverReborn.jpg";

interface PartnerData {
  id: number;
  img: string;
  title: string;
  link: string;
}

export const PartnerData: PartnerData[] = [
  {
    id: 17,
    img: cover01,
    title: "Pleiades Translations",
    link: "#",
  },
  {
    id: 18,
    img: cover02,
    title: "3 Lobos",
    link: "#",
  },
  {
    id: 19,
    img: cover03,
    title: "Reborn Scan",
    link: "#",
  },
]
