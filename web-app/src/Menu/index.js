import { useState } from "react";
import { FiSettings, FiUser } from "react-icons/fi";
import UpdateProfile from "../UpdateProfile";
import { IconAndLabel } from "../IconAndLabel/IconAndLabel.styled";
import { Container, MenuButton } from "./Menu.styled";

const Menu = ({ profileName, onProfileUpdate }) => {
  const [selectedStep, setSelectedStep] = useState(null);

  if (selectedStep === "PROFILE") {
    return (
      <UpdateProfile
        profileName={profileName}
        onProfileUpdate={onProfileUpdate}
      />
    );
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
