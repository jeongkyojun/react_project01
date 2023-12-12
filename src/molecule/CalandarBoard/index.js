import React from "react";
import { StyledCalandarBoard } from "./style";

const CalandarBoard = ({date,day,...rest})=>{
    return(
        <StyledCalandarBoard day={day} {...rest}>
            {date}
        </StyledCalandarBoard>
    );
}

export default CalandarBoard;
