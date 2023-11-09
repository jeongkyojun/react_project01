import React from "react"
import { StyledButtonWrapper, StyledStart, StyledStartBody } from "./style";
import { useRecoilState } from "recoil";
import { nameState } from "../../data/values";
import Button from "../../atom/Button";
import Input from "../../atom/Input";
const Start = ()=>{
    const [name, setName] = useRecoilState(nameState);
    return(
        <StyledStart>
            <h1>hello, {name}</h1>
            <StyledStartBody>
                <Input></Input>
                <Button></Button>
            </StyledStartBody>
        </StyledStart>
    );
}
export default Start;
