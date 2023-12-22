import React from "react"
import { StyledBoardCreateDateWrapper, StyledBoardList, StyledBoardListWrapper, StyledBoardMenu, StyledBoardNameWrapper, StyledBoardNumWrapper } from "./style";
import BoardBar from "../../molecule/BoardBar";

const BoardList = ({list})=>{
    const DEFAULT_WIDTH = [20,60,20];
    return(
        <StyledBoardList>
            <StyledBoardMenu>
                <StyledBoardNumWrapper> 번호 </StyledBoardNumWrapper>
                <StyledBoardNameWrapper> 제목 </StyledBoardNameWrapper>
                <StyledBoardCreateDateWrapper> 생성일 </StyledBoardCreateDateWrapper>
            </StyledBoardMenu>
            <StyledBoardListWrapper>
                {
                    list.map(({...rest},index)=>{
                        return (
                            <BoardBar num={index} {...rest}></BoardBar>
                        );
                    })
                }
            </StyledBoardListWrapper>
        </StyledBoardList>
    );
}

export default BoardList