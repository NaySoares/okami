import discordDark from '../../assets/icons/iconDiscordDark.svg';
import facebookDark from '../../assets/icons/iconFacebookDark.svg';
import twitterDark from '../../assets/icons/iconTwitterDark.svg';

import './Footer.scss'

export function Footer() {
  return(
    <footer id="foo" className="mainFooter">
      <section className="socialFooter">
        <a href="#foo">
          <img src={discordDark} alt="Icone do Discord" />
        </a>
        <a href="#foo">
          <img src={facebookDark} alt="Icone do Facebook" />
        </a>
        <a href="#foo">
          <img src={twitterDark} alt="Icone do Twitter" />
        </a>
      </section>
      <ul className="menuFooter">
        <li>
          <a href="#foo">Light Novel</a>
        </li>
        <li>
          <a href="#foo">Blog</a>
        </li>
        <li>
          <a href="#foo">Equipe</a>
        </li>
        <li>
          <a href="#foo">Apoio</a>
        </li>
      </ul>
      <strong>Copyright © 2021 Okami</strong>
    </footer>
  )
}