import { useEffect, useState } from "react";
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

  const nextChapter = "Próximo >";
  const prevChapter = "< Anterior";

  document.addEventListener("contextmenu", (event) => {
    event.preventDefault()
  });

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
            <strong onClick={goPrev}>{prevChapter}</strong>
          )}
          {theLast ? (
            <strong onClick={goMenu}>Retornar ao menu</strong>
          ) : (
            <strong onClick={goNext}>{nextChapter}</strong>
          )}
        </div>
      </section>
      <span 
        style={{ fontSize: `${fontSize}px` }}
        dangerouslySetInnerHTML={{
          __html: content ? content : "Ops... Algo deu errado.",
        }}
      ></span>
      <section className="chapterContentNavigationFinish">
        <div className="chapterContentFinish">
          <strong>Obrigado por ler até aqui</strong>
        </div>
        <div className="chapterContentControllerChapter">
          {theFirst ? (
            <strong onClick={goMenu}>Retornar ao menu</strong>
          ) : (
            <strong onClick={goPrev}>{prevChapter}</strong>
          )}
          {theLast ? (
            <strong onClick={goMenu}>Retornar ao menu</strong>
          ) : (
            <strong onClick={goNext}>{nextChapter}</strong>
          )}
        </div>
      </section>

      <div id="pageProgress" style={{ width: `${progressBar}%` }}></div>
    </div>
  );
}
