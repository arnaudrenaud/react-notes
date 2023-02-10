import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Form,
  Title,
  Content,
  SaveAndStatus,
  ErrorMessage,
  Actions,
} from "./Note.styled";
import { Button, DangerButton, PrimaryButton } from "../Button/Button.styled";
import { Loader } from "../Loader/Loader.styled";
import { FiCheck, FiTrash } from "react-icons/fi";
import { IconAndLabel } from "../IconAndLabel/IconAndLabel.styled";
import { FullHeightAndWidthCentered } from "../App.styled";
import Modal from "../Modal";
import Dialog from "../Dialog";

const Note = ({ onSave, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState(null);
  const [getStatus, setGetStatus] = useState("IDLE");
  const [saveStatus, setSaveStatus] = useState("IDLE");

  const [showDeletionModal, setShowDeletionModal] = useState(false);

  const fetchNote = useCallback(async () => {
    setGetStatus("LOADING");
    const response = await fetch(`/notes/${id}`);
    const note = await response.json();
    if (response.ok) {
      setNote(note);
      setGetStatus("IDLE");
    } else {
      setGetStatus("ERROR");
    }
  }, [id]);

  const saveNote = async () => {
    setSaveStatus("LOADING");
    const response = await fetch(`/notes/${note.id}`, {
      method: "PUT",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setSaveStatus("SAVED");
      onSave(note);
    } else {
      setSaveStatus("ERROR");
    }
  };

  const deleteNote = async () => {
    const response = await fetch(`/notes/${note.id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setShowDeletionModal(false);
      onDelete(note.id);
      navigate("/");
    }
  };

  useEffect(() => {
    setSaveStatus("IDLE");
    fetchNote();
  }, [id, fetchNote]);

  if (getStatus === "LOADING") {
    return (
      <FullHeightAndWidthCentered>
        <Loader />
      </FullHeightAndWidthCentered>
    );
  }

  if (getStatus === "ERROR") {
    return (
      <FullHeightAndWidthCentered>
        <ErrorMessage>404 : la note {id} n'existe pas.</ErrorMessage>
      </FullHeightAndWidthCentered>
    );
  }

  return (
    <>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          saveNote();
        }}
      >
        <Title
          type="text"
          value={note ? note.title : ""}
          onChange={(event) => {
            setSaveStatus("IDLE");
            setNote({
              ...note,
              title: event.target.value,
            });
          }}
        />
        <Content
          value={note ? note.content : ""}
          onChange={(event) => {
            setSaveStatus("IDLE");
            setNote({
              ...note,
              content: event.target.value,
            });
          }}
        />
        <Actions>
          <SaveAndStatus>
            <PrimaryButton>Enregistrer</PrimaryButton>
            {saveStatus === "SAVED" ? (
              <IconAndLabel>
                <FiCheck />
                Enregistré
              </IconAndLabel>
            ) : saveStatus === "ERROR" ? (
              <ErrorMessage>Erreur lors de la sauvegarde</ErrorMessage>
            ) : saveStatus === "LOADING" ? (
              <Loader />
            ) : null}
          </SaveAndStatus>
          <DangerButton
            type="button"
            onClick={() => {
              setShowDeletionModal(true);
            }}
          >
            <FiTrash />
          </DangerButton>
        </Actions>
      </Form>
      {showDeletionModal && (
        <Modal>
          <Dialog
            content={"Voulez-vous supprimer la note ?"}
            buttons={
              <>
                <Button
                  onClick={() => {
                    setShowDeletionModal(false);
                  }}
                >
                  Annuler
                </Button>
                <DangerButton onClick={deleteNote}>Supprimer</DangerButton>
              </>
            }
          />
        </Modal>
      )}
    </>
  );
};

export default Note;
