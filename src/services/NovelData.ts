import cover01 from "../assets/images/coverMatadorGoblinsV7.jpg";
import cover02 from "../assets/images/coverBruxaErranteV6.jpg";
import cover03 from "../assets/images/coverMushokuTenseiV14.jpg";
import cover04 from "../assets/images/coverCronicasBehamutV9.jpg";
import bannerElaina from "../assets/banner/bannerMajoNoTabitabi.png";
import bannerMatador from "../assets/banner/bannerMatadordeGoblins.jpg";
import bannerMushoku from "../assets/banner/bannerMushoku.jpg";
import bannerBehamut from "../assets/banner/bannerBehamut.jpg";
import bookmarkElaina from "../assets/bookmark/bookmarkMajoNoTabitabi.png";
import ilustMJV1C1 from "../assets/ilust/MJ-V1-C1-IMG1.jpg";

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
  extra: boolean;
  contentExtra: string;
  banner?: string;
  view?: boolean;
  volume: VolumeProps[];
  anime?: AnimeProps;
}
interface ChapterProps {
  id: number;
  number: number;
  title: string;
  release: string;
  content?: string;
}
interface VolumeProps {
  number: number;
  chapter: ChapterProps[];
}
interface AnimeProps {
  status: boolean;
  chapter?: number;
  volume?: number;
}

