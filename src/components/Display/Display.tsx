import React from "react";

import slide01 from "../../assets/images/carousel-01.jpg";
import slide02 from "../../assets/images/carousel-02.jpg";
import slide03 from "../../assets/images/carousel-03.jpg";

import "./display.scss";

export function DisplayCase() {
  // var quant = document.querySelectorAll('.displayContainer .image')
  // var img = document.getElementById('currentImg')
  // var current = '0'
  
  // var pos = document.querySelectorAll('.progressBalls div')
  

  // for(let i = 0; i < pos.length; i++){
  //   pos[i].addEventListener('click', ()=>{
  //     current = `${pos[i].id}`
  //     slide()
  //   })
  // }

  // function slide(){
  //   let currentNumb = parseInt(current)
  //   if( currentNumb >= quant.length ){
  //     currentNumb = 0
  //   } else if( currentNumb < quant.length){
  //     currentNumb = quant.length-1
  //   }
  //   document.querySelector('.currentImg')?.classList.remove('currentImg')
  //   if(img){
  //     img.style.marginLeft = -870*currentNumb+'px'
  //   } 
  //   document.querySelector(`${current}`)?.classList.add('currentImg')
  // }
    const img = Array.from(document.getElementsByClassName('image') as HTMLCollectionOf<HTMLElement>)
    
  return (
    <div className="displayCarouselActive">
      <div className="displayContainer">
        <div id="current" className="image">
          <img src={slide01} alt="Imagem em Slide" />
        </div>

        <div id="current1" className="image">
          <img src={slide02} alt="Imagem em Slide" />
        </div>

        <div id="curren2" className="image">
          <img src={slide03} alt="Imagem em Slide" />
        </div>
      </div>
      <div className="progressBalls">
        <div className="currentImg" id="0" style={{backgroundColor: "blue"}}></div>
        <div id="1"></div>
        <div id="2"></div>
      </div>
    </div>
  );
}

/*
<div id="current" className="image">
  <img src={slide01} alt="Imagem em Slide"/>
  <h1 className="displayTitle">Mushoku Tensei</h1>
  <p className="displayText">Reencarnado e bla bla bla</p>
  <a href="#" className="displayLink">Ler Agora</a>
</div>
*/
