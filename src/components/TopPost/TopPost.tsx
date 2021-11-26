import React from 'react';

import { TopPostData } from '../../services/TopPostData';
import './TopPost.scss'

const nav = (id: number) => {
  alert(`você será navegado para o id: ${id}`)
}

export function TopPost() {
  return( 
    <div className="releaseContainerPost">
      <h2 className="releaseTitlePost">Posts Destaque</h2>
      <div className="releaseContentPost">
        {TopPostData.map((obj) => {
          return (
            <div className="releaseWorkPost" key={obj.id}>
              {obj.statusTop &&
                <div className="releaseContentRowPost" onClick={() => nav(obj.id)}>
                  <img src={obj.img} alt="Capa do Post" className="releaseImgPost" />
                  <div className="releaseInfoPost">
                    <strong className="releaseTPost">{obj.title}</strong>
                    <p className="releasePPost">{obj.date}</p>
                  </div>
                </div>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}