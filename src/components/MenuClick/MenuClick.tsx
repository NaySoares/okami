import useContextMenu from "../../hooks/useContextMenu";
import "./MenuClick.scss";

const MenuClick = () => {
  const { anchorPoint, show } = useContextMenu();

  const adjust = {
    y: 320,
    x: 190,
  };

  if (show) {
    return (
      <ul
        className="menuClick"
        style={{
          top: anchorPoint.y - adjust.y,
          left: anchorPoint.x - adjust.x,
        }}
      >
        <li>Compartilhar</li>
        <li>Informar erro</li>
        <hr />
        <li>Recarregar</li>
        <li>Sair</li>
      </ul>
    );
  }
  return <></>;
};

export default MenuClick;
