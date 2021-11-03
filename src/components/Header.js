import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Desenvolvimento Web e aceleração de negocios</h1>
        <Typed
          className="typed-text"
          strings={[
            "Desenvolvimento Web",
            "Aplicativos Mobile",
            "Javascript",
            "ReactJs",
            "NodeJS",
            "NextJs",
            "Jest",
            "Amazon AWS",
            "Python",
            "Pandas",
            "Selenium",
            "Requests",
            "Django",
            "Flask",
            "FastApi",
            "Postgres",
            "MongoDB",
            "MySQL",
          ]}
          typeSpeed={33}
          backSpeed={33}
          loop
        />
        <Link
          smooth={true}
          to="contacts"
          offset={-110}
          className="btn-main-offer"
        >
          Entre em contato
        </Link>
      </div>
    </div>
  );
};

export default Header;
