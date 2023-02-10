import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { Box, BoxContent, CloseButton } from "./Modal.styled";
import { Overlay } from "../Overlay/Overlay.styled";

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        event.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <Overlay onClick={onClose}>
      <Box
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <CloseButton onClick={onClose}>
          <FiX />
        </CloseButton>
        <BoxContent>{children}</BoxContent>
      </Box>
    </Overlay>
  );
};

export default Modal;
