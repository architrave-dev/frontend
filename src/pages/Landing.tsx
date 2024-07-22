import React from "react";
import { useForm } from "react-hook-form";
import { redirect } from "react-router-dom";
import { api } from "src/app/config";
import styled from "styled-components";

export default function Landing() {
  const [error, setError] = React.useState(false);
  const { register, handleSubmit } = useForm();
  return (
    <StyledGrid>
      <TempLogo />
      <StyledForm
        onSubmit={handleSubmit(async (values) => {
          const { aui } = values;
          const result = await api.axiosInstance.get(`/member?aui=${aui}`);
          if (result.status === 200) {
            redirect(`/artist-landing-box?aui=${aui}`);
          } else {
            setError(true);
          }
        })}
      >
        <label>
          <input
            {...register("aui")}
            type="text"
            placeholder="작가 이름을 검색해주세요"
          />
        </label>
        <button type="submit">검색</button>
      </StyledForm>
      {error ? <ErrorMessage>등록된 작가가 없습니다.</ErrorMessage> : null}
    </StyledGrid>
  );
}

const StyledGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

const TempLogo = styled.div`
  background-color: grey;
  width: 24rem;
  height: 24rem;
  margin-block-end: 6rem;
`;

const StyledForm = styled.form`
  display: flex;
  gap: 2rem;
  margin-block-end: 1.5rem;
`;

const ErrorMessage = styled.span`
  font-size: 1.2rem;
  color: red;
`;
