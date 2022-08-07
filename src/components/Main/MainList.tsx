/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

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

function MainList (club: ClubDatasetsType) {
    const { clubName, field, recruitment, period, week, amount, process, activation } = club;

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
                return <div>{value}</div>
            })}
        </div>
    )
}

export default MainList;