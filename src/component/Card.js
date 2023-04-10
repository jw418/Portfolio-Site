import React from "react"
import githubLogo from "../img/github-logo-white.png"
import maximize from "../img/link.png"

export default function Card(props) {
    
    const [popupImg, setPopupImg] = React.useState({display: "none"})    

    const expand = () => {
        setPopupImg({
            display: "block"
        })
    }

    const close = () => {
        setPopupImg({
            display: "none"
        })
    }
 
    const styles = {
        display: props.site ? "block" : "none"
    }
    
    const websiteButton = (
        <a className="project--button--site" href={props.site} target="_blank" rel="noreferrer" style={styles}>Website</a>
    )
    return (
      <div className="project">
        <h3 className="project--title">{props.title}</h3>
        <div className="container--img">
          <img
            className="project--img"
            src={`../image/${props.image}`}
            onClick={expand}
            alt=""
          />
          <img
            className="projetc--img--maximize"
            src={maximize}
            alt=""
            onClick={expand}
            title="Maximize"
          />
        </div>

        <div className="popup-image" onClick={close} style={popupImg}>
          <img src={`../image/${props.image}`} alt="" />
          <p className="close-btn">X</p>
        </div>
        <p className="project--description">
          {props.isEng ? props.descriptionEN : props.description}
        </p>
        <p className="project--tag">
          <i>{props.tag}</i>
        </p>
        <div className="project--buttons">
          {props.github ? (
            <a
              className={`project--button--code${props.isDark ? "-dark" : ""}`}
              href={props.github}
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubLogo} alt="" />
              Code
            </a>
          ) : (
            <></>
          )}
          {websiteButton}
          {!props.site && !props.github ? <p className="coming-soon">Coming soon</p> : <></>}
        </div>
      </div>
    );
}