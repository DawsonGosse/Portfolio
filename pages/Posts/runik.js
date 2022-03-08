import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { useTheme } from "../../utils/provider";
import { themes } from '../../utils/variables'
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
import HeaderImage from '../../public/HeaderImageRunik.png'
import WireFrame from '../../public/WireFrameRunik.png'
import MidFi from '../../public/MidFiRunik.png'
import HiFi from '../../public/HiFiRunik.png'



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
  color:#ED5662;
  margin-bottom:61px;
`;
const PersonaCard = styled.div`
position:relative;
display:flex;
flex-direction:column;
height:100%;
margin-left:61px;


`;
const ImgCont = styled.div`
width:90%;
position:relative;
margin:0;
padding:0;

`;

const ButCont = styled.a`
display:flex;
justify-content:center;
align-items:center;
`;

const ImageHeader = styled.div`
width:100%;
position:relative;
margin:0;
padding:0;
`



export default function Runik() {
  const {theme, setTheme} = useTheme();

  return (<Container>
    <NavBar onButtonClick={()=>setTheme(theme==='dark'?'default':'dark')}></NavBar>
    <ImageHeader>
      <Image src={HeaderImage} layout='responsive' objectFit='cover'></Image>
    </ImageHeader>
    <ContentBlock>
       <ProjectCard></ProjectCard>
       <UserResearchCard></UserResearchCard>
       <PersonaCard>
            <Header>Personas</Header>
            <ImgCont>
                <Image src={Persona1} layout='responsive'></Image>
                <Image src={Persona2} layout='responsive'></Image>
            </ImgCont>
       </PersonaCard>
       <PrototypeCard 
       text="When it came to building the interface, we wanted our design language to be minimal, modern and elegant, with little nods to the fantastical worlds. From the nav bar to the footer and everything in-between, our end-user was the focus of every decision we made."
       img1={WireFrame}
       img2={MidFi}
       img3={HiFi}
       ></PrototypeCard>
    </ContentBlock>

    <Footer></Footer>
  </Container>
  )
}