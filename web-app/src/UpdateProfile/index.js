import { useContext, useState } from "react";
import { Button, PrimaryButton } from "../Button/Button.styled";
import { MenuStepButtons, MenuStepContainer } from "../MenuStep/MenuStep";
import { ProfileContext } from "../ProfileContext";
import { TextInput } from "../TextInput/TextInput";

const UpdateProfile = ({ onSubmit }) => {
  const { profileName: initialProfileName, onProfileUpdate } =
    useContext(ProfileContext);
  const [profileName, setProfileName] = useState(initialProfileName);

  const saveProfile = async () => {
    await fetch("/profile", {
      method: "PUT",
      body: JSON.stringify({ name: profileName }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    onProfileUpdate(profileName);
    onSubmit();
  };

  return (
    <MenuStepContainer>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          saveProfile();
        }}
      >
        <label>
          Nom :{" "}
          <TextInput
            type="text"
            value={profileName}
            onChange={(event) => {
              setProfileName(event.target.value);
            }}
          />
        </label>
        <MenuStepButtons>
          <Button type="button">Annuler</Button>
          <PrimaryButton>Enregistrer</PrimaryButton>
        </MenuStepButtons>
      </form>
    </MenuStepContainer>
  );
};

export default UpdateProfile;
