import styled from "styled-components";

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  position: relative;
`;

const StyledSidebar = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.color4};
  color: ${(props) => props.theme.color1};
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  position: fixed;
  padding: 0 20px;
  top: 35vh;
`;

// navLinks => [{ label: string, id: string }]
export const SidebarLayout = ({ navLinks, children }) => {
  return (
    <LayoutGrid>
      <StyledSidebar>
          <NavList>
            {navLinks.map(({ label, id }) => (
              <a href={"#" + id} key={id}>
                <li>{label}</li>
              </a>
            ))}
          </NavList>
      </StyledSidebar>
      {children}
    </LayoutGrid>
  );
};
