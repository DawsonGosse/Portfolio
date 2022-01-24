import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import { useTheme } from "../utils/provider";
import Footer from '../comps/Footer';
import ArtworkCard from '../comps/ArtworkCard';
import { useEffect, useState } from 'react';
import Ana from '../public/Artwork/Ana.png'
import Boston from '../public/Artwork/Boston.jpg'
import LostInADream from '../public/Artwork/LostInADream.png'
import Proms from '../public/Artwork/Proms.jpg'
import Walradad from '../public/Artwork/Walradad.png'



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




export default function Artwork() {
  const {theme, setTheme} = useTheme();

  return (<Container>
    <NavBar onButtonClick={()=>setTheme(theme==='dark'?'default':'dark')}></NavBar>
    <ContentBlock>
        <ArtworkCard img={Proms} width='357px' height='479px' title='The Proms' type='Poster' roles='Created in Illustrator' date='May 2021'></ArtworkCard>
        <ArtworkCard img={LostInADream} width='373px' height='479px' title='Lost In A Dream' type='Poster' roles='Created in Photoshop' date='Dec 2021'></ArtworkCard>
        <ArtworkCard img={Ana} width='269px' height='479px' title='Ana De Armas' type='Portrait Illustration' roles='Created in Photoshop' date='Nov 2021'></ArtworkCard>
        <ArtworkCard img={Walradad} width='359px' height='238px' title='Walradad' type='Poster' roles='Created in Photoshop' date='Oct 2021'></ArtworkCard>
        <ArtworkCard img={Boston} width='373px' height='287px' title='Boston Dynamics' type='Illustration' roles='Created in Illustrator' date='Mar 2021'></ArtworkCard>
    </ContentBlock>
    <Footer></Footer>
  </Container>
  )
}