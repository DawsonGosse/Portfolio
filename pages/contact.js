import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import { useTheme } from "../utils/provider";
import Footer from '../comps/Footer';
import { themes } from '../utils/variables'



const Container = styled.div`
  width:100%;
  height:100%;
`;
const ContentBlock = styled.div`
  width:100vw;
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;

  //Medium
  @media (min-width:481px) {
    flex-direction:column;
    }
  //Large
  
  @media (min-width:769px) {
    flex-direction:row;
    }

`;
const ContactBlock = styled.div`
  flex:1;
  display:flex;
  height:100%;
  padding-top:125px;
  flex-direction:column;
  padding-bottom:100px;

  //Medium
  @media (min-width:481px) {
    padding-bottom:100px;
    }
  //Large
  
  @media (min-width:769px) {
  padding-bottom:0px;
    }
`;
const FormBlock = styled.div`
  flex:1;
  display:flex;
  background-color:${props=>props.color};
  height:100%;
  padding-top:100px;
  padding-bottom:100px;
  justify-content:center;

  //Medium
  @media (min-width:481px) {
    padding-top:100px;
    padding-bottom:100px;
    }
  //Large
  
  @media (min-width:769px) {
    padding-top:270px;
  padding-bottom:215px;
    }

`;
const Header = styled.h2`
  font-family: Spartan;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color:${props=>props.color};
  margin-left:61px;
  margin-bottom:90px;
`;
const Form = styled.form`
width:96%;
display:flex;
flex-wrap:wrap;
justify-content:center;
`;
const DoubleBox =styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;

const Input = styled.input`
  font-family: Spartan;
  font-style: normal;
  font-weight: semi-bold;
  font-size: 12px;
  background-color:${props=>props.color};
  color:#F3F3F3;
  border:none;
  box-shadow:${props=>props.shadow};
  height:${props=>props.height};
  width:${props=>props.width};
  padding-left:16px;
  margin-bottom:31px;
  font-weight: 600;
  z-index:3;

  //Medium
  @media (min-width:481px) {
    font-size: 18px;
    }
  //Large
  
  @media (min-width:769px) {
    font-size: 18px;
    }
`;
const TextArea = styled.textarea`
  font-family: Spartan;
  font-style: normal;
  font-weight: semi-bold;
  font-size: 12px;
  background-color:${props=>props.color};
  color:#F3F3F3;
  border:none;
  box-shadow:${props=>props.shadow};
  height:${props=>props.height};
  width:${props=>props.width};
  padding-left:16px;
  padding-top:14px;
  margin-bottom:31px;
  font-weight: 600;
  z-index:3;

  //Medium
  @media (min-width:481px) {
    font-size: 18px;
    }
  //Large
  
  @media (min-width:769px) {
    font-size: 18px;
    }
`;
const Submit = styled.button`
background: #F3F3F3;
border-radius: 12px;
width: 188px;
height: 42px;
color:${props=>props.color};
font-family: Spartan;
font-size: 18px;
font-style: normal;
border:none;
padding-top:5px;
font-weight: 600;
z-index:3;
`;

const Text = styled.p`
font-family: Spartan;
font-size: 18px;
color: ${props=>props.color};
margin-left:61px;
font-weight: 600;
`;


export default function Project() {
  const {theme, setTheme} = useTheme();
  return (<Container>
    <NavBar onButtonClick={()=>setTheme(theme==='dark'?'default':'dark')}></NavBar>
    <ContentBlock>
       <ContactBlock>
        <Header color={themes[theme].Header}>Contact</Header>
        <Text color={themes[theme].Header}>Email <br/><br/>Dawsonjgosse@gmail.com</Text>
        <Text color={themes[theme].Header}>Phone <br/><br/> 236-777-6765</Text>
       </ContactBlock>
       <FormBlock color={themes[theme].Header}>
            <Form>
                <DoubleBox>
                  <Input defaultValue="First Name" type="text" width="45%" height="41px" color={themes[theme].Header} shadow={themes[theme].AltShadow}></Input>
                  <Input defaultValue="Last Name" type="text" width="45%" height="41px" color={themes[theme].Header} shadow={themes[theme].AltShadow}></Input>
                </DoubleBox>
                <Input defaultValue="Email" type="email" width="100%" height="41px" color={themes[theme].Header} shadow={themes[theme].AltShadow}></Input>
                <TextArea defaultValue="Message..." type="text" width="100%" height="260px" color={themes[theme].Header} shadow={themes[theme].AltShadow}></TextArea>
                <Submit color={themes[theme].Header}>Send Message</Submit>
            </Form>
       </FormBlock>
    </ContentBlock>
    <Footer></Footer>
  </Container>
  )
}
