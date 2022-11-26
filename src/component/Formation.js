import React from "react";
import gitLogo from "../img/logo-formation/git-plain.png";
import githubLogo from "../img/logo-formation/github-original.png";
import html5Logo from "../img/logo-formation/html5-original.png";
import cssLogo from "../img/logo-formation/css3-original.png";
import nodeJSLogo from "../img/logo-formation/nodejs-original.png";
import reactLogo from "../img/logo-formation/react-original.png";
import solidityLogo from "../img/logo-formation/solidity-original.png";
import truffleLogo from "../img/logo-formation/truffle-original.png";
import jsLogo from "../img/logo-formation/javascript-original.png";
import pythonLogo from "../img/logo-formation/python-original.png";

export default function Formation() {
  return (
    <section className="formation">
      <h2 className="section--title">Formation</h2>
      <div className="formation--content">
        <ul className="formation--list">
          <li className="formation--list--element">
            <a
              href="https://certificate.bcdiploma.com/check/AF32D56CA58A264097E947F84728FD4521BC4938C810958BD2500113851C9CD0ZkQvb0JxclJPU0xhcGNvNTllS1FlWkRNVTY5UU9sWEhGeENQdGQycU1xaW5yRmp0"
              target="_blank"
              rel="noreferrer"
            >
              Certification Alyra Dévloppeur Blockchain
            </a>{" "}
            (Décembre 2021 - Mai 2022):
            <ul className="formation--list--element--ul">
              <li className="formation--list--element--li">
                Developper un smart-contract sur EVM
              </li>
              <li className="formation--list--element--li">
                Adopter les bonnes pratiques de developpement pour reduire les
                risques
              </li>
              <li className="formation--list--element--li">
                Optimiser son code pour limiter les frais de gas
              </li>
              <li className="formation--list--element--li">
                Integrer la partie front d’une application decentralisee via les
                librairies
              </li>
              <li className="formation--list--element--li">
                Deployer une application decentralisee sur une Blockchain
              </li>
            </ul>
          </li>
          <li className="formation--list--element">
            Cours sur OpenClassRooms(Septembre-Novembre 2021):
            <ul className="formation--list--element--ul">
              <li className="formation--list--element--li">
                Apprenez à programmer avec JavaScript
              </li>
              <li className="formation--list--element--li">
                Gérez du code avec Git et GitHub
              </li>
              <li className="formation--list--element--li">
                Créez votre site web avec HTML5 et CSS3
              </li>
              <li className="formation--list--element--li">
                Utiliser la ligne de commande dans un terminal
              </li>
              <li className="formation--list--element--li">
                Apprenez à programmer avec Python
              </li>
            </ul>
          </li>
        </ul>
        <div className="formation--logos">
          <img
            title="HTML5"
            className="formation--logo"
            src={html5Logo}
            alt=""
          />
          <img title="CSS3" className="formation--logo" src={cssLogo} alt="" />
          <img
            title="React"
            className="formation--logo"
            src={reactLogo}
            alt=""
          />
          <img
            title="Solidity"
            className="formation--logo"
            src={solidityLogo}
            alt=""
          />
          <img title="Git" className="formation--logo" src={gitLogo} alt="" />
          <img
            title="Github"
            className="formation--logo"
            src={githubLogo}
            alt=""
          />
          <img
            title="Truffle"
            className="formation--logo"
            src={truffleLogo}
            alt=""
          />
          <img
            title="Javascript"
            className="formation--logo"
            src={jsLogo}
            alt=""
          />
          <img
            title="Node.js"
            className="formation--logo"
            src={nodeJSLogo}
            alt=""
          />
          <img
            title="Python"
            className="formation--logo"
            src={pythonLogo}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
