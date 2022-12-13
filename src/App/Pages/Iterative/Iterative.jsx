import styled from "styled-components";
import { SidebarLayout } from "../../shared/SidebarLayout/SidebarLayout";
import { StyledA } from "../../shared/StyledA";

// Image
import IterativeImg from "../../../assets/iterative.png";

const title = "Iterative App Design";
const description =
  "How can we utilize iteration to create the best possible designs?";
const beginning = { label: "top", id: "top" };
const sections = [
  {
    label: "introduction",
    id: "introduction",
    element: (
      <>
        <h2>Introduction</h2>
        <p>
          Designing intuitive and effective UIs requires a thorough process that
          includes research, user testing, receiving feedback, and revising
          designs. In this project, our group of four explored how we could
          create an interface for KIWI, a Y Combinator-accelerated startup that
          allows mobile users to send and receive music to each other's home
          screens. We did not look at the current interface design until our
          version had been completed.
        </p>
        <br />
        Our process was as follows:
        <ul>
          <li>Initial sketches, prototypes, and wireframe</li>
          <li>Creation of high fidelity, interactive prototypes</li>
          <li>Revision of prototypes based on peer feedback</li>
          <li>Submission of the final design to user testing</li>
        </ul>
      </>
    ),
  },
  {
    label: "sketching and wireframing",
    id: "sketching",
    element: (
      <>
        <h2>Sketching and Wireframing</h2>
        <p>
          The premise of this startup is pretty simple. Kiwi is a mobile app
          that allows users to send songs to their friends' homescreens. We
          designed our prototype for a mobile app that has a homescreen widget.
          Users of all ages will be impacted by our interface, particularly
          users who are interested in music and the social aspect of sharing
          music with friends. We anticipate users will want an easy interface
          that makes the process of sending, receiving, and exploring music
          simple and fun.{" "}
        </p>
        <p>
          To get ideas flowing, our group created four total initial designs,
          each consisting of three screens of our choice. This gave us twelve
          total initial sketches for us to work with. Our final wireframe mixed
          and matched features and screens of the original sketches to give us 8
          total screens.
        </p>
      </>
    ),
  },
  {
    label: "hifi mockup and critique",
    id: "hifi",
    element: (
      <>
        <h2>High-fidelity mockup</h2>
        <p>
          We translated our wireframe into a high-fidelity prototype using
          Figma. We incorporated our style design guidelines, and adhered to a
          minimalist color scheme with a few pops of color.
        </p>
        <br></br>

        <h3>Critique of Hifi Mockup</h3>
        <p>
          During our critiquing session, we received the following feedback:
        </p>
        <p>
          <strong> Font size →</strong> the font size in our initial hi-fi prototype was
          too small and difficult to read. It would be helpful to make use of
          various font weights to emphasize the intention and hierarchy of each
          section (particularly in the sending and viewing of songs).
          Furthermore, for text of \similar importance (headers vs subheaders vs
          descriptions), we could adjust the font size to be uniform throughout.
        </p>
        <p>
          <strong>Navigation →</strong>the navigation buttons at the bottom of the
          screen appeared too big and bulky. We could make it more sleek and
          modern-looking.
        </p>
        <p>
          <strong>Icon accessibility → </strong>we used an airplane icon to symbolize
          sending Kiwis, but this caused some confusion, as airplanes are not
          universally known to indicate sending messages. We could add
          descriptions to each of the navigation icons to limit ambiguity.
        </p>
        <p>
          <strong>Affordances → </strong>initially, pressing the “settings” icon on the
          Profile page allowed the settings to slide in from the right. Then,
          when pressing the back button, the original Profile page slid from the
          right again. We could change this so that pressing the settings icon
          and back button would allow the Settings page to slide in and out,
          imitating the action of swiping in a page and then swiping it away.
        </p>
        <p>
          <strong>App intention → </strong>it was important for us to consider the
          audience of the product that we were designing. Who is Kiwi intended
          for, and what is the functionality of it? We aimed to make the app
          appear like a social media platform for songs.
        </p>
      </>
    ),
  },
  {
    label: 'final results',
    id: 'final',
    element: (
        <>
        <h2>Final Results</h2>
        <p>
            After iterating over the design multiple times and going through the typical process
            of lofi to hifi UI design, we were able to create a version of Kiwi that resembled the
            actual app in functionality but with a completely different interface.
        </p>
        <p>
            <StyledA link="https://www.figma.com/proto/rMDKfJ6h2rF3s6s31KWtwR/Kiwi-Wireframes-and-Mockups?node-id=0%3A1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1">
                You can try the prototype by clicking here!
            </StyledA>
        </p>
        </>
    )
  }
];

export const Iterative = () => {
  return (
    <SidebarLayout
      title={title}
      description={description}
      beginning={beginning}
      sections={sections}
      italicize={true}
      imageLink={{
        image: IterativeImg,
        link: "https://www.figma.com/proto/rMDKfJ6h2rF3s6s31KWtwR/Kiwi-Wireframes-and-Mockups?node-id=0%3A1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
      }}
    />
  );
};
