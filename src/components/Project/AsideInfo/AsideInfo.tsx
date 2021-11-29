import coverElaina from '../../../assets/images/coverBruxaErranteV6.jpg'
import upload from '../../../assets/icons/iconMenuDark.svg'
import { RandomAvatar } from '../../../services/RandomAvatar';

import  './AsideInfo.scss';
//360/540
export function AsideInfo() {
  return(
    <aside className="asideContainer">
      <img src={coverElaina} alt="Imagem Projeto" className="primaryImg"/>
      
      <div className="asideExtra">
        <h2>Conteúdo Extra</h2>
        <div className="asideExtraContent">
          <img src={coverElaina} alt="mídia extra" />
          <strong>Trailer Ofícial do Anime</strong>
        </div>
      </div>

      <div className="asideStaff">
        <h2>Equipe</h2>
        <div className="asideStaffContent">
          <div className="member">
            <RandomAvatar />
            <div className="memberInfo">
              <strong>Axios</strong>
              <p>Editor</p>
            </div>
            <strong>8</strong>
            <img src={upload} alt="icone de up" className="IconUpload" />
          </div>
        </div>
      </div>

    </aside>
  )
}