import React from "react";
import ButtonGroup from "../../molecule/ButtonGroup";
import { StyledNavbar } from "./style";
import { useNavigate } from "react-router-dom";
import navigator from "../../data/navigation";
import { getBtnInfos } from "./getButtonInfo";

const Navbar = ({isRow})=>{

    const navigate = useNavigate();

    return(
        <StyledNavbar>
            <ButtonGroup btnList = {getBtnInfos(navigate)} isRow={isRow}></ButtonGroup>
        </StyledNavbar>
    )
}

export default Navbar;
