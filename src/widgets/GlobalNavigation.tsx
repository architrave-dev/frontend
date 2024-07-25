import { Outlet, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import LoginDialog from "./login-dialog/ui/loginDialog";
import { TypoCSS } from "@styles/typoGuide";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useEditStore } from "src/app/store";
import { ButtonLayout } from "@shared/ui";

export default function GlobalNavigation() {
  const { isEditMode, toggleEditMode } = useEditStore((state) => state);
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" ? (
        <StyledLandingHeader>
          <LoginDialog />
        </StyledLandingHeader>
      ) : (
        <StyledGlobalHeader>
          <StyledNavigationMenu>
            <StyledLink href="/">architrave</StyledLink>
            <StyledNavigationList>
              <StyledNavigationExpendMenu>
                <StyledTrigger>Projects</StyledTrigger>
                <StyledNavigationContent>
                  <ul>
                    <li>
                      <StyledLink href="/projects/new">new</StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/projects">projects</StyledLink>
                    </li>
                  </ul>
                </StyledNavigationContent>
              </StyledNavigationExpendMenu>
              <NavigationMenu.Item>
                <StyledLink href="/works">works</StyledLink>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <StyledLink href="/about">about</StyledLink>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <StyledLink href="/contact">contact</StyledLink>
              </NavigationMenu.Item>
            </StyledNavigationList>
            <StyledNavigationList $end>
              {isEditMode ? (
                <StyledEditMenu>
                  <UnStyledButton onClick={toggleEditMode}>완료</UnStyledButton>
                  <div>John</div>
                </StyledEditMenu>
              ) : (
                <StyledEditMenu>
                  <LoginDialog />
                  <div>John</div>
                </StyledEditMenu>
              )}
            </StyledNavigationList>
          </StyledNavigationMenu>
        </StyledGlobalHeader>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
}

const StyledLandingHeader = styled.header`
  display: grid;
  justify-content: end;
  align-items: center;
  height: 7rem;
  padding-inline: clamp(2rem, 4vw, 12rem);
`;

const StyledGlobalHeader = styled.header`
  position: fixed;
  z-index: 500;
  width: 100%;
  height: 7rem;
  padding-inline: clamp(2rem, 4vw, 12rem);
  ${TypoCSS.gnbTap}
  color: ${(props) => props.theme.colors.white};
`;

const StyledNavigationMenu = styled(NavigationMenu.Root)`
  display: grid;
  align-items: center;
  height: 100%;
  column-gap: 4rem;
  grid-template-columns: 10rem 1fr 15rem;
`;

const StyledNavigationList = styled(NavigationMenu.List)<{ $end?: boolean }>`
  display: flex;
  column-gap: 3.2rem;
  ${(props) => props.$end && `justify-content: end`};
`;

const StyledNavigationExpendMenu = styled(NavigationMenu.Item)`
  position: relative;
`;

const StyledNavigationContent = styled(NavigationMenu.Content)`
  position: absolute;
  padding: 1rem;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.colors.caption};
  color: ${(props) => props.theme.colors.white};
`;

const StyledTrigger = styled(NavigationMenu.Trigger)`
  all: unset;
  cursor: pointer;
`;

const StyledEditMenu = styled.div`
  display: flex;
  justify-self: end;
  column-gap: 3.2rem;
`;

const StyledLink = styled(NavigationMenu.Link)`
  text-transform: capitalize;
`;

const UnStyledButton = styled.button`
  ${ButtonLayout.UnStyledButtonLayout}
`;
