import { SidebarLayout } from "../../shared/SidebarLayout/SidebarLayout";
import { Projects } from "./Projects/Projects";

const sections = [
  { label: "projects", id: "projects", element:  <Projects />},
];

const description = `I'm a frontend developer with experience in UI/UX design and a current senior at Brown University. I love creating experiences that impress users and keep them engaged while also providing them with tangible benefits. You can see more about my work below or you can contact me via email, LinkedIn, or check my Github.`;

export const Homepage = () => {
  return (
    <SidebarLayout
      title={"Hi World, I'm PoopyCat"}
      description={description}
      beginning={{label: 'about', id: 'about'}}
      sections={sections}
     />
  );
};
