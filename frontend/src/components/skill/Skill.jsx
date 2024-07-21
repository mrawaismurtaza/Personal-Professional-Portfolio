import React from "react";
import "./Skill.css";

function Skill({ name, icon: Icon, percentage }) {
  return (
    <div className="Skill">
      <div className="Skill-Content">
        <div className="Icon">
          <Icon className="Icons" />
        </div>
        <div className="Name">{name}</div>
        <div className="Percentage">{percentage}</div>
      </div>
      <div className="Line" style={{ width: percentage }}></div>
    </div>
  );
}

export default Skill;
