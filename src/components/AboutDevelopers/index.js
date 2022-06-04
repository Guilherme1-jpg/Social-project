import React from "react";
import { Divider, styled, Typography } from "@mui/material";
import logoUnisagrado  from "../../_assets/img/unisagrado.png";

const CustomizedText = styled(Typography)`
  @media (max-width: 650px) {
    color: #fff;
  }
`;

const AboutDevelopers = () => {
  return (
    <>
      <div class="container">
        <div class="col-12">
          <div class="row">
            <h1 class="mb-5 text-center font-italic">
              <Divider>Sobre os Desenvolvedores</Divider>
            </h1>
            <Divider />
            <br />
            <div class="row mb-12">
              <div class="col-12  d-flex justify-content-end"></div>
              <div class="col-12" justify-content="center">
                <figure class="my-4 text-center">
                  <img src={logoUnisagrado} alt="" class="img-fluid" />
                </figure>
                <p class="text-justify">
                  Somos um grupo de estudantes veteranos do curso de Ciência da Computação da Unisagrado, muito orgulhosos em fazer parte deste projeto incrível!
                  Temos interesse em ajudar projetos como este pois acreditamos que os mesmos colaboram para um mundo melhor!
                </p>
                <p class="text-justify">
                  Segue a escalação do nosso time:
                </p>
                <p class="text-justify">
                  <div>
                    <strong>
                      <p>• Gabriel Orbeli</p>
                    </strong>
                    <br />
                  </div>
                  <div>
                    <strong>
                      <p>• Guilherme Henrique</p>
                    </strong>
                    <br />
                  </div>
                  <div>
                    <strong>
                      <p>• Caio Grandini</p>
                    </strong>
                    <br />
                  </div>
                  <div>
                    <strong>
                      <p>• Ulisses Rosa</p>
                    </strong>
                    <br />
                  </div>
                  <div>
                    <strong>
                      <p>• Edson Bergamo</p>
                    </strong>
                    <br />
                  </div>
                  <div>
                    <strong>
                      <p>• Matheus Rizzo</p>
                    </strong>
                    <br />
                  </div>
                  <div>
                    <div>
                      <strong>
                        <p>• Lucas Faustino</p>
                      </strong>
                      <br />
                    </div>
                    <div>
                      <strong>
                        <p>• Gustavo Silvestre</p>
                      </strong>
                      <br />
                    </div>
                  </div>
                </p>

                <p class="text-justify">
                  Prestamos nossos sinceros agradecimentos especialmente ao nosso orientador, professor Dr. <b>Élvio Gilberto da Silva</b>, sem o qual não poderíamos ter concluído o trabalho.
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

export default AboutDevelopers;
