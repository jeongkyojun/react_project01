import React, { useState } from "react";
import { StyledBoardBody, StyledBoardFooter, StyledBoardHead, StyledBoardPage } from "./style";
import Navbar from "../../organ/Navbar";
import { useRecoilState } from "recoil";
import { boardState, nameState } from "../../data/values";
import BoardList from "../../organ/BoardList";
import PageBar from "../../molecule/PageBar";
import navigator from "../../data/navigation";
import { useNavigate } from "react-router-dom";

const BoardPage = ()=>{
    const [name, setName] = useRecoilState(nameState);
    const [list, setList] = useRecoilState(boardState);
    const [num, setNum] = useState(-1);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    const MAX_PAGE = 10;

    const boardClickHandler = (e)=>{
        // e.target.parentElement.id를 index로 설정, 백엔드 연동시 다시 list의 고유 number로 바꾸고 api 호출로 변경할 것
        console.log(list[e.target.parentElement.id]);
        setNum(e.target.parentElement.id);
        navigator(navigate,{ state: list[e.target.parentElement.id]}).boardDetail();
    }

    const pageClickHandler = (e)=>{
        console.log(e.target.id);
        setPage(e.target.id);
    }

    return (
        <StyledBoardPage>
            <StyledBoardHead>
                <h1> hello, {name} </h1>
                <Navbar isRow></Navbar>
            </StyledBoardHead>
            <StyledBoardBody>
                <h2>게시판</h2>
                <BoardList list={list} boardSize={10} onClickHandler={boardClickHandler}></BoardList>
                <PageBar page={page} maxpage={MAX_PAGE} onClickHandler={pageClickHandler}></PageBar>
            </StyledBoardBody>
            <StyledBoardFooter></StyledBoardFooter>
        </StyledBoardPage>
    )
}

export default BoardPage;
