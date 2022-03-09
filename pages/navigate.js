import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import { useTheme } from "../utils/provider";
import { themes } from '../utils/variables'
import Footer from '../comps/Footer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'


const Container = styled.div`
  width:100%;
  height:100%;
`;

const ContentBlock = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
const Links = styled.a`
    color:${props=>props.color};
    margin:15px;
    font-family: Spartan;
    font-weight: 600;
    font-size: 18px;
    display:flex;
    &:hover {
        color:${props=>props.hcolor};
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


export default function Artwork() {
    const {theme} = useTheme();
    const router = useRouter();

  return (<Container>
    <ContentBlock>
            <Links onClick={()=>router.push("/")} color={themes[theme].Header} hcolor={themes[theme].Alt}>Home</Links>
            <Links onClick={()=>router.push("/projects")} color={themes[theme].Header} hcolor={themes[theme].Alt}>Development</Links>
            <Links onClick={()=>router.push("/contact")} color={themes[theme].Header} hcolor={themes[theme].Alt}>Contact</Links>
    </ContentBlock>
    <Footer></Footer>
  </Container>
  )
}