import { useContext, useState } from "react";
import { FiSettings, FiUser } from "react-icons/fi";
import UpdateProfile from "../UpdateProfile";
import { IconAndLabel } from "../IconAndLabel/IconAndLabel.styled";
import { Container, MenuButton } from "./Menu.styled";

const Menu = ({ onClose }) => {
  const [selectedStep, setSelectedStep] = useState(null);

  if (selectedStep === "PROFILE") {
    return <UpdateProfile onSubmit={onClose} />;
  }

  if (selectedStep === "SETTINGS") {
    return "Settings";
  }

  return (
    <Container>
      <MenuButton
        onClick={() => {
          setSelectedStep("PROFILE");
        }}
      >
        <IconAndLabel>
          <FiUser />
          Mon profil
        </IconAndLabel>
      </MenuButton>
      <MenuButton
        onClick={() => {
          setSelectedStep("SETTINGS");
        }}
      >
        <IconAndLabel>
          <FiSettings />
          Réglages
        </IconAndLabel>
      </MenuButton>
    </Container>
  );
};

export default Menu;
