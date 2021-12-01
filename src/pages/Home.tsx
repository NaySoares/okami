import React from 'react';
import { Slider } from '../components/Home/Slider/Slider';
import { NovelRelease } from '../components/Home/NovelRelease/NovelRelease';
import { DynamicCard } from '../components/Home/TopPost/DynamicCard';
import { CardPost } from '../components/Home/CardPost/CardPost';
import { NovelList } from '../components/Home/NovelList/NovelList';
import { CardPartner } from '../components/Home/CardPartner/CardPartner';

import '../styles/home.scss';
export function Home() {
  return(
    <main className="homeContainer">
      <section className="homeDisplay">
        <Slider />
        <NovelRelease />
      </section>
      <section className="homeBlog">
        <CardPost />
        <DynamicCard />
      </section>
      <section className="homeBook">
        <NovelList />
      </section>
      <section className="homePartner">
        <CardPartner />
      </section>
    </main>
  )
}