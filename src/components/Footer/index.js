import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <hr className="clearfix w-100 d-md-none pb-0" />
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Desenvolvido por:</h5>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Gui</a>
                </li>
                <li>
                  <a href="#!">ulisses</a>
                </li>
                <li>
                  <a href="#!">lot</a>
                </li>
                <li>
                  <a href="#!">Sanches</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Contato</h5>
              <ul className="list-unstyled">
                <li>
                  <a> (99)9999-9999</a>
                </li>
                <li>
                  <a> mosteiro@gmail.com</a>
                </li>
                <li>
                  <a>Rua: piratininga</a>
                </li>
                <li>
                  <a>Facebook</a>
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
