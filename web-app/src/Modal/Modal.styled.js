import styled from "styled-components";
import { Button } from "../Button/Button.styled";

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
