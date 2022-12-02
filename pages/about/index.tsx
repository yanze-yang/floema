import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import ContainerMax from "./ContainerMax";
import styled from "styled-components";
import RaiseText from "../../components/RaiseText";

export async function getStaticProps() {
  return {
    // Passed to the page component as props
    props: { post: {} },
  };
}

const Header = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    padding: 0 2rem;
    font-family: ${({ theme }) => theme.font.serif};
    font-size: clamp(5rem, 3.961rem + 4.748vw, 7rem);
    text-align: center;
    line-height: clamp(6rem, 3.182rem + 8.309vw, 8.5rem);
    width: 100%;

    @media screen and (min-width: 1024px) {
      line-height: 8.5rem;
      max-width: 1344px;
      padding: 0 3rem;
    }
  }
`;

const IntorPosition = styled.div<{
  alignPosition: "center" | "right" | "left";
}>`
  margin: 5rem 0;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    margin: 10rem 0;
    justify-content: ${(props) => props.alignPosition};
  }
`;

type IntroProps = {
  isLeftImg?: boolean;
  isBottomImg?: boolean;
  maxWidth: string;
};

const IntroWrapper = styled.div<IntroProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.isBottomImg ? "column" : "column-reverse"};
  align-items: center;
  gap: calc(1rem + 12vw);

  @media screen and (min-width: 1024px) {
    flex-direction: ${(props) => (props.isLeftImg ? "row-reverse" : "row")};
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: ${(props) => props.maxWidth};
    gap: unset;
  }
`;

const IntroContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 2rem;
  gap: min(3rem);

  span {
    font-size: 0.8rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 3rem;
  }
`;

const Description = styled.div`
  max-width: calc(23rem - 1vw);
  p {
    padding-bottom: 2rem;
  }
`;

const IntroImage = styled.div<{ padding?: boolean }>`
  max-width: 100%;
  padding: ${(props) => (props.padding ? "0 2rem" : "")};
