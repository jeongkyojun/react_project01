import React from "react";
import { StyledInput, StyledLabel, StyledText } from "./style";

const CheckBox = ({text})=>{
    return(
        <StyledLabel htmlFor={text}>
            <StyledInput type="checkbox" id={text} name={text}></StyledInput>
            <StyledText>{text}</StyledText>
        </StyledLabel>
    );
}

export default CheckBox;
