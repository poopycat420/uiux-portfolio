import styled from "styled-components";
import { SidebarLayout } from "../../shared/SidebarLayout/SidebarLayout";
import { About } from "./About/About";
import { Projects } from "./Projects/Projects";

const StyledMain = styled.main`
  background-color: ${(props) => props.theme.color1};
  color: ${(props) => props.theme.color4};
`;

export const Homepage = () => {
  const navLinks = [
    { label: "about", id: "about" },
    { label: "projects", id: "projects" },
  ];

  return (
    <SidebarLayout navLinks={navLinks}>
      <StyledMain>
        <About id="about" />
        <Projects id="projects" />
      </StyledMain>
    </SidebarLayout>
  );
};
