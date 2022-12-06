import React from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import CloseButton from "../../components/CloseButton";

import styled from "styled-components";
import DescriptionIcon from "./DescriptionIcon";

const ImageContentGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 3rem 0rem;
  justify-items: center;
`;

const ContentWrapperFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CollectionTag = styled.div`
  font-size: 0.875rem;
  font-size: clamp(
    0.875rem,
    0.3511904761904763rem + 2.380952380952381vw,
    1.875rem
  );
  line-height: 110%;
`;

const ProductName = styled.h1`
  font-size: 5.3125rem;
  font-size: clamp(
    5.3125rem,
    -0.2857142857142856rem + 25.44642857142857vw,
    16rem
  );
  font-family: ${(props) => props.theme.font.serif};
  line-height: 110%;
`;

const DescriptionGrid = styled.div`
  display: grid;
  grid-template-columns: 3rem auto;
  grid-template-rows: repeat(4, min-content);
  grid-row-gap: 1.5rem;
  grid-column-gap: calc(2rem + 1.5vw);
`;

const Description = styled.div`
  font-size: 1.125rem;
  font-size: clamp(
    1.125rem,
    1.3154761904761905rem + -0.2976190476190476vw,
    1.25rem
  );
  font-weight: 200;
`;

const Tag = styled.div`
  font-size: clamp(
    1.125rem,
    1.3154761904761905rem + -0.2976190476190476vw,
    1.25rem
  );
  font-weight: 300;
`;

const ShopButton = styled.div`
  font-size: 2.25rem;
  font-size: clamp(
    2.25rem,
    1.0714285714285714rem + 5.357142857142857vw,
    4.5rem
  );
  font-family: ${(props) => props.theme.font.serif};
`;

const BottomFlex = styled.div`
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
  // return (
  // <div style={{ backgroundColor: "#BC978C" }}>
  //   <Navbar isDetailPage={true} />
  //   <Container>
  //     <ImageContentGrid>
  //       <picture>
  //         <source srcSet="/carousel.png" type="image/png" />
  //         <img src="/carousel.png" alt="carousel" />
  //       </picture>
  //       <ContentWrapperFlex>
  //         <CollectionTag>VITA COLLECTION</CollectionTag>
  //         <ProductName>Silver Necklace</ProductName>
  //         <DescriptionGrid>
  //           <DescriptionIcon
  //             src="/icon-compass.png"
  //             alt="icon-compass"
  //             type="png"
  //           />
  //           <Description>
  //             The necklace is 44 cm long. <br></br>The setting is 5 mm long
  //             and 4 mm wide.
  //           </Description>
  //           <DescriptionIcon
  //             src="/icon-star.png"
  //             alt="/icon-star"
  //             type="png"
  //           />
  //           <Description>Silver. Ruby Stone</Description>
  //           <Tag>Info</Tag>
  //           <Description>
  //             This luminous necklace, called “Venetian” is perfect for the
  //             four thread woven bezel that protects a wonderful intense red
  //             ruby. The necklace is completely made in Sterling Silver.
  //           </Description>
  //           <Tag>You should know</Tag>
  //           <Description>
  //             Each FLOEMA jewel is entirely handmade: any difference from the
  //             original picture evidences the unique and artisanal manufacture
  //             of the piece.
  //           </Description>
  //         </DescriptionGrid>
  //         <ShopButton>Shop it &gt;</ShopButton>
  //       </ContentWrapperFlex>
  //     </ImageContentGrid>
  //     <BottomFlex>
  //       <CloseButton />
  //     </BottomFlex>
  //   </Container>
  // </div>
  // );
}
