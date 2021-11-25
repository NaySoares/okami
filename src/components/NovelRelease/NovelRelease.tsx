import React from 'react';

import { NovelReleaseData } from '../../services/NovelaRealeaseData';
import './NovelRelease.scss'

const nav = (id: number) => {
  alert(`você será navegado para o id: ${id}`)
}

export function NovelRelease() {
  return( 
    <div className="releaseContainer">
      <h2 className="releaseTitle">Últimos Lançamentos</h2>
      <div className="releaseContent">
        {NovelReleaseData.map((obj) => {
          return(
          <div className="releaseWork" key={obj.id}>
            <div className="releaseContentRow" onClick={() => nav(obj.id)}>
              <img src={obj.img} alt="Capa da Obra" className="releaseImg" />
              <div className="releaseInfo">
                <strong className="releaseT">{obj.title}</strong>
                <p className="releaseP">{obj.type}</p>
                <p className="releaseP">{obj?.scan}</p>
              </div>
            </div>
          </div>
        )})}
      </div>
    </div>
  )
}