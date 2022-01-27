import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { useTheme } from "../../utils/provider";
import Image from 'next/image'
import NavBar from '../../comps/NavBar'
import Footer from '../../comps/Footer';
import ProjectCard from '../../comps/ProjectCard';
import UserResearchCard from '../../comps/UserResearchCard';
import Bubble from '../../comps/Bubble';
import Persona1 from '../../public/NuancePersona1.png';
import Persona2 from '../../public/NuancePersona2.png';
import PrototypeCard from '../../comps/PrototypeCard';
import PhotoCard from '../../comps/PhotoCard';
import UserTestingCard from '../../comps/UserTestingCard';
import NuanceProto from '../../public/NuancePrototype.png'
import NuanceHifi from '../../public/NuanceHifi.png'
import NuanceUserTesting from '../../public/NuanceUserTesting.png'

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
height:862px;
z-index:-3;
`;
const ImgCont = styled.div`
display:flex;
position:relative;
height:448px;
width:1300px;
justify-content:space-between;
margin-left:74px;
z-index:-1;

`;

var data = {
    Title:"Nuance",
    Roles:"Lead Front-end Developer, Designer",
    Timeline:"Jan 2021 - May 2021",
    TeamSize:"4 People, 2 front-end, 2 designers",
    problem:`One day at school, our instructor asked the class whether we agreed with businesses posting about social justice issues or not- in response, the Zoom Room was dead silent. For fear of saying something controversial, nobody wanted to answer.
            We began our research on the topic of social discourse and identified that the need for nuance was great...   
            Being exposed to different perspectives and having one’s ideas challenged is both beneficial and necessary, yet there was no such platform to do so.`,
    solution:`Thus Nuance was born, an educational app related to cultural awareness & understanding.
    the goal of Nuance is to challenge users to question their thinking about important topics.
    Nuance presents all sides of an idea, free from the labels of partisanship and biases.`,
    Hypothesis:"Users want an unbiased way to learn about controversial topics without feeling judged or attacked for their belief",
    Methods:"Surveys, Polls, User interviews and research on topics, methods and bias proved our hypothesis",
    Synthesis:"Gather research and refine hypothesis and user pain-points",
    Prototype:"Due to the complex UI of the app, we went through many variations and tests to make sure our users can easy navigate and understand the interface. We kept the design simple and minimal to make it easier for the user to focus on the content in the application."
}

export default function Nuance() {
  const {theme, setTheme} = useTheme();

  return (<Container>
    <NavBar onButtonClick={()=>setTheme(theme==='dark'?'default':'dark')}></NavBar>
    <ContentBlock>
       <ProjectCard projTitle={data.Title} projRoles={data.Roles} projTimeline={data.Timeline} projTeamSize={data.TeamSize} problem={data.problem} solution={data.solution}></ProjectCard>
       <UserResearchCard hypothesis={data.Hypothesis} methods={data.Methods} synthesis={data.Synthesis}></UserResearchCard>
       <BGOrange>
            <Header>Personas</Header>
            <Bubble top="430px"></Bubble>
            <Bubble left="800px" size='220px' text='We targeted a younger audience who has a love for learning'></Bubble>
            <ImgCont>
                <Image src={Persona1} width="604px" height="448px"></Image>
                <Image src={Persona2} width="604px" height="448px"></Image>
            </ImgCont>
       </BGOrange>
       <PrototypeCard text={data.Prototype} img={NuanceProto}></PrototypeCard>
       <PhotoCard img={NuanceHifi} width='80%' height='504px'></PhotoCard>
       <UserTestingCard width="75%" height="675px" text='We got user feedback throughout each design iteration making sure to implement changes to better suit our intended users ' img={NuanceUserTesting}></UserTestingCard>
    </ContentBlock>
    <Footer></Footer>
  </Container>
  )
}