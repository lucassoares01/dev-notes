import './App.css'
import Header from './components/Header/Header'
import Notes from './components/Notes/Notes'
import { Container } from './components/styles/Container.styled'
import Modal from './components/Modal/Modal'
import EditModal from './components/Modal/EditModal'
import { useState, useEffect } from 'react'

function App() {
  /*Saving data with LocasStorage*/
  const loadedTodos = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];

  const [notes, setNotes] = useState(loadedTodos);
  const [modal, setModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [dataToEdit, setDataToEdit] = useState()
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const json = JSON.stringify(notes);
    window.localStorage.setItem("notes", json);
  }, [notes]);
  /*Saving data with LocasStorage*/

  const closeModalHandler = () => setModal(false)
  const openModalHandler = () => setModal(true)
  const closeEditModalHandler = () => setEditModal(false)

  /*Days Array*/
  let arrDay = ['Domingo', 'Segunda-Feira',
    'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira',
    'Sexta-Feira', 'Sabado']

  /*Formating Minutes(Value < 10, add 0)*/
  let formatMinutes = () => {
    let minutes = new Date().getMinutes()
    if (minutes < 10) return `0${minutes}`
    if (minutes >= 10) return minutes
  }

  let formatedDate = `${arrDay[new Date().getDay()]}, ${new Date().getHours()}:${formatMinutes()}`

  const addNote = (uTitle, uContent, uColor) => {
    /*New Note Object*/
    let newNote = {
      id: Date.now(),
      title: uTitle,
      content: uContent,
      color: uColor,
      noteDate: formatedDate
    }
    setNotes((prevNote) => ([...prevNote, newNote]))
    closeModalHandler()
  }

  /*Remove Notes Function*/
  const removeNote = (ID) => {
    let updatedNotes = [...notes].filter((note) => {
      return note.id !== ID
    })
    setNotes(updatedNotes)
  }

  const editNote = (ID) => {
    setEditModal(!editModal)

    let noteToEdit = [...notes].find((note) => {
      return note.id === ID
    })

    let currentData = {
      id: noteToEdit.id,
      title: noteToEdit.title,
      content: noteToEdit.content,
      color: noteToEdit.color,
      noteDate: noteToEdit.noteDate
    }

    setDataToEdit(currentData)
  }

  const changeNoteContent = (ID, newTitle, newContent, newColor) => { // Valores para substituir
    setEditModal(!editModal)

    const newNoteContent = {
      id: ID,
      title: newTitle,
      content: newContent,
      color: newColor,
      noteDate: formatedDate
    }

    const noteToChange = [...notes].map((note) => {
      if (note.id != ID) {
        return note

      } else if (note.id === ID) {
        let newNote = Object.assign(note, newNoteContent)
        return newNote
      }
    })

    setNotes(noteToChange)
  }

  /*Receiveing filter term*/
  const filterNotes = (searchTerm) => {
    let dataSearch = searchTerm
    setFilter(dataSearch)
  }


  return (
    <>
      {editModal && <EditModal onCloseEditModal={closeEditModalHandler} dataToEdit={dataToEdit} onNewData={changeNoteContent}></EditModal>}
      {modal && <Modal onAddNote={addNote} onCloseModal={closeModalHandler}></Modal>}
      <Container>
        <Header onOpenModal={openModalHandler} onReciveData={filterNotes} />
        <Notes items={notes} onRemove={removeNote} onFilter={filter} onEdit={editNote} />
      </Container>
    </>
  )
}

export default App
