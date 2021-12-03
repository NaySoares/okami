import { useNavigate } from "react-router";
import { NovelData } from "../../../services/NovelData";
import "./NovelRelease.scss";

export function NovelRelease() {
  const navigate = useNavigate();
  const nav = (id: number) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="releaseContainer">
      <h2 className="releaseTitle">Últimos Lançamentos</h2>
      <div className="releaseContent">
        {NovelData.slice(0, 3).map((obj) => {
          return (
            <div className="releaseWork" key={obj.id}>
              <div className="releaseContentRow" onClick={() => nav(obj.id)}>
                <img src={obj.img} alt="Capa da Obra" className="releaseImg" />
                <div className="releaseInfo">
                  <strong className="releaseT">{obj.title}</strong>
                  <p className="releaseP">{obj.type}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
