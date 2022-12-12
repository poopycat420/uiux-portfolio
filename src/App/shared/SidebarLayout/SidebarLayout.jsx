import styled from "styled-components";
import { PageSection } from "./PageSection";
import { Sidebar } from "./Sidebar";

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  position: relative;
`;

const StyledMain = styled.main`
  background-color: ${(props) => props.theme.color2};
  color: ${(props) => props.theme.color4};
`;

const StyledLanding = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color1};
  color: ${(props) => props.theme.color4};
  padding: 10%;
`;

// sections => [{ label: string, id: string, element, }]
// beginning => { label: string, id: string }
export const SidebarLayout = ({ title, description, sections, beginning }) => {
  return (
    <LayoutGrid>
      <Sidebar
        navLinks={[beginning].concat(
          sections.map((section) => ({
            label: section.label,
            id: section.id,
          }))
        )}
      />
      <StyledMain>
        <StyledLanding id={beginning.id}>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </StyledLanding>
        {sections.map((section, index) => {
          console.log(section);
          return <PageSection key={index} id={section.id}>
            {section.element}
          </PageSection>
        }
        )}
      </StyledMain>
    </LayoutGrid>
  );
};
