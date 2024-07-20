import React from "react";
import "./About.css";
import PortFolio from "../../images/Portfolio Picture.png";

export default function About() {
  return (
    <div className="About" id="about">
      <div className="About-Title">
        A<span className="sub-title">bou</span>t
      </div>

      <div className="About-sec">
        <div className="Left-sec">
          <img src={PortFolio} alt="" />
        </div>
        <div className="Right-sec">
          <p>I'm Awais Murtaza</p>
          <p>
            My name is Amanullah, and I am currently pursuing a Bachelor's
            degree in Software Engineering at FAST - NUCES, a renowned institute
            for IT education in Pakistan. Hailing from the city of Chiniot, I
            take pride in being a dedicated and hardworking student. Throughout
            my academic journey, I have consistently strived for excellence,
            earning recognition as a good student. My passion for technology and
            programming has driven me to inhance in my studies and explore more
            innovative solutions. With a strong foundation in software
            engineering principles, I aim to make significant contributions to
            the field of technology. I am committed to honing my skills,
            embracing new challenges, and becoming a successful professional in
            the IT industry.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
