import { useState } from "react";
import { useNavigate } from "react-router";
import ArrowBottom from "../../../assets/icons/iconArrowBottonDark.svg";
import "./Dropdown.scss";

interface DropdownProps {
  volume: number;
  content: ChapterProps[];
  currentURL: number;
}
interface ChapterProps {
  id: number;
  number: number;
  title: string;
  release: string;
}

export function Dropdown({ volume, content, currentURL}: DropdownProps) {
  const [dropDownOpen, setDropDownOpen] = useState(true);
  const navigate = useNavigate();
  const nav = (id: number) => {
    navigate(`/project/${currentURL}/${volume}/${id}`);
  };

  return (
    <main className="dropdownContainer">
      <div className="chapterListAncor">
        <div
          className={
            dropDownOpen ? "chapterHeaderVol" : "chapterHeaderVol open"
          }
          onClick={() => setDropDownOpen(!dropDownOpen)}
        >
          <h3>Volume {volume}</h3>
          <img src={ArrowBottom} alt="Seta dropdown" />
        </div>
        <div className={dropDownOpen ? "chapterList" : "chapterList open"}>
          {content.map((chapter) => {
            return (
              <div
                className="chapterItem"
                onClick={() => nav(chapter.id)}
                key={chapter.id}
              >
                <p>
                  Cap.{" "}
                  {chapter.number < 9
                    ? `0${chapter.number}`
                    : `${chapter.number}`}{" "}
                  - {chapter.title}
                </p>
                <p>{chapter.release}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
