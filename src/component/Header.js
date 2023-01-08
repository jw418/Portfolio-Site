import React from "react";
import pp from "../img/ppHeader.jpg";
import mailLogo from "../img/mail-logo-white.png";
import linkedinLogo from "../img/linkedin-logo-white.png";
import githubLogo from "../img/github-logo-white.png";


export default function Header(props) {
 



  return (
    <header className="header">  
      <div className={`header--languages${props.isEng ? "-isEng" : ""}`} onClick={props.toggleLang}>
        FR - ENG          
      </div>   
      <img className="header--img" src={pp} alt="" />
      <div className="header--content">

        <h1>{props.isEng ? "Hi, I'm Julien Wolff" : "Bonjour, Julien Wolff"}</h1>
        <h3>{props.isEng ? "Blockchain Developer" : "Développeur Blockchain"}</h3>
        <div className="socials">
          <div className="logo--border">
            <a
              title="wolffjulien8@gmail.com"
              className="socials--mail"
              href="mailto:wolffjulien8@gmail.com"
            >
              <img className="socials--logo" src={mailLogo} alt="" />
            </a>
          </div>
          <div className="logo--border">
            <a
              title="https://www.linkedin.com/in/julien-wolff-web3/"
              className="socials--linkedin"
              href="https://www.linkedin.com/in/julien-wolff-web3/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="socials--logo" src={linkedinLogo} alt="" />
            </a>
          </div>
          <div className="logo--border">
            <a
              title="https://github.com/jw418"
              className="socials--github"
              href="https://github.com/jw418"
              target="_blank"
              rel="noreferrer"
            >
              <img className="socials--logo" src={githubLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
