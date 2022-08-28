/** @jsxImportSource @emotion/react */
import React, {useState, useEffect} from 'react'
import { css, keyframes } from '@emotion/react';
import todayBorder from '../../assets/main/today-border.png'
import axios from 'axios';

const MainTodayList = () =>{

    var todayList = {todayClub: [{clubId: -1, name: ""},{clubId: -1, name: ""}]}
    const [currentClub, setCurrentClub] = useState("");

    const fetchData = async() => {
        try{
          const response = await axios.get(`${process.env.REACT_APP_BASE_URL}clubs/today`)
          todayList = response.data
        } catch(e){
          console.log(e);
        }
        
      }

    useEffect(() => {
        fetchData()

        setCurrentClub(todayList.todayClub[0].name)
        let i = 1
        setInterval(() => {
            if(i<todayList.todayClub.length - 1){
                setCurrentClub(todayList.todayClub[i].name)
                i++
            }else{
                setCurrentClub(todayList.todayClub[i].name)
                i = 0
            }
          }, 4000);

          clearInterval()
        
    }, [])

    
    

  return (
    <div css={listContainer}>
        <div css={childContainer}>
            <img src={todayBorder} css={css`width: 704.8px; height: auto; position: absolute;`}/>
            <div css={clubNameContainer}>
                <span css={clubName}>
                    {currentClub}
                </span>
            </div>
        </div>
    </div>
  )
}

const listContainer = css`
    width: 100vw;
    height: 164px;
    display: flex;
    justify-content: center;
`;
const childContainer = css`
    width: 704.8px;
    height: 164px;
    //background-color: yellow;
`;
const clubNameContainer = css`
    width: 704.8px;
    text-align: center;
    position: absolute;
    margin-top: 110px;

`;
const nameAnimation = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;
const nameAnimation2 = keyframes`
    0%{
        bottom: 0px;
        opacity: 1;
    }
    50%, 100%{
        bottom: 50px;
        opacity: 0;
    }

    51%{
        bottom: -10px;
        opacity: 0;
    }
`;

const clubName = css`
    font-style: normal;
    font-weight: 800;
    font-size: 45px;
    position: relative;
    color: #14B390;

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

      animation: ${nameAnimation} 4s;
      //animation: ${nameAnimation2} 5s;
      animation-iteration-count: infinite;
`;


export default MainTodayList