import React, { useState } from "react";
import PgFacebook from "../../../components/pgFacebook";
import ShowMoreText from "react-show-more-text";

import Santa1 from "../../../_assets/img/staBeatriz/santa1.jpg";
import Santa2 from "../../../_assets/img/staBeatriz/santa2.jpg";
import Santa3 from "../../../_assets/img/staBeatriz/santa3.jpg";
import Santa4 from "../../../_assets/img/staBeatriz/santa4.jpg";
import Santa5 from "../../../_assets/img/staBeatriz/santa5.jpg";
import Santa6 from "../../../_assets/img/staBeatriz/santa6.jpg";
import Santa7 from "../../../_assets/img/staBeatriz/santa7.jpg";
import Santa8 from "../../../_assets/img/staBeatriz/santa8.jpg";
import Santa9 from "../../../_assets/img/staBeatriz/santa9.jpg";
import Santa10 from "../../../_assets/img/staBeatriz/santa10.jpg";
import Santa11 from "../../../_assets/img/staBeatriz/santa11.jpg";
import Santa12 from "../../../_assets/img/staBeatriz/santa12.jpg";

const SantaBeatriz = () => {
  const [expand, setExpend] = useState(false);
  const onClick = () => {
    setExpend(!expand);
  };

  return (
    <>
      <div class="row">
        <div class="col-9">
          <div class="row">
            <h1 class="mb-5 text-center font-italic">Santa Beatriz</h1>
            <h3 class="mb-4 text-center font-italic">
              A Virgem singularmente amada de Maria Imaculada
            </h3>

            <div class="row mb-3">
              <div class="col-5 d-flex justify-content-end">
                <figure class="my-4">
                  <img src={Santa1} alt="" class="img-fluid" />
                </figure>
              </div>
              <div class="col-7" justify-content="left">
                <h4>Nascimento de Beatriz e sua Infância</h4>
                <ShowMoreText
                  lines={12}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p>
                    Beatriz nasceu em Ceuta – África (que na época era possessão
                    portuguesa) por volta do ano 1424 ou 1426 filha de Dom Rui
                    Gomes da Silva e Dona Isabel de Meneses era a segunda dentre
                    os onze filhos que nasceram neste abençoado lar.
                  </p>
                  <p>
                    Em 1433 D. Rui Gomes da Silva, pai de Beatriz , foi nomeado
                    pelo Rei de Portugal, alcaide da cidade de Campo Maior (
                    Cidade que se espalha aos pés de uma montanha, em fértil
                    região regada pelos rios de Caia e Gévora, nas fronteiras de
                    Portugal e Espanha). Foi este o cenário onde se desenrolou a
                    Infância de Beatriz, serena e calma no seio de uma família
                    profundamente cristã, como eram os nossos antepassados,
                    cercada por dez irmãos. Como filha da nobreza, recebeu
                    juntamente com os irmãos, esmerada formação, mormente
                    religiosa. Foram seus mestres os Religiosos Franciscanos
                    que, ao par de sólida piedade, lhe incutiram um terno amor à
                    Maria Santíssima, no mistério da sua Imaculada Conceição.
                  </p>
                  <p>
                    A uma alma delicada unia Beatriz uma natureza cativante, e
                    deslumbrante formosura.
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-5 d-flex justify-content-end">
                <figure class="my-4">
                  <img src={Santa2} alt="" class="img-fluid" />
                </figure>
              </div>
              <div class="col-7" justify-content="left">
                <h4>Amor de Beatriz à Maria</h4>
                <ShowMoreText
                  lines={10}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p>
                    Todos os seus Biógrafos narram sua grande piedade e virtude
                    desde sua infância, e os testemunhos para o Processo de sua
                    Canonização declaram que desde menina foi devotíssima do
                    mistério da Imaculada Conceição.
                  </p>
                  <p>
                    Madre Catarina de Santo Antonio, com grande efusão escreveu:
                  </p>
                  <p>
                    “Para mim, não houve santo na Igreja de Deus, que no tocante
                    ao Mistério da Imaculada Conceição, tenha feito a Deus tão
                    grande serviço como esta varonil mulher.”
                  </p>
                  <p>
                    Como prova de seu amor e veneração à Virgem pode servir-nos
                    o seguinte acontecimento. “ Querendo D. Rui Gomes ornar com
                    uma imagem da Virgem a Capela particular, mandou vir da
                    Itália um afamado pintor. Chegando este, encantado com a
                    beleza da jovem Beatriz, quis tê-la por modelo da Virgem.
                    Depois de muitos rogos, teve que obedecer às ordens de seu
                    pai, porem não conseguiram que abrissem seus olhos
                    encantadores. Assim o artista pode reproduzir as feições da
                    bela donzela, resultando num quadro de Maria com os olhos
                    semicerrados e de sublime modéstia ladeada por São Francisco
                    e Santo Antônio . Este quadro encontra-se ainda hoje, na
                    Igreja da Misericórdia em Campo Maior”
                  </p>
                  <p>
                    Temos, deste modo retratadas num quadro da Virgem, toda a
                    beleza e pureza da Jovem Beatriz que tanto desejava imitar à
                    Maria Santíssima e de fato a imitou.
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-5 d-flex justify-content-end">
                <figure class="my-4">
                  <img src={Santa3} alt="" class="img-fluid" />
                </figure>
              </div>
              <div class="col-7" justify-content="left">
                <h4>Na Corte de Castela</h4>
                <ShowMoreText
                  lines={8}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p>
                    Em 1447, a Infanta de Portugal Dona Isabel desposava o Rei
                    viúvo D. João de Castela. O casamento real deu ocasião a
                    Dona Isabel de visitar a casa de D. Rui Gomes da Silva, em
                    Campo Maior. Encantada com as prendas morais e físicas de
                    jovem Beatriz, Isabel quis tê-la como primeira-dama de
                    honra. Com o consentimento dos pais, deixou Beatriz a sua
                    querida Campo Maior, e com sacrifícios abandonou o calmo
                    remanso da casa paterna para entrar no burburinho da Corte.
                  </p>
                  <p>
                    Como se lê nas páginas de um escrito de 1526, Beatriz “além
                    de descender da alta nobreza, era uma donzela muito
                    graciosa, superando todas as companheiras em formosura e
                    graça.” O encanto de Beatriz fascinava a quantos a
                    conheciam, muitos jovens a solicitavam em matrimônio; porém
                    Beatriz vivia em regiões mais elevadas, alimentava-se de
                    anseios mais nobres. Dentro de si guardava um segredo:
                    “DESEJAVA SER TODA DE DEUS”
                  </p>
                  <p>
                    Os encantos físicos e as qualidades morais de Beatriz
                    tornavam-na a favorita da Corte. O próprio Rei lhe dedicava
                    uma admiração particular, pois sentia necessidade e
                    encontrar, em meio a tanta falsidade, um coração reto que o
                    compreendesse e em quem pudesse confiar.
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-5 d-flex justify-content-end">
                <figure class="my-4">
                  <img src={Santa4} alt="" class="img-fluid" />
                  <figcaption>Baú onde foi encerrada</figcaption>
                  <figcaption>Santa Beatriz</figcaption>
                </figure>
              </div>
              <div class="col-7" justify-content="left">
                <h4>O Pecado de ser bela</h4>
                <ShowMoreText
                  lines={12}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p>
                    Beatriz era bela e pudorosa. Esforçava-se por manter sua
                    conduta irrepreensível em meio a tantas frivolidades, ciúmes
                    e vaidades. Porém apesar de tudo, certos palacianos
                    maliciosos e maldosos a caluniaram de ter secretos encontros
                    amorosos com o Rei.
                  </p>
                  <p>
                    A isto não resistiu os ciúmes da Rainha Isabel, quando ouviu
                    os rumores da calúnia, começou a duvidar da fidelidade de
                    seu marido o Rei e viu em Beatriz uma possível rival. Queria
                    então fazê-la desaparecer. Começou a arquitetar uma maneira
                    de fazê-la desaparecer. O ciúme é sempre engenhoso ... Certa
                    noite a Rainha convidou Beatriz para que a seguisse e
                    simulando querer contar-lhe um segredo, a levou por um
                    solitário caminho do palácio até chegar num lugar que tinha
                    preparado de antemão. Ao passar junto dele, a Rainha lhe deu
                    um forte empurrão fazendo-a cair dentro do grande baú, e
                    cerrando-o rapidamente com chave, abandonou-a na escuridão.
                  </p>
                  <p>
                    Beatriz gritou, suplicou ... Era inocente nunca dera ouvidos
                    aos galanteios, nem salientara ambição alguma. Mas o ciúme
                    da Rainha já se transformara em ódio e o ódio é cego.
                    Beatriz estava sepultada viva, as trevas a cercavam e
                    faltava-lhe todo o auxílio humano. Condenada a morrer
                    asfixiada dentro de um baú! Era jovem e inocente. O
                    desespero rondava-lhe a alma.
                  </p>

                  <p>
                    Da Terra nada podia esperar. Voltou-se então para o Céu.
                    Entregou-se nas mãos de Deus e se encomendou à Sesma Virgem
                    com grande devoção. A vida parecia fugir, quando se viu
                    envolta em vivíssima luz. E nesta luz divisou a Virgem
                    Santíssima, resplandecente como os raios do sol, vestida com
                    hábito branco e manto azul celeste, em seus braços um
                    formoso Menino, ferindo com uma lança a cabeça de um
                    horrendo dragão. Depois de confortá-la com carinho maternal
                    lhe disse:
                  </p>
                  <p>
                    “- Beatriz, quero que fundes uma nova Ordem que glorifique
                    minha Conceição Imaculada, vestindo Hábito branco e manto
                    azul celeste como trago...”
                  </p>
                  <figure class="my-4">
                    <img src={Santa5} alt="" class="img-fluid" />
                  </figure>
                  <p>
                    Beatriz agradecida, se entregou com serva e escrava, e
                    consagrando sua virgindade se ofereceu em corpo e alma ao
                    serviço de sua Celestial Senhora a Mãe de Deus. A Virgem
                    Santíssima, depois de prometer-lhe que sairia daquele baú
                    com vida, desapareceu, deixando Beatriz numa felicidade
                    indescritível.
                  </p>
                  <p>
                    Passados, porém, três dias, o Tio de Beatriz exigiu
                    explicações da Rainha. Esta levou-a ao lugar onde estava
                    encerrada Beatriz. Levava a certeza de encontrá-la morta, já
                    cadáver, pois ninguém resistiria a tal suplício por muito
                    tempo. Teriam terminado, assim, as rivalidades. Mas terrível
                    surpresa a aguardava. Ao abrir o baú, em lugar de um cadáver
                    hirto e lívido, sem vida, surgiu Beatriz, risonha ...
                    formosa ... cheia de vida ... quase resplandecente. Parecia
                    mais bela, com um sorriso celeste a emoldurar lhe o doce
                    semblante.
                  </p>
                  <p>
                    Dois sentimentos chocaram-se no coração da Rainha: a raiva e
                    o pavor. Entre atônita e apavorada, desfaz-se em lágrimas e
                    cai aos pés da donzela com rogos de perdão. Um abraço foi a
                    resposta de Beatriz.
                  </p>
                  <p>
                    A Rainha que arquitetara o desaparecimento da sua rival,
                    sentiu-se humilhada ao presenciar que o seu ato apenas
                    servira para aumentar o prestígio da sua vítima. E passados
                    os primeiros momentos de emoção, Isabel sentiu a inveja
                    acordar em seu coração. Ordenou a Beatriz que abandonasse a
                    Corte.
                  </p>
                  <p>
                    Para Beatriz, uma alegria, não sentia outro desejo. Três
                    dias depois acompanhada pelo seu Tio, abandonou a Corte e
                    dirigiu seus passos a Toledo.
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-5 d-flex justify-content-end"></div>
              <div class="col-7" justify-content="left">
                <h4>A Viagem</h4>
                <ShowMoreText
                  lines={3}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p>
                    O caminho a percorrer era de mais ou menos 230 quilômetros.
                    Cheio de perigos. Guerrilheiros se ocultavam nos bosques e
                    salteadores espreitavam nas gargantas dos vales.
                  </p>
                  <figure class="my-4">
                    <img src={Santa6} alt="" class="img-fluid" />
                  </figure>
                  <p>
                    A certa altura da viagem, de um bosque que ladeava o
                    caminho, saíram dois Frades de Hábito marrom e cordão. Dois
                    Franciscanos. Os Frades, porém, a saudarame um deles falava
                    a língua portuguesa. Mais tranquilizada, perguntou-lhes
                    Beatriz: Quem sois? Donde vindes?
                  </p>
                  <p>
                    - Tranquilizai-vos. Queremos dar-vos a notícia que estais a
                    caminho para vos tornardes uma das maiores damas da Espanha.
                    E vossas filhas espalhar-se-ão por toda a Terra.
                  </p>
                  <p>
                    - Impossível. Ofereci a Deus minha virgindade consagrando-me
                    inteiramente a Ele, jamais casaria com homem algum.
                  </p>
                  <p>O que dissemos acontecerá. – Disseram eles.</p>
                  <p>
                    Enquanto ela refletia, desapareceram. Beatriz compreendeu
                    que se tratava de uma mensagem do Céu e que os dois
                    Franciscanos outros não eram que São Francisco de Assis e
                    seu patrício Santo Antônio de Lisboa, a quem ela era muito
                    devota.
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-5 d-flex justify-content-end">
                <figure class="my-4">
                  <img src={Santa7} alt="" class="img-fluid" />
                </figure>
              </div>
              <div class="col-7" justify-content="left">
                <h4>No Mosteiro de Santo Domingo o Real</h4>
                <ShowMoreText
                  lines={3}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p>
                    Chegando pôr fim a Toledo e desejosa e paz e santidade,
                    dirigiu-se ao Mosteiro de Santo Domingo o Real.
                  </p>
                  <p>
                    A Abadessa lhe abriu as pesadas portas do Mosteiro com
                    admiração e lhe conduziu até sua cela.
                  </p>
                  <p>
                    Toma uma decisão. O seu rosto que causou tantos transtornos
                    no palácio e que provocou tantas calúnias no ódio mortal da
                    Rainha, cobriu-o com um véu. Este rosto com toda a sua
                    beleza, totalmente consagrado à Deus. E cobriu o rosto com
                    um véu. Ali morou uns trinta anos em qualidade de secular,
                    repartindo sua vida entre trabalho e a oração, sendo um
                    preclaro exemplo de honestidade e virtude. Grande parte da
                    noite passava em oração junto ao Sacrário, donde cresceu em
                    amor à Jesus, e ao mistério da Imaculada.
                  </p>
                  <p>
                    Certo tempo depois, morreu o Rei, e a Rainha arrependida do
                    que havia feito com Beatriz, reconhecendo sua inocência, foi
                    a Toledo vê-la e pedi-la perdão. Beatriz, que não lhe tinha
                    guardado ressentimento, não só a perdoou, esquecendo-se
                    completamente o sucedido. Também a visitavam com sua mãe a
                    Rainha, os Infantes Afonso e Isabel, a que mais tarde seria
                    a Rainha Isabel a Católica, que manteve grande amizade com
                    Beatriz. Religiosas contemporâneas de Beatriz assim deixaram
                    escrito: “... Beatriz teve uma vida de silêncio, de oração,
                    de muita humildade, de penitência e austeridade, mulher de
                    grande Fé, modelo exemplar de virtude para todos.”
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-5 d-flex justify-content-end">
                <figure class="my-4">
                  <img src={Santa8} alt="" class="img-fluid" />
                </figure>
              </div>
              <div class="col-7" justify-content="left">
                <h4>É Chegado o Momento</h4>
                <ShowMoreText
                  lines={10}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p>
                    Uma tarde, depois da oração, quando todas as Monjas haviam
                    deixado o Coro, Beatriz em íntimo colóquio com Deus,
                    profundamente envolvida na oração, quando um grande
                    resplendor a iluminou e viu a Santíssima Virgem com as
                    mesmas vestes, que trazia, quando a viu no Baú uns trinta
                    anos atrás. A Santíssima Virgem estava sorridente, com o
                    Menino em seus braços lhe disse em uma mescla de amor e
                    firmeza:
                  </p>
                  <p>
                    “ – Filha, é chegado o momento. Ergue-te e põe em execução a
                    obra a ti confiada. Vai e glorifica a Deus com esta obra.
                    Meu Filho e eu estaremos contigo.”
                  </p>
                  <p>
                    Beatriz entendeu que soara a hora de Deus, deveria partir
                    para o combate, fixando o olhar em Jesus Crucificado,
                    aceitou todos os trabalhos aos quais sabia que viriam, e
                    pronunciando seu “FIAT” se dispôs a cumprir sem demora os
                    desejos da Santíssima Virgem.
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-5 d-flex justify-content-end">
                <figure class="my-4">
                  <img src={Santa9} alt="" class="img-fluid" />
                </figure>
              </div>
              <div class="col-7" justify-content="left">
                <h4>Em Santa Fé</h4>
                <ShowMoreText
                  lines={5}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p>
                    Enquanto Beatriz, recolhida no Mosteiro de São Domingos
                    aguardava a hora que Deus determinara para dar início à sua
                    obra, o trono da Espanha era ocupado pela Rainha Isabel, a
                    Católica. Filha da outra Rainha Isabel.
                  </p>
                  <p>
                    Esta Rainha Isabel a Católica foi íntima amiga de Beatriz,
                    sua principal confidente e colaboradora. Duas genuínas
                    filhas de São Francisco de Assis. Dois corações voltados
                    para o alto que se compreendiam perfeitamente. Ali no
                    locutório do Mosteiro a Rainha falava dos negócios do Reino
                    que tanto a preocupavam, e Beatriz lhe falava de seus ideais
                    e inspirações.
                  </p>
                  <p>
                    A Rainha Isabel entusiasmada por tão bela missão em fundar
                    uma Ordem que glorificasse a Imaculada Conceição de Nossa
                    Senhora, prometeu-lhe ajuda e para que Beatriz desse início
                    à fundação, ofereceu-lhe parte dos Palácios de Galiana, não
                    muito longe do Mosteiro de São Domingos. E deu-lhe também a
                    Igreja dedicada à Virgem Mártir Santa Fé. Bela invocação
                    para quem ia se lançar em um tão importante empreendimento!
                  </p>
                  <p>
                    Cheia de confiança e Fé, acompanhada de 12 jovens, deixou
                    Beatriz o Mosteiro de São Domingos e recolheu-se nos
                    Palácios de Galiana adaptado para a Vida Claustral e Igreja
                    Santa Fé. Exercida por tão longo tempo na virtude, podia
                    agora tornar-se Mestra e Mãe. E de fato, começou a dirigir
                    suas 12 companheiras no caminho da perfeição e da Vida
                    Religiosa. E o fazia mais pelo exemplo que pela palavra. E
                    isso tinha grande valor, porque se a palavra tem a força de
                    comover; o exemplo tem a virtude de atrair.
                  </p>
                  <p>
                    O pequeno grupo começava a ensaiar os primeiros passos da
                    Vida Concepcionista. Lenta, mas seguramente sob a direção
                    sábia de Beatriz.
                  </p>
                  <p>
                    Enquanto isso, a Rainha Isabel escrevia ao Papa, procurando
                    obter a aprovação da nova Família Religiosa que nascia sob
                    as benções da Imaculada.
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-5 d-flex justify-content-end">
                <figure class="my-4">
                  <img src={Santa10} alt="" class="img-fluid" />
                  <figcaption>Bula Inter Universa</figcaption>
                  <figcaption>de 30 de abril de 1489</figcaption>
                </figure>
              </div>
              <div class="col-7" justify-content="left">
                <h4>O Papa Inocêncio VIII Aprova a Nova Ordem</h4>
                <ShowMoreText
                  lines={9}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p>
                    O Papa Inocêncio VIII, pela Bula Inter Universa no dia 30 de
                    abril de 1489, aprovava a Ordem Concepcionista. No mesmo
                    instante em que a Bula era firmada pelo Papa, Beatriz
                    recebeu a notícia por um emissário do Céu, que ela intuiu
                    fosse o Arcanjo São Rafael, de quem fora sempre devotíssima.
                    E anunciou que ela seria expedida para Toledo, com seu
                    emissário por navio.
                  </p>
                  <p>
                    Fácil imaginar a alegria da Fundadora e de suas
                    companheiras. Mas a esta alegria sucedeu uma grande dor.
                    Passados alguns dias, chegou-lhe a triste notícia que o
                    navio onde viajavam os portadores da Bula havia naufragado,
                    apenas se haviam salvado alguns tripulantes. Tudo o mais
                    perecera no mar. Ferida por tão rude golpe, prostrou-se
                    Beatriz, imersa em grande dor, diante do Santíssimo
                    Sacramento e “por três dias, esteve muito aflita pedindo a
                    Deus solução para este problema.
                  </p>
                  <p>
                    Passados três dias, a calma já dominava o espírito de
                    Beatriz. Pensava Deus cuidaria que o Papa expedisse outra
                    Bula e cuidaria também que está lhe chegasse às mãos. Mas
                    indo um cofre onde conservava objetos do seu uso, encontrou,
                    sobre ele, um pergaminho que nunca vira ali. Desenrolou-o e
                    notou ser um documento Pontifício para sua grande surpresa e
                    admiração se achava ali a Bula tão desejada. Mas como viera
                    parar ali? Sem dúvida, mais uma delicadeza da Providência
                    Divina, mais uma intervenção bondosa de Deus, por meio da
                    Imaculada Conceição. O Céu velava em mostrar o agrado que
                    nutria por esta obra.
                  </p>
                  <p>
                    Madre Beatriz via finalmente coroados seus esforços. Em nome
                    de Deus o Papa confirmava solenemente a Ordem da Imaculada
                    Conceição de Nossa Senhora.
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-5 d-flex justify-content-end">
                <figure class="my-4">
                  <img src={Santa11} alt="" class="img-fluid" />
                </figure>
              </div>
              <div class="col-7" justify-content="left">
                <h4>Crucificada com Cristo</h4>
                <ShowMoreText
                  lines={7}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p>
                    Madre Beatriz e as doze jovens preparavam – se para o dia da
                    Consagração definitiva. Cada dia que passava era para
                    Beatriz mais um motivo de júbilo, pois a aproximava do
                    grande momento. Mas Deus havia disposto as coisas de modo
                    diferente. Faltavam somente dez dias para o solene dia da
                    tomada de Hábito e Profissão das Religiosas e como elo da
                    definitiva inauguração da Nova Ordem lhe aparece a
                    Santíssima Virgem e com voz amorosa lhe diz:
                  </p>
                  <p>
                    “ – Minha filha, de hoje há dez dias, virei buscar-te para
                    estares comigo no Céu, por que não é vontade de Deus, que
                    gozes aqui na Terra disto que tanto desejas.” E
                    mostrando-lhe a lâmpada que ardia diante do Santíssimo , que
                    depois de apagada por um momento voltava a brilhar lhe disse
                    :
                  </p>
                  <p>
                    “ – Viste como a luz da lâmpada se apagou e logo voltou a
                    brilhar ? Pois assim se passará com tua Ordem. Ao morreres,
                    a Ordem se dissolverá, mas logo volverá a renascer e
                    florescerá de tal maneira que será multiplicada e se
                    estenderá pelo mundo inteiro .” Terá o desespero batido à
                    porta do coração de Beatriz? Não absolutamente. Calma e
                    serena chamou o seu Confessor a fim de preparar-se
                    dignamente para a partida. Logo caiu enferma, e a
                    enfermidade a prostrou no leito. E foi ali, no leito de
                    dores que revestiu o Hábito Concepcionista e emitiu os Votos
                    Solenes de viver sempre Obediente, sem Propriedade, em
                    Castidade, com perpétua Clausura.
                  </p>
                  <figure class="my-4">
                    <img src={Santa12} alt="" class="img-fluid" />
                  </figure>
                  <p>
                    E assim unida inseparavelmente a Jesus Cristo, revestida com
                    o Hábito da Conceição, aguardava serena, em seu leito, a
                    ordem de partir. Fizera voto de obediência e partiria ao
                    primeiro aceno do Esposo Divino. Que melhor altar para se
                    entregar a Deus que o leito de dores? Que maior pompa que a
                    pobreza de uma cela de Mosteiro? Que mais comovente música
                    que os soluços das filhas que a rodeiam?
                  </p>
                  <p>
                    Em sua agonia, cercada por suas filhas espirituais e 6
                    Franciscanos, ao administrá-la os últimos Sacramentos, e ao
                    levantar-se o véu que cobria seu rosto para dar-lhe a Santa
                    Unção, todos se admiravam da formosura de seu rosto que
                    brilhava como um anjo, porém a admiração cresceu ainda mais
                    ao aparecer uma brilhante estrela em sua fronte. Beatriz
                    acabava se entregar sua bendita alma à Deus.
                  </p>
                  <p>
                    A Primeira Concepcionista recebia do Esposo o Convite: “Vem
                    minha esposa, recebe a coroa que o Senhor te reservou desde
                    toda a eternidade.” Como para os Santos a morte não é uma
                    calamidade, mas uma ventura, pois os leva ao porto por cuja
                    posse lutaram.
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-5 d-flex justify-content-end"></div>
              <div class="col-7" justify-content="left">
                <h4>Primeiras Glórias</h4>
                <ShowMoreText
                  lines={20}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p>
                    A primeira canonização recebeu-a Beatriz do povo. Beatriz
                    morreu com grande fama de santidade. Na transladação feita
                    em janeiro de 1515 sucedeu a cura de um cego de nascença, ao
                    aproximar-se da urna com os restos venerandos, a devoção e o
                    culto cresceram. Foi Beatificada no dia 28 de julho de 1926
                    pelo Papa Pio XI e canonizada no dia 03 de outubro de 1976
                    pelo Papa Paulo VI, contava a Ordem mais de 150 Mosteiros
                    espalhados pela Europa e América.
                  </p>
                  <p>
                    Pelos séculos segue brilhando do Céu a Estrela da Ordem da
                    Imaculada Conceição e sua luz continua iluminando suas
                    Filhas e a todos os cristãos que a invocam com devoção.
                  </p>
                  <br></br>
                  <br></br>
                </ShowMoreText>
                <p class="fw-bolder fst-italic">
                  Santa Madre Beatriz, rogai por nós !
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </>
  );
};

export default SantaBeatriz;
