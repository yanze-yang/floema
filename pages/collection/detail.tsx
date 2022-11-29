import React from "react";
import ContainerMeduim from "../../components/ContainerMeduim";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import ShopButton from "../../components/ShopButton";
import CloseButton from "../../components/CloseButton";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: repeat(4, min-content);
`;

const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-sans font-extralight text-sm tracking-tight leading-normal  sm:text-2xl  md:text-4xl md:leading-relaxed">
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

export default function Detail() {
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
            <h1 className="text-8xl font-serif tracking-tight leading-[5.3rem] sm:text-[8.5rem] sm:leading-[8rem] md:text-9xl md:text-[14rem] md:leading-[15rem]">
              Silver Necklace
            </h1>
          </div>
          <Grid className="items-center gap-x-4 gap-y-6 sm:gap-x-3 sm:gap-y-9 md:gap-x-8">
            <picture className="self-start w-12 sm:w-16 md:w-28">
              <source srcSet="/icon-compass.png" type="image/png" />
              <img src="/icon-compass.png" alt="icon-compass" />
            </picture>
            <Description>
              The necklace is 44 cm long. <br></br>The setting is 5 mm long and
              4 mm wide.
            </Description>
            <picture className="self-start w-12 sm:w-16 md:w-28">
              <source srcSet="/icon-star.png" type="image/png" />
              <img src="/icon-star.png" alt="icon-star" />
            </picture>
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
          </Grid>
          <ShopButton className="pt-16 md:pt-32" />
          <div className="flex justify-center pt-12 pb-32 md:pt-28 md:pb-72">
            <CloseButton />
          </div>
        </ContainerMeduim>
      </section>
    </>
  );
}
