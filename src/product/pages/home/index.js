import React from "react";
import { ContactArea, Body } from "./styled";
import Freira from "../../../_assets/img/freirinha.jpg";
import PgFacebook from "../../../components/pgFacebook";

const Home = () => {
  return (
    <>
      <div class="row">
        <div class="col-md-3" justify-content="center"></div>
        <div class="col-md-6" justify-content="center">
            <div>
              <h1 align="center">Bem vindo(a) ao nosso site</h1>
              <br></br>
              <br></br>
              <em>
                <h2 align="top" align-text="center">
                  “Consagradas ao generoso Serviço do Altíssimo e da Virgem
                  Maria em honra da sua Imaculada Conceição.”
                </h2>
              </em>
              <br></br>
              <p>
                As Monjas Concepcionistas Franciscanas, são chamadas ao Louvor
                do Criador, desde o nascer ao pôr do sol. Esta Oração Litúrgica,
                não o fazem por si mesmas, mas em nome de toda a Igreja e pela
                humanidade. Portanto, o Mosteiro é um Recanto de Oração; é o
                Lugar propício para o Encontro com Deus, e que oferece a todos,
                um ambiente de paz e quietude para reencontrar o sentido
                profundo da vida.
              </p>
              <br></br>
              <p>
                <strong>
                  Navegue pelo nosso site para conhecer um pouco mais sobre
                  nossa Ordem Religiosa, nossa Vida Fraterna e nosso Novo
                  Mosteiro.
                </strong>
              </p>
              <p class="container" align="right">
                <em>
                  <br></br>
                  "Porque Deus amou ao mundo de tal maneira que deu o seu
                  <br></br>
                  Filho unigênito, para que todo o que nele crê não pereça,{" "}
                  <br></br>
                  mas tenha a vida eterna. - <strong>João 3:16"</strong>
                </em>
              </p>
            </div>
        </div>
        <div class="col-md-3" margin-left="10%">
          <PgFacebook />
        </div>
      </div>
    </>
  );
};

export default Home;
