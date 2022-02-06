import styled from "styled-components";
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'

const VistButton = styled.button`
background: ${props=>props.bgcolor};
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
    const {theme} = useTheme();

       return <VistButton bgcolor={themes[theme].Highlight}>Vist App</VistButton>
   }
   export default Button;