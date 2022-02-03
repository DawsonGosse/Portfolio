import React from 'react'
import styled from 'styled-components';
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'


const Container = styled.div`
    width:100%;
    height:125px;
    background-color:${props=>props.bgcolor};
    display:flex;
    box-shadow: ${props=>props.shadow}
    align-items:center;
    justify-content:center;
    z-index:5;
`;
const CopyRight = styled.h5`
    font-family: Spartan;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: ${props=>props.color}

`;

const Footer = ({
   
}) =>{
    const {theme} = useTheme();

    return <Container bgcolor={themes[theme].body} shadow={themes[theme].footerShadow}>
        <CopyRight color={themes[theme].color}>Designed and created by Dawson Gosse 2022</CopyRight>
    </Container>
}

export default Footer;