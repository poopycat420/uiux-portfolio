import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 1rem;
`;

export const ImageContainer = ({ image, alt }) => {
  return (
    <StyledContainer>
      <img src={image} alt={alt} />
    </StyledContainer>
  );
};
