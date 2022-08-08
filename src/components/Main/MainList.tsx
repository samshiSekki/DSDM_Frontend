/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react"

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

function MainList (club: ClubDatasetsType) {
    // const { name, field, recruitment, period, week, amount, process, activation } = club;
    // const [club, setClub] = useState(club);

    function onClickSubListPage (){
        // 상세 페이지 이동
        alert('hi')
    }

    return (
        <div css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;

            height: 105px;

            font-size: 20px;
            line-height: 23px;
            color: #241E19;

            border-bottom: 1.5px solid #DBDBDB;

            cursor: pointer;
        `}
            onClick={onClickSubListPage}
        >
            {Object.entries(club).map(([key, value]) => {
                if (key === 'name') {
                    return <div css={css`width: 410px;`}>{value}</div>}
                if (key === 'subCategory') {
                    return;
                }
                if (key === 'clubId') {
                    return;
                }
                return <div>{value}</div>}
            )}
        </div>
    )
}

export default MainList;