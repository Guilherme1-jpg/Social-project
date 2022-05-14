import { style } from "@mui/system";
import React, { Component } from "react";
import * as C from "./styled";
import Email from "../../../_assets/img/email-contato.png";

const Contact = () => {
  return (
    <>
      <body>
        <div align="center">
          <h1>Quer deixar uma mensagem? Preencha o formulário abaixo</h1>
          <medium>Seu contato é muito importante para nós.</medium>
          <br></br>
          <br></br>
        </div>
        <C.ContactArea>
          <div class="content col-md-6">
            <img alt="freiraContateira" width="95%" height="95%" src={Email} />
          </div>
          <div class="content col-md-6">
            <form
              id="frmContact"
              method="POST"
              action="mailto:irmãs@irmãs.com"
            >
              <div class="form-group required">
                <label for="nome" class="required-label">
                  <strong>Nome completo</strong>
                </label>
                <input
                  type="text"
                  name="nome"
                  class="form-control required"
                  id="nome"
                  aria-required="true"
                  required=""
                  maxlength="100"
                />
              </div>
              <div>
                <label for="email" class="required-label">
                  <strong>E-mail</strong>
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control required"
                  id="email"
                  aria-required="true"
                  required=""
                  maxlength="100"
                />
              </div>
              <div class="form-group required">
                <label for="telefone" class="required-label">
                  <strong>Telefone</strong>
                </label>
                <input
                  type="text"
                  name="telefone"
                  class="telefone form-control required"
                  id="telefone"
                  aria-required="true"
                  required=""
                />
              </div>

              <div class="form-group required">
                <label for="mensagem" class="required-label">
                  <strong>Mensagem</strong>
                </label>
                <input
                  name="mensagem"
                  class="form-control required"
                  id="mensagem"
                  aria-required="true"
                  maxlength="2000"
                  required=""
                  rows="5"
                />
                <small class="form-text text-muted">
                  Limite de 2.000 caracteres
                </small>
              </div>
              <div id="mail-status"></div>
              <button
                type="submit"
                onclick= ""
                value= "submit"
                class="btn btn-primary"
                id="send-email"
              >
                Enviar
              </button>
            </form>
          </div>
        </C.ContactArea>
        <p class="container" align="right">
          <em>
            <br></br>
            "Porque Deus amou ao mundo de tal maneira que deu o seu<br></br>
            Filho unigênito, para que todo o que nele crê não pereça, <br></br>
            mas tenha a vida eterna. - <strong>João 3:16"</strong>
          </em>
        </p>
      </body>
    </>
  );
};

export default Contact;
