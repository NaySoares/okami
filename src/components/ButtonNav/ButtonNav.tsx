
import arrowL from '../../assets/icons/iconArrowL.svg';
import arrowR from '../../assets/icons/iconArrowR.svg';
import './ButtonNav.scss';

interface ButtonNavProps{
  direction: boolean,
  fun: () => void,
}

export function ButtonNav({direction, fun} :  ButtonNavProps){
  return(
    <div className={direction ? "nextSlide" : "prevSlide" }>
      <img
        src={direction ? arrowR : arrowL}
        alt="Seta de Navegação"
        onClick={fun}
      />
    </div>
  )
  
}