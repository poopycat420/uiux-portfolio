import styled from "styled-components";
import { SidebarLayout } from "../../shared/SidebarLayout/SidebarLayout";
import { StyledA } from "../../shared/StyledA";

const title = "Calisthenics Pal";
const description =
  "Can I create an app that calisthenics practicioners will actually want to use?";
const beginning = { label: "intro", id: "intro" };

const sections = [
  {
    label: "motivations",
    id: "motivations",
    element: (
      <>
        <h2>Motivations behind the project</h2>
        <p>
          As someone who has spent over five years doing bodyweight workouts in
          the pursuit of elite strength moves, I've seen many attempts to
          streamline the process. The best app I've seen to such an end (though
          not specifically designed for calisthenics) is Strong. As an exercise
          in creating a similarly usable interface, I designed Calisthenics Pal
          and coded it in React as an app that calisthenics practicioners both
          experienced and advanced could get some use out of.
        </p>
        <p>
          I decided a good way to start was to codify Steven Low's
          categorization of various calisthenics exercises as seen in his book
          Overcoming Gravity, Second Edition (or{" "}
          <StyledA
            link={
              "https://docs.google.com/spreadsheets/u/1/d/19l4tVfdTJLheLMwZBYqcw1oeEBPRh8mxngqrCz2YnVg/edit"
            }
            label={"this spreadsheet"}
          />
          ). I chose 12 exercises from the sheet and noted the key muscle group
          used in the exercise (the 'focus') as well as the difficulty.
        </p>
      </>
    ),
  },
  {
    label: "usability considerations",
    id: "usability",
    element: (
      <>
        <h2>Designing the interface for usability</h2>
        <p>
          In order to create the interface, I relied on general usability
          principles for UI/UX:
        </p>
        <p>
          Affordance is present through the use of common-sense icons that
          provide immediate visual feedback when clicked (i.e. when you add an
          exercise, it pops up on the left sidebar). When someone clicks the
          minus button on an exercise card either in the sidebar or in the main
          area, the exercise is removed from the selection.
        </p>
        <p>
          Consistency is implemented across the website. Exercises are held in
          cards both in the selection area and in the sidebar. There is a blue
          color scheme throughout. For the filters, there are colored Chips from
          Material UI that correspond to the categorizations found in the
          exercise cards. For instance, difficulty is represented in purple in
          the filter control, in the actual cards, and in the difficulty summary
          at the bottom of the sidebar.
        </p>
        <p>
          Findability is considered through the use of filtering and sorting
          controls at the top of the exercise selection area. This helps users
          quickly sort through the list of exercises to find ones that fit what
          they are looking for. Given more time, I could also have added a
          search bar to improve findability.
        </p>
      </>
    ),
  },
  {
    label: "the nitty gritty",
    id: "nitty-gritty",
    element: (
      <>
        <h2>The Nitty Gritty of the code</h2>
        <p style={{ fontStyle: "italic" }}>
          Note: The rest of this writeup goes in-depth into the code structure.
          If you are not interested, turn back now.
        </p>
        <p>
          There are two primary sections in the App component, the Header and
          the Main sections. The Header just contains the name of the app. The
          Main section is where all user interaction occurs and is split into a
          Sidebar component on the left and an ExerciseSelection component on
          the right. The Main component controls the movement of selected
          exercises into the sidebar by passing down functions for adding and
          removing selections into Sidebar and ExerciseSelection. Main holds the
          array of currently selected exercises in a state. When a user selects
          an exercise in ExerciseSelection, that (semi-)global state is then
          updated via the addExercise function available in the component. The
          exercise is added to the Sidebar as a SidebarCard, since the array of
          selected exercises is passed down from Main to the Sidebar component.
          In ExerciseSelection, the icon for an exercise changes based on
          whether it is included in the current selection state. These exercises
          are represented by cards with images via the ExerciseCard component.
        </p>
        <p>
          From ExerciseSelection, users can sort and filter the view to find the
          exercises they want to add to their selection. The focus (i.e. what
          the exercise's target area is) and difficulty filters each have their
          own state - an array that contains what categories are being shown in
          the view. For difficulty, for instance, the state starts as
          ['Beginner', 'Intermediate', 'Advanced'] until the user deselects one
          of those categories. For instance, if they deselect 'Intermediate' and
          'Advanced', the state then becomes ['Beginner'] and only beginner
          exercises are shown in the view. For sorts, the state is an array of
          the currently applied sorts. If both sorts are applied, the state
          would be ['Alphabetically', 'By Difficulty'].
        </p>
        <p>
          Original data for the exercises is loaded in ExerciseSelection, and a
          state is held in the component that represents the data after sorts
          and filters are applied. The actual application of the sorts and
          filters occurs in a useEffect hook that updates when any changes occur
          to the states of the sorts and filters.
        </p>
      </>
    ),
  },
];

export const Development = () => {
  return (
    <SidebarLayout
      title={title}
      description={description}
      beginning={beginning}
      sections={sections}
    />
  );
};
