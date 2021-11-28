import { SupporterData } from '../../services/SupporterData';
import { RandomAvatar } from '../../services/RandomAvatar';
import './Supporter.scss'

const nav = () => {
  alert(`Você será navegado para a página de Apoiadores`)
}

export function Supporter() {
  return( 
    <div className="supportContainer" onClick={() => nav}>
      <h2>Apoiadores</h2>
      <div className="supportContent">
        {SupporterData.map((obj) => {
          return (
            <div className="supporterWork" key={obj.id}>
              {obj.active &&
                <div className={obj.king ? "supporterContentRow king" : "supporterContentRow"} >
                  {obj.king && <span></span>}
                  <RandomAvatar />
                  <div className="supporterInfo">
                    <strong>{obj.nick}</strong>
                    <p>Apoiador {obj.level}</p>
                  </div>
                </div>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}