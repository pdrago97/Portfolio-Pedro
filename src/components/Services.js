import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faReact, faAws } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Minhas Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faPython} size="2x" /></div>
              <h3>Python/Django</h3>
              <p>Utilizando os principios do framework Django construo projetos integrados através do conceito de MVC, Construção de API's Restfull com FastApi/Flask.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faReact} size="2x" /></div>

              <h3>ReactJs/NodeJs</h3>
              <p>Utilizando Javascript, a linguagem da Web, construo interfaces interativas e modernas</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDatabase} size="2x" /></div>

              <h3>Bancos de Dados</h3>
              <p>Modelagem e implementação de bancos de dados altamente disponíveis. PostgresSql, MongoDb, DynamoDB</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faAws} size="2x" /></div>

              <h3>Amazon WebServices</h3>
              <p>Utilização dos serviços da AWS para escalar a aplicação com segurança, confiabilidade e economia. DynamoDb, EC2, S3, Elastic Beanstalk</p>.
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;
