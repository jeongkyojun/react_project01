import React, { useState } from "react";
import { StyledCalandarPage } from "./style";
import { DATE, DAY, LAST_DAY, FIRST_DAY, MONTH, YEAR } from "../../data/calandar";
import Calandar from "../../organ/Calandar";

const CalanadarPage = ()=>{
    const [first, setFirst] = useState(FIRST_DAY);
    const [last, setLast] = useState(LAST_DAY);
    return(
        <StyledCalandarPage>
            CALANDAR {YEAR+' - '+MONTH+' - '+DATE+' :: '+DAY+' / '+first+' & '+last}
            <Calandar></Calandar>
        </StyledCalandarPage>
    );
}

export default CalanadarPage;
