/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react';
import MainFilter from '../../components/Main/MainFilter';
import MainLists from '../../components/Main/MainLists';
import MainRecommend from '../../components/Main/MainRecommend';
import MainTodayList from '../../components/Main/MainTodayList';

const Main = () => {
    return(
        <div css={css`
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            align-self: center;
            justify-content: center;
        `}>
            {/* <MainRecommend/> */}
            <MainTodayList/>
            <div css={css`
                width: 1700px;
                display: flex;
                flex-direction: column;
                align-items: center;
                align-self: center;
                justify-content: center;  
            `}>
                {/* <MainRecommend/> */}
                <MainFilter/>
                <MainLists/>
            </div>
        </div>

    )
}

export default Main;