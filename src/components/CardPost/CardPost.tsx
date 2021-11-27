import React from 'react';

import { TopPostData } from '../../services/TopPostData';
import './CardPost.scss'

export function CardPost() {
  
  const textButton = "Ver Mais >";

  return(
    <div className="cardPostContainer">
      <header className="cardPostHeader">
        <h2>Blog Tsun</h2>
        <a href='#'>
          <strong>{textButton}</strong>
        </a>
      </header>
      <div className="cardPostContent">
        {TopPostData.map((obj => {
          return(
            <>
              {obj.statusCard && 
                <div className="cardPost" key={obj.id}>
                  <img src={obj.img} alt="Imagem do Post" className="cardPostImg" />
                  <p className="cardPostDate">{obj.date}</p>
                  <h2 className="cardPostTitle">{obj.title}</h2>
                  <p className="cardPostDescription">{obj.description}</p>
                  <footer className="cardPostFooter">
                    <img src={obj.imgAuthor} alt="Avatar do Autor" />
                    <strong>{obj.author}</strong>
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