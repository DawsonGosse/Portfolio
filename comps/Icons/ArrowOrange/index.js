import * as React from "react"
import Arrow from "../Arrow"
import styled from "styled-components";

const SVG = styled.svg`
z-index:10;
`;

const ArrowOrange = (props) => (
  <SVG
    width={82}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m55.373 1.716 25.455 25.456a4 4 0 0 1 0 5.656L55.373 58.284a4 4 0 0 1-5.657-5.657L68.343 34H4a4 4 0 1 1 0-8h64.343L49.716 7.373a4 4 0 1 1 5.657-5.657Z"
      fill="#CA6444"
    />
  </SVG>
)

export default ArrowOrange
