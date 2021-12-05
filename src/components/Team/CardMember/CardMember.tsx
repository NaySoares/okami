import { RandomAvatar } from "../../../services/RandomAvatar";
import translater from "../../../assets/icons/iconTranslate.png";
import drawer from "../../../assets/icons/iconDrawing.png";
import developer from "../../../assets/icons/iconDeveloper.png";
import coffee from "../../../assets/icons/iconCoffee.png";
import proofreader from "../../../assets/icons/iconProofreading.png";

import { StaffData } from "../../../services/StaffData";
import { RandomCoverCard } from "../../../services/RandomAvatar";
import "./CardMember.scss";


interface CardMember {
  categActive: string;
}
// eslint-disable-next-line @typescript-eslint/no-redeclare
export function CardMember({ categActive }: CardMember) {
  return (
    <main className="cardMemberContainer">
      {StaffData.map((member) => {
        return (
          <div className="overCard" key={member.id}>
            {member.category.includes(categActive) && (
              <div className="card">
                <div className="cardUp">
                  <img
                    src={RandomCoverCard()}
                    alt="background card"
                    className="bgCard"
                  />
                  <RandomAvatar />
                  <h2 className="titleCard">{member.nick}</h2>
                  <div className="mention">
                    <p>"</p>
                    <span>{member.msg}</span>
                    <p>"</p>
                  </div>
                </div>

                <div className="boxHidden">
                  <h2>Colaborações</h2>
                  <div className="divisor" />
                  {!member.dev.status ? (
                    <section className="categCard">
                      <div className="miniBox">
                        <div className="miniBoxImg">
                          <img src={translater} alt="icone" />
                        </div>
                        <div className="infoMinibox">
                          <strong>{member.trad ? ((member.trad)/1000).toFixed(1) : 0}K</strong>
                          <p>Palavras Traduzidas</p>
                        </div>
                      </div>
                      <div className="miniBox">
                        <div className="miniBoxImg">
                          <img src={proofreader} alt="icone" />
                        </div>
                        <div className="infoMinibox">
                          <strong>{member.proof ? ((member.proof)/1000).toFixed(1) : 0}K</strong>
                          <p>Palavras Revisadas</p>
                        </div>
                      </div>
                      <div className="miniBox">
                        <div className="miniBoxImg">
                          <img src={drawer} alt="icone" />
                        </div>
                        <div className="infoMinibox">
                          <strong>{member.draw ? member.draw : 0}</strong>
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
                          <strong>{member.dev.code} Hrs</strong>
                          <p>Horas de código</p>
                        </div>
                      </div>
                      <div className="miniBox">
                        <div className="miniBoxImg">
                          <img src={coffee} alt="icone" />
                        </div>
                        <div className="infoMinibox">
                          <strong>{(Number(member.dev.coffee)/1000)}L</strong>
                          <p>Litros de Café</p>
                        </div>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </main>
  );
}
