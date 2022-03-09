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


const Container = styled.div`
  width:100%;
  height:100%;
`;

const ContentBlock1 = styled.div`
  width:100vw;
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
    <Footer></Footer>
  </Container>
  )
}
