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
width:100%;
height:100%;
justify-content:center;
align-items:center;
flex-direction:column;

//Medium
@media (min-width:801px) {
    flex-direction:row;
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
const SubHeader = styled.h5`
font-family: Spartan;
font-style: bold;
font-weight: 700;
font-size: 16px;
color:#CA6444;
margin:0px;
margin-top:20px;
margin-bottom:10px;

//Medium
@media (min-width:801px) {
    font-size:16px;
    margin-bottom:5px;
    margin-top:20px;
}
//Large

@media (min-width:1000px) {
    font-size:24px;
    margin-bottom:24px;
    margin-top:40px;
}
`;
const Text = styled.p`
font-family: Spartan;
font-style: normal;
font-weight: 400;
font-size: 12px;
color:#CA6444;
margin:0px;
margin-top:10px;
text-align:center;

//Medium
@media (min-width:801px) {
    font-size:12px;
    margin-top:10px;
    text-align:center;
}
//Large

@media (min-width:1000px) {
    font-size:14px;
    margin-top:20px;
    text-align:left;
}
`;
const Circle = styled.div`
width: 100%;
height: 100%;
border-radius:100%;
box-shadow: ${props=>props.shadow}
display:flex;
align-items:center;
justify-content:flex-start;
flex-direction:column;
padding:15px;
padding-left:25px;

//Medium
@media (min-width:801px) {
    padding:15px;
    padding-left:25px;

}
//Large

@media (min-width:1000px) {
    padding:20px;
    padding-left:30px;
}
`;
const ArrowCont = styled.div`
display:none;

//Medium
@media (min-width:481px) {
display:none;
}
//Large

@media (min-width:1247px) {
display:flex;
justify-content:center;
align-items:center;
}
`;
const BubbleCont = styled.div`
display:flex;
height:50%;

//Medium
@media (min-width:205px) {
    height:205px;
    width:205px;
    margin:20px;
}
//Large

@media (min-width:1000px) {
    height:305px;
    width:305px;
    margin:10px;
    
}
`;

var defaults = {
    Hypothesis:"Users want a way to get custom world-specific definitions without breaking immersion and looking them up",
    Methods:"Surveys, Questionnaires, User interviews and forum research proved our hypothesis",
    Synthesis:"Gather research and refine hypothesis and user pain-points"
}

const UserResearchCard = ({
 onCardClick =()=>{},
 hypothesis = defaults.Hypothesis,
 methods = defaults.Methods,
 synthesis = defaults.Synthesis
 

}) =>{
    const {theme} = useTheme();
    
    return <CardCont onClick={()=>{onCardClick()}} >
        <Header>User Research</Header>
        <Container>
            <BubbleCont>
                <Circle shadow={themes[theme].shadow}>
                    <SubHeader>Hypothesis</SubHeader>
                    <Text>{hypothesis}</Text>
                </Circle>
            </BubbleCont>
            <ArrowCont>
                <ArrowOrange></ArrowOrange>
            </ArrowCont>
            <BubbleCont>
                <Circle shadow={themes[theme].shadow}>
                    <SubHeader>Methods</SubHeader>
                    <Text>{methods}</Text>
                </Circle>
            </BubbleCont>
            <ArrowCont>
                <ArrowOrange></ArrowOrange>
            </ArrowCont>
            <BubbleCont>
                <Circle shadow={themes[theme].shadow}>
                    <SubHeader>Synthesis</SubHeader>
                    <Text>{synthesis}</Text>
                </Circle>
            </BubbleCont>
        </Container> 
    </CardCont>
}
export default UserResearchCard;