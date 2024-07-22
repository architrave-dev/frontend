import * as Dialog from "@radix-ui/react-dialog";
import { StyledWhiteButtonLayout } from "@shared/ui/Button";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export default function LoginDialog() {
  const { register, handleSubmit } = useForm();
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <StyledLoginButton>로그인</StyledLoginButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <StyledOverlay />
        <StyledContent>
          <Dialog.Title>Login Dialog</Dialog.Title>
          <Dialog.Description>Please input login Form</Dialog.Description>
          <form
            onSubmit={handleSubmit((values) => {
              console.log("submit values", values);
            })}
          >
            <label>
              <span>id</span>
              <input {...register("id")} type="text" />
            </label>
            <label>
              <span>password</span>
              <input {...register("password")} type="password" />
            </label>
          </form>
          <Dialog.Close asChild>
            <button>login button example</button>
          </Dialog.Close>
        </StyledContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const StyledLoginButton = styled.button`
  ${StyledWhiteButtonLayout}
`;

const StyledOverlay = styled(Dialog.Overlay)`
  background-color: black;
  position: fixed;
  inset: 0;
`;

const StyledContent = styled(Dialog.Content)`
  background-color: white;
  border-radius: 0.6rem;
  box-shadow: hsl(206 22% 7% / 35%);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(35rem, 50vw, 60rem);
  max-height: 85vh;
  padding: 2.5rem;
`;
