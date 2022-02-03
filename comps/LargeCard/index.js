import styled from "styled-components";
import Image from 'next/image'
import RunikLarge from '../../public/RunikLargeCard.png'
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'


const CardCont = styled.div`
width: 100vw;
height: 422px;
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
@media (min-width:481px) {
    width:50%;
  }
//Large

@media (min-width:769px) {
    width:50%;
  }
`;
const TitleCont = styled.div`
display:flex;
flex-direction:column;
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
display:none;
position:relative;
width:50%;
height:422px;

//Medium
@media (min-width:481px) {
    display:none;
  }
//Large

@media (min-width:769px) {
    display:flex;
  }
`;

const LargeCard = ({
 img = RunikLarge,
 title = "Runik",
 date = "Sept 2021 - Dec 2021",
 roles = "Roles - lead designer, front-end developer",
 type = "UX/IU Design, Front-end Development",
 bio ="Runik is web-app that generates custom e-reader dictionaries for your favourite fictional worlds. ",
 bgcolor = "#CA6444",
 onCardClick =()=>{}

}) =>{
    const {theme} = useTheme();
    
    return <CardCont onClick={()=>{onCardClick()}} bgcolor={bgcolor}>
        <Container>
            <TitleCont>
                <Text>{type}</Text>
                <SmallText>{roles}</SmallText>
                <Title>{title}</Title>
                <Date>{date}</Date>
                <Text>{bio}</Text>
            </TitleCont>
        </Container>
        <ImgCont>
            <Image src={img} layout="fill"></Image>
        </ImgCont>
    </CardCont>
}

export default LargeCard;