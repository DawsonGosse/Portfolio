import * as React from "react"

const Arrow = (props) => (
  <svg
    width={14}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.06 13.06a1.5 1.5 0 0 0 0-2.12L3.516 1.392a1.5 1.5 0 1 0-2.122 2.122L9.88 12l-8.486 8.485a1.5 1.5 0 1 0 2.122 2.122l9.546-9.546ZM10 13.5h2v-3h-2v3Z"
      fill="#5C5769"
    />
  </svg>
)

export default Arrow
