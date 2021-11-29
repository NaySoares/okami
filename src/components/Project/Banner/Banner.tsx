import bannerElaina from '../../../assets/banner/bannerMajoNoTabitabi.png'
import './Banner.scss';

export function Banner() {
  return(
    <div className="bannerContainer">
      <img src={bannerElaina} alt="Imagem da obra" />
    </div>
  )
}