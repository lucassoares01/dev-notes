import { NotesArea } from "./Notes.styled";
import { FaTrash, FaEdit } from "react-icons/fa"

const Notes = (props) =>{
    return(
        <NotesArea>
            {props.items.filter((item)=>{
                if(props.onFilter == ""){
                    return item
                } else if(item.title.toLowerCase().includes(props.onFilter.toLowerCase())){
                    return item
                }
            }).map((item)=>{
                return(
                    <div className="note" style={{background: item.color}} key={item.id}>
                        <h2 className="note-title">{item.title}</h2>
                        <p className="note-content">{item.content}</p>
                        <div className="note-bottom">
                            <div className="bottom-left">{item.noteDate}</div>
                            <div className="bottom-right">
                                <FaEdit className="icon edit" onClick={() => props.onEdit(item.id)}/>
                                <FaTrash className="icon remove" onClick={() => props.onRemove(item.id)}/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </NotesArea>
    )
}

export default Notes;