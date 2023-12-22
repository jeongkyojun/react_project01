import React from "react";
import { StyledButton } from "./style";

const Button = ({onClickHandler,children,id, ...rest})=>{
    return(
        <StyledButton id={id} {...rest} onClick={e=>onClickHandler?.(e)}>
            {children}
        </StyledButton>
    )
}

export default Button;
