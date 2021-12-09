import { useState } from 'react'
import img01 from '../../../assets/ilust/majoNoTabitabi/V1-01.jpg'
import img02 from '../../../assets/ilust/majoNoTabitabi/V1-02.jpg'
import img03 from '../../../assets/ilust/majoNoTabitabi/V1-03.jpg'
import img04 from '../../../assets/ilust/majoNoTabitabi/V1-04.jpg'
import img05 from '../../../assets/ilust/majoNoTabitabi/V1-05.jpg'
import "./ChapterIlust.scss";

interface ChapterIlustProps {
  goNext: () => void;
  goMenu: () => void;
  content: string | undefined;
  titleNovel: string;
  titleChapter: string;
}

export function ChapterIlust({
  content,
  titleNovel,
  titleChapter,
  goNext,
  goMenu,
}: ChapterIlustProps) {
  const [imageZoom, setImageZoom] = useState(false)
  const [sourceImg, setSourceImg] = useState('')
  const [imgSelected, setImgSelected] = useState(img01)
  
  //const arrImg = [img01, img02, img03, img04, img05];

  const imgZoom = (srcImg: string) => {
    setSourceImg(srcImg);
    setImageZoom(!imageZoom);
  }

  const handleSelectedImg = (img: string) => {
    setImgSelected(img)
  }


  const nextChapter = "Próximo >";
  return (
    <main className="chapterIlustContainer">
      <div
        className={ imageZoom ?  "modalImgZoom" : '' }
        onClick={() => imgZoom('')}
      >
        <img src={sourceImg} alt="" />
      </div>
      <header className="chapterIlustHeader">
        <h1>{titleChapter}</h1>
        <strong>{titleNovel}</strong>
      </header>
      <section className="chapterIlustNavigation">
        <div className="chapterIlustControllerChapter">
          <strong onClick={goMenu}>Retornar ao menu</strong>
          <strong onClick={goNext}>{nextChapter}</strong>
        </div>
      </section>
      <div className="ChapterIlustBox">
        <div className="IlustBoxAside">
          <img src={img01} onClick={() => handleSelectedImg(img01)}/>
          <img src={img02} onClick={() => handleSelectedImg(img02)}/>
          <img src={img03} onClick={() => handleSelectedImg(img03)}/>
          <img src={img04} onClick={() => handleSelectedImg(img04)}/>
          <img src={img05} onClick={() => handleSelectedImg(img05)}/>
        </div>

        <div className="IlustBoxView">
          <img
          src={imgSelected}
          alt="Ilustração"
          onClick={() => imgZoom(imgSelected)}/>
        </div>
      </div>
    </main>
  );
}
