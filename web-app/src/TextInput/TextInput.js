import styled from "styled-components";
import { INPUT_PADDING } from "../GlobalStyle";

export const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.asideBackgroundColor};
  padding: ${INPUT_PADDING}px;
  color: inherit;
  background: ${({ theme }) => theme.mainBackgroundColor};
`;
