import { Link } from "react-router-dom";
import styled from "styled-components";

const BORDER_RADIUS = "30px";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const StyledProjectCard = styled.div`
  max-width: 30vw;
`;

const CardImage = styled.img`
  &:hover {
    padding: 1rem 1rem 0 1rem;
  }
  padding: 1.5rem 1.5rem 0 1.5rem;
  transition: padding 1s;

  background-color: ${(props) => props.theme.color4};
  border-radius: ${BORDER_RADIUS} ${BORDER_RADIUS} 0 0;
`;

const CardText = styled.div`
  background-color: ${(props) => props.theme.color4};
  color: ${(props) => props.theme.color1};
  border-radius: 0 0 ${BORDER_RADIUS} ${BORDER_RADIUS};
  padding: 1rem 1.5rem 1rem 1.5rem;
  font-size: 0.8rem;
`;

export const ProjectCard = ({ name, description, image, path }) => {
  return (
    <Link onClick={scrollToTop} to={path}>
      <StyledProjectCard>
        <CardImage src={image} />
        <CardText>
          <strong>{name}</strong>
          <p>{description}</p>
        </CardText>
      </StyledProjectCard>
    </Link>
  );
};
