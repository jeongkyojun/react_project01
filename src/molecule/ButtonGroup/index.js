import React from "react";
import Button from "../../atom/Button";
import { StyledButtonGroup } from "./style";

const ButtonGroup = ({btnList, isRow})=>{
    return(
        <StyledButtonGroup isRow={isRow}>
            {
                btnList?.map(({onClickHandler,children, ...rest},idx)=>{
                    return(
                        <Button key={children+'#'+idx} onClickHandler={onClickHandler} {...rest}>{children}</Button>
                    );
                })
            }
        </StyledButtonGroup>
    );
}

export default ButtonGroup;
