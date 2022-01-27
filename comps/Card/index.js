import styled from "styled-components";
import Arrow from "../Icons/Arrow";
import Image from 'next/image'
import Runik from '../../public/RunikBackground.png'
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'


const CardCont = styled.div`
width: 369px;
height: 549px;
box-shadow: ${props=>props.shadow};
border-radius: 10px;
display:flex;
justify-content:flex-end;
flex-direction:column;
margin:35px;
position:relative;

&:hover {
    transform: scale(1.04);
    transition: linear 0.2s;
}
`;
const Container = styled.div`
display:flex;
justify-content:space-between;
width:369px;
padding:25px;
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
font-size: 32px;
color:#5C5769;
margin:0px;
margin-bottom:14px;
`;
const Date = styled.h6`
font-family: Spartan;
font-style: normal;
font-weight: normal;
font-size: 14px;
color:#5C5769;
margin:0px;
margin-bottom:25px;
`;
const ReadMoreCont = styled.div`
display:flex;
align-items:flex-end;
margin-bottom:22px;
`;
const ReadMore = styled.h6`
font-family: Spartan;
font-style: normal;
font-weight: normal;
font-size: 14px;
color:#5C5769;
margin:0px;
margin-right:6px;
margin-bottom:3px;
`;


const Card = ({
 img = Runik,
 title = "Runik",
 date = "Sept 2021 - Dec 2021",
 onCardClick =()=>{}

}) =>{
    const {theme} = useTheme();
    
    return <CardCont onClick={()=>{onCardClick()}} shadow={themes[theme].cardShadow}>
        <Image src={img} layout="fill"></Image>
        <Container>
            <TitleCont>
                <Title>{title}</Title>
                <Date>{date}</Date>
            </TitleCont>
            <ReadMoreCont>
                <ReadMore>Read More</ReadMore>
                <Arrow></Arrow>
            </ReadMoreCont>
        </Container>
    </CardCont>
}

export default Card;