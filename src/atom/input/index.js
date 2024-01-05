import React from "react";
import { StyledInput } from "./style";

const Input = ({id,value,onChangeHandler,onKeyDownHandler,onClickHandler,type, ...rest})=>{
    return(
        <StyledInput id={id} value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} onClick={onClickHandler} type={type} {...rest}/>
    );
}

export default Input;
