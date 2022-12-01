import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 10rem;
  height: 5rem;

  border: 1px solid white;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  .link {
    font-size: 1.1rem;
    font-weight: 200;
    letter-spacing: 1px;
  }
`;

export default function CloseButton() {
  return (
    <Wrapper>
      <Link className="link" href="/collection">
        CLOSE
      </Link>
    </Wrapper>
  );
}
