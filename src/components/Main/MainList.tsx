/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ReactComponent as RecruitingIcon } from '../../assets/main/icon-recruiting.svg';

import { BrowserView, MobileView } from 'react-device-detect'
import styled from "@emotion/styled";

type ClubDatasetsType = {
    name: string
    clubId: number
    recruiting: string
    period: string
    activityDay: string
    membershipFee: string
    selectionProcess: string
    online: string
    subCategory: any 
}

const NotRecruitingIcon = styled(RecruitingIcon)`
   path {
     fill: rgba(25, 30, 36, 0.54);
   }
`

function MainList (club: ClubDatasetsType) {
    const { name, subCategory, recruiting, period, activityDay, membershipFee, selectionProcess, online } = club;
    // const [club, setClub] = useState(club);
    const navigate = useNavigate();

    function onClickSubListPage (id: number){
        // 상세 페이지 이동
        navigate(`/detail/${id}`);
    }

    return (
        <>
        <BrowserView>
        <div css={css`
            display: flex;
            align-items: center;
            height: inherit;
            padding: 30px 0px;

            line-height: 23px;
            color: #241E19;

            border-bottom: 1.5px solid #DBDBDB;

            cursor: pointer;
        `}
            onClick={() => onClickSubListPage(club.clubId)}
        >
            <div css={css`
                font-weight: 700;
                font-size: 17px;
                line-height: 27px;
                width: 20%;
            `}>{name}
            </div>
            <div css={css`width: 27%; padding: 0px 30px;`}>
                <div>
                    {subCategory.map((category: any, index: number) => {
                    if (Object.keys(category).includes('개발')) {
                        return '개발'
                    }
                    if (Object.keys(category).includes('하이')) {
                        return '하이'
                    }
                    return category
                    }).join(', ')}
                </div>
                <div css={css`
                    font-size: 12px;
                    color: rgba(25, 30, 36, 0.54);
                `}>
                    {subCategory.map((category: any, index: number) => {
                    if (Object.keys(category).includes('개발')) {
                        return '개발 : ' + category['개발'].map((catobj : string) => catobj).join(', ')
                    }
                    if (Object.keys(category).includes('하이')) {
                        return '하이 : ' + category['하이'].map((catobj : string) => catobj).join(', ')
                    }
                    })}
                </div>
            </div>
            <div css={css`width: 7%;`}>{recruiting}</div>
            <div css={css`width: 7%; white-space: pre-line; word-break: keep-all;`}>{period}</div>
            <div css={css`width: 14%; padding: 0px 10px; white-space: pre-line; word-break: keep-all;`}>{activityDay}</div>
            <div css={css`width: 10%; padding: 0px 10px; white-space: pre-line; word-break: keep-all;`}>{membershipFee}</div>
            <div css={css`width: 15%;`}>{selectionProcess}</div>
            <div css={css`width: 10%;`}>{online}</div>
        </div>
        </BrowserView>
        <MobileView>
            <div css={css`
                width: 253px;
                background-color: #FFFFFF;
                padding: 18px 15px 16px 19px;
                margin-bottom: 7px;
            `}>
                {recruiting === '마감' ?
                <div css={css`
                font-size: 8px;
                line-height: 9px;
                color: rgba(25, 30, 36, 0.54);
            `}>
                 <NotRecruitingIcon/> 모집 {recruiting}
            </div>
            : 
            <div css={css`
            font-size: 8px;
            line-height: 9px;
            color: #14B390;
        `}>
            <RecruitingIcon/> {recruiting}
        </div>
            }
                <p css={css`
                font-weight: 700;
                font-size: 12px;
                line-height: 14px;
                /* identical to box height */
                margin: 0;
                margin: 8px 0px 7px 0px;


                color: #241E19;`
                }>{name}</p>

                  <div css={css`display: flex; gap: 4px;`}>
                    {subCategory.map((category: any, index: number) => {
                    if (Object.keys(category).includes('개발')) {
                        return <div css={css`
                        background: #EAEBFF;
                        border-radius: 2px;
                        color: #7176FA;
                        padding: 2px 3px;

                        font-size: 10px;
                        line-height: 10px;

                        width: fit-content;
                        `}>
                            개발
                            </div>
                    }
                    if (category === '기획') {
                        return <div css={css`
                        background: #FFE1F1;
                        border-radius: 2px;
                        color: #DB6AA7;
                        padding: 2px 3px;

                        font-size: 10px;
                        line-height: 10px;

                        width: fit-content;
                        `}>
                            {category}
                            </div>
                    }
                    if (category === '디자인') {
                        return <div css={css`
                        background: #FFEFD1;
                        border-radius: 2px;
                        color: #F0A414;
                        padding: 2px 3px;

                        font-size: 10px;
                        line-height: 10px;

                        width: fit-content;
                        `}>
                            {category}
                            </div>
                    }
                    })}
                </div>
                <div css={css`
                    font-size: 8px;
                    line-height: 16px;
                    color: rgba(25, 30, 36, 0.54);
                    display: flex;
                    margin-top: 8px;

                    word-break: keep-all;
                `}>
                    {period} {'|'} {activityDay} {'|'} {membershipFee} {'|'} {selectionProcess} {'|'} {online}
                </div>
            
            </div>


        </MobileView>
        </>
    )
}

export default MainList;