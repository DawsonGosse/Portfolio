import styled from "styled-components";
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'


const Container = styled.div`
width:200px;
margin-left:30px;
margin-bottom:50px;

//Medium
@media (min-width:481px) {
    width:300px;
    margin-left:61px;
  }
//Large

@media (min-width:769px) {
    width:300px;
    margin-left:61px;
  }
`;

const Text = styled.h4`
font-family: Spartan;
font-style: normal;
font-weight: normal;
font-size: 12px;
text-align: left;
color:${props=>props.color};

//Medium
@media (min-width:481px) {
    font-size:16px;
    text-align: left;
  }
//Large

@media (min-width:769px) {
    font-size:20px;
  }
`;


const Description = ({
}) =>{
    const {theme} = useTheme();
    
    return <Container>
        <Text color={themes[theme].Header} >a Creative Front-End Developer & UI UX Designer skilled at working in project-orientated team environments.

</Text>
    </Container>
}

export default Description;