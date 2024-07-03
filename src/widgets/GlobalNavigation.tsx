import { media } from "@styles/mediaQuery";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEditStore } from "src/app/store";
import useCurrentPath from "src/features/useCurrentPath";

interface GlobalNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  artistName?: string;
}

export default function GlobalNavigation({
  artistName,
}: GlobalNavigationProps) {
  const { isEditMode, toggleEditMode } = useEditStore((state) => state);
  const pathMap = useCurrentPath({
    "/projects": false,
    "/works": false,
    "/about": false,
    "/contact": false,
  });
  console.log(pathMap);
  return (
    <StyledHeader>
      <nav>
        <StyledMenu>
          <StyledList>
            <StyledLogo $isCurrentPath={false} to="/">
              Architrave
            </StyledLogo>
          </StyledList>
          <StyledFlex>
            <StyledList>
              <StyledLink $isCurrentPath={pathMap["/projects"]} to="projects">
                Projects
              </StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink $isCurrentPath={pathMap["/works"]} to="works">
                Works
              </StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink $isCurrentPath={pathMap["/about"]} to="about">
                About
              </StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink $isCurrentPath={pathMap["/contact"]} to="contact">
                Contact
              </StyledLink>
            </StyledList>
          </StyledFlex>
          <StyledList>
            {isEditMode && <button onClick={toggleEditMode}>편집</button>}
            <StyledLink $isCurrentPath={isEditMode} to="login">
              {artistName ?? "john"}
            </StyledLink>
          </StyledList>
        </StyledMenu>
      </nav>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  position: fixed;
  z-index: 500;
  background: limegreen;
  width: 100%;
  padding-inline: 12rem;
  /* background: transparent; */
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
  color: ${(props) => props.theme.colors.white};
  &:last-child {
    justify-self: end;
  }
  ${media.tablet} {
    font-size: ${(props) => props.theme.fontSize.xsm};
  }
`;

const StyledLink = styled(Link)<{ $isCurrentPath: boolean }>`
  display: block;
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
  text-decoration: ${(props) => (props.$isCurrentPath ? "underline" : "none")};
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
