import React, { useState, useEffect } from "react";
import * as C from "./styled";
import Email from "../../../_assets/img/email-contato.png";

import axios from "axios";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();

  async function sendMail(e) {
    e.preventDefault();

    await axios
      .post("http://localhost:8080/mosteiro-0.0.1-SNAPSHOT/v1/oracao", {
        name,
        email,
        phone,
        message,
      })
      .then((response) => {
        if (response.data.msg === "sucess") {
          alert("email enviado");
        } else if (response.data.msg === "fail") {
          alert("email falhou");
        }
      });
  }

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
            <form>
              <div class="form-group required">
                <label for="nome" class="required-label">
                  <strong>Nome completo</strong>
                </label>
                <input
                  type="text"
                  name="nome"
                  value={name}
                  class="form-control required"
                  id="nome"
                  aria-required="true"
                  required=""
                  maxLength="100"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label for="email" class="required-label">
                  <strong>E-mail</strong>
                </label>
                <input
                  value={email}
                  type="email"
                  name="email"
                  class="form-control required"
                  id="email"
                  aria-required="true"
                  required=""
                  maxLength="100"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group required">
                <label for="telefone" class="required-label">
                  <strong>Telefone</strong>
                </label>
                <input
                  type="text"
                  value={phone}
                  name="telefone"
                  class="telefone form-control required"
                  id="telefone"
                  aria-required="true"
                  required=""
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div class="form-group required">
                <label for="mensagem" class="required-label">
                  <strong>Mensagem</strong>
                </label>
                <input
                  value={message}
                  name="mensagem"
                  class="form-control required"
                  id="mensagem"
                  aria-required="true"
                  maxLength="2000"
                  required=""
                  rows="5"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <small class="form-text text-muted">
                  Limite de 2.000 caracteres
                </small>
              </div>
              <div id="mail-status"></div>
              <button
                type="submit"
                value="submit"
                class="btn btn-primary"
                id="send-email"
                onClick={sendMail}
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
