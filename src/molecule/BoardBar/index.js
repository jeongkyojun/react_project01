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

    const makeCreateDate = (createDate) =>{
        let value ="";
        value+=createDate.getYear()+'-';
        value+=createDate.getMonth()+'-';
        value+=createDate.getDate();
        return value;
    }

    return(
        <StyledBoardBar {...rest}>
            <StyledBoardMenu onClick = {onClickHandler}>
                <StyledBoardNumWrapper> {num} </StyledBoardNumWrapper>
                <StyledBoardTitleWrapper> {title} </StyledBoardTitleWrapper>
                <StyledBoardCreatorWrapper> {creator} </StyledBoardCreatorWrapper>
                <StyledBoardCreateDateWrapper> {(createDate)=>makeCreateDate(createDate)} </StyledBoardCreateDateWrapper>
                <StyledBoardViewWrapper> {view} </StyledBoardViewWrapper>
                <StyledBoardGoodWrapper> {good} </StyledBoardGoodWrapper>
            </StyledBoardMenu>
        </StyledBoardBar>
    );
}

export default BoardBar;