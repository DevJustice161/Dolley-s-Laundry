import React from "react";

export default function Pagehero(props) {
  return (
    <section className="about-hero">
      <h4 className="section-tag">{props.head}</h4>
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
    </section>
  );
}
