import React from "react";
import styled from "styled-components";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: "string";
}

export default function Input({ label }: InputProps) {
  return (
    <>
      <label>
        {label ? <span>{label}</span> : null}
        <StyledInput placeholder="텍스트를 입력해주세요" />
      </label>
    </>
  );
}

const StyledInput = styled.input`
  all: unset;

  font-size: ${(props) => props.theme.fontSize.lg};
  margin-block-start: 10rem;
  background-color: pink;
  padding-block-end: 2rem;
  border-bottom: 1px solid black;
`;
