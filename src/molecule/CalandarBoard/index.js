import React from "react";
import { StyledCalandarBoard } from "./style";

const CalandarBoard = ({date,day,name, onClickHandler, ...rest})=>{
    return(
        <StyledCalandarBoard id={rest.isMonth?date:date*-1} name={name} onClick={onClickHandler} day={day} {...rest}>
            {date}
        </StyledCalandarBoard>
    );
}

export default CalandarBoard;
