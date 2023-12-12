import React from "react";
import { StyledCalandarBody, StyledWeekHead, StyledWeekHeadBoard, StyledWeekRender } from "./style";
import CalandarBoard from "../CalandarBoard";
import { DAY_NAME, MONTH, MONTH_END } from "../../data/calandar";

const CalandarBody = ({year,month, date,first,end, width, height, ...rest})=>{

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
            let date = 7*week+i+1-day;
            if(date<=0)
                date+=BEFORE_MONTH;
            if(week>2&&date>MONTH_END[year%4][month-1])
                date-=MONTH_END[year%4][month-1];
            /*
            1   2   3   4   5   6   7
            8   9   10  11  12  13  14
            15  16  17  18  19  20  21 
            22  23  24  25  26  27  28 
            29  30  31  32  33  34  35 
            36  37  38  39  40 
            */
            weekCalandar.push(<CalandarBoard date={date} width={width/7} height={(height/6)-1} day={i}/>)
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
            {year+' - '+month+' - '+date+'('+MONTH_END[year%4][month-1]+')'}
        </StyledCalandarBody>
    )
}

export default CalandarBody;
