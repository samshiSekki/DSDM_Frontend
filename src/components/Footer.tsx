/** @jsxImportSource @emotion/react */
import React, {useState, useEffect} from 'react'
import { css } from '@emotion/react';
import footerLogo from '../assets/footer/footer_logo.png'
import gitLogo from '../assets/footer/github_logo.png'
import instaLogo from '../assets/footer/instagram_logo.png'
import DetailSuggestModal from './Detail/DetailSuggestModal';
import Toast from './common/Toast';
import {MobileView, BrowserView} from "react-device-detect";

function Footer() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [toastVisible, setToastVisible] = useState<boolean>(false);
  const [clubID, setClubID] = useState(0)

  useEffect(() => {
    if (toastVisible) {
      setTimeout(() => {
        setToastVisible(false);
      }, 1000);
    }
  }, [toastVisible]);

  return (
    <>
    <BrowserView>
    <div>
      {toastVisible && (
            <>
                <Toast msg="소중한 의견 감사합니다!"/>
            </>
        )}
      {modalVisible && <DetailSuggestModal modalVisible={modalVisible} setModalVisible={setModalVisible} clubID={clubID} toastVisible={toastVisible} setToastVisible={setToastVisible}/>}
        <div css={FooterContainer}>
            <div css={FooterContents}>
              <img css={FooterLogoImg} src={footerLogo}/>
              <div css={FooterTitle}>대설동모</div>

              <div css={FollowUs}>
                <span css={css`font-size: 19.2px; font-weight: 700;`}>Follow Us</span>

                <div css={Links}>
                  <a target="_blank" href='https://www.instagram.com/samshisaekki/' css={css`text-decoration: none; color: white`}>
                    <img src={instaLogo} css={css`width: 20px; height: 20px; float: left;`}/>
                    <span css={css`margin-left: 12px; font-size: 19.2px; font-weight: 400; float: left;`}>Instagram</span>
                  </a>

                  <a target="_blank" href='https://github.com/samshiSekki' css={css`text-decoration: none; color: white`}>
                    <img src={gitLogo} css={css`width: 20px; height: 20px; float: left; margin-left: 36px;`}/>
                    <span css={css`margin-left: 12px; font-size: 19.2px; font-weight: 400;`}>Github</span>
                  </a>
                </div>

                <div css={css`
                  margin-top: 44px;
                  font-style: normal;
                  font-weight: 700;
                  font-size: 19.2px;
                  text-decoration-line: underline;
                  `} onClick={()=>setModalVisible(true)}>
                  제안하기
                </div>

                <div css={css`margin-top: 46.4px; margin-bottom: 16px; overflow: hidden;`}>
                  <div css={MembersPoistion}>Design</div>
                  <div css={MembersName}>구지현</div>

                  <div css={MembersPoistion} style={{marginLeft: '67px'}}>Front-end</div>
                  <div css={MembersName}>송재민 황남주</div>


                  <div css={MembersPoistion} style={{marginLeft: '67px'}}>Back-end</div>
                  <div css={MembersName}>송은주 오유정</div>
                </div>

                <div css={Copyright}>
                  Copyright(c)2022 삼시세끼 All rights reserved.
                </div>
                
              </div>
            </div>
          </div>
        
    </div>
    </BrowserView>

    <MobileView>
    {toastVisible && (
            <>
                <Toast msg="소중한 의견 감사합니다!"/>
            </>
        )}
      {modalVisible && <DetailSuggestModal modalVisible={modalVisible} setModalVisible={setModalVisible} clubID={clubID} toastVisible={toastVisible} setToastVisible={setToastVisible}/>}
      <div css={MobileFooterContainer}>
            <div css={MobileFooterContents}>
              <img css={MobileFooterLogoImg} src={footerLogo}/>
              <div css={MobileFooterTitle}>대설동모</div>
              <div css={MobileFollowUs}>
                <span style={{fontSize: '10px', fontWeight: '700'}}>Follow Us</span>

                <div css={css`margin-top: 6px;`}>
                  <a target="_blank" href='https://www.instagram.com/samshisaekki/' css={css`text-decoration: none; color: white`}>
                    <img src={instaLogo} css={css`width: 8px; height: 8px; float: left;`}/>
                    <span css={css`margin-left: 5px; font-size: 10px; font-weight: 400; float: left;`}>Instagram</span>
                  </a>

                  <a target="_blank" href='https://github.com/samshiSekki' css={css`text-decoration: none; color: white`}>
                    <div css={css`display: flex`}>
                    <img src={gitLogo} css={css`width: 8px; height: 8px; float: left; margin-left: 18px;`}/>
                    <span css={css`margin-left: 5px; font-size: 10px; font-weight: 400;`}>Github</span>
                    </div>
                  </a>
                </div>

                <div css={css`
                  margin-top: 23px;
                  font-style: normal;
                  font-weight: 700;
                  font-size: 10px;
                  text-decoration-line: underline;
                  `} onClick={()=>setModalVisible(true)}>
                  제안하기
                </div>

                <div css={css`margin-top: 23px; overflow: hidden;`}>
                  <div css={mobileMembersPoistion}>Design</div>
                  <div css={mobileMembersName}>구지현</div>

                  <div css={mobileMembersPoistion} style={{marginLeft: '20px'}}>Front-end</div>
                  <div css={mobileMembersName}>송재민 황남주</div>


                  <div css={mobileMembersPoistion} style={{marginLeft: '20px'}}>Back-end</div>
                  <div css={mobileMembersName}>송은주 오유정</div>
                </div>
                
                <div css={CopyrightMobile}>
                  Copyright(c)2022 삼시세끼 All rights reserved.
                </div>
              </div>
            </div>
          </div>
    </MobileView>

    </>
  )
}

