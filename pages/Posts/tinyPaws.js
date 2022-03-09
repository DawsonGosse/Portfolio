import styled from 'styled-components'
import { useTheme } from "../../utils/provider";
import { themes } from '../../utils/variables'
import Image from 'next/image'
import NavBar from '../../comps/NavBar'
import Footer from '../../comps/Footer';
import ProjectCard from '../../comps/ProjectCard';
import UserResearchCard from '../../comps/UserResearchCard';
import Persona1 from '../../public/TinyPawsPersona1.png';
import Persona2 from '../../public/TinyPawsPersona2.png';
import PrototypeCard from '../../comps/PrototypeCard';
import HeaderImage from '../../public/HeaderImgTinyPaws.png'
import WireFrame from '../../public/WireFrameTinyPaws.png'
import MidFi from '../../public/MidFiTinyPaws.png'
import HiFi from '../../public/HiFiTinyPaws.png'



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
  color:${props=>props.color};
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


const ImageHeader = styled.div`
width:100%;
position:relative;
margin:0;
padding:0;
`

var data = {
    Title:"TinyPaws",
    Roles:"Developer, UI/UX Designer",
    Timeline:"Mar 2021 - May 2021",
    TeamSize:"3 People, mixed roles",
    problem:`We were challenge to create a wordpress site in a simulated freelance - client enviroment for school. Our client was a cat adoption/hosting agency that needed a complete website redesign.`,
    solution:`From ideation to final product we designed, developed and redesigned until TinyPaws was born`,
    Hypothesis:"Users want to adopt/host cats but find the process long and tedious",
    Methods:"Surveys, Polls, User interviews and research on topics, methods and bias proved our hypothesis",
    Synthesis:"Gather research and refine hypothesis and user pain-points, develop solution",
    Prototype:"We worked side by side with our client to build exactly what they were looking for. colours, navigation, images, and more where all approved by our client and backed by our research"
}



export default function TinyPaws() {
  const {theme, setTheme} = useTheme();
  const linebreak = '\n';

  return (<Container>
    <NavBar onButtonClick={()=>setTheme(theme==='dark'?'default':'dark')}></NavBar>
    <ImageHeader>
      <Image 
      src={HeaderImage} 
      layout='responsive' 
      objectFit='cover'
      ></Image>
    </ImageHeader>
    <ContentBlock>
    <ProjectCard 
       projTitle={data.Title} 
       projRoles={data.Roles} 
       projTimeline={data.Timeline} 
       projTeamSize={data.TeamSize} 
       problem={data.problem} 
       solution={data.solution}
       hrefApp={"http://www.kellymenzul.ca/Tinypaws/"}
       hrefGit={""}
    ></ProjectCard>
       <UserResearchCard
        hypothesis={data.Hypothesis} 
        methods={data.Methods} 
        synthesis={data.Synthesis}
       ></UserResearchCard>
       <PersonaCard>
            <Header color={themes[theme].Highlight}>Personas</Header>
            <ImgCont>
                <Image 
                src={Persona1} 
                layout='responsive'
                ></Image>
                <Image 
                src={Persona2} 
                layout='responsive'
                ></Image>
            </ImgCont>
       </PersonaCard>
       <PrototypeCard 
       text={data.Prototype}
       img1={WireFrame}
       img2={MidFi}
       img3={HiFi}
       ></PrototypeCard>
    </ContentBlock>

    <Footer></Footer>
  </Container>
  )
}