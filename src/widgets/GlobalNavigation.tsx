import { media } from "@styles/mediaQuery";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function GlobalNavigation() {
  // TODO: 차후 편집 기능으로 수정 :== 글로벌 스테이트
  const mode = false;
  return (
    <StyledHeader>
      <nav>
        <StyledMenu>
          <StyledList>
            <StyledLogo to="/">Architrave</StyledLogo>
          </StyledList>
          <StyledFlex>
            <StyledList>
              <StyledLink to="projects">Projects</StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink to="works">Works</StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink to="about">About</StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink to="contact">Contact</StyledLink>
            </StyledList>
          </StyledFlex>
          <StyledList>
            {mode ? (
              <button onClick={() => {}}>editMode</button>
            ) : (
              <StyledLink to="login">login</StyledLink>
            )}
          </StyledList>
        </StyledMenu>
      </nav>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  padding-inline: 12rem;
  background: transparent;
`;

const StyledFlex = styled.div`
  display: flex;
  flex-flow: row nowrap;
  column-gap: 1.5rem;
`;

const StyledMenu = styled.menu`
  display: grid;
  grid-template-columns: 20rem auto 1fr;
  align-items: center;
`;

const StyledList = styled.li`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  &:last-child {
    justify-self: end;
  }
  ${media.tablet} {
    font-size: ${(props) => props.theme.fontSize.xsm};
  }
`;

const StyledLink = styled(Link)`
  display: block;
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;

const StyledLogo = styled(StyledLink)`
  font-size: ${(props) => props.theme.fontSize.lg};
  ${media.tablet} {
    font-size: ${(props) => props.theme.fontSize.md};
  }
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;
