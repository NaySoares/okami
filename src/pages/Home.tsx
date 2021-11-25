import React from 'react';
import { Slider } from '../components/Slider/Slider';
import { NovelRelease } from '../components/NovelRelease/NovelRelease';
import { TopPost } from '../components/TopPost/TopPost';

import '../styles/home.scss';
export function Home() {
  return(
    <main className="homeContainer">
      <section className="homeDisplay">
        <Slider />
        <NovelRelease />
      </section>
      <section className="homeBlog">
        <Slider />
        <TopPost />
      </section>
    </main>
  )
}