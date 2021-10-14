import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Florianópolis</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">+55(48)99905-2697</a>
            </div>
            <div className="d-flex">
              <p>pedroreichow3@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Inicio</a>
                <br />
                <a className="footer-nav">Sobre Mim</a>
                <br />
                <a className="footer-nav">Serviços</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experiencia</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contato</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <SocialIcon url="https://www.linkedin.com/in/pedroreichow/" />
              <SocialIcon url="https://wa.me/+5548999052697?text=Ol%C3%A1%20vim%20pelo%20seu%20site" />
              <SocialIcon url="https://www.facebook.com/pedro.drago.5/" />
              <SocialIcon url="https://www.instagram.com/pdrago_/" />
              <SocialIcon url="https://github.com/pdrago97" />
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Pedro Reichow | All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
