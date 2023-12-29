import React from "react";
import { StyledCalandarBody, StyledWeekHead, StyledWeekHeadBoard, StyledWeekRender } from "./style";
import CalandarBoard from "../CalandarBoard";
import { DAY_NAME, MONTH, MONTH_END } from "../../data/calandar";

const CalandarBody = ({
    year,
    month, 
    date, 
    first,
    end, 
    width, 
    height,
    nowYear,
    nowMonth,
    nowDate, 
    onClickHandler,
    ...rest})=>{

    let BEFORE_MONTH;
    const calandarWeekHeadRendering = ()=>{
        const weekHead = [];
        for(let i=0;i<7;i++){
            weekHead.push(<StyledWeekHeadBoard width={width}>{DAY_NAME[i]}</StyledWeekHeadBoard>)
        }
        return (
            <StyledWeekHead>
                {weekHead}
            </StyledWeekHead>
        );
    }
    const calandarWeekRendering = (week,day) =>{
        const weekCalandar = [];
        BEFORE_MONTH = MONTH_END[(year-1)%4][11];
        if(month!=1)
            BEFORE_MONTH = MONTH_END[year%4][month-2];
        for(let i=0;i<7;i++){
            let isMonth = true;
            let isToday = false;
            let date = 7*week+i+1-day;
            
            if(month===(nowMonth+1) && date===nowDate && year===nowYear){
                isToday = true;
            }
            if(date<=0){
                // 이전달
                isMonth = false;
                date+=BEFORE_MONTH;
            }
            if(week>2&&date>MONTH_END[year%4][month-1]){
                // 다음달
                isMonth = false;
                date-=MONTH_END[year%4][month-1];
            }
            
            weekCalandar.push(<CalandarBoard date={date} width={width/7} height={(height/6)-0.5} day={i} isMonth={isMonth} isToday={isToday} name={i} onClickHandler={onClickHandler}/>)
        }
        return(
            <StyledWeekRender>
                {weekCalandar}
            </StyledWeekRender>
        );
    }
    const calandarRendering = ()=>{
        const result = [];
        for(let i=0;i<6;i++){
            result.push(calandarWeekRendering(i,first));
        }
        return result;
    }

    return(
        <StyledCalandarBody widht={width} height={height} {...rest}>
            {
                calandarWeekHeadRendering()
            }
            {
                calandarRendering()
            }
        </StyledCalandarBody>
    )
}

export default CalandarBody;
