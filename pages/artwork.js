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
import Walradad from '../public/Artwork/Walradad.png'
import PixelArt1 from '../public/PixelArt1.PNG'
import PixelArt2 from '../public/PixelArt2.PNG'
import Doodle1 from '../public/Doodle1.png'
import Doodle2 from '../public/Doodle2.png'
import GalleryCard from '../comps/GalleryCard';


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

const ContentBlock = styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;

  margin-bottom:200px;
  justify-content:space-evenly;
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
    <Wrapper>
    <ContentBlock>
    <GalleryCard></GalleryCard>
    <GalleryCard 
    Img={LostInADream} 
    Header="Lost in a Dream"  
    SubHeader="Poster" 
    Type="Created in Photoshop" 
    Dates="Nov 2021 - Dec 2021"></GalleryCard>
    <GalleryCard 
    Img={Ana} 
    Header="Ana de Armas"  
    SubHeader="Portrait Drawing" 
    Type="Created in Photoshop" 
    Dates="Oct 2021 - Nov 2021"></GalleryCard>
    <GalleryCard 
    Img={Walradad} 
    Header="Walradad"  
    SubHeader="Poster" 
    Type="Created in Photoshop" 
    Dates="Sept 2021 - Oct 2021"></GalleryCard>
    <GalleryCard 
    Img={Boston} 
    Header="Boston Dynamics"  
    SubHeader="Illustration" 
    Type="Created in Illustrator" 
    Dates="Feb 2021 - May 2021"></GalleryCard>
    <GalleryCard 
    Img={PixelArt1} 
    Header="Pixel Art 1"  
    SubHeader="Artwork" 
    Type="Created in Aesprite" 
    Dates="Jun 2021 - July 2021"></GalleryCard>
    <GalleryCard 
    Img={PixelArt2} 
    Header="Pixel Art 2"  
    SubHeader="Artwork" 
    Type="Created in Aesprite" 
    Dates="Jun 2021 - July 2021"></GalleryCard>
    <GalleryCard 
    Img={Doodle1} 
    Header="Doodle 1"  
    SubHeader="Drawing" 
    Type="Hand Drawn With Pen" 
    Dates="July 2021 - Aug 2021"></GalleryCard>
    <GalleryCard 
    Img={Doodle2} 
    Header="Doodle 2"  
    SubHeader="Drawing" 
    Type="Hand Drawn With Pen" 
    Dates="July 2021 - Aug 2021"></GalleryCard>
    
    </ContentBlock>
    </Wrapper>
    <Footer></Footer>
  </Container>
  )
}