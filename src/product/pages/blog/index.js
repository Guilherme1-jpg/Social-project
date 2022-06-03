import React from "react";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import Frei from "../../../_assets/img/pill/frei_galvao.jpg";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { images } from "./photos";
import Benefactor1 from "../../../_assets/img/benefactor/benfeitores_1.jpg";

const Blog = () => {
  return (
    <>
      <div class="row d-flex justify-content-center">
        <div class="col-9">
          <h1 class="mb-5 text-center font-italic">
            <Divider>Blog</Divider>
          </h1>

          <h3 class="mb-5 text-center font-italic">
            Pílulas de Frei Galvão no Mosteiro de Bauru
          </h3>

          <div class="d-flex">
            <div>
              <figure class="m-2">
                <img src={Frei} alt="" />
              </figure>
            </div>
            <div class="col-6 m-2">
              <p>
                As Irmãs do Mosteiro de Bauru, fornecem as pílulas do Santo
                Antônio de Sant’Anna Galvão a todos os fiéis devotos que delas
                quiserem implorar de Deus as graças desejadas, pela intercessão
                deste tão querido e poderoso Intercessor, que durante a sua
                vida, sempre cheio do espírito de caridade, não media
                sacrifícios para aliviar os sofrimentos alheios.
              </p>

              <h3 class="fs-5 text-start">
                Horário de atendimento no Mosteiro:
              </h3>

              <p>
                <b>Manhã:</b> 09:00 às 11:30 <br />
                <b>Tarde:</b> 14:30 às 17:00 <br />
                <b>Telefone:</b> (14) 3265-1624
              </p>
            </div>
          </div>

          <h3 class="mb-5 text-center font-italic">Benfeitores do Mosteiro</h3>

          <h3 class="fs-5 text-start">Filhos espirituais de Santa Beatriz</h3>

          <div class="col-9">
            <p>
              As Monjas da Imaculada Conceição, manifestam um apreço e
              reconhecimento especial aos Amigos e Benfeitores do Mosteiro,
              participando de suas alegrias e provações e recordando-os,
              particularmente, na Oração,formando assim,uma Família Espiritual
              no Coração de Santa Beatriz, diante do Altar do Senhor.
            </p>

            <h3 class="fs-5 text-start">
              Família dos Voluntários e Benfeitores do Mosteiro Imaculada
              Conceição
            </h3>

            <div class="d-flex">
              <div>
                <figure class="text-start">
                  <img src={Benefactor1} class="" alt="" />
                </figure>
              </div>
              <div class="col-8 p-2">
                <p>
                  Os Voluntários e Benfeitores do Mosteiro Imaculada Conceição
                  formam com as Irmãs, uma só Família que, centrados no Amor a
                  Deus, à Santíssima Virgem Imaculada e a Santa Beatriz, buscam:
                </p>

                <p class="">
                  "Viver uma vida alicerçada na Palavra de Deus e na prática dos
                  Sacramentos, apoiados pelas Orações, conselhos e
                  direcionamento espiritual das Irmãs, comprometendo-se assim
                  com a Caridade e o Bem do próximo."
                </p>
              </div>
            </div>

            <h3 class="fs-5 text-start">Atividades que desempenham</h3>
           
            <ul>
              <li>Auxiliam nas Campanhas em prol do Mosteiro, principalmente no objetivo da nova construção</li>
              <li>Representam as Irmãs em exposições</li>
              <li>Auxiliam nos Eventos promovidos pelo Mosteiro</li>
            </ul>

            <h3 class="fs-5 text-start pb-2">Galeria de fotos(festas dos anos 2005 - 2006 - 2007)</h3>

            <p class="col-8">
              <ImageGallery items={images} />
            </p>

          </div>
        </div>
      </div>   
    </>
  );
};

export default Blog;
