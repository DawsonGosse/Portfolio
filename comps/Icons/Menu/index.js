import * as React from "react"
import styled from "styled-components";

const Path = styled.path`
&:hover {
  stroke:#CA6444;
}
`;

const Menu = ({color}) => (
  <svg
    width={32}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M2.286 2h27.428M2.286 10h27.428M2.286 18h27.428"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Menu
