import { useNavigate, useParams } from 'react-router';
import { NovelData } from '../services/NovelData';
import { Banner } from '../components/Project/Banner/Banner';
import { ChapterContent } from '../components/Chapter/ChapterContent/ChapterContent';
import { ChapterIlust } from '../components/Chapter/ChapterIlust/ChapterIlust';
import '../styles/chapterPage.scss';
interface NovelProps {
  id: number;
  banner?: string;
  volume: VolumeProps[];
  title: string;
}
interface ChapterProps{
  id: number,
  number: number,
  title: string,
  release: string,
  content?: string | undefined,
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
  let content = currentWork[0].volume[Number(volume)-1].chapter[Number(chapterId)].content;
  let titleChapter = currentWork[0].volume[Number(volume)-1].chapter[Number(chapterId)].title;
  
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
        {isTheFirst ?
          <ChapterIlust
            goNext={goNextChapter}
            goMenu={navMenu}
            content={content}
            titleNovel={currentWork[0].title}
            titleChapter={titleChapter}
          />
        :
          <ChapterContent
            theFirst={isTheFirst}
            theLast={isTheLast}
            goPrev={goPrevChapter}
            goNext={goNextChapter}
            goMenu={navMenu}
            content={content}
            titleNovel={currentWork[0].title}
            titleChapter={titleChapter}
          />
        }
      </div>
    </main>
  )
}