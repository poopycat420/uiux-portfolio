import styled from "styled-components";
import { SidebarLayout } from "../../shared/SidebarLayout/SidebarLayout";

// Images
import PrinterDiagram from "./images/diagram.png";
import Persona1 from "./images/persona-1.png";
import Persona2 from "./images/persona-2.png";
import Storyboard from "./images/storyboard.png";

const title = "Studying User Stories through Printers";
const description = `Empathizing with users is a crucial part of the design process, even
for everyday interfaces like washing machines and microwaves. In
Brown University's Sciences Library (better known as the SciLi), the
printers available can be used as an example of a user-facing
interface from which we can conduct research as well as create
personas and storyboards. The following page walks through an
exercise in understanding users and their relationships to the
printers.`;
const beginning = { label: "intro", id: "intro" };

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 1rem;
`;

const sections = [
  {
    label: "a closer look",
    id: "closer-look",
    element: (
      <>
        <h2>A Closer Look</h2>
        <p>
          The below image illustrates the interactive features of a typical
          printer in the SciLi. Users swipe their cards, confirm their print
          selection on the computer, then wait for the paper to be dispensed
          from the tray.
        </p>
        <ImageContainer>
          <div>
            <img id="diagram-img" src={PrinterDiagram} />
          </div>
        </ImageContainer>
      </>
    ),
  },
  {
    label: "user research",
    id: "user-research",
    element: (
      <>
        <h2>User Research</h2>
        <p>
          In order to get a better understanding of what the average user's
          interaction with these printers is, short interviews were conducted of
          people who had just printed something.
        </p>

        <h3>Key Observations</h3>
        <p>
          These observations were made as users were interfacing with the
          printer.
        </p>
        <ul>
          <li>
            Swiping the student ID seemed like a very familiar part of the
            process
          </li>
          <li>
            Printers sometimes make unexpected noises or encounter small
            mechanical errors, which can catch students off-guard
          </li>
          <li>
            Students printing a large amount often wait directly at the tray for
            the prints to finish
          </li>
          <li>
            When at the actual printer, students seem to be very familiar with
            the steps to print and the process of getting it started seems
            fairly fluid
          </li>
          <li>
            Students sometimes check the first few prints to come out on the
            tray to see if they are formatted correctly (e.g. if they are double
            sided or not)
          </li>
        </ul>

        <h3>Questions</h3>
        <p>Each interviewee was asked the following:</p>
        <ol>
          <li>What are you printing today?</li>
          <li>Did you have any problems attempting to get things printed?</li>
          <li>
            What do you feel is your biggest pain point when using the printers
            here?
          </li>
          <li>What parts of the printing process felt most fluid?</li>
          <li>
            Do you feel like your experience using the printer were met? Was it
            more difficult, less difficult, or as difficult as you expected?
          </li>
        </ol>

        <h3>Summary of Responses</h3>
        <p>User responses from the interviews are summarized below.</p>
        <ul>
          <li>
            Most of the "pain" of using the printers doesn't occur at the actual
            printer, but rather when they have to set it up online
          </li>
          <li>
            Using the physical printer is fairly fluid since the steps there are
            fairly streamlined (swiping and then using the computer to confirm
            which selections to print)
          </li>
          <li>
            Users have to make modifications to the contents of each print
            selection on their laptop since you can't change them at the
            computer near the printer
          </li>
          <li>
            It feels as though some customization has been sacrificed for the
            sake of user-friendliness, which in turn makes things less
            user-friendly
            <ul>
              <li>
                An example is not being able to easily choose whether prints
                should be double-sided
              </li>
            </ul>
          </li>
          <li>
            Unclear which printers print in color and which do not when making
            selections in MyPrint, which is what most students use
          </li>
        </ul>
      </>
    ),
  },
  {
    label: "personas",
    id: "personas",
    element: (
      <>
        <h2>Personas and Empathy Maps</h2>
        <div id="personas-container">
          <p>
            Based on the research that was conducted, personas can be created
            that represent different kinds of users. Below we have Stressed Sam
            and Energetic Emily represented using empathy maps that show how
            they think, feel, say, and do.
          </p>
          <div class="persona-container">
            <ImageContainer>
              <img class="persona-img" src={Persona1} />
            </ImageContainer>
            <p>
              Stressed Sam is a senior at Brown University and also a TA for an
              English course. She is not very tech-savvy. The professor of the
              course she's helping teach has asked her to print out some
              readings for the section that she's leading, but she's running low
              on time to get them printed.
            </p>
            <p>
              The persona of Sam is largely based on students who don't
              interface with technology in an extensive way and have less
              experience navigating the design patterns that other students may
              be more familiar with. Printing for people like Sam often isn't
              done in advance, and when it needs to be done it is often under
              time pressure. Small errors can be a headache for such people who
              didn't allot the time for them.
            </p>
          </div>
          <div class="persona-container">
            <ImageContainer>
              <img class="persona-img" src={Persona2} />
            </ImageContainer>
            <p>
              Energetic Emily is a freshman at Brown University. She is very
              interested in Computer Science and has already taken a couple of
              Computer Science courses. One of the clubs she's in has tasked her
              with printing out fliers for an upcoming event. She's very
              comfortable with technology, but has her frustrations with the
              printing process.
            </p>
            <p>
              Emily is based on the experiences of users who were pretty
              familiar with how MyPrint and other Brown printing interfaces
              worked, but annoyed at the repeated workarounds they had to use.
              One such workaround (as demonstrated in the storyboard below) was
              uploading the same document multiple times in order to bypass the
              10-copy limit.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    label: "storyboard",
    id: "storyboard",
    element: (
      <>
        <h2>Storyboard</h2>
        <p>
          Using the persona of Energetic Emily, we can walk through what the
          process might look like of a typical user attempting to print
          something. The below storyboard illustrates what can be expected based
          on the user research.
        </p>
        <ImageContainer>
          <img src={Storyboard} />
        </ImageContainer>
      </>
    ),
  },
  {
    label: "in conclusion",
    id: "in-conclusion",
    element: (
      <>
        <h2>In Conclusion,</h2>
        <p>
          By engaging with users in the SciLi, we've been able to identify some
          of the key problems with the current printing system instituted by
          Brown. The process of swiping and collecting papers is fairly fluid,
          but the options available at the level of uploading documents and
          creating print selections are fairly limited. Since the majority of
          students interviewed rely on Web Print, there is no easy way for them
          to make modifications to the document that is to be printed (for
          instance, if they wanted to increase the margins or slug of the
          document). The lack of customizability at this point seems to be a
          major pain point, especially when students use real money to print
          large quantities only to find that the formatting turned out
          incorrectly.
        </p>
      </>
    ),
  },
];

export const Personas = () => {
  return (
    <SidebarLayout
      title={title}
      description={description}
      beginning={beginning}
      sections={sections}
    />
  );
};
