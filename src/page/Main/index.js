import React from "react";

import { StyledInputBlock, StyledMain } from "./style"
import Input from "../../atom/Input";

const Main = ()=>{

    return(
        <StyledMain>
            <StyledInputBlock>
                <h3>
                    input your name
                </h3>
            </StyledInputBlock>
        </StyledMain>
    );
}

export default Main;
