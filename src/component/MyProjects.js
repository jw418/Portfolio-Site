import React from "react";
import cardInfo from "../cardInfo.js";
import Card from "./Card";

export default function MyProjects() {
  const display = cardInfo.map((card) => {
    return (
      <Card
        key={card.id}
        title={card.title}
        image={card.image}
        description={card.description}
        tag={card.tag}
        github={card.github}
        site={card.site}
      />
    );
  });

  return (
    <section className="projects">
      <h2 className="section--title">My Projects</h2>
      <div className="cards">
        {display}
      </div>
    </section>
  );
}
