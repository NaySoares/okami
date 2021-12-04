import avatar01 from '../assets/avatar/avatar01.png';
import avatar02 from '../assets/avatar/avatar02.png';
import avatar03 from '../assets/avatar/avatar03.png';
import avatar04 from '../assets/avatar/avatar04.png';
import avatar05 from '../assets/avatar/avatar05.jpg';
import avatar06 from '../assets/avatar/avatar06.jpg';
import avatar07 from '../assets/avatar/avatar07.jpg';
import avatar08 from '../assets/avatar/avatar08.jpg';
import avatar09 from '../assets/avatar/avatar09.jpg';

import coverCard00 from '../assets/images/cardElaina.jpg';
import coverCard01 from '../assets/images/coverCard01.png';
import coverCard02 from '../assets/images/coverCard02.png';
import coverCard03 from '../assets/images/coverCard03.png';
import coverCard04 from '../assets/images/coverCard04.jpg';
import coverCard05 from '../assets/images/coverCard05.jpg';
import coverCard06 from '../assets/images/coverCard06.jpg';

export function RandomAvatar() {
  const arrAvatar = [avatar01, avatar02, avatar03, avatar04, avatar05, avatar06, avatar07, avatar08, avatar09];
  const Avatar = Math.floor(Math.random() * arrAvatar.length)
  return (
    <img src={arrAvatar[Avatar]} alt="Avatar" /> 
  )
}

export function RandomCoverCard(){
  const arrCard = [coverCard00, coverCard01, coverCard02, coverCard03, coverCard04, coverCard05, coverCard06];
  const Card = Math.floor(Math.random() * arrCard.length)
  
  return arrCard[Card];
}