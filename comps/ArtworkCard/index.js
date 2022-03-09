import styled from "styled-components";
import Image from 'next/image'
import RunikLarge from '../../public/RunikLargeCard.png'
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'


const CardCont = styled.div`
width: 100vw;
height: 100%;
display:flex;
position:relative;
margin-bottom:80px;
margin-top:50px;
`;
const Container = styled.div`
display:flex;
justify-content:space-between;
padding-left:63px;
z-index:2;
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
color:${props=>props.color};
margin:0px;
margin-bottom:9px;
`;
const Date = styled.h6`
font-family: Spartan;
font-style: normal;
font-weight: normal;
font-size: 14px;
color:${props=>props.color};
margin:0px;
margin-bottom:73px;
`;
const Text = styled.h6`
font-family: Spartan;
font-style: normal;
font-weight: normal;
font-size: 14px;
color:${props=>props.color};
margin:0px;
margin-bottom:7px;
width:522px;
`;
const SmallText = styled.h6`
font-family: Spartan;
font-style: normal;
font-weight: normal;
font-size: 10px;
color:${props=>props.color};
margin:0px;
margin-bottom:28px;
`;
const ImgCont = styled.div`
width:40%;
position:relative;
padding:0;
margin-left:30px;
`;

const ArtworkCard = ({
 img = RunikLarge,
 title = "Runik",
 date = "Fed 2021 - May 2021",
 roles = "Roles - lead designer, front-end developer",
 type = "UX/IU Design, Front-end Development",
 onCardClick =()=>{}

}) =>{
    const {theme} = useTheme();
    
    return <CardCont onClick={()=>{onCardClick()}}>
        <ImgCont>
            <Image layout="responsive" src={img} objectFit="cover"></Image>
        </ImgCont>
        <Container>
            <TitleCont>
                <Text color={themes[theme].color}>{type}</Text>
                <SmallText color={themes[theme].color}>{roles}</SmallText>
                <Title color={themes[theme].color}>{title}</Title>
            </TitleCont>
        </Container>  
    </CardCont>
}

export default ArtworkCard;