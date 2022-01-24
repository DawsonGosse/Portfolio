import styled from "styled-components";

const Circle = styled.div`
width: 305px;
height: 305px;
border-radius:305px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding:35px;
padding-top:20px;
margin:57px;
background-color:#f3f3f3;
position:absolute;
top:${props=>props.top};
left:${props=>props.left};
`;
const Text = styled.p`
font-family: Spartan;
font-style: normal;
font-weight: 400;
font-size: 14px;
color:#CA6444;
margin:0px;
margin-top:20px;
text-align: center;
`;

const Bubble = ({
    onCardClick =()=>{},
    top ="0px",
    left ="0px"

   
   }) =>{
       
       return <Circle top={top} left={left}>
           <Text>After gathering and refining user research we began to develop user personas based off our primary users</Text>
       </Circle>
   }
   export default Bubble;