import styled from "styled-components";

const SIDEBAR_WIDTH = 20;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: ${`${SIDEBAR_WIDTH}%`} 80%;
  position: relative;
`;

const StyledSidebar = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const SidebarInnerContainer = styled.div`
  background-color: ${(props) => props.theme.color4};
  color: ${(props) => props.theme.color1};
  height: 100vh;
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavList = styled.nav`
  width: 100%;
  text-align: center;
`;

const NavLink = styled.div`
  &:hover {
    background-color: ${props => props.theme.color1};
    color: ${props => props.theme.color4};
  }

  padding: 20px;
  transition: background-color 0.75s, color 0.75s;
`

// navLinks => [{ label: string, id: string }]
export const SidebarLayout = ({ navLinks, children }) => {
  return (
    <LayoutGrid>
      <StyledSidebar>
        <SidebarInnerContainer>
          <NavList>
            {navLinks.map(({ label, id }) => (
              <a href={"#" + id} key={id}>
                <NavLink>{label}</NavLink>
              </a>
            ))}
          </NavList>
        </SidebarInnerContainer>
      </StyledSidebar>
      {children}
    </LayoutGrid>
  );
};
