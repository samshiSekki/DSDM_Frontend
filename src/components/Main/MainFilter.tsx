/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react';

const FILTER_TEXT = '이런 것만 보고싶어요!'
const Filter_INSIDE_TEXT = 'filter'

const MainFilter = () => {
    return (
        <div css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            align-self: flex-start;
            gap: 16px;
            margin-left: 300px;
            margin-top: 200px;
        `}>
            <span css={css`
                font-size: 22px;
                line-height: 25px;
            `}>{FILTER_TEXT}
            </span>
            <div css={css`
                font-weight: 700;
                font-size: 20px;
                line-height: 23px;

                text-align: center;

                color: #14B390;
                
                border: 1px solid #14B390;
                width: fit-content;
                border-radius: 10px;
                padding: 4px 8px;
            `}>
                {Filter_INSIDE_TEXT}
            </div>
        </div>
    )
}

export default MainFilter;