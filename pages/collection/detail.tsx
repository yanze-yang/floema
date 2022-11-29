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
  grid-column-gap: 1.7rem;
  grid-row-gap: 3rem;
`;

const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-sans font-extralight text-3xl  tracking-tight leading-normal max-w-[30rem]">
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
          <div className="pt-16 pb-14">
            <div className="font-sans text-3xl tracking-normal font-light pb-6">
              VITA COLLECTION
            </div>
            <h1 className="font-serif text-[12rem] tracking-tight leading-[10.5rem]">
              Silver Necklace
            </h1>
          </div>
          <Grid className="items-center">
            <picture className="self-start">
              <source srcSet="/icon-compass.png" type="image/png" />
              <img src="/icon-compass.png" alt="icon-compass" />
            </picture>
            <Description>
              The necklace is 44 cm long. <br></br>The setting is 5 mm long and
              4 mm wide.
            </Description>
            <picture className="self-start">
              <source srcSet="/icon-star.png" type="image/png" />
              <img src="/icon-star.png" alt="icon-star" />
            </picture>
            <Description>Silver. Ruby Stone</Description>
            <div className="self-start font-sans font-light text-3xl">Info</div>
            <Description>
              This luminous necklace, called “Venetian” is perfect for the four
              thread woven bezel that protects a wonderful intense red ruby. The
              necklace is completely made in Sterling Silver.
            </Description>
            <div className="self-start font-sans font-light text-3xl">
              You should know
            </div>
            <Description>
              Each FLOEMA jewel is entirely handmade: any difference from the
              original picture evidences the unique and artisanal manufacture of
              the piece.
            </Description>
          </Grid>
          <ShopButton className="pt-16" />
          <div className="flex justify-center">
            <CloseButton className="mt-20" />
          </div>
        </ContainerMeduim>
      </section>
    </>
  );
}
