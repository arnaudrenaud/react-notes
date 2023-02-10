import { DeletionDialog, DialogButtons } from "./Dialog.styled";

const Dialog = ({ content, buttons }) => {
  return (
    <DeletionDialog>
      {content}
      <DialogButtons>{buttons}</DialogButtons>
    </DeletionDialog>
  );
};

export default Dialog;
