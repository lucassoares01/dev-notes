import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    padding-top: 100px;


    .header-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .add-button{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        color: #fff;
        background: #223;
        border-radius: 10px;
        width: 80px;
        height: 45px;
        outline: none;
        border: none;
        transition: 0.3s;
    }

    .add-button:hover{
        background: #00e0e0;
        cursor: pointer;
    }

    .search-note{
        width: 100%;
        background: #ebebeb;
        outline: none;
        border: none;
        font-size: 18px;
        font-weight: 400;
        padding: 10px 20px;
        border-radius: 10px;
        margin-top: 15px;
    }
`