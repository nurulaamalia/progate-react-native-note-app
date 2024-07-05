import React, { useState } from 'react';
import Home from './src/screens/home';
import AddNote from './src/screens/addNote';
import EditNote from './src/screens/editNote';

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  editNote,
  deleteNote,
  currentNote,
  setCurrentNote,
}) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          setCurrentNote={setCurrentNote}
          deleteNote={deleteNote}
        />
      );
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return <EditNote note={currentNote} setCurrentPage={setCurrentPage} updateNote={editNote} />;
    default:
      return <Home />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);
  const [currentNote, setCurrentNote] = useState(null);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title,
        desc,
      },
    ]);
  };

  const editNote = (id, title, desc) => {
    const updatedNotes = noteList.map(note =>
      note.id === id ? { ...note, title, desc } : note
    );
    setNoteList(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = noteList.filter(note => note.id !== id);
    setNoteList(updatedNotes);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      editNote={editNote}
      deleteNote={deleteNote}
      currentNote={currentNote}
      setCurrentNote={setCurrentNote}
    />
  );
};

export default App;
