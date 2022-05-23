import React, { useState } from "react";
import PgFacebook from "../../../components/pgFacebook";
import ShowMoreText from "react-show-more-text";

import PreyImage from "../../../_assets/img/prey/preyImage.png";
import PreyImage2 from "../../../_assets/img/prey/preyImage2.jpg";
import PreyImage3 from "../../../_assets/img/prey/preyImage3.jpg";
import PreyImage4 from "../../../_assets/img/prey/preyImage4.jpg";
import PreyImage5 from "../../../_assets/img/prey/preyImage5.jpg";

const Prey = () => {
  const [expand, setExpend] = useState(false);
  const onClick = () => {
    setExpend(!expand);
  };

  return (
    <>
      <div class="container">
        <div class="col-12">
          <div class="row">
            <h1 class="mb-5 text-center font-italic">Oração</h1>
            <figure>
              <img alt="" src={PreyImage} class="img-fluid" align="center" />
            </figure>
            <br />
            <div class="row mb-3">
              <div class="col-3 d-flex justify-content-end"></div>
              <div class="col-7" justify-content="left">
                <ShowMoreText
                  lines={5}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p>
                    A Oração é a vida do coração novo e deve nos animar a cada
                    momento. Contudo, devido a nossa frágil condição humana,
                    muitas vezes esquecemo-nos Daquele que é a nossa Vida e o
                    nosso Tudo. A Oração é sobretudo uma procura da Presença do
                    Senhor. O espírito procura compreender à Luz da Fé, a fim de
                    aderir e responder ao que o Senhor clama no íntimo de nossa
                    alma.
                  </p>
                  <p class="text-justify">
                    Portanto a Vida da Monja, é marcada pela Oração, pelo
                    diálogo com Deus, que acontece em vários momentos do dia, em
                    Comunidade e individualmente :<br /><br />
                    <div>
                      <strong><p>• Oficio Divino</p></strong>
                      <br />
                    </div>
                    <div>
                    <strong><p>• Meditação da Palavra</p></strong>
                      <br />
                    </div>
                    <div>
                    <strong><p>• Santa Missa</p></strong>
                      <br />
                    </div>
                    <div>
                      <p class="text-justify">
                        A Vida da Monja é uma contínua transformação,
                        convertendo o seu viver ao Viver de Cristo, em atitude
                        de intercessão por toda a humanidade.
                      </p>
                    </div>
                  </p>
                  <p class="text-justify">
                    A uma alma delicada unia Beatriz uma natureza cativante, e
                    deslumbrante formosura.
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-5 d-flex justify-content-end">
                <figure class="my-4">
                  <img src={PreyImage2} alt="" width= "350px" height="350px" class="img-fluid" />
                </figure>
              </div>
              <div class="col-7">
                <h4>Ofício Divino</h4>
                <ShowMoreText
                  lines={6}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p class="text-justify">
                    Para estimular e nutrir essa Presença do Senhor, as Monjas
                    são chamadas ao Louvor ao Criador desde o nascer ao pôr do
                    sol e esta Oração Litúrgica, não o fazem por si mesmas, mas
                    em nome de toda a Igreja e pela humanidade. Por isso, elevam
                    salmos e hinos de louvor e gratidão ao Senhor na Liturgia
                    das Horas, 7 vezes durante o dia, comunitariamente.
                    Portanto o Mosteiro é um recanto de Oração, é o Lugar da
                    Casa de Deus e oferece um ambiente propício, para todos os
                    fiéis freqüentadores, que desejam crescer na oração pessoal,
                    na meditação da Palavra e ficar aos pés do Senhor , no
                    Santíssimo Sacramento como verdadeiros adoradores.
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-5 d-flex justify-content-end">
                <figure class="my-4">
                  <img src={PreyImage3} alt="" width= "350px" height="350px" class="img-fluid" />
                </figure>
              </div>
              <div class="col-7" justify-content="left">
                <h4>Na Corte de Castela</h4>
                <ShowMoreText
                  lines={15}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p class="text-justify">
                    Os Monges e Monjas, desde suas origens, buscam viver este
                    dom da Oração,iluminados pela Luz das Sagradas Escrituras. A
                    meditação assídua da Palavra, é a chave para o
                    aprofundamento e conhecimento do Senhor e da realização de
                    Sua Vontade em nossa vida.Esta meditação a monja aprende a
                    realizar em 4 etapas:
                    <br />
                    <br />
                    Lectio: Leitura e aprofundamento da Palavra
                    <br />
                    <br />
                    Meditatio: Meditação da Palavra, a Monja confronta o texto
                    Sagrado com sua vida
                    <br />
                    <br />
                    Oratio: Iluminada pela Palavra, pede a Graça do Senhor para
                    a sua transformação e conversão.
                    <br />
                    <br />
                    Contemplatio: Com o coração humilde e feliz, a Consagrada se
                    deixa amar pelo Senhor e o ama na plenitude de sua entrega,
                    sendo dócil aos apelos do Senhor.
                  </p>
                  <p class="text-justify">
                    <em>
                      <strong>
                        É na Oração e meditação, que a Monja encontra força,
                        para transformar sua vida , à Vida de Cristo, fazendo
                        dela uma nova criatura, liberta de tudo aquilo que a
                        impede de ser livre na Vida da Graça, à Luz da Fé.
                      </strong>
                    </em>
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-5 d-flex justify-content-end">
                <figure class="my-4">
                  <img src={PreyImage4} alt="" width= "350px" height="350px" class="img-fluid" />
                </figure>
              </div>
              <div class="col-7" justify-content="left">
                <h4>Santa Missa</h4>
                <ShowMoreText
                  lines={8}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p>
                    Na Eucaristia, o Sacrifício de Cristo se torna também o
                    sacrifício dos membros de seu Corpo Místico. A vida dos
                    Consagrados , com tudo aquilo que realizam: seus louvores,
                    suas orações, seus trabalhos e sofrimentos, são unidos aos
                    de Cristo e à sua Oferenda Total, e adquirem assim um valor
                    novo.
                  </p>
                  <p>
                    A Consagração da Religiosa ao Senhor é uma oferenda
                    permanente, que diariamente com Jesus, no momento do Santo
                    Sacrifício da Missa, a Monja se oferece com Jesus ao Pai e
                    em uma só oferenda, pela salvação do mundo. As Monjas unidas
                    a Cristo, são como a gota de água que se adiciona ao Cálice
                    com Vinho e se deixam diluir na Essência de Cristo, na
                    Unidade do Espírito Santo e em Louvor ao Pai.
                  </p>
                  <p>
                    <strong>
                      A Monja Concepcionista Franciscana, faz de sua vida uma
                      Oração de entrega ao Senhor:
                    </strong>
                  </p>

                  <p>
                    <em>
                      “ ... A entrada nesta Ordem é uma singular oferta, que a
                      Nosso Redentor e a Sua Gloriosa Mãe se oferece, dando-se a
                      Ele, com corpo e alma em hóstia viva ” Santa Regra II
                    </em>
                  </p>
                  <p></p>
                </ShowMoreText>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-5 d-flex justify-content-end">
                <figure class="my-4">
                  <img src={PreyImage5} alt="" width= "350px" height="350px" class="img-fluid" />
                </figure>
              </div>
              <div class="col-7" justify-content="left">
                <h4>No Coração da Igreja: Somos Intercessoras</h4>
                <ShowMoreText
                  lines={15}
                  more={"Mostrar mais"}
                  less={"Mostrar menos"}
                  onClick={onClick}
                  expanded={expand}
                >
                  <p class="text-justify">
                    <strong>A Intercessão</strong> é uma oração de súplica ao
                    Senhor, que ora em favor do outro, ou seja, é a expressão da
                    união e da comunhão dos santos. Desde Abraão, Moisés, David,
                    Judite, Éster e inclusive Nossa Senhora, procuraram
                    interceder em favor do povo e não buscavam os seus próprios
                    interesses, mas sobretudo os dos outros (Fl 2, 4).
                  </p>
                  <p class="text-justify">
                    <strong>
                      A Religiosa Contemplativa, tem através do seu Viver Orante
                      uma presença muito útil e portadora de transformação
                    </strong>
                    , pela sua Ação Intercessora, junto aos que lutam e sofrem.
                    Lembremos da passagem em que Moisés orando ao Senhor,
                    alcançou a vitória para Josué e os guerreiros que lutavam na
                    planície, tanto assim que quando Moisés descia os braços
                    orantes, os inimigos prevaleciam (Ex 17, 8-13)
                  </p>
                  <p class="text-justify">
                    A Monja faz do seu viver uma Oração viva na presença de
                    Deus, tal como uma vela acesa sobre o altar.{" "}
                    <strong>
                      Oração existencial, vidas transformadas pela Fé e pelo
                      Amor a Deus.
                    </strong>
                  </p>
                  <p class="text-justify">
                    Além do mais, temos exemplo do próprio Cristo que consagrou
                    à oração, no silêncio de Nazaré, 30 anos de sua vida
                    terrena. E até mesmo durante a vida pública, Jesus passava
                    muitas noites em oração; sendo o seu conselho categórico:{" "}
                    <em>“ Orai sem cessar” (Lc 18,1)</em>.
                  </p>
                  <p class="text-justify">
                    <strong>
                      Portanto, é na Oração que a Monja encontra força, para
                      transformar sua vida à Vida de Cristo, fazendo dela uma
                      nova criatura, liberta de tudo aquilo que a impede de ser
                      livre na Vida da Graça,à Luz da Fé.
                    </strong>
                  </p>
                </ShowMoreText>
              </div>
            </div>
            <div>
              <p class="container" align="right">
                <em>
                  "Porque Deus amou ao mundo de tal maneira que deu o seu
                  <br />
                  Filho unigênito, para que todo o que nele crê não pereça,
                  <br />
                  mas tenha a vida eterna." -<strong> João 3:16</strong>
                </em>
              </p>
            </div>
          </div>
        </div>
        <div class="col-3">
        </div>
      </div>
    </>
  );
};

export default Prey;
