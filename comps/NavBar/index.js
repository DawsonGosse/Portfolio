import React from 'react'
import styled from 'styled-components';
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'
import LinkedIn from '../Icons/LinkedIn';
import Instagram from '../Icons/Instagram';
import GitHub from '../Icons/Github';
import Moon from '../Icons/Moon';
import Sun from '../Icons/Sun';

const Container = styled.div`
    width:100%;
    height:56px;
    background-color:${props=>props.bgcolor};
    display:flex;
    box-shadow: ${props=>props.shadow}
`;
const Section2 = styled.div`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
`;
const Section3 = styled.div`
    display:flex;
    flex:1;
    justify-content:flex-end;
    align-items:center;
    margin-right:52px;
`;
const Section1 = styled.div`
    display:flex;
    flex:1;
    justify-content:flex-start;
    align-items:center;
    margin-left:52px;
`;

const Links = styled.a`
    color:${props=>props.color};
    margin:15px;
    font-family: Spartan;
    font-weight: 600;
    font-size: 18px;

    &:hover {
        color:#CA6444;
    }
`;

const NavBar = ({
    onButtonClick=()=>{}

}) =>{
    const {theme} = useTheme();

    return <Container bgcolor={themes[theme].body} shadow={themes[theme].shadow}>
        <Section1>
            <Moon onclick={onButtonClick} display={themes[theme].displayMoon}></Moon>
            <Sun  onclick={onButtonClick} display={themes[theme].displaySun}></Sun>
        </Section1>
        <Section2>
            <Links href='/' color={themes[theme].color}>Home</Links>
            <Links href='/projects.js' color={themes[theme].color}>Projects</Links>
            <Links href='/contact.js' color={themes[theme].color}>Contact</Links>
        </Section2>
        <Section3>
            <LinkedIn color={themes[theme].color}></LinkedIn>
            <Instagram color={themes[theme].color}></Instagram>
            <GitHub color={themes[theme].color}></GitHub>
        </Section3>
    </Container>
}

export default NavBar;