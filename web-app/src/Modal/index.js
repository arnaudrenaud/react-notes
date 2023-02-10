import { Box, Container } from "./Modal.styled";

const Modal = ({ children }) => {
  return (
    <Container>
      <Box>{children}</Box>
    </Container>
  );
};

export default Modal;
