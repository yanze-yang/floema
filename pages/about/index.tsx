/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import ContainerMax from "./ContainerMax";
import styled from "styled-components";
import MotionText from "./MotionText";
import Introduction from "./Introduction";
import { motion } from "framer-motion";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

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
    padding: 3rem 2rem;
    font-family: ${({ theme }) => theme.font.serif};
    font-size: clamp(4rem, 2.259rem + 7.43vw, 8.5rem);
    text-align: center;
    line-height: clamp(4.5rem, 2.372rem + 9.082vw, 10rem);

    @media screen and (min-width: 1024px) {
      max-width: 1344px;
      padding: 3rem 3rem;
    }
  }
`;

const CarouselPhoto = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 1.2rem;
    padding: 8rem 0;
  }
`;

const PosterOne = styled.div`
  display: flex;
  gap: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  // select the second child of the div
  & :nth-child(2) {
    margin-top: 10%;
  }

  //select the last child of the div
  & :nth-child(3) {
    margin-top: 20%;
  }

  h1 {
    writing-mode: vertical-rl;
    font-family: ${({ theme }) => theme.font.serif};
    font-size: 6rem;
  }

  @media screen and (min-width: 1024px) {
    gap: 3rem;
    font-size: 8rem;
  }
`;

const PosterTwo = styled.div`
  display: flex;
  flex-direction: column;
  /* /* justify-content: center; */
  align-items: center;
  gap: 3rem;

  margin-bottom: 6rem;

  h1 {
    writing-mode: vertical-rl;
    font-family: ${({ theme }) => theme.font.serif};
    font-size: 6rem;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 3rem;
    font-size: 8rem;
  }
`;

