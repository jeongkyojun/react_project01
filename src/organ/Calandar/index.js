import React, { useEffect, useState } from "react";
import { StyledCalandar } from "./style";
import CalandarBody from "../../molecule/CalandarBody";
import CalandarHead from "../../molecule/CalandarHead";

const Calandar = ({
    year,
    month,
    date,
    firstDay,
    lastDay,
    width,
    height,
    nowYear,
    nowMonth,
    nowDate,
    addMonthHandler,
    subMonthHandler,
    onClickHandler,
    })=>{
    
    return(
        <StyledCalandar>
            <CalandarHead year={year} month={month} height={height*0.1+'rem'}
                addMonthHandler={addMonthHandler} subMonthHandler={subMonthHandler}></CalandarHead>
            <CalandarBody year ={year} month={month} date={date} first={firstDay} end={lastDay} 
                nowYear={nowYear} nowMonth={nowMonth} nowDate={nowDate}
                width={width} height={height*0.9} onClickHandler={onClickHandler}></CalandarBody>
        </StyledCalandar>
    );
}

export default Calandar;
