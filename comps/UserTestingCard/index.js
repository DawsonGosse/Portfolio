import styled from "styled-components";
import Image from 'next/image'
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'
import Prototype from '../../public/RunikTesting.png'


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
`;
const ImgCont = styled.div`
display:flex;
position:relative;
height: ${props=>props.height};
width:${props=>props.width};
justify-content:center;
align-items:flex-start;
`;

const UserTestingCard = ({
 onCardClick =()=>{},
 img = Prototype,
 text = "Default",
 height = "1105px",
 width = "70%"

}) =>{
    const {theme} = useTheme();
    
    return <CardCont onClick={()=>{onCardClick()}} >
       <Header>User Testing</Header>
        <Container>
            <Text>
                {text}
            </Text>
            <ImgCont width={width} height={height}>
            <Image src={img} layout="fill"></Image>
            </ImgCont>
        </Container> 
    </CardCont>
}
export default UserTestingCard;