const MobileFooterContainer = css`
    width: 100vw;
    height: 226px;
    background: #241E19;
    display: flex;
    justify-content: center;
    font-family: NanumSquare;
`;

const MobileFooterContents = css`
    width: 335px;
    height: 98px;
    margin-top: 37px;
    justify-content: center;
    text-align: left;
`;

const MobileFooterLogoImg = css`
    float: left;
    width: 15px;
    height: 15px;
`;

const MobileFooterTitle = css`
    float: left;
    margin-left: 5.12px;
    font-weight: 800;
    font-size: 15px;
    line-height: 16px;
    text-align: center;

    color: #FFFFFF;

    opacity: 0.8;
`;

const MobileFollowUs = css`
    margin-top: 35px;
    color: white;
`;

const CopyrightMobile = css`
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    color: #C2C2C2;
    margin-top: 9px;
`;

const FooterContainer = css`
    width: 100vw;
    height: 464.8px;
    background: #241E19;
    margin-top: 93.6px;
    display: flex;
`;

const FooterContents = css`
    padding-left: 12.5vw;
    padding-top: 73.6px;
`;

const FooterLogoImg = css`
    float: left;
    width: 28.17px;
    height: 27.2px;
`;

const FooterTitle = css`
    float: left;

    height: 27.2px;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 34px;
    color: #FFFFFF;
    opacity: 0.8;
    margin-left: 11.64px;
`;

const FollowUs = css`
    margin-top: 84.8px;
    color: #FFFFFF;
    text-align: left;
`;

const Links = css`
    margin-top: 16px;
`;

const Copyright = css`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21.6px;

    color: #C2C2C2;

`;

const MembersPoistion = css`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21.6px;
    color: #C2C2C2;
    float: left;
`;

const MembersName = css`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21.6px;
    color: #C2C2C2;
    float: left;
    margin-left: 8px;
`;

const mobileMembersPoistion = css`
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    color: #C2C2C2;
    float: left;
`;

const mobileMembersName = css`
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    color: #C2C2C2;
    float: left;
    margin-left: 3px;
`;

export default Footer