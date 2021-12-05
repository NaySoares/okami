import { useNavigate } from 'react-router';
import discordDark from '../../assets/icons/iconDiscordDark.svg';
import facebookDark from '../../assets/icons/iconFacebookDark.svg';
import twitterDark from '../../assets/icons/iconTwitterDark.svg';

import './Footer.scss'

export function Footer() {

  const navigate = useNavigate();
  const nav = (id:string) => {
    navigate(`/${id}`)
  } 

  return(
    <footer id="foo" className="mainFooter">
      <section className="socialFooter">
        <p onClick={() => nav("team")}>
          <img src={discordDark} alt="Icone do Discord" />
        </p>
        <p onClick={() => nav("team")}>
          <img src={facebookDark} alt="Icone do Facebook" />
        </p>
        <p onClick={() => nav("team")}>
          <img src={twitterDark} alt="Icone do Twitter" />
        </p>
      </section>
      <ul className="menuFooter">
        <li>
          <p onClick={() => nav("team")}>Light Novel</p>
        </li>
        <li>
          <p onClick={() => nav("team")}>Blog</p>
        </li>
        <li>
          <p onClick={() => nav("team")}>Equipe</p>
        </li>
        <li>
          <p onClick={() => nav("team")}>Apoio</p>
        </li>
      </ul>
      <strong>Copyright © 2021 Okami</strong>
    </footer>
  )
}