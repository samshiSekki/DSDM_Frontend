/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react';
import deleteIcon from '../../assets/common/img-delete.png';

interface ModalProps {
    modalVisible: boolean
    setModalVisible: (modalVisible: boolean) => void
    children: any
    width?: string
    height?: string
}

const Modal = ({children, setModalVisible} : ModalProps) => {
    return (
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
    z-index: 99;
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
    height: 600px;
    padding-top: 26px;
    padding-bottom: 40px;
    padding-left: 40px;
    border-radius: 20px;
`;


const Header = css`
    display: flex;
    justify-content: flex-end;
    
`;

const Content = css`
    
`;