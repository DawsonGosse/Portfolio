import styled from "styled-components";
import Image from 'next/image'
import RunikLarge from '../../public/RunikLargeCard.png'
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'
import Prototype from '../../public/RunikProto.png'


const CardCont = styled.div`
width: 100%;
display:flex;
position:relative;
flex-direction:column;
margin-top:50px;
`;
const Container = styled.div`
display:flex;
margin-left:57px;
margin-right:57px;
justify-content:space-between;
flex-direction:column;

`;
const Header = styled.h4`
font-family: Spartan;
font-style: bold;
font-weight: 700;
font-size: 24px;
color:${props=>props.color};
margin:0px;
margin-bottom:24px;
`;
const Text = styled.p`
font-family: Spartan;
font-style: normal;
font-weight: 400;
font-size: 14px;
color:${props=>props.color};
margin:0px;
margin-top:20px;
width:216px;
margin-bottom:30px;
`;
const ImgCont = styled.div`
width:90%;
position:relative;
margin-top:25px;
margin-bottom:25px;
padding:0;

`;

const PrototypeCard = ({
 onCardClick =()=>{},
 img1 = Prototype,
 img2 = Prototype,
 img3 = Prototype,
 text = "Default"

}) =>{
    const {theme} = useTheme();
    
    return <CardCont onClick={()=>{onCardClick()}} >
        <Container>
        <Header color={themes[theme].Highlight}>Prototyping & Design</Header>
            <Text color={themes[theme].Highlight}>
                {text}
            </Text>
            <Header color={themes[theme].Highlight}>WireFrame</Header>
            <ImgCont>
                <Image src={img1} layout="responsive"></Image>
            </ImgCont>
            <Header color={themes[theme].Highlight}>Mid-Fi</Header>
            <ImgCont>
                <Image src={img2} layout="responsive"></Image>
            </ImgCont>
            <Header color={themes[theme].Highlight}>High-Fi</Header>
            <ImgCont>
                <Image src={img3} layout="responsive"></Image>
            </ImgCont>
        </Container> 
    </CardCont>
}
export default PrototypeCard;