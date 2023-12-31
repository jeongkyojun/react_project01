import React from "react";
import { StyledBoardDetailBody, StyledBoardDetailFooter, StyledBoardDetailHead, StyledBoardDetailPage } from "./style";
import Navbar from "../../organ/Navbar";
import { useLocation } from "react-router-dom";

const BoardDetailPage = ()=>{
    const {state} = useLocation();
    const {postId} = state;

    return(
        <StyledBoardDetailPage>
            
            <StyledBoardDetailHead>
                <h1>hello</h1>
                <Navbar isRow></Navbar>
            </StyledBoardDetailHead>
            <StyledBoardDetailBody>
                <h1>제목</h1>
                내용
            </StyledBoardDetailBody>
            <StyledBoardDetailFooter>
                정보
            </StyledBoardDetailFooter>
        </StyledBoardDetailPage>
    )
}

export default BoardDetailPage;
