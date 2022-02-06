import styled from "styled-components";
import Image from 'next/image'
import RunikLarge from '../../public/RunikLargeCard.png'
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'
import Prototype from '../../public/RunikProto.png'


const CardCont = styled.div`
width: 100vw;
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

//Medium
@media (min-width:801px) {
    flex-direction:column;
}

//Large
@media (min-width:1000px) {
    flex-direction:row;
}
`;
const Header = styled.h4`
font-family: Spartan;
font-style: bold;
font-weight: 700;
font-size: 24px;
color:#CA6444;
margin:0px;
margin-bottom:24px;
margin-left:57px;
`;
const Text = styled.p`
font-family: Spartan;
font-style: normal;
font-weight: 400;
font-size: 14px;
color:#CA6444;
margin:0px;
margin-top:20px;
width:216px;
margin-bottom:30px;
`;
const ImgCont = styled.div`
display:flex;
position:relative;
height:200px;
width:100%;
justify-content:center;
align-items:flex-start;

//Medium
@media (min-width:801px) {
    align-items:center;
    height:486px;
}

//Large
@media (min-width:1000px) {
    align-items:flex-start;
    height:486px;
    width:80%;
    margin-left:30px;
}
`;

const PrototypeCard = ({
 onCardClick =()=>{},
 img = Prototype,
 text = "Default"

}) =>{
    const {theme} = useTheme();
    
    return <CardCont onClick={()=>{onCardClick()}} >
       <Header>Prototyping & Design</Header>
        <Container>
            <Text>
                {text}
            </Text>
            <ImgCont>
                <Image src={img} layout="fill"></Image>
            </ImgCont>
        </Container> 
    </CardCont>
}
export default PrototypeCard;