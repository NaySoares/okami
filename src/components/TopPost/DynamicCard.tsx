import { useState } from 'react';

import { Supporter } from './Supporter';
import { TopPost } from './TopPost';
import './DynamicCard.scss';

export function DynamicCard() {
  const [card, setCard] = useState(false);

  const flip = () => {
    setCard(!card);
  }

  setTimeout(() =>{
    flip();
  }, 5000);

  return(
    <div className="dynamicCard">
      <div className="cardFlip" style={card ? {transform: "rotateY(180deg)"} : {transform: "rotateY(0)"}}>
        <TopPost/>
        <Supporter/>
      </div>
    </div>
  )
}

