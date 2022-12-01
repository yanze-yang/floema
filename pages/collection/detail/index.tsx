import React from "react";
import ContainerMeduim from "../../../components/ContainerMeduim";
import Navbar from "../../../components/Navbar";
import CloseButton from "../../../components/CloseButton";
import styled from "styled-components";

type IconProps = {
  src: string;
  type: string;
  alt: string;
};

const Title = styled.h1`
  font-size: 5.3125rem;
  font-size: clamp(
    5.3125rem,
    -0.2857142857142856rem + 25.44642857142857vw,
    16rem
  );
  line-height: 110%;
`;

const Icon = ({ src, type, alt }: IconProps) => {
  return (
    <picture className="self-start w-12 sm:w-16 md:w-28">
      <source srcSet={src} type={`image/${type}`} />
      <img src={src} alt={alt} />
    </picture>
  );
};

const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="font-sans font-extralight text-sm tracking-tight sm:text-2xl md:text-4xl"
      style={{ lineHeight: "140%" }}
    >
      {children}
    </div>
  );
};

const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="self-start font-sans font-light text-sm sm:text-2xl md:text-4xl">
      {children}
    </div>
  );
};

const ShopButton = styled.div`
  font-size: 3.75rem;
  font-size: clamp(3.75rem, 1.785714285714286rem + 8.928571428571427vw, 7.5rem);
  font-family: ${(props) => props.theme.font.serif};
`;

const FlexBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 4rem 0 8rem 0;
  ${ShopButton} {
    align-self: flex-start;
  }
`;

export default function DetailIndex() {
  return (
    <>
      <Navbar isDetailPage={true} />
      <section className="bg-Quicksand">
        <ContainerMeduim>
          <div className="py-10 sm:py-16 md:py-24">
            <picture>
              <source srcSet="/carousel.png" type="image/png" />
              <img
                className="mb-5 sm:mb-8 md:mb-16 mx-auto"
                src="/carousel.png"
                alt="carousel"
              />
            </picture>
            <div className="font-sans text-base tracking-normal font-light pb-10 sm:text-xl md:text-2xl">
              VITA COLLECTION
            </div>

            <Title className="font-serif">Silver Necklace</Title>
          </div>
          <div className="grid grid-rows-[repeat(4, min-content)] grid-cols-[1fr_4fr] items-center gap-x-4 gap-y-6 sm:gap-x-3 sm:gap-y-9 md:gap-x-8">
            <Icon src="/icon-compass.png" alt="icon-compass" type="png" />
            <Description>
              The necklace is 44 cm long. <br></br>The setting is 5 mm long and
              4 mm wide.
            </Description>
            <Icon src="/icon-star.png" alt="/icon-star" type="png" />
            <Description>Silver. Ruby Stone</Description>
            <Tag>Info</Tag>
            <Description>
              This luminous necklace, called “Venetian” is perfect for the four
              thread woven bezel that protects a wonderful intense red ruby. The
              necklace is completely made in Sterling Silver.
            </Description>
            <Tag>You should know</Tag>
            <Description>
              Each FLOEMA jewel is entirely handmade: any difference from the
              original picture evidences the unique and artisanal manufacture of
              the piece.
            </Description>
          </div>
          <FlexBottom>
            <ShopButton>Shop it &gt;&gt;</ShopButton>
            <CloseButton />
          </FlexBottom>
        </ContainerMeduim>
      </section>
    </>
  );
}
