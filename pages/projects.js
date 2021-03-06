import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import { useTheme } from "../utils/provider";
import Card from '../comps/Card';
import Footer from '../comps/Footer';
import  NuanceLarge from '../public/NuanceLargeCard.png'
import PostersLarge from '../public/HeaderImgTinyPaws.png'
import LargeCard from '../comps/LargeCard';
import LargeCardFlip from '../comps/LargeCardFlip';
import { useRouter } from 'next/router';
import { themes } from '../utils/variables'


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
  
`;

const ContentBlock = styled.div`
  width:100%;
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
  margin:61px;
`;

export default function Project() {
  const {theme, setTheme} = useTheme();
  const router = useRouter();
  return (<Container>
    <NavBar onButtonClick={()=>setTheme(theme==='dark'?'default':'dark')}></NavBar>
      <Wrapper>
      <Header  color={themes[theme].Header}>Projects</Header>
      <ContentBlock>
          <LargeCard onCardClick={()=>router.push("/../Posts/runik")} bgcolor={themes[theme].Header}></LargeCard>
          <LargeCardFlip img={NuanceLarge} title='Nuance' type='UX/UI Design, Front-end Development' date="Jan 2021 - May 2021" roles='Roles - Lead Front-End developer, Designer' bio='Nuance is an educational app that challenges the user to question the views on certain topics.' bgcolor={themes[theme].Title} onCardClick={()=>router.push("/../Posts/nuance")}></LargeCardFlip>
          <LargeCard img={PostersLarge} title='TinyPaws' type='UX/UI Design, WordPress' roles='Roles - Creator' bio='A wordpress site for a local cat adoption clinic' bgcolor={themes[theme].Alt} onCardClick={()=>router.push("/../Posts/tinyPaws")}></LargeCard>
      </ContentBlock>
      </Wrapper>
    <Footer></Footer>
  </Container>
  )
}
