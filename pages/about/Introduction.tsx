import React, { Children } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface PositionProps {
  alignPosition: "center" | "right" | "left";
}

const IntorPosition = styled.div<PositionProps>`
  margin: 4rem 0 7rem 0;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    margin: 10rem 0;
    justify-content: ${(props) => props.alignPosition};
  }
`;

interface WrapperProps {
  isLeftImg: boolean;
  isBottomImg: boolean;
  maxWidth: string;
}

const IntroWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.isBottomImg ? "column" : "column-reverse"};
  align-items: center;
  gap: calc(1.2rem + 6vw);

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

interface ImageProps {
  hasImgPadding: boolean;
}

const IntroImage = styled.div<ImageProps>`
  max-width: 100%;
  padding: ${(props) => (props.hasImgPadding ? "0 2rem" : "")};
`;

interface IntroductionProps extends PositionProps, WrapperProps, ImageProps {
  labelName: string;
  imageSrc: string;
  children: React.ReactNode;
}

export default function Introduction({
  children,
  labelName,
  imageSrc,
  alignPosition,
  maxWidth,
  hasImgPadding,
  isLeftImg,
  isBottomImg,
}: IntroductionProps) {
  let initial = { opacity: 0, rotate: 3, x: "10%" };
  let whileInView = { opacity: 1, rotate: 0, x: "0%" };

  if (isLeftImg) {
    initial = { opacity: 0, rotate: -3, x: "-10%" };
    whileInView = { opacity: 1, rotate: 0, x: "0%" };
  }

  return (
    <>
      <IntorPosition
        as={motion.div}
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.2,
        }}
        alignPosition={alignPosition}
      >
        <IntroWrapper
          maxWidth={maxWidth}
          isLeftImg={isLeftImg}
          isBottomImg={isBottomImg}
        >
          <IntroContent>
            <span>{labelName?.toUpperCase()}</span>
            <Description>{children}</Description>
          </IntroContent>
          <IntroImage hasImgPadding={hasImgPadding}>
            <picture>
              <img src={imageSrc} alt={imageSrc} />
            </picture>
          </IntroImage>
        </IntroWrapper>
      </IntorPosition>
    </>
  );
}
