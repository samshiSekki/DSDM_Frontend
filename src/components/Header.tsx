/** @jsxImportSource @emotion/react */

import React from "react"
import imgHeader from '../assets/header/img-header.png';
import { jsx, css } from '@emotion/react'

const headerStyle = css`
    width: 912px;
    height: 80px;
    padding-top: 95px;
`
const headContainer = css`
    background-color: white;
    width: 100vw;
    height: 247px;
    position: fixed;
    z-index: 1000;
    text-align: center;
`;

const Header = () => {
    return (
        <div css={headContainer}>
            <img css={headerStyle} src={imgHeader}/>
        </div>
    )
}

export default Header;