import React from "react";
import ContainerMeduim from "../../components/ContainerMeduim";
import Navbar from "../../components/Navbar";

export default function Detail() {
  return (
    <>
      <Navbar isDetailPage={true} />
      <ContainerMeduim>
        <section className="pt-6">
          <picture>
            <source src="/carousel.png" type="image/png" />
            <img src="/carousel.png" alt="carousel" />
          </picture>
        </section>
      </ContainerMeduim>
    </>
  );
}
