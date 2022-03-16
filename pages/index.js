import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import NameTitle from '../comps/NameTitle';
import { useTheme } from "../utils/provider";
import Description from '../comps/Description';
import Card from '../comps/Card';
import Footer from '../comps/Footer';
import  Nuance from '../public/NuanceBackground.png'
import TinyPaws from '../public/TinyPaws.png'
import { useRouter } from 'next/router';
import { themes } from '../utils/variables'
import Button from '../comps/Button';


const Wrapper = styled.div`
width:100%;

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

const ContentBlock1 = styled.div`
  width:100%;
  flex-wrap:wrap;
  flex-direction:column;
  padding: 0px 30px 0px;
  display:flex;
  justify-content:space-evenly;
  margin-bottom:200px;

  //Medium
@media (min-width:481px) {
  padding: 0px 52px 0px;
  justify-content:space-between;
  flex-direction:row;
  }
//Large

@media (min-width:769px) {
  padding: 0px 52px 0px;
  justify-content:space-between;
  flex-direction:row;
  }
`;
const ContentBlock2 = styled.div`
  width:100%;
  flex-wrap:wrap;
  padding: 0px 30px 0px;
  display:flex;
  justify-content:space-evenly;
  margin-bottom:100px;

  //Medium
@media (min-width:481px) {
  padding: 0px 52px 0px;
  justify-content:space-between;
  }
//Large

@media (min-width:769px) {
  padding: 0px 52px 0px;
  justify-content:space-evenly;
  }
`;

const ContentBlock3 = styled.div`
  width:100%;
  flex-wrap:wrap;
  flex-direction:column;
  display:flex;
  justify-content:space-evenly;
  margin-bottom:100px;

  //Medium
@media (min-width:481px) {
  justify-content:space-between;
  flex-direction:column;
  }
//Large

@media (min-width:769px) {
  justify-content:space-between;
  flex-direction:column;
  }
`;
const Header = styled.h2`
  font-family: Spartan;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color:${props=>props.color};
  margin-left:30px;


//Medium
@media (min-width:481px) {
    margin-left:61px;
  }
//Large

@media (min-width:769px) {
    margin-left:61px;
  }
`;
const Text = styled.p`
font-family: Spartan;
font-style: normal;
font-weight: normal;
font-size: 12px;
text-align: left;
color:${props=>props.color};
margin-left:30px;
padding-right:30px;

//Medium
@media (min-width:481px) {
    font-size:16px;
    margin-left:61px;
  }
//Large

@media (min-width:769px) {
    font-size:20px;
    margin-left:61px;
  }
`;

const ButCont = styled.div`
margin-left:30px;

//Medium
@media (min-width:481px) {
    margin-left:61px;
  }
//Large

@media (min-width:769px) {
    margin-left:61px;
  }
`


export default function Home() {
  const {theme, setTheme} = useTheme();
  const router = useRouter();
  return (<Container>
    <NavBar onButtonClick={()=>setTheme(theme==='dark'?'default':'dark')} ></NavBar>
    <Wrapper>
      <ContentBlock1>
      <NameTitle></NameTitle>
      <Description></Description>
      </ContentBlock1>
      <Header color={themes[theme].Header}>Highlights</Header>
      <ContentBlock2>
        <Card onCardClick={()=>router.push("/../Posts/runik")}></Card>
        <Card 
        title="Nuance"
        type="Development - UI/UX"
        img={Nuance}
        onCardClick={()=>router.push("/../Posts/nuance")}
        ></Card>
        <Card 
        title="TinyPaws"
        type="UI/UX - Wordpress"
        img={TinyPaws}
        onCardClick={()=>router.push("/../Posts/tinyPaws")}
        ></Card>
      </ContentBlock2>
      <ContentBlock3>
        <Header color={themes[theme].Header}>Gallery</Header>
        <Text color={themes[theme].Header} >Wondering how this could possibly get better? <br/><br/>
    Come check out the gallery, a collection of some side projects and hobbie peices.<br/> everything from illustrations and photoshop projects, to posters and doodles can be found here!</Text>
        <ButCont>
          <Button text='View Gallery' bgcolor={themes[theme].Header} color={themes[theme].body} onCardClick={()=>router.push("/../artwork")}></Button>
        </ButCont>
      </ContentBlock3>
    </Wrapper>
    <Footer></Footer>
  </Container>
  )
}
