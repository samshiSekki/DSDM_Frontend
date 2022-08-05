/** @jsxImportSource @emotion/react */

import React from "react"
import imgHeader from '../assets/header/img-header.png';
import { jsx, css } from '@emotion/react'

const headerStyle = css`
    width: 912px;
    height: 80px;

    padding-top: 95px;
    position: fixed;
    left: calc(100vw - 83%);
`

const Header = () => {
    return (
        <img css={headerStyle} src={imgHeader}/>
    )
}

export default Header;