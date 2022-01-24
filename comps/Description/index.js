import styled from "styled-components";

const Container = styled.div`
margin-top:123px;
width:300px;
`;

const Text = styled.h4`
font-family: Spartan;
font-style: normal;
font-weight: normal;
font-size: 20px;
text-align: right;
color: #CA6444;
`;


const Description = ({
}) =>{
    
    return <Container>
        <Text>a Creative Front-End Developer & UI UX Designer skilled at working in project-orientated team environments.

</Text>
    </Container>
}

export default Description;