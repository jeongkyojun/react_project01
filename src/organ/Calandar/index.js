import React from "react";
import { StyledCalandar } from "./style";
import CalandarBody from "../../molecule/CalandarBody";
import CalandarHead from "../../molecule/CalandarHead";

const Calandar = ({month, firstdate, lastdate})=>{
    return(
        <StyledCalandar>
            <CalandarHead month={3}></CalandarHead>
            <CalandarBody></CalandarBody>
        </StyledCalandar>
    );
}

export default Calandar;
