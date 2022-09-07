/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react';
import deleteIcon from '../../assets/common/img-delete.png';

import { BrowserView, MobileView } from 'react-device-detect'


interface ModalProps {
    modalVisible: boolean
    setModalVisible: (modalVisible: boolean) => void
    children: any
    width?: string
    height?: string
}

const Modal = ({children, setModalVisible} : ModalProps) => {
    return (
        <>
        <BrowserView>
        <div css={ModalContainer}>
            <div css={BackgroundBox} onClick={() => setModalVisible(false)}/>
            <div css={ContentContainer}>
                <div css={Header}>
                    <img onClick={() => setModalVisible(false)} src={deleteIcon} css={css`cursor: pointer; position: absolute; top: 46px; right: 41px;`}/>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
        </BrowserView>
        <MobileView>
            <div css={ModalContainer}>
            <div css={BackgroundBox} onClick={() => setModalVisible(false)}/>
            <div css={MobileContentContainer}>
                <div css={Header}>
                    <img onClick={() => setModalVisible(false)} src={deleteIcon} css={css`width: 8px; height: 8px; cursor: pointer; position: absolute; top: 20px; right: 20px; z-index: 99;`}/>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
        </MobileView>
        </>
    )
}

export default Modal;

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

const ContentContainer = css`
    width: 580px;
    background-color: #ffffff;
    top: 30px;
    position: relative;
    height: 700px;
    padding-top: 26px;
    padding-bottom: 40px;
    padding-left: 40px;
    border-radius: 20px;
`;

const MobileContentContainer = css`
    width: 290px;
    background-color: #ffffff;
    top: 30px;
    position: relative;
    height: fit-content;
    padding-top: 20px;
    padding-left: 17px;
    border-radius: 15px;
`;

const Header = css`
    display: flex;
    justify-content: flex-end;
    
`;

const Content = css`
    
`;