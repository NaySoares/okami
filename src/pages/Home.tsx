import React from 'react';
import { Slider } from '../components/Slider/Slider';
import { NovelRelease } from '../components/NovelRelease/NovelRelease';
import { DynamicCard } from '../components/TopPost/DynamicCard';
import { CardPost } from '../components/CardPost/CardPost';
import { NovelList } from '../components/NovelList/NovelList';
import { CardPartner } from '../components/CardPartner/CardPartner';

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