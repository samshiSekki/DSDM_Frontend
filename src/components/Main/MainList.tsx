/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

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

function MainList (club: ClubDatasetsType) {
    const { name, subCategory, recruiting, period, activityDay, membershipFee, selectionProcess, online } = club;
    // const [club, setClub] = useState(club);
    const navigate = useNavigate();

    function onClickSubListPage (id: number){
        // 상세 페이지 이동
        navigate(`/detail/${id}`);
    }

    return (
        <div css={css`
            display: flex;
            align-items: center;
            width: 100%;

            height: inherit;
            padding: 40px 0px;

            font-size: 20px;
            line-height: 23px;
            color: #241E19;

            border-bottom: 1.5px solid #DBDBDB;

            cursor: pointer;
        `}
            onClick={() => onClickSubListPage(club.clubId)}
        >
            <div css={css`
                font-weight: 700;
                font-size: 24px;
                line-height: 27px;
                width: 19%;
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
                    font-size: 14px;
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
            <div css={css`width: 8%;`}>{recruiting}</div>
            <div css={css`width: 7%;`}>{period}</div>
            <div css={css`width: 12%; padding: 0px 30px;`}>{activityDay}</div>
            <div css={css`width: 10%; padding: 0px 10px;`}>{membershipFee}</div>
            <div css={css`width: 15%;`}>{selectionProcess}</div>
            <div css={css`width: 10%;`}>{online}</div>
        </div>
    )
}

export default MainList;