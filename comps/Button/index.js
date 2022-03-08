import styled from "styled-components";
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'

const ButtonCont = styled.button`
background: ${props=>props.bgcolor};
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


&:hover {
    transform: scale(1.05);
    transition: linear 0.2s;
}
`;


const Button = ({
    onCardClick =()=>{},
    text = "default",
    bgcolor = "#F3F3F3",
    color = "#ED5662"

   
   }) =>{
    const {theme} = useTheme();

       return <ButtonCont bgcolor={bgcolor} color={color}>{text}</ButtonCont>
   }
   export default Button;