import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { darkTheme, GlobalStyle } from "./GlobalStyle";
import {
  Side,
  Main,
  FullHeightAndWidthCentered,
  LoaderWrapper,
} from "./App.styled";
import { NoteList } from "./NoteList/NoteList.styled";
import LinkToNote from "./LinkToNote";
import Note from "./Note";
import { Loader } from "./Loader/Loader.styled";
import SideActions from "./SideActions";

function App() {
  const [profileName, setProfileName] = useState("");
  const [notes, setNotes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNotes = async () => {
    const response = await fetch("/notes");
    const notes = await response.json();
    setIsLoading(false);
    setNotes(notes);
  };

  const fetchProfile = async () => {
    const response = await fetch("/profile");
    const profile = await response.json();
    setProfileName(profile.name);
  };

  const updateNote = (noteToUpdate) => {
    setNotes(
      notes.map((note) => (note.id === noteToUpdate.id ? noteToUpdate : note))
    );
  };

  const deleteNote = (idToDelete) => {
    const filtered = notes.filter((note) => note.id !== idToDelete);
    console.log({ idToDelete, filtered });
    setNotes(filtered);
  };

  useEffect(() => {
    fetchNotes();
    fetchProfile();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Side>
        <SideActions
          profileName={profileName}
          onProfileUpdate={setProfileName}
        />
        {isLoading && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
        {notes && (
          <NoteList>
            {notes.map((note) => (
              <li key={note.id}>
                <LinkToNote id={note.id} title={note.title} />
              </li>
            ))}
          </NoteList>
        )}
      </Side>
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <FullHeightAndWidthCentered>
                {!isLoading && "Sélectionnez une note pour l'éditer"}
              </FullHeightAndWidthCentered>
            }
          />
          <Route
            path="/notes/:id"
            element={<Note onSave={updateNote} onDelete={deleteNote} />}
          />
        </Routes>
      </Main>
    </ThemeProvider>
  );
}

export default App;
