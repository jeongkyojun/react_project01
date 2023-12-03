import React from "react";
import { StyledCalandarHead } from "./style";
import Button from "../../atom/Button";

const CalandarHead = ({month})=>{
    return(
        <StyledCalandarHead>
            <Button>이전 달</Button>
            {month}월
            <Button>다음 달</Button>
        </StyledCalandarHead>
    )
}

export default CalandarHead;
