import React from 'react'
import styled from 'styled-components';
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'
import LinkedIn from '../Icons/LinkedIn';
import GitHub from '../Icons/Github';
import Moon from '../Icons/Moon';
import Sun from '../Icons/Sun';
import { useRouter } from 'next/router'
import Menu from '../Icons/Menu';

const Container = styled.div`
    width:100%;
    height:56px;
    background-color:${props=>props.bgcolor};
    display:flex;
    box-shadow: ${props=>props.shadow}
    z-index:5;
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
    display:none;
    &:hover {
        color:#CA6444;
    }
    //Medium
@media (min-width:481px) {
    display:flex;
  }
//Large

@media (min-width:769px) {
    display:flex;
  }
`;

const MenuCont = styled.div`
display:flex;

//Medium
@media (min-width:481px) {
display:none;
}
//Large

@media (min-width:769px) {
display:none;
}
`;

const SocialCont = styled.div`
display:none;

//Medium
@media (min-width:481px) {
display:flex;
}
//Large

@media (min-width:769px) {
display:flex;
}
`;

const NavBar = ({
    onButtonClick=()=>{},


}) =>{
    const {theme} = useTheme();
    const router = useRouter();

    return <Container bgcolor={themes[theme].body} shadow={themes[theme].shadow}>
        <Section1>
            <Moon onclick={onButtonClick} display={themes[theme].displayMoon}></Moon>
            <Sun  onclick={onButtonClick} display={themes[theme].displaySun}></Sun>
        </Section1>
        <Section2>
            <Links onClick={()=>router.push("/")} color={themes[theme].color}>Home</Links>
            <Links onClick={()=>router.push("/projects")} color={themes[theme].color}>Projects</Links>
            <Links onClick={()=>router.push("/contact")} color={themes[theme].color}>Contact</Links>
        </Section2>
        <Section3>
            <SocialCont>
                <a target="_blank" href="https://linkedin.com/in/dawson-gosse" rel="noopener noreferrer"> 
                <LinkedIn color={themes[theme].color}></LinkedIn>
                </a>
                <a target="_blank" href="https://github.com/DawsonGosse" rel="noopener noreferrer">
                <GitHub color={themes[theme].color}></GitHub>
                </a>
            </SocialCont>
            <MenuCont>
                <Menu color={themes[theme].color}/>
            </MenuCont>
        </Section3>
    </Container>
}

export default NavBar;