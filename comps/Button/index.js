import styled from "styled-components";

const VistButton = styled.button`
background: #CA6444;
border-radius: 12px;
width: 188px;
height: 42px;
color:#F3F3F3;
font-family: Spartan;
font-size: 18px;
font-style: normal;
border:none;
padding-top:5px;
font-weight: 600;
z-index:3;
`;


const Button = ({
    onCardClick =()=>{},

   
   }) =>{
       
       return <VistButton>Vist App</VistButton>
   }
   export default Button;