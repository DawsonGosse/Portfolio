import styled from "styled-components";
import Image from 'next/image'
import RunikLarge from '../../public/RunikLargeCard.png'
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'
import Project from "../../pages/projects";


const CardCont = styled.div`
width: 100vw;
height: 479px;
display:flex;
position:relative;
margin-bottom:80px;
margin-top:50px;
background-color:#CA6444;
padding-left:27px;
`;
const Container = styled.div`
display:flex;
flex-direction:column;
flex:1;
padding-left:30px;
padding-right:50px;
`;
const Title = styled.h3`
font-family: Spartan;
font-style: normal;
font-weight: 600;
font-size: 64px;
color:#F3F3F3;
margin:0px;
`;
const Header = styled.h4`
font-family: Spartan;
font-style: bold;
font-weight: 700;
font-size: 24px;
color:#F3F3F3;
margin:0px;
margin-bottom:24px;
margin-top:40px;
`;
const SubHeader = styled.h5`
font-family: Spartan;
font-style: semi-bold;
font-weight: 600;
font-size: 18px;
color:#F3F3F3;
margin:0px;
margin-bottom:14px;
margin-top:36px;
`;
const Text = styled.p`
font-family: Spartan;
font-style: normal;
font-weight: 400;
font-size: 14px;
color:#F3F3F3;
margin:0px;
`;



const ProjectCard = ({
 onCardClick =()=>{}

}) =>{
    const {theme} = useTheme();
    
    return <CardCont onClick={()=>{onCardClick()}}>
        <Container>
            <Header>Project Details</Header>
            <Title>Runik</Title>
            <SubHeader>My Roles</SubHeader>
            <Text>Lead Designer, Front-End Developer</Text>
            <SubHeader>Timeline</SubHeader>
            <Text>TEMP</Text>
            <SubHeader>Team Size</SubHeader>
            <Text>6 people, 3 front-end/designers, 3 backend</Text>
        </Container> 
        <Container>
            <Header>Problem</Header>
            <Text>Everyone enjoys getting lost in their favourite book or novel and getting fully immersed in a fantastical world. But there is a problem, Humans are busy, and remembering every character, place, weapon or object can be a hassle. <br/><br/>
While currently, e-readers have the option to view a word’s definitions with a tap, they do nothing to serve the user looking for a world-specific definition.</Text>
        </Container> 
        <Container>
        <Header>Solution</Header>
            <Text>Meet Runik, our solution to make the e-reading experience 10x better. <br/><br/>
            Runik is a web-app that generates 
custom e-reader dictionaries for 
your favourite fictional worlds. <br/><br/>
With Runik, you not only get your traditional dictionary but also one that’s custom-built for the book you’re reading. One-touch context, in text, while you read.

</Text>
        </Container> 
    </CardCont>
}
export default ProjectCard;