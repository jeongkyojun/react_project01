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

const BoardList = ({list,...rest})=>{
    const DEFAULT_WIDTH = ['5rem','30rem','5rem','5rem','5rem','5rem'];
    return(
        <StyledBoardList>
            <StyledBoardMenu>
                <StyledBoardNumWrapper width={DEFAULT_WIDTH[0]}> 번호 </StyledBoardNumWrapper>
                <StyledBoardTitleWrapper width={DEFAULT_WIDTH[1]} > 제목 </StyledBoardTitleWrapper>
                <StyledBoardCreatorWrapper width={DEFAULT_WIDTH[2]}> 작성자 </StyledBoardCreatorWrapper>
                <StyledBoardCreateDateWrapper width={DEFAULT_WIDTH[3]}> 작성일 </StyledBoardCreateDateWrapper>
                <StyledBoardViewWrapper width={DEFAULT_WIDTH[4]}> 조회수 </StyledBoardViewWrapper>
                <StyledBoardGoodWrapper width={DEFAULT_WIDTH[5]}> 추천 </StyledBoardGoodWrapper>
            </StyledBoardMenu>
            <StyledBoardListWrapper>
                {
                    list.map(({...listRest},index)=>{
                        return (
                            <BoardBar 
                            num={index}
                            {...rest} 
                            {...listRest} 
                            numWidth={DEFAULT_WIDTH[0]}
                            titleWidth={DEFAULT_WIDTH[1]}
                            creatorWidth={DEFAULT_WIDTH[2]}
                            dateWidth={DEFAULT_WIDTH[3]}
                            viewWidth={DEFAULT_WIDTH[4]}
                            goodWidth={DEFAULT_WIDTH[5]}></BoardBar>
                        );
                    })
                }
            </StyledBoardListWrapper>
        </StyledBoardList>
    );
}

export default BoardList