import { Container } from "@styles/Layouts";
import { SrOnly } from "@styles/srOnly";
import { media } from "@styles/mediaQuery";
import { TypoCSS } from "@styles/typoGuide";
import LoginDialog from "@widgets/login-dialog/ui/loginDialog";
import { useForm } from "react-hook-form";
import { redirect } from "react-router-dom";
import { api } from "src/app/config";
import styled from "styled-components";

type Form = {
  aui: string;
};

export default function Landing() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Form>();
  return (
    <>
      <StyledHeader>
        <LoginDialog />
      </StyledHeader>
      <StyledTitle>Architrave</StyledTitle>
      <search>
        <StyledContainer>
          <form
            onSubmit={handleSubmit(async (values) => {
              const { aui } = values;
              const result = await api.axiosInstance.get(`/member?aui=${aui}`);
              if (result.status === 200) {
                redirect(`/artist-landing-box?aui=${aui}`);
              } else {
                setError("aui", { message: "등록된 작가가 없습니다." });
              }
            })}
          >
            <StyledDescription htmlFor="artist-search">
              작가 이름을 검색합니다
            </StyledDescription>
            <StyledGrid>
              <StyledInput
                {...register("aui", {
                  validate: (value) => {
                    if (!value && value.length === 0) {
                      return "작가 이름을 입력해주세요";
                    }
                  },
                })}
                id="artist-search"
                type="text"
                placeholder="작가 이름을 검색해주세요"
              />
              <StyledButton type="submit">검색</StyledButton>
              {errors ? (
                <ErrorMessage>{errors.aui?.message}</ErrorMessage>
              ) : null}
            </StyledGrid>
          </form>
        </StyledContainer>
      </search>
    </>
  );
}
const StyledHeader = styled.header`
  display: grid;
  justify-content: end;
  padding-inline: clamp(2rem, 5vw, 4rem);
  height: 7rem;
  ${media.laptop} {
    padding-inline: 2rem;
  }
`;

const StyledTitle = styled.h1`
  ${TypoCSS.mainTitle}
  margin-block: 9.2rem 12rem;
  text-align: center;
`;

const StyledContainer = styled.div`
  ${Container}
`;

const StyledDescription = styled.label`
  ${SrOnly}
`;

const StyledGrid = styled.div`
  display: grid;
  margin-inline: auto;
  justify-content: center;
  grid-template-columns: 2fr 1fr;
  max-width: 82rem;
  gap: 2rem;
`;

const StyledInput = styled.input`
  all: unset;
  padding-inline-start: 3.2rem;
  background-color: #f0f0f0;
  font-size: clamp(1.6rem, 1rem + 2vw, 2.4rem);
  font-weight: 500;
  height: 100%;
`;

const StyledButton = styled.button`
  cursor: pointer;
  padding: 1.5rem 6rem;
  font-size: clamp(1.6rem, 1rem + 2vw, 2.4rem);
  font-weight: 500;
  background-color: black;
  color: white;
  ${media.mobile} {
    padding: 1.5rem 3.5rem;
  }
`;

const ErrorMessage = styled.span`
  font-size: clamp(1.6rem, 1rem + 2vw, 2.4rem);
  color: red;
`;
