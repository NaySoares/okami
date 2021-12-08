import { useEffect, useState } from "react";
import MenuClick from "../../MenuClick/MenuClick";
import "./ChapterContent.scss";
interface ChapterContentProps {
  theLast: boolean;
  theFirst: boolean;
  goPrev: () => void;
  goNext: () => void;
  goMenu: () => void;
  content: string | undefined;
  titleNovel: string;
  titleChapter: string;
}

export function ChapterContent({
  theLast,
  theFirst,
  content,
  titleNovel,
  titleChapter,
  goPrev,
  goNext,
  goMenu,
}: ChapterContentProps) {
  const [progressBar, setProgressBar] = useState(0);
  const [fontSize, setFontSize] = useState(18);
  const [openFloatMenu, setOpenFloatMenu] = useState(false);
  const [openFloatModal, setOpenFloatModal] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setProgressBar(scrolled);
  };

  const changeFontSize = ( operator: string ) => {
    if(operator === "-"){
      const newFontSize = fontSize - 1;
        if (newFontSize >= 12){
          setFontSize(newFontSize);
        }
    } else if( operator === "+"){
      const newFontSize = Number(fontSize) + 1;
        if(newFontSize <= 26){
          setFontSize(newFontSize);
        }
    }
  }

  const floatMenu = () => {
    setOpenFloatMenu(!openFloatMenu);
  }

  const modalOpen = (option: number) => {
    setOpenFloatModal(!openFloatModal);
  }



  return (
    <div className="chapterContentContainer">
      <header className="chapterContentHeader">
        <h1>{titleChapter}</h1>
        <strong>{titleNovel}</strong>
      </header>
      <section className="chapterContentNavigation">
        <div className="chapterContentControllerSize">
          <strong onClick={() => changeFontSize("+")}>+</strong>
          <strong onClick={() => changeFontSize("-")}>-</strong>
        </div>
        <div className="chapterContentControllerChapter">
          {theFirst ? (
            <strong onClick={goMenu}>Retornar ao menu</strong>
          ) : (
            <strong onClick={goPrev}>{`Próximo >`}</strong>
          )}
          {theLast ? (
            <strong onClick={goMenu}>Retornar ao menu</strong>
          ) : (
            <strong onClick={goNext}>{`Próximo >`}</strong>
          )}
        </div>
      </section>
      <section
        className="sectionFloatMenu"
        onClick={() => floatMenu()}
      >
        <span 
          style={{ fontSize: `${fontSize}px` }}
          dangerouslySetInnerHTML={{
            __html: content ? content : "Ops... Algo deu errado.",
          }}
        ></span>
      </section>
      <section className="chapterContentNavigationFinish">
        <div className="chapterContentFinish">
          <strong>Obrigado por ler até aqui</strong>
        </div>
        <div className="chapterContentControllerChapter">
          {theFirst ? (
            <strong onClick={goMenu}>Retornar ao menu</strong>
          ) : (
            <strong onClick={goPrev}>{`< Anterior`}</strong>
          )}
          {theLast ? (
            <strong onClick={goMenu}>Retornar ao menu</strong>
          ) : (
            <strong onClick={goNext}>{`Próximo >`}</strong>
          )}
        </div>
      </section>

      <div id="pageProgress" style={{ width: `${progressBar}%` }}></div>
      
      <section className="floatMenu">
      <div className={openFloatMenu ? "headerFloatMenu" : "headerFloatMenuClose"}>
        <span>Bruxa Errante: A Jornada de Elaina</span>
        <span>Capítulos</span>
      </div>
      
      <div className={openFloatMenu || (progressBar >= 99 ) ? "buttonFloatMenu" : "buttonFloatMenuClose"}>
        <span>{`<`}</span>
        <span>Come</span>
        <span>staff</span>
        <span onClick={() => modalOpen(3)}>Erro</span>
        <span>{`>`}</span>
      </div>
      </section>

      {openFloatModal &&
        <div className="modalFloating">
          <div className="modalFloatingContent">
            <h2>Encontrou um erro?</h2>
            <span>
              Por favor, marque uma opção e descreva brevemente o erro encontrado.
            </span>
            <div className="divLabelModalFloatingContent">
              <label>
                <input type="checkbox" name="checkError01" id="checkErroContent">
                </input>
                Erro na Tradução/Revisão.                
              </label>
              <label>
                <input type="checkbox" name="checkError02" id="checkErroPage" />
                Erro na Página.
              </label>
            </div>
            <div className="textModalFloatingContent">
              <textarea name="inputText" id="inputText" cols={30} rows={10}></textarea>  
              <button type="submit">
                Enviar!
              </button>
            </div>
          </div>
        </div>
      }
      <MenuClick />
    </div>
  );
}
