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
import PixelArt1 from '../public/PixelArt1.PNG'
import PixelArt2 from '../public/PixelArt2.PNG'
import Doodle1 from '../public/Doodle1.png'
import Doodle2 from '../public/Doodle2.png'




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
        <ArtworkCard img={Proms} title='The Proms' type='Poster' roles='Created in Illustrator' date='May 2021'></ArtworkCard>
        <ArtworkCard img={LostInADream} title='Lost In A Dream' type='Poster' roles='Created in Photoshop' date='Dec 2021'></ArtworkCard>
        <ArtworkCard img={Ana} title='Ana De Armas' type='Portrait Illustration' roles='Created in Photoshop' date='Nov 2021'></ArtworkCard>
        <ArtworkCard img={Walradad} title='Walradad' type='Poster' roles='Created in Photoshop' date='Oct 2021'></ArtworkCard>
        <ArtworkCard img={Boston} title='Boston Dynamics' type='Illustration' roles='Created in Illustrator' date='Mar 2021'></ArtworkCard>
        <ArtworkCard img={PixelArt1} title='Pixel Artwork 1' type='PixelArt' roles='Created in Aseprite' date='Aug 2021'></ArtworkCard>
        <ArtworkCard img={PixelArt2} title='Pixel Artwork 2' type='PixelArt' roles='Created in Aseprite' date='Aug 2021'></ArtworkCard>
        <ArtworkCard img={Doodle1} title='Doodle 1' type='Drawing' roles='Hand drawn' date='Jan 2022'></ArtworkCard>
        <ArtworkCard img={Doodle2} title='Doodle 2' type='Drawing' roles='Hand drawn' date='Jul 2021'></ArtworkCard>
    </ContentBlock>
    <Footer></Footer>
  </Container>
  )
}