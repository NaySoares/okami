import React from 'react';

import { PartnerData } from '../../../services/PartnerData';
import './CardPartner.scss'

export function CardPartner() {
  
  const textButton = "Ver Mais >";

  return(
    <div className="partnerContainer">
      <header className="partnerHeader">
        <h2>Parceiros</h2>
        <a href='#foo'>
          <strong>{textButton}</strong>
        </a>
      </header>
      <div className="partnerContent">
        {PartnerData.map((obj => {
          return( 
            <div className="cardPartner" key={obj.id}>
              <img src={obj.img} alt="Imagem do Post" />
              <h2 className="cardPartnerTitle">{obj.title}</h2>
              <a className="cardPartnerLink" href="#foo">Conhecer Parceiro</a>
            </div>
          )
        }))}
      </div>
    </div>
  )
}