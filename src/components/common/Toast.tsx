/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {MobileView, BrowserView} from "react-device-detect";

export default function Toast({msg = "메시지"}){
    return (
        <>
            <BrowserView>
                <div css={toast}>{msg}</div>
            </BrowserView>

            <MobileView>
                <div css={ModalContainer}>
                    <div css={mobileToast}>{msg}</div>
                </div>
            </MobileView>
        </>
    )
}

const toast = css`
    position: fixed;
    top: 40%;
    left: 41.5vw;
    width: 17vw;
    height: 63px;
    background: #14B390;
    opacity: 0.9;
    border-radius: 8px;

    line-height: 63px;
    text-align: center;
    font-weight: 700;
    font-size: 19.2px;
    color: #FFFFFF;
    z-index: 10000;
`;

const mobileToast = css`
    position: fixed;
    top: 40%;
    width: 251px;
    height: 45px;
    background: #14B390;
    opacity: 0.9;
    border-radius: 8px;

    line-height: 45px;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;
    z-index: 10000;

    margin: auto;
`;

const ModalContainer = css`
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    justify-content: center;
    align-items: center;
    font-family: NanumSquare;
`;