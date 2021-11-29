import { Banner } from '../components/Project/Banner/Banner';
import { AsideInfo } from '../components/Project/AsideInfo/AsideInfo';

import '../styles/project.scss';

export function Project(){
  return(
    <main className="projectContainer">
      <section className="projectBanner">
        <Banner />
      </section>
      <section className="projectContent">
        <AsideInfo />
      </section>

    </main>
  )
}