import React from "react";
import { StyledCalandarBoard } from "./style";

const CalandarBoard = ({date,isHoliday})=>{
    return(
        <StyledCalandarBoard>
            {date}
        </StyledCalandarBoard>
    );
}

export default CalandarBoard;
