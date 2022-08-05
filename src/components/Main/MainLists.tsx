/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';
import MainList from './MainList';

type ClubDatasetsType = {
    clubName: string
    field: string
    recruitment: string
    period: string
    week: string
    amount: number
    process: string
    activation: string
}

const ClubDatasets : ClubDatasetsType[] = [
    {
        clubName: '한국대학생IT경영학회 KUSITMS',
        field: '기획, 개발, 디자인',
        recruitment: '모집중',
        period: '3개월',
        week: '토요일',
        amount: 7,
        process: '서류평가 > 면접',
        activation: '온/오프라인'
    },
    {
        clubName: '한국대학생IT경영학회 KUSITMS',
        field: '기획, 개발, 디자인',
        recruitment: '모집중',
        period: '3개월',
        week: '토요일',
        amount: 7,
        process: '서류평가 > 면접',
        activation: '온/오프라인'
    },
    {
        clubName: '한국대학생IT경영학회 KUSITMS',
        field: '기획, 개발, 디자인',
        recruitment: '모집중',
        period: '3개월',
        week: '토요일',
        amount: 7,
        process: '서류평가 > 면접',
        activation: '온/오프라인'
    }
]

function MainLists() {
    const clubs = useState(ClubDatasets);

    return(
        <div css={css`
            width: 1000px;
            margin: 110px 0px;
            height: 580px;
            background: #F8F8F8;
            border-radius: 30px;

            border-top: 1.5px solid #241E19;
            border-bottom: 1.5px solid #241E19;

            padding: 0px 130px;
        `}>
            {ClubDatasets.map((club: ClubDatasetsType, index: number) => {
                return <MainList key={index} {...club}/>
            })}
        </div>
    )

}

export default MainLists;