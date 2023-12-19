import React from "react";
import { StyledInput } from "./style";

const Input = ({id,value,onChangeHandler,onKeyDownHandler,type, ...rest})=>{
    return(
        <StyledInput id={id} value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} type={type} {...rest}/>
    );
}

export default Input;
