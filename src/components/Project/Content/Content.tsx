import { useNavigate } from "react-router";
import { NovelData } from "../../../services/NovelData";
import { Dropdown } from "../Dropdown/Dropdown";
import "./Content.scss";

interface currentProps {
  currentId: number;
}

export function Content({ currentId }: currentProps) {

  const currentWork = NovelData.filter((obj) => obj.id === currentId);
  var genreWork = "";
  var nameAlternative = "";

  const navigate = useNavigate();

  const nav = (id: number) => {
    navigate("/");
  };

  for (var i = 0; i < currentWork[0].genre.length; i++) {
    if (i + 1 === currentWork[0].genre.length) {
      genreWork += `${currentWork[0].genre[i]}.`;
    } else {
      genreWork += `${currentWork[0].genre[i]}, `;
    }
  }
  for (var j = 0; j < currentWork[0].titleAlternative.length; j++) {
    if (j + 1 === currentWork[0].titleAlternative.length) {
      nameAlternative += `${currentWork[0].titleAlternative[j]}.`;
    } else {
      nameAlternative += `${currentWork[0].titleAlternative[j]}, `;
    }
  }

  const buttonText = "Ver Completo >";
  return (
    <main className="contentContainer">
      <section className="infoMain">
        <h2>{currentWork[0].title}</h2>
        <div className="subInfoMain">
          <div className="subInfo">
            <div className="subInfoMargin">
              <strong>Status:</strong>
            </div>
            <p>{currentWork[0].status}</p>
          </div>
          <div className="subInfo">
            <div className="subInfoMargin">
              <strong>Autor:</strong>
            </div>
            <p>{currentWork[0].author}</p>
          </div>
          <div className="subInfo">
            <div className="subInfoMargin">
              <strong>Ilustrador:</strong>
            </div>
            <p>{currentWork[0].artist}</p>
          </div>
          <div className="subInfo">
            <div className="subInfoMargin">
              <strong>Tipo:</strong>
            </div>
            <p>{currentWork[0].type}</p>
          </div>
          <div className="subInfo">
            <div className="subInfoMargin">
              <strong>Gênero:</strong>
            </div>
            <p>{genreWork}</p>
          </div>
          <div className="subInfo">
            <div className="subInfoMargin">
              <strong>Nome Alternativo:</strong>
            </div>
            <p>{nameAlternative}</p>
          </div>
        </div>
      </section>

      <section className="infoResume">
        <h2>Sinopse</h2>
        <div className="subinfoResume">
          <div className="subInfoResume">
            <span
              dangerouslySetInnerHTML={{ __html: currentWork[0].description }}
            ></span>
            <button type="button">{buttonText}</button>
          </div>
        </div>
      </section>

      <section className="chapter">
        {currentWork[0].view ? (
          <>
            <h2>Capítulos</h2>
            {currentWork[0].volume.map((item) => {
              return (
                <Dropdown
                  volume={item.number}
                  content={item.chapter}
                />
              );
            })}
          </>
        ) : (
          <h2>Lançamentos em Breve...</h2>
        )}
      </section>
    </main>
  );
}
