import React from "react";
import { StyledBoardDetailBody, StyledBoardDetailFooter, StyledBoardDetailHead, StyledBoardDetailPage } from "./style";
import Navbar from "../../organ/Navbar";
import { useLocation } from "react-router-dom";
import BoardDetailHeader from "../../molecule/BoardDetailHeader";
import BoardDetailBody from "../../molecule/BoardDetailBody";

const BoardDetailPage = ()=>{
    const {state} = useLocation();

    return(
        <StyledBoardDetailPage>
            
            <StyledBoardDetailHead>
                <h1>hello</h1>
                <Navbar isRow></Navbar>
            </StyledBoardDetailHead>
            <StyledBoardDetailBody>
                <BoardDetailHeader title={state.title} creator={state.creator} good={state.good} view={state.view} comment={state.comment} createDate={state.createDate.toLocaleString('ko-KR')}>

                </BoardDetailHeader>
                <BoardDetailBody texts={'**공지사항** <br> 안녕하세요, 관리자입니다. <br> 내용을 잘 지켜주시기 바라겠습니다.'}></BoardDetailBody>
            </StyledBoardDetailBody>
            <StyledBoardDetailFooter>
                정보
            </StyledBoardDetailFooter>
        </StyledBoardDetailPage>
    )
}

export default BoardDetailPage;
