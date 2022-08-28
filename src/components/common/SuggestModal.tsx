/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react'
import deleteIcon from '../../assets/common/img-delete.png';

interface ModalProps {
    modalVisible: boolean
    setModalVisible: (modalVisible: boolean) => void
    children: any
    clubID: Number
}

const SuggestModal = ({children, setModalVisible, clubID} : ModalProps) => {
  return (
    <div css={ModalContainer}>
            <div css={BackgroundBox} onClick={() => setModalVisible(false)}/>
            
            <div css={ContentContainer}>
                <div css={title}>제안하기</div>
                <div css={Content}>
                    <div css={Header}>
                        <img onClick={() => setModalVisible(false)} src={deleteIcon} css={css`cursor: pointer; position: absolute; top: 46px; right: 41px;`}/>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
            
        </div>
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
    font-size: 26px;
    color: white;
    position: relative;
`;

const ContentContainer = css`
    width: 580px;
    height: 437px;
`;


const Header = css`
    display: flex;
    justify-content: flex-end;
    
`;

const Content = css`
    width: 580px;
    background-color: #ffffff;
    top: 30px;
    position: relative;
    height: 370px;
    padding-top: 26px;
    padding-bottom: 40px;
    padding-left: 40px;
    border-radius: 20px;
`;