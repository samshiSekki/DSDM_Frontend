/** @jsxImportSource @emotion/react */

import React from "react"
import imgHeader from '../assets/header/img-header.png';
import mobileImgHeader from '../assets/header/mobile-img-header.svg';
import { jsx, css } from '@emotion/react'
import { useNavigate } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";

const mobileHeaderStyle = css`
    width: 115px;
    height: 25px;
    padding-top: 40px;
    
    cursor: pointer;
`
const mobileHeadContainer = css`
    //background-color: white;
    width: 100%;
    z-index: 1000;
    text-align: center;
    display: flex;
    justify-content: center;
`;

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
        <div>
            <BrowserView>
            <div css={headContainer}>
                <img css={headerStyle} src={imgHeader} onClick={onClickMain}/>
            </div>
            </BrowserView>
            <MobileView>
                <div css={mobileHeadContainer}>
                    <img css={mobileHeaderStyle} src={mobileImgHeader} onClick={onClickMain}/>
                </div>
            </MobileView>
        </div>
    )
}

export default Header;