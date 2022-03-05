import styled from "styled-components";
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'

const Container = styled.div`
margin-top:50px;
width:317px;

//Medium
@media (min-width:481px) {
    width:396px;
    margin-top:100px;
  }
//Large

@media (min-width:769px) {
    width:600px;
    margin-top:123px;
  }
`;

const Name = styled.h1`
color:${props=>props.color};
font-size:72px;
font-family: Spartan;
font-style: normal;
font-weight: 800;
margin:0px;
line-height: 94%;

//Medium
@media (min-width:481px) {
    font-size:90px;
  }
//Large

@media (min-width:769px) {
    font-size:144px;
  }
`;

const Title = styled.h2`
font-family: Spartan;
font-style: normal;
font-weight: bold;
font-size: 12px;
color: ${props=>props.color};
margin:0px;
margin-left:10px;

//Medium
@media (min-width:481px) {
    font-size:16px;
  }
//Large

@media (min-width:769px) {
    font-size:20px;
  }
`;

const NameTitle = ({
}) =>{
    const {theme} = useTheme();
    
    return <Container>
     <Name color={themes[theme].Header}>Dawson {"\n\r"} Gosse.</Name>
        <Title color={themes[theme].Header}>Front-End Developer & UI / UX Designer </Title>
    </Container>
}

export default NameTitle;