/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Toast({msg = "메시지"}){
    return (
            <div css={toast}>{msg}</div>
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