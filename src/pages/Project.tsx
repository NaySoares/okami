import { Banner } from '../components/Project/Banner/Banner';
import { AsideInfo } from '../components/Project/AsideInfo/AsideInfo';
import { Content } from '../components/Project/Content/Content';
import { useParams } from 'react-router';
import { NovelData } from '../services/NovelData';

import '../styles/project.scss';

interface NovelProps {
  id: number;
  banner?: string;
}

export function Project(){
  const { id }= useParams();
  const currentWork: NovelProps[] = NovelData.filter((obj) => obj.id === Number(id));
  let banner = '';
  currentWork[0].banner ? banner = currentWork[0].banner : banner = '';
  return(
    <main className="projectContainer">
      <section className="projectBanner">
        <Banner currentBanner={banner} />
      </section>
    
      <section className="projectContent">
        <AsideInfo currentId={Number(id)} />
        <Content currentId={Number(id)}/>
      </section>

    </main>
  )
}