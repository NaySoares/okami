import { useNavigate } from 'react-router';
import upload from "../../../assets/icons/iconUploadDark.svg";
import { RandomAvatar } from "../../../services/RandomAvatar";
import { StaffData } from "../../../services/StaffData";
import { YouTubePlayer } from "../YoutubePlayer/YoutubePlayer";
import { NovelData } from "../../../services/NovelData";

import "./AsideInfo.scss";
interface currentProps {
  currentId: number;
}

export function AsideInfo({ currentId }: currentProps) {
  const currentWork = NovelData.filter((obj) => obj.id === currentId);
  let randomNumber = Math.floor(Math.random() * StaffData.length);
  if (randomNumber === 0) {
    randomNumber = 1;
  }

  const navigate = useNavigate();
  const nav = (params: number | string) => {
    navigate(`/${params}`)
  }

  return (
    <aside className="asideContainer">
      <img
        src={currentWork[0].img}
        alt="Imagem Projeto"
        className="primaryImg"
      />

      {currentWork[0].extra && (
        <div className="asideExtra">
          <h2>Conteúdo Extra</h2>
          <div className="asideExtraContent">
            <YouTubePlayer videoId={currentWork[0].contentExtra} />
            <strong>Trailer Oficial do Anime</strong>
          </div>
        </div>
      )}
      <div className="asideStaff">
        <h2>Equipe</h2>
        <div className="asideStaffContent" onClick={() => nav("staff")}>
          {StaffData.slice(0, randomNumber).map((obj) => {
            return (
              <div className="member" key={obj.id}>
                <RandomAvatar />
                <div className="memberInfo">
                  <strong>{obj.nick}</strong>
                  <p>{obj.category[0]}</p>
                </div>
                <strong>{obj.up.majoNoTabitabi}</strong>
                <img src={upload} alt="icone de up" className="IconUpload" />
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
