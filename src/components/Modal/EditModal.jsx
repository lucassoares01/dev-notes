import { useState } from "react";
import { Backdrop } from "./Modal.styled";
import { FaTimesCircle } from "react-icons/fa"

const EditModal = (props) => {
    const [title, setTitle] = useState(props.dataToEdit.title)
    const [content, setContent] = useState(props.dataToEdit.content)
    const [color, setColor] = useState('yellow')

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const contentChangeHandler = (event) => {
        setContent(event.target.value)
    }

    const submitFormHandler = (event) => {
        event.preventDefault(event.target.value)
        props.onNewData(props.dataToEdit.id, title, content, color)
    }

    let buttons = document.querySelectorAll('.select-color');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');        
        });
    });

    return (
        <Backdrop>
            <form onSubmit={submitFormHandler}>
                <FaTimesCircle className="close-modal" onClick={props.onCloseEditModal}/>
                <div className="form-control">
                    <label className="title">Titulo da nota:</label>
                    <input type="text" onChange={titleChangeHandler} maxLength='40' defaultValue={props.dataToEdit.title}/>
                </div>
                <div className="form-control">
                    <label className="content">Conteudo da nota:</label>
                    <textarea cols="30" rows="10" onChange={contentChangeHandler} maxLength='180' defaultValue={props.dataToEdit.content}/>
                </div>
                <div className="colors">
                    <div className="select-color yellow-note" onClick={() => setColor('yellow')}></div>
                    <div className="select-color cyan-note" onClick={() => setColor('cyan')}></div>
                    <div className="select-color pink-note" onClick={() => setColor('pink')}></div>
                    <div className="select-color orange-note" onClick={() => setColor('orange')}></div>
                    <div className="select-color green-note" onClick={() => setColor('yellowgreen')}></div>
                </div>
                <input value="Editar Nota" className="create-note" type="submit" />
            </form>
        </Backdrop>
    )
}

export default EditModal;