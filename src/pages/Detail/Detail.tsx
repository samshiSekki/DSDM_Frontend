/** @jsxImportSource @emotion/react */
import React, {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { css } from '@emotion/react';
import axios from 'axios';
import snsIcon from '../../assets/detail/sns_icon.png'
import siteIcon from '../../assets/detail/site_icon.png'
import DetailSuggestModal from '../../components/Detail/DetailSuggestModal';
import Toast from '../../components/common/Toast';

const Detail = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [toastVisible, setToastVisible] = useState<boolean>(false);
  let {id} = useParams();

  useEffect(() => {
    if (toastVisible) {
      setTimeout(() => {
        setToastVisible(false);
      }, 1000);
    }
  }, [toastVisible]);

  const [clubInfo, setClubInfo] = useState(
    {
     club: {
      activityDay: "",
      applyUrl: null,
      clubId: 0,
      competition: "",
      deadline: null,
      introduction: null,
      location: "",
      logoUrl: "",
      mainCategory: "",
      membershipFee: null,
      name: "",
      online: 3,
      period: "",
      personnel: null,
      recruiting: false,
      reviews: [''],
      selectionProcess: "",
      siteAddress: "",
      snsAddress: "",
      subCategory: [],
      target: "",
      uniqueness: [''],
      __v: 0,
      _id: "",
     },
     recommendClub: [
      {
        clubId: "",
        logoUrl: "",
        name: ""
      }
     ]
      
    }
  );

  const fetchData = async() => {
    try{
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_GET_DETAIL}${id}`);
      console.log(response.data)
      setClubInfo(response.data);
    } catch(e){
      console.log(e);
    }
    
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (!clubInfo) return null;

  return (
    <div css={css`overflow: hidden;`}>
      {toastVisible && (
            <>
                <Toast msg="소중한 의견 감사합니다!"/>
            </>
        )}
      {modalVisible && <DetailSuggestModal modalVisible={modalVisible} setModalVisible={setModalVisible} clubID={clubInfo.club.clubId} toastVisible={toastVisible} setToastVisible={setToastVisible}/>}
      <div css={css`font-family: NanumSquare;`}>
        <div css={summaryContainer}>
          <div css={title}>
            <div css={imageDiv}>
                <img src={clubInfo.club.logoUrl} css={css`width: 48.8px; height: 48.8px; borderRadius: 70%;`}/>
            </div>
            <div css={nameDiv}>
              {clubInfo.club.name}
            </div>
          </div>
          <table css={summaryTable}>
              <tbody>
                <tr>
                  <td css={categoryTD}>분야</td><td css={dataTD}>{clubInfo.club.mainCategory}</td>
                </tr>
                <tr>
                  <td css={categoryTD}>모집 여부</td>
                  <td css={dataTD}>
                    {clubInfo.club.recruiting
                      ? <div>모집중</div>
                      : <div>마감</div>
                    }
                  </td>
                </tr>
                <tr>
                  <td css={categoryTD}>활동 기간</td><td css={dataTD}>{clubInfo.club.period}</td>
                </tr>
                <tr>
                  <td css={categoryTD}>정기 요일</td><td css={dataTD}>{clubInfo.club.activityDay}</td>
                </tr>
                <tr>
                  <td css={categoryTD}>회비</td><td css={dataTD}>{clubInfo.club.membershipFee}</td>
                </tr>
                <tr>
                  <td css={categoryTD}>선발 절차</td><td css={dataTD}>{clubInfo.club.selectionProcess}</td>
                </tr>
                <tr>
                  <td css={css`border-right: 1.5px solid #DBDBDB; text-align: center; background: #F8F8F8;`}>활동 방법</td>
                  <td css={css`text-align: center`}>
                    {
                      clubInfo.club.online == 1
                      ? <div>온라인</div>
                      : clubInfo.club.online == 2
                        ? <div>오프라인</div>
                        : <div>온/오프라인</div>
                    }
                  </td>
                </tr>
              </tbody>
          </table>
          <div css={css`width: 24vw; margin-top: 42px; display: flex; justify-content: space-between;`}>
            <div css={css`
            font-weight: 400;
            font-size: 14.4px;
            line-height: 16px;
            
            color: #241E19;
            `}>
              * 수정 변경 요청 or 추가 제안 등을 원한다면?
            </div>
            <div css={css`
            font-weight: 700;
            font-size: 14.4px;
            text-decoration-line: underline;
            color: #14B390;
            `} onClick={()=>setModalVisible(true)}>
              제안하기
            </div>
          </div>
        </div>
        <div css={detailContainer}>
          <div css={detailContent}>
            <span css={detailTitle}>
                어떤 동아리일까 ?
            </span>
            <div css={detailDescription}>
              {clubInfo.club.introduction}
            </div>

            <span css={detailTitle}>
              {clubInfo.club.name}에 대해 더 알아보자면..
            </span>
            <div css={detailDescription}>
              {
                clubInfo.club.uniqueness.map((a) => {
                  return(
                    <div css={{marginBottom: '8px'}}>
                      - {a}
                    </div>
                  )
                })
              }
            </div>

            <span css={detailTitle}>
              어떤 사람들이 모인 곳일까 ?
            </span>
            <div css={detailDescription}>
              {clubInfo.club.target}이라면 지원 가능하며, 정원은 {clubInfo.club.personnel}입니다. 경쟁률은 {clubInfo.club.competition}입니다.
            </div>

            <span css={detailTitle}>
              {clubInfo.club.name}에 대해 더 알고 싶다면 ?
            </span>
            <div css={detailDescription}>
              <div css={css`display: flex; margin-bottom: 15.2px;`}>
                <img src={siteIcon} css={css`width: 15.2px; height: 15.2px; margin-right: 12.8px;`}/>
                <a href={clubInfo.club.siteAddress} css={css`color: #241E19;`}>{clubInfo.club.siteAddress}</a>
              </div>
              <div css={css`display: flex;`}>
                <img src={snsIcon} css={css`width: 15.2px; height: 15.2px; margin-right: 12.8px;`}/>
                <a href={clubInfo.club.snsAddress} css={css`color: #241E19;`}>{clubInfo.club.snsAddress}</a>
              </div>
            </div>

            <span css={detailTitle}>
              실제 활동했던 사람들의 후기가 궁금하다면 ?
            </span>
            <div css={detailDescription}>
              {
                clubInfo.club.reviews.map((a) => {
                  return(
                    <div css={css`margin-bottom: 8px; word-break:break-all;`}>
                      <a href={a} css={css`color: #241E19;`}>{a}</a>
                    </div>
                  )
                })
              }
            </div>

            <span css={detailTitle}>
              이런 동아리도 있대 !
            </span>
            <div css={detailDescription} style={{display: 'flex'}}>
              {
                clubInfo.recommendClub.map((a) => {
                  return(
                    <a href={`/detail/${a.clubId}`} css={css`text-decoration: none`}>
                    <div css={css`text-align: center; margin-right: 26.4px;`}>
                      <div css={recommendImgContainer}>
                        <img src={a.logoUrl} css={css`width: 105.6px; height: 105.6px; borderRadius: 70%;`}/>
                      </div>
                      <div css={recommendTitle}>
                        {a.name}
                      </div>
                    </div>
                    </a>
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
  position: absolute;
  width: 40vw;
  //height: 10vh;
  margin-left: 12.5vw;
`;

const title = css`
  height: 48.8px;
  width: auto;
  display: flex;
`;

const imageDiv = css`
  width: 48.8px;
  height: 48.8px;
  border-radius: 70%;
  border: 1.5px solid #DBDBDB;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const nameDiv = css`
  height: 48.8px;
  line-height: 48.8px;
  margin-left: 17.6px;
  font-: normal;
  font-weight: 700;
  font-size: 22.4px;
`;

const summaryTable = css`
  overflow: hidden;
  width: 24vw;
  margin-top: 19.2px;
  font-style: normal;
  font-weight: 400;
  font-size: 14.4px;
  color: #241E19;
  border-collapse: collapse;
  border-radius: 12px;
  border-style: hidden;
  box-shadow: 0 0 0 1.5px #DBDBDB;
  td{
    padding-top: 16px;
    padding-bottom: 16px;
  }

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
  padding-bottom: 93.6px;
`;

const detailContent = css`
  width: 77%;
  height: auto;
  padding-top: 70.4px;
  padding-bottom: 70.4px;
  padding-left: 4vw;
  padding-right: 4vw;
  background: #F8F8F8;
  positon: relative;
  z-index: -100;
`;

const detailTitle = css`
  font-style: normal;
  font-weight: 700;
  font-size: 19.2px;
  color: #241E19;
  position: relative;

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
  };
`;

const detailDescription = css`
  margin-top: 25.6px;
  margin-bottom: 62.4px;
  font-style: normal;
  font-weight: 400;
  font-size: 14.4px;
  line-height: 16px;
  color: #241E19;
`;

const recommendImgContainer = css`
  width: 105.6px;
  height: 105.6px;
  border-radius: 70%;
  border: 1.5px solid #DBDBDB;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const recommendTitle = css`
  margin-top: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #241E19;
`;


export default Detail