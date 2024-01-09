import React, { useState } from "react";
import { StyledBoardDetailBody, StyledBoardDetailFooter, StyledBoardDetailHead, StyledBoardDetailPage } from "./style";
import Navbar from "../../organ/Navbar";
import { useLocation } from "react-router-dom";
import BoardDetailHeader from "../../molecule/BoardDetailHeader";
import BoardDetailBody from "../../molecule/BoardDetailBody";

const BoardDetailPage = ()=>{
    const {state} = useLocation();

    const [mdText,setMdText] = useState(
        `## 시작 
         **공지사항** 
            1. 바르고 고운말을 사용합니다. 
            2. 비난과 비방을 목적으로 한 글을 작성하지 맙시다. 
            3. 무분별한 도배는 자제합시다.
        `
    );

    const onChangeHandler = (e)=>{
        setMdText(e);
    }

    return(
        <StyledBoardDetailPage>
            
            <StyledBoardDetailHead>
                <h1>hello</h1>
                <Navbar isRow></Navbar>
            </StyledBoardDetailHead>
            <StyledBoardDetailBody>
                <BoardDetailHeader title={state.title} creator={state.creator} good={state.good} view={state.view} comment={state.comment} createDate={state.createDate.toLocaleString('ko-KR')}>

                </BoardDetailHeader>
                <BoardDetailBody texts={mdText} onChangeHandler={onChangeHandler}></BoardDetailBody>
            </StyledBoardDetailBody>
            <StyledBoardDetailFooter>
                정보
            </StyledBoardDetailFooter>
        </StyledBoardDetailPage>
    )
}

export default BoardDetailPage;
