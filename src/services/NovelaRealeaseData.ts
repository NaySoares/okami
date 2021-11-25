import cover01 from "../assets/images/coverMoshukoTensei.png";
import cover02 from "../assets/images/coverSuaHistoria.jpg";
import cover03 from "../assets/images/coverMajoNoTabitabi.png";

interface NovelReleaseDataProps {
  id: number;
  img: string;
  title: string;
  type: string;
  scan?: string;
}

export const NovelReleaseData: NovelReleaseDataProps[] = [
  {
    id: 1,
    img: cover01,
    title: "Mushoku Tensei",
    type: "Light Novel",
    scan: "Tsundoku traduções"
  },
  {
    id: 2,
    img: cover02,
    title: "Sua História",
    type: "Light Novel",
    scan: "Tsundoku traduções"
  },
  {
    id: 3,
    img: cover03,
    title: "Bruxa Errante",
    type: "Light Novel",
    scan: "Tsundoku traduções"
  },
]
