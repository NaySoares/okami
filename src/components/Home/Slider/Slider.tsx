import { useState } from "react";
import { useNavigate } from "react-router";
import { NovelData } from "../../../services/NovelData";
import { ButtonNav } from "../../ButtonNav/ButtonNav";

import "./slider.scss";

export function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [jump, setJump] = useState(true);

  const sliderData = NovelData.filter((data) => data.slide.status === true);
  const nextSlide = () => {
    if (slideIndex !== sliderData.length) {
      setJump(false);
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderData.length) {
      setJump(false);
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setJump(false);
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setJump(false);
      setSlideIndex(sliderData.length);
    }
  };

  setTimeout(() => {
    jump ? nextSlide() : setJump(true);
  }, 4000);

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  const navigate = useNavigate();
  const nav = (index: number) => {
    const slideSelected = sliderData.filter(
      (item) => item === sliderData[index - 1]
    );
    navigate(`project/${slideSelected[0].id}`);
  };
  return (
    <div className="container-slider">
      {sliderData.map((slide, index) => {
        return (
          <div
            key={slide.id}
            onClick={() => nav(slideIndex)}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            {slideIndex === index + 1 && (
              <>
                <img src={slide.slide.imgSlide} alt="slide" />
                <div className="infosSlider">
                  <strong>{slide.title}</strong>
                  <p>{slide.slide.messageSlide}</p>
                  <a href="#foo" className="linkSlide">
                    Ler Agora
                  </a>
                </div>
              </>
            )}
          </div>
        );
      })}
      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
      <ButtonNav direction={true} fun={nextSlide} />
      <ButtonNav direction={false} fun={prevSlide} />
    </div>
  );
}
