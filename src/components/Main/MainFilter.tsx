/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import MainFilterModal from "./MainFilterModal";
import deleteIcon from "../../assets/main/img-delete-tag.svg";
import { BrowserView, MobileView } from "react-device-detect";
import axios from "axios";

const FILTER_TEXT = "이런 것만 보고싶어요!";
const Filter_INSIDE_TEXT = "filter";

type FilterType = string[];

const FieldFilterDataset: FilterType = [
  "IT",
  "광고",
  "기획",
  "경제/경영",
  "광고/마케팅",
  "건축",
  "어학",
  "기타",
  "발표",
  "문화/경영",
  "경영",
];
const RecruitingFilterDataset: FilterType = ["모집중", "마감"];
const PeriodFilterDataset: FilterType = [
  "3개월 이하",
  "4-6개월",
  "7개월-1년",
  "1년 이상",
];
const ActivityDayDataset: FilterType = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];
const OnlineDataset: FilterType = ["온라인", "오프라인", "온/오프라인"];

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

  border: 1px solid #14b390;
  color: #14b390;

  height: fit-content;
  gap: 8px;
`;

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

  border: 1px solid #14b390;
  color: #14b390;

  height: fit-content;
  gap: 8px;
`;

const MainFilter = ({ clubs, setClubs }: any) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [filters, setFilters] = useState<string[]>([]);

  const [fieldFilter, setFieldFilter] = useState<string[]>([]);
  const [recruitingFilter, setRecruitingFilter] = useState<string[]>([]);
  const [periodFilter, setPeriodFilter] = useState<string[]>([]);
  const [activityDayFilter, setActivityDayFilter] = useState<string[]>([]);
  const [onlineFilter, setOnlineFilter] = useState<string[]>([]);

  const onClickDeleteFilter = (filterObj: string, setFilters: any) => {
    setFilters((filters: string[]) =>
      filters.filter((element: string) => element !== filterObj)
    );
  };

  const getClubLists = async () => {
    // async await 함수를 사용할 때,

    const url =
      `http://43.200.156.125:5000/clubs?` +
      (fieldFilter.length !== 0 ? `category=${fieldFilter}` : "") +
      (recruitingFilter.length !== 0
        ? `&recruiting=${recruitingFilter.map((i: string) => {
            if (i === "모집중") return true;
            else return false;
          })}`
        : "") +
      (onlineFilter.length !== 0
        ? `&online=${onlineFilter.map((i: string, index: number) => {
            return OnlineDataset.indexOf(i) + 1;
          })}`
        : "") +
      (periodFilter.length !== 0
        ? `&period=${periodFilter.map((i: string, index: number) => {
            return PeriodFilterDataset.indexOf(i) + 1;
          })}`
        : "") +
      (activityDayFilter.length !== 0
        ? `&activityDay=${activityDayFilter.map((i: string) => {
            return i.slice(0, 1);
          })}`
        : "");
    if (
      fieldFilter.length === 0 &&
      recruitingFilter.length === 0 &&
      onlineFilter.length === 0 &&
      periodFilter.length === 0 &&
      activityDayFilter.length === 0
    ) {
      try {
        const data = await axios.get(`http://43.200.156.125:5000/clubs`);
        setClubs(data.data);
        return;
      } catch {
        // 오류 발생시 실행
      }
    }
    console.log(
      onlineFilter.map((i: string, index: number) => {
        return OnlineDataset.indexOf(i) + 1;
      })
    );

    try {
      const data = await axios.get(url);
      setClubs(data.data);
    } catch {
      // 오류 발생시 실행
    }
  };

  useEffect(() => {
    getClubLists();
  }, [
    fieldFilter,
    recruitingFilter,
    periodFilter,
    activityDayFilter,
    onlineFilter,
  ]);

  return (
    <>
      {modalVisible && (
        <MainFilterModal
          fieldFilter={fieldFilter}
          setFieldFilter={setFieldFilter}
          recruitingFilter={recruitingFilter}
          setRecruitingFilter={setRecruitingFilter}
          periodFilter={periodFilter}
          setPeriodFilter={setPeriodFilter}
          activityDayFilter={activityDayFilter}
          setActivityDayFilter={setActivityDayFilter}
          onlineFilter={onlineFilter}
          setOnlineFilter={setOnlineFilter}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          filters={filters}
          setFilters={setFilters}
          setClubs={setClubs}
          getClubLists={getClubLists}
        />
      )}
      <BrowserView>
        <div
          css={css`
            display: flex;
            width: 1000px;
            justify-content: space-between;

            margin-top: 53px;
            margin-bottom: 10px;
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              align-self: flex-start;
              gap: 16px;
            `}
          >
            <span
              css={css`
                font-size: 20px;
                line-height: 25px;
              `}
            >
              {FILTER_TEXT}
            </span>
            <div
              css={css`
                font-weight: 700;
                font-size: 20px;
                line-height: 23px;

                text-align: center;

                color: #14b390;

                border: 1px solid #14b390;
                width: fit-content;
                border-radius: 10px;
                padding: 4px 8px;
                cursor: pointer;
              `}
              onClick={() => setModalVisible(true)}
            >
              {Filter_INSIDE_TEXT}
            </div>
          </div>
          <div
            css={css`
              display: flex;
              width: 400px;
              flex-wrap: wrap;
              gap: 12px;
              margin-top: auto;
            `}
          >
            {fieldFilter.map((filter: string, index: number) => {
              return (
                <FilterSelected
                  onClick={() => onClickDeleteFilter(filter, setFieldFilter)}
                >
                  {filter}
                  <img src={deleteIcon} />
                </FilterSelected>
              );
            })}
            {recruitingFilter.map((filter: string, index: number) => {
              return (
                <FilterSelected
                  onClick={() =>
                    onClickDeleteFilter(filter, setRecruitingFilter)
                  }
                >
                  {filter}
                  <img src={deleteIcon} />
                </FilterSelected>
              );
            })}
            {periodFilter.map((filter: string, index: number) => {
              return (
                <FilterSelected
                  onClick={() => onClickDeleteFilter(filter, setPeriodFilter)}
                >
                  {filter}
                  <img src={deleteIcon} />
                </FilterSelected>
              );
            })}
            {activityDayFilter.map((filter: string, index: number) => {
              return (
                <FilterSelected
                  onClick={() =>
                    onClickDeleteFilter(filter, setActivityDayFilter)
                  }
                >
                  {filter}
                  <img src={deleteIcon} />
                </FilterSelected>
              );
            })}
            {onlineFilter.map((filter: string, index: number) => {
              return (
                <FilterSelected
                  onClick={() => onClickDeleteFilter(filter, setOnlineFilter)}
                >
                  {filter}
                  <img src={deleteIcon} />
                </FilterSelected>
              );
            })}
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div
          css={css`
            display: flex;
            width: 335px;
            justify-content: space-between;

            margin-bottom: 14px;
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              align-self: flex-start;
              gap: 7px;
            `}
          >
            <span
              css={css`
                font-size: 10px;
                line-height: 10px;
              `}
            >
              {FILTER_TEXT}
            </span>
            <div
              css={css`
                font-weight: 700;
                font-size: 10px;
                line-height: 10px;

                text-align: center;

                color: #14b390;

                border: 1px solid #14b390;
                width: fit-content;
                border-radius: 5px;
                padding: 3px 4px;
                cursor: pointer;
              `}
              onClick={() => setModalVisible(true)}
            >
              {Filter_INSIDE_TEXT}
            </div>
          </div>
          <div
            css={css`
              display: flex;
              width: 200px;
              flex-wrap: wrap;
              gap: 8px;
              margin-top: auto;
              justify-content: flex-end;
            `}
          >
            {fieldFilter.map((filter: string, index: number) => {
              return (
                <MobileFilterSelected
                  onClick={() => onClickDeleteFilter(filter, setFieldFilter)}
                >
                  {filter}
                  <img
                    css={css`
                      width: 4px;
                      height: 4px;
                    `}
                    src={deleteIcon}
                  />
                </MobileFilterSelected>
              );
            })}
            {recruitingFilter.map((filter: string, index: number) => {
              return (
                <MobileFilterSelected
                  onClick={() =>
                    onClickDeleteFilter(filter, setRecruitingFilter)
                  }
                >
                  {filter}
                  <img
                    css={css`
                      width: 4px;
                      height: 4px;
                    `}
                    src={deleteIcon}
                  />
                </MobileFilterSelected>
              );
            })}
            {periodFilter.map((filter: string, index: number) => {
              return (
                <MobileFilterSelected
                  onClick={() => onClickDeleteFilter(filter, setPeriodFilter)}
                >
                  {filter}
                  <img
                    css={css`
                      width: 4px;
                      height: 4px;
                    `}
                    src={deleteIcon}
                  />
                </MobileFilterSelected>
              );
            })}
            {activityDayFilter.map((filter: string, index: number) => {
              return (
                <MobileFilterSelected
                  onClick={() =>
                    onClickDeleteFilter(filter, setActivityDayFilter)
                  }
                >
                  {filter}
                  <img
                    css={css`
                      width: 4px;
                      height: 4px;
                    `}
                    src={deleteIcon}
                  />
                </MobileFilterSelected>
              );
            })}
            {onlineFilter.map((filter: string, index: number) => {
              return (
                <MobileFilterSelected
                  onClick={() => onClickDeleteFilter(filter, setOnlineFilter)}
                >
                  {filter}
                  <img
                    css={css`
                      width: 4px;
                      height: 4px;
                    `}
                    src={deleteIcon}
                  />
                </MobileFilterSelected>
              );
            })}
          </div>
        </div>
      </MobileView>
    </>
  );
};

export default MainFilter;
