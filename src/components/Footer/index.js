import React from "react";
import { GrFacebook } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";
import { Divider, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <footer className="page-footer font-small blue pt-4">
        <Divider />
        <div className="container-fluid text-center text-md-left">
          <hr className="clearfix w-100 d-md-none pb-0" />
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <figure class="text-center fs-8">
                <blockquote>
                  "Porque Deus amou ao mundo de tal maneira que deu o seu Filho
                  unigênito, para que todo o que nele crê não pereça, mas tenha
                  a vida eterna
                </blockquote>

                <figcaption class="blockquote-footer">
                  <cite title="(João 3:16)"> - João 3:16"</cite>
                </figcaption>
              </figure>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.facebook.com/monjasconcepcionistas/">
                    <GrFacebook style={{ width: "30px", height: "30px" }} />
                  </a>

                  <a href="https://www.youtube.com/channel/UCE731qVJ6kGa6l1wUTWx_NQ">
                    <GrYoutube
                      style={{
                        width: "100px",
                        height: "50px",
                        color: "red",
                      }}
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Contato</h5>
              <ul className="list-unstyled">
                <li>
                  <a> ( 14 ) 3265–1624 </a>
                </li>
                <li>
                  <a> mosteiro@moic.org.br</a>
                </li>
                <li>
                  <a>
                    Entrada Vicinal Maria Domingues
                    <br />
                    Verissimo, s/n / Chacara Santa Beatriz da Silva -
                    Piratininga / SP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022 Copyright:
          <a>Todos os Direitos reservados</a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
