import React from "react";
import { StyledBoardBar } from "./style";

const BoardBar = ({num, name, createDate, onClickHandler, ...rest})=>{
    return(
        <StyledBoardBar {...rest}>
            {num} || {name} || {createDate}
        </StyledBoardBar>
    );
}

export default BoardBar