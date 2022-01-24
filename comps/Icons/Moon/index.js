import * as React from "react"
import styled from "styled-components";

const Path = styled.path`
&:hover {
  fill:#CA6444;
}
`;

const Moon = ({onclick, display}) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={() => onclick()}
    display={display}

  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.897 22.065a1.27 1.27 0 0 0-.315-1.44 1.352 1.352 0 0 0-1.494-.218 12.81 12.81 0 0 1-5.557 1.256c-6.957 0-12.597-5.497-12.597-12.278 0-2.746.922-5.277 2.482-7.321.33-.432.35-1.018.052-1.471a1.341 1.341 0 0 0-1.395-.564C5.6 1.601 0 8.078 0 15.833 0 24.762 7.426 32 16.587 32c6.898 0 12.808-4.102 15.31-9.935Z"
      fill="#5C5769"
    />
  </svg>
)

export default Moon