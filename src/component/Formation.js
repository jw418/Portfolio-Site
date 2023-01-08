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

export default function Formation(props) {
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
              {props.isEng
                ? "Alyra Blockchain Developer Certification"
                : "Certification de développeur de blockchain Alyra"}
            </a>{" "}
            {props.isEng
              ? "(December 2021 - May 2022):"
              : "(décembre 2021 - mai 2022) :"}
            <ul className="formation--list--element--ul">
              <li className="formation--list--element--li">
                {props.isEng
                  ? "Developing a smart-contract on EVM"
                  : "Développement d'un smart-contract sur EVM"}
              </li>
              <li className="formation--list--element--li">
                {props.isEng
                  ? "Adopt good development practices to reduce risks"
                  : "Adopter de bonnes pratiques de développement pour réduire les risques"}
              </li>
              <li className="formation--list--element--li">
                {props.isEng
                  ? "Optimize your code to limit gas costs"
                  : "Optimisez votre code pour limiter les coûts de gaz"}
              </li>
              <li className="formation--list--element--li">
                {props.isEng
                  ? "Integrating the front-end of a decentralised application via libraries"
                  : "Intégrer le front-end d'une application décentralisée via des librairies"}
              </li>
              <li className="formation--list--element--li">
                {props.isEng
                  ? "Deploying a decentralized application on a Blockchain"
                  : "Déployer une application décentralisée sur une Blockchain"}
              </li>
            </ul>
          </li>
          <li className="formation--list--element">
            {props.isEng
              ? "Course on OpenClassRooms (September-November 2021):"
              : "Cours sur OpenClassRooms (septembre-novembre 2021) :"}
            <ul className="formation--list--element--ul">
              <li className="formation--list--element--li">
                {props.isEng
                  ? "Learn to program with JavaScript"
                  : "Apprendre à programmer avec JavaScript"}
              </li>
              <li className="formation--list--element--li">
                {props.isEng
                  ? "Manage code with Git and GitHub"
                  : "Gérer le code avec Git et GitHub"}
              </li>
              <li className="formation--list--element--li">
                {props.isEng
                  ? "Create your website with HTML5 and CSS3"
                  : "Créer votre site web avec HTML5 et CSS3"}
              </li>
              <li className="formation--list--element--li">
                {props.isEng
                  ? "Use the command line in a terminal"
                  : "Utiliser la ligne de commande dans un terminal"}
              </li>
              <li className="formation--list--element--li">
                {props.isEng
                  ? "Learn to program with Python"
                  : "Apprendre à programmer avec Python"}
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
