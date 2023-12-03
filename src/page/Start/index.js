import React from "react"
import { StyledButtonWrapper, StyledStart, StyledStartBody } from "./style";
import { useRecoilState } from "recoil";
import { nameState } from "../../data/values";
import Button from "../../atom/Button";
import Input from "../../atom/Input";
import TodoList from "../../molecule/todoList";
import Calandar from "../../organ/Calandar";
const Start = ()=>{
    const [name, setName] = useRecoilState(nameState);
    return(
        <StyledStart>
            <h1>hello, {name}</h1>
            <StyledStartBody>
                <Input></Input>
                <Button></Button>
            </StyledStartBody>
            <TodoList></TodoList>
            <Calandar></Calandar>
        </StyledStart>
    );
}
export default Start;
