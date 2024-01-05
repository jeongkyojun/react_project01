import React, { useState } from "react";
import { StyledCalandarPage, StyledCalandarWrap } from "./style";
import { DATE, DAY, LAST_DAY, FIRST_DAY, MONTH, YEAR, MONTH_END } from "../../data/calandar";
import Calandar from "../../organ/Calandar";
import TodoList from "../../molecule/todoList";
import { useRecoilState } from "recoil";
import { listState, nameState } from "../../data/values";
import Navbar from "../../organ/Navbar";

const CalanadarPage = ()=>{
    const [name, setName] = useRecoilState(nameState);

    const [year, setYear] = useState(YEAR);
    const [selYear,setSelYear] = useState(YEAR);
    const [month,setMonth] = useState(MONTH+1);
    const [selMonth,setSelMonth] = useState(MONTH+1);
    const [date,setDate] = useState(DATE);
    const [firstDay,setFirstDay] = useState(FIRST_DAY);
    const [lastDay,setLastDay] = useState(LAST_DAY);
    const [list,setList] = useRecoilState(listState);

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
    const clickDate = (e)=>{
        if(e.target.id<1) return;
        setDate(e.target.id);
        setSelYear(year);
        setSelMonth(month);
    }
    const onCheckBoxHandler = (e)=>{
        setList((prev)=>{
            let item = [];
            console.log(prev);
            prev.map(({id,text,isEnd})=>{
                if(id===e.target.id)
                {
                    item.push({id:id,text:text,isEnd:!isEnd});
                }  
                else
                    item.push({id:id,text:text,isEnd:isEnd});
            })
            return item;
        });
    }

    return(
        <StyledCalandarPage>
            <h1>hello, {name}</h1>
            <Navbar isRow></Navbar>
            <StyledCalandarWrap>
                <Calandar 
                    year ={year} 
                    month={month} 
                    date={date} 
                    firstDay={firstDay} 
                    lastDay={lastDay} 
                    width={35} 
                    height={30} 
                    nowYear={YEAR}
                    nowMonth={MONTH}
                    nowDate={DATE}
                    addMonthHandler={addMonth} 
                    subMonthHandler={subMonth}
                    onClickHandler={clickDate}> 
                </Calandar>
                <TodoList 
                    lists={list}
                    year={selYear}
                    month={selMonth}
                    date={date}
                    width={30} 
                    height={35}
                    checkBoxWidth={1}
                    onChangeHandler={onCheckBoxHandler}
                    ></TodoList>
            </StyledCalandarWrap>
        </StyledCalandarPage>
    );
}

export default CalanadarPage;
