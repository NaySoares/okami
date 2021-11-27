import avatar01 from '../assets/avatar/avatar01.png';
import avatar02 from '../assets/avatar/avatar02.png';
import avatar03 from '../assets/avatar/avatar03.png';
import avatar04 from '../assets/avatar/avatar04.png';

export function RandomAvatar() {
  const arrAvatar = [avatar01, avatar02, avatar03, avatar04]
  const Avatar = Math.floor(Math.random() * arrAvatar.length)
  
  return (
    <img src={arrAvatar[Avatar]} alt="Avatar" /> 
  )
}