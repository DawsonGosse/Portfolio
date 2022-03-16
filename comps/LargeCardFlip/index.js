import styled from "styled-components";
import Image from 'next/image'
import RunikLarge from '../../public/RunikLargeCard.png'
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'


const CardCont = styled.div`
width: 100%;
max-height:422px;
display:flex;
position:relative;
background-color:${props=>props.bgcolor};

&:hover {
    transform: scale(1.04);
    transition: linear 0.2s;
}
`;
const Container = styled.div`
display:flex;
justify-content:space-between;
width:100%;
padding-left:63px;
padding-top:34px;
z-index:2;


//Medium

@media (min-width:425px) {
    padding-left:63px;
  }

//Large

@media (min-width:1024px) {
  width:50%;
  padding-bottom:0px;
  padding-left:63px;
  }

`;
const TitleCont = styled.div`
display:flex;
flex-direction:column;
margin-right:30px;
`;
const Title = styled.h3`
font-family: Spartan;
font-style: normal;
font-weight: 600;
font-size: 48px;
color:#F3F3F3;
margin:0px;
margin-bottom:9px;
`;
const Date = styled.h6`
font-family: Spartan;
font-style: normal;
font-weight: normal;
font-size: 14px;
color:#F3F3F3;
margin:0px;
margin-bottom:73px;
`;
const Text = styled.h6`
font-family: Spartan;
font-style: normal;
font-weight: normal;
font-size: 14px;
color:#F3F3F3;
margin:0px;
margin-bottom:7px;
width:100%;
`;
const SmallText = styled.h6`
font-family: Spartan;
font-style: normal;
font-weight: normal;
font-size: 10px;
color:#F3F3F3;
margin:0px;
margin-bottom:28px;
`;
const ImgCont = styled.div`
width:0%;
position:relative;
padding:0;

//Large

@media (min-width:1024px) {
  width:50%;
  }

`;

const LargeCardFlip = ({
 img = RunikLarge,
 title = "Runik",
 date = "Fed 2021 - May 2021",
 roles = "Roles - lead designer, front-end developer",
 type = "UX/IU Design, Front-end Development",
 bio ="Runik is web-app that generates custom e-reader dictionaries for your favourite fictional worlds. ",
 bgcolor = "#CA6444",
 onCardClick =()=>{}

}) =>{
    const {theme} = useTheme();
    
    return <CardCont onClick={()=>{onCardClick()}} bgcolor={bgcolor}>
        <ImgCont>
            <Image src={img} layout="responsive"></Image>
        </ImgCont>
        <Container>
            <TitleCont>
                <Text>{type}</Text>
                <SmallText>{roles}</SmallText>
                <Title>{title}</Title>
                <Date>{date}</Date>
                <Text>{bio}</Text>
            </TitleCont>
        </Container>
    </CardCont>
}

export default LargeCardFlip;