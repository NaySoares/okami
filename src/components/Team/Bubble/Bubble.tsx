import {useState} from 'react'
import { RandomAvatar } from "../../../services/RandomAvatar";
import translater from "../../../assets/icons/iconTranslate.png";
import drawer from "../../../assets/icons/iconDrawing.png";
//import developer from '../../../assets/icons/iconDeveloper.png';
import proofreader from "../../../assets/icons/iconProofreading.png";
import "./CardMember.scss";

export function CardMember() {
  return (
    <main className="boxSoup">
      <div className="profile">
        <div className="photo">
          <RandomAvatar />
        </div>
        <div className="text">
          <h3>Axios</h3>
          <h6>Front-end Web Designer</h6>
        </div>
      </div>
      <div className="card">
        
      </div>
    </main>
  );
}
