import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Button } from "../Button/Button.styled";
import Menu from "../Menu";
import Modal from "../Modal";
import { ProfileContext } from "../ProfileContext";
import { ButtonsContainer, ProfileName } from "./SideActions.styled";

const SideActions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { profileName } = useContext(ProfileContext);

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
          <Menu onClose={toggleMenuOpen} />
        </Modal>
      )}
    </>
  );
};

export default SideActions;
