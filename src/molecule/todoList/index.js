import React from "react";
import CheckBox from "../../atom/Checkbox";
import { StyledTodoList } from "./style";

const TodoList = ({lists})=>{
    return (
        <StyledTodoList>
            {
                lists?.map(({text})=>{
                    return(
                        <CheckBox text={text}></CheckBox>
                    )
                })
            }
        </StyledTodoList>
    );
}

export default TodoList;
