import React from "react";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

export default function LoginModal() {
  const { register, handleSubmit } = useForm();
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>login modal switch button</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <StyledOverlay />
        <StyledContent>
          <Dialog.Title>Title Modal</Dialog.Title>
          <Dialog.Description>Description</Dialog.Description>
          <form
            onSubmit={handleSubmit((values) => {
              console.log(values);
            })}
          >
            <label>
              <span>UserName</span>
              <input type="text" {...register("userName")} />
            </label>
            <label>
              <span>Password</span>
              <input type="password" {...register("password")} />
            </label>
            <label>
              <span>Email</span>
              <input type="text" {...register("email")} />
            </label>
            <button type="submit">submit</button>
          </form>
        </StyledContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const StyledOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: black;
`;

const StyledContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 25px;
  background-color: white;
  border-radius: 6px;
  & > * {
    padding-block-end: 1rem;
  }
`;
