/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react'
import deleteIcon from '../../assets/common/img-delete.png';
import {MobileView, BrowserView} from "react-device-detect";

interface ModalProps {
    modalVisible: boolean
    setModalVisible: (modalVisible: boolean) => void
    children: any
    clubID: Number
}

const SuggestModal = ({children, setModalVisible, clubID} : ModalProps) => {
  return (
    <>
    <BrowserView>
        <div css={ModalContainer}>
            <div css={BackgroundBox} onClick={() => setModalVisible(false)}/>
            
            <div css={ContentContainer}>
                <div css={title}>제안하기</div>
                <div css={Content}>
                    <div css={Header}>
                        <img onClick={() => setModalVisible(false)} src={deleteIcon} css={css`cursor: pointer; position: absolute; top: 36.8px; right: 32.8px; width: 12px; height: 12px;`}/>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
            
        </div>
    </BrowserView>

    <MobileView>
        <div css={ModalContainer}>
            <div css={BackgroundBox} onClick={() => setModalVisible(false)}/>
            
            <div css={mobileContentContainer}>
                <div css={mobileTitle}>제안하기</div>
                <div css={mobileContent}>
                    <div css={Header}>
                        <img onClick={() => setModalVisible(false)} src={deleteIcon} css={css`cursor: pointer; position: absolute; top: 20px; right: 17px; width: 8px; height: 8px;`}/>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
            
        </div>
    </MobileView>

    </>
  )
}

export default SuggestModal;

const ModalContainer = css`
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    justify-content: center;
    align-items: center;
    font-family: NanumSquare;
`;

const BackgroundBox = css`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color:rgba(0, 0, 0, 0.8);
`;

interface ContainerType {
    width: string
    height: string
}

const title = css`
    font-weight: 700;
    font-size: 20.8px;
    color: white;
    position: relative;
`;
const mobileTitle = css`
    font-weight: 700;
    font-size: 14px;
    color: white;
    position: relative;
`;

const ContentContainer = css`
    width: 464px;
    height: 349.6px;
`;
const mobileContentContainer = css`
    width: 306px;
    height: 200px;
`;


const Header = css`
    display: flex;
    justify-content: flex-end;
    
`;

const Content = css`
    width: 464px;
    background-color: #ffffff;
    top: 24px;
    position: relative;
    height: 296px;
    padding-top: 20.8px;
    padding-bottom: 32px;
    padding-left: 32px;
    border-radius: 12.8px;
`;
const mobileContent = css`
    width: 306px;
    background-color: #ffffff;
    top: 12px;
    position: relative;
    height: 172px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
    border-radius: 12px;
`;