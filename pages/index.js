import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import NameTitle from '../comps/NameTitle';
import { useTheme } from "../utils/provider";
import Description from '../comps/Description';

const Container = styled.div`
  width:100%;
  height:100%;
`;

const ContentBlock = styled.div`
  width:100vw;
  padding: 0px 52px 0px;
  display:flex;
  justify-content:space-between;
`;


export default function Home() {
  const {theme, setTheme} = useTheme();
  return (<Container>
    <NavBar onButtonClick={()=>setTheme(theme==='dark'?'default':'dark')}></NavBar>
    <ContentBlock>
    <NameTitle></NameTitle>
    <Description></Description>
    </ContentBlock>
  </Container>
  )
}
