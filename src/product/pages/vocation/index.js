import React, { useState } from "react";
import ShowMoreText from "react-show-more-text";
import * as C from "./styled";
import Vocation1 from "../../../_assets/img/vocation/vocation1.jpg";
import Vocation2 from "../../../_assets/img/vocation/vocation2.jpg";
import Vocation3 from "../../../_assets/img/vocation/vocation3.jpg";
import { ListGroup } from "react-bootstrap";

const Vocation = () => {
  const [expand, setExpend] = useState(false);
  const onClick = () => {
    setExpend(!expand);
  };

  return (
    <>
      <div class="row d-flex justify-content-center">
        <div class="col-9">
          <h1 class="mb-5 text-center font-italic">Vocação</h1>
          <figure class="text-center fs-8">
            <blockquote>
              <b>
                {" "}
                “Ele não está longe de cada um de nós, pois nele vivemos, nos
                movemos e existimos”.
              </b>
            </blockquote>
            <figcaption class="blockquote-footer">
              <cite title="(At 17, 27)">(At 17, 27)</cite>
            </figcaption>
          </figure>
        </div>
      </div>

      <div class="row mb-3 d-flex justify-content-center">
        <div class="col-6">
          <div class="row">
            <C.Paragraph>
              A fonte de nossa existência, donde saímos para chegar à beleza e a
              turbulência da vida humana, que se chama Deus. Muito antes de
              sermos criados, a nossa realidade estava já presente no pensamento
              amoroso de Deus: “Antes de formar-te no ventre de tua mãe, Eu o
              conheci; antes que tu nascesse , eu te conhecia e te consagrei,
              para ser meu profeta entre as nações.” A raiz profunda que
              sustenta e explica a nossa história pessoal tem o seu eixo no
              mistério de uma Presença transcendente, humanamente inexplicável,
              que enche e abraça a totalidade de nossa existência.
            </C.Paragraph>

            <C.Paragraph>
              A pessoa humana é uma realidade que vem de longe e vai longe. Na
              nossa caminhada terrestre, temos o implícito dever, o instinto
              congênito e o desejo profundo de construir o dom da vida recebida.
              O<b> infinito</b> é meta de nosso caminho, embora sempre marcado,
              nas concretas realizações históricas, pelas limitações da nossa
              própria natureza e pela graça de Deus que constantemente atua em
              nós. Caminhar corresponde, de qualquer maneira, a abrir os olhos
              para enxergar a autêntica verdade do universo, das pessoas, da
              vida e de Deus. A verdade é que: sem Deus nada somos, nem podemos
              fazer, pois se respiramos, falamos, andamos, etc... é por graça
              dele que o fazemos ! Deus”... colocou o senso da eternidade no
              coração do homem, para que o homem possa busca-lo, mesmo sem
              compreender a obra que Ele realiza em nós.”
            </C.Paragraph>

            <C.Paragraph>
              Este sentido de eternidade é aquela luz que deve emanar da nossa
              vocação:
            </C.Paragraph>

            <figure class="text-center fs-8">
              <blockquote>
                <b>
                  {" "}
                  “Pois em Ti se encontra a fonte da vida e com a Tua luz nós
                  veremos a luz”.
                </b>
              </blockquote>
              <figcaption class="blockquote-footer">
                <cite title="(Ecl 3,11)">(Ecl 3,11)</cite>
              </figcaption>
            </figure>

            <h3 class="mb-4 fs-5 text-start font-italic">Vocação Religiosa</h3>

            <C.Paragraph>
              Nosso Senhor, que desde toda a eternidade se propôs criar-nos
              estabeleceu também , com todas as circunstâncias de tempo e de
              lugar, e caminho que devemos seguir.
            </C.Paragraph>

            <figure class="text-center fs-8">
              <blockquote>
                <b>
                  {" "}
                  “Se queres ser perfeito, vai vende teus bens, dá-os aos pobres
                  ... Depois, vem e segue-me”.
                </b>
              </blockquote>
              <figcaption class="blockquote-footer">
                <cite title="(Mt 9,21)">(Mt 19,21)</cite>
              </figcaption>
            </figure>

            <C.Paragraph>
              Com estas palavras, Nosso Senhor oferece a todos o estado
              Religioso. Santo Tomás afirma: ”Deve-se tomar como dirigido a
              todos o conselho que Jesus Cristo deu ao jovem”. Mas para abraçar,
              de fato, os Conselhos Evangélicos, é suficiente este chamado
              genérico? <b>NÃO!</b>—responde S. Roberto Belarmino, é preciso ter
              Vocação propriamente dita, ou seja, aquele convite geral deve
              chegar particularizado ao individuo “...por meio da qual o
              indivíduo percebe que os conselhos evangélicos constituem o melhor
              caminho para ele e que, por isso, deve abraçá-los.”
            </C.Paragraph>

            <h3 class="mb-4 fs-5 text-start font-italic">
              {" "}
              Como se conhece a vocação?
            </h3>

            <C.Paragraph>
              Não se pode esperar que Deus nos apareça, para se ter certeza do
              seu chamado. Nesta terra nossa vida transcorre na fé; é através de
              pessoas, coisas e acontecimentos que procuramos conhecer a vontade
              de Deus. De certo modo Ele revela esta vontade com muita
              discrição, para que nossa reposta ao seu convite seja mais livre e
              espontânea. Deus parece ter receio de nos constranger, e diminuir
              com isso o mérito de nossa entrega e a generosidade de nosso amor.
            </C.Paragraph>

            <h3 class="mb-4 fs-5 text-start font-italic">
              {" "}
              São sinais de vocação:
            </h3>

            <ol class="list-group list-group-numbered mb-1">
              <li class="list-group-item">
                Uma inclinação espontânea e constante: Não se trata de
                sentimento, mas de vontade, um impulso e pensamento que se
                repete irresistivelmente no coração e na mente.
              </li>
              <li class="list-group-item">
                Aptidão para o estado religioso: Cada congregação tem suas
                características, por isso, nem todos são talhados para a mesma
                forma de vida religiosa. A dois requisitos indispensáveis e
                comuns a todos os institutos: a pratica das virtudes e o
                espírito de piedade.
              </li>
              <li class="list-group-item">
                Fim reto sobrenatural: Levar uma vida de maior união com Deus e
                de amá-lo sobretudo.
              </li>
            </ol>

            <C.Paragraph>
              Por isso considere atentamente a intenção à vida religiosa. Se
              descobrir que o fim é puramente humano como: levar uma vida mais
              cômoda; livrar-se da "tirania" dos pais; fazer-lhes o agrado
              porque insistem nisso e etc.
              <br />
              Se assim for não é chamado divino, mas sim humano. O fim de um
              chamado divino tem de ser sobrenatural.
            </C.Paragraph>

            <h3 class="mb-4 fs-5 text-start font-italic">
              {" "}
              Vocação Contemplativa
            </h3>

            <h3 class="mb-4 fs-6 bold text-start font-italic">
              {" "}
              <b>Como saber se é um chamado para a Vida Contemplativa?</b>
            </h3>
          </div>

          <div class="row mb-2">
            <div class="d-flex">
              <figure class="m-2">
                <img src={Vocation1} alt="" />
              </figure>
              <div>
                <p>
                  Quando vemos pessoas que vão se desligando do mundo e das
                  coisas dele ( falo aqui das coisas boas e lícitas, coisas
                  materiais, de pessoas, lugares...) isto não acontece por
                  acaso, é Deus que às leva a isso, por que as faz descobrir que
                  só Deus satisfaz plenamente o seu coração. Tal pessoa é
                  chamada a seguir a Jesus mais de perto e a estar como Maria
                  aos pés de Jesus (Lc10,38-42) de amá-lo mais intimamente e de
                  servi-lo mais de perto e a viver o seu Batismo com mais
                  radicalidade.
                </p>

                <p class="fs-8 text-start font-italic">
                  {" "}
                  <b>Mas com que finalidade?</b>
                </p>

                <ShowMoreText
                  lines={1}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p>
                    Deus quer reservar só para si Almas que Ele escolhe
                    gratuitamente, por sua bondade. Destes íntimos amigos seus,
                    Ele faz intercessores junto a Si, tornando-os canais de sua
                    graça para as outras criaturas. A permanente Oração dos
                    Contemplativos cria-lhes grande proximidade com Deus e
                    confere-lhes um poder especial de intercessão e proteção
                    pelos seus irmãos e irmãs. É esta a razão por que se recorre
                    tanto às suas orações.
                  </p>

                  <figure class="text-center fs-8">
                    <blockquote>
                      <b> “De Deus não se alcança nada, se não é por amor!”</b>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                      <cite title="São João da Cruz">São João da Cruz</cite>
                    </figcaption>
                  </figure>
                </ShowMoreText>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <h3 class="mb-4 fs-6 bold text-start font-italic">
              {" "}
              O que faz o Contemplativo em meio a tantas necessidades do Mundo
              Atual?
            </h3>

            <C.Paragraph>
              O Papa João Paulo II responde : “ A Vida Contemplativa encontra-se
              no coração da Igreja, e coopera em sua vitalidade, tal como um
              coração em um organismo vivo .” Se alguém dissesse ao coração:-Que
              está você fazendo aí escondido,sem sair do lugar,calado, enquanto
              as mãos trabalham, os pés caminham, a boca fala, etc. Para que
              serve você ? Ele poderia responder: - Se eu não estivesse aqui
              vivo... nem as mãos trabalhariam, nem os pés andariam, a boca não
              falaria, os olhos não veriam. E se disséssemos o mesmo para as
              raízes das árvores e os alicerces dos edifícios ? E este o papel
              da Vida Contemplativa na Igreja : Orando com Cristo no monte, com
              Maria no Cenáculo, sustentam a Igreja, comunicam a seiva da graça
              Divina a seus membros, fecundam com essa graça o trabalho da
              Pastoral e do Apostolado, para que - como diz a Igreja pelo
              Concilio : Os operários de Deus não trabalhem em vão.
            </C.Paragraph>

            <h3 class="mb-4 fs-5 bold text-start font-italic">
              {" "}
              A Aventura de Viver Totalmente para Deus!
            </h3>
          </div>

          <div class="row mb-2">
            <div class="d-flex">
              <figure class="m-2">
                <img src={Vocation2} alt="" />
              </figure>
              <div>
                <p>
                  Diante de tudo o que refletimos nos tópicos anteriores,
                  concluímos que: A Vocação é um olhar de predileção que Jesus
                  dirige à alma. Mas, por que ELE escolheu precisamente à TI?
                  Por que te amou com amor de predileção? Por que tratou-a como
                  ao Jovem do Evangelho:{" "}
                  <b>
                    “Jesus fixou nele o olhar, amou-o e disse-lhe: Vem e
                    segue-me!” Mc 10,21
                  </b>
                </p>
                <ShowMoreText
                  lines={1}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p>
                    Jovem não te detenhas, e não te sintas indigna te tanto
                    amor, porque:{" "}
                    <b>
                      “O Olhar de Deus não é como o olhar dos homens ... Deus
                      olha o coração“ (2 Sm 16,7)
                    </b>
                  </p>

                  <p>
                    Jesus, o Rei do Céus, o Criador das Galáxias, e dos espaços
                    infinitos, enamorou-se por TI e te chama. Estás disposta a
                    ser tua Esposa com todas as conseqüências? Por Ele, deves
                    excluir outros amores... pois ELE quer teu coração INTEIRO e
                    que o AMES acima de TODAS as coisas. Ele é ciumento (Ex.
                    20,5). Podes ter amigos, porém só Ele deve ser teu ESPOSO.
                    Só ELE que te AMOU na CRUZ, pode pedir-te um amor total até
                    a cruz.
                  </p>
                </ShowMoreText>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <h3 class="mb-4 fs-6 bold text-start font-italic">
              {" "}
              Neste momento, Jesus te olha com carinho e com o <b>
                CORAÇÃO
              </b>{" "}
              transbordante de <b>AMOR</b> e te diz:
            </h3>

            <h3 class="mb-4 fs-4 bold text-start font-italic">
              {" "}
              Queres se Consagrar a Mim com todo o teu ser?
            </h3>

            <C.Paragraph>
              Talvez em teu coração surjam dúvidas, inseguranças, medo...
            </C.Paragraph>
          </div>

          <div class="row mb-2">
            <div class="d-flex">
              <figure class="m-2">
                <img src={Vocation3} alt="" />
              </figure>
              <div>
                <p>
                  “A vida passa rapidamente, e logo viveremos a mesma vida de
                  Deus. Então veremos novos Céus e outro Sol mais radiante nos
                  iluminará. Não seremos mais prisioneiras nesta terra de
                  exílio, tudo haverá passado ... O Senhor será a Alma de nossa
                  Alma e gozaremos da Vida, da verdadeira Vida para sempre”.
                  (Sta Teresinha)
                </p>

                <p>
                  <b>“Inspiradas e Chamadas por Deus ...” ( Sta Regra I )</b>
                </p>

                <p>
                  <b>
                    “A Comunidade Concepcionista acolhe cada Irmã como um Dom do
                    Senhor.”
                  </b>
                </p>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <C.Paragraph>
              Atendendo-a em suas necessidades e permanecendo junto dela com
              solicitude amorosa.
            </C.Paragraph>
            <C.Paragraph>
              Assim é o nosso Deus, Ele nos olha com carinho e com amor nos
              convida a segui-lo. queres então ver alguns exemplos de vocação!??
            </C.Paragraph>

            <C.Paragraph>
              <b>
                Jesus estava andando às margens do mar da Galiléia e avistando
                Pedro e André disse-lhes:” Segue-me” (mt 4, 18-20).
              </b>{" "}
              Cristo o chama a lançar-se em águas mais profundas e avançar no
              mar que é Deus.
            </C.Paragraph>

            <C.Paragraph>
              Seduziste –me Senhor e eu me deixei seduzir, foste mais forte” (Jr
              20,7). Não vale apena lutar contra a graça de Deus, é melhor
              seguir a inspiração do espírito e o sábio conselho dos salmos:”Em
              silencio abandona-te ao Senhor”(Sm36 7) ”...como uma criança no
              colo materno e põe tua esperança no Senhor”(Sm 130,2s).
            </C.Paragraph>

            <C.Paragraph>
              Que Ele saberá te conduzir e assim a sua graça há de “completar em
              ti a obra começada”. Poderá enfim sentir-se como nós nos sentimos
              e que o salmo bem expressa:
            </C.Paragraph>

            <C.Paragraph>
              <b>“JUNTO A VÓS SENHOR, FELICIDADE SEM LIMITES”</b>
            </C.Paragraph>

            <b>
              Requisitos necessários para ser uma Monja Concepcionista
              Franciscana
            </b>

            <ul>
              <li>Intenção sincera de Servir a Deus e vontade livre</li>
              <li>Idoneidade espiritual, moral e intelectual</li>
              <li>Saúde física e psíquica</li>
              <li>Maturidade pessoal</li>
              <li>Adequada formação humana e intelectual</li>
              <li>Desejo de pertencer totalmente à Deus</li>
              <li>Gosto pela oração e recolhimento</li>
              <li>de 18 a 28 anos de idade ( podem ter exceções )</li>
              <li>Saúde normal</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vocation;
