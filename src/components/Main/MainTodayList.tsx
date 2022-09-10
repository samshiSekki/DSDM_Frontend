/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css, keyframes } from "@emotion/react";
import todayBorder from "../../assets/main/today-border.png";
import axios from "axios";
import { MobileView, BrowserView } from "react-device-detect";

const MainTodayList = () => {
  var todayList = [{ clubId: -1, name: "" }];
  const [currentClub, setCurrentClub] = useState("없습니다...🙏");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}clubs/recruit`
      );
      todayList = response.data.recruitingClub;
      console.log(todayList);
      setCurrentClub(todayList[0].name);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    let i = 1;
    setInterval(() => {
      if (i < todayList.length - 1) {
        setCurrentClub(todayList[i].name);
        i++;
      } else {
        setCurrentClub(todayList[i].name);
        i = 0;
      }
    }, 4000);

    clearInterval();
  }, []);

  return (
    <>
      <BrowserView>
        <div css={listContainer}>
          <div css={childContainer}>
            <img
              src={todayBorder}
              css={css`
                width: 564px;
                height: auto;
                position: absolute;
              `}
            />
            <div css={clubNameContainer}>
              <span
                css={currentClub == "없습니다...🙏" ? staticClubName : clubName}
              >
                {currentClub}
              </span>
            </div>
          </div>
        </div>
      </BrowserView>

      <MobileView>
        <div css={mobileListContainer}>
          <div css={mobileChildContainer}>
            <img
              src={todayBorder}
              css={css`
                width: 287px;
                height: auto;
                position: absolute;
              `}
            />
            <div css={mobileClubNameContainer}>
              <span
                css={
                  currentClub == "없습니다...🙏"
                    ? staticMobileClubName
                    : mobileClubName
                }
              >
                {currentClub}
              </span>
            </div>
          </div>
        </div>
      </MobileView>
    </>
  );
};

const listContainer = css`
  width: 100vw;
  height: 131.2px;
  display: flex;
  justify-content: center;
`;

const mobileListContainer = css`
  margin-top: 45px;
  margin-bottom: 39px;
  width: 100vw;
  height: 74px;
  display: flex;
  justify-content: center;
`;

const childContainer = css`
  width: 564px;
  height: 131.2px;
  //background-color: yellow;
`;

const mobileChildContainer = css`
  width: 287px;
  height: 74px;
`;

const clubNameContainer = css`
  width: 564px;
  text-align: center;
  position: absolute;
  margin-top: 88px;
`;
const mobileClubNameContainer = css`
  width: 287px;
  text-align: center;
  position: absolute;
  margin-top: 47px;
`;

const nameAnimation = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

const clubName = css`
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  position: relative;
  color: #14b390;

  &:after {
    content: "";
    width: 100%;
    height: 10.4px;
    background: rgba(20, 179, 144, 0.2);
    position: absolute;
    display: inline-block;
    left: 0;
    bottom: -3px;
    z-index: 1;
  }

  animation: ${nameAnimation} 4s;
  animation-iteration-count: infinite;
`;

const staticClubName = css`
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  position: relative;
  color: #14b390;

  &:after {
    content: "";
    width: 100%;
    height: 10.4px;
    background: rgba(20, 179, 144, 0.2);
    position: absolute;
    display: inline-block;
    left: 0;
    bottom: -3px;
    z-index: 1;
  }
`;

const mobileClubName = css`
  font-family: NanumSquare;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  position: relative;
  color: #14b390;

  &:after {
    content: "";
    width: 100%;
    height: 5px;
    background: rgba(20, 179, 144, 0.2);
    position: absolute;
    display: inline-block;
    left: 0;
    bottom: 0px;
    z-index: 1;
  }

  animation: ${nameAnimation} 4s;
  animation-iteration-count: infinite;
`;

const staticMobileClubName = css`
  font-family: NanumSquare;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  position: relative;
  color: #14b390;

  &:after {
    content: "";
    width: 100%;
    height: 5px;
    background: rgba(20, 179, 144, 0.2);
    position: absolute;
    display: inline-block;
    left: 0;
    bottom: 0px;
    z-index: 1;
  }
`;

export default MainTodayList;
