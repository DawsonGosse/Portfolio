import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import { useTheme } from "../utils/provider";
import Footer from '../comps/Footer';



const Container = styled.div`
  width:100%;
  height:100%;
`;
const ContentBlock = styled.div`
  width:100vw;
  display:flex;

`;
const ContactBlock = styled.div`
  width:50vw;
  display:flex;
  height:100%;
  padding-top:125px;
  flex-direction:column;
`;
const FormBlock = styled.div`
  width:50vw;
  display:flex;
  background-color:#CA6444;
  height:100%;
  padding-top:270px;
  padding-bottom:215px;
  justify-content:center;

`;
const Header = styled.h2`
  font-family: Spartan;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color:#CA6444;
  margin-left:61px;
  margin-bottom:90px;
`;
const Form = styled.form`
width:630px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;
const Input = styled.input`
font-family: Spartan;
  font-style: normal;
  font-weight: semi-bold;
  font-size: 18px;
  background-color:#CA6444;
  color:#F3F3F3;
  border:none;
  box-shadow: -5px 5px 10px rgba(182, 90, 61, 0.2), 5px -5px 10px rgba(182, 90, 61, 0.2), -5px -5px 10px rgba(222, 110, 75, 0.9), 5px 5px 13px rgba(182, 90, 61, 0.9), inset 1px 1px 2px rgba(222, 110, 75, 0.3), inset -1px -1px 2px rgba(182, 90, 61, 0.5);
  height:${props=>props.height};
  width:${props=>props.width};
  padding-left:16px;
  margin-bottom:31px;
  font-weight: 600;
  z-index:3;
`;
const TextArea = styled.textarea`
font-family: Spartan;
  font-style: normal;
  font-weight: semi-bold;
  font-size: 18px;
  background-color:#CA6444;
  color:#F3F3F3;
  border:none;
  box-shadow: -5px 5px 10px rgba(182, 90, 61, 0.2), 5px -5px 10px rgba(182, 90, 61, 0.2), -5px -5px 10px rgba(222, 110, 75, 0.9), 5px 5px 13px rgba(182, 90, 61, 0.9), inset 1px 1px 2px rgba(222, 110, 75, 0.3), inset -1px -1px 2px rgba(182, 90, 61, 0.5);
  height:${props=>props.height};
  width:${props=>props.width};
  padding-left:16px;
  padding-top:14px;
  margin-bottom:31px;
  font-weight: 600;
  z-index:3;
`;
const Submit = styled.button`
background: #F3F3F3;
border-radius: 12px;
width: 188px;
height: 42px;
color:#CA6444;
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
color: #CA6444;
margin-left:61px;
font-weight: 600;
`;


export default function Project() {
  const {theme, setTheme} = useTheme();
  return (<Container>
    <NavBar onButtonClick={()=>setTheme(theme==='dark'?'default':'dark')}></NavBar>
    <ContentBlock>
       <ContactBlock>
        <Header>Contact</Header>
        <Text>Email <br/><br/>Dawsonjgosse@gmail.com</Text>
        <Text>Phone <br/><br/> 236-777-6765</Text>
       </ContactBlock>
       <FormBlock>
            <Form>
                <Input value="First Name" type="text" width="294px" height="41px"></Input>
                <Input value="Last Name" type="text" width="294px" height="41px"></Input>
                <Input value="Email" type="email" width="626px" height="41px"></Input>
                <TextArea value="Message..." type="text" width="626px" height="260px"></TextArea>
                <Submit>Send Message</Submit>
            </Form>
       </FormBlock>
    </ContentBlock>
    <Footer></Footer>
  </Container>
  )
}
