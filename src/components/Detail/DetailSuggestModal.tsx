/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import SuggestModal from "../common/SuggestModal";
import axios from 'axios';
import Toast from "../common/Toast";

interface DetailFilterModalProps {
    modalVisible: boolean
    setModalVisible: (modalVisible: boolean) => void
    clubID: Number

    toastVisible: boolean
    setToastVisible: (toastVisible: boolean) => void
}

const DetailSuggestModal = ({modalVisible, setModalVisible, clubID, toastVisible, setToastVisible} : DetailFilterModalProps) =>{
    //console.log(clubID)
    const [suggestMsg, setSuggestMsg] = useState("")

    /*
    useEffect(() => {
        if (ToastStatus) {
          setTimeout(() => {
            setToastStatus(false);
          }, 1000);
        }
      }, [ToastStatus]);*/

    const showToast = () => {
        setToastVisible(true);
    }

    const sendSuggest = async() => {
        //console.log(suggestMsg);
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

    return(
        <>
        <SuggestModal modalVisible={modalVisible} setModalVisible={setModalVisible} clubID={clubID}>
            <div>
                <textarea css={suggestTextArea} placeholder="수정/변경 사항 요청이나 신규 동아리 추가 제안 등의 제안할 내용을 적어주세요." onChange={(e)=>{setSuggestMsg(e.target.value)}}/>

                <div css={sendBtn} onClick={sendSuggest}>
                    &gt; 보내기
                </div>
            </div>
        </SuggestModal>
        </>
    )
}

export default DetailSuggestModal;

const suggestTextArea = css`
    margin-top: 60px;
    width: 480px;
    height: 160px;

    padding: 30px 30px 30px 30px;
    border: 1.5px solid #DBDBDB;
    border-radius: 12px;
    resize: none;

    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
`;

const sendBtn = css`
    float: right;
    width: 78px; 
    height: 34px;
    border: 1.5px solid #14B390;
    border-radius: 8px;
    line-height: 34px;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    color: #14B390;
    margin-top: 36px;
    margin-right: 40px;
`