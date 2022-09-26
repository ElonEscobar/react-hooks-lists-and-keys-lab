import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const pro = projects.map((singlePro)=>{
    return(<ProjectItem key={singlePro.id} name={singlePro.name} about={singlePro.about} technologies={singlePro.technologies}/>)
  }
   
  )
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
        {pro}
    
      </div>
    </div>
  );
}

export default ProjectList;
