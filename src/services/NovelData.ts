import cover01 from "../assets/images/coverMatadorGoblinsV7.jpg";
import cover02 from "../assets/images/coverBruxaErranteV6.jpg";
import cover03 from "../assets/images/coverMushokuTenseiV14.jpg";
import cover04 from "../assets/images/coverCronicasBehamutV9.jpg";

interface NovelDataProps {
  id: number;
  img: string;
  title: string;
  titleAlternative: string[];
  type: string;
  genre: string[];
  description: string;
  date: string;
  author: string;
  imgAuthor: string;
  artist: string;
  imgArtist: string;
  statusTop: boolean;
  currentVol: string;
  currentCap: string;
  status: string;
}

export const NovelData: NovelDataProps[] = [
  {
    id: 13,
    img: cover01,
    title: "Matador de Goblins",
    titleAlternative: ["Goblin Slayer", "ゴブリンスレイヤー"],
    type: "Light Novel",
    genre: ["Ação", "Adulto", "Aventura", "Ecchi", "Fantasia", "Harém", "Mistério", "Romance", "Seinen", "Tragédia"],
    description: ["— Só tenho goblins em minha mente.",
    "Essa é uma história de um homem que só podia matar goblins, mas desejava se tornar um aventureiro.",   
    "— Não posso salvar o mundo, só posso matar goblins.",    
    "Se dizia que, em uma guilda perto da fronteira, havia um homem que só caçava goblins e se elevou ao ranque prata (3º ranque). Ele era esse tipo de existência rara…",
    "Durante a primeira aventura em grupo de uma sacerdotisa, quando ela ficou em perigo, esse homem — o “matador de goblins” — estendeu sua mão para ajudá-la. Ele faria qualquer coisa e tudo mais para exterminar goblins.",
    "A sacerdotisa foi salva por ele, a recepcionista da guilda estava grata por ele, e sua amiga de infância — uma vaqueira — estava à espera do seu regresso. Foi então que, uma elfa jovem que ouve falar dos seus feitos apareceu e fez um pedido."].join("\n"),
    date: "8 de Novembro de 2008",
    author: "Kumo Kagyu (蜗牛くも)",
    artist: "Desconhecido",
    imgAuthor: "https://github.com/NaySoares.png",
    imgArtist: "https://github.com/NaySoares.png",
    statusTop: true,
    currentVol: "Volume 05",
    currentCap: "Capítulo 05 - Parte 4",
    status: "Em Andamento",
  },
  {
    id: 14,
    img: cover02,
    title: "Bruxa Errante: A Jornada de Elaina",
    titleAlternative: ["Majo no Tabitabi", "The Journey of Elaina", "The Witch's Travels", "魔女の旅々"],
    type: "Light Novel",
    genre: ["Aventura", "Comédia", "Fantasia", "Slice-of-Life", "Tragédia"],
    description: ["Em um determinado lugar, havia uma bruxa viajante. Seu nome era Elaina.",
      "Por ser uma viajante, ela conheceu muitas pessoas e países enquanto continuava sua longa, longa jornada.",      
      "Um país que só aceitava magos, um gigante obcecado por músculos, um jovem às portas da morte aguardando o retorno de sua amada, uma princesa deixada sozinha no país em ruínas e a história da própria bruxa até agora e daqui para frente.",
      "Enquanto conhece pessoas particularmente peculiares e experimenta os momentos de alegria de outras pessoas, mesmo agora, a bruxa continua contando a história do encontro e da separação.",
      "— Por favor, não se preocupe. Afinal, sou uma viajante. Devo me apressar.",      
      "A Bruxa, Sim, eu."].join("\n"),
    date: "1 de Maio de 2013",
    author: "Shiraishi Jougi",
    artist: "Azure",
    imgAuthor: "https://github.com/NaySoares.png",
    imgArtist: "https://github.com/NaySoares.png",
    statusTop: true,
    currentVol: "Volume 06",
    currentCap: "Capítulo 03",
    status: "Em Andamento",
  },
  {
    id: 15,
    img: cover03,
    title: "Mushoku Tensei: Reencarnação do Desempregado",
    titleAlternative: ["Mushoku Tensei: Isekai Ittara Honki Dasu", "無職転生", "無職転生 – 異世界行ったら本気だす", "Mushoku Tensei: Jobless Reincarnation ~ It will be All Out if I Go to Another World"],
    type: "Light Novel",
    genre: ["Ação", "Aventura", "Comédia", "Ecchi", "Drama", "Fantasia", "Harém", "Isekai", "Romance", "Seinen"],
    description: ["Um NEET otaku de 34 anos, expulso de casa por sua família, descobriu que sua vida chegou a um beco sem saída. Ele então lembrou que sua vida poderia ter sido realmente muito melhor se tivesse feito escolhas melhores no passado.",
    "Apenas quando chegou ao ponto de se arrepender, viu um caminhão correndo em direção de três estudantes do ensino médio. Reunindo toda a força que tinha, tentou salvá-los e acabou sendo atropelado, assim rapidamente perdendo sua vida.",
    "E quando voltou a abrir os olhos, tinha reencarnado em um mundo com magias e espadas como Rudeus Greyrat. Nascido em um novo mundo, com uma nova vida, decidiu que: “Desta vez vou realmente viver minha vida ao máximo, sem arrependimentos!” Assim começa a jornada de um homem que anseia pelo recomeço de sua vida."].join("\n"),
    date: "18 de Abril de 2002",
    author: "Kumo Kagyu (蜗牛くも)",
    artist: "Shirotaka",
    imgAuthor: "https://github.com/NaySoares.png",
    imgArtist: "https://github.com/NaySoares.png",
    statusTop: true,
    currentVol: "Volume 13",
    currentCap: "Capítulo 13",
    status: "Em Andamento",
  },
  {
    id: 16,
    img: cover04,
    title: "Crônicas do Bahamut Invicto",
    titleAlternative: ["Saijaku Muhai no Bahamu", "Undefeated Bahamut Chronicle"],
    type: "Light Novel",
    genre: ["Ecchi", "Fantasia", "Harém", "Mecha", "Vida Escolar"],
    description: ["Lux, que era um Príncipe do Império que foi destruído há cinco anos, encontrou-se com a Princesa do Novo Reino, Lisesharte, invadindo acidentalmente o banheiro do dormitório feminino.",
    '"Quanto tempo você planeja olhar para o meu corpo, seu idiotaaaaa!”',
    "As armas antigas encontradas nas Ruínas, o Drag-Ride. Lux que foi chamado o mais forte Drag-Knight no passado, agora era conhecido como o “Mais Fraco Invicto”, um Drag-Knight que não ataca. Após o duelo que começou com o desafio de Lisesharte, Lux acabou entrando na academia feminina que cria Drag-Knights……!",
    "A história de Lux, onde ele está cercado por meninas nobres da academia, está prestes a se desdobrar.",
    'A “derradeira” batalha de fantasia da academia, onde o direito e o poder se cruzam, começa agora! (Sinopse da história retirada da capa do Volume 1.)'].join("\n"),
    date: "28 de Dezembro de 2010",
    author: "Akatsuki Senri",
    artist: "Kasuga Ayumu",
    imgAuthor: "https://github.com/NaySoares.png",
    imgArtist: "https://github.com/NaySoares.png",
    statusTop: true,
    currentVol: "Volume 02",
    currentCap: "Capítulo 03 - Parte 4",
    status: "Em Andamento",
  }
]