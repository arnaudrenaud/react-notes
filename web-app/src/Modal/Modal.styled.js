import styled from "styled-components";
import { Button } from "../Button/Button.styled";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Box = styled.div`
  width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: end;
  background-color: ${({ theme }) => theme.asideBackgroundColor};
`;

export const BoxContent = styled.div`
  width: 100%;
`;

export const CloseButton = styled(Button)`
  height: 30px;
  width: 30px;
`;