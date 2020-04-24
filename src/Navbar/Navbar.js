import React from 'react'
import styled from 'styled-components'
import {pizzaRed} from '../styles/Colors'
import {Title} from '../styles/Title'

export default function Navbar() {
    return (
        <NavbarStyled>
            <Logo>
                Hot Pizza 🍕
            </Logo>
        </NavbarStyled>
    );
}

const NavbarStyled = styled.div`
background:${pizzaRed};
padding:10px;
position:fixed;
width:100%;
z-index:1;

`
const Logo = styled(Title)`
font-size:20px;
color:white;
text-shadow:1px 1px 4px #380502;

`
