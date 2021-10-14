import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_im5ronl";
  const templateID = "template_ID";
  const userID = "user_RXtQk9xbkcuxeI8Wr9FD4";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Formulário enviado! Entrarei em contato o mais rápido possível"
        );
      })
      .catch((err) => console.error(`Algo deu errado.. ${err}`));
  };

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>Entre em contato!</h1>
        <p>
          Por favor, preencha o formulário de contato e entrarei em contato o
          mais rapido possivel.
        </p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome"
                  name="name"
                  ref={register({
                    required: "Por gentileza, insira seu nome.",
                    maxLength: {
                      value: 40,
                      message: "Desculpe, o limite de caracteres no nome é 40.",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Numero do telefone"
                  name="phone"
                  ref={register({
                    required: "Por gentileza, insira seu telefone",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  ref={register({
                    required: "Por gentileza, insira o email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Assunto"
                  name="subject"
                  ref={register({
                    required: "OOPS, você esqueceu de preencher o assunto",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Por gentileza, descreve a demanda de seu projeto"
                  name="description"
                  ref={register({
                    required: "OOPS, você não descreveu sua demanda!...",
                  })}
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">
                Enviar mensagem
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
