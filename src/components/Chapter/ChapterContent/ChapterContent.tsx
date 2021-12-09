import { useState } from "react";
import MenuClick from "../../MenuClick/MenuClick";
import iconStaff from "../../../assets/icons/iconStaffDark.svg";
import iconComment from "../../../assets/icons/iconCommentDark.svg";
import iconErro from "../../../assets/icons/iconErroDark.svg";
import useIndicatorScroll from "../../../hooks/useIndicatorScroll";
import { PageProgress } from "../../PageProgress/PageProgress";
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
  const [fontSize, setFontSize] = useState(18);
  const [openFloatMenu, setOpenFloatMenu] = useState(false);
  const [openFloatModal, setOpenFloatModal] = useState(false);
  const [openSectionComment, setOpenSectionComment] = useState(false);
  const [statusButton, setStatusButton] = useState(false);
  const progressBar = useIndicatorScroll();

  const changeFontSize = (operator: string) => {
    if (operator === "-") {
      const newFontSize = fontSize - 1;
      if (newFontSize >= 12) {
        setFontSize(newFontSize);
      }
    } else if (operator === "+") {
      const newFontSize = Number(fontSize) + 1;
      if (newFontSize <= 26) {
        setFontSize(newFontSize);
      }
    }
  };

  const floatMenu = () => {
    if (openFloatModal) {
      setOpenFloatModal(!openFloatModal);
      return;
    }
    setOpenFloatMenu(!openFloatMenu);
  };

  const closeFloatModal = () => {
    setStatusButton(false);
    setOpenFloatModal(false);
  }

  const modalOpen = () => {
    setOpenFloatModal(!openFloatModal);
    openFloatMenu && setOpenFloatMenu(!openFloatMenu);
  };
  const modalOpenComment = () => {
    setOpenFloatModal(!openFloatModal);
    openFloatMenu && setOpenFloatMenu(!openFloatMenu);
  };

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
            <strong onClick={goPrev}>{`< Anterior`}</strong>
          )}
          {theLast ? (
            <strong onClick={goMenu}>Retornar ao menu</strong>
          ) : (
            <strong onClick={goNext}>{`Próximo >`}</strong>
          )}
        </div>
      </section>
      <section className="sectionFloatMenu" onClick={() => floatMenu()}>
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

      <PageProgress />
      <MenuClick />
      {openSectionComment && (
        <section className="sectionCommentContainer">
          <div className="headerSectionComment">
            <h2>Comentários do Capítulo</h2>
            <div className="inputArea">
              <textarea className="textComment" />
              <button type="submit">Comentar</button>
            </div>
            <section className="commentHistory">
              <div className="boxComment">
                <div className="headerBoxComment">
                  <img src="http://github.com/NaySoares.png" alt="" />
                  <strong>Axios</strong>
                  <div className="boxVotes">
                    <strong>up</strong>
                    <strong>down</strong>
                    <strong>||</strong>
                    <strong>9</strong>
                  </div>
                </div>
                <div className="bodyBoxComment">
                  <span>Comentário escrito aqui</span>
                </div>
              </div>
            </section>
          </div>
        </section>
      )}

      <section className="floatMenu">
        <div
          className={openFloatMenu ? "headerFloatMenu" : "headerFloatMenuClose"}
        >
          <span onClick={() => goMenu()}>
            Bruxa Errante: A Jornada de Elaina
          </span>
          <span>Capítulos</span>
        </div>

        <div
          className={
            openFloatMenu || progressBar >= 99
              ? "buttonFloatMenu"
              : "buttonFloatMenuClose"
          }
        >
          <span onClick={() => goPrev()}>{`<`}</span>
          <img src={iconComment} alt="" onClick={() => modalOpenComment()} />
          <img src={iconStaff} alt="" onClick={() => modalOpen()} />
          <img src={iconErro} alt="" onClick={() => modalOpen()} />
          <span onClick={() => (theLast ? goMenu() : goNext())}>{`>`}</span>
        </div>
      </section>

      {openFloatModal && (
        <div className="modalFloating">
          <div className="modalFloatingContent">
            <h2>Encontrou um erro?</h2>
            <span>
              Por favor, marque uma opção e descreva brevemente o erro
              encontrado.
            </span>
            <div className="divLabelModalFloatingContent">
              <label>
                <input
                  type="checkbox"
                  name="checkError01"
                  id="checkErroContent"
                ></input>
                Erro na Tradução/Revisão.
              </label>
              <label>
                <input type="checkbox" name="checkError02" id="checkErroPage" />
                Erro na Página.
              </label>
            </div>
            <div className="textModalFloatingContent">
              <textarea
                name="inputText"
                id="inputText"
                cols={30}
                rows={10}
              ></textarea>
              <button
                className={!statusButton ? "send" : "msgComplete"}
                type="submit"
                onClick={() => {!statusButton ? setStatusButton(true) : closeFloatModal()}}
              >
                {!statusButton ? "Enviar!" : <span>Enviado!</span>}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
