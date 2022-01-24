import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import { useTheme } from "../utils/provider";
import Card from '../comps/Card';
import Footer from '../comps/Footer';
import  NuanceLarge from '../public/NuanceLargeCard.png'
import PostersLarge from '../public/PostersLargeCard.png'
import LargeCard from '../comps/LargeCard';
import LargeCardFlip from '../comps/LargeCardFlip';
import { useRouter } from 'next/router';


const Container = styled.div`
  width:100%;
  height:100%;
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
  color:#CA6444;
  margin:61px;
`;


export default function Project() {
  const {theme, setTheme} = useTheme();
  const router = useRouter();
  return (<Container>
    <NavBar onButtonClick={()=>setTheme(theme==='dark'?'default':'dark')}></NavBar>
    <Header>Projects</Header>
    <ContentBlock>
        <LargeCard onCardClick={()=>router.push("/")} ></LargeCard>
        <LargeCardFlip img={NuanceLarge} title='Nuance' type='UX/IU Design, Front-end Development' roles='Roles - Lead Front-End developer, Designer' bio='Nuance is an educational app that challenges the user to question the views on certain topics.' bgcolor='#E48C34' onCardClick={()=>router.push("/")}></LargeCardFlip>
        <LargeCard img={PostersLarge} title='Artwork' type='Graphic Design' roles='Roles - Creator' bio='TEMP' bgcolor='#E6A439' onCardClick={()=>router.push("/artwork")}></LargeCard>
    </ContentBlock>
    <Footer></Footer>
  </Container>
  )
}
