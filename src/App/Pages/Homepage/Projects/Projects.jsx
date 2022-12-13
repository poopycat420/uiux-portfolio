import styled from "styled-components";
import { ProjectCard } from "./ProjectCard/ProjectCard";

// Images
import DevelopmentImg from "../../../../assets/calisthenics-pal.png";
import PersonasImg from "../../../../assets/personas.png";
import RedesignImg from "../../../../assets/responsive-redesign.png";
import IterativeImg from '../../../../assets/iterative.png';

const StyledProjects = styled.div`
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 15px;
`;

const projects = [
  {
    name: "UI/UX Principles in Everyday Objects",
    description: "",
    image: PersonasImg,
    path: '/personas',
  },
  {
    name: "Williamsburg Urgent Care Redesign",
    description: "",
    image: RedesignImg,
    path: '/redesign',
  },
  {
    name: "Calisthenics Pal",
    description: "",
    image: DevelopmentImg,
    path: '/calisthenics-pal',
  },
  {
    name: "Iterative App Design",
    description: "",
    image: IterativeImg,
    path: '/iterative',
  },
];
// https://github.com/sleepysloth123/iterative

export const Projects = ({ id }) => {
  return (
    <StyledProjects id={id}>
      <ProjectsContainer>
        {projects.map(({ name, description, link, image, path }) => (
          <ProjectCard
            key={name}
            name={name}
            description={description}
            link={link}
            image={image}
            path={path}
          />
        ))}
      </ProjectsContainer>
    </StyledProjects>
  );
};
