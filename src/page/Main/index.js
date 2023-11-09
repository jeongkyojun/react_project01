import React, { useState } from "react";

import { StyledInputBlock, StyledMain } from "./style"
import Input from "../../atom/Input";
import Button from "../../atom/Button";
import { nameState } from "../../data/values";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { validateName } from "./check";

const Main = ()=>{
    const [name, setName] = useRecoilState(nameState);
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const InputChangeHandler = (e)=>{
        setInput(e.target.value);
    }
    
    const PressEnterHandler = (e)=>{
        if(e.key==='Enter')
            ButtonClickHandler();
    }

    const ButtonClickHandler = ()=>{
        const nameChk = validateName(input);
        if(nameChk.code){
            setName(input);
            navigate('/start');
            return;
        }
        console.log(nameChk.text);
    }
    
    return(
        <StyledMain>
            <StyledInputBlock>
                <h3>
                    input your name
                </h3>
                <Input width={10} height={1.5} onChangeHandler={InputChangeHandler} onKeyPress={PressEnterHandler}></Input>
                <Button width={10} height={1.5} onClickHandler={ButtonClickHandler}>Select</Button>
            </StyledInputBlock>
        </StyledMain>
    );
}

export default Main;
