import { useState } from "react";
import { CardMember } from "../CardMember/CardMember";
import "./ContentStaff.scss";

export function ContentStaff() {
  const [admOn, setAdmOn] = useState(true)
  const [revOn, setRevOn] = useState(false)
  const [tradOn, setTradOn] = useState(false)
  const [editOn, setEditOn] = useState(false)
  const [categActive, setCategActive] = useState("Adm")
  
  const activeChage = (id: string) => {   
    switch (id) {
      case "adm":
        setRevOn(false)        
        setTradOn(false)        
        setEditOn(false)        
        setAdmOn(true)   
        setCategActive("Adm")     
        break;
      case "trad":
        setRevOn(false)        
        setEditOn(false)        
        setAdmOn(false) 
        setTradOn(true)
        setCategActive("Tradutor")        
        break;
      case "rev":
        setEditOn(false)        
        setAdmOn(false) 
        setTradOn(false)
        setRevOn(true)   
        setCategActive("Revisor")     
        break;
      case "edit":
        setRevOn(false)        
        setAdmOn(false) 
        setTradOn(false)
        setEditOn(true)    
        setCategActive("Editor")    
        break;
      default:
        break;
    }
  };

  return (
    <main className="contentStaff">
      <header className="headerStaff">
        <div className="logoStaff">
          <h1>Okami</h1>
          <h2>.</h2>
          <h1>Novels</h1>
        </div>
        <span>
          Okami Novels trabalha com muita dedicação para que todos os nossos
          leitores possam desfrutar de boas leituras, conheça algumas das
          pessoas que tornam isso possível
        </span>
        <button
          className={admOn ? "buttonStaff categActive" : "buttonStaff"}
          onClick={() => activeChage("adm")}
        >
          Administrador
        </button>
        <div className="catergoryStaff">
          <button
            className={
              tradOn ? "buttonStaff categActive" : "buttonStaff"
            }
            onClick={() => activeChage("trad")}
          >
            Tradutor
          </button>
          <button
            className={revOn ? "buttonStaff categActive" : "buttonStaff"}
            onClick={() => activeChage("rev")}
          >
            Revisor
          </button>
          <button
            className={
              editOn ? "buttonStaff categActive" : "buttonStaff"
            }
            onClick={() => activeChage("edit")}
          >
            Editor
          </button>
        </div>
      </header>
      <CardMember categActive={categActive}/>

      <section className="memberStaff">
        <div className="cardMember"></div>
      </section>
    </main>
  );
}
