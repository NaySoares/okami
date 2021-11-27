import React, { useState } from "react";
import "./header.scss";
import menuDark from "../../assets/icons/iconMenuDark.svg";
//import menuLight from "../../assets/icons/iconMenuLight.svg";
import searchDark from "../../assets/icons/iconSearchLight.svg";
import userLoginDark from "../../assets/icons/iconUserLoginDark.svg";
import themeDark from "../../assets/icons/iconThemeDark.svg";

export function Header() {
  const [userLogged, setUserLogged] = useState(true);

  return (
    <div className="headerContainer">
      <button className="btnHeaderTitle">
        <h2 className="headerTitle">Okami</h2>
        <h2 className="headerTitle2">.</h2>
        <h2 className="headerTitle3">Novels</h2>
      </button>
      <button className="btnHeaderMenu">
        <img className="headerMenu" src={menuDark} alt="Icone menu" onClick={() => setUserLogged(!userLogged)}/>
      </button>

      <label className="inputGroup">
        <input className="inputSearch" placeholder="Buscar"></input>
        <button className="btnHeaderSearch">
          <img className="headerSearch" src={searchDark} alt="Icone pesquisa" />
        </button>
      </label>

      <div className="headerInfoUser">
        <button className="btnHeaderTheme">
          <img className="headerTheme" src={themeDark} alt="Icone tema" />
        </button>
        {userLogged ? (
          <>
            <div className="headerDivisor">
              <strong className="userName">Elienai Soares</strong>
              <p className="userEmail">elienay.soares07@gmail.com</p>
            </div>
            <button className="btnHeaderAvatar">
              <img
                className="headerFakeAvatar"
                src="http://github.com/NaySoares.png"
                alt="Imagem Usuário"
              />
            </button>
          </>
        ) : (
          <>
            <button className="btnHeaderLogin">
              <img className="headerLogin" src={userLoginDark} alt="Icone login"/>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
