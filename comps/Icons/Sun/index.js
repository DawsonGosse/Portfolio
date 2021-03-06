import * as React from "react"
import styled from "styled-components";
import { useTheme } from '../../../utils/provider'
import { themes } from '../../../utils/variables'

const SVG = styled.svg`
&:hover #child {
  fill:${props=>props.hcolor};
}
`;

const Sun = ({onclick, display}) => {
  const {theme} = useTheme();
  return<SVG
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={() => onclick()}
    display={display}
    hcolor={themes[theme].Highlight}
  >
    <path id="child"
      d="M16 0c.631 0 1.143.512 1.143 1.143v2.286a1.143 1.143 0 0 1-2.286 0V1.143C14.857.512 15.37 0 16 0Z"
      fill="#F3F3F3"
    />
    <path id="child"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 25.143c-6.931 0-9.217-2.286-9.143-9.143C6.931 9.143 9.07 6.857 16 6.857c6.931 0 9.143 2.286 9.143 9.143 0 6.857-2.212 9.143-9.143 9.143Z"
      fill="#F3F3F3"
    />
    <path id="child"
      d="M17.143 28.571a1.143 1.143 0 0 0-2.286 0v2.286a1.143 1.143 0 0 0 2.286 0v-2.286ZM32 16c0 .631-.512 1.143-1.143 1.143h-2.286a1.143 1.143 0 0 1 0-2.286h2.286c.631 0 1.143.512 1.143 1.143ZM3.429 17.143a1.143 1.143 0 0 0 0-2.286H1.143a1.143 1.143 0 0 0 0 2.286h2.286ZM3.763 3.763a1.143 1.143 0 0 1 1.617 0L6.996 5.38A1.143 1.143 0 1 1 5.38 6.996L3.763 5.38a1.143 1.143 0 0 1 0-1.617ZM5.38 28.71a1.143 1.143 0 0 1-1.617-1.616l1.617-1.617a1.143 1.143 0 0 1 1.616 1.617L5.38 28.71ZM28.71 3.763a1.143 1.143 0 0 0-1.616 0L25.477 5.38a1.143 1.143 0 0 0 1.617 1.616L28.71 5.38a1.143 1.143 0 0 0 0-1.617ZM27.094 28.71a1.143 1.143 0 0 0 1.616-1.616l-1.616-1.617a1.143 1.143 0 0 0-1.617 1.617l1.617 1.616Z"
      fill="#F3F3F3"
    />
  </SVG>
}

export default Sun
