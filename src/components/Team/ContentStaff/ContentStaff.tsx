import './ContentStaff.scss'

export function ContentStaff() {
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
        <button>Administrador</button>
        <div className="catergoryStaff">
          <button>Tradutor</button>
          <button>Revisor</button>
          <button>Editor</button>
        </div>
      </header>
    </main>
  );
}
