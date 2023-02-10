import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  border: 1px solid ${({ theme }) => theme.asideBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.asideBackgroundColor};
`;

export const DangerButton = styled(Button)`
  background-color: transparent;
  border-color: ${({ theme }) => theme.errorColor};

  &:focus {
    box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.errorColor};
  }
`;
