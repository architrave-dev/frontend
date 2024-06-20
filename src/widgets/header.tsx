import { media } from "@styles/mediaQuery";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  // TODO: 차후 편집 기능으로 수정 :== 글로벌 스테이트
  const mode = false;
  return (
    <StyledHeader>
      <nav>
        <StyledMenu>
          <StyledList>
            <StyledLogo to="/">Architrave</StyledLogo>
          </StyledList>
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
          <StyledList>
            {mode ? (
              <div>editMode</div>
            ) : (
              <StyledLink to="contact">login</StyledLink>
            )}
          </StyledList>
        </StyledMenu>
      </nav>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  margin: auto;
  padding-block: 1rem;
  padding-inline: 2rem;
`;

const StyledMenu = styled.menu`
  display: grid;
  grid-template-columns: minmax(7rem, 20rem) repeat(4, minmax(4rem, 9rem)) 1fr;
  column-gap: 2rem;
  align-items: center;
  ${media.tablet} {
    grid-template-columns: 12rem repeat(4, 5rem) 1fr;
    column-gap: 1rem;
  }
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
`;

const StyledLogo = styled(StyledLink)`
  font-size: ${(props) => props.theme.fontSize.lg};
  ${media.tablet} {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;
