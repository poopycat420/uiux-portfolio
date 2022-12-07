import "./App.css";
import { SidebarLayout } from "./SidebarLayout/SidebarLayout";
import { ThemeProvider } from "styled-components";
import { About } from "./About/About";
import { Projects } from "./Projects/Projects";
import styled from 'styled-components';

const theme = {
  color1: "#F9F7F7",
  color2: "#DBE2EF",
  color3: "#3F72AF",
  color4: "#112D4E",
};

const StyledMain = styled.main`
  background-color: ${theme.color1};
  color: ${theme.color4};
`

function App() {
  const navLinks = [
    { label: "about", id: "About" },
    { label: "projects", id: "Projects" },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <SidebarLayout navLinks={navLinks}>
          <StyledMain>
            <About id="About" />
            <Projects id="Projects" />
          </StyledMain>
        </SidebarLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
