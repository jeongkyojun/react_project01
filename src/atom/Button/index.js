import React from "react";
import { StyledButton } from "./style";

const Button = ({onClickHandler,children, ...rest})=>{
    return(
        <StyledButton {...rest} onClick={onClickHandler}>
            {children}
        </StyledButton>
    )
}

export default Button;
