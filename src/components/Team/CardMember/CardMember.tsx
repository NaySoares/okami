import { useState } from "react";
import { RandomAvatar } from "../../../services/RandomAvatar";
import translater from "../../../assets/icons/iconTranslate.png";
import drawer from "../../../assets/icons/iconDrawing.png";
import developer from "../../../assets/icons/iconDeveloper.png";
import coffee from "../../../assets/icons/iconCoffee.png";
import proofreader from "../../../assets/icons/iconProofreading.png";
import cardElaina from "../../../assets/images/cardElaina.jpg";
import "./CardMember.scss";

export function CardMember() {
  const [isDev, setIsDev] = useState(false);
  return (
    <main className="cardMemberContainer">
      <div className="card">
        <div className="cardUp">
          <img src={cardElaina} alt="background card" className="bgCard" />
          <RandomAvatar />
          <h2 className="titleCard">Axios</h2>
          <div className="mention">
            <p>"</p>
            <span>
              I tell computer what to do, and something they even do it.
            </span>
            <p>"</p>
          </div>
        </div>
        <div className="boxHidden">
          <h2>Colaborações</h2>
          <div className="divisor" />
          {isDev ? (
            <section className="categCard">
              <div className="miniBox">
                <div className="miniBoxImg">
                  <img src={translater} alt="icone" />
                </div>
                <div className="infoMinibox">
                  <strong>11.5k</strong>
                  <p>Palavras Traduzidas</p>
                </div>
              </div>
              <div className="miniBox">
                <div className="miniBoxImg">
                  <img src={proofreader} alt="icone" />
                </div>
                <div className="infoMinibox">
                  <strong>11.5k</strong>
                  <p>Palavras Revisadas</p>
                </div>
              </div>
              <div className="miniBox">
                <div className="miniBoxImg">
                  <img src={drawer} alt="icone" />
                </div>
                <div className="infoMinibox">
                  <strong>11.5k</strong>
                  <p>Imagens Editadas</p>
                </div>
              </div>
            </section>
          ) : (
            <section className="categCard">
              <div className="miniBox">
                <div className="miniBoxImg">
                  <img src={developer} alt="icone" />
                </div>
                <div className="infoMinibox">
                  <strong>53Hrs</strong>
                  <p>Horas de código</p>
                </div>
              </div>
              <div className="miniBox">
                <div className="miniBoxImg">
                  <img src={coffee} alt="icone" />
                </div>
                <div className="infoMinibox">
                  <strong>0.6L</strong>
                  <p>Litros de Café</p>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
