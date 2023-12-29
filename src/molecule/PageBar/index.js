import React from "react";
import Button from "../../atom/Button";
import { StyledPagebar } from "./style";

const PageBar = ({page,maxpage, onClickHandler})=>{

    const makeBtn = ()=>{
        const btnValue = [];
        for(let i = -2; i<=2;i++){
            btnValue.push(
                <Button 
                width={1.5} 
                borderColor={'grey'}
                id={Number(page)+i} 
                disabled={((Number(page)+i)<=0)||maxpage<(Number(page)+i)||i===0} 
                onClickHandler={onClickHandler}>
                    {
                        ((maxpage>=(Number(page)+i))&&(Number(page)+i)>0)?
                            (Number(page)+i):
                            "-"
                    }
                </Button>
            )
        }
        return btnValue;
    }

    return(
        <StyledPagebar>
            {
                makeBtn()
            }
        </StyledPagebar>
    );
}

export default PageBar;
