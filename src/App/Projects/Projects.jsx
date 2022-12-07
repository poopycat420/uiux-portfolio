import styled from "styled-components";
import { ProjectCard } from "./ProjectCard/ProjectCard";

const StyledProjects = styled.div`
  min-height: 100vh;
  padding: 10%;
  background-color: ${(props) => props.theme.color2};
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 15px;
`;

const projects = [
  { name: "Personas & Storyboarding", description: "", link: "" },
  { name: "Williamsburg Urgent Care Redesign", description: "", link: "" },
  { name: "Designing an Interface for A Startup", description: "", link: "" },
];

export const Projects = ({ id }) => {
  return (
    <StyledProjects id={id}>
      <ProjectsContainer>
        {projects.map(({ name, description, link }) => (
          <ProjectCard name={name} />
        ))}
      </ProjectsContainer>
    </StyledProjects>
  );
};
