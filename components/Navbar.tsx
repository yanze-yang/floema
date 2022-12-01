import CloseButton from "./CloseButton";
import styled from "styled-components";

type NavbarProps = {
  isDetailPage?: true | null;
};

const Wrapper = styled.nav`
  padding: calc(2rem + 1vw);
  background-color: ${(props) => props.theme.color.quicksand};
`;

const FlexLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 8rem;
`;

const About = styled.div`
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.font.serif};
  letter-spacing: 1px;
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

export default function Navbar({ isDetailPage }: NavbarProps) {
  return (
    <Wrapper>
      <FlexLayout>
        <Logo>
          <picture>
            <source srcSet="/logo_white.svg" type="image/webp" />
            <img src="/logo_white.svg" alt="logo" />
          </picture>
        </Logo>
        <About>About</About>
      </FlexLayout>
      {isDetailPage ? (
        <FlexCenter>
          <CloseButton />
        </FlexCenter>
      ) : null}
    </Wrapper>
  );
}
