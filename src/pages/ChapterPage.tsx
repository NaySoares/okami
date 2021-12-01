import { useParams } from 'react-router';
import { NovelData } from '../services/NovelData';
import { Banner } from '../components/Project/Banner/Banner';
import { ChapterContent } from '../components/Chapter/ChapterContent/ChapterContent';
import '../styles/chapterPage.scss';
interface NovelProps {
  id: number;
  banner?: string;
}

export function ChapterPage() {
  const { id, volume, chapterId }= useParams();
  const currentWork: NovelProps[] = NovelData.filter((obj) => obj.id === Number(id));
  let banner = '';
  currentWork[0].banner ? banner = currentWork[0].banner : banner = '';
  return(
    <main className="chapterPageContainer">
      <Banner currentBanner={banner} />
      <div className="chapterPageContent">
        <ChapterContent />
      </div>
    </main>
  )
}