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


const Container = styled.div`
  width:100%;
  height:100%;
`;

const ContentBlock = styled.div`
  width:100vw;
  padding: 0px 52px 0px;
  display:flex;
  justify-content:space-between;
  margin-bottom:200px;
`;
const Header = styled.h2`
  font-family: Spartan;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color:#CA6444;
  margin-left:61px;
`;


export default function Home() {
  const {theme, setTheme} = useTheme();
  return (<Container>
    <NavBar onButtonClick={()=>setTheme(theme==='dark'?'default':'dark')} ></NavBar>
    <ContentBlock>
    <NameTitle></NameTitle>
    <Description></Description>
    </ContentBlock>
    <Header>Highlights</Header>
    <ContentBlock>
      <Card></Card>
      <Card 
      title="Nuance"
      date="Jan 2021 - May 2021"
      img={Nuance}
      ></Card>
      <Card 
      title="Artwork"
      date="Jan 2021 - Jan 2022"
      img={Posters}
      ></Card>
    </ContentBlock>
    <Footer></Footer>
  </Container>
  )
}
