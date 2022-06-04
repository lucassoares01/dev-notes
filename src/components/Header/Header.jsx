import { StyledHeader } from "./Header.styled";

const Header = (props) => {
    const changeFilterHandler = (event) => {
        props.onReciveData(event.target.value)
    }

    return (
        <StyledHeader>
            <div className="header-top">
                <h1>Dev Notes</h1>
                <button className="add-button" onClick={props.onOpenModal}>+</button>
            </div>
            <div className="header-bottom">
                <input type="text" className="search-note" placeholder="Achar a Nota" onChange={changeFilterHandler} />
            </div>
        </StyledHeader>
    )
}

export default Header