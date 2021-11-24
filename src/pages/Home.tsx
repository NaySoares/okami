import React from 'react';
import { Slider } from '../components/Slider/Slider'
import { NovelRelease } from '../components/NovelRelease/NovelRelease'

import '../styles/home.scss';
export function Home() {
  return(
    <main className="homeContainer">
      <div className="homeDisplay">
        <Slider />
        <NovelRelease />
      </div>
    </main>
  )
}