import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import { useTheme } from "../utils/provider";

const Container = styled.div`
  width:100%;
  height:100%;
`;

export default function Home() {
  const {theme, setTheme} = useTheme();
  return (<Container>
    <NavBar onButtonClick={()=>setTheme(theme==='dark'?'default':'dark')}></NavBar>

  </Container>
  )
}
