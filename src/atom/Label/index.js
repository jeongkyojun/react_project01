import React from "react";
import { StyledLabel } from "../Checkbox/style";

const Label = ({ children, fontSize, textColor, htmlFor, ...rest }) => {
    return (
        <StyledLabel fontSize={fontSize} textColor={textColor} htmlFor={htmlFor} {...rest}>
            {children}
        </StyledLabel>
    );
};

export default Label;