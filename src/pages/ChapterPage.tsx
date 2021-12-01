import { useNavigate, useParams } from 'react-router';
import { NovelData } from '../services/NovelData';
import { Banner } from '../components/Project/Banner/Banner';
import { ChapterContent } from '../components/Chapter/ChapterContent/ChapterContent';
import '../styles/chapterPage.scss';
interface NovelProps {
  id: number;
  banner?: string;
  volume: VolumeProps[];
}
interface ChapterProps{
  id: number,
  number: number,
  title: string,
  release: string,
}
interface VolumeProps{
  number: number,
  chapter: ChapterProps[];
}

export function ChapterPage() {
  const { id, volume, chapterId }= useParams();
  const currentWork: NovelProps[] = NovelData.filter((obj) => obj.id === Number(id));
  let banner = '';
  currentWork[0].banner ? banner = currentWork[0].banner : banner = '';
  
  let isTheLast = true;
  let isTheFirst = true;
  
  if(Number(chapterId)+1 === currentWork[0].volume[Number(volume)-1].chapter.length){
    isTheLast = true;
  } else {
    isTheLast = false;
  }
  if(Number(chapterId) === 0){
    isTheFirst = true;
  } else {
    isTheFirst = false;
  }

  const navigate = useNavigate();
  const nav = (chapterId: number | string | undefined) => {
    navigate(`/project/${id}/${volume}/${chapterId}`);
  };
  const navMenu = () => {
    navigate(`/project/${id}`);
  };
  
  const goNextChapter = () => {
    nav(chapterId && Number(chapterId)+1)  
  }
  const goPrevChapter = () => {
    nav(Number(chapterId)-1)  
  }

  return(
    <main className="chapterPageContainer">
      <Banner currentBanner={banner} />
      <div className="chapterPageContent">
        <ChapterContent
          theFirst={isTheFirst}
          theLast={isTheLast}
          goPrev={goPrevChapter}
          goNext={goNextChapter}
          goMenu={navMenu}
        />
      </div>
    </main>
  )
}