/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import SuggestModal from "../common/SuggestModal";
import axios from 'axios';
import Toast from "../common/Toast";
import {MobileView, BrowserView} from "react-device-detect";

interface DetailFilterModalProps {
    modalVisible: boolean
    setModalVisible: (modalVisible: boolean) => void
    clubID: Number

    toastVisible: boolean
    setToastVisible: (toastVisible: boolean) => void
}

const DetailSuggestModal = ({modalVisible, setModalVisible, clubID, toastVisible, setToastVisible} : DetailFilterModalProps) =>{
    const [suggestMsg, setSuggestMsg] = useState("")
    const [sendActive, setSendActive] = useState(false)

    const showToast = () => {
        setToastVisible(true);
    }

    const sendSuggest = async() => {
        
        if(sendActive){
            if(clubID == 0){
                try{
                    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_SUGGESTION}`,
                        {
                            "content": suggestMsg,
                            "name": ""
                        }
                    )
                    console.log(response);
                    showToast()
                    setModalVisible(false)
                } catch(e){
                    console.log(e);
                }
            }else{
                try{
                    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_SUGGESTION}/${clubID}`,
                        {
                            content: suggestMsg
                        }
                    )
                    console.log(response);
                    showToast()
                    setModalVisible(false)
                } catch(e){
                    console.log(e)
                }
            }
        }
    }

    const messageChanged = (e: any) => {
        console.log(e.target.value)

        e.target.value == ""
        ? setSendActive(false)
        : setSendActive(true)
    }

    return(
        <>
        <SuggestModal modalVisible={modalVisible} setModalVisible={setModalVisible} clubID={clubID}>
            <div>
                <BrowserView>
                    <textarea css={suggestTextArea} placeholder="수정/변경 사항 요청이나 신규 동아리 추가 제안 등의 제안할 내용을 적어주세요." onChange={(e)=>{messageChanged(e)}}/>

                    <div css={sendActive?sendBtnActivated:sendBtn} onClick={sendSuggest}>
                        &gt; 보내기
                    </div>
                </BrowserView>

                <MobileView>
                    <textarea css={mobileSuggestTextArea} placeholder="수정/변경 사항 요청이나 신규 동아리 추가 제안 등의 제안할 내용을 적어주세요." onChange={(e)=>{messageChanged(e)}}/>

                    <div css={sendActive?mobileSendBtnActivated:mobileSendBtn} onClick={sendSuggest}>
                        &gt; 보내기
                    </div>
                </MobileView>
            </div>
        </SuggestModal>
        </>
    )
}

export default DetailSuggestModal;

const suggestTextArea = css`
    margin-top: 48px;
    width: 384px;
    height: 128px;

    padding: 24px 24px 24px 24px;
    border: 1.5px solid #DBDBDB;
    border-radius: 9.6px;
    resize: none;

    font-weight: 400;
    font-size: 12.8px;
    line-height: 20px;
`;
const mobileSuggestTextArea = css`
    margin-top: 20px;
    width: 272px;
    height: 81px;
    padding: 12px 12px 12px 12px;
    border: 1px solid #DBDBDB;
    border-radius: 10px;
    resize: none;

    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
`;

const sendBtn = css`
    float: right;
    width: 62.4px; 
    height: 27.2px;
    border: 1.5px solid #14B390;
    border-radius: 6.4px;
    line-height: 27.2px;
    text-align: center;
    font-weight: 700;
    font-size: 12.8px;
    color: #14B390;
    margin-top: 28.8px;
    margin-right: 32px;
`;
const mobileSendBtn = css`
    float: right;
    width: 41px; 
    height: 17px;
    border: 1px solid #14B390;
    border-radius: 5px;
    line-height: 18px;
    text-align: center;
    font-weight: 700;
    font-size: 8px;
    color: #14B390;
    margin-top: 18px;
    margin-right: 15px;
`;

const sendBtnActivated = css`
    float: right;
    width: 62.4px; 
    height: 27.2px;
    border: 1.5px solid #14B390;
    background-color: #14B390;
    border-radius: 6.4px;
    line-height: 27.2px;
    text-align: center;
    font-weight: 700;
    font-size: 12.8px;
    color: white;
    margin-top: 28.8px;
    margin-right: 32px;
`;
const mobileSendBtnActivated = css`
    float: right;
    width: 41px; 
    height: 17px;
    border: 1px solid #14B390;
    background-color: #14B390;
    border-radius: 5px;
    line-height: 18px;
    text-align: center;
    font-weight: 700;
    font-size: 8px;
    color: white;
    margin-top: 18px;
    margin-right: 15px;
`;