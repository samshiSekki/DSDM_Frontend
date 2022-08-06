/** @jsxImportSource @emotion/react */
import React, {useState} from 'react'
import { css } from '@emotion/react';

const Detail = () => {

  const [recommend, setRecommend] = useState(['','','','','']);

  return (
    <div style={{overflow: 'hidden'}}>
      <div style={{paddingTop: '247px', fontFamily: 'NanumSquare'}}>
        <div css={summaryContainer}>
          <div css={title}>
            <div css={imageDiv}>
            </div>
            <div css={nameDiv}>
              동아리이름
            </div>
          </div>
          <table css={summaryTable} style={{overflow: 'hidden'}}>
              <tbody>
                <tr>
                  <td css={categoryTD}>분야</td><td css={dataTD}></td>
                </tr>
                <tr>
                  <td css={categoryTD}>모집 여부</td><td css={dataTD}></td>
                </tr>
                <tr>
                  <td css={categoryTD}>활동 기간</td><td css={dataTD}></td>
                </tr>
                <tr>
                  <td css={categoryTD}>정기 요일</td><td css={dataTD}></td>
                </tr>
                <tr>
                  <td css={categoryTD}>회비</td><td css={dataTD}></td>
                </tr>
                <tr>
                  <td css={categoryTD}>선발 절차</td><td css={dataTD}></td>
                </tr>
                <tr>
                  <td style={{borderRight: '1.5px solid #DBDBDB', textAlign:'center', background: '#F8F8F8'}}>활동 방법</td><td style={{textAlign: 'center'}}></td>
                </tr>
              </tbody>
          </table>
        </div>
        <div css={detailContainer}>
          <div css={detailContent}>
            <span css={detailTitle}>
                어떤 동아리일까 ?
            </span>
            <div css={detailDescription}>
              이런 이런 동아리다
            </div>

            <span css={detailTitle}>
              에 대해 더 알아보자면..
            </span>
            <div css={detailDescription}>
              ㅇㄴㄹㅇ
            </div>

            <span css={detailTitle}>
              어떤 사람들이 모인 곳일까 ?
            </span>
            <div css={detailDescription}>
              ㅇㄴㄹㅇ
            </div>

            <span css={detailTitle}>
              에 대해 더 알고 싶다면 ?
            </span>
            <div css={detailDescription}>
              ㄴㄹㅇㄴ
            </div>

            <span css={detailTitle}>
              실제 활동했던 사람들의 후기가 궁금하다면 ?
            </span>
            <div css={detailDescription}>
              ㅇㄹㅇㄴ
            </div>

            <span css={detailTitle}>
              이런 동아리도 있대 !
            </span>
            <div css={detailDescription} style={{display: 'flex'}}>
              {
                recommend.map((a) => {
                  return(
                    <div style={{textAlign: 'center', marginRight: '33px'}}>
                      <div css={recommendImgContainer}>
                      </div>
                      <div css={recommendTitle}>
                        동아리이름
                      </div>
                    </div>
                  )
                })
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


const summaryContainer = css`
  position: fixed;
  width: 40vw;
  height: 100vh;
`;

const title = css`
  height: 61px;
  width: auto;
  display: flex;
  margin-left: 12.5vw;
`;

const imageDiv = css`
  width: 61px;
  height: 61px;
  border-radius: 70%;
  border: 1.5px solid #DBDBDB;
`;

const nameDiv = css`
  height: 61px;
  line-height: 61px;
  margin-left: 22px;
  font-: normal;
  font-weight: 700;
  font-size: 28px;
`;

const summaryTable = css`
  width: 24vw;
  margin-top: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #241E19;
  border-collapse: collapse;
  border-radius: 15px;
  border-style: hidden;
  box-shadow: 0 0 0 1.5px #DBDBDB;
  td{
    padding-top: 20px;
    padding-bottom: 20px;
  }

  margin-left: 12.5vw;
`;

const categoryTD = css`
  border-right: 1.5px solid #DBDBDB;
  border-bottom: 1.5px solid #DBDBDB;
  text-align: center;
  width: 36.7%;
  background: #F8F8F8;
`;

const dataTD = css`
  border-bottom: 1.5px solid #DBDBDB;
  text-align: center;
`;

const detailContainer = css`
  width: 60vw;
  margin-left: 40vw;
  height: auto;
  padding-bottom: 117px;
`;

const detailContent = css`
  width: 77%;
  height: auto;
  padding-top: 88px;
  padding-bottom: 88px;
  padding-left: 4vw;
  padding-right: 4vw;
  background: #F8F8F8;
  positon: relative;
  z-index: -100;
`;

const detailTitle = css`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #241E19;
  position: relative;

  &:after {
    content: "";
    width: 100%;
    height: 13px;
    background: rgba(20, 179, 144, 0.2);
    position: absolute;
    display: inline-block;
    left: 0;
    bottom: -3px;
    z-index: 1;
  };
`;

const detailDescription = css`
  margin-top: 32px;
  margin-bottom: 78px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #241E19;
`;

const recommendImgContainer = css`
  width: 132px;
  height: 132px;
  border-radius: 70%;
  border: 1.5px solid #DBDBDB;
`;

const recommendTitle = css`
  margin-top: 25px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #241E19;
`;


export default Detail