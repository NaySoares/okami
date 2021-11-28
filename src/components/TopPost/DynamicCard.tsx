import { useState } from 'react';

import { Supporter } from './Supporter';
import { TopPost } from './TopPost';

export function DynamicCard() {
  const [card, setCard] = useState(false);

  const flip = () => {
    setCard(!card);
  }

  setTimeout(() =>{
    flip();
  }, 3000);

  return(
    <>
      {card ? <Supporter/> : <TopPost/>}
    </>
  )
}