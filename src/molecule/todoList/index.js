import React from "react";
import CheckBox from "../../atom/Checkbox";
import { StyledTodoList, StyledTodoListHead } from "./style";
import CheckboxLabel from "../CheckboxLabel";

const TodoList = ({lists,year,month,date,width,height,checkBoxWidth,onChangeHandler})=>{
    return (
        <StyledTodoList width={width} height={height}>
            <StyledTodoListHead>
                {year+'년 '+month+'월 '+date+'일'}
            </StyledTodoListHead>
            {
                lists?.map(({text,isEnd})=>{
                    return(
                        <CheckboxLabel width={checkBoxWidth} labelValue={text} isEnd={isEnd} onChangeHandler={onChangeHandler}></CheckboxLabel>
                    )
                })
            }
        </StyledTodoList>
    );
}

export default TodoList;
