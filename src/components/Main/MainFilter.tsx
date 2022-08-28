/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import MainFilterModal from './MainFilterModal';
import deleteIcon from '../../assets/main/img-delete-tag.svg';

const FILTER_TEXT = '이런 것만 보고싶어요!'
const Filter_INSIDE_TEXT = 'filter'

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

    border: 1px solid #14B390;
    color: #14B390;

    height: fit-content;
    gap: 8px;

`

const MainFilter = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [filters, setFilters] = useState<string[]>([]);

    const onClickDeleteFilter = (filterObj: string) => {
        setFilters((filters: string[]) => filters.filter((element: string) => element !== filterObj));
    }
    
    return (
        <>
        {modalVisible && <MainFilterModal modalVisible={modalVisible} setModalVisible={setModalVisible} filters={filters} setFilters={setFilters}/>}
        <div css={css`
            display: flex;
            width: 100%;
            justify-content: space-between;
        `}>
            <div css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                align-self: flex-start;
                gap: 16px;
                margin-left: 130px;
                margin-top: 53px;
            `}>
                <span css={css`
                    font-size: 22px;
                    line-height: 25px;
                `}>{FILTER_TEXT}
                </span>
                <div css={css`
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 23px;

                    text-align: center;

                    color: #14B390;
                    
                    border: 1px solid #14B390;
                    width: fit-content;
                    border-radius: 10px;
                    padding: 4px 8px;
                    cursor: pointer;
                `}
                    onClick={() => setModalVisible(true)}>
                    {Filter_INSIDE_TEXT}
                </div>
            </div>
            <div css={css`
                display: flex;
                width: 400px;
                flex-wrap: wrap;
                gap: 12px;
                margin-top: auto;
            `}>
                {filters.map((filter: string, index: number) => {
                    return (
                        <FilterSelected  onClick={() => onClickDeleteFilter(filter)}>
                            {filter}
                            <img src={deleteIcon}/>
                        </FilterSelected>
                    )
                })}
            </div>
        </div>

        </>
    )
}

export default MainFilter;