import React from "react"
import { StyledButtonWrapper, StyledStart, StyledStartBody } from "./style";
import { useRecoilState } from "recoil";
import { nameState } from "../../data/values";
import Navbar from "../../organ/Navbar";

const Start = ()=>{
    const [name] = useRecoilState(nameState);

    return(
        <StyledStart>
            <h1>hello, {name}</h1>
            <Navbar isRow></Navbar>
            <StyledStartBody>
            </StyledStartBody>
        </StyledStart>
    );
}
export default Start;
