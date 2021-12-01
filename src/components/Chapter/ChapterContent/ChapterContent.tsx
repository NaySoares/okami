import './ChapterContent.scss';

interface ChapterContentProps{
  theLast: boolean;
  theFirst: boolean;
  goPrev: () => void;
  goNext: () => void;
  goMenu: () => void;
}

export function ChapterContent({ theLast, theFirst, goPrev, goNext, goMenu} : ChapterContentProps) {
  const nextChapter = "Próximo >"
  const prevChapter = "< Anterior"

  const firsParag = '<p style="text-indent: 30px;">'
  const endParag = '<p/> <br/>'

  const contentChapter = `
  ${firsParag}Era um país tranquilo, cercado por montanhas proibidas e escondido atrás de muros altos. Ninguém do mundo exterior poderia visitar.${endParag}
  ${firsParag}Acima de uma face rochosa brilhando com o calor da luz do sol, uma única vassoura voava pelo ar quente. A pessoa que a pilotava era uma linda jovem. Ela usava um robe preto e um chapéu pontudo, e seus cabelos cinzentos voavam ao vento. Se alguém estivesse por perto, viraria-se para olhar, imaginando com um suspiro quem seria aquela beldade a voar…${endParag}
  ${firsParag}Isso aí. Eu mesma.${endParag}
  
  ${firsParag}Ah, era uma piada.${endParag}
  
  ${firsParag}— Quase lá…${endParag}
  
  ${firsParag}O muro alto parecia ter sido esculpido na própria montanha. Olhando um pouco para baixo, vi o portão e guiei minha vassoura na direção dele.${endParag}
  
  ${firsParag}Com certeza foi trabalhoso, mas suponho que as pessoas que moravam aqui o haviam planejado dessa maneira – para impedir que as pessoas entrassem por engano. Afinal, não há como alguém caminhar por um lugar desses sem uma boa razão.${endParag}
  
  ${firsParag}Desci da minha vassoura bem em frente ao portão. Um sentinela local, aparentemente conduzindo inspeções de imigração, aproximou-se de mim.${endParag}
  
  ${firsParag}Depois de me olhar lentamente da cabeça aos pés e examinar o broche no meu peito, sorriu alegremente.${endParag}
  
  ${firsParag}— Bem-vinda ao País dos Magos. Por aqui, Madame Bruxa.${endParag}
  
  ${firsParag}— Hmm? Você não precisa testar se posso fazer magia ou não?${endParag}
  
  ${firsParag}Ouvi dizer que quem visitava este país tinha que provar sua capacidade mágica antes de entrar; qualquer pessoa que não alcançasse um determinado nível teria seu acesso negado.${endParag}
  
  ${firsParag}— Eu a vi voando. E, além disso, esse broche que está usando indica que é uma bruxa. Então, por favor, continue em frente.${endParag}
  
  ${firsParag}Ah sim, é mesmo. Ser capaz de voar em uma vassoura é um dos pré-requisitos mínimos para a entrada. É claro que puderam ver minha aproximação lá da guarita. Que boba que fui!${endParag}
  
  ${firsParag}Depois de me inclinar um pouco para o guarda, passei pelo portão enorme. Aqui estava o País dos Magos. Usuários iniciantes de magia, aprendizes e bruxas de pleno direito – desde que pudessem usar magia, estariam autorizados a entrar neste país curioso, enquanto todos os outros seriam impedidos.${endParag}
  
  ${firsParag}Ao passar pelo imenso portão, duas placas estranhas, lado a lado, chamaram minha atenção. Olhei para elas um pouco confusa.${endParag}
  
  ${firsParag}A primeira mostrava um mago montado em uma vassoura, com um círculo ao seu redor. Aquela ao lado mostrava a imagem de um soldado andando, com um triângulo em sua volta.${endParag}
  
  ${firsParag}O que há com essas placas?${endParag}
  
  ${firsParag}Eu soube a resposta assim que olhei para cima – acima do monte de casas de tijolos e sob o sol cintilante, magos de todos os tipos atravessavam o céu em todas as direções.${endParag}
  
  ${firsParag}Entendo. Deve ser uma regra nos países em que permitem apenas a entrada de magos – quase todo mundo está voando em uma vassoura, por isso poucas pessoas escolhem andar.${endParag}
  
  ${firsParag}Satisfeita com minha explicação para as placas, peguei minha vassoura e me sentei de lado. Com um impulso, levantei suavemente no ar em uma demonstração viva do desenho da placa.${endParag}
  
  ${firsParag}— Então voar é o meio de transporte preferido daqui, hein?${endParag}
  
  ${firsParag}E, com isso, vi o País dos Magos como deveria ser visto. Acima dos telhados marrom-avermelhados que se estendiam igual um bocado de terra seca, magos flutuavam no ar. Alguns paravam suas vassouras para ter uma conversa amigável, enquanto outros voavam com pacotes de bagagem amarrados a elas. Havia mulheres idosas suspeitas e parecidas com bruxas, além de crianças disparando pelo céu, competindo para ver quem podia voar mais alto.${endParag}
  
  ${firsParag}Essas pessoas devem passar a vida inteira no ar.${endParag}
  
  ${firsParag}Foi uma cena realmente maravilhosa. Me deixou quase sem fôlego.${endParag}
  
  ${firsParag}Me juntei a eles, subindo acima do país, rendendo-me sem rumo ao fluxo de tráfego aéreo ao meu redor. De repente, uma placa presa ao topo de um dos telhados chamou minha atenção. Aparentemente era uma POUSADA. Passei sem parar e vi a palavra MERCEARIA logo adiante. Havia outras: um AÇOUGUE e até uma JOALHERIA. Como eu suspeitava, a vida local era vivida acima dos telhados, e colocar suas placas no topo do teto devia ser a prática comum.${endParag}
  
  ${firsParag}Olhando em volta, vi que os telhados da maioria das casas tinham uma janela que era grande o suficiente para uma única pessoa passar. Enquanto observava distraidamente, uma daquelas janelas se abriu e um homem montado em uma vassoura voou para fora.${endParag}
  
  ${firsParag}Então é para isso que elas são usadas.${endParag}
  
  ${firsParag}Voei em um ritmo lento, observando toda a paisagem, até que…${endParag}
  
  ${firsParag}— Ahhhhhhhhhhhhhhh!${endParag}
  
  ${firsParag}… um grito soou de trás de mim. Segurando minha vassoura com uma mão, segurei meu chapéu para que não voasse para longe e me virei.${endParag}
  
  ${firsParag}Ah, tarde demais.${endParag}
  
  ${firsParag}— Ahhhhhhhhhhh!${endParag}
 
  ${firsParag}Dirigindo-se diretamente para mim a uma velocidade absurda, como um meteorito caindo e deixando um rastro luminoso, a pessoa em questão já estava a apenas um telhado de distância quando a vi.${endParag}
  
  ${firsParag}Esquivar? Impossível.${endParag}
  
  ${firsParag}Virei minha parte superior do corpo por reflexo, mas não havia como evitar a colisão. Com uma série de grunhidos (“Ugya!”, “Geh”), nós nos emaranhamos e caímos no telhado abaixo. As telhas cuidadosamente alinhadas quebraram, e por fim paramos um pouco antes de cair da borda do telhado. Vi uma única telha cair no chão, bem abaixo de nós. Ainda bem que não havia pedestres.${endParag}
  
  ${firsParag}O ângulo era pequeno, mas consegui evitar uma colisão direta com o chão. Além disso, a pessoa estranha que colidiu comigo havia sofrido o impacto da aterrissagem, então, felizmente, não me feri.${endParag}
  
  ${firsParag}Eu me levantei, limpando alguns fragmentos marrom-avermelhados do telhado que ficaram grudados no meu robe preto.${endParag}
  
  ${firsParag}— …${endParag}
  `

  return(
    <div className="chapterContentContainer">
      <header className="chapterContentHeader">
        <h1>País dos Magos</h1>
        <strong>Bruxa Errante: A Jornada de Elaina</strong>
      </header>
      <section className="chapterContentNavigation">
        <div className="chapterContentControllerSize">
          <strong>+</strong>
          <strong>-</strong>
        </div>
        <div className="chapterContentControllerChapter">
          {theFirst ? 
            <strong onClick={goMenu}>Retornar ao menu</strong>
          : 
            <strong onClick={goPrev}>{prevChapter}</strong>
          }
          {theLast ? 
            <strong onClick={goMenu}>Retornar ao menu</strong>
          :
            <strong onClick={goNext}>{nextChapter}</strong>
          } 
        </div>
      </section>
      <span dangerouslySetInnerHTML={{__html: contentChapter}}></span>
    </div>
  )
}
