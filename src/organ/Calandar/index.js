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
        let nowMonth = month;
        setMonth((prev)=>{
            if(prev==12){
                addYear();
                nowMonth = 1;
                return 1;
            }
            nowMonth+=1;
            return prev+1;
        });     
        setFirstDay((lastDay+1)%7);
        setLastDay((prev)=>{
            return (prev+MONTH_END[year%4][nowMonth-1])%7;
        }) 
    }
    const subMonth = ()=>{
        const nowMonth = month;
        setMonth((prev)=>{
            if(prev==1){
                if(subYear()){
                    setLastDay((firstDay+6)%7);
                    setFirstDay((prev)=>{
                        return((prev+35-MONTH_END[(year-1)%4][11])%7);
                    })
                    return 12;
                }    
                return 1; // 변화 없음
            }
            setLastDay((firstDay+6)%7);
            setFirstDay((prev)=>{
                return((prev+35-MONTH_END[year%4][nowMonth-2])%7);
            })
            return prev-1;
        });
    }
    return(
        <StyledCalandar>
            <CalandarHead year={year} month={month} addMonthHandler={addMonth} subMonthHandler={subMonth}></CalandarHead>
            <CalandarBody year ={year} month={month} date={nowDate} first={firstDay} end={lastDay} width={35} height={30}></CalandarBody>
        </StyledCalandar>
    );
}

export default Calandar;
