import React from "react";
import { StyledInput } from "./style";

const Input = ({value,onChangeHandler,onKeyDownHandler, ...rest})=>{
    return(
        <StyledInput value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} {...rest}/>
    );
}

export default Input;
