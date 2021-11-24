import React, { useState } from "react";
import { SliderData } from "./SliderData";

import './slider.scss'

export function Slider() {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if(slideIndex !== SliderData.length){
      setSlideIndex(slideIndex + 1)
      console.log(slideIndex)
    } else if (slideIndex === SliderData.length){
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1){
      setSlideIndex(SliderData.length)
    }
  }

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
          key={index}
          onClick={() => nav(slideIndex)}
          className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            {slideIndex === index + 1 && (
              <>
                <img src={slide.img} alt="image do slide" />
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
          onClick={() => moveDot(index + 1)}
          className={slideIndex === index + 1 ? "dot active" : "dot"}>
          </div>
        ))}
      </div>
    </div>

  )
}