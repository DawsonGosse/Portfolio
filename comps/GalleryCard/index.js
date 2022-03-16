import styled from "styled-components";
import { useTheme } from '../../utils/provider'
import { themes } from '../../utils/variables'
import Image from "next/image";
import Proms from "../../public/Artwork/Proms.jpg"


const CardCont = styled.div`
width:300px;
height:300px;
box-shadow: ${props=>props.shadow};
position:relative;
margin:10px;
margin-top:25px;

//Medium
@media (min-width:375px) {
    width:350px;
    height:350px;
  }

`;

const ImgCont = styled.div`
width:100%;
padding:0;
overflow:hidden;
z-index:0;
`;

const CardHeader = styled.h2`
font-family: Spartan;
font-style: SemiBold;
font-size: 48px;
margin:0;
color:#FFFFFF;
display:none;
padding:10px;
padding-left:0px;

`;

const CardSubHeader = styled.h3`
font-family: Spartan;
font-size: 14px;
margin:0;
color:#FFFFFF;
display:none;

`;


const CardInfo = styled.h4`
font-family: Spartan;
font-size: 10px;
margin:0;
color:#FFFFFF;
display:none;
padding:5px;
padding-left:0px;

`;

const TextCont = styled.div`
position:relative;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:flex-end;
padding-left:10px;
padding-bottom:15px;
z-index:100;

&:hover {
    background-color:rgba(0, 0, 0, 0.6);
    transition: linear 0.2s;
    ${CardHeader} {
        display:block;
      }
    ${CardSubHeader} {
        display:block;
    }
    ${CardInfo} {
        display:block;
    }
}
`;



const GalleryCard = ({
    Img = Proms,
    Header = "The Proms",
    Type = "Created in Illustrator",
    SubHeader = "Poster",
    Dates = "Feb 2021 - May 2021",
    onCardClick =()=>{}

}) =>{
    const {theme} = useTheme();
    
    return <CardCont shadow={themes[theme].cardShadow}>
        <TextCont onClick={()=>{onCardClick()}}>
            <CardSubHeader>{SubHeader}</CardSubHeader>
            <CardInfo>{Type}</CardInfo>
            <CardHeader>{Header}</CardHeader>
            <CardSubHeader>{Dates}</CardSubHeader>
        </TextCont>
        <ImgCont>
            <Image src={Img} layout="fill" objectFit="cover"></Image>
        </ImgCont>
    </CardCont>
}

export default GalleryCard;