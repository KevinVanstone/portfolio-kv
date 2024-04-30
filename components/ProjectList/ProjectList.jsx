import React from "react";
import styles from "./ProjectList.module.scss";
import Project from "../Project/Project";
import myProjects from "../../assets/data/projects.json";

const ProjectList = () => {
  return (
    <>
      <div className={styles[`projectList`]}>
        {myProjects &&
          myProjects.map((project) => {
            return <Project data={project} key={`project-${project.name}`} />;
          })}
      </div>
    </>
  );
};

export default ProjectList;
