import React from "react";
import { StyledCalandarBody, StyledWeekRender } from "./style";
import CalandarBoard from "../CalandarBoard";

const CalandarBody = ({date,first,end, width, height, ...rest})=>{

    const calandarWeekRendering = (week,day) =>{
        const weekCalandar = [];
        for(let i=0;i<7;i++){
            let date = 30+(week*7)+i-day;
            weekCalandar.push(<CalandarBoard date={date%31+1} width={width/7} height={height/6}/>)
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
                calandarRendering()
            }
        </StyledCalandarBody>
    )
}

export default CalandarBody;
