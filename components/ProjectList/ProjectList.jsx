import React from "react";
import styles from "./ProjectList.module.scss";
import Project from "../Project/Project";

const myProjects = [
  {
    name: "Project 1",
  },
  {
    name: "Project 2",
  },
  {
    name: "Project 3",
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
