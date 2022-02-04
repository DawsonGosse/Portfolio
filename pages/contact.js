import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import { useTheme } from "../utils/provider";
import Footer from '../comps/Footer';
import { themes } from '../utils/variables'



const Container = styled.div`
  width:100%;
  height:100%;
`;
const ContentBlock = styled.div`
  width:100vw;
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;

  //Medium
  @media (min-width:481px) {
    flex-direction:column;
    }
  //Large
  
  @media (min-width:769px) {
    flex-direction:row;
    }

`;
const ContactBlock = styled.div`
  flex:1;
  display:flex;
  height:100%;
  padding-top:125px;
  flex-direction:column;
  padding-bottom:100px;

  //Medium
  @media (min-width:481px) {
    padding-bottom:100px;
    }
  //Large
  
  @media (min-width:769px) {
  padding-bottom:0px;
    }
`;
const AboutBlock = styled.div`
flex:1;
display:flex;
height:1000px;
padding-top:125px;
flex-direction:column;
padding-right:61px;
background-color:${props=>props.color};

//Medium
@media (min-width:481px) {
  padding-bottom:100px;
  }
//Large

@media (min-width:769px) {
padding-bottom:0px;
  }

`;
const Header = styled.h2`
  font-family: Spartan;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color:${props=>props.color};
  margin-left:61px;
  margin-bottom:90px;
`;

const Text = styled.p`
font-family: Spartan;
font-size: 18px;
color: ${props=>props.color};
margin-left:61px;
font-weight: 600;
`;

const TextAlt = styled.p`
font-family: Spartan;
font-size: 18px;
margin-top:0px;
color: ${props=>props.color};
font-weight: 600;
line-height: 142.5%;
margin-left:60px;
`;


export default function Project() {
  const {theme, setTheme} = useTheme();
  return (<Container>
    <NavBar onButtonClick={()=>setTheme(theme==='dark'?'default':'dark')}></NavBar>
    <ContentBlock>
       <ContactBlock>
          <Header color={themes[theme].Header}>Contact</Header>
          <Text color={themes[theme].Header}>Email <br/><br/>Dawsonjgosse@gmail.com</Text>
          <Text color={themes[theme].Header}>Phone <br/><br/> 236-777-6765</Text>
       </ContactBlock>
       <AboutBlock color={themes[theme].Header}>
          <Header color={themes[theme].AltHeader}>About Me</Header>
          <TextAlt color={themes[theme].AltHeader}>Hey there! Im Dawson, a Creative Front-end developer & UI/UX designer skilled at working in project-orientated team environments creating cross-platform applications.
          <br/><br/>
          I have experience In...
          <br/><br/>
          - web development technologies (Next.js, WordPress, HTML & CSS, Javascript)<br/>
          - Creating simple and elegant visual UI/UX designs and systems for web applications<br/>
          - design processes and collaborative environments<br/>
          - gathering and analyzing qualitative and quantitative data to identify opportunities and areas to experiment and optimize<br/>
          - creating compelling visual designs and typographical layouts        <br/><br/>

          Intrested in working together?<br/>
          Send me a message!

          </TextAlt>
       </AboutBlock>
    </ContentBlock>
    <Footer></Footer>
  </Container>
  )
}