`;

export default function AboutIndex() {
  return (
    <div style={{ backgroundColor: "#B2B8C3" }}>
      <ContainerMax>
        <Navbar />
        <picture>
          <img src="/CAROUSEL PHOTOS.png" />
        </picture>

        <Header>
          <h1>
            <RaiseText>
              Creating new dialogues between threads and metal
            </RaiseText>
          </h1>
        </Header>
        <IntorPosition alignPosition="center">
          <IntroWrapper maxWidth="79rem">
            <IntroContent>
              <span>ABOUT ME</span>
              <Description>
                <p>
                  Valentina’s work plays around the surprise of what is possible
                  to make with a simple and thin line: a thread.
                </p>
                <p>
                  Coming from a family with a strong feminine tailoring
                  tradition, she wanted to bring this passionate root into her
                  jewellery world, finding new ways of working with textiles.
                </p>
                <p>
                  She weaves freely thousands of meters of threads on a
                  hydrosoluble fabric, cutting or interlacing them one with the
                  other, to let unexpected connections appear.
                </p>
                <p>
                  Her approach is both experimental and traditional: she likes
                  to combine contemporary methods with ancient techniques, like
                  Filigree.
                </p>
                <p>
                  The latest work was chosen by the “Triennale Design Museum” in
                  Milan to be part of the exhibition “W. Women in Italian
                  design” (April 2016- February 2017).
                </p>
              </Description>
            </IntroContent>
            <IntroImage padding>
              <picture>
                <img src="/intro_img_01.png" />
              </picture>
            </IntroImage>
          </IntroWrapper>
        </IntorPosition>

        <picture>
          <img src="/mockup_img_01.png" />
        </picture>
        <IntorPosition alignPosition="right">
          <IntroWrapper maxWidth="105rem" isBottomImg>
            <IntroContent>
              <span>THE BRAND</span>
              <Description>
                <p>
                  FLOEMA is a new jewelry brand all design and handmade by me,
                  Valentina Caprini, goldsmith, and artist based in Florence.
                </p>
                <p>
                  The name FLOEMA is inspired by the vascular tissue of the
                  plants, which brings the lifeblood from the roots to the
                  branches and makes flowers and fruits bloom.
                </p>
                <p>
                  Each FLOEMA piece is elegant and unique, created with a
                  refined goldsmith’s technique in a small laboratory equipped
                  with machines dated to the beginning of the ‘900.
                </p>
                <p>
                  Like the lifeblood makes the plant evolve, so FLOEMA gives
                  part of its income to PLAN INTERNATIONAL, a charity that works
                  hard to eliminate the child brides phenomenon.
                </p>
              </Description>
            </IntroContent>
            <IntroImage>
              <picture>
                <img src="/intro_img_02.png" />
              </picture>
            </IntroImage>
          </IntroWrapper>
        </IntorPosition>
        <picture>
          <img src="/CAROUSEL POSTERS.png" />
        </picture>
        <Header>
          <RaiseText>
            The surprise of what is possible to make with a simple and thin
            thread.
          </RaiseText>
        </Header>

        <IntorPosition alignPosition="left">
          <IntroWrapper isLeftImg maxWidth="94rem">
            <IntroContent>
              <span>JEWELRY CARE</span>
              <Description>
                <p>
                  All FLOEMA jewels are exclusively realized using precious
                  metals: 925 silver (pure for the Filigree) and 18kt gold. All
                  metals are subjected to a natural oxidation process, that
                  depends either on natural factors like oxygen in the air, the
                  salt in the sea, sunlight, skin ph, or on chemical factors,
                  like creams and perfumes.
                </p>
                <p>
                  Please find two ways to clean gold and silver with natural
                  ingredients.
                </p>
                <p>To make your piece return to its original condition:</p>
                <p>
                  Gold is slightly subjected to the oxidation process. To make
                  your jewel shine again put your jewels in a solution of half
                  cup of white vinegar and salt for at least 30 minutes.
                </p>
                <p>
                  With a white cotton soft cloth dipped in the solution first
                  brush your piece and then rinse it with plenty of water and
                  voila!
                </p>
                <p>
                  To take the oxidation off silver you have to use one
                  ingredient only: bicarbonate.
                </p>
                <p>
                  Pour 250ml of lukewarm water and 5 spoons of bicarbonate in a
                  container. Mixed until it is melted. Leave your silver jewels
                  in the solution over the night, then brush them with a
                  toothbrush until they shine again. Finally, rinse and dry with
                  soft cloth.
                </p>
              </Description>
            </IntroContent>
            <IntroImage>
              <picture>
                <img src="/intro_img_03.png" />
              </picture>
            </IntroImage>
          </IntroWrapper>
        </IntorPosition>
        <IntorPosition alignPosition="right">
          <IntroWrapper maxWidth="94rem">
            <IntroContent>
              <span>SUSTAIN ABILITY</span>
              <Description>
                <p>
                  FLOEMA engages in its own small way to choose green solutions
                  as much as possible.
                </p>
                <p>
                  You will receive each piece in a handmade box realized by
                  Florentine typography using eco-friendly paper (made by 90% of
                  pure cellulose and 10% by cotton fibers),
                </p>
                <p>in a recycled and 100% recyclable parcel.</p>
                <p>
                  The business cards are realized with recycled cotton fiber
                  cardboard. All the pieces are created in a small laboratory in
                  the Florentine countryside, preferring using green materials
                  and recycling precious materials.
                </p>
              </Description>
            </IntroContent>
            <IntroImage padding>
              <picture>
                <img src="/intro_img_04.png" />
              </picture>
            </IntroImage>
          </IntroWrapper>
        </IntorPosition>
        <picture>
          <img src="/mockup_img_02.png" />
        </picture>
      </ContainerMax>
    </div>
  );
}
