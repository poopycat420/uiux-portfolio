import styled from "styled-components";

const StyledAbout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color1};
  color: ${(props) => props.theme.color4};
  padding: 10%;
`;

export const About = ({ id }) => {
  return (
    <StyledAbout id={id}>
      <div>
        <h1>Hi World, I'm PoopyCat</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, modi.
        Fugiat eos assumenda quos commodi quae quasi, culpa dolorem tempore
        similique magnam nisi dolores est voluptates doloremque omnis, sed
        laboriosam.</p>
      </div>
    </StyledAbout>
  );
};
