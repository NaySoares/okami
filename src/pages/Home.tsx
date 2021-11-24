import React from 'react';
import { DisplayCase } from '../components/Display/Display'
import { NovelRelease } from '../components/NovelRelease/NovelRelease'

import '../styles/home.scss';

export function Home() {
  return(
    <main className="homeContainer">
      <div className="homeDisplay">
        <DisplayCase />
        <NovelRelease />
      </div>
    </main>
  )
}