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
  grid-column-gap: 1rem;
  grid-row-gap: 1.4rem;
`;

const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-sans font-extralight text-sm tracking-tight leading-normal max-w-[30rem] md:text-3xl  ">
      {children}
    </div>
  );
};

const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="self-start font-sans font-light text-sm md:text-3xl">
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
          <picture>
            <source srcSet="/carousel.png" type="image/png" />
            <img src="/carousel.png" alt="carousel" />
          </picture>
          <div className="pt-10 pb-5 md:pt-16 md:pb-14">
            <div className="font-sans text-base tracking-normal font-light pb-2 sm:text-xl">
              VITA COLLECTION
            </div>
            <h1 className="text-8xl font-serif tracking-tight leading-[5.3rem] md:text-9xl md:text-[12rem] md:leading-[10.5rem]">
              Silver Necklace
            </h1>
          </div>
          <Grid className="items-center">
            <picture className="self-start w-12">
              <source srcSet="/icon-compass.png" type="image/png" />
              <img src="/icon-compass.png" alt="icon-compass" />
            </picture>
            <Description>
              The necklace is 44 cm long. <br></br>The setting is 5 mm long and
              4 mm wide.
            </Description>
            <picture className="self-start w-12">
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
          <ShopButton className="pt-12 md:pt-16" />
          <div className="flex justify-center">
            <CloseButton className="mt-10 mb-24 md:mt-20 md:mb-48" />
          </div>
        </ContainerMeduim>
      </section>
    </>
  );
}
