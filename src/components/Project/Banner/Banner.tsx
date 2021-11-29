import bannerElaina from '../../../assets/banner/bannerMajoNoTabitabi.png';
import './Banner.scss';

interface BannerProps{
  currentBanner: string;
}

export function Banner({currentBanner}: BannerProps){
  return(
    <div className="bannerContainer">
      <img src={currentBanner ? currentBanner : bannerElaina} alt="Imagem da obra" />
    </div>
  )
}