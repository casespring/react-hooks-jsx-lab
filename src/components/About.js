import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>"About me"</h2>
    <p>I will be the greatest that ever was!</p>
    <img src={image} alt="I made this" />
  </div>);
}

export default About;
