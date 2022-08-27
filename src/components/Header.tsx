/** @jsxImportSource @emotion/react */

import React from "react"
import imgHeader from '../assets/header/img-header.png';
import { jsx, css } from '@emotion/react'
import { useNavigate } from "react-router-dom";

const headerStyle = css`
    width: 912px;
    height: 80px;
    padding-top: 95px;
    
    cursor: pointer;
`
const headContainer = css`
    //background-color: white;
    width: 100vw;
    height: 247px;
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