import React from "react";
import CheckBox from "../../atom/Checkbox";
import { StyledTodoList, StyledTodoListHead } from "./style";

const TodoList = ({lists,year,month,date,width,height,checkBoxWidth,onChangeHandler})=>{
    return (
        <StyledTodoList width={width} height={height}>
            <StyledTodoListHead>
                {year+'년 '+month+'월 '+date+'일'}
            </StyledTodoListHead>
            {
                lists?.map(({text,isEnd})=>{
                    return(
                        <CheckBox width={checkBoxWidth} text={text} isEnd={isEnd} onChangeHandler={onChangeHandler}></CheckBox>
                    )
                })
            }
        </StyledTodoList>
    );
}

export default TodoList;
