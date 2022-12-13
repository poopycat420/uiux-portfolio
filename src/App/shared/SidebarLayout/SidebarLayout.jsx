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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color1};
  color: ${(props) => props.theme.color4};
  padding: 10% 5vw;
`;

const MainImage = styled.img`
  height: 50vh;
  border-radius: 20px;
  max-width: 100%;
  margin: 2rem;

  &:hover {
    height: 55vh;
  }

  transition: height 1s;
`;

// sections => [{ label: string, id: string, element, }]
// beginning => { label: string, id: string }
export const SidebarLayout = ({
  title,
  description,
  sections,
  beginning,
  italicize,
  imageLink,
}) => {
  return (
    <LayoutGrid id="top">
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
          {imageLink && (
            <a href={imageLink.link} target="_blank">
              <MainImage src={imageLink.image} />
            </a>
          )}
          <div>
            <h1>{title}</h1>
            {italicize ? (
              <p style={{ fontStyle: "italic" }}>{description}</p>
            ) : (
              <p>{description}</p>
            )}
          </div>
        </StyledLanding>
        {sections.map((section, index) => (
          <PageSection key={index} id={section.id}>
            {section.element}
          </PageSection>
        ))}
      </StyledMain>
    </LayoutGrid>
  );
};
