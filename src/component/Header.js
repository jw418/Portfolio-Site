import React from "react";
import pp from "../img/ppHeader.jpg";
import mailLogo from "../img/mail-logo-white.png";
import linkedinLogo from "../img/linkedin-logo-white.png";
import githubLogo from "../img/github-logo-white.png";
//import flagFR from "../img/flag-fr.png";
//import flagUK from "../img/flag-uk.png";



//< img className="header--languages--fr" src={flagFR} onClick="" alt=""/>
// <img className="header--languages--usa-uk"  src={flagUK} onClick="" alt=""/>
export default function Header() {
  // console.log(props)
  // const actveStyle = { 
  //   color: "#ffffff",
  //   backgroundColor: "#000000",
  //   paddingRight: "3.5px",
  //   paddingLeft: "3.5px",
  //   paddingTop: "0",
  //   borderRadius: "40%",
  //   transition: "all 250ms ease"
  // }

  // const inactiveStyle =  { 
  //   color: "#000000",
  //   backgroundColor: "#ffffff",
  //   cursor: "pointer",
  //   paddingRight: "3.5px",
  //   paddingLeft: "3.5px",
  //   paddingTop: "0",
  //   borderRadius: "40%",
  //   transition: "all 250ms ease"
  // }

  // const fr = ()=> {
  //   //console.log(props.eng)
  //   if (props.eng){
  //     return(<p className="header--languages--fr" style={inactiveStyle} onClick={()=>props.switch}>FR</p>)
  //   }else{
  //     return (<p className="header--languages--fr" style={actveStyle}>FR</p>)
  //   }
  // }

  // const eng = ()=> {
  //   if (props.eng){
  //     return (<p className="header--languages--fr" style={actveStyle}>EN</p>)
  //   }else{
  //     return(<p className="header--languages--fr" style={inactiveStyle} onClick={()=>props.switch}>En</p>)
  //   }
  // }
  
      // <div className="header--languages">
      //  {fr}
      //  <p className="header--languages--separator">-</p>
      //  {eng}
      // </div>
  
  return (
    <header className="header">     
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
