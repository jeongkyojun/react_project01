import React from "react";
import { StyledInputLabel, StyledInputWrap, StyledLabelWrap } from "./style";
import Input from "../../atom/Input";
import Label from "../../atom/Label";

const InputLabel = ({
    id,
    inputFontSize,
    inputTextColor,
    inputBackgroundColor,
    inputType,
    inputchangeHandler,
    inputKeydownHandler,
    labelValue,
    labelColor,
    labelFontSize,
    ...inputPropsRest})=>{
    return (
        <StyledInputLabel>
            <StyledLabelWrap>
                <Label htmlFor={id} fontSize={labelFontSize} textColor={labelColor}>
                    {labelValue}
                </Label>
            </StyledLabelWrap>
            <StyledInputWrap>
                <Input
                    id={id}
                    onChangeHandler={inputchangeHandler}
                    onKeyDownHandler={inputKeydownHandler}
                    type={inputType}
                    fontSize={inputFontSize}
                    textColor={inputTextColor}
                    backgroundColor={inputBackgroundColor}
                    {...inputPropsRest}
                />
            </StyledInputWrap>
        </StyledInputLabel>
    );
}