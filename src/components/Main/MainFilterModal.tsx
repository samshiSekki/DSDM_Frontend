/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import Modal from "../common/Modal"
import styled from "@emotion/styled";
import { useState } from "react";

type FilterType = Record<string, string[]>

interface MainFilterModalProps {
    modalVisible: boolean
    setModalVisible: (modalVisible: boolean) => void
    filters: string[]
    setFilters: any
}

const FilterDataset : FilterType = {
    '분야' : ['IT', '광고/마케팅', '경제/경영'],
    '모집 여부' : ['모집중', '모집완료'],
    '활동 기간' : ['3개월 이하', '4-6개월', '7개월-1년', '1년 이상'],
    '활동 요일' : ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
    '온/오프라인' : ['온라인', '오프라인']
}

const FilterSelected = styled.div`
    font-size: 16px;
    line-height: 16px;

    text-align: center;
    display: flex;

    width: fit-content;
    border-radius: 20px;
    padding: 8px 8px;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &.selected{
        border: 1px solid #14B390;
        color: #14B390;
    }

    &.notSelected{                              
        border: 1px solid #DDDDDD;
        color: #241E19;
    }
`

const MainFilterModal = ({modalVisible, setModalVisible, filters, setFilters} : MainFilterModalProps) => {

    const onClickFilter = (filterObj: string) => {
        if (filters.includes(filterObj)) {
            setFilters((filters: string[]) => filters.filter((element: string) => element !== filterObj))
            return;
        }
        setFilters((filters: string[]) => {return [...filters,filterObj]});
    }

    return (
        <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <div>
            {Object.keys(FilterDataset).map((key: string, index: number) => {
                return (
                    <>
                        <p css={css`
                            margin-bottom: 20px;
                            
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 20px;

                            color: #241E19;
                        `}>{key}
                        </p>
                        <div css={css`
                            display: flex;
                            align-items: center;
                            gap: 13px;

                            margin-bottom: 50px;
                        `}>
                            {FilterDataset[key].map((filterObj: string, index: number) => {
                                return (
                                    <FilterSelected className={filters.includes(filterObj) ? "selected" : "notSelected"} onClick={() => onClickFilter(filterObj)}>
                                        {filterObj}
                                    </FilterSelected>
                                )
                            })}
                        </div>
                    </>
                )
            })}
            <div css={css`
                display: flex;
                justify-content: center;

                margin-left: -20px;
            `}>
                <button css={css`
                    font-size: 24px;
                    line-height: 24px;

                    text-align: center;
                    display: flex;

                    width: 260px;
                    height: 80px;
                    border-radius: 10px;
                    padding: 8px 8px;
                    align-items: center;
                    justify-content: center;

                    cursor: pointer;

                    border: 1px solid #14B390;
                    color: #14B390;
                    background-color: #FFFFFF;
                `}
                onClick={() => setModalVisible(false)}>필터 적용하기</button>
            </div>
        </div>
        </Modal>
    )
}

export default MainFilterModal;