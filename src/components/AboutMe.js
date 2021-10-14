import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Sobre mim</h1>
          <p>
            Olá! Me chamo Pedro Reichow, sou formado técnico em eletrotécnica
            pelo IF-SC, estudante de Engenharia Elétrica pela UF-SC e Análise e
            Desenvolvimento de Sistemas pela Estácio de Sá. Trabalho com
            desenvolvimento de software para pessoas e empresas. Desenvolvo
            aplicações completas e microserviços utilizando tecnologias como
            Javascript, ReactJS, NodeJs, Python, Django, etc.. Procuro a cada
            dia ir além em minhas pesquisas para entregar um produto cada vez
            mais atualizado e competitivo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
