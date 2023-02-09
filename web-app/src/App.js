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

function App() {
  const [notes, setNotes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNotes = async () => {
    const response = await fetch("/notes");
    const notes = await response.json();
    setIsLoading(false);
    setNotes(notes);
  };

  const updateNote = (noteToUpdate) => {
    setNotes(
      notes.map((note) => (note.id === noteToUpdate.id ? noteToUpdate : note))
    );
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Side>
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
          <Route path="/notes/:id" element={<Note onSave={updateNote} />} />
        </Routes>
      </Main>
    </ThemeProvider>
  );
}

export default App;
