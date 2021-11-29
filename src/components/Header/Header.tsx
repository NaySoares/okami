import React, { useState } from "react";
import "./header.scss";
import menuDark from "../../assets/icons/iconMenuDark.svg";
//import menuLight from "../../assets/icons/iconMenuLight.svg";
import searchDark from "../../assets/icons/iconSearchLight.svg";
import userLoginDark from "../../assets/icons/iconUserLoginDark.svg";
//import closeDark from "../../assets/icons/iconCloseDark.svg";
import themeDark from "../../assets/icons/iconThemeDark.svg";

export function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userLogged, setUserLogged] = useState(true);
  const [activeMenu, setActiveMenu] = useState(-700)

  const openModal = () => {
    activeMenu === -700 ? setActiveMenu(0) : setActiveMenu(-700);
  }
  
  return (
    <div className="headerContainer">
      
      <div className="modalMenuContainer" style={{left: `${activeMenu}%`}}>
        <label className="labelModalMenu" onClick={() => openModal()}>
          <h2>Okami</h2>
          <h2 className="modalMenuDot">.</h2>
          <h2>Novels</h2>
          <h2 className="modalMenuClose">x</h2>
         </label>
        <ul>
          <a href="foo">
            <li>Light Novel</li>
          </a>
          <a href="foo">
            <li>Blog</li>
          </a>
          <a href="foo">
            <li>Equipe</li>
          </a>
          <a href="foo">
            <li>Apoio</li>
          </a>
        </ul>
      </div>

      <button className="btnHeaderTitle">
        <h2>Okami</h2>
        <h2 className="headerDot">.</h2>
        <h2>Novels</h2>
      </button>
      <button className="btnHeaderMenu">
        <img src={menuDark} alt="Icone menu" onClick={() => openModal()}/>
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
