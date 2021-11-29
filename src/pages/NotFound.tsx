import { useNavigate } from 'react-router-dom';
import notFound from '../assets/images/notFound.jpg';
import '../styles/notFound.scss';

export function NotFound() {
  const navigate = useNavigate();

  function nav(route: string){
    navigate(`${route}`);
  }  
  return(
    <main className="notFoundContainer">
      <img src={notFound} alt="Imagem de erro" />
      <div className="warning">
        <h2>Página não encontrada!</h2>
        <p>Como foi que você chegou aqui?</p>
        <button type="button" onClick={() => nav("/")}>
          Voltar ao ínicio
        </button>
      </div>
    </main>
  )
}