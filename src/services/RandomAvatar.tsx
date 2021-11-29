import avatar01 from '../assets/avatar/avatar01.png';
import avatar02 from '../assets/avatar/avatar02.png';
import avatar03 from '../assets/avatar/avatar03.png';
import avatar04 from '../assets/avatar/avatar04.png';
import avatar05 from '../assets/avatar/avatar05.jpg';
import avatar06 from '../assets/avatar/avatar06.jpg';
import avatar07 from '../assets/avatar/avatar07.jpg';
import avatar08 from '../assets/avatar/avatar08.jpg';
import avatar09 from '../assets/avatar/avatar09.jpg';

export function RandomAvatar() {
  const arrAvatar = [avatar01, avatar02, avatar03, avatar04, avatar05, avatar06, avatar07, avatar08, avatar09];
  const Avatar = Math.floor(Math.random() * arrAvatar.length)
  
  return (
    <img src={arrAvatar[Avatar]} alt="Avatar" /> 
  )
}