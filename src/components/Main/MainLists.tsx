/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { jsx, css } from '@emotion/react';
import MainList from './MainList';
import axios from 'axios';
import { BrowserView, MobileView } from 'react-device-detect'

type ClubType = Record<string, any>

type ClubDatasetsType = {
    name: string
    clubId: number
    field: string
    recruiting: string
    period: string
    activityDay: string
    membershipFee: string
    selectionProcess: string
    online: string
    subCategory: any
}

// const ClubDatasets : ClubDatasetsType[] = [
//     {
//         clubName: '한국대학생IT경영학회 KUSITMS',
//         field: '기획, 개발, 디자인',
//         recruitment: '모집중',
//         period: '3개월',
//         week: '토요일',
//         amount: 7,
//         process: '서류평가 > 면접',
//         activation: '온/오프라인'
//     },
//     {
//         clubName: '한국대학생IT경영학회 KUSITMS',
//         field: '기획, 개발, 디자인',
//         recruitment: '모집중',
//         period: '3개월',
//         week: '토요일',
//         amount: 7,
//         process: '서류평가 > 면접',
//         activation: '온/오프라인'
//     },
//     {
//         clubName: '한국대학영학회 KUSITMS',
//         field: '기획, 개발, 디자인',
//         recruitment: '모집중',
//         period: '3개월',
//         week: '토요일',
//         amount: 7,
//         process: '서류평가 > 면접',
//         activation: '온/오프라인'
//     }
// ]

function MainLists() {
    const [clubs, setClubs] = useState<ClubType>({});

    const getClubLists = async () => {
        // async await 함수를 사용할 때, 

        try {
            const data = await axios.get('http://43.200.156.125:5000/clubs');
            setClubs(data.data);
        } catch {
            // 오류 발생시 실행
        }
    }

    useEffect(() => {
        getClubLists();

    },[]);

    return(
        <>
        <BrowserView>
        <div css={css`
            width: 1020px;
            left: 50%;
            transform: translateX(-50%);
            height: inherit;
            background: #F8F8F8;
            border-radius: 30px;
            position: relative;

            padding: 0px 80px;

            margin-top: 24px;

            display: flex;
            flex-direction: column;
        `}>
            {Object.keys(clubs).map((key: string, index: number) => {
                return (
                    <>
                        <div css={css`
                            margin-top: -51px;
                            margin-left: -55px;
                            width: 1135px;
                        `}>
                            <p css={css`
                                font-size: 16px;
                                line-height: 18px;
                            `}>{key}
                            </p>
                            <div css={css`
                                border-bottom: 1.5px solid #241E19;
                                height: 0px;
                            `}/>
                        </div>
                        {clubs[key].map((club: ClubDatasetsType, index: number) => {
                            return <MainList key={index} {...club}/>
                        })}
                    </>
                )}
            )}
             <div css={css`
                border-bottom: 1.5px solid #241E19;
                width: 1135px;
                height: 0px;
                margin-left: -55px;
                margin-top: -1px;
                `}/>
        </div>
        </BrowserView>
        <MobileView>
            <div css={css`
                background: #F8F8F8;
                border-radius: 8px;
                padding: 23px 24px;
                
                display: flex;
                align-items: center;
                flex-direction: column;
            `}>
                {Object.keys(clubs).map((key: string, index: number) => {
                return (
                    <div>
                        <div css={css`
                        margin-bottom: 27px;
                        position: relative;
                        `}>
                            <div css={css`
                                height: calc(100% - 21px);
                                width: 0;
                                border-right: 1px solid;
                                position: absolute;
                                top: 21px;
                            `}/>
                            <p css={css`
                                font-size: 10px;
                                line-height: 11px;
                            `}>{key}
                            </p>
                            {clubs[key].map((club: ClubDatasetsType, index: number) => {
                                return <MainList key={index} {...club}/>
                            })}
                        </div>
                    </div>
                )}
            )}
            </div>

        </MobileView>
        </>
    )

}

export default MainLists;