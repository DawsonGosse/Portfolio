import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { useTheme } from "../../utils/provider";
import Image from 'next/image'
import NavBar from '../../comps/NavBar'
import Footer from '../../comps/Footer';
import ProjectCard from '../../comps/ProjectCard';
import UserResearchCard from '../../comps/UserResearchCard';
import Bubble from '../../comps/Bubble';
import Persona1 from '../../public/UserPersonaRunik.png';
import Persona2 from '../../public/UserPersonaRunik2.png';


const Container = styled.div`
  width:100%;
  height:100%;
  position:relative;
`;

const ContentBlock = styled.div`
  width:100vw;
  display:flex;
  flex-direction:column;
  margin-bottom:200px;
`;
const Header = styled.h2`
  font-family: Spartan;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color:#F3F3F3;
  margin:61px;
`;
const BGOrange = styled.div`
background-color:#E48C34;
position:relative;
display:flex;
flex-direction:column;
height:1000px;
z-index:-3;
`;
const ImgCont = styled.div`
display:flex;
position:relative;
height:600px;
width:1100px;
justify-content:space-between;
margin-left:170px;
z-index:-1;

`;



export default function Artwork() {
  const {theme, setTheme} = useTheme();

  return (<Container>
    <NavBar onButtonClick={()=>setTheme(theme==='dark'?'default':'dark')}></NavBar>
    <ContentBlock>
       <ProjectCard></ProjectCard>
       <UserResearchCard></UserResearchCard>
       <BGOrange>
            <Header>Personas</Header>
            <Bubble top="550px"></Bubble>
            <ImgCont>
                <Image src={Persona1} width="505px" height="600px"></Image>
                <Image src={Persona2} width="505px" height="600px"></Image>
            </ImgCont>
       </BGOrange>
       
    </ContentBlock>
    <Footer></Footer>
  </Container>
  )
}