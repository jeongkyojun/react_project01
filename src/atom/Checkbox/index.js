import React from "react";
import { StyledInput, StyledLabel, StyledText } from "./style";
import Input from "../Input";

const CheckBox = ({text,width,onChangeHandler})=>{
    return(
        <StyledLabel htmlFor={text}>
            <Input width={width} type="checkbox" id={text} name={text} onChangeHandler={onChangeHandler}></Input>
            <StyledText>{text}</StyledText>
        </StyledLabel>
    );
}

export default CheckBox;
