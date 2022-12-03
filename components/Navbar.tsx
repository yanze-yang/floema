import CloseButton from "./CloseButton";
import styled from "styled-components";

type NavbarProps = {
  isDetailPage?: true | null;
  isDarkLogo: true | null;
};

const Wrapper = styled.nav`
  padding: calc(2rem + 1vw);
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

export default function Navbar({ isDetailPage, isDarkLogo }: NavbarProps) {
  return (
    <Wrapper>
      <FlexLayout>
        <Logo>
          {isDarkLogo ? (
            <picture>
              <img src="/logo_black.svg" alt="logo" />
            </picture>
          ) : (
            <picture>
              <img src="/logo_white.svg" alt="logo" />
            </picture>
          )}
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
