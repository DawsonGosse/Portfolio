import styled from "styled-components";
import Image from 'next/image'
import RunikLarge from '../../public/RunikLargeCard.png'
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'
import Project from "../../pages/projects";
import Button from "../Button";
import GitHubAlt from "../Icons/GithubAlt";

const CardCont = styled.div`
width: 100%;
height: 100%;
display:flex;
position:relative;
margin-bottom:80px;
background-color:${props=>props.bgcolor};

flex-wrap:wrap;
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
const Container = styled.div`
display:flex;
flex-direction:column;
flex:1;
padding-left:30px;
padding-right:10px;
margin-bottom:40px;

`;

const SubContainer = styled.div`
display:flex;
align-items:center;
padding-top:140px;
`

const Title = styled.h3`
font-family: Spartan;
font-style: normal;
font-weight: 600;
font-size: 50px;
color:#F3F3F3;
margin:0px;

//Medium
@media (min-width:801px) {
    font-size:64px;

}
//Large

@media (min-width:1000px) {
    font-size:64px;

}
`;
const Header = styled.h4`
font-family: Spartan;
font-style: bold;
font-weight: 700;
font-size: 18px;
color:#F3F3F3;
margin:0px;
margin-bottom:24px;
margin-top:40px;

//Medium
@media (min-width:801px) {
    font-size:20px;

}
//Large

@media (min-width:1000px) {
    font-size:24px;

}
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




var defaults = {
    Title:"Runik",
    Roles:"Lead Designer, Front-End Developer",
    Timeline:"Sept 2021 - Dec 2021",
    TeamSize:"6 people, 3 front-end/designers, 3 backend",
    problem:`Everyone enjoys getting lost in their favourite book or novel and getting fully immersed in a fantastical world. But there is a problem, Humans are busy, and remembering every character, place, weapon or object can be a hassle.
            While currently, e-readers have the option to view a word???s definitions with a tap, they do nothing to serve the user looking for a world-specific definition.`,
    solution:`Meet Runik, our solution to make the e-reading experience 10x better. 
            Runik is a web-app that generates 
            custom e-reader dictionaries for 
            your favourite fictional worlds. 
            With Runik, you not only get your traditional dictionary but also one that???s custom-built for the book you???re reading. One-touch context, in text, while you read.`
}


const ProjectCard = ({
 onCardClick =()=>{},
 projTitle = defaults.Title,
 projRoles = defaults.Roles,
 projTimeline = defaults.Timeline,
 projTeamSize = defaults.TeamSize,
 problem = defaults.problem,
 solution = defaults.solution,
 hrefApp = "https://runik.app/",
 hrefGit = "https://github.com/DawsonGosse"


}) =>{
    const {theme} = useTheme();
    
    return <CardCont onClick={()=>{onCardClick()}}  bgcolor={themes[theme].Highlight}>
        <Container>
            <Header>Project Details</Header>
            <Title>{projTitle}</Title>
            <SubHeader>My Roles</SubHeader>
            <Text>{projRoles}</Text>
            <SubHeader>Timeline</SubHeader>
            <Text>{projTimeline}</Text>
            <SubHeader>Team Size</SubHeader>
            <Text>{projTeamSize}</Text>
        </Container> 
        <Container>
            <Header>Problem</Header>
            <Text>{problem}</Text>
        </Container> 
        <Container>
        <Header>Solution</Header>
            <Text>{solution}</Text>
            <SubContainer>
                <a target="_blank" href={hrefGit} rel="noopener noreferrer">
                    <GitHubAlt color={themes[theme].body}></GitHubAlt>
                </a>
                <a target="_blank" href={hrefApp} rel="noopener noreferrer">
                    <Button text="Vist App" bgcolor={themes[theme].body} color={themes[theme].Highlight}></Button>    
                </a>
            </SubContainer>
        </Container> 
    </CardCont>
}
export default ProjectCard;