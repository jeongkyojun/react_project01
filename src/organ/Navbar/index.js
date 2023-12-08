import React from "react";
import ButtonGroup from "../../molecule/ButtonGroup";
import { StyledNavbar } from "./style";

const Navbar = ({btnList,isRow})=>{
    return(
        <StyledNavbar>
            <ButtonGroup btnList = {btnList} isRow={isRow}></ButtonGroup>
        </StyledNavbar>
    )
}

export default Navbar;
