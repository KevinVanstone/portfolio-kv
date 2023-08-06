import React from "react";
import styles from "./ProjectList.module.scss";
import Project from "../Project/Project";

const myProjects = [
  {
    name: "Better Bettor Dashboard",
    tech: "React",
    tech2: "Express",
    tech3: "SASS",
    description: "The Better Bettor Dashboard is a web application that leverages the NHL Stats API to present bettors with the information they need to make LIVE betting decisions."
  },
  {
    name: "Open Seer",
  },
  {
    name: "Rogers Arena",
  },
];

const ProjectList = () => {
  return (
    <>
      <div className={styles[`projectList`]}>
        <h3 className={styles[`subhed`]}>This is the Projects List</h3>
        {myProjects &&
          myProjects.map((project) => {
            return <Project data={project} key={`project-${project.name}`} />;
          })}
      </div>
    </>
  );
};

export default ProjectList;
