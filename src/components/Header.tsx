/** @jsxImportSource @emotion/react */

import React from "react"
import imgHeader from '../assets/header/img-header.png';
import { jsx, css } from '@emotion/react'
import { useNavigate } from "react-router-dom";

const headerStyle = css`
    width: 730px;
    height: auto;
    padding-top: 53px;
    cursor: pointer;
`
const headContainer = css`
    //background-color: white;
    width: 100vw;
    height: 181px;
    z-index: 1000;
    text-align: center;
`;

const Header = () => {

    const navigate = useNavigate();

    const onClickMain = () => {
        navigate(`/`);
    }
    return (
        <div css={headContainer}>
            <img css={headerStyle} src={imgHeader} onClick={onClickMain}/>
        </div>
    )
}

export default Header;