export default function AboutIndex() {
  const delay = useMediaQuery("(min-width: 1024px)")
    ? [0, 1.3, 0.5]
    : [0, 0, 0];

  return (
    <div style={{ backgroundColor: "#B2B8C3", color: "#37384C" }}>
      <ContainerMax>
        <Navbar isDarkLogo />

        <CarouselPhoto>
          <motion.picture
            initial={{ opacity: 0, rotate: -18, y: "30%" }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0 },
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1, zIndex: 100 }}
          >
            <img src="/carousel_photo/1.png" alt="image" />
          </motion.picture>
          <motion.picture
            initial={{ opacity: 0, rotate: -10, y: "10%" }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.1 },
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.2, zIndex: 100 }}
          >
            <img src="/carousel_photo/2.png" alt="image" />
          </motion.picture>
          <motion.picture
            initial={{ opacity: 0, rotate: -4, y: "0%" }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.15 },
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.3, zIndex: 100 }}
          >
            <img src="/carousel_photo/3.png" alt="image" />
          </motion.picture>
          <motion.picture
            initial={{ opacity: 0, y: "-3%" }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.2 },
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.4, zIndex: 100 }}
          >
            <img src="/carousel_photo/4.png" alt="image" />
          </motion.picture>
          <motion.picture
            initial={{ opacity: 0, rotate: 4, y: "0%" }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.25 },
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.3, zIndex: 100 }}
          >
            <img src="/carousel_photo/5.png" alt="image" />
          </motion.picture>
          <motion.picture
            initial={{ opacity: 0, rotate: 10, y: "10%" }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.3 },
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.2, zIndex: 100 }}
          >
            <img src="/carousel_photo/6.png" alt="image" />
          </motion.picture>
          <motion.picture
            initial={{ opacity: 0, rotate: 18, y: "30%" }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.35 },
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1, zIndex: 100 }}
          >
            <img src="/carousel_photo/7.png" alt="image" />
          </motion.picture>
        </CarouselPhoto>
        <Header>
          <h1>
            <MotionText>
              Creating new dialogues between threads and metal
            </MotionText>
          </h1>
        </Header>
        <Introduction
          labelName="ABOUT ME"
          imageSrc="/intro_img_01.png"
          alignPosition="center"
          maxWidth="79rem"
          isLeftImg={false}
          isBottomImg={false}
          hasImgPadding
        >
          <p>
            Valentina’s work plays around the surprise of what is possible to
            make with a simple and thin line: a thread.
          </p>
          <p>
            Coming from a family with a strong feminine tailoring tradition, she
            wanted to bring this passionate root into her jewellery world,
            finding new ways of working with textiles.
          </p>
          <p>
            She weaves freely thousands of meters of threads on a hydrosoluble
            fabric, cutting or interlacing them one with the other, to let
            unexpected connections appear.
          </p>
          <p>
            Her approach is both experimental and traditional: she likes to
            combine contemporary methods with ancient techniques, like Filigree.
          </p>
          <p>
            The latest work was chosen by the “Triennale Design Museum” in Milan
            to be part of the exhibition “W. Women in Italian design” (April
            2016- February 2017).
          </p>
        </Introduction>
        <PosterOne>
          <motion.picture
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: false }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
            }}
          >
            <img src="/product_01.png" alt="image" />
          </motion.picture>
          <motion.h1
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeOut",
              duration: 0.8,
              delay: 1.3,
            }}
          >
            floema
          </motion.h1>
          <motion.picture
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: false }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <img src="/product_02.png" alt="image" />
          </motion.picture>
        </PosterOne>

        <Introduction
          labelName="THE BRAND"
          imageSrc="/intro_img_02.png"
          alignPosition="right"
          maxWidth="105rem"
          isLeftImg={false}
          isBottomImg
          hasImgPadding={false}
        >
          <p>
            FLOEMA is a new jewelry brand all design and handmade by me,
            Valentina Caprini, goldsmith, and artist based in Florence.
          </p>
          <p>
            The name FLOEMA is inspired by the vascular tissue of the plants,
            which brings the lifeblood from the roots to the branches and makes
            flowers and fruits bloom.
          </p>
          <p>
            Each FLOEMA piece is elegant and unique, created with a refined
            goldsmith’s technique in a small laboratory equipped with machines
            dated to the beginning of the ‘900.
          </p>
          <p>
            Like the lifeblood makes the plant evolve, so FLOEMA gives part of
            its income to PLAN INTERNATIONAL, a charity that works hard to
            eliminate the child brides phenomenon.
          </p>
        </Introduction>
        <CarouselPhoto>
          <motion.picture
            initial={{ opacity: 0, rotate: -18, y: "30%" }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0 },
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1, zIndex: 100 }}
          >
            <img src="/carousel_poster/1.jpg" alt="image" />
          </motion.picture>
          <motion.picture
            initial={{ opacity: 0, rotate: -10, y: "10%" }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.1 },
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.2, zIndex: 100 }}
          >
            <img src="/carousel_poster/2.jpg" alt="image" />
          </motion.picture>
          <motion.picture
            initial={{ opacity: 0, rotate: -4, y: "0%" }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.15 },
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.3, zIndex: 100 }}
          >
            <img src="/carousel_poster/3.jpg" alt="image" />
          </motion.picture>
          <motion.picture
            initial={{ opacity: 0, y: "-3%" }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.2 },
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.4, zIndex: 100 }}
          >
            <img src="/carousel_poster/4.jpg" alt="image" />
          </motion.picture>
          <motion.picture
            initial={{ opacity: 0, rotate: 4, y: "0%" }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.25 },
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.3, zIndex: 100 }}
          >
            <img src="/carousel_poster/5.jpg" alt="image" />
          </motion.picture>
          <motion.picture
            initial={{ opacity: 0, rotate: 10, y: "10%" }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.3 },
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.2, zIndex: 100 }}
          >
            <img src="/carousel_poster/6.jpg" alt="image" />
          </motion.picture>
          <motion.picture
            initial={{ opacity: 0, rotate: 18, y: "30%" }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.35 },
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1, zIndex: 100 }}
          >
            <img src="/carousel_poster/7.jpg" alt="image" />
          </motion.picture>
        </CarouselPhoto>
        <Header>
          <h1>
            <MotionText>
              The surprise of what is possible to make with a simple and thin
              thread.
            </MotionText>
          </h1>
        </Header>
        <Introduction
          labelName="JEWELRY CARE"
          imageSrc="/intro_img_03.png"
          alignPosition="left"
          maxWidth="94rem"
          isLeftImg
          isBottomImg={false}
          hasImgPadding={false}
        >
          <p>
            All FLOEMA jewels are exclusively realized using precious metals:
            925 silver (pure for the Filigree) and 18kt gold. All metals are
            subjected to a natural oxidation process, that depends either on
            natural factors like oxygen in the air, the salt in the sea,
            sunlight, skin ph, or on chemical factors, like creams and perfumes.
          </p>
          <p>
            Please find two ways to clean gold and silver with natural
            ingredients.
          </p>
          <p>To make your piece return to its original condition:</p>
          <p>
            Gold is slightly subjected to the oxidation process. To make your
            jewel shine again put your jewels in a solution of half cup of white
            vinegar and salt for at least 30 minutes.
          </p>
          <p>
            With a white cotton soft cloth dipped in the solution first brush
            your piece and then rinse it with plenty of water and voila!
          </p>
          <p>
            To take the oxidation off silver you have to use one ingredient
            only: bicarbonate.
          </p>
          <p>
            Pour 250ml of lukewarm water and 5 spoons of bicarbonate in a
            container. Mixed until it is melted. Leave your silver jewels in the
            solution over the night, then brush them with a toothbrush until
            they shine again. Finally, rinse and dry with soft cloth.
          </p>
        </Introduction>
        <Introduction
          labelName="SUSTAIN ABILITY"
          imageSrc="/intro_img_04.png"
          alignPosition="right"
          maxWidth="94rem"
          isLeftImg={false}
          isBottomImg={false}
          hasImgPadding={false}
        >
          <p>
            FLOEMA engages in its own small way to choose green solutions as
            much as possible.
          </p>
          <p>
            You will receive each piece in a handmade box realized by Florentine
            typography using eco-friendly paper (made by 90% of pure cellulose
            and 10% by cotton fibers),
          </p>
          <p>in a recycled and 100% recyclable parcel.</p>
          <p>
            The business cards are realized with recycled cotton fiber
            cardboard. All the pieces are created in a small laboratory in the
            Florentine countryside, preferring using green materials and
            recycling precious materials.
          </p>
        </Introduction>

        <PosterTwo>
          <motion.picture
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: false }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
              delay: delay[0],
            }}
          >
            <img src="/poster_01.png" alt="image" />
          </motion.picture>
          <motion.h1
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeOut",
              duration: 0.8,
              delay: delay[1],
            }}
          >
            Instagram
          </motion.h1>
          <motion.picture
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: false }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
              delay: delay[2],
            }}
          >
            <img src="/poster_02.png" alt="image" />
          </motion.picture>
        </PosterTwo>
      </ContainerMax>
    </div>
  );
}
