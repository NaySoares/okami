import cover01 from "../assets/images/coverPleiades.jpg";
import cover02 from "../assets/images/cover3lobos.jpg";
import cover03 from "../assets/images/coverReborn.jpg";

interface PartnerData {
  id: number;
  img: string;
  title: string;
  link: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PartnerData: PartnerData[] = [
  {
    id: 17,
    img: cover01,
    title: "Pleiades Translations",
    link: "#foo",
  },
  {
    id: 18,
    img: cover02,
    title: "3 Lobos",
    link: "#foo",
  },
  {
    id: 19,
    img: cover03,
    title: "Reborn Scan",
    link: "#foo",
  },
]
