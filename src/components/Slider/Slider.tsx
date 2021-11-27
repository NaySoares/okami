import React, { useState } from "react";
import arrowL from '../../assets/icons/iconArrowL.svg';
import arrowR from '../../assets/icons/iconArrowR.svg';
import { SliderData } from "../../services/SliderData";

import './slider.scss'

export function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [jump, setJump] = useState(true);

  const nextSlide = () => {
    if(slideIndex !== SliderData.length){
      setJump(false)
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === SliderData.length){
      setJump(false)
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if(slideIndex !== 1){
      setJump(false)
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1){
      setJump(false)
      setSlideIndex(SliderData.length)
    }
  }

  setTimeout(() =>{
    jump ? nextSlide() : setJump(true);
  }, 4000)

  const moveDot = (index: number) => {
    setSlideIndex(index)
  }

  const nav = (index: number) => {
    alert(`você será enviado pra página do index: ${index}`)
  }
  return(
    <div className="container-slider">
      {SliderData.map((slide, index)=> {
        return(
          <div
          key={slide.id}
          onClick={() => nav(slideIndex)}
          className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            {slideIndex === index + 1 && (
              <>
                <img src={slide.img} alt="slide" />
                <div className="infosSlider">
                  <strong>{slide.title}</strong>
                  <p>{slide.message}</p>
                  <a href="#" className="linkSlide">Ler Agora</a>
                </div>
              </>
            )}
          </div>
        )
      })}
      <div className="container-dots">
        {Array.from({length: 3}).map((item, index) =>(
          <div
          key={index}
          onClick={() => moveDot(index + 1)}
          className={slideIndex === index + 1 ? "dot active" : "dot"}>
          </div>
        ))}
      </div>
      <div className="nextSlide">
        <img
          src={arrowR}
          alt="Seta de Navegação"
          onClick={() => nextSlide()}
        />
      </div>
      <div className="prevSlide">
        <img
          src={arrowL}
          alt="Seta de Navegação"
          onClick={() => prevSlide()}
        />
      </div>
    </div>
  )
}