import React from "react";
import styles from "./ProjectList.module.scss";
import Project from "../Project/Project";

const myProjects = [
  {
    name: "Better Bettor Dashboard",
    tech: "NextJS",
    tech2: "React",
    tech3: "SASS",
    description:
      "The Better Bettor Dashboard is a web application that leverages the NHL Stats API to present bettors with the information they need to make LIVE betting decisions.",
    site: "",
    github: "",
  },
  {
    name: "Open Seer",
    tech: "React",
    tech2: "Express",
    tech3: "MongoDB",
    description:
      "Open Seer is a web application that enables users to save the JPG from an NFT into their account, without actually owning the NFT itself.",
    site: "",
    github: "https://github.com/KevinVanstone/OpenSeer",
  },
  {
    name: "Rogers Arena",
    tech: "WordPress",
    tech2: "PHP",
    tech3: "CSS",
    description:
      "I rebuilt the Rogers Arena website in the fall of 2022 in order to elevate the venue's web presence while providing a simple method for fans to find and secure the tickets they desire.",
    site: "https://rogersarena.com/",
    github: "",
  },
  {
    name: "Abbotsford Centre",
    tech: "WordPress",
    tech2: "PHP",
    tech3: "CSS",
    description:
      "I rebuilt the Abbotsford Centre website in the summer of 2023 in order to elevate the venue's web presence while providing a simple method for fans to find and secure the tickets they desire.",
    site: "https://www.abbotsfordcentre.ca/",
    github: "",
  },
];

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
