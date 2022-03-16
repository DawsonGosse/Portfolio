import styled from "styled-components";
import Image from 'next/image'
import RunikLarge from '../../public/RunikLargeCard.png'
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'
import ArrowOrange from "../Icons/ArrowOrange";


const CardCont = styled.div`
width: 100%;
display:flex;
position:relative;
flex-direction:column;
height:800px;

//Medium
@media (min-width:801px) {
    flex-direction:column;
    height:450px;
}
//Large

@media (min-width:1000px) {
    height:450px;

}
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
color:${props=>props.color};
margin:0px;
margin-bottom:24px;
margin-left:57px;
`;
const SubHeader = styled.h5`
font-family: Spartan;
font-style: bold;
font-weight: 700;
font-size: 16px;
color:${props=>props.color};
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
color:${props=>props.color};
margin:0px;
margin-top:10px;
text-align:center;
padding:10px;

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
border-radius:100%;
box-shadow: ${props=>props.shadow}
display:flex;
align-items:center;
justify-content:flex-start;
flex-direction:column;
width:205px;
height:205px;
margin:20px;

//Medium
@media (min-width:801px) {
    padding:15px;
    margin:10px;
    width:205px;
    height:205px;

}
//Large

@media (min-width:1000px) {
    width:305px;
    height:305px;
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
justify-content:space-evenly;
flex-direction:column;


//Medium
@media (min-width:801px) {
    height:205px;
    margin:20px;
    flex-direction:row;
}
//Large

@media (min-width:1000px) {
    height:305px;
    width:95vw;
    margin:10px;
    flex-direction:row;
    
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
        <Header color={themes[theme].Highlight}>User Research</Header>
        <Container>
            <BubbleCont>
                <Circle shadow={themes[theme].shadow}>
                    <SubHeader color={themes[theme].Highlight}>Hypothesis</SubHeader>
                    <Text color={themes[theme].Highlight}>{hypothesis}</Text>
                </Circle>

            <ArrowCont>
                <ArrowOrange color={themes[theme].Highlight}></ArrowOrange>
            </ArrowCont>

                <Circle shadow={themes[theme].shadow}>
                    <SubHeader color={themes[theme].Highlight}>Methods</SubHeader>
                    <Text color={themes[theme].Highlight}>{methods}</Text>
                </Circle>

            <ArrowCont>
                <ArrowOrange color={themes[theme].Highlight}></ArrowOrange>
            </ArrowCont>

                <Circle shadow={themes[theme].shadow}>
                    <SubHeader color={themes[theme].Highlight}>Synthesis</SubHeader>
                    <Text color={themes[theme].Highlight}>{synthesis}</Text>
                </Circle>
            </BubbleCont>
        </Container> 
    </CardCont>
}
export default UserResearchCard;