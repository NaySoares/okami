import { useState } from "react";
import { RandomAvatar } from "../../../services/RandomAvatar";
import { ButtonNav } from "../../ButtonNav/ButtonNav";

import { TopPostData } from "../../../services/TopPostData";
import "./CardPost.scss";

export function CardPost() {
  const [roll, setRoll] = useState(0);
  const textButton = "Ver Mais >";

  var lengthPost = 0;
  function contPost() {
    TopPostData.forEach((ready) => {
      if (ready.statusCard === true) {
        lengthPost++;
      }
    });

    if (lengthPost > 2) {
      if (lengthPost % 2 === 0) {
        lengthPost = lengthPost / 2 - 1;
      } else {
        lengthPost = (lengthPost - 1) / 2;
      }
    } else {
      lengthPost = 0;
    }
  }
  contPost();

  const nextPost = () => {
    if (roll !== 890 * lengthPost) {
      const incrementRoll = Number(roll) + 890;
      setRoll(incrementRoll);
    } else {
      setRoll(0);
    }
  };

  const prevPost = () => {
    if (roll !== 0) {
      const decrementRoll = Number(roll) - 890;
      setRoll(decrementRoll);
    } else {
      return;
    }
  };

  return (
    <div className="cardPostContainer">
      <header>
        <h2>Blog Okami</h2>
        <a href="#foo">
          <strong>{textButton}</strong>
        </a>
      </header>
      <ButtonNav direction={true} fun={nextPost} />
      <ButtonNav direction={false} fun={prevPost} />
      <div className="cardPostContent">
        <div className="windowView" style={{ marginLeft: `-${roll}px` }}>
          {TopPostData.map((obj) => {
            return (
              <div className="overCard" key={obj.id}>
                {obj.statusCard && (
                  <div className="cardPost">
                    <img
                      src={obj.img}
                      alt="Imagem do Post"
                      className="cardPostImg"
                    />
                    <p className="cardPostDate">{obj.date}</p>
                    <h2 className="cardPostTitle">{obj.title}</h2>
                    <p className="cardPostDescription">{obj.description}</p>
                    <footer className="cardPostFooter">
                      <RandomAvatar />
                      <strong>{obj.author}</strong>
                    </footer>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
