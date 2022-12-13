import { Link } from "react-router-dom";
import styled from "styled-components";

import Avatar from '../../../assets/avatar.png';

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavList = styled.nav`
  width: 100%;
  text-align: center;
`;

const NavLink = styled.div`
  &:hover {
    background-color: ${(props) => props.theme.color2};
    color: ${(props) => props.theme.color4};
  }

  padding: 15px;
  transition: background-color 0.5s, color 0.5s;
`;

const AvatarImg = styled.img`
  height: 30vh;
  padding: 10%;
`

export const Sidebar = ({ navLinks }) => {
  return (
    <StyledSidebar>
      <SidebarInnerContainer>
        <Link to="/" onClick={() => window.scrollTo(0,0)}>
          <AvatarImg src={Avatar} />
        </Link>
        <NavList>
          {navLinks.map(({ label, id }) => (
            <a href={"#" + id} key={id}>
              <NavLink>{label}</NavLink>
            </a>
          ))}
        </NavList>
      </SidebarInnerContainer>
    </StyledSidebar>
  );
};
