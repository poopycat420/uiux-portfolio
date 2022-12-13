import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: underline;
  color: ${(props) => props.theme.color4};

  &:hover {
    color: ${(props) => props.theme.color3};
  }
`;

export const StyledA = ({ link, label }) => {
  return (
    <StyledLink href={link} target="_blank">
      {label}
    </StyledLink>
  );
};
