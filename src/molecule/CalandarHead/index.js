import React from "react";
import { StyledCalandarHead } from "./style";
import Button from "../../atom/Button";

const CalandarHead = ({year, month, subMonthHandler, addMonthHandler})=>{
    return(
        <StyledCalandarHead>
            <Button onClickHandler={subMonthHandler}>이전 달</Button>
            {year}년 {month}월
            <Button onClickHandler={addMonthHandler}>다음 달</Button>
        </StyledCalandarHead>
    )
}

export default CalandarHead;
