import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import { useTheme } from "../utils/provider";
import Footer from '../comps/Footer';
import { themes } from '../utils/variables'
import Button from '../comps/Button';
import { useRouter } from 'next/router';


const Wrapper = styled.div`
width:100%;
height:100%;

//Large

@media (min-width:1440px) {
    width:1440px;
    margin:auto;
  }

`


const Container = styled.div`
  width:100%;
  height:100%;
`;
const ContentBlock = styled.div`
  width:100%;
  hieght:100%;
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
height:100%;
padding-top:100px;
flex-direction:column;
padding-right:20px;
background-color:${props=>props.color};

//Medium
@media (min-width:481px) {
  padding-bottom:100px;
  padding-right:61px;
  padding-top:125px;
  }
//Large

@media (min-width:769px) {
padding-bottom:50px;
padding-right:61px;
padding-top:125px;
  }

`;
const Header = styled.h2`
  font-family: Spartan;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color:${props=>props.color};
  padding-left:20px;
  margin-bottom:90px;

  //Medium
@media (min-width:481px) {
  padding-left:60px;
  }

//Large

@media (min-width:769px) {
  padding-left:60px;
  }
`;

const Text = styled.p`
font-family: Spartan;
font-size: 18px;
color: ${props=>props.color};
padding-left:20px;
font-weight: 600;

//Medium
@media (min-width:481px) {
  padding-left:60px;
  }

//Large

@media (min-width:769px) {
  padding-left:60px;
  }

`;

const TextAlt = styled.p`
font-family: Spartan;
font-size: 18px;
margin-top:0px;
color: ${props=>props.color};
font-weight: 600;
line-height: 142.5%;
padding-left:20px;

//Medium
@media (min-width:481px) {
  padding-left:60px;
  }

//Large

@media (min-width:769px) {
  padding-left:60px;
  }

`;


export default function Project() {
  const {theme, setTheme} = useTheme();
  const router = useRouter();
  return (<Container>
    <NavBar onButtonClick={()=>setTheme(theme==='dark'?'default':'dark')}></NavBar>
    <Wrapper>
      <ContentBlock>
        <ContactBlock>
            <Header color={themes[theme].Header}>Contact</Header>
            <Text color={themes[theme].Header}>Email <br/><br/>Dawsonjgosse@gmail.com</Text>
            <Text color={themes[theme].Header}>Phone <br/><br/> 236-777-6765</Text>
        </ContactBlock>
        <AboutBlock color={themes[theme].Header}>
            <Header color={themes[theme].AltHeader}>About Me</Header>
            <TextAlt color={themes[theme].AltHeader}>Hey there! my name is Dawson, a Creative Front-end developer & UI/UX designer skilled at working in project-orientated team environments creating cross-platform applications.
            <br/><br/>
            I have experience In...
            <br/><br/>
            - web development technologies (Next.js, WordPress, HTML & CSS, Javascript)<br/>
            - Creating simple and elegant visual UI/UX designs and systems for web applications<br/>
            - design processes and collaborative environments<br/>
            - gathering and analyzing qualitative and quantitative data to identify opportunities and areas to experiment and optimize<br/>
            - creating compelling visual designs and typographical layouts        <br/><br/>

            But wait theres more!<br/><br/>

            Come take a look at some of my side projects and hobbies here!<br/><br/>

            <Button text='View Gallery' bgcolor={themes[theme].body} color={themes[theme].Header} onCardClick={()=>router.push("/../artwork")}></Button>
            </TextAlt>
        </AboutBlock>
      </ContentBlock>
    </Wrapper>
    <Footer></Footer>
  </Container>
  )
}
