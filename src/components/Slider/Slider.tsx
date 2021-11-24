import React, { useState } from "react";
import { SliderData } from "./SliderData";

import './slider.scss'

export function Slider() {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    console.log("chegou", slideIndex)
    if(slideIndex !== SliderData.length){
      setSlideIndex(slideIndex + 1)
      console.log(slideIndex)
    } else if (slideIndex === SliderData.length){
      setSlideIndex(1)
    }
  }

  const moveDot = (index: number) => {
    setSlideIndex(index)
  }
  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1){
      setSlideIndex(SliderData.length)
    }
  }

  return(
    <div className="container-slider">
      {SliderData.map((slide, index)=> {
        return(
          <div
          key={index}
          className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            {slideIndex === index + 1 && (
              <img src={slide.img} alt="image do slide" />
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