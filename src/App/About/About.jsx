import styled from "styled-components";

// import Avatar from "../../assets/avatar.png";

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
        <p>
          I'm a frontend developer with experience in UI/UX design and a current
          senior at Brown University. I love creating experiences that impress
          users and keep them engaged while also providing them with tangible
          benefits. You can see more about my work below or you can contact me
          via email, LinkedIn, or check my Github.
        </p>
      </div>
    </StyledAbout>
  );
};
