import styled from "styled-components";

const Container = styled.div`
margin-top:50px;
width:200px;

//Medium
@media (min-width:481px) {
    width:300px;
    margin-top:100px;
  }
//Large

@media (min-width:769px) {
    width:300px;
    margin-top:123px;
  }
`;

const Text = styled.h4`
font-family: Spartan;
font-style: normal;
font-weight: normal;
font-size: 12px;
text-align: left;
color: #CA6444;

//Medium
@media (min-width:481px) {
    font-size:16px;
    text-align: left;
  }
//Large

@media (min-width:769px) {
    font-size:20px;
    text-align: right;
  }
`;


const Description = ({
}) =>{
    
    return <Container>
        <Text>a Creative Front-End Developer & UI UX Designer skilled at working in project-orientated team environments.

</Text>
    </Container>
}

export default Description;