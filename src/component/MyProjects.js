import React from "react";
import cardInfo from "../cardInfo.js";
import Card from "./Card";

export default function MyProjects(props) {


  const display = cardInfo.map((card) => {
    return (
      <Card
        key={card.id}
        title={card.title}
        image={card.image}
        description={card.description}
        descriptionEN={card.descriptionEN}
        tag={card.tag}
        github={card.github}
        site={card.site}
        isEng={props.isEng}
      />
    );
  });

  return (
    <section className="projects">
      <h2 className="section--title">{props.isEng ? "My Projects" : "Mes Projets"}</h2>
      <div className="cards">
        {display}
      </div>
    </section>
  );
}
