import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ButtonNav } from '../../ButtonNav/ButtonNav';
import { NovelData } from '../../../services/NovelData';
import './NovelList.scss'

export function NovelList() {
  const [rollNovel, setRollNovel] = useState(0);
  const textButton = "Ver Mais >";

  const navigate = useNavigate();
  
  const nav = (id: number) => {
    navigate(`/project/${id}`);
  }  
  
  
  var lengthNovel = 0
  function contPost(){
    NovelData.forEach(ready => {
      if(ready.statusTop === true){
        lengthNovel++
      }
    })

    if(lengthNovel > 4){
      if(lengthNovel%2 === 0){
        lengthNovel = (lengthNovel/2)-1;
      } else {
        lengthNovel = ((lengthNovel-1)/2)-1;
      }
    } else {
      lengthNovel = 0;
    }
  }
  contPost();
  
  const nextPost = () => {
    if(rollNovel !== 320*lengthNovel){
      const incrementRoll = Number(rollNovel)+320;
      setRollNovel(incrementRoll)
    }else{
      setRollNovel(0)
    }
  }

  const prevPost = () => {
    if(rollNovel !== 0){
      const decrementRoll = Number(rollNovel)-320;
      setRollNovel(decrementRoll)
    }else {
      return
    }
  }

  return(
    <div className="novelListContainer">
      <header className="novelListHeader">
        <h2>Light Novels</h2>
        <a href='#foo'>
          <strong>{textButton}</strong>
        </a>
      </header>
      <ButtonNav direction={true} fun={nextPost} />
      <ButtonNav direction={false} fun={prevPost} />
      <div className="novelListContent">
      <div className="windowViewNovel" style={{marginLeft: `-${rollNovel}px`}}>
        {NovelData.map((obj => {
          return(
            <div className="overNovel" key={obj.id}>
              {obj.statusTop && 
                <div className="cardNovelList" onClick={() => nav(obj.id)}>
                  <img src={obj.img} alt="Imagem do Post" />
                  <footer className="cardNovelListFooter">
                    <h2 className="cardPostTitle">{obj.title}</h2>
                    <p>{obj.currentVol}</p>
                    <p>{obj.currentCap}</p>
                  </footer>
                </div>
              }
            </div>
          )
        }))}
      </div>
      </div>
    </div>
  )
}