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
import PrototypeCard from '../../comps/PrototypeCard';
import PhotoCard from '../../comps/PhotoCard';
import UserTestingCard from '../../comps/UserTestingCard';
import Button from '../../comps/Button';


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

const ButCont = styled.a`
display:flex;
justify-content:center;
align-items:center;
`;



export default function Runik() {
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
       <PrototypeCard text="When it came to building the interface, we wanted our design language to be minimal, modern and elegant, with little nods to the fantastical worlds. From the nav bar to the footer and everything in-between, our end-user was the focus of every decision we made."></PrototypeCard>
       <PhotoCard></PhotoCard>
       <UserTestingCard text='We got user feedback throughout each design iteration making sure to implement changes to better suit our intended users '></UserTestingCard>
       <ButCont target="_blank" href="https://runik.app/" rel="noopener noreferrer">
       <Button></Button>
       </ButCont>
    </ContentBlock>

    <Footer></Footer>
  </Container>
  )
}