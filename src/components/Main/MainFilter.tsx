/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import MainFilterModal from './MainFilterModal';
import deleteIcon from '../../assets/main/img-delete-tag.svg';
import { BrowserView, MobileView } from 'react-device-detect'

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

const MobileFilterSelected = styled.div`
    font-size: 6px;
    line-height: 7px;

    text-align: center;
    display: flex;

    width: fit-content;
    border-radius: 20px;
    padding: 4px 4px;
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
            <BrowserView>
            <div css={css`
            display: flex;
            width: 1000px;
            justify-content: space-between;
            
            margin-top: 53px;
            margin-bottom: 10px;
        `}>
            <div css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                align-self: flex-start;
                gap: 16px;
            `}>
                <span css={css`
                    font-size: 20px;
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
            </BrowserView>
            <MobileView>
            <div css={css`
            display: flex;
            width: 335px;
            justify-content: space-between;
            
            margin-bottom: 14px;
        `}>
            <div css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                align-self: flex-start;
                gap: 7px;
            `}>
                <span css={css`
                    font-size: 10px;
                    line-height: 10px;
                `}>{FILTER_TEXT}
                </span>
                <div css={css`
                    font-weight: 700;
                    font-size: 10px;
                    line-height: 10px;

                    text-align: center;

                    color: #14B390;
                    
                    border: 1px solid #14B390;
                    width: fit-content;
                    border-radius: 5px;
                    padding: 3px 4px;
                    cursor: pointer;
                `}
                    onClick={() => setModalVisible(true)}>
                    {Filter_INSIDE_TEXT}
                </div>
            </div>
            <div css={css`
                display: flex;
                width: 200px;
                flex-wrap: wrap;
                gap: 8px;
                margin-top: auto;
                justify-content: flex-end;  
            `}>
                {filters.map((filter: string, index: number) => {
                    return (
                        <MobileFilterSelected  onClick={() => onClickDeleteFilter(filter)}>
                            {filter}
                            <img css={css`width: 4px; height: 4px;`} src={deleteIcon}/>
                        </MobileFilterSelected>
                    )
                })}
            </div>
            </div>

            </MobileView>
        </>
    )
}

export default MainFilter;