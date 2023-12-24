import React from "react"
import { 
    StyledBoardCreateDateWrapper, 
    StyledBoardCreatorWrapper, 
    StyledBoardGoodWrapper, 
    StyledBoardList, 
    StyledBoardListWrapper, 
    StyledBoardMenu, 
    StyledBoardNumWrapper,
    StyledBoardTitleWrapper, 
    StyledBoardViewWrapper} from "./style";
import BoardBar from "../../molecule/BoardBar";

const BoardList = ({list})=>{
    const DEFAULT_WIDTH = [20,60,20];
    return(
        <StyledBoardList>
            <StyledBoardMenu>
                <StyledBoardNumWrapper> 번호 </StyledBoardNumWrapper>
                <StyledBoardTitleWrapper> 제목 </StyledBoardTitleWrapper>
                <StyledBoardCreatorWrapper> 작성자 </StyledBoardCreatorWrapper>
                <StyledBoardCreateDateWrapper> 작성일 </StyledBoardCreateDateWrapper>
                <StyledBoardViewWrapper> 조회수 </StyledBoardViewWrapper>
                <StyledBoardGoodWrapper>추천</StyledBoardGoodWrapper>
            </StyledBoardMenu>
            <StyledBoardListWrapper>
                {
                    list.map(({...rest},index)=>{
                        return (
                            <BoardBar {...rest}></BoardBar>
                        );
                    })
                }
            </StyledBoardListWrapper>
        </StyledBoardList>
    );
}

export default BoardList