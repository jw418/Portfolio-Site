import React from "react";
//import pp from "../img/ppHeader.jpg";
import mailLogo from "../img/mail-logo-white.png";
import mailLogoDark from "../img/mail-logo-dark.png";
import linkedinLogo from "../img/linkedin-logo-white.png";
import linkedinLogoDark from "../img/linkedin-logo-dark.png";
import githubLogo from "../img/github-logo-white.png";
import githubLogoDark from "../img/github-logo-dark.png";
import switchToLight from "../img/switchToLight.png";
import switchToDark from "../img/switchToDark.png";

export default function Header(props) {
  return (
    <header className="header">
      <div
        className={`header--languages${props.isEng ? "-isEng" : ""}`}
        onClick={props.toggleLang}
      >
         <p
          className={`header--languages-en${props.isEng ? "-on" : "-off"}${
            props.isDark ? "-dark" : ""
          }`}
        >
          EN
        </p>      
        -       
        <p
          className={`header--languages-fr${props.isEng ? "-off" : "-on"}${
            props.isDark ? "-dark" : ""
          }`}
        >
          FR
        </p>
      </div>
      <img
        className="header--style"
        src={props.isDark ? switchToLight : switchToDark}
        onClick={props.toggleStyle}
        alt=""
      />

      <img className="header--img" src="https://avatars.githubusercontent.com/u/94624740?v=4" alt="" />
      <div className="header--content">
        <h1>
          {props.isEng ? "Hi, I'm jw418" : "Bonjour, jw418"}
        </h1>
        <h3>
          {props.isEng ? "Blockchain Developer" : "Développeur Blockchain"}
        </h3>
        <div className="socials">
          <div className={`logo--border${props.isDark ? "-dark" : ""}`}>
            <a
              title="belkin1818@protonmail.com"
              className="socials--mail"
              href="mailto:belkin1818@protonmail.com"
            >
              <img
                className={`socials--logo${props.isDark ? "-dark" : ""}`}
                src={props.isDark ? mailLogoDark : mailLogo}
                alt=""
              />
            </a>
          </div>
        
          <div className={`logo--border${props.isDark ? "-dark" : ""}`}>
            <a
              title="https://github.com/jw418"
              className="socials--github"
              href="https://github.com/jw418"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={`socials--logo${props.isDark ? "-dark" : ""}`}
                src={props.isDark ? githubLogoDark : githubLogo}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
