import styled from "styled-components";

const StyledProjectCard = styled.div`
    border-radius: 20px;
`

const CardText = styled.div`
    background-color: ${props => props.theme.color1};
`

export const ProjectCard = ({ name }) => {
  return (
    <StyledProjectCard>
      <img src="" />
      <CardText>
        <strong>{name}</strong>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo a
          ea distinctio fuga, nisi, non quam soluta nesciunt quia enim
          accusantium aliquid numquam voluptas odio officiis! Corporis hic totam
          officiis.
        </p>
      </CardText>
    </StyledProjectCard>
  );
};
