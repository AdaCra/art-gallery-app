import styled from "styled-components";
import ContactBar from "../../components/ContactBar/ContactBar";

export default function About() {
  return (
    <>
      <TextWrapper>
        <h2>About this project</h2>
        <AboutTextSection>
          <AboutProjectDiv>
            <h3>Project Goal</h3>
            <p>
              To explore building an app from scratch using NextJS, and
              accessing and filtering API retrieved data using Vercels API.
              Styling was performed using Style Components.
            </p>
          </AboutProjectDiv>
          <br />
          <AboutProjectDiv>
            <h3>Project Requirements</h3>
            <AboutTextUL>
              <AboutListItem>
                Access Vercels art API and manipulate the fetched data.
              </AboutListItem>
              <AboutListItem>
                Produce a gallery that exhibits work in multiple views. Art
                should be displayed:
                <AboutTextOL>
                  <AboutListItem>
                    In a grid formation showing work title and artist name.
                  </AboutListItem>
                  <AboutListItem>
                    As a single tile displaying only the piece title and the
                    artist name. The view had to have a next and previous image
                    option.
                  </AboutListItem>
                  <AboutListItem>
                    With a filter showing only the users favourited items.
                  </AboutListItem>
                  <AboutListItem>
                    In a detail page showing all relevant data regarding an
                    individual piece of art.
                  </AboutListItem>
                </AboutTextOL>
              </AboutListItem>
              <AboutListItem>
                Allow for saving and loading of relevant data within local
                storage in order for users to add specific pieces to a
                favourites list and save personal comments and ideas for
                specific pieces.
              </AboutListItem>
            </AboutTextUL>
          </AboutProjectDiv>
          <br />
          <AboutProjectDiv>
            <h3>Project Results</h3>
            <p>
              Given that this was my first ever NextJS App, the project came out
              pretty good. There was a very steep learning curve and a 4 day
              deadline which resulted in the entire framework being produced
              within 4 days, with minimal styling. After a further few days of
              styling and modications &#40;and a lot of code cleaning&#41;, I am
              proud of my experience and work progress with this project.
            </p>
          </AboutProjectDiv>
          <br />
        </AboutTextSection>
      </TextWrapper>
      <ContactBar />
    </>
  );
}

const TextWrapper = styled.div`
  padding: 0 20%;
`;

const AboutTextSection = styled.section`
  padding: 0;

  display: flex;
  height: 70vh;
  flex-direction: column;
  justify-content: space-evenly;
`;

const AboutProjectDiv = styled.div``;

const AboutTextOL = styled.ol`
  padding: 5px 5% 0;
  list-style: "-   ";
`;
const AboutTextUL = styled.ul`
  padding: 0 5%;
  list-style: "»   ";
`;

const AboutListItem = styled.li`
  padding: 5px;
`;
