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
            <MainFilter/>
            <p css={css`
                font-size: 16px;
                line-height: 18px;
                margin-left: -1900px;
            `}>IT</p>
            <div css={css`
                border-bottom: 1.5px solid #241E19;
                width: 1900px;
                height: 0px;
            `}/>
            <MainLists/>

        </div>

    )
}

export default Main;