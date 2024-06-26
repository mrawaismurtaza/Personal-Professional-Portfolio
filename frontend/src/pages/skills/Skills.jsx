import React from 'react';
import './Skills.css';
import Skill from '../../components/skill/Skill';
import { otherSkills } from "../../pages/data/Data";
import Project from '../../components/Project/Project';

function Skills() {
  return (
    <div className='skill-project'>
    <div className="Titles">
        <p>Skills</p>
        <p>Projects</p>
      </div>
    <div className="Skills">
      
      <div className="Left">
        {otherSkills.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            icon={skill.icon}
            percentage={skill.percentage}
          />
        ))}
      </div>
      <div className="Right">
      <Project/>
      </div>
    </div>
    </div>
  );
}

export default Skills;
