import React from "react";
import { StyledInput } from "./style";

const Input = ({value,onChangeHandler,onKeyDownHandler,type, ...rest})=>{
    return(
        <StyledInput value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} type={type} {...rest}/>
    );
}

export default Input;
