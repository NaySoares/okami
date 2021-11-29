import bannerElaina from '../../../assets/banner/bannerMajoNoTabitabi.png'
import bannerElaina2 from '../../../assets/banner/bannerMajoNoTabitabi2.jpg'
import './Banner.scss';

export function Banner() {
  return(
    <div className="bannerContainer">
      <img src={bannerElaina} alt="Imagem da obra" />
    </div>
  )
}