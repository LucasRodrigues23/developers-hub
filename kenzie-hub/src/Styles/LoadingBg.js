import styled from "styled-components";

export const LoadingBg = styled.div`
  animation: is-rotating 1s infinite;
  border: 10px solid var(--color-grey-4);
  border-radius: 50%;
  border-top-color: var(--color-primary);
  height: 100px;
  width: 100px;
  margin-top: 250px;

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}

`