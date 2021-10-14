import React from "react";
import empresa1 from "../images/empresas/ifsc.png";
import empresa2 from "../images/empresas/ufsc.png";
import empresa3 from "../images/empresas/estacio.png";
import empresa4 from "../images/empresas/hostgator.png";
import empresa5 from "../images/empresas/beiramar.png";
import empresa6 from "../images/empresas/intelbras.png";
import empresa7 from "../images/empresas/fontes.png";
import empresa8 from "../images/empresas/citeb.jpeg";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experiência</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>Formação Técnica</h2>
            <h3>2013 - 2017</h3>
            <p>Formação Técnica em Eletrotécnica pelo IF-SC</p>
            <p>Foco em projetos elétricos e eletronica industrial</p>
            <p></p>
            <img className="empresa1" src={empresa1} alt="empresa1" />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>Formação Academica</h2>
            <h3>2021 - 2023</h3>
            <p>Engenharia Elétrica UFSC</p>
            <p>Trancado para cursar Analise e Desenvolvimento de Sistemas</p>
            <img className="empresa1" src={empresa2} alt="empresa2" />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>Formação Academica</h2>
            <h3>2021 - 2023</h3>
            <p>Análise e Desenvolvimento de Sistemas</p>
            <p>
              Atualmente pesquisando como escalar grandes sistemas através da
              AWS e trabalhando com projetos Javascript/ReactJs, Python/Django.
            </p>
            <img className="empresa1" src={empresa3} alt="empresa3" />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>HostGator</h2>
            <h3>Set/2018 - Jun/2019</h3>
            <h4>Suporte Técnico</h4>
            <p>
              Meu primeiro contato com a área de tecnologia. Nesta experiencia
              atuei no setor de suporte técnico, auxiliando clientes com suas
              demandas e dúvidas. Pude aprender o básico sobre HTML, CSS, PHP,
              Wordpress e as ferramentas utilizadas para o serviço de webhosting
              como o Cpanel e o WHMCS.
            </p>
            <img className="empresa1" src={empresa4} alt="empresa4" />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>Beiramar Shopping</h2>
            <h3>Jul/2019-Mai/2020</h3>
            <h4>Técnico de Manutenção Elétrica</h4>
            <p>
              Instalações elétricas em geral, execução de projetos, manutenção
              em quadros, painéis, sistemas de alarme , CFTV, subestação,
              motores e geradores. Rotinas de manutenção e vistoria.
            </p>
            <img className="empresa1" src={empresa5} alt="empresa5" />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>Intelbras</h2>
            <h3>Nov/2020 - Mai/2021</h3>
            <h4>Técnico de Desenvolvimento de produto</h4>
            <p>
              Atuação no time de desenvolvimento de cameras analógicas.
              Elaboração de documentação técnica, testes e validação de features
              e especificações. Soluções para manufatura industrial, negociação
              com fornecedores extrangeiros.
            </p>
            <img className="empresa1" src={empresa6} alt="empresa7" />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>Fontes Promotora</h2>
            <h3>Mai/2021 - Ago/2021</h3>
            <h4>Desenvolvedor de Software</h4>
            <p>
              Desenvolvimento de backend-software para serviços internos com
              python e javascript. webscrapping, automação de tarefas, modelagem
              e higienização de dados, arquitetura de software, design patterns.
              <p>
                Ferramentas: mongoDb, PostgreSql, Django, Flask, FastApi,
                NodeJs, ReactJS, Aws EC2, Aws ElasticBeanStalk.
              </p>
            </p>
            <img className="empresa1" src={empresa7} alt="empresa7" />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>Fundação CiTeB</h2>
            <h3>Out/2021 - Atual</h3>
            <h4>Pesquisador em Software</h4>
            <p>
              Elaboração de projetos front end em Windows, Mac e mobile, para
              grandes empresas com foco em usabilidade e experiencia do usuário.
            </p>
            <img className="empresa1" src={empresa8} alt="empresa8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
