import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Button } from "../Button/Button.styled";
import Menu from "../Menu";
import Modal from "../Modal";
import { ButtonsContainer, ProfileName } from "./SideActions.styled";

const SideActions = ({ profileName, onProfileUpdate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <ButtonsContainer>
        <Button onClick={toggleMenuOpen}>
          <FiMenu />
        </Button>
        <ProfileName>
          {profileName.split(" ").map((name) => name[0])}
        </ProfileName>
      </ButtonsContainer>
      {isMenuOpen && (
        <Modal onClose={toggleMenuOpen}>
          <Menu
            profileName={profileName}
            onProfileUpdate={(profileName) => {
              toggleMenuOpen();
              onProfileUpdate(profileName);
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default SideActions;
