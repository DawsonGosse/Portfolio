import styled from "styled-components";

const Container = styled.div`
margin-top:123px;
width:600px;
`;

const Name = styled.h1`
color:#E48C34;
font-size:144px;
font-family: Spartan;
font-style: normal;
font-weight: 800;
margin:0px;
line-height: 94%;
`;

const Title = styled.h2`
font-family: Spartan;
font-style: normal;
font-weight: bold;
font-size: 20px;
color: #CA6444;
margin:0px;
margin-left:10px;
`;

const NameTitle = ({
}) =>{
    
    return <Container>
     <Name>Dawson {"\n\r"} Gosse.</Name>
        <Title>Front-End Developer & UI / UX Designer </Title>
    </Container>
}

export default NameTitle;