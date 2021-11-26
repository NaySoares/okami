import React from 'react';

import { NovelData } from '../../services/NovelData';
import './NovelList.scss'

const nav = (id: number) => {
  alert(`você será navegado para o id: ${id}`)
}

export function NovelList() {
  
  const textButton = "Ver Mais >";

  return(
    <div className="novelListContainer">
      <header className="novelListHeader">
        <h2>Light Novels</h2>
        <a href='#'>
          <strong>{textButton}</strong>
        </a>
      </header>
      <div className="novelListContent">
        {NovelData.map((obj => {
          return(
            <>
              {obj.statusTop && 
                <div className="cardNovelList" key={obj.id}>
                  <img src={obj.img} alt="Imagem do Post" />
                  <footer className="cardNovelListFooter">
                    <h2 className="cardPostTitle">{obj.title}</h2>
                    <p>{obj.currentVol}</p>
                    <p>{obj.currentCap}</p>
                  </footer>
                </div>
              }
            </>
          )
        }))}
      </div>
    </div>
  )
}