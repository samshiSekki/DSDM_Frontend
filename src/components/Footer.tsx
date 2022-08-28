/** @jsxImportSource @emotion/react */
import React, {useState, useEffect} from 'react'
import { css } from '@emotion/react';
import footerLogo from '../assets/footer/footer_logo.png'
import gitLogo from '../assets/footer/github_logo.png'
import instaLogo from '../assets/footer/instagram_logo.png'
import DetailSuggestModal from './Detail/DetailSuggestModal';
import Toast from './common/Toast';

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
                <span css={css`font-size: 24px; font-weight: 700;`}>Follow Us</span>

                <div css={Links}>
                  <a target="_blank" href='https://www.instagram.com/samshisaekki/' css={css`text-decoration: none; color: white`}>
                    <img src={instaLogo} css={css`width: 25px; height: 25px; float: left;`}/>
                    <span css={css`margin-left: 15px; font-size: 24px; font-weight: 400; float: left;`}>Instagram</span>
                  </a>

                  <a target="_blank" href='https://github.com/samshiSekki' css={css`text-decoration: none; color: white`}>
                    <img src={gitLogo} css={css`width: 25px; height: 25px; float: left; margin-left: 45px;`}/>
                    <span css={css`margin-left: 15px; font-size: 24px; font-weight: 400;`}>Github</span>
                  </a>
                </div>

                <div css={css`
                  margin-top: 55px;
                  font-style: normal;
                  font-weight: 700;
                  font-size: 24px;
                  text-decoration-line: underline;
                  `} onClick={()=>setModalVisible(true)}>
                  제안하기
                </div>

                <div css={Copyright}>
                  Copyright(c)2022 삼시세끼 All rights reserved.
                </div>
                <div>
                  <div css={MembersPoistion}>Design</div>
                  <div css={MembersName}>구지현</div>

                  <div css={MembersPoistion} style={{marginLeft: '67px'}}>Front-end</div>
                  <div css={MembersName}>송재민 황남주</div>


                  <div css={MembersPoistion} style={{marginLeft: '67px'}}>Back-end</div>
                  <div css={MembersName}>송은주 오유정</div>
                </div>
              </div>
            </div>
          </div>
        
    </div>
  )
}

const MobileFooterContainer = css`
    width: 100%;
    height: 255px;
    background: #241E19;
    display: flex;
    justify-content: center;
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

const MobileFollowLink = css`
    margin-top: 7px;
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    color: #FFFFFF;
`;

const CopyrightMobile = css`
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    color: #C2C2C2;
    margin-top: 17px;
    margin-bottom: 4px;
`;

const MobileMemberPosition = css`
    font-weight: 700;
    font-size: 8px;
    line-height: 6px;
    color: #FFFFFF;
`;

const MobileMemberName = css`
    font-weight: 400;
    font-size: 8px;
    line-height: 6px;
    color: #FFFFFF;
    margin-left: 4px;
`;

const FooterContainer = css`
    width: 100vw;
    height: 581px;
    background: #241E19;
    margin-top: 117px;
    display: flex;
`;

const FooterContents = css`
    padding-left: 12.5vw;
    padding-top: 92px;
`;

const FooterLogoImg = css`
    float: left;
    width: 35.21px;
    height: 34px;
`;

const FooterTitle = css`
    float: left;

    height: 34px;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 34px;
    color: #FFFFFF;
    opacity: 0.8;
    margin-left: 14.55px;
`;

const FollowUs = css`
    margin-top: 106px;
    color: #FFFFFF;
    text-align: left;
`;

const Links = css`
    margin-top: 20px;
`;

const Copyright = css`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 27px;

    color: #C2C2C2;
    margin-top: 58px;
    margin-bottom: 20px;
`;

const MembersPoistion = css`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #C2C2C2;
    float: left;
`;

const MembersName = css`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #C2C2C2;
    float: left;
    margin-left: 10px;
`;

export default Footer