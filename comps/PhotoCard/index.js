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
justify-content:center;
align-items:center;
margin-top:50px;
background-color:#E6A439;
height:590px;
`;
const Container = styled.div`
display:flex;
margin-left:57px;
margin-right:57px;
justify-content:center;
align-items:center;
height:30%;
width:95%;

//Xsmall
@media (min-width:425px) {
    height:100px;
    width:350px;

}

//small
@media (min-width:620px) {
    height:200px;
    width:600px;

}

//Medium
@media (min-width:801px) {
    height:300px;
    width:800px;

}
//Large

@media (min-width:1000px) {
    height:400px;
    width:1000px;

}
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
 height = "100%",
 width = "100%"

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