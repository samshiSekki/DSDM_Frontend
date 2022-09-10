/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import Modal from "../common/Modal"
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { BrowserView, MobileView } from 'react-device-detect'
import axios from "axios";

type FilterType = string[]

interface MainFilterModalProps {
    modalVisible: boolean
    setModalVisible: (modalVisible: boolean) => void
    filters: string[]
    setFilters: any
    setClubs: any
}

const FieldFilterDataset : FilterType = ['IT', '광고', '기획', '경제/경영', '광고/마케팅', '건축', '어학', '기타', '발표', '문화/경영', '경영'];
const RecruitingFilterDataset : FilterType = ['모집중', '마감'];
const PeriodFilterDataset : FilterType = ['3개월 이하', '4-6개월', '7개월-1년', '1년 이상'];
const ActivityDayDataset : FilterType = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
const OnlineDataset : FilterType = ['온라인', '오프라인', '온/오프라인'];


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

const MobileFilterSelected = styled.div`
    font-size: 8px;
    line-height: 8px;

    text-align: center;
    display: flex;

    width: fit-content;
    border-radius: 20px;
    padding: 4px 4px;
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

const MainFilterModal = ({modalVisible, setModalVisible, fieldFilter, setFieldFilter, recruitingFilter, setRecruitingFilter, periodFilter, setPeriodFilter, activityDayFilter, setActivityDayFilter, onlineFilter, setOnlineFilter, setClubs, getClubLists} : any) => {

    const onClickFilter = (filterObj: string, filters: string[], setFilters: any) => {
        if (filters.includes(filterObj)) {
            setFilters((filters: string[]) => filters.filter((element: string) => element !== filterObj))
            return;
        }
        setFilters((filters: string[]) => {return [...filters,filterObj]});
    }

    useEffect(() => {
        getClubLists();

    },[fieldFilter, recruitingFilter, periodFilter, activityDayFilter, onlineFilter]);

    return (
        <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
            <BrowserView>
        <div css={css`position: relative;`}>
                    <>
                        <p css={css`
                            margin-bottom: 20px;
                            
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 20px;

                            color: #241E19;
                        `}>{'분야'}
                        </p>
                        <div css={css`
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            gap: 13px;
                            width: 500px;

                            margin-bottom: 30px;
                        `}>
                            {FieldFilterDataset.map((filterObj: string, index: number) => {
                                return (
                                    <FilterSelected className={fieldFilter.includes(filterObj) ? "selected" : "notSelected"} onClick={() => onClickFilter(filterObj, fieldFilter, setFieldFilter)}>
                                        {filterObj}
                                    </FilterSelected>
                                )
                            })}
                        </div>
                    </>
                    <>
                        <p css={css`
                            margin-bottom: 20px;
                            
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 20px;

                            color: #241E19;
                        `}>{'모집 여부'}
                        </p>
                        <div css={css`
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            gap: 13px;

                            margin-bottom: 30px;
                        `}>
                            {RecruitingFilterDataset.map((filterObj: string, index: number) => {
                                return (
                                    <FilterSelected className={recruitingFilter.includes(filterObj) ? "selected" : "notSelected"} onClick={() => onClickFilter(filterObj, recruitingFilter, setRecruitingFilter)}>
                                        {filterObj}
                                    </FilterSelected>
                                )
                            })}
                        </div>
                    </>
                    <>
                        <p css={css`
                            margin-bottom: 20px;
                            
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 20px;

                            color: #241E19;
                        `}>{'활동 기간'}
                        </p>
                        <div css={css`
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            gap: 13px;

                            margin-bottom: 30px;
                        `}>
                            {PeriodFilterDataset.map((filterObj: string, index: number) => {
                                return (
                                    <FilterSelected className={periodFilter.includes(filterObj) ? "selected" : "notSelected"} onClick={() => onClickFilter(filterObj, periodFilter, setPeriodFilter)}>
                                        {filterObj}
                                    </FilterSelected>
                                )
                            })}
                        </div>
                    </>
                    <>
                        <p css={css`
                            margin-bottom: 20px;
                            
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 20px;

                            color: #241E19;
                        `}>{'활동 요일'}
                        </p>
                        <div css={css`
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            gap: 13px;

                            margin-bottom: 30px;
                        `}>
                            {ActivityDayDataset.map((filterObj: string, index: number) => {
                                return (
                                    <FilterSelected className={activityDayFilter.includes(filterObj) ? "selected" : "notSelected"} onClick={() => onClickFilter(filterObj, activityDayFilter, setActivityDayFilter)}>
                                        {filterObj}
                                    </FilterSelected>
                                )
                            })}
                        </div>
                    </>
                    <>
                        <p css={css`
                            margin-bottom: 20px;
                            
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 20px;

                            color: #241E19;
                        `}>{'온/오프라인'}
                        </p>
                        <div css={css`
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            gap: 13px;

                            margin-bottom: 30px;
                        `}>
                            {OnlineDataset.map((filterObj: string, index: number) => {
                                return (
                                    <FilterSelected className={onlineFilter.includes(filterObj) ? "selected" : "notSelected"} onClick={() => onClickFilter(filterObj, onlineFilter, setOnlineFilter)}>
                                        {filterObj}
                                    </FilterSelected>
                                )
                            })}
                        </div>
                    </>
                <button css={css`
                    font-size: 16px;

                    text-align: center;
                    display: flex;
                    position: absolute;
                    top: 503px;
                    left: 445px;

                    width: inherit;
                    height: inherit;
                    border-radius: 8px;
                    padding: 4px 8px;
                    align-items: center;
                    justify-content: center;

                    cursor: pointer;

                    border: 1px solid #14B390;
                    color: #14B390;
                    background-color: #FFFFFF;
                `}
                onClick={() => setModalVisible(false)}>{'> 완료'}</button>
        </div>
        
        </BrowserView>
        <MobileView>
        <div css={css`position: relative;`}>
        <>
                        <p css={css`
                            
                            margin: 0;
                            margin-bottom: 10px;
                            
                            font-weight: 700;
                            font-size: 10px;
                            line-height: 11px;

                            color: #241E19;
                        `}>{'분야'}
                        </p>
                        <div css={css`
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            gap: 6px;

                            margin-bottom: 20px;
                        `}>
                            {FieldFilterDataset.map((filterObj: string, index: number) => {
                                return (
                                    <MobileFilterSelected className={fieldFilter.includes(filterObj) ? "selected" : "notSelected"} onClick={() => onClickFilter(filterObj, fieldFilter, setFieldFilter)}>
                                        {filterObj}
                                    </MobileFilterSelected>
                                )
                            })}
                        </div>
                    </>
                    <>
                    <p css={css`
                            
                            margin: 0;
                            margin-bottom: 10px;
                            
                            font-weight: 700;
                            font-size: 10px;
                            line-height: 11px;

                            color: #241E19;
                        `}>{'모집 여부'}
                        </p>
                        <div css={css`
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            gap: 6px;

                            margin-bottom: 20px;
                        `}>
                            {RecruitingFilterDataset.map((filterObj: string, index: number) => {
                                return (
                                    <MobileFilterSelected className={recruitingFilter.includes(filterObj) ? "selected" : "notSelected"} onClick={() => onClickFilter(filterObj, recruitingFilter, setRecruitingFilter)}>
                                        {filterObj}
                                    </MobileFilterSelected>
                                )
                            })}
                        </div>
                    </>
                    <>
                        <p css={css`
                            
                            margin: 0;
                            margin-bottom: 10px;
                            
                            font-weight: 700;
                            font-size: 10px;
                            line-height: 11px;

                            color: #241E19;
                        `}>{'활동 기간'}
                        </p>
                        <div css={css`
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            gap: 6px;

                            margin-bottom: 20px;
                        `}>
                            {PeriodFilterDataset.map((filterObj: string, index: number) => {
                                return (
                                    <MobileFilterSelected className={periodFilter.includes(filterObj) ? "selected" : "notSelected"} onClick={() => onClickFilter(filterObj, periodFilter, setPeriodFilter)}>
                                        {filterObj}
                                    </MobileFilterSelected>
                                )
                            })}
                        </div>
                    </>
                    <>
                    <p css={css`
                            
                            margin: 0;
                            margin-bottom: 10px;
                            
                            font-weight: 700;
                            font-size: 10px;
                            line-height: 11px;

                            color: #241E19;
                        `}>{'활동 요일'}
                        </p>
                        <div css={css`
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            gap: 6px;

                            margin-bottom: 20px;
                        `}>
                            {ActivityDayDataset.map((filterObj: string, index: number) => {
                                return (
                                    <MobileFilterSelected className={activityDayFilter.includes(filterObj) ? "selected" : "notSelected"} onClick={() => onClickFilter(filterObj, activityDayFilter, setActivityDayFilter)}>
                                        {filterObj}
                                    </MobileFilterSelected>
                                )
                            })}
                        </div>
                    </>
                    <>
                        <p css={css`
                            
                            margin: 0;
                            margin-bottom: 10px;
                            
                            font-weight: 700;
                            font-size: 10px;
                            line-height: 11px;

                            color: #241E19;
                        `}>{'온/오프라인'}
                        </p>
                        <div css={css`
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            gap: 6px;

                            margin-bottom: 20px;
                        `}>
                            {OnlineDataset.map((filterObj: string, index: number) => {
                                return (
                                    <MobileFilterSelected className={onlineFilter.includes(filterObj) ? "selected" : "notSelected"} onClick={() => onClickFilter(filterObj, onlineFilter, setOnlineFilter)}>
                                        {filterObj}
                                    </MobileFilterSelected>
                                )
                            })}
                        </div>
                    </>
            <div css={css`
                position: absolute;
                top: 281px;
                left: 195px;

            `}>
                <button css={css`
                    font-size: 10px;
                    line-height: 10px;

                    text-align: center;
                    display: flex;

                    width: fit-content;
                    border-radius: 10px;
                    padding: 4px 6px;
                    align-items: center;
                    justify-content: center;

                    cursor: pointer;

                    background: #14B390;
                    border-radius: 5px;
                    color: #FFFFFF;
                    border: none;
                `}
                onClick={() => setModalVisible(false)}>{'> 완료'}</button>
            </div>
        </div>

        </MobileView>
        </Modal>
    )
}

export default MainFilterModal;