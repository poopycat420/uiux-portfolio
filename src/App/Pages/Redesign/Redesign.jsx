import styled from "styled-components";
import { ImageContainer } from "../../shared/ImageContainers/ImageContainer";
import { SidebarLayout } from "../../shared/SidebarLayout/SidebarLayout";

// Images
import OriginalSite from "./images/original-site.png";
import FinalSite from "./images/final-site.png";
import VisualStyleGuide from "./images/visual-style-guide.png";
import HifiDesktop from "./images/hifi-desktop.png";
import HifiTablet from "./images/hifi-tablet.png";
import HifiPhone from "./images/hifi-phone.png";
import LofiDesktop from "./images/lofi-desktop.png";
import LofiTablet from "./images/lofi-tablet.png";
import LofiPhone from "./images/lofi-phone.png";

const PrototypeContainer = styled.div`
  max-width: 60vw;
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  object-fit: scale-down;
`;

const PrototypeImg = styled.img`
  max-height: 80vh;
`;

const title = "Giving Williamsburg Urgent Care a Makeover";
const description = "How can redesigning sites restore power back to users?";
const beginning = { label: "top", id: "top" };

const sections = [
  {
    label: "motivation",
    id: "motivation",
    element: (
      <>
        <h1>Motivation</h1>
        <p>
          Have you ever looked up a business and been surprised by how hard it
          is to use their website? This is exactly what happened when I looked
          up a local urgent care center in Williamsburg. I'll be going through
          the process of me creating a new design for the page, including the
          issues I identified, the prototypes I created, and the final design
          for a new homepage I coded in pure HTML/CSS.
        </p>
      </>
    ),
  },
  {
    label: "the original site",
    id: "original-site",
    element: (
      <>
        <h2>The Original Site</h2>
        <a href="https://www.williamsburgurgentcare.com/" target="_blank">
          <ImageContainer image={OriginalSite} alt="The original site" />
        </a>
        <p>
          This is what the original site looks like. I chose this site because
          most people browsing this would be able to tell that there are a fair
          amount of design issues even with no background in UI/UX. The original
          site can be accessed by clicking the image.
        </p>
        <h2>Problems with the Original Site</h2>
        <div>
          <p>
            The following <strong>usability problems</strong> stood out after
            some skimming through the home page
          </p>
          <ul>
            <li>
              Reaching anything took <strong>too much scrolling</strong>. This
              is because there were a lot of filler photos and large text that
              took up a significant amount of vertical space
            </li>
            <li>
              The <strong>layout is not intuitive</strong>. Recurrent visitors
              have to scroll through the page to remember where things are since
              the page doesn't follow a consistent ordering. For instance, the
              awards and client testimonials are in different places on the site
              despite the fact they serve the same purpose (of establishing
              credibility)
            </li>
            <li>
              <strong>
                Users cannot see what they can do using the website at a glance
              </strong>
              . It seems that some key functions of the site are to allow
              patients to book appointments, book COVID tests, and find out more
              about the staff/facility. However, it's difficult to find out
              about the latter two functions without some scrolling.
            </li>
          </ul>

          <br />

          <p>
            Going a step further, I put the website into{" "}
            <a href="https://wave.webaim.org/">WAVE</a> (web accessibility
            evaluation tool) to identify <strong>accessibility problems</strong>
            :
          </p>
          <ul>
            <li>
              <strong>
                Low contrast between the white text and the light-blue
                background
              </strong>
              makes the site difficult to read for vision-impaired users.
            </li>
            <li>
              <strong>Alt text for images</strong> on the site were fairly
              generic and not very descriptive
            </li>
            <li>
              <strong>Heading levels are skipped</strong>, which makes the site
              less parsable for screen readers
            </li>
          </ul>
          <p>
            I'd agree with WAVE in that these are significant issues present
            across the page, especially with regards to the light text on light
            background. WAVE also noted that some headings tags were missing for
            the contact information, which is a fairly minor issue.
          </p>
        </div>
      </>
    ),
  },
  {
    label: "low-fidelity wireframing",
    id: "lofi-wireframing",
    element: (
      <>
        <h2>Low-Fidelity Wireframing</h2>
        <p>
          Creating the new design starts with low-fidelity wireframing. I wanted
          the new page to respond well to changes in screen size, so designs
          were made for phones, tablets, and desktops.
        </p>

        <PrototypeContainer>
          <PrototypeImg src={LofiDesktop} />
          <PrototypeImg src={LofiPhone} />
          <PrototypeImg src={LofiTablet} />
        </PrototypeContainer>

        <p>
          The lofi prototypes had the following features to resolve some of the
          usability issues from earlier:
        </p>
        <ol>
          <li>
            The <strong>navigation bar</strong> was adapted to stick to the top
            of the screen to
            <strong>prevent users from having to scroll</strong> to the top of
            the page each time they wanted to change pages.
          </li>
          <li>
            Rather than having a multitude of large images spread throughout, I
            implemented a <strong>welcome banner</strong> that would
            <strong>
              convey high standards of professionalism and trust at a glance
            </strong>
            through an image and a new slogan - "Get the help you need from
            providers you can trust".
          </li>
          <li>
            <strong>Navigation buttons</strong> were moved to the bottom of the
            banner so that experienced users can
            <strong>navigate quickly</strong> after arriving
            <strong>without having to scroll</strong> and new users could see
            what the website was primarily for.
          </li>
          <li>
            The
            <strong>
              map, address, and contact information were moved up the page
            </strong>
            since users may be coming to the site to see where they are or how
            to contact them.
          </li>
          <li>
            <strong>
              Awards and testimonials were placed together at the end of the
              page
            </strong>
            since users don't need to refer to it often but can get an idea of
            WUG's credibility if they haven't visited the site before.
          </li>
        </ol>
      </>
    ),
  },
  {
    label: "hi-fi prototyping",
    id: "hifi-prototyping",
    element: (
      <>
        <h2>Visual Style Guide and HiFi Prototyping</h2>
        <p>
          I wanted to ensure a consistent style across the website, so I created
          a visual design style guide to list out the various components and how
          they would look when interacted with. In the process, I also designed
          a new logo for the company that would work well with the color palette
          I picked out.
        </p>
        <ImageContainer image={VisualStyleGuide} />

        <h2>High-Fidelity Prototyping</h2>
        <p>
          Now I could create high-fidelity prototypes to show what the site
          would actually look like:
        </p>
        <PrototypeContainer>
          <PrototypeImg src={HifiDesktop} />
          <PrototypeImg src={HifiPhone} />
          <PrototypeImg src={HifiTablet} />
        </PrototypeContainer>
        <p>
          The following are some important layout notes for the actual styling
          of the site (corresponding to the numbers marked)
        </p>
        <ol>
          <li>
            The navbar at the top should have the
            <code> position: fixed</code> attribute so that it will stick with
            the user as they scroll
          </li>
          <li>
            To overlay a gradient over the image, the
            <code> ::after</code> selector can be used and a
            <code> linear-gradient</code> applied to the styling of the image's
            <code> after properties.</code>
            <code> position: absolute</code> should be set on the text and it
            should be bottom aligned (<code> bottom: 0</code>) to make it appear
            in the correct place without affecting the distribution of other
            elements.
          </li>
          <li>
            The page links will be aligned using flexbox, which will wrap when
            the site is viewed on a small screen.
          </li>
          <li>
            The map and contact information will be aligned with flexbox and
            similarly wrap
          </li>
          <li>
            Awards will be arranged by flexbox with content justified using the
            <code> space-around</code> property
          </li>
          <li>Quotes will be arranged by flexbox and will wrap</li>
          <li>
            The footer will be arranged using flexbox. However, the right
            container will have text right-aligned. In the actual coded site,
            the footer flexbox wraps and left-aligns on small devices.
          </li>
        </ol>
      </>
    ),
  },
  {
    label: "the final redesign",
    id: "redesign-final",
    element: (
      <>
        <h2>Bringing the Redesign to Life</h2>
        <p>
          After all the work of wireframing and prototyping, I created the final
          site using raw HTML and CSS. The site should be usable and responsive
          to common screen sizes, so feel free to try it out!
        </p>
        <p class="text-center">
          You can click the screenshot below to visit the site!
        </p>

        <a
          href="https://poopycat420.github.io/redesigned-page/"
          target="_blank"
        >
          <ImageContainer image={FinalSite} />
        </a>
      </>
    ),
  },
];

export const Redesign = () => {
  return (
    <SidebarLayout
      title={title}
      description={description}
      beginning={beginning}
      sections={sections}
    />
  );
};
