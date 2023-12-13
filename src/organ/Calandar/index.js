import React, { useEffect, useState } from "react";
import { StyledCalandar } from "./style";
import CalandarBody from "../../molecule/CalandarBody";
import CalandarHead from "../../molecule/CalandarHead";
import { DATE, DAY, FIRST_DAY, LAST_DAY, MONTH, MONTH_END, YEAR } from "../../data/calandar";

const Calandar = ()=>{
    const [year, setYear] = useState(YEAR);
    const [month,setMonth] = useState(MONTH+1);
    const [date,setDate] = useState(DATE);
    const [firstDay,setFirstDay] = useState(FIRST_DAY);
    const [lastDay,setLastDay] = useState(LAST_DAY);
    const nowDate = DATE;

    const addYear = ()=>{
        setYear((prev)=>{ return (prev+1);})};
    const subYear = ()=>{
        if(year==1) return false;
        setYear((prev)=>{ return (prev-1);});
        return true;
    }
    const addMonth = ()=>{
        let nextMonth = month;
        let nextYear = year;
        nextMonth+=1;
        if(nextMonth>12)
        {
            nextYear+=1;
            addYear();
            nextMonth%=12;
        }    
        setMonth(nextMonth);     
        const nextLast = (lastDay+MONTH_END[nextYear%4][nextMonth-1])%7
        setFirstDay((lastDay+1)%7); // 첫날 = 마지막날 + 1 한 뒤, 7인경우 0으로
        setLastDay(nextLast); 
    }
    const subMonth = ()=>{
        let nextMonth = month;
        let nextYear = year;
        let nextFirst = firstDay;
        nextMonth = month-1
        if(nextMonth<1){
            nextMonth = 1;
            if(subYear()){
                nextYear-=1;
                nextMonth = 12;
            }
        }
        nextFirst = (firstDay+35-MONTH_END[nextYear%4][nextMonth-1])%7;
        setMonth(nextMonth);
        setLastDay((firstDay+6)%7);
        setFirstDay(nextFirst); // 첫날 = 마지막날 + 1 한 뒤, 7인경우 0으로
    }
    return(
        <StyledCalandar>
            <CalandarHead year={year} month={month} addMonthHandler={addMonth} subMonthHandler={subMonth}></CalandarHead>
            <CalandarBody year ={year} month={month} date={nowDate} first={firstDay} end={lastDay} width={35} height={30}></CalandarBody>
        </StyledCalandar>
    );
}

export default Calandar;
