import coverElaina from '../../../assets/images/coverBruxaErranteV6.jpg'
import upload from '../../../assets/icons/iconUploadDark.svg'
import { RandomAvatar } from '../../../services/RandomAvatar';
import { StaffData } from '../../../services/StaffData';


import  './AsideInfo.scss';
//360/540
export function AsideInfo() {

  let randomNumber = Math.floor(Math.random()*StaffData.length);
  if(randomNumber === 0 ){
    randomNumber = 1;
  }
  
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
          {StaffData.slice(0, randomNumber).map((obj => {
            return(
            <div className="member">
              <RandomAvatar />
              <div className="memberInfo">
                <strong>{obj.nick}</strong>
                <p>{obj.category[0]}</p>
              </div>
              <strong>{obj.up.majoNoTabitabi}</strong>
              <img src={upload} alt="icone de up" className="IconUpload" />
            </div>
          )}))}
        </div>
      </div>

    </aside>
  )
}