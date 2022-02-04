import * as React from "react"
import styled from "styled-components";
import { useTheme } from '../../../utils/provider'
import { themes } from '../../../utils/variables'


const SVG = styled.svg`
&:hover #child {
  fill:${props=>props.hcolor};
}
`;

const Menu = ({color, onclick}) => {
  const {theme} = useTheme();

  return( <SVG
    width={32}
    height={20}
    fill="none"
    onClick={() => onclick()}
    hcolor={themes[theme].Highlight}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      
      d="M2.286 2h27.428M2.286 10h27.428M2.286 18h27.428"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SVG>)
}

export default Menu
