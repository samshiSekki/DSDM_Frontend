/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react';
import MainLists from '../../components/Main/MainLists';
import MainRecommend from '../../components/Main/MainRecommend';

const Main = () => {
    return(
        <div css={css`
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: center;
        `}>
            <MainRecommend/>
            <MainLists/>
        </div>

    )
}

export default Main;