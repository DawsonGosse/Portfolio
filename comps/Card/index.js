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
background-color:#f3f3f3;
border-radius: 10px;
display:flex;
justify-content:flex-end;
flex-direction:column;
margin:0px;
position:relative;
transform: scale(0.8);

&:hover {
    transform: scale(0.84);
    transition: linear 0.2s;
}

//Medium
@media (min-width:481px) {
    transform: scale(0.9);
    margin:20px;

    &:hover {
        transform: scale(0.94);
        transition: linear 0.2s;
    }
  }
//Large

@media (min-width:769px) {
    transform: scale(1.00);
    margin:35px;

    &:hover {
        transform: scale(1.04);
        transition: linear 0.2s;
    }
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
const Type = styled.h6`
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
 type = "Development - UI/UX",
 onCardClick =()=>{}

}) =>{
    const {theme} = useTheme();
    
    return <CardCont onClick={()=>{onCardClick()}} shadow={themes[theme].cardShadow}>
        <Image src={img} layout="fill" objectFit="cover"></Image>
        <Container>
            <TitleCont>
                <Title>{title}</Title>
                <Type>{type}</Type>
            </TitleCont>
            <ReadMoreCont>
                <ReadMore>Read More</ReadMore>
                <Arrow></Arrow>
            </ReadMoreCont>
        </Container>
    </CardCont>
}

export default Card;