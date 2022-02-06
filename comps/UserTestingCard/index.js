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
justify-content:center;
flex-direction:column;

//Medium
@media (min-width:801px) {
    flex-direction:column;
    justify-content:center;
}

//Large
@media (min-width:1000px) {
    flex-direction:row;
    justify-content:space-between;
}
`;
const Header = styled.h4`
font-family: Spartan;
font-style: bold;
font-weight: 700;
font-size: 24px;
color:${props=>props.color};
margin:0px;
margin-bottom:24px;
margin-left:57px;
`;
const Text = styled.p`
font-family: Spartan;
font-style: normal;
font-weight: 400;
font-size: 14px;
color:${props=>props.color};
margin:0px;
margin-top:20px;
margin-bottom:20px;
width:216px;
`;
const ImgCont = styled.div`
display:flex;
position:relative;
height: ${props=>props.height};
width:${props=>props.width};
justify-content:center;
align-items:center;

//Medium
@media (min-width:801px) {
    justify-content:center;
    align-items:center;
    height:600px;
    width:300px;
}

//Large
@media (min-width:1000px) {
    justify-content:center;
    align-items:flex-start;
    height:1105px;
    width:800px;
}
`;

const UserTestingCard = ({
 onCardClick =()=>{},
 img = Prototype,
 text = "Default",
 height = "400px",
 width = "200px"

}) =>{
    const {theme} = useTheme();
    
    return <CardCont onClick={()=>{onCardClick()}} >
       <Header color={themes[theme].Highlight}>User Testing</Header>
        <Container>
            <Text color={themes[theme].Highlight}>
                {text}
            </Text>
            <ImgCont width={width} height={height}>
            <Image src={img} layout="fill"></Image>
            </ImgCont>
        </Container> 
    </CardCont>
}
export default UserTestingCard;