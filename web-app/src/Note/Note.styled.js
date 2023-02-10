import styled from "styled-components";
import { INPUT_PADDING } from "../GlobalStyle";
import { TextInput } from "../TextInput/TextInput";

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Title = styled(TextInput)`
  height: 60px;
  font-size: 24px;
  background: inherit;
`;

export const Content = styled.textarea`
  padding: ${INPUT_PADDING}px;
  font-size: inherit;
  flex: 1;
  border: none;
  font-family: inherit;
  color: inherit;
  background: transparent;
  resize: none;
`;

export const Actions = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: ${INPUT_PADDING}px;
  border-top: 1px solid ${({ theme }) => theme.asideBackgroundColor};
`;

export const SaveAndStatus = styled.div`
  display: flex;
  gap: 8px;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.errorColor};
`;
