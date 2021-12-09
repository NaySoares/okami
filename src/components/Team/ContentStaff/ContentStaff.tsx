import { useState } from "react";
import { CardMember } from "../CardMember/CardMember";
import "./ContentStaff.scss";

export function ContentStaff() {
  const [admOn, setAdmOn] = useState(true);
  const [revOn, setRevOn] = useState(false);
  const [tradOn, setTradOn] = useState(false);
  const [editOn, setEditOn] = useState(false);
  const [categActive, setCategActive] = useState("Adm");
  const [functionDetail, setFunctionDetail] =
    useState(`Administradores são as pessoas com mais responsabilidades
  dentro da Staff, eles coordenam, organizam e selecionam as pessoas que fazem parte de cada equipe,
  além de assumirem funções comuns como tradução, edição e revisão. Na Okami, moderadores do discord
  e desenvolvedores que cuidam do site também são considerados administradores mesmo sem terem funções
  de Staff`);

  const activeChage = (id: string) => {
    switch (id) {
      case "adm":
        setRevOn(false);
        setTradOn(false);
        setEditOn(false);
        setAdmOn(true);
        setCategActive("Adm");
        setFunctionDetail(`Administradores são as pessoas com mais responsabilidades
  dentro da Staff, eles coordenam, organizam e selecionam as pessoas que fazem parte de cada equipe,
  além de assumirem funções comuns como tradução, edição e revisão. Na Okami, moderadores do discord
  e desenvolvedores que cuidam do site também são considerados administradores mesmo sem terem funções
  de Staff`);
        break;
      case "trad":
        setRevOn(false);
        setEditOn(false);
        setAdmOn(false);
        setTradOn(true);
        setCategActive("Tradutor");
        setFunctionDetail(`Essas são as pessoas que fazem o primeiro passo para a obra girar como um todo,
        eles transformam os textos originais para o português, muitas vezes é um trabalho árduo, mas
        que vale a pena. Okami possui tradutores Inglês-Português e Japonês-Português.`);
        break;
      case "rev":
        setEditOn(false);
        setAdmOn(false);
        setTradOn(false);
        setRevOn(true);
        setCategActive("Revisor");
        setFunctionDetail(`Revisores são excelentes em ajustarem o texto para que fiquem claros
        e de boa leitura, além de corrigirem pequenos erros que às vezes passam despercebidos,
        eles trabalham em conjunto com os tradutores formando os textos da melhor forma
        possível.`);
        break;
      case "edit":
        setRevOn(false);
        setAdmOn(false);
        setTradOn(false);
        setEditOn(true);
        setCategActive("Editor");
        setFunctionDetail(`Editores, muitas vezes visto como uns dos trabalhos mais dificíes,
        principalmente na Okami, esses caras são responsáveis pela beleza visual das obras, eles
        limpam, refazem e criam titulos e capas inteiras para que tudo esteja como uma digna versão
        brasileira da obra. Caso queira conferir algumas das artes da Okami, entre na aba Galeria`);
        break;
      default:
        break;
    }
  };

  return (
    <main className="contentStaff">
      <header className="headerStaff">
        <div className="logoStaff">
          <h1>Okami</h1>
          <h2>.</h2>
          <h1>Novels</h1>
        </div>
        <span>
          Okami Novels trabalha com muita dedicação para que todos os nossos
          leitores possam desfrutar de boas leituras, conheça algumas das
          pessoas que tornam isso possível
        </span>
        <button
          className={admOn ? "buttonStaff categActive" : "buttonStaff"}
          onClick={() => activeChage("adm")}
        >
          Administrador
        </button>
        <div className="catergoryStaff">
          <button
            className={tradOn ? "buttonStaff categActive" : "buttonStaff"}
            onClick={() => activeChage("trad")}
          >
            Tradutor
          </button>
          <button
            className={revOn ? "buttonStaff categActive" : "buttonStaff"}
            onClick={() => activeChage("rev")}
          >
            Revisor
          </button>
          <button
            className={editOn ? "buttonStaff categActive" : "buttonStaff"}
            onClick={() => activeChage("edit")}
          >
            Editor
          </button>
        </div>
        <span>{functionDetail}</span>
      </header>
      <CardMember categActive={categActive} />

      <section className="memberStaff">
        <div className="cardMember"></div>
        <button
          className="buttonStaff"
          onClick={
            categActive === "Adm"
              ? () => alert(`Calma lá, não é assim que se torna Adm`)
              : () => alert(`Seu teste de ${categActive} será baixado!`)
          }
        >
          Teste de {categActive}
        </button>
      </section>
    </main>
  );
}
