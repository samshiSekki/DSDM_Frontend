/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MainFilter from '../../components/Main/MainFilter';
import MainLists from '../../components/Main/MainLists';
import MainTodayList from '../../components/Main/MainTodayList';

type ClubType = Record<string, any>

const Main = () => {
    const [clubs, setClubs] = useState<ClubType>({});

    const getClubLists = async () => {
        // async await 함수를 사용할 때, 

        try {
            const data = await axios.get(`http://43.200.156.125:5000/clubs`);
            setClubs(data.data);
        } catch {
            // 오류 발생시 실행
        }
    }

    useEffect(() => {
        getClubLists();

    },[]);

    return(
        <div css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            align-self: center;
            justify-content: center;
        `}>
            <MainTodayList/>
            <div css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                align-self: center;
                justify-content: center;  
            `}>
                <MainFilter clubs={clubs} setClubs={setClubs}/>
                <MainLists clubs={clubs}/>
            </div>
        </div>

    )
}

export default Main;