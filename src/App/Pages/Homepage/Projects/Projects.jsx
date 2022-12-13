import styled from "styled-components";
import { ProjectCard } from "./ProjectCard/ProjectCard";

// Images
import DevelopmentImg from "../../../../assets/calisthenics-pal.png";
import PersonasImg from "../../../../assets/personas.png";
import RedesignImg from "../../../../assets/responsive-redesign.png";

const StyledProjects = styled.div`
  /* min-height: 100vh; */
  /* padding: 10%; */
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
    link: "https://poopycat420.github.io/personas-storyboards/",
    image: PersonasImg,
    path: '/personas',
  },
  {
    name: "Williamsburg Urgent Care Redesign",
    description: "",
    link: "https://poopycat420.github.io/responsive-redesign/",
    image: RedesignImg,
    path: '/redesign',
  },
  {
    name: "Calisthenics Pal",
    description: "",
    link: "https://poopycat420.github.io/calisthenics-pal/",
    image: DevelopmentImg,
    path: '/calisthenics-pal',
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
