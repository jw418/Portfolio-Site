import React from "react"
import githubLogo from "../img/github-logo-white.png"

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
    return(    
        <div className="project">
            <h3 className="project--title">{props.title}</h3>
            <img className="project--img" src={`../image/${props.image}`}  onClick={expand} alt=""/> 
            <div className="popup-image" onClick={close} style={popupImg}>                
                <img src={`../image/${props.image}`} alt=""/>
            </div>       
            <p className="project--description">{props.description}</p>
            <p className="project--tag"><i>{props.tag}</i></p>            
            <div className="project--buttons">
                <a className="project--button--code" href={props.github} target="_blank" rel="noreferrer"><img src={githubLogo} alt=""/>Code</a>                                    
                {websiteButton}
                
            </div>
        </div>    
    )
}