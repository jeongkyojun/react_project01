import React from "react";
import { StyledCalandarBoard } from "./style";

const CalandarBoard = ({date,isHoliday,...rest})=>{
    return(
        <StyledCalandarBoard {...rest}>
            {date}
        </StyledCalandarBoard>
    );
}

export default CalandarBoard;
