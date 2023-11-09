import React from "react";
import { StyledInput } from "./style,js";

const Input = ({value,onChangeHandler,...rest})=>{
    return(
        <StyledInput value={value} onChange={onChangeHandler} {...rest}/>
    );
}

export default Input;
