import React from "react";
import { StyledCheckboxLabel, StyledCheckboxWrap, StyledLabelWrap } from "./style";
import Input from "../../atom/Input";
import Label from "../../atom/Label";

const CheckboxLabel = ({
    id,
    isEnd,
    inputFontSize,
    inputTextColor,
    inputBackgroundColor,
    inputchangeHandler,
    inputKeydownHandler,
    labelValue,
    labelColor,
    labelFontSize,
    onclickHandler,
    ...inputPropsRest})=>{
    return (
        <StyledCheckboxLabel>
            <StyledCheckboxWrap>
                <Input
                    id={id}
                    onChangeHandler={inputchangeHandler}
                    onKeyDownHandler={inputKeydownHandler}
                    type={'checkbox'}
                    checked={isEnd}
                    fontSize={inputFontSize}
                    textColor={inputTextColor}
                    backgroundColor={inputBackgroundColor}
                    onClickHandler={onclickHandler}
                    {...inputPropsRest}
                />
            </StyledCheckboxWrap>
            <StyledLabelWrap>
                <Label htmlFor={id} fontSize={labelFontSize} textColor={labelColor}>
                    {labelValue}
                </Label>
            </StyledLabelWrap>
            
        </StyledCheckboxLabel>
    );
}

export default CheckboxLabel;
