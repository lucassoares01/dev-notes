import styled from "styled-components";

export const Backdrop = styled.div`
    position: fixed;
    min-width: 100vw;
    min-height: 100vh;
    background: rgba(2, 2, 3, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999999;

    form{
        display: flex;
        flex-direction: column;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 10px;
    }

    .close-modal{
        font-size: 35px;
        transition: 0.3s;
        cursor: pointer;
        align-self: flex-end;
    }

    .close-modal:hover{
        color: red;
    }

    .form-control{
        display: flex;
        flex-direction: column;
    }

    .form-control label{
        margin-bottom: 15px;
    }

    .content{
        margin-top: 30px;
    }

    .form-control input, .form-control textarea{
        border: 1.5px solid  gray;
        transition: 0.3s;
        border-radius: 5px;     
        resize: none;
        padding: 5px 10px;
        font-size: 18px;
    }
    .form-control input:focus, .form-control textarea:focus{
        border: 1.5px solid #00e0e0;
        outline: none;
    }

    .create-note{
        border: none;
        outline: none;
        background: #223;
        color: #fff;
        font-size: 20px;
        margin-top: 30px;
        border-radius: 5px;
        padding: 5px 30px;
        transition: 0.4s;
    }

    .create-note:hover{
        background: #00e0e0;
        cursor: pointer;
    }

    small{
        align-self: flex-end;
        margin-top: 8px;
    }

    .colors{
        display: flex;
        justify-content: center;
        gap: 40px;
        margin-top: 40px;
    }

    .select-color{
        width: 42px;
        height: 42px;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.1s;
    }

    .active,
    .select-color:hover{
        border: 5px solid #223;
    }

    .yellow-note{
        background: yellow;
    }
    .pink-note{
        background: pink;
    }
    .cyan-note{
        background: cyan;
    }
    .orange-note{
        background: orange;
    }
    .green-note{
        background: yellowgreen;
    }
`