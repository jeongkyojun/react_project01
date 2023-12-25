import React from "react";
import { 
    StyledBoardBar, 
    StyledBoardCreateDateWrapper, 
    StyledBoardCreatorWrapper, 
    StyledBoardGoodWrapper,
    StyledBoardMenu, 
    StyledBoardNumWrapper,
    StyledBoardTitleWrapper, 
    StyledBoardViewWrapper 
} from "./style";

const BoardBar = ({num, title, creator,createDate,view,good, onClickHandler, ...rest})=>{

    const makeCreateDate = (date) =>{
        const time = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        let value = (year%100)+"."+(month+1)+"."+day;
        if(time.getFullYear() === year && time.getMonth() === month && time.getDate() === day)
        {
            value = date.getHours()+':'+date.getMinutes();
        }
        return value;
    }

    return(
        <StyledBoardBar onClick = {onClickHandler} id={num} {...rest} >
            <StyledBoardMenu>
                <StyledBoardNumWrapper width={rest.numWidth}> {num%100000} </StyledBoardNumWrapper>
                <StyledBoardTitleWrapper width={rest.titleWidth} > {title} </StyledBoardTitleWrapper>
                <StyledBoardCreatorWrapper width={rest.creatorWidth}> {creator} </StyledBoardCreatorWrapper>
                <StyledBoardCreateDateWrapper width={rest.dateWidth}> {makeCreateDate(createDate)} </StyledBoardCreateDateWrapper>
                <StyledBoardViewWrapper width={rest.viewWidth}> {view} </StyledBoardViewWrapper>
                <StyledBoardGoodWrapper width={rest.goodWidth}> {good} </StyledBoardGoodWrapper>
            </StyledBoardMenu>
        </StyledBoardBar>
    );
}

export default BoardBar;