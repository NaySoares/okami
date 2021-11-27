import discordDark from '../../assets/icons/iconDiscordDark.svg';
import facebookDark from '../../assets/icons/iconFacebookDark.svg';
import twitterDark from '../../assets/icons/iconTwitterDark.svg';

import './Footer.scss'

export function Footer() {
  return(
    <footer className="mainFooter">
      <section className="socialFooter">
        <a href="#">
          <img src={discordDark} alt="Icone do Discord" />
        </a>
        <a href="#">
          <img src={facebookDark} alt="Icone do Facebook" />
        </a>
        <a href="#">
          <img src={twitterDark} alt="Icone do Twitter" />
        </a>
      </section>
      <ul className="menuFooter">
        <li>
          <a href="#">Light Novel</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Equipe</a>
        </li>
        <li>
          <a href="#">Apoio</a>
        </li>
      </ul>
      <strong>Copyright © 2021 Okami</strong>
    </footer>
  )
}