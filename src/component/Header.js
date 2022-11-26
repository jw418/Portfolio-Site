import React from "react";
import pp from "../img/ppHeader.jpg";
import mailLogo from "../img/mail-logo-white.png";
import linkedinLogo from "../img/linkedin-logo-white.png";
import githubLogo from "../img/github-logo-white.png";
import flagFR from "../img/flag-fr.png";
import flagUK from "../img/flag-uk.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header--languages">
        <img className="header--languages--fr" src={flagFR} onClick="" alt=""/>
        <img className="header--languages--usa-uk"  src={flagUK} onClick="" alt=""/>
      </div>

      <img className="header--img" src={pp} alt="" />
      <div className="header--content">
        
     

        <h1>Hi, I'm Julien Wolff</h1>
        <h3>Blockchain Developer</h3>
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
