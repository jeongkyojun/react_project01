import React from "react"
import { StyledButtonWrapper, StyledStart, StyledStartBody } from "./style";
import { useRecoilState } from "recoil";
import { nameState } from "../../data/values";
import Button from "../../atom/Button";
import Input from "../../atom/Input";
import TodoList from "../../molecule/todoList";
import Calandar from "../../organ/Calandar";
import Navbar from "../../organ/Navbar";
import { useNavigate } from "react-router-dom";
import CalandarPage from "../CalandarPage";
const Start = ()=>{
    const [name] = useRecoilState(nameState);
    const navigate = useNavigate();

    const navigateCalandar = ()=>{
        navigate('/calandar');
    }
    const navigateHome = ()=>{
        navigate('/start');
    }
    const navigateSetting = ()=>{
        navigate('/calandar');
    }
    const navigateCheckList = ()=>{
        navigate('/calandar');
    }
    const btnList = [
        {
            children: '홈',
            onClickHandler: navigateHome,
            borderColor: 'white',
        },
        {
            children: '캘린더',
            onClickHandler: navigateCalandar,
            borderColor: 'white',
        },
        {
            children: '체크리스트',
            onClickHandler: navigateCheckList,
            borderColor: 'white',
        },
        {
            children: '세팅',
            onClickHandler: navigateSetting,
            borderColor: 'white',
        },
    ];

    return(
        <StyledStart>
            <h1>hello, {name}</h1>
            <Navbar btnList={btnList} isRow></Navbar>
            <StyledStartBody>
                <Input></Input>
                <Button></Button>
            </StyledStartBody>
            <CalandarPage></CalandarPage>
        </StyledStart>
    );
}
export default Start;
