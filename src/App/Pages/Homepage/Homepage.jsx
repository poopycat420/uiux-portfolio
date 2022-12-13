import { SidebarLayout } from "../../shared/SidebarLayout/SidebarLayout";
import { StyledA } from "../../shared/StyledA";
import { Projects } from "./Projects/Projects";

const sections = [{ label: "projects", id: "projects", element: <Projects /> }];

const description = (
  <>
    I'm a frontend developer with experience in UI/UX design and a current
    senior at Brown University. I love creating experiences that impress and
    engage users while also providing them with tangible benefits. You can click
    on the cards in the projects section below to see some of my work, and click
    on my picture on the left to return here. If you'd like to contact me, feel
    free to reach out via email (<StyledA>poopycat420@aol.com</StyledA>) or{" "}
    <StyledA>LinkedIn</StyledA>.
  </>
);

export const Homepage = () => {
  return (
    <SidebarLayout
      title={"Hi World, I'm PoopyCat"}
      description={description}
      beginning={{ label: "about", id: "about" }}
      sections={sections}
      italicize={false}
    />
  );
};
