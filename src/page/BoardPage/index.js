import React, { useState } from "react";
import { StyledBoardBody, StyledBoardFooter, StyledBoardHead, StyledBoardPage } from "./style";
import Navbar from "../../organ/Navbar";
import { useRecoilState } from "recoil";
import { boardState, nameState } from "../../data/values";
import BoardList from "../../organ/BoardList";
import PageBar from "../../molecule/PageBar";

const BoardPage = ()=>{
    const [name, setName] = useRecoilState(nameState);
    const [list, setList] = useRecoilState(boardState);
    const [num, setNum] = useState(-1);
    const [page, setPage] = useState(1);
    const MAX_PAGE = 10;

    const boardClickHandler = (e)=>{
        console.log(e.target.parentElement.id);
        setNum(e.target.parentElement.id);
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
                {
                    num===-1?
                        <h2> select board</h2>:
                        <h2> select board num : {num}</h2>
                }
                <BoardList list={list} boardSize={10} onClickHandler={boardClickHandler}></BoardList>
                <PageBar page={page} maxpage={MAX_PAGE} onClickHandler={pageClickHandler}></PageBar>
            </StyledBoardBody>
            <StyledBoardFooter></StyledBoardFooter>
        </StyledBoardPage>
    )
}

export default BoardPage;
