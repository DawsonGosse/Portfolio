import styled from "styled-components";
import Image from 'next/image'
import RunikLarge from '../../public/RunikLargeCard.png'
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'
import ArrowOrange from "../Icons/ArrowOrange";


const CardCont = styled.div`
width: 100vw;
display:flex;
position:relative;
flex-direction:column;
`;
const Container = styled.div`
display:flex;
padding-left:30px;
padding-right:50px;
justify-content:center;
align-items:center;
`;
const Title = styled.h3`
font-family: Spartan;
font-style: normal;
font-weight: 600;
font-size: 64px;
color:#CA6444;
margin:0px;
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
const SubHeader = styled.h5`
font-family: Spartan;
font-style: bold;
font-weight: 700;
font-size: 24px;
color:#CA6444;
margin:0px;
margin-bottom:24px;
margin-top:40px;
`;
const Text = styled.p`
font-family: Spartan;
font-style: normal;
font-weight: 400;
font-size: 14px;
color:#CA6444;
margin:0px;
margin-top:20px;
`;
const Circle = styled.div`
width: 305px;
height: 305px;
border-radius:305px;
box-shadow: ${props=>props.shadow}
display:flex;
align-items:center;
justify-content:flex-start;
flex-direction:column;
padding:35px;
padding-top:20px;
margin:57px;
`;
const ArrowCont = styled.div`

`;



const UserResearchCard = ({
 onCardClick =()=>{}

}) =>{
    const {theme} = useTheme();
    
    return <CardCont onClick={()=>{onCardClick()}} >
        <Header>User Research</Header>
        <Container>
            <Circle shadow={themes[theme].shadow}>
                <SubHeader>Hypothesis</SubHeader>
                <Text>Users want a way to get custom world-specific definitions without breaking immersion and looking them up</Text>
            </Circle>
            <ArrowCont>
                <ArrowOrange></ArrowOrange>
            </ArrowCont>
            <Circle shadow={themes[theme].shadow}>
                <SubHeader>Methods</SubHeader>
                <Text>Surveys, Questionnaires, User interviews and forum research proved our hypothesis</Text>
            </Circle>
            <ArrowCont>
                <ArrowOrange></ArrowOrange>
            </ArrowCont>
            <Circle shadow={themes[theme].shadow}>
                <SubHeader>Synthesis</SubHeader>
                <Text>Gather research and refine hypothesis and user pain-points</Text>
            </Circle>
        </Container> 
    </CardCont>
}
export default UserResearchCard;