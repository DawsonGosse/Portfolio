import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import NameTitle from '../comps/NameTitle';
import { useTheme } from "../utils/provider";
import Description from '../comps/Description';
import Card from '../comps/Card';
import Footer from '../comps/Footer';
import  Nuance from '../public/NuanceBackground.png'
import Posters from '../public/PostersBackground.png'
import { useRouter } from 'next/router';
import { themes } from '../utils/variables'


const Container = styled.div`
  width:100%;
  height:100%;
`;

const ContentBlock = styled.div`
  width:100vw;
  flex-wrap:wrap;
  padding: 0px 30px 0px;
  display:flex;
  justify-content:space-evenly;
  margin-bottom:200px;

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
const Header = styled.h2`
  font-family: Spartan;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color:${props=>props.color};
  margin-left:61px;
`;


export default function Home() {
  const {theme, setTheme} = useTheme();
  const router = useRouter();
  return (<Container>
    <NavBar onButtonClick={()=>setTheme(theme==='dark'?'default':'dark')} ></NavBar>
    <ContentBlock>
    <NameTitle></NameTitle>
    <Description></Description>
    </ContentBlock>
    <Header color={themes[theme].Header}>Highlights</Header>
    <ContentBlock>
      <Card onCardClick={()=>router.push("/../Posts/runik")}></Card>
      <Card 
      title="Nuance"
      date="Jan 2021 - May 2021"
      img={Nuance}
      onCardClick={()=>router.push("/../Posts/nuance")}
      ></Card>
      <Card 
      title="Artwork"
      date="Jan 2021 - Jan 2022"
      img={Posters}
      onCardClick={()=>router.push("/../artwork")}
      ></Card>
    </ContentBlock>
    <Footer></Footer>
  </Container>
  )
}