const firstParag = '<p style="text-indent: 30px;">'
const endParag = '<p/> <br/>'
const divisor = '<img width="100px" style="margin:40px; display:block; margin-left:auto; margin-right:auto"'
const ilust = '<img width="100%" style="margin-bottom:60px; display:block; margin-left:auto; margin-right:auto"'
export const NovelData: NovelDataProps[] = [
  {
    id: 13,
    img: cover01,
    title: "Matador de Goblins",
    titleAlternative: ["Goblin Slayer", "ゴブリンスレイヤー"],
    type: "Light Novel",
    genre: [
      "Ação",
      "Adulto",
      "Aventura",
      "Ecchi",
      "Fantasia",
      "Harém",
      "Mistério",
      "Romance",
      "Seinen",
      "Tragédia",
    ],
    description: [
      "— Só tenho goblins em minha mente.",
      "Essa é uma história de um homem que só podia matar goblins, mas desejava se tornar um aventureiro.",
      "— Não posso salvar o mundo, só posso matar goblins.",
      "Se dizia que, em uma guilda perto da fronteira, havia um homem que só caçava goblins e se elevou ao ranque prata (3º ranque). Ele era esse tipo de existência rara…",
      "Durante a primeira aventura em grupo de uma sacerdotisa, quando ela ficou em perigo, esse homem — o “matador de goblins” — estendeu sua mão para ajudá-la. Ele faria qualquer coisa e tudo mais para exterminar goblins.",
      "A sacerdotisa foi salva por ele, a recepcionista da guilda estava grata por ele, e sua amiga de infância — uma vaqueira — estava à espera do seu regresso. Foi então que, uma elfa jovem que ouve falar dos seus feitos apareceu e fez um pedido.",
    ].join("<br/><br/>"),
    date: "8 de Novembro de 2008",
    author: "Kumo Kagyu (蜗牛くも)",
    artist: "Desconhecido",
    imgAuthor: "https://github.com/NaySoares.png",
    imgArtist: "https://github.com/NaySoares.png",
    statusTop: true,
    currentVol: "Volume 05",
    currentCap: "Capítulo 05 - Parte 4",
    status: "Em Andamento",
    extra: true,
    contentExtra: "SFMusDom-eo",
    banner: bannerMatador,
    volume: [
      {
        number: 1,
        chapter: [
          {
            id: 0,
            number: 0,
            title: "Ilustrações",
            release: "14/01/2021",
          },
          {
            id: 1,
            number: 1,
            title: "País dos Magos",
            release: "14/01/2021",
          },
          {
            id: 2,
            number: 2,
            title: "Uma Menina tão Doce Quanto Flores",
            release: "14/01/2021",
          },
          {
            id: 3,
            number: 3,
            title:
              "Na Estrada: O Conto de Um Homem Musculoso em Busca de Sua Irmãzinha",
            release: "14/01/2021",
          },
          {
            id: 4,
            number: 4,
            title: "Captação de Recursos",
            release: "14/01/2021",
          },
          {
            id: 5,
            number: 5,
            title:
              "Na Estrada: O Conto de Dois Homens que Não Conseguiram Resolver uma Discussão",
            release: "14/01/2021",
          },
        ],
      },
    ],
  },
  {
    id: 14,
    img: cover02,
    title: "Bruxa Errante: A Jornada de Elaina",
    titleAlternative: [
      "Majo no Tabitabi",
      "The Journey of Elaina",
      "The Witch's Travels",
      "魔女の旅々",
    ],
    type: "Light Novel",
    genre: ["Aventura", "Comédia", "Fantasia", "Slice-of-Life", "Tragédia"],
    description: [
      "Em um determinado lugar, havia uma bruxa viajante. Seu nome era Elaina.",
      "Por ser uma viajante, ela conheceu muitas pessoas e países enquanto continuava sua longa, longa jornada.",
      "Um país que só aceitava magos, um gigante obcecado por músculos, um jovem às portas da morte aguardando o retorno de sua amada, uma princesa deixada sozinha no país em ruínas e a história da própria bruxa até agora e daqui para frente.",
      "Enquanto conhece pessoas particularmente peculiares e experimenta os momentos de alegria de outras pessoas, mesmo agora, a bruxa continua contando a história do encontro e da separação.",
      "— Por favor, não se preocupe. Afinal, sou uma viajante. Devo me apressar.",
      "A Bruxa, Sim, eu.",
    ].join("<br/><br/>"),
    date: "1 de Maio de 2013",
    author: "Shiraishi Jougi",
    artist: "Azure",
    imgAuthor: "https://github.com/NaySoares.png",
    imgArtist: "https://github.com/NaySoares.png",
    statusTop: true,
    currentVol: "Volume 06",
    currentCap: "Capítulo 03",
    status: "Em Andamento",
    extra: true,
    contentExtra: "L9RDSB7LrEI",
    banner: bannerElaina,
    view: true,
    anime: {
      status: true,
      volume: 1,
      chapter: 5,
    },
    volume: [
      {
        number: 1,
        chapter: [
          {
            id: 0,
            number: 0,
            title: "Ilustrações",
            release: "14/01/2021",
          },
          {
            id: 1,
            number: 1,
            title: "País dos Magos",
            release: "14/01/2021",
            content: `
${firstParag}Era um pa&iacute;s tranquilo, cercado por montanhas proibidas e escondido atr&aacute;s de muros altos. Ningu&eacute;m do mundo exterior poderia visitar.${endParag}
${firstParag}Acima de uma face rochosa brilhando com o calor da luz do sol, uma &uacute;nica vassoura voava pelo ar quente. A pessoa que a pilotava era uma linda jovem. Ela usava um robe preto e um chap&eacute;u pontudo, e seus cabelos cinzentos voavam ao vento. Se algu&eacute;m estivesse por perto, viraria-se para olhar, imaginando com um suspiro quem seria aquela beldade a voar&hellip;${endParag}
${firstParag}Isso a&iacute;. Eu mesma.${endParag}
${firstParag}Ah, era uma piada.${endParag}
${firstParag}&mdash; Quase l&aacute;&hellip;${endParag}
${firstParag}O muro alto parecia ter sido esculpido na pr&oacute;pria montanha. Olhando um pouco para baixo, vi o port&atilde;o e guiei minha vassoura na dire&ccedil;&atilde;o dele.${endParag}
${firstParag}Com certeza foi trabalhoso, mas suponho que as pessoas que moravam aqui o haviam planejado dessa maneira &ndash; para impedir que as pessoas entrassem por engano. Afinal, n&atilde;o h&aacute; como algu&eacute;m caminhar por um lugar desses sem uma boa raz&atilde;o.${endParag}
${firstParag}Desci da minha vassoura bem em frente ao port&atilde;o. Um sentinela local, aparentemente conduzindo inspe&ccedil;&otilde;es de imigra&ccedil;&atilde;o, aproximou-se de mim.${endParag}
${firstParag}Depois de me olhar lentamente da cabe&ccedil;a aos p&eacute;s e examinar o broche no meu peito, sorriu alegremente.${endParag}
${firstParag}&mdash; Bem-vinda ao Pa&iacute;s dos Magos. Por aqui, Madame Bruxa.${endParag}
${firstParag}&mdash; Hmm? Voc&ecirc; n&atilde;o precisa testar se posso fazer magia ou n&atilde;o?${endParag}
${firstParag}Ouvi dizer que quem visitava este pa&iacute;s tinha que provar sua capacidade m&aacute;gica antes de entrar; qualquer pessoa que n&atilde;o alcan&ccedil;asse um determinado n&iacute;vel teria seu acesso negado.${endParag}
${firstParag}&mdash; Eu a vi voando. E, al&eacute;m disso, esse broche que est&aacute; usando indica que &eacute; uma bruxa. Ent&atilde;o, por favor, continue em frente.${endParag}
${firstParag}Ah sim, &eacute; mesmo. Ser capaz de voar em uma vassoura &eacute; um dos pr&eacute;-requisitos m&iacute;nimos para a entrada. &Eacute; claro que puderam ver minha aproxima&ccedil;&atilde;o l&aacute; da guarita. Que boba que fui!${endParag}
${firstParag}Depois de me inclinar um pouco para o guarda, passei pelo port&atilde;o enorme. Aqui estava o Pa&iacute;s dos Magos. Usu&aacute;rios iniciantes de magia, aprendizes e bruxas de pleno direito &ndash; desde que pudessem usar magia, estariam autorizados a entrar neste pa&iacute;s curioso, enquanto todos os outros seriam impedidos.${endParag}
${firstParag}Ao passar pelo imenso port&atilde;o, duas placas estranhas, lado a lado, chamaram minha aten&ccedil;&atilde;o. Olhei para elas um pouco confusa.${endParag}
${firstParag}A primeira mostrava um mago montado em uma vassoura, com um c&iacute;rculo ao seu redor. Aquela ao lado mostrava a imagem de um soldado andando, com um tri&acirc;ngulo em sua volta.${endParag}
${firstParag}O que h&aacute; com essas placas?${endParag}
${firstParag}Eu soube a resposta assim que olhei para cima &ndash; acima do monte de casas de tijolos e sob o sol cintilante, magos de todos os tipos atravessavam o c&eacute;u em todas as dire&ccedil;&otilde;es.${endParag}
${firstParag}Entendo. Deve ser uma regra nos pa&iacute;ses em que permitem apenas a entrada de magos &ndash; quase todo mundo est&aacute; voando em uma vassoura, por isso poucas pessoas escolhem andar.${endParag}
${firstParag}Satisfeita com minha explica&ccedil;&atilde;o para as placas, peguei minha vassoura e me sentei de lado. Com um impulso, levantei suavemente no ar em uma demonstra&ccedil;&atilde;o viva do desenho da placa.${endParag}
${firstParag}&mdash; Ent&atilde;o voar &eacute; o meio de transporte preferido daqui, hein?${endParag}
${firstParag}E, com isso, vi o Pa&iacute;s dos Magos como deveria ser visto. Acima dos telhados marrom-avermelhados que se estendiam igual um bocado de terra seca, magos flutuavam no ar. Alguns paravam suas vassouras para ter uma conversa amig&aacute;vel, enquanto outros voavam com pacotes de bagagem amarrados a elas. Havia mulheres idosas suspeitas e parecidas com bruxas, al&eacute;m de crian&ccedil;as disparando pelo c&eacute;u, competindo para ver quem podia voar mais alto.${endParag}
${firstParag}Essas pessoas devem passar a vida inteira no ar.${endParag}
${firstParag}Foi uma cena realmente maravilhosa. Me deixou quase sem f&ocirc;lego.${endParag}
${firstParag}Me juntei a eles, subindo acima do pa&iacute;s, rendendo-me sem rumo ao fluxo de tr&aacute;fego a&eacute;reo ao meu redor. De repente, uma placa presa ao topo de um dos telhados chamou minha aten&ccedil;&atilde;o. Aparentemente era uma POUSADA. Passei sem parar e vi a palavra MERCEARIA logo adiante. Havia outras: um A&Ccedil;OUGUE e at&eacute; uma JOALHERIA. Como eu suspeitava, a vida local era vivida acima dos telhados, e colocar suas placas no topo do teto devia ser a pr&aacute;tica comum.${endParag}
${firstParag}Olhando em volta, vi que os telhados da maioria das casas tinham uma janela que era grande o suficiente para uma &uacute;nica pessoa passar. Enquanto observava distraidamente, uma daquelas janelas se abriu e um homem montado em uma vassoura voou para fora.${endParag}
${firstParag}Ent&atilde;o &eacute; para isso que elas s&atilde;o usadas.${endParag}
${firstParag}Voei em um ritmo lento, observando toda a paisagem, at&eacute; que&hellip;${endParag}
${firstParag}&mdash; Ahhhhhhhhhhhhhhh!${endParag}
${firstParag}&hellip; um grito soou de tr&aacute;s de mim. Segurando minha vassoura com uma m&atilde;o, segurei meu chap&eacute;u para que n&atilde;o voasse para longe e me virei.${endParag}
${firstParag}Ah, tarde demais.${endParag}
${firstParag}&mdash; Ahhhhhhhhhhh!${endParag}
${firstParag}Dirigindo-se diretamente para mim a uma velocidade absurda, como um meteorito caindo e deixando um rastro luminoso, a pessoa em quest&atilde;o j&aacute; estava a apenas um telhado de dist&acirc;ncia quando a vi.${endParag}
${firstParag}Esquivar? Imposs&iacute;vel.${endParag}
${firstParag}Virei minha parte superior do corpo por reflexo, mas n&atilde;o havia como evitar a colis&atilde;o. Com uma s&eacute;rie de grunhidos (&ldquo;Ugya!&rdquo;, &ldquo;Geh&rdquo;), n&oacute;s nos emaranhamos e ca&iacute;mos no telhado abaixo. As telhas cuidadosamente alinhadas quebraram, e por fim paramos um pouco antes de cair da borda do telhado. Vi uma &uacute;nica telha cair no ch&atilde;o, bem abaixo de n&oacute;s. Ainda bem que n&atilde;o havia pedestres.${endParag}
${firstParag}O &acirc;ngulo era pequeno, mas consegui evitar uma colis&atilde;o direta com o ch&atilde;o. Al&eacute;m disso, a pessoa estranha que colidiu comigo havia sofrido o impacto da aterrissagem, ent&atilde;o, felizmente, n&atilde;o me feri.${endParag}
${firstParag}Eu me levantei, limpando alguns fragmentos marrom-avermelhados do telhado que ficaram grudados no meu robe preto.${endParag}
${firstParag}&mdash; &hellip;${endParag}
${firstParag}&mdash; Urggggh&hellip;${endParag}
${firstParag}A adolescente gemendo e olhando em volta atordoada parecia ser um pouco mais nova que eu. Seu cabelo preto era curto, e tinha um rosto de apar&ecirc;ncia andr&oacute;gena. Ela usava uma blusa branca e uma saia xadrez sob um manto preto, as quais ficaram bagun&ccedil;adas ap&oacute;s cair no telhado.${endParag}
${firstParag}Ela n&atilde;o est&aacute; usando broche nem nada no peito, ent&atilde;o deve ser uma novi&ccedil;a.${endParag}
${firstParag}&mdash; Hmm, voc&ecirc; est&aacute; bem&hellip;?${endParag}
${firstParag}Quando toquei o ombro da garota ca&iacute;da, ela abriu os olhos.${endParag}
${firstParag}&mdash; &hellip;${endParag}
${firstParag}&mdash; &hellip; &mdash; E ficou em sil&ecirc;ncio.${endParag}
${firstParag}Parecia que ainda estava lutando para processar a situa&ccedil;&atilde;o, ent&atilde;o me arrisquei:${endParag}
${firstParag}&mdash; Voc&ecirc; tem problemas para pilotar sua vassoura?${endParag}
${firstParag}Sim, admito que estava falando em um tom sarc&aacute;stico.${endParag}
${firstParag}&mdash; Ah&hellip;${endParag}
${firstParag}&mdash; Parece que voc&ecirc; finalmente recuperou os sentidos &mdash; falei com um sorriso.${endParag}
${firstParag}&mdash; Ahhhh! &mdash; Ela voltou a olhar ao redor. &mdash; O-o-o-o que eu fa&ccedil;o? O que eu fa&ccedil;o? N&atilde;o tem como consertar tantas telhas&hellip;${endParag}
${firstParag}Ei, e a&iacute;&hellip;${endParag}
${firstParag}&mdash; Que tal um pedido de desculpas primeiro?${endParag}
${firstParag}&mdash; Ah, s-sinto muito! N&atilde;o foi de prop&oacute;sito! S&eacute;rio!${endParag}
${firstParag}Bem, eu j&aacute; sabia disso.${endParag}
${firstParag}&mdash; Enfim, voc&ecirc; est&aacute; bem? Voc&ecirc; girou feito um furac&atilde;o.${endParag}
${firstParag}&mdash; Ah, estou bem! Estou novinha em folha, viu?! &mdash; disse a menina, enquanto pequenos filetes vermelhos escorriam de sua cabe&ccedil;a. Seus olhos estavam claros e ela n&atilde;o teve problemas para falar.${endParag}
${firstParag}&hellip;${endParag}
${firstParag}&mdash; Voc&ecirc; est&aacute; sangrando. Na sua cabe&ccedil;a.${endParag}
${firstParag}&mdash; &Eacute; s&oacute; suor!${endParag}
${firstParag}&mdash; Seu suor sempre cheira a ferro?${endParag}
${firstParag}&mdash; Hmm, bem, hmm&hellip; &eacute; suor!${endParag}
${firstParag}&mdash; Okay, entendi, ent&atilde;o acalme-se um pouco.${endParag}
${firstParag}&mdash; Sim, senhora!${endParag}
${firstParag}&mdash; &hellip;${endParag}
${firstParag}N&atilde;o sei por que, mas j&aacute; me sinto exausta. Talvez seja por causa da colis&atilde;o.${endParag}
${firstParag}Eu estava planejando fazer a garota consertar as telhas quebradas depois de uma boa bronca, mas j&aacute; era o suficiente. Ela j&aacute; estava toda confusa; for&ccedil;&aacute;-la a consertar o telhado enquanto continuava nesse estado seria simplesmente insens&iacute;vel. Em vez disso, tirei meu len&ccedil;o do bolso.${endParag}
${firstParag}&mdash; Aqui, pegue. Pressione na sua cabe&ccedil;a.${endParag}
${firstParag}&mdash; Ah&hellip; mas&hellip;${endParag}
${firstParag}&mdash; Al&eacute;m disso, vou colocar as telhas de volta no lugar, ent&atilde;o v&aacute; descansar, por favor.${endParag}
${firstParag}&mdash; N&atilde;o, tamb&eacute;m vou ajudar!${endParag}
${firstParag}&mdash; No seu estado, se tentar ajudar, s&oacute; vai atrapalhar. V&aacute; descansar &mdash; falei com mais firmeza.${endParag}
${firstParag}&mdash; Mas&hellip;${endParag}
${firstParag}&mdash; Voc&ecirc;. Vai. Me. Atrapalhar.${endParag}
${firstParag}&mdash; T&aacute; bom&hellip;${endParag}
${firstParag}Como um gato de rua, a jovem abatida sentou-se no topo do telhado e pressionou o len&ccedil;o contra o ferimento na cabe&ccedil;a. Por mais en&eacute;rgica que parecesse, estava claro que se esfor&ccedil;ara um pouco demais. No exato momento em que se sentou, inclinou-se e caiu.${endParag}
${firstParag}Eu posso adiar um pouco a situa&ccedil;&atilde;o com ela. N&atilde;o &eacute; como se essa garota fosse morrer ou algo assim. Primeiro, vamos fazer algo quanto a esse desastre aqui&hellip;${endParag}
${firstParag}Juntei energia m&aacute;gica em minhas m&atilde;os. Instantaneamente, uma varinha longa e fina apareceu nelas, acompanhada por um brilho fraco.${endParag}
${firstParag}Este era o privil&eacute;gio especial dos magos. Somos capazes de produzir qualquer coisa &ndash; varinhas, vassouras e outras ferramentas m&aacute;gicas, por exemplo &ndash;, do nada.${endParag}
${firstParag}Canalizei energia para minha varinha e comecei a trabalhar.${endParag}
${firstParag}Era um feiti&ccedil;o de revers&atilde;o temporal.${endParag}
${firstParag}Como o nome sugere, &eacute; um tipo de magia que conserta coisas quebradas e cura ferimentos, fazendo o tempo correr ao contr&aacute;rio. Requer habilidade m&aacute;gica levemente avan&ccedil;ada, mas qualquer bruxa que vive neste pa&iacute;s deveria ser capaz de fazer isso. Entretanto, tenho certeza de que teria sido dif&iacute;cil para a pequena novi&ccedil;a desastrada atr&aacute;s de mim.${endParag}
${firstParag}As telhas come&ccedil;aram a se mover quando eu as banhei com magia. As quebradas se juntaram com seus cacos, retornando aos seus lugares originais como muitas pe&ccedil;as de um quebra-cabe&ccedil;a.${endParag}
${firstParag}Depois que todos os fragmentos desapareceram e qualquer sinal do acidente foi apagado, completei o feiti&ccedil;o e me virei. Agora era hora de arrumar a garota.${endParag}
${firstParag}&mdash; Beleza, voc&ecirc; &eacute; a pr&oacute;xima.${endParag}
${firstParag}&mdash; Hmm, uhhh&hellip;${endParag}
${firstParag}Aproximei-me dela, que sentou-se nervosamente segurando a cabe&ccedil;a, e apliquei o feiti&ccedil;o. Sob a luz suave, suas roupas esfarrapadas se consertaram e seus ferimentos sararam na mesma hora.${endParag}
${firstParag}&mdash; Whoa&hellip; &mdash; Pude ouvi-la murmurar.${endParag}
${firstParag}Isso n&atilde;o &eacute; nada impressionante. Depois de se tornar uma bruxa, essas coisas s&atilde;o f&aacute;ceis de se fazer.${endParag}
${firstParag}Depois de me certificar de que ela estava bem, corri para pegar as vassouras que haviam ca&iacute;do do telhado. Decidi que provavelmente era uma boa ideia sair de l&aacute; antes de fazer mais uma cena.${endParag}
${firstParag}&mdash; Ah, hmm!${endParag}
${firstParag}A garota aparentemente tinha mais a me dizer, mas joguei uma perna sobre a minha vassoura, ignorando-a.${endParag}
${firstParag}&mdash; Voc&ecirc; n&atilde;o precisa se desculpar. S&oacute; n&atilde;o se esque&ccedil;a de olhar para onde est&aacute; indo quando estiver voando na sua vassoura, entendeu?${endParag}
${firstParag}&mdash; Por favor, espere, eu tenho que fazer algo para compensar&hellip;${endParag}
${firstParag}&mdash; N&atilde;o precisa. Estou com pressa. Adeus, novi&ccedil;a sem nome.${endParag}
${firstParag}E ent&atilde;o voei para longe.${endParag}
${divisor} src=${bookmarkElaina} alt="divisor"/>

${firstParag}Qualquer humano que possa usar magia inicia seu treinamento como novi&ccedil;o. Nem todo mundo pode se tornar um e, na maioria das vezes, a habilidade &eacute; passada pelo sangue. Meus pais tamb&eacute;m eram novi&ccedil;os.${endParag}
${firstParag}As bruxas aprendizes est&atilde;o acima dos novi&ccedil;os, mas est&atilde;o um n&iacute;vel abaixo das bruxas completas. Como o nome sugere, o t&iacute;tulo de &ldquo;bruxa&rdquo; se aplica apenas a garotas e mulheres. N&atilde;o tenho ideia do porqu&ecirc;, mas as mulheres t&ecirc;m maior capacidade m&aacute;gica inata do que os homens. &Eacute; por isso que apenas podem alcan&ccedil;ar n&iacute;veis mais altos que os novi&ccedil;os.${endParag}
${firstParag}S&oacute; h&aacute; uma maneira de se tornar uma aprendiz: passar nos exames de magia e receber o <em>corsage</em> que comprova seu <em>status</em>. N&atilde;o h&aacute; m&eacute;todo alternativo. S&oacute; que os exames s&atilde;o brutais e muitas pessoas desistem antes de chegarem ao fim.${endParag}
${firstParag}Depois de se tornar uma bruxa aprendiz, a pessoa passa por um regime de treinamento muito espec&iacute;fico para ganhar o t&iacute;tulo de &ldquo;bruxa&rdquo;. Isso significa longos dias de trabalho duro sob o olhar atento de uma bruxa adequada, at&eacute; que a aprendiz finalmente consiga sua aprova&ccedil;&atilde;o. O treinamento pode durar um &uacute;nico dia ou at&eacute; dez anos. Tudo depende dos esfor&ccedil;os da pr&oacute;pria indiv&iacute;dua e da bruxa que est&aacute; servindo como professora.${endParag}
${firstParag}Quando algu&eacute;m &eacute; oficialmente reconhecida como uma bruxa, recebe um broche em forma de estrela com o nome gravado no fundo e sua professora lhe d&aacute; um t&iacute;tulo de bruxa. O meu &eacute; &ldquo;a Bruxa Cinzenta&rdquo;.${endParag}
${firstParag}Essa foi uma explica&ccedil;&atilde;o bastante demorada, mas meu argumento &eacute; que, como uma bruxa de pleno direito, deveria ser uma das principais usu&aacute;rias de magia deste pa&iacute;s. Eu esperava que as pessoas olhassem para mim com inveja quando voasse pelo c&eacute;u, que quando fosse a um restaurante me dissessem: &ldquo;Madame Bruxa! Permita-me oferecer-lhe um desconto em tudo! Por favor, coma o quanto quiser!&rdquo;, e assim por diante, mas&hellip;${endParag}
${firstParag}&mdash; H&atilde;? Um desconto? N&oacute;s n&atilde;o temos nada assim aqui. Voc&ecirc; est&aacute; dizendo que n&atilde;o tem dinheiro, mocinha?${endParag}
${firstParag}&mdash; &hellip;${endParag}
${firstParag}<em>Ent&atilde;o &eacute; assim, hmm? Suponho que se o restaurante desse um tratamento especial a todas as bruxas, iria acabar falindo.</em>${endParag}
${firstParag}Sa&iacute; do restaurante e fui ao joalheiro. Queria vender uma joia que havia comprado em um dos pa&iacute;ses que visitei antes e esperava conseguir uma quantia consider&aacute;vel por ela.${endParag}
${firstParag}&mdash; Ah, isso aqui &eacute; falso, sabe? N&atilde;o posso te pagar nada por uma coisa dessas.${endParag}
${firstParag}&mdash; S&oacute; pode ser engano. Veja direito, por favor.${endParag}
${firstParag}&mdash; Eu posso olhar o quanto quiser, mas a resposta ser&aacute; a mesma. O que voc&ecirc; quer fazer? Se n&atilde;o precisar disso, posso me livrar dessa coisa para voc&ecirc;&hellip;${endParag}
${firstParag}&mdash; Parece que voc&ecirc; est&aacute; planejando me roubar, n&atilde;o &eacute;&hellip;?${endParag}
${firstParag}&mdash; Claro que n&atilde;o, querida! Eu nunca faria isso com voc&ecirc;. Ent&atilde;o, e a&iacute;?${endParag}
${firstParag}&mdash; Devolva.${endParag}
${firstParag}Quando deixei a joalheria, estava de mau humor.${endParag}
${firstParag}<em>Bem, tenho certeza de que o dono dessa joalheria &eacute; s&oacute; um vigarista, isso &eacute; tudo. N&atilde;o &eacute; como se ele estivesse tratando especificamente eu com desprezo, n&eacute;? N&eacute;&hellip;?</em>${endParag}
${firstParag}Sentindo-me desconfort&aacute;vel, fui para uma pousada. O dia estava chegando ao fim. Contudo&hellip;${endParag}
${firstParag}&mdash; Ei. Este n&atilde;o &eacute; um lugar para crian&ccedil;as como voc&ecirc;. X&ocirc;, x&ocirc;.${endParag}
${firstParag}<em>Huuuh&hellip;? Mas que diabos? Este &eacute; algum tipo de hotel exclusivo para pessoas ricas? Hmm&hellip; De qualquer forma, n&atilde;o vou ficar aqui. Vamos para outro lugar.</em>${endParag}
${firstParag}Pulei da minha vassoura no topo de uma pousada muito barata com uma placa esfarrapada. Este lugar c<em>ertamente n&atilde;o vai me mandar embora.</em>${endParag}
${firstParag}Abri a janela no telhado e desci a escada que levava para dentro. Mas na metade do caminho n&atilde;o pude mais me incomodar, ent&atilde;o pulei.${endParag}
${firstParag}<em>Baque.</em> O som ecoou pelo edif&iacute;cio como se fosse uma bala de canh&atilde;o.${endParag}
${firstParag}<em>Ei, n&atilde;o sou t&atilde;o pesada. Grosso.</em>${endParag}
${firstParag}Ca&iacute; no meio da recep&ccedil;&atilde;o.${endParag}
${firstParag}A garota sentada atr&aacute;s do balc&atilde;o olhou para mim.${endParag}
${firstParag}&mdash; Bem-vi&hellip;${endParag}
${firstParag}E ficou r&iacute;gida.${endParag}
${firstParag}Eu tamb&eacute;m.${endParag}
${firstParag}Ela tinha cabelo preto curto. Caracter&iacute;sticas masculinas e andr&oacute;genas.${endParag}
${firstParag}Sentada na minha frente estava a garota que (literalmente) se encontrou comigo v&aacute;rias horas antes.${endParag}
${firstParag}&mdash; &hellip;${endParag}
${firstParag}&mdash; &hellip;${endParag}
${firstParag}Ela foi a primeira a se soltar do momento de congelamento no tempo.${endParag}
${firstParag}&mdash; E-eeeeeek! Me d-d-desculpe! Eu sinto muito! Voc&ecirc; est&aacute; aqui por vingan&ccedil;a? Isso &eacute; vingan&ccedil;a, n&atilde;o &eacute;?! Eu sinto muito! Poupe minha vida! Me poupeee!${endParag}
${firstParag}&mdash; N&atilde;o, uh&hellip;${endParag}
${firstParag}&mdash; Waaaaaah! Eu n&atilde;o quero morreeeeeeeeeeeeer!${endParag}
${firstParag}&mdash; Hmm&hellip;&mdash; <em>N&atilde;o precisa dessa histeria; vamos l&aacute;.</em>${endParag}
${firstParag}Ela estava batendo a cabe&ccedil;a no balc&atilde;o e chorando.${endParag}
${firstParag}&mdash; Apenas poupe minha viiiida&hellip;${endParag}
${firstParag}Toquei seu ombro levemente.${endParag}
${firstParag}&mdash; Eek! Voc&ecirc; vai me rasgar membro a membro? Vai come&ccedil;ar pelo meu ombro? N&atilde;&atilde;&atilde;&atilde;&atilde;o!${endParag}
${firstParag}<em>Voc&ecirc; poderia ficar quieta por um segundo&hellip;? Espera, n&atilde;o, n&atilde;o diga isso em voz alta.</em>${endParag}
${firstParag}&mdash; Hmm, est&aacute; tudo bem? Eu s&oacute; vim para passar a noite nesta pousada.${endParag}
${firstParag}&mdash; N&atilde;&atilde;&atilde;&atilde;&atilde;&atilde;&atilde;&atilde;&atilde;&atilde;o&hellip; Ah, &eacute; s&oacute; isso? Nesse caso, preencha este formul&aacute;rio.${endParag}
${firstParag}&mdash; &hellip;${endParag}
${firstParag}Havia v&aacute;rias coisas que eu gostaria de dizer, mas me contive. Deixar isso de lado seria a melhor op&ccedil;&atilde;o.${endParag}
${firstParag}Peguei o formul&aacute;rio dela e tamb&eacute;m uma caneta de pena em seu suporte no balc&atilde;o. Era uma documenta&ccedil;&atilde;o simples, apenas perguntando o n&uacute;mero de pessoas e o n&uacute;mero de noites, assim como o nome de um representante. Como viajante experiente, eu rapidamente me acostumei a esse tipo de coisa.${endParag}
${firstParag}Enquanto movia a caneta de pena pelo papel, a garota falou com uma voz muito baixa:${endParag}
${firstParag}&mdash; Sinto muito pelo que aconteceu esta tarde. Sempre que minha mente divaga durante o treino, pare&ccedil;o perder a capacidade de pilotar a vassoura&hellip;${endParag}
${firstParag}&mdash; Entendo.&mdash; <em>Em outras palavras, voc&ecirc; voa muito mal.</em>${endParag}
${firstParag}&mdash; Eu realmente queria te agradecer direito, mas voc&ecirc; fugiu&hellip; Ah, ent&atilde;o seu nome &eacute; Elaina. Me chamo Saya. &mdash; Ela sorriu alegremente para mim enquanto me observava escrever.${endParag}
${firstParag}&mdash; Voc&ecirc; realmente n&atilde;o precisa me agradecer &mdash; respondi enquanto continuava preenchendo o formul&aacute;rio. &mdash; Al&eacute;m disso, muitas pessoas acabam passando por algo com as outras enquanto praticam magia.${endParag}
${firstParag}<em>Parando para pensar, uma vez incendiei minha casa tentando acender uma vela. Meus pais ficaram realmente chateados com aquilo. Ah, a juventude&hellip;</em>${endParag}
${firstParag}&mdash; Por que voc&ecirc; n&atilde;o me deixa te compensar? Causei todo esse problema para voc&ecirc;, e voc&ecirc; at&eacute; curou os meus ferimentos. Detestaria deixar as coisas como est&atilde;o.${endParag}
${firstParag}&mdash; Est&aacute; tudo bem, mas&hellip;${endParag}
${firstParag}&mdash; Est&aacute; tudo bem! Por favor! Senhorita Elaina!${endParag}
${firstParag}Balancei minha cabe&ccedil;a quando a garota me pediu para deix&aacute;-la me compensar. Tenho certeza de que seria estranho assistir isso.${endParag}
${firstParag}<em>Bem, n&atilde;o &eacute; como se estivesse me pedindo para sair do meu caminho por ela, ent&atilde;o n&atilde;o preciso me incomodar.</em> Pensei um pouco enquanto escrevia.${endParag}
${firstParag}&mdash; Hmm&hellip; bem, nesse caso&hellip; &mdash; <em>Que tal eu fazer voc&ecirc; me dar um desconto?</em> Eu estava prestes a perguntar, mas me contive.${endParag}
${firstParag}Um ponto no formul&aacute;rio chamou minha aten&ccedil;&atilde;o. DESCONTO ESPECIAL PARA BRUXAS (DESCONTO POR UMA NOITE).${endParag}
${firstParag}<em>Oh ho! O que temos aqui?</em>${endParag}
${firstParag}&mdash; Ah, esse desconto n&atilde;o se aplica a quem n&atilde;o &eacute; bruxa. Magos comuns devem circular a op&ccedil;&atilde;o de pre&ccedil;o regular &mdash; disse ela, franzindo as sobrancelhas.${endParag}
${firstParag}&mdash; Entendo. &mdash; Circulei o DESCONTO ESPECIAL PARA BRUXAS (DESCONTO POR UMA NOITE).${endParag}
${firstParag}&mdash; Eh? N&atilde;o, hmm&hellip; Hein?${endParag}
${firstParag}<em>O que h&aacute; com essa rea&ccedil;&atilde;o estranha? Sheesh, que rude.</em>${endParag}
${firstParag}&mdash; Eu <em>sou</em> uma bruxa, ent&atilde;o&hellip;${endParag}
${firstParag}&mdash; Vamos l&aacute;, voc&ecirc; n&atilde;o devia brincar com isso&hellip; Ah, bem, mas eu te causei um monte de problemas&hellip; Beleza! Vamos l&aacute;, vou dar o desconto! &mdash; Ela bateu palmas uma vez.${endParag}
${firstParag}Eu tive a sensa&ccedil;&atilde;o de que est&aacute;vamos de alguma forma passando por um mal-entendido, e isso estava me deixando nervosa. Balancei minha cabe&ccedil;a.${endParag}
${firstParag}&mdash; N&atilde;o, n&atilde;o, n&atilde;o, n&atilde;o &eacute; isso. Veja, eu <em>sou</em> uma bruxa. N&atilde;o v&ecirc; como estou vestida?${endParag}
${firstParag}&mdash; H&atilde;? &mdash; disse ela, apontando para o meu peito. &mdash; Mas voc&ecirc; n&atilde;o tem um broche de bruxa.${endParag}
${firstParag}&mdash; Perd&atilde;o?${endParag}
${firstParag}Seguindo o dedo dela, abaixei meus olhos para o meu pr&oacute;prio peito.${endParag}
${firstParag}O broche que estava l&aacute; havia desaparecido.${endParag}
${firstParag}&nbsp;${endParag}
${divisor} src=${bookmarkElaina} alt="divisor"/>

${firstParag}Em certo sentido, o broche de uma bruxa seria sua identifica&ccedil;&atilde;o. Sem ele, eu era apenas uma viajante capaz de usar magia.${endParag}
${firstParag}<em>Deve ser por isso que a &uacute;ltima pousada me tratou como uma criancinha. Agora entendo. Mas como foi que n&atilde;o percebi que isso sumiu? Bruxas n&atilde;o s&atilde;o t&atilde;o raras, e se eu tivesse sido um pouco mais c&eacute;tica, poderia ter feito algo mais cedo. Sou s&oacute; uma idiota? Ugh, que se dane, Elaina!</em>${endParag}
${firstParag}Enquanto amaldi&ccedil;oava e xingava a mim mesma, procurei freneticamente pelo broche.${endParag}
${firstParag}&mdash; Ele se foi&hellip;${endParag}
${firstParag}Estava em lugar nenhum.${endParag}
${firstParag}Eu devia ter deixado cair ap&oacute;s a colis&atilde;o com Saya, mas j&aacute; estava completamente escuro do lado de fora. O broche era pequeno o suficiente para caber na palma da minha m&atilde;o&hellip; n&atilde;o era exatamente o tipo de coisa que poderia encontrar apenas tateando no escuro.${endParag}
${firstParag}&mdash; &hellip;Afe.${endParag}
${firstParag}Depois de vasculhar o telhado em zigue-zague e examinar todas as rachaduras entre as telhas, desci ao n&iacute;vel do solo e procurei por todo o pr&eacute;dio. Mas, claro, sem sorte.${endParag}
${firstParag}<em>Eu vou chorar.</em>${endParag}
${firstParag}&mdash; N&atilde;o encontrei nada!! Senhorita Elaina, tamb&eacute;m n&atilde;o est&aacute; aqui!! &mdash; Uma voz irritantemente alta soou do telhado, ecoando pelo beco todo. Quando olhei para cima, vi Saya iluminada pelo luar.${endParag}
${firstParag}Logo depois que descobrimos que o broche sumiu, ela disse:${endParag}
${firstParag}&mdash; Isso tamb&eacute;m &eacute; culpa minha, ent&atilde;o vou com voc&ecirc;! &mdash; E insistiu em se juntar a mim na minha busca. Ela deixou outra pessoa no comando da pousada ou algo assim, acho.${endParag}
${firstParag}Enquanto eu procurava pelo ch&atilde;o, a deixei procurando no telhado, para o caso de ter deixado algo passar. Mas, aparentemente, ela n&atilde;o se saiu melhor que eu.${endParag}
${firstParag}Flutuei ao lado dela na minha vassoura.${endParag}
${firstParag}&mdash; Fizemos uma busca completa e o broche n&atilde;o est&aacute; aqui. Temos que considerar a possibilidade de algu&eacute;m ter pego&hellip; &mdash; Soltei um suspiro profundo.${endParag}
${firstParag}&mdash; Acho que tamb&eacute;m ser&aacute; dif&iacute;cil de encontrar, j&aacute; que est&aacute; escuro&hellip; &mdash;&nbsp; disse Saya. &mdash; Pode ser bom procurar aqui novamente amanh&atilde; de manh&atilde;. &mdash; Sua voz estava alegre, embora meus ombros estivessem ca&iacute;dos de decep&ccedil;&atilde;o. Fiquei um pouco agradecida pelo otimismo dela.${endParag}
${firstParag}&mdash; Vou fazer isso&hellip; &mdash; Balancei a cabe&ccedil;a humildemente com a sugest&atilde;o dela e virei para voltar para a pousada.${endParag}
${firstParag}Voando inst&aacute;vel na minha vassoura, eu parecia uma simples bruxa novi&ccedil;a que ainda estava aprendendo a voar. <em>Ah, se algu&eacute;m voasse perto de mim, eu poderia acabar por colidir com essa pessoa.</em>${endParag}
${firstParag}Eu tinha passado por muita coisa para conseguir aquele broche, e ele guardava muitas lembran&ccedil;as do meu tempo com minha professora. Perder aquilo era algo amargo de engolir.${endParag}
${firstParag}Se eu o tivesse perdido quando me tornei uma bruxa, tenho certeza de que teria notado na mesma hora. Mas depois de us&aacute;-lo todos os dias por dois anos, provavelmente estava acostumada a t&ecirc;-lo sempre comigo.${endParag}
${firstParag}<em>&mdash; Uff&hellip;</em>${endParag}
${firstParag}Isso foi deprimente.${endParag}
${firstParag}Ap&oacute;s a busca, voltei para a pousada e jantei, depois entrei no meu quarto usando a chave que recebi de Saya, lembrei que ainda n&atilde;o tinha tomado banho e fui direto para o grande banheiro anexo.${endParag}
${firstParag}Mergulhei na &aacute;gua quente por uma hora inteira enquanto minha mente vagava. <em>Ah, devo ter perdido quando colidi com Saya&hellip; mas n&atilde;o estava l&aacute;&hellip; Que misterioso&hellip;</em> Me espreguicei quase toda e enchi a banheira (estava sozinha). Ent&atilde;o, pouco antes de derreter na &aacute;gua quente, voltei a sentar o meu corpo que j&aacute; come&ccedil;ava a ficar pesado.${endParag}
${firstParag}E depois voltei para o meu quarto&hellip;${endParag}
${firstParag}&mdash; Ah, oi&hellip;${endParag}
${firstParag}&hellip;e encontrei Saya l&aacute; dentro.${endParag}
${firstParag}Fechei a porta. Dei um passo para tr&aacute;s e verifiquei o n&uacute;mero do quarto. <em>Sim, corresponde ao n&uacute;mero escrito na chave. Estranho. Ser&aacute; que estou vendo coisas?</em>${endParag}
${firstParag}Abri a porta mais uma vez.${endParag}
${firstParag}&mdash; Ah, oi&hellip;${endParag}
${firstParag}Se ao menos fosse um pesadelo&hellip; Mas, infelizmente, n&atilde;o havia como confundir: Saya estava no meu quarto, me dando um aceno despreocupado de cima da cama dura.${endParag}
${firstParag}&mdash; &hellip;${endParag}
${firstParag}&mdash; O que voc&ecirc; est&aacute; fazendo no meu quarto&hellip;? &mdash; Fechei a porta com uma m&atilde;o atr&aacute;s das costas.${endParag}
${firstParag}&mdash; Eu queria falar com voc&ecirc;, Elaina, ent&atilde;o fiquei esperando.${endParag}
${firstParag}&mdash; Pensei ter trancado a porta.${endParag}
${firstParag}&mdash; Voc&ecirc; com certeza trancou! Mas eu trabalho aqui! &mdash; Ela orgulhosamente puxou um chaveiro com um grande n&uacute;mero de chaves.${endParag}
${firstParag}Fui at&eacute; ela sem dizer uma palavra e agarrei suas duas bochechas.${endParag}
${firstParag}&mdash; Ow, isho machucha! D&oacute;i!${endParag}
${firstParag}&mdash; Mas que grande ideia, entrar no quarto de uma pessoa sem permiss&atilde;o? Hein? &mdash; Puxei suas bochechas com for&ccedil;a.${endParag}
${firstParag}&mdash; Vau raxghrs! Voxe vaiu raxghrs minhas chechas! &mdash; <em>Vai rasgar, voc&ecirc; vai rasgar minhas bochechas, &eacute; o</em> que ela parecia querer dizer.${endParag}
${firstParag}&mdash; Hmm? O que foi? N&atilde;o consigo te ouvir.${endParag}
${firstParag}&mdash; Waaaaaah&hellip;${endParag}
${firstParag}Puxei e torci suas bochechas macias at&eacute; ficar satisfeita e a soltei.${endParag}
${firstParag}Massageando as bochechas levemente vermelhas com as duas m&atilde;os, Saya murmurou:${endParag}
${firstParag}&mdash; Isso foi maldade&hellip; &mdash; Realmente, por&eacute;m, qual de n&oacute;s estava mais errada aqui?${endParag}
${firstParag}&mdash; Bem, o que voc&ecirc; quer? Voc&ecirc; fez quest&atilde;o de esperar no meu quarto, ent&atilde;o deve ter algum motivo para isso, certo?${endParag}
${firstParag}Ainda massageando seu rosto, Saya disse:${endParag}
${firstParag}&mdash; Senhorita Elaina, voc&ecirc; &eacute; realmente uma bruxa, certo?${endParag}
${firstParag}&mdash; Sim, bem &mdash; confirmei &mdash;, n&atilde;o estou com o meu broche no momento, mas, sim, sou uma bruxa.${endParag}
${firstParag}&mdash; Ent&atilde;o isso significa que voc&ecirc; passou no exame de magia, certo?${endParag}
${firstParag}&mdash; Passei.${endParag}
${firstParag}Mesmo nesse momento, me lembrei do meu desapontamento pela falta de desafio.${endParag}
${firstParag}Saya olhou para mim por um momento, depois de repente desceu da cama e se ajoelhou. Ent&atilde;o colocou as duas m&atilde;os no ch&atilde;o e pressionou a testa no ch&atilde;o.${endParag}
${firstParag}&mdash; Por favor, me ajude! Ensine-me os segredos para passar no exame, por favor!${endParag}
${firstParag}&mdash; &hellip;Hum, o que voc&ecirc; est&aacute; fazendo a&iacute; no ch&atilde;o?${endParag}
${firstParag}&mdash; Essa &eacute; a maneira tradicional de nos prostrarmos em minha cidade natal! &Eacute; uma t&eacute;cnica infal&iacute;vel usada quando voc&ecirc; faz algo imperdo&aacute;vel &agrave; outra parte.${endParag}
${firstParag}<em>Que tradi&ccedil;&atilde;o estranha&hellip; As pessoas na sua cidade natal precisam se desculpar com os outros com tanta frequ&ecirc;ncia? Ainda assim, d&aacute; para realmente sentir a sinceridade.</em>${endParag}
${firstParag}Mas isso me deu&hellip; qual &eacute; a palavra? Um sentimento estranho? Assustador, n&atilde;o &eacute;?${endParag}
${firstParag}Reprimindo o desejo de dizer: <em>Huuuh? Voc&ecirc; acha que pode pedir um favor como esse? </em>Ajoelhei-me ao lado dela.${endParag}
${firstParag}&mdash; Hum, por enquanto apenas levante sua cabe&ccedil;a do ch&atilde;o.${endParag}
${firstParag}&mdash; Voc&ecirc; vai me ajudar?! &mdash; Ela olhou para mim.${endParag}
${firstParag}&mdash; Vamos com calma &mdash; falei. &mdash; Primeiro, conte-me sobre sua situa&ccedil;&atilde;o.${endParag}
${firstParag}Ela me contou.${endParag}
${firstParag}Deixei a garota sentar na cama novamente, puxei a cadeira de apar&ecirc;ncia barata pr&oacute;xima &agrave; mesa e me sentei de frente para ela. Saya sacudiu um pouco os cabelos pretos e inclinou a cabe&ccedil;a, depois hesitantemente abriu a boca.${endParag}
${firstParag}&mdash; Hum&hellip; ent&atilde;o, eu tenho uma irm&atilde; mais nova. Ela &eacute; muito fofa.${endParag}
${firstParag}&mdash; Certo&hellip; &mdash; <em>Essa &eacute; uma maneira muito estranha de come&ccedil;ar, mas j&aacute; me comprometi.</em>${endParag}
${firstParag}&mdash; Viemos de um pa&iacute;s distante ao leste. Minha irm&atilde; e eu viemos at&eacute; aqui para nos tornarmos bruxas aprendizes, n&atilde;o h&aacute; organiza&ccedil;&otilde;es oferecendo os exames em nossa cidade natal. Ent&atilde;o, n&oacute;s duas trabalhamos nesta pousada e economizamos dinheiro enquanto estud&aacute;vamos para os exames. Vivemos assim por v&aacute;rios anos, mas&hellip;${endParag}
${firstParag}&mdash; Mas voc&ecirc;s duas ainda s&atilde;o apenas novi&ccedil;as?${endParag}
${firstParag}Ela olhou para baixo e balan&ccedil;ou a cabe&ccedil;a lentamente.${endParag}
${firstParag}&mdash; Somente minha irm&atilde; fez a &uacute;ltima rodada de exames. E ela foi para casa. Sem mim.${endParag}
${firstParag}&mdash; &hellip;Hmm. &mdash; <em>Entendo, entendo. Acho que sei onde isso vai chegar. Em outras palavras&hellip; </em>&mdash; Sua irm&atilde;zinha fofinha te superou e voc&ecirc; ficou t&atilde;o impaciente que decidiu amarrar uma bruxa que acabou de conhecer, em um acidente, devo acrescentar, para ajud&aacute;-la a passar nos exames? &Eacute; isso?${endParag}
${firstParag}Co&ccedil;ando a bochecha com aparente constrangimento, Saya murmurou:${endParag}
${firstParag}&mdash; Bem, hum&hellip; isso &eacute;&hellip; sim, mais ou menos.${endParag}
${firstParag}&mdash; Ent&atilde;o, quando &eacute; o pr&oacute;ximo exame?${endParag}
${firstParag}&mdash; Daqui a uma semana&hellip; n&atilde;o tenho muito tempo&hellip;${endParag}
${firstParag}<em>Voc&ecirc; fez os exames de avan&ccedil;o v&aacute;rias vezes, ent&atilde;o n&atilde;o acho que haja necessidade de entrar em p&acirc;nico. Mas voc&ecirc; provavelmente est&aacute; t&atilde;o preocupada com isso s&oacute; porque quer ver sua irm&atilde; de novo.</em>${endParag}
${firstParag}&mdash; &hellip;${endParag}
${firstParag}Quebrando o sil&ecirc;ncio, falei:${endParag}
${firstParag}&mdash; Vou te ajudar pelo tempo que for preciso para encontrar meu broche. &mdash; De qualquer maneira, n&atilde;o poderia deixar o pa&iacute;s at&eacute; encontrar meu broche, e n&atilde;o teria nada para fazer quando n&atilde;o estivesse procurando. Ela provavelmente at&eacute; me deixaria ficar na pousada de gra&ccedil;a, ent&atilde;o achei que parecia uma boa ideia.${endParag}
${firstParag}&nbsp;${endParag}
${divisor} src=${bookmarkElaina} alt="divisor"/>
${firstParag}Para ser promovido ao n&iacute;vel de bruxa novi&ccedil;a, &eacute; necess&aacute;rio passar em um exame escrito e depois em um exame pr&aacute;tico de habilidades m&aacute;gicas.${endParag}
${firstParag}O exame escrito &eacute; simples e, desde que possa aprofundar a teoria m&aacute;gica, a hist&oacute;ria e outros assuntos em sua cabe&ccedil;a, nada poderia ser mais f&aacute;cil. Mas depois h&aacute; o exame pr&aacute;tico. N&atilde;o h&aacute; maneira de contornar isso; sem habilidade real, ter&aacute; que fazer de novo e de novo.${endParag}
${firstParag}Quanto ao conte&uacute;do do exame pr&aacute;tico, eles analisam principalmente duas habilidades: sua capacidade de pilotar uma vassoura e como lida com a magia ofensiva. Cada vez que o exame &eacute; realizado, apenas uma pessoa pode passar. O exame realizado em uma semana n&atilde;o seria diferente. Voando no c&eacute;u em uma vassoura, cada aspirante a bruxa atacava as outras, tentando derrubar suas oponentes enquanto se protegia. A &uacute;ltima que restasse passaria no exame e seria declarada publicamente como uma bruxa novi&ccedil;a.${endParag}
${firstParag}As batalhas eram sempre violentas e dif&iacute;ceis de assistir. As partes mais desagrad&aacute;veis da natureza humana sempre pareciam ficar &agrave; mostra. Se eu tivesse que fazer o exame pela segunda vez, n&atilde;o faria.${endParag}
${firstParag}&mdash; Tenho que ser honesta com voc&ecirc;, Saya. Com a capacidade que voc&ecirc; possui no momento, n&atilde;o importa o quanto lute, a chance de ganhar contra as outras candidatas &eacute; quase nula &mdash; disse de cima da minha vassoura. Era o in&iacute;cio da manh&atilde; do dia seguinte ao que prometi ajud&aacute;-la. &mdash; No entanto, perto de zero n&atilde;o significa zero absoluto. Deixe sua mente &agrave; vontade.${endParag}
${firstParag}&mdash; O-o que devo fazer?! &mdash; Ela estava en&eacute;rgica mesmo no in&iacute;cio da manh&atilde;, e seus olhos brilhavam de emo&ccedil;&atilde;o. A garota estava t&atilde;o radiante quanto o sol da manh&atilde;.${endParag}
${firstParag}Guiei minha vassoura at&eacute; onde ela estava sentada no telhado, de joelhos dobrados.${endParag}
${firstParag}&mdash; Primeiro, vou te ensinar a controlar sua vassoura pelo menos da melhor maneira poss&iacute;vel, se n&atilde;o melhor.${endParag}
${firstParag}&mdash; Aw&hellip; isso parece um pouco dif&iacute;cil&hellip; &mdash; Ela torceu o nariz.${endParag}
${firstParag}<em>Dif&iacute;cil? Eu estou pegando leve com voc&ecirc;</em>.${endParag}
${firstParag}&mdash; N&atilde;o h&aacute; outra maneira de acompanhar o exame de habilidades pr&aacute;ticas. Se voc&ecirc; tentar com seu n&iacute;vel de habilidade atual, provavelmente cair&aacute; no momento em que o exame iniciar e perder&aacute; outra chance. Voc&ecirc; precisa evitar ao menos isso.${endParag}
${firstParag}&mdash; Rgh&hellip;${endParag}
${firstParag}<em>E &eacute; nisso que vamos focar.</em>${endParag}
${firstParag}Primeiro, a fiz trabalhar para melhorar as habilidades m&aacute;gicas mais b&aacute;sicas. Assim como eu imaginava, Saya mal conseguia voar. (Era t&atilde;o ruim que eu estava pronta para questionar se deveria cham&aacute;-la de maga!) Realmente tive que ensinar o b&aacute;sico do b&aacute;sico.${endParag}
${firstParag}<em>Ah, ent&atilde;o &eacute; por isso que as m&atilde;es sentem ao ensinar aos filhos como voar em vassouras&hellip;</em>${endParag}
${firstParag}Treinamos de manh&atilde; at&eacute; &agrave; noite, contanto que o dia permitisse. Perseveramos em nosso curso intensivo, mesmo quando as crian&ccedil;as do bairro que voavam livremente ao nosso redor come&ccedil;avam a zoar e apontar.${endParag}
${firstParag}Naturalmente, n&atilde;o havia me esquecido de procurar meu broche. Saya estava passando por uma melhoria gradual, mas eu n&atilde;o tinha feito nenhum progresso.${endParag}
${firstParag}<em>S&eacute;rio, onde no mundo est&aacute; o meu broche?</em>${endParag}
${firstParag}&mdash; Vire na pr&oacute;xima. Altere suavemente seu centro de gravidade e fa&ccedil;a uma curva r&aacute;pida, por favor.${endParag}
${firstParag}&mdash; Certo!${endParag}
${firstParag}&mdash; Depois &eacute; a frenagem de emerg&ecirc;ncia e o aumento de velocidade. Use todo o peso do seu corpo e puxe a vassoura com for&ccedil;a para par&aacute;-la, depois dispare como se estivesse chutando o c&eacute;u.${endParag}
${firstParag}&mdash; Certo!${endParag}
${firstParag}&mdash; Depois &eacute; a desmontada a&eacute;rea. Depois de soltar a vassoura no ar, use a magia para cham&aacute;-la de volta. Vou te ajudar se voc&ecirc; tiver problemas, ent&atilde;o n&atilde;o se preocupe e apenas voe.${endParag}
${firstParag}&mdash; Certo!${endParag}
${firstParag}&mdash; Em seguida &eacute;&hellip; &mdash; T&aacute;, j&aacute; deu para entender.${endParag}
${firstParag}No final, Saya logo aprendeu a controlar sua vassoura quase t&atilde;o bem quanto eu. Quanto tempo levou para ela atingir esse n&iacute;vel? S&oacute; dois dias! Eu tinha conseguido fazer ela passar por algumas melhorias incr&iacute;veis. <em>Realmente faz eu me perguntar o que ela estava fazendo at&eacute; agora&hellip; ou ser&aacute; que o meu ensino que &eacute; t&atilde;o bom?</em>${endParag}
${firstParag}Quando perguntei a ela, Saya me disse toda t&iacute;mida:${endParag}
${firstParag}&mdash; At&eacute; agora, s&oacute; estudei sozinha.${endParag}
${firstParag}<em>Bem, esse &eacute; o seu problema.</em>${endParag}
${firstParag}Era o quarto dia da minha estadia neste pa&iacute;s, e o terceiro dia do nosso regime de treinamento intensivo. Ao contr&aacute;rio da busca pelo meu broche, que n&atilde;o teve nenhum progresso (embora eu s&oacute; estivesse perguntando por a&iacute;), o treinamento de Saya estava progredindo rapidamente e n&atilde;o parecia que pararia t&atilde;o cedo.${endParag}
${firstParag}&mdash; Em seguida, vamos estudar alguns feiti&ccedil;os ofensivos&hellip; como &eacute; a sua magia de vento?${endParag}
${firstParag}&mdash; Magia de vento? &mdash; Saya estava sentada no topo do telhado marrom-avermelhado, com a cabe&ccedil;a inclinada.${endParag}
${firstParag}Balancei a cabe&ccedil;a uma vez e respondi:${endParag}
${firstParag}&mdash; Sim, vento. Ao controlar o fluxo do ar, voc&ecirc; pode bloquear as outras participantes.${endParag}
${firstParag}Esse era o m&eacute;todo pouco convencional que eu havia usado durante meu pr&oacute;prio exame pr&aacute;tico. Mudar o fluxo do ar era surpreendentemente eficaz, e mesmo nesse momento eu me lembrava de como as outras concorrentes haviam perdido o equil&iacute;brio e ca&iacute;do de suas vassouras ou desviado e batido nos pr&eacute;dios.${endParag}
${firstParag}Controle de vento era f&aacute;cil de aprender e tamb&eacute;m uma arma poderosa. Se tiv&eacute;ssemos tempo suficiente, definitivamente queria ensin&aacute;-la.${endParag}
${firstParag}&mdash; Bem, ent&atilde;o, acerte aquela lata ali com uma rajada de vento, por favor.${endParag}
${firstParag}Apontei para as latas que colocamos no topo do telhado &agrave; nossa frente. Havia cerca de uma casa de dist&acirc;ncia entre n&oacute;s e as latas, mas n&atilde;o seria uma tarefa dif&iacute;cil.${endParag}
${firstParag}&mdash; Funciona melhor se voc&ecirc; imaginar uma bola de ar e tentar bater nas latas com ela&hellip; assim.${endParag}
${firstParag}Balancei minha varinha e, instantaneamente, um vento forte ro&ccedil;ou uma das latas. Ela oscilou para frente e para tr&aacute;s enquanto soltava ru&iacute;dos.${endParag}
${firstParag}Me virei para encarar Saya, que estava me olhando duvidosamente. Ela parecia estar pensando: &ldquo;<em>N&atilde;o caiu, caiu? Voc&ecirc; errou?&rdquo;</em>${endParag}
${firstParag}<em>Mas eu fiz isso de prop&oacute;sito. S&eacute;rio!</em>${endParag}
${firstParag}&mdash; Tudo bem, tente.${endParag}
${firstParag}&mdash; A-assim&hellip;?${endParag}
${firstParag}Com um <em>whoosh</em>, Saya balan&ccedil;ou a varinha. A magia de vento &eacute; um dos primeiros tipos de magia que uma bruxa novi&ccedil;a aprende, ent&atilde;o ela foi capaz de produzir uma rajada de vento, mas aquilo simplesmente correu por cima das latas. <em>Que pena.</em>${endParag}
${firstParag}&mdash; Voc&ecirc; est&aacute; segurando a varinha errado. Seu balan&ccedil;o tamb&eacute;m foi errado. A magia de vento &eacute; sutil, portanto, tentar for&ccedil;&aacute;-la n&atilde;o ajudar&aacute;.${endParag}
${firstParag}&mdash; Hum, beleza, assim?${endParag}
${firstParag}<em>Whoosh.</em> O vento passou direto pela lata, exatamente como antes.${endParag}
${firstParag}&mdash; Errado. Assim.${endParag}
${firstParag}Balancei minha varinha e as latas bateram uma contra a outra. Saya soltou um pequeno ru&iacute;do de surpresa. &ldquo;Whoa&hellip;&rdquo; Ela finalmente percebeu que eu estava tentando <em>n&atilde;o</em> derrubar as latas.${endParag}
${firstParag}E ent&atilde;o ela balan&ccedil;ou a varinha novamente, mais gentilmente desta vez, soltando um breve &ldquo;Ey!&rdquo;. A garota claramente aprendeu me observando, mas a for&ccedil;a por tr&aacute;s de sua magia era muito fraca. S&oacute; produziu uma brisa leve.${endParag}
${firstParag}<em>Isso n&atilde;o est&aacute; dando muito certo&hellip;</em>${endParag}
${firstParag}&mdash; N&atilde;o assim. Desse jeito.${endParag}
${firstParag}&mdash; Assim?${endParag}
${firstParag}<em>Balan&ccedil;a e solta.</em>${endParag}
${firstParag}&mdash; Totalmente errado. Desse jeito.${endParag}
${firstParag}&mdash; A-assim?!${endParag}
${firstParag}O vento nem tocou as latas.${endParag}
${firstParag}&mdash; Simplesmente horr&iacute;vel. Desse jeito, preste aten&ccedil;&atilde;o.${endParag}
${firstParag}&mdash; Desse jeito, ent&atilde;o!${endParag}
${firstParag}&mdash; &hellip;${endParag}
${firstParag}Uma causa perdida. S&eacute;rio mesmo. Minhas instru&ccedil;&otilde;es n&atilde;o fizeram nenhuma diferen&ccedil;a.${endParag}
${firstParag}<em>Hora de acelerar um pouco as coisas.</em> Fui at&eacute; atr&aacute;s dela e segurei seus dois pulsos. Os ombros de Saya tremeram de surpresa, e falei em seu ouvido:${endParag}
${firstParag}&mdash; Voc&ecirc; est&aacute; pronta? Vou canalizar um pouco de magia de vento em sua varinha. Lembre-se de como &eacute;.${endParag}
${firstParag}&mdash; C-com meu corpo?${endParag}
${firstParag}&mdash; Sim, com seu corpo. &mdash; Balancei a cabe&ccedil;a e, por algum motivo, suas orelhas ficaram vermelhas. &mdash; Okay, aqui vamos n&oacute;s&hellip;${endParag}
${firstParag}<em>Desse jeito.</em>${endParag}
${firstParag}No terceiro dia praticamos at&eacute; o sol se p&ocirc;r, e Saya falhou completamente em dominar a magia de vento.${endParag}
${firstParag}<em>De alguma forma, ela ficou ainda pior depois que canalizei minha magia atrav&eacute;s do seu corpo&hellip; Como isso pode ser poss&iacute;vel? N&atilde;o entendo.</em>${endParag}
${firstParag}Obviamente, eu n&atilde;o estava dando aten&ccedil;&atilde;o a Saya o tempo todo. Por volta do meio-dia, sa&iacute; sozinha e voei pela cidade procurando pelo meu broche, conversando com tantas pessoas diferentes quanto pude.${endParag}
${firstParag}A inten&ccedil;&atilde;o era continuar perguntando e perguntando.${endParag}
${firstParag}&Eacute; claro que n&atilde;o era como se eu esperasse encontrar informa&ccedil;&otilde;es com tanta facilidade, e no final todo mundo que perguntei balan&ccedil;ou a cabe&ccedil;a e deu a mesma resposta: &ldquo;Eu n&atilde;o sei.&rdquo;${endParag}
${firstParag}&mdash; Vi um broche &mdash; disse uma velhota, que parecia muito experiente em magia. Olhando mais de perto, pude ver que ela estava usando um broche em forma de estrela sobre o peito. No entanto, parecia quase t&atilde;o velho quanto ela, e estava bastante desgastado.${endParag}
${firstParag}<em>Parece que posso esperar algo dela. Entretanto, n&atilde;o tenho certeza do que esse &ldquo;algo&rdquo; &eacute;&hellip;</em>${endParag}
${firstParag}&mdash; On-onde voc&ecirc; viu?! &mdash; Me apeguei a essa not&iacute;cia na mesma hora.${endParag}
${firstParag}A mulher soltou uma risada digna de uma feiticeira.${endParag}
${firstParag}&mdash; Hee-hee-hee&hellip; Hmm, eu me pergunto&hellip;${endParag}
${firstParag}&mdash; Por favor, diga-me, sua mulher maravilhosa!${endParag}
${firstParag}&mdash; Hee-hee-hee. &mdash; De repente, ela come&ccedil;ou a empurrar a palma da m&atilde;o na minha dire&ccedil;&atilde;o.${endParag}
${firstParag}&mdash; O que isso quer dizer&hellip;?${endParag}
${firstParag}&mdash; Quanto essa informa&ccedil;&atilde;o vale para voc&ecirc;? Hmm?${endParag}
${firstParag}Ela ficou l&aacute;, com a m&atilde;o estendida em minha dire&ccedil;&atilde;o. &ldquo;Consegui ler o seu gesto: <em>Se quiser ouvir mais, ent&atilde;o pague</em>.&rdquo;${endParag}
${firstParag}<em>Ela joga sujo&hellip; N&atilde;o esperaria menos de uma bruxa&hellip;</em>${endParag}
${firstParag}&mdash; &hellip; &mdash; Silenciosamente produzi uma moeda da minha bolsa e a deixei cair na m&atilde;o da mulher. Quando o fiz, ela voltou a se mover, igual uma boneca de corda ganhando vida.${endParag}
${firstParag}&mdash; O que eu vi foi&hellip;${endParag}
${firstParag}A longa hist&oacute;ria da mulher s&oacute; confirmou minhas suspeitas.${endParag}
${divisor} src=${bookmarkElaina} alt="divisor"/>
${firstParag}Era a minha quinta noite neste pa&iacute;s.${endParag}
${firstParag}Enquanto olhava da minha cama para a lua no c&eacute;u do lado de fora da janela, a porta se abriu de repente. Olhei para cima e vi Saya me encarando toda t&iacute;mida.${endParag}
${firstParag}&mdash; Hmm, Senhorita Elaina?${endParag}
${firstParag}&mdash; O qu&ecirc;?${endParag}
${firstParag}&mdash; P-posso dormir aqui com voc&ecirc;?${endParag}
${firstParag}Olhei para a cama.${endParag}
${firstParag}&mdash; &hellip;${endParag}
${firstParag}&mdash; &Eacute; um pouco pequena, n&atilde;o acha?${endParag}
${firstParag}&mdash; Essa &eacute; uma pousada barata, sinto muito.${endParag}
${firstParag}<em>Ah, n&atilde;o, n&atilde;o foi isso que eu quis dizer. Este &eacute; um quarto para uma pessoa. E a cama tamb&eacute;m serve para uma pessoa dormir sozinha.</em>${endParag}
${firstParag}&mdash; Bem, se voc&ecirc; n&atilde;o se importa de ficar apertada, acho que n&atilde;o tem problema.${endParag}
${firstParag}&mdash; Yuppee!!!${endParag}
${firstParag}Saya bateu a porta e entrou no quarto, depois se arrastou para a cama. Ela cheirava bem, como se tivesse acabado de sair do banho. Como se tratava de uma pousada, dever&iacute;amos estar usando o mesmo xampu, mas o perfume era completamente diferente do meu. Peguei um pouco do meu cabelo e o aproximei do nariz, mas essa fragr&acirc;ncia tenra e feminina n&atilde;o sa&iacute;a de mim.${endParag}
${firstParag}<em>Por que ela &eacute; a &uacute;nica cheirando t&atilde;o bem? Ah, bem&hellip; Hora de dormir.</em>${endParag}
${firstParag}Me deitei, ainda olhando para a lua, e me cobri. Logo senti a presen&ccedil;a de algu&eacute;m atr&aacute;s de mim.${endParag}
${firstParag}&mdash; A lua n&atilde;o &eacute; brilhante demais para olhar enquanto est&aacute; indo dormir?${endParag}
${firstParag}&mdash; Um pouco. &mdash; Virei para o lado. Quando o fiz, meu olhar se encontrou com o dela. &mdash; Hmm, o que voc&ecirc; acabou de dizer sobre a lua&hellip;?${endParag}
${firstParag}&mdash; Eu n&atilde;o me importo, n&atilde;o &eacute; muito brilhante para mim. &mdash; Ela sorriu um pouco. Ao luar, seu sorriso parecia ef&ecirc;mero, como se pudesse dissolver se eu o tocasse.${endParag}
${firstParag}&mdash; Bom trabalho hoje. Voc&ecirc; alcan&ccedil;ou grandes melhorias em compara&ccedil;&atilde;o com quando come&ccedil;ou. Em breve n&atilde;o precisar&aacute; mais da minha ajuda.${endParag}
${firstParag}&mdash; Como &eacute;? Isso n&atilde;o &eacute; verdade. Ainda tem tanta coisa que quero que me ensine, Elaina.${endParag}
${firstParag}&mdash; Eu sou uma viajante&hellip; Logo vou sair deste pa&iacute;s.${endParag}
${firstParag}&mdash; Mas vamos ficar juntas at&eacute; l&aacute;.${endParag}
${firstParag}Eu a notei se contorcendo por baixo do cobertor, e ent&atilde;o senti algo em minha m&atilde;o.${endParag}
${firstParag}Ela olhou nos meus olhos e apertou minha m&atilde;o.${endParag}
${firstParag}&mdash; Por favor, quero que voc&ecirc; me ensine muito mais.${endParag}
${firstParag}&mdash; &hellip;${endParag}
${firstParag}Seus olhos refletiam a luz da lua.${endParag}
${firstParag}<em>Essa garota ing&ecirc;nua deve realmente idolatrar pessoas como eu. Sei que estou prestes a fazer algo cruel, mas, ainda assim, tenho que fazer o que &eacute; melhor para mim.</em>${endParag}
${firstParag}Eu n&atilde;o tinha certeza se o sentimento espinhoso no meu peito era culpa ou decep&ccedil;&atilde;o, mas queria acreditar que era o primeiro.${endParag}
${firstParag}&mdash; N&atilde;o faz sentido continuar essa conversa, Saya &mdash; falei, balan&ccedil;ando sua m&atilde;o &mdash;, ent&atilde;o por que n&atilde;o devolve meu broche?${endParag}
${firstParag}&nbsp;${endParag}
${divisor} src=${bookmarkElaina} alt="divisor"/>
${firstParag}A verdade por tr&aacute;s do misterioso desaparecimento do broche acabou sendo bastante simples.${endParag}
${firstParag}<em>&mdash; Havia uma jovem garota que colidiu com voc&ecirc;, certo? Depois que voc&ecirc; voou com pressa, ela pegou o broche.</em>${endParag}
${firstParag}Seus olhos ainda brilhavam com o dinheiro que eu havia lhe dado, a velha me disse que tinha visto tudo acontecendo. E a hist&oacute;ria dela era a verdade; uma parte de mim suspeitava da mesma coisa. N&atilde;o conseguir encontrar depois de procurar t&atilde;o minuciosamente&hellip; algu&eacute;m devia ter pego.${endParag}
${firstParag}Desde o in&iacute;cio suspeitei que havia algo acontecendo.${endParag}
${firstParag}&hellip;${endParag}
${firstParag}<em>Saya</em>.${endParag}
${firstParag}<em>Seu controle de vassoura era ruim demais &ndash; o suficiente para me fazer pensar que estava voando mal de prop&oacute;sito. Afinal, se n&atilde;o conseguisse pilotar sua vassoura de forma decente, n&atilde;o teria permiss&atilde;o para entrar neste pa&iacute;s.</em>${endParag}
${firstParag}No come&ccedil;o, assumi que Saya era uma moradora local, mas quando perguntei sobre isso, disse que era uma maga de um pa&iacute;s do leste que havia chegado sob circunst&acirc;ncias especiais. Se isso era verdade, ent&atilde;o era ainda mais estranho que n&atilde;o pudesse voar com sua vassoura. E ent&atilde;o&hellip;${endParag}
${firstParag}<em>Aqui est&aacute; a verdade&hellip; Suspeitei de voc&ecirc; desde o come&ccedil;o. Esperei e esperei at&eacute; que devolvesse meu broche.</em>${endParag}
${firstParag}&mdash; Mas voc&ecirc; escondeu e nunca me devolveu. Em vez disso, disse que queria que eu ficasse com voc&ecirc; para sempre. J&aacute; estou farta disso &mdash; disse a ela.${endParag}
${firstParag}Saya sentou na cama, abaixando a cabe&ccedil;a. Eu me perguntava que emo&ccedil;&atilde;o havia em seu rosto, mas n&atilde;o fiz nenhum movimento para confort&aacute;-la ao tocar seu ombro, como quando nos conhecemos. Infelizmente, n&atilde;o sou desse tipo.${endParag}
${firstParag}Ela manteve o olhar no ch&atilde;o, como se quisesse evitar o luar, e eu simplesmente esperei a sua resposta.${endParag}
${firstParag}Pergunto-me quanto tempo passou. Um minuto? Dez minutos? Podiam ter sido apenas dez segundos.${endParag}
${firstParag}&mdash; &hellip;perguntou?${endParag}
${firstParag}Eu mal pude ouvir uma voz muito baixa.${endParag}
${firstParag}&mdash; O que &eacute; que foi? &mdash; perguntei.${endParag}
${firstParag}&mdash; &hellip;Por que voc&ecirc; n&atilde;o me perguntou? &mdash; Dessa vez a ouvi com clareza.${endParag}
${firstParag}&mdash; Porque n&atilde;o tinha nenhuma prova. Essa &eacute; a primeira raz&atilde;o. Mesmo se te acusasse e chamasse de ladra, se voc&ecirc; negasse, eu n&atilde;o teria nenhuma evid&ecirc;ncia. Minhas m&atilde;os estariam atadas.${endParag}
${firstParag}&mdash; &hellip;${endParag}
${firstParag}&mdash; Al&eacute;m disso, eu acreditava que voc&ecirc; eventualmente devolveria. Na verdade, n&atilde;o acho que voc&ecirc; seja uma pessoa m&aacute;, Saya.${endParag}
${firstParag}Essa garota inocente e de alto astral me lembrava uma crian&ccedil;a que foi mimada por sua m&atilde;e.${endParag}
${firstParag}&mdash; Ent&atilde;o eu esperei &mdash; disse para ela.${endParag}
${firstParag}Saya finalmente levantou a cabe&ccedil;a. Seu lindo rosto estava uma bagun&ccedil;a, enrugado por causa do choro. Ela enxugou as l&aacute;grimas e tentou reprimir os solu&ccedil;os enquanto dizia:${endParag}
${firstParag}&mdash; Eu estava solit&aacute;ria.${endParag}
${firstParag}&mdash; N&atilde;o sou a sua irm&atilde;zinha.${endParag}
${firstParag}&mdash; Eu sei disso. Eu sei, mas&hellip; eu&hellip; eu queria ficar com voc&ecirc;. &mdash; A voz dela ficou t&atilde;o baixa. Eu n&atilde;o tinha certeza nem se ela estava falando com sua irm&atilde; ou comigo.${endParag}
${firstParag}Se eu escrevesse o que aprendi sobre Saya no curto per&iacute;odo de tempo desde que nos conhecemos, seria um resumo bem curtinho, mas, de alguma forma, acreditava que tinha chegado a entender que tipo de pessoa ela era. Se tratava de uma irm&atilde; mais velha in&uacute;til que sempre deixava sua doce irm&atilde; mais nova a mimar. Tenho certeza de que sempre foi assim, e foi por isso que n&atilde;o aguentou quando sua irm&atilde; mais nova a deixou para tr&aacute;s.${endParag}
${firstParag}&mdash; Eu odeio ficar sozinha. Eu odeio e fiquei com medo, ent&atilde;o&hellip;${endParag}
${firstParag}&mdash; Ei. &mdash; Eu cutuquei sua testa, e isso fez um <em>twik</em>. &mdash; Isso n&atilde;o &eacute; desculpa.${endParag}
${firstParag}<em>Se voc&ecirc; odeia ficar sozinha, ent&atilde;o encontre algu&eacute;m em quem confiar. Se voc&ecirc; odeia ser ridicularizada por estar sozinha, v&aacute; e encontre algu&eacute;m com quem se d&ecirc; bem. Se a solid&atilde;o &eacute; assustadora, fa&ccedil;a tudo o que puder para escapar dela.</em>${endParag}
${firstParag}&mdash; Realmente importa se voc&ecirc; est&aacute; sozinha agora? Se est&aacute; se sentindo sozinha? Voc&ecirc; pode se tornar uma bruxa novi&ccedil;a enquanto ainda mant&eacute;m esses medos? Sempre que os humanos est&atilde;o seriamente tentando realizar alguma coisa, eles ficam sozinhos. Voc&ecirc; n&atilde;o pode fazer nada se n&atilde;o estiver sozinha. E se encontrar uma parceira, ent&atilde;o est&aacute; tudo acabado.${endParag}
${firstParag}<em>Sua irm&atilde;zinha provavelmente estava tentando te ensinar isso ao te deixar. Mas n&atilde;o posso afirmar algo assim.</em>${endParag}
${firstParag}&mdash; Mas&hellip;${endParag}
${firstParag}&mdash; Ah-ah-ah. Sem desculpas. N&atilde;o ouvirei desculpas. &mdash; Cobri meus ouvidos com as duas m&atilde;os e balancei a cabe&ccedil;a. <em>De jeito nenhum.</em> Meu cabelo voou loucamente e a acertou no rosto.${endParag}
${firstParag}<em>Opa, aposto que ela n&atilde;o gostou disso.</em>${endParag}
${firstParag}&mdash; Claro, lutar sozinha &eacute; dif&iacute;cil. &Eacute; assustador. Eu entendi. E &eacute; por isso que&hellip; &mdash; Enquanto eu falava, usei magia para conjurar um chap&eacute;u pontudo, exatamente igual ao meu, e o coloquei em sua cabe&ccedil;a. &mdash; Estou te dando isso&hellip; Fique com uma pequena parte de mim ao seu lado. Ent&atilde;o voc&ecirc; ficar&aacute; bem, mesmo quando estiver sozinha.${endParag}
${firstParag}Segurando a aba do chap&eacute;u com for&ccedil;a, Saya disse:${endParag}
${firstParag}&mdash; Mas se eu aceitar isso, voc&ecirc; n&atilde;o ter&aacute;&hellip;${endParag}
${firstParag}&mdash; Ah, est&aacute; tudo bem. &Eacute; um reserva.${endParag}
${firstParag}Produzi outro chap&eacute;u e mostrei a ela antes de colocar em mim mesma.${endParag}
${firstParag}&mdash; Agora estamos combinando. A partir de agora, voc&ecirc; ficar&aacute; por conta pr&oacute;pria, mas nunca verdadeiramente sozinha. Sua irm&atilde; e eu estaremos sempre cuidando de voc&ecirc;. &mdash; <em>Ent&atilde;o devolva meu broche</em>, exigi silenciosamente.${endParag}
${firstParag}Ela puxou o chap&eacute;u, abaixou a cabe&ccedil;a e segurou-o com muita for&ccedil;a e, com os ombros tr&ecirc;mulos, assentiu em sil&ecirc;ncio. Saya parecia t&atilde;o fraca e desamparada.${endParag}
${firstParag}Abracei seus ombros magros e a puxei para mais perto.${endParag}
${firstParag}&nbsp;${endParag}
${ilust} src=${ilustMJV1C1} alt="divisor"/>
${firstParag}Chegara o dia.${endParag}
${firstParag}Passamos a minha &uacute;ltima noite no pa&iacute;s juntas. Eu consolei Saya enquanto ela chorava, dei alguns conselhos para passar no exame pr&aacute;tico de habilidades m&aacute;gicas, ouvi tudo sobre o pa&iacute;s de onde ela e sua irm&atilde; eram, discuti minhas futuras viagens e assim por diante.${endParag}
${firstParag}Ah, e acontece que Saya era realmente uma maga muito poderosa. Quero dizer, eu sabia disso o tempo todo, mas nunca descobri por que ela era t&atilde;o ruim em magia de vento. Nesse ponto, n&atilde;o importa o quanto perguntava, a garota s&oacute; corava e se recusava a responder. <em>Qual &eacute; o problema dela?</em>${endParag}
${firstParag}No final de tudo, adormecemos juntas no momento em que o sol estava nascendo. Tinha sido uma longa, longa noite.${endParag}
${firstParag}Mas tamb&eacute;m uma lembran&ccedil;a preciosa.${endParag}
${divisor} src=${bookmarkElaina} alt="divisor"/>
${firstParag}Voltei a pensar ap&oacute;s v&aacute;rios meses depois de deixar o Pa&iacute;s dos Magos.${endParag}
${firstParag}Seis meses, para ser exata.${endParag}
${firstParag}<em>Cerca de meio ano se passou desde que conheci aquela garota, perdi meu broche e o recuperei &ndash; uau, o tempo com certeza voa. De verdade.</em>${endParag}
${firstParag}Eu tinha viajado para outro pa&iacute;s t&atilde;o longe que as pessoas perguntavam: &ldquo;Hein? Pa&iacute;s dos Magos? Onde fica isso?&rdquo;${endParag}
${firstParag}A raz&atilde;o pela qual eu estava relembrando era que, por acaso, vi o nome dela enquanto estava passando por uma livraria.${endParag}
${firstParag}LISTA DE APROVADOS NO EXAME DE BRUXA NOVI&Ccedil;A${endParag}
${firstParag}Impresso em uma pilha de papel de palha realmente barato, era publicada todo m&ecirc;s pela misteriosa organiza&ccedil;&atilde;o conhecida como Associa&ccedil;&atilde;o de Magia, respons&aacute;vel pela realiza&ccedil;&atilde;o dos exames de bruxa novi&ccedil;a, entre outras coisas. Os resultados dos exames realizados em todo o mundo, al&eacute;m de algumas palavras das candidatas aprovadas, estavam exibidos na primeira p&aacute;gina.${endParag}
${firstParag}Seu nome estava l&aacute;.${endParag}
${firstParag}&mdash; Ei, sem leitura na loja. &mdash; O dono da loja apareceu dos fundos e me tomou os jornais.${endParag}
${firstParag}&mdash; Ah&hellip; <em>&mdash; Mas eu queria continuar lendo.</em>${endParag}
${firstParag}&mdash; Quer ler? Tem que pagar.${endParag}
${firstParag}&mdash; Quanto?${endParag}
${firstParag}&mdash; Um cobre.${endParag}
${firstParag}Paguei, depois enfiei o papel debaixo do bra&ccedil;o e voltei para minha pousada, cantarolando por todo o caminho. Puxei minha cadeira para a janela e continuei lendo. No artigo, a garota falava sobre seus dias mais dif&iacute;ceis e suas esperan&ccedil;as para o futuro.${endParag}
${firstParag}Segundo o artigo, ela havia se mudado para o Pa&iacute;s dos Magos com sua irm&atilde;zinha h&aacute; v&aacute;rios anos. Sua irm&atilde;, e apenas sua irm&atilde;, rapidamente se tornou uma bruxa novi&ccedil;a e voltou para sua cidade natal sem ela. Ent&atilde;o a garota acabou conhecendo uma certa viajante que lhe deu a coragem para lutar por conta pr&oacute;pria, al&eacute;m de um chap&eacute;u incrivelmente estiloso. Ela tentou o exame v&aacute;rias vezes depois que a viajante partiu, mas foi muito dif&iacute;cil. No entanto, continuou tentando e nunca desistiu e, no final das contas, ganhou o posto de bruxa novi&ccedil;a. Agora estava voltando para casa, com planos de treinar duro e se tornar uma bruxa de verdade.${endParag}
${firstParag}N&atilde;o pude deixar de sorrir.${endParag}
${firstParag}Sua longa hist&oacute;ria acabou com uma frase: &ldquo;Depois de voltar para casa e me tornar uma bruxa de pleno direito, gostaria de fazer uma visita &agrave; minha viajante preferida.&rdquo;${endParag}
${firstParag}Coloquei o jornal sobre a mesa e olhei para o c&eacute;u. Em algum lugar na extens&atilde;o infinita daquele c&eacute;u claro e azul p&aacute;lido, estava ela.${endParag}
${firstParag}&mdash; Estarei esperando para te ver&hellip; Saya.${endParag}
        `,
          },
          {
            id: 2,
            number: 2,
            title: "Uma Menina tão Doce Quanto Flores",
            release: "14/01/2021",
          },
          {
            id: 3,
            number: 3,
            title:
              "Na Estrada: O Conto de Um Homem Musculoso em Busca de Sua Irmãzinha",
            release: "14/01/2021",
          },
          {
            id: 4,
            number: 4,
            title: "Captação de Recursos",
            release: "14/01/2021",
          },
          {
            id: 5,
            number: 5,
            title:
              "Na Estrada: O Conto de Dois Homens que Não Conseguiram Resolver uma Discussão",
            release: "14/01/2021",
          },
          {
            id: 6,
            number: 6,
            title: "Felicidade Engarrafada",
            release: "14/01/2021",
          },
          {
            id: 7,
            number: 7,
            title: "Antes do Início da Competição",
            release: "14/01/2021",
          },
          {
            id: 8,
            number: 8,
            title:
              "Na Estrada: O Conto de Dois Homens que Brigaram por Uma Garota",
            release: "14/01/2021",
          },
          {
            id: 9,
            number: 9,
            title: "Bruxa Noviça Elaina",
            release: "14/01/2021",
          },
          {
            id: 10,
            number: 10,
            title: "Uma Morte Suave se Aproxima Lentamente",
            release: "14/01/2021",
          },
          {
            id: 11,
            number: 11,
            title: "O País Que Persegue a Feiura",
            release: "14/01/2021",
          },
          {
            id: 12,
            number: 12,
            title: "A Rainha de um País Vazio",
            release: "14/01/2021",
          },
          {
            id: 13,
            number: 13,
            title: "O início de Uma Jornada",
            release: "14/01/2021",
          },
          {
            id: 14,
            number: 14,
            title: "Celestelia Real",
            release: "14/01/2021",
          },
          {
            id: 15,
            number: 15,
            title: "Posfácio",
            release: "14/01/2021",
          },
        ],
      },
      {
        number: 2,
        chapter: [
          {
            id: 0,
            number: 0,
            title: "Ilustrações",
            release: "14/01/2021",
          },
          {
            id: 1,
            number: 1,
            title: "País dos Magos",
            release: "14/01/2021",
          },
          {
            id: 2,
            number: 2,
            title: "Uma Menina tão Doce Quanto Flores",
            release: "14/01/2021",
          },
          {
            id: 3,
            number: 3,
            title:
              "Na Estrada: O Conto de Um Homem Musculoso em Busca de Sua Irmãzinha",
            release: "14/01/2021",
          },
          {
            id: 4,
            number: 4,
            title: "Captação de Recursos",
            release: "14/01/2021",
          },
          {
            id: 5,
            number: 5,
            title:
              "Na Estrada: O Conto de Dois Homens que Não Conseguiram Resolver uma Discussão",
            release: "14/01/2021",
          },
        ],
      },
    ],
  },
  {
    id: 15,
    img: cover03,
    title: "Mushoku Tensei: Reencarnação do Desempregado",
    titleAlternative: [
      "Mushoku Tensei: Isekai Ittara Honki Dasu",
      "無職転生",
      "無職転生 – 異世界行ったら本気だす",
      "Mushoku Tensei: Jobless Reincarnation ~ It will be All Out if I Go to Another World",
    ],
    type: "Light Novel",
    genre: [
      "Ação",
      "Aventura",
      "Comédia",
      "Ecchi",
      "Drama",
      "Fantasia",
      "Harém",
      "Isekai",
      "Romance",
      "Seinen",
    ],
    description: [
      "Um NEET otaku de 34 anos, expulso de casa por sua família, descobriu que sua vida chegou a um beco sem saída. Ele então lembrou que sua vida poderia ter sido realmente muito melhor se tivesse feito escolhas melhores no passado.",
      "Apenas quando chegou ao ponto de se arrepender, viu um caminhão correndo em direção de três estudantes do ensino médio. Reunindo toda a força que tinha, tentou salvá-los e acabou sendo atropelado, assim rapidamente perdendo sua vida.",
      "E quando voltou a abrir os olhos, tinha reencarnado em um mundo com magias e espadas como Rudeus Greyrat. Nascido em um novo mundo, com uma nova vida, decidiu que: “Desta vez vou realmente viver minha vida ao máximo, sem arrependimentos!” Assim começa a jornada de um homem que anseia pelo recomeço de sua vida.",
    ].join("<br/><br/>"),
    date: "18 de Abril de 2002",
    author: "Kumo Kagyu (蜗牛くも)",
    artist: "Shirotaka",
    imgAuthor: "https://github.com/NaySoares.png",
    imgArtist: "https://github.com/NaySoares.png",
    statusTop: true,
    currentVol: "Volume 13",
    currentCap: "Capítulo 13",
    status: "Em Andamento",
    extra: true,
    contentExtra: "Qx01pn9l-6g",
    banner: bannerMushoku,
    volume: [
      {
        number: 1,
        chapter: [
          {
            id: 0,
            number: 0,
            title: "Ilustrações",
            release: "14/01/2021",
          },
          {
            id: 1,
            number: 1,
            title: "País dos Magos",
            release: "14/01/2021",
          },
          {
            id: 2,
            number: 2,
            title: "Uma Menina tão Doce Quanto Flores",
            release: "14/01/2021",
          },
          {
            id: 3,
            number: 3,
            title:
              "Na Estrada: O Conto de Um Homem Musculoso em Busca de Sua Irmãzinha",
            release: "14/01/2021",
          },
          {
            id: 4,
            number: 4,
            title: "Captação de Recursos",
            release: "14/01/2021",
          },
          {
            id: 5,
            number: 5,
            title:
              "Na Estrada: O Conto de Dois Homens que Não Conseguiram Resolver uma Discussão",
            release: "14/01/2021",
          },
        ],
      },
    ],
  },
  {
    id: 16,
    img: cover04,
    title: "Crônicas do Bahamut Invicto",
    titleAlternative: [
      "Saijaku Muhai no Bahamut",
      "Undefeated Bahamut Chronicle",
    ],
    type: "Light Novel",
    genre: ["Ecchi", "Fantasia", "Harém", "Mecha", "Vida Escolar"],
    description: [
      "Lux, que era um Príncipe do Império que foi destruído há cinco anos, encontrou-se com a Princesa do Novo Reino, Lisesharte, invadindo acidentalmente o banheiro do dormitório feminino.",
      '"Quanto tempo você planeja olhar para o meu corpo, seu idiotaaaaa!”',
      "As armas antigas encontradas nas Ruínas, o Drag-Ride. Lux que foi chamado o mais forte Drag-Knight no passado, agora era conhecido como o “Mais Fraco Invicto”, um Drag-Knight que não ataca. Após o duelo que começou com o desafio de Lisesharte, Lux acabou entrando na academia feminina que cria Drag-Knights……!",
      "A história de Lux, onde ele está cercado por meninas nobres da academia, está prestes a se desdobrar.",
      "A “derradeira” batalha de fantasia da academia, onde o direito e o poder se cruzam, começa agora! (Sinopse da história retirada da capa do Volume 1.)",
    ].join("<br/><br/>"),
    date: "28 de Dezembro de 2010",
    author: "Akatsuki Senri",
    artist: "Kasuga Ayumu",
    imgAuthor: "https://github.com/NaySoares.png",
    imgArtist: "https://github.com/NaySoares.png",
    statusTop: true,
    currentVol: "Volume 02",
    currentCap: "Capítulo 03 - Parte 4",
    status: "Em Andamento",
    extra: true,
    contentExtra: "46hN_ol_g7I",
    banner: bannerBehamut,
    volume: [
      {
        number: 1,
        chapter: [
          {
            id: 0,
            number: 0,
            title: "Ilustrações",
            release: "14/01/2021",
          },
          {
            id: 1,
            number: 1,
            title: "País dos Magos",
            release: "14/01/2021",
          },
          {
            id: 2,
            number: 2,
            title: "Uma Menina tão Doce Quanto Flores",
            release: "14/01/2021",
          },
          {
            id: 3,
            number: 3,
            title:
              "Na Estrada: O Conto de Um Homem Musculoso em Busca de Sua Irmãzinha",
            release: "14/01/2021",
          },
          {
            id: 4,
            number: 4,
            title: "Captação de Recursos",
            release: "14/01/2021",
          },
          {
            id: 5,
            number: 5,
            title:
              "Na Estrada: O Conto de Dois Homens que Não Conseguiram Resolver uma Discussão",
            release: "14/01/2021",
          },
        ],
      },
    ],
  },
];
