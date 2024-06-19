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
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledList = styled.li`
  font-size: ${(props) => props.theme.fontSize.gnbTab};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  &:not(:first-child) {
    padding-inline-start: 1rem;
  }
  &:last-child {
    flex-grow: 1;
    text-align: end;
  }
`;

const StyledLink = styled(Link)`
  display: block;
`;

const StyledLogo = styled(StyledLink)`
  font-size: ${(props) => props.theme.fontSize.lg};
`;
