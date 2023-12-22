import React from "react";
import { StyledBoardBody, StyledBoardFooter, StyledBoardHead, StyledBoardPage } from "./style";
import Navbar from "../../organ/Navbar";
import { useRecoilState } from "recoil";
import { boardState, nameState } from "../../data/values";
import BoardList from "../../organ/BoardList";

const BoardPage = ()=>{
    const [name, setName] = useRecoilState(nameState);
    const [list, setList] = useRecoilState(boardState);
    return (
        <StyledBoardPage>
            <StyledBoardHead>
                <h1>hello, {name}</h1>
                <Navbar isRow></Navbar>
            </StyledBoardHead>
            <StyledBoardBody>
                <BoardList list={list}></BoardList>
            </StyledBoardBody>
            <StyledBoardFooter></StyledBoardFooter>
        </StyledBoardPage>
    )
}

export default BoardPage;
