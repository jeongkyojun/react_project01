import React, { useState } from "react";
import { StyledCalandarPage } from "./style";

const CalanadarPage = ()=>{
    const YEAR = useState(Date.prototype.getFullYear);
    const MONTH = useState(Date.prototype.getMonth()+1);
    const DATE = useState(Date.prototype.getDate);
    const DAY = useState(Date.prototype.getDay);

    return(
        <StyledCalandarPage>
            CALANDAR {YEAR+' - '+MONTH+' - '+DATE+' :: '+DAY}
        </StyledCalandarPage>
    );
}

export default CalanadarPage;
