import styled from "styled-components";
import Image from 'next/image'
import RunikLarge from '../../public/RunikLargeCard.png'
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'
import Runik from '../../public/RunikHifi.png'


const CardCont = styled.div`
width: 100vw;
display:flex;
position:relative;
flex-direction:column;
margin-top:50px;
background-color:#E6A439;
`;
const Container = styled.div`
display:flex;
margin-left:57px;
margin-right:57px;
justify-content:center;
align-items:center;
height:590px;
`;
const ImgCont = styled.div`
display:flex;
position:relative;
height: ${props=>props.height};
width:${props=>props.width};
justify-content:center;
align-items:center;
`;

const PhotoCard = ({
 onCardClick =()=>{},
 img = Runik,
 height = "430px",
 width = "84%"

}) =>{
    const {theme} = useTheme();
    
    return <CardCont onClick={()=>{onCardClick()}} >
        <Container>
            <ImgCont width={width} height={height}>
            <Image src={img} layout="fill"></Image>
            </ImgCont>
        </Container> 
    </CardCont>
}
export default PhotoCard;