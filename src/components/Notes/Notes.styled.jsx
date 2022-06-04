import styled from "styled-components";

export const NotesArea = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
    color: #223;

    .note{
        width: 380px;
        height: 380px;
        border-radius: 10px;
        text-align: center;
        display: flex;
        flex-direction: column;
        word-break:break-all;
        padding: 0px 20px;
    }

    .note-title{
        display: flex;
        margin-top: 10px;
        height: 60px;
        justify-content: center;
        word-break:break-all;
    }

    .note-content{
        height: 260px;
        display: flex;
        justify-content: center;
        align-items: center;
        word-break:break-all;
        font-size: 18px;
        font-weight: 400;
        max-width: 100%;
    }

    .green{ background: yellow; }
    .cyan{ background: cyan; }

    .note-bottom{
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 5px 0px;
        font-size: 20px;
        height: 60px;
    }

    .icon{
        cursor: pointer;
        opacity: 0.5;
    }

    .bottom-left{
        flex: 1;
        color: gray;
        opacity: 0.8;
        font-size: 16px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3px;
    }

    .bottom-right{
        flex: 1;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .icon:hover{
        opacity: 1;
        transition: 0.3s;
    }

    .remove:hover{
        color: red;
    }

    .edit:hover{
        color: blue;
    }
`