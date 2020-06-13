import React from "react";
import styled from "styled-components";
import Image from "./Image";
import image from "../images/me-looking-right.png";
const lqip = require("lqip.macro");
const placeholder = lqip("../images/me-looking-right.png");

const Me = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  align-self: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  border-radius: 125px 125px var(--card-border-radius) var(--card-border-radius);
  background-color: var(--gray);
  background-image: linear-gradient(62deg, var(--green) 0%, var(--yellow) 100%);

  @media (prefers-color-scheme: dark) {
    filter: brightness(0.85);
    background-image: linear-gradient(0deg, var(--red) 0%, var(--purple) 100%);
  }
`;

const Avatar: React.FC<
  { width: number } & React.HTMLAttributes<HTMLElement>
> = ({ width, ...props }) => {
  return (
    <Me width={width} {...props}>
      <Image
        placeholder={{ lqip: placeholder }}
        srcSet={[{ src: image, width: width }]}
        alt="Herman Starkov"
        width={width}
        height={width * 0.871}
      />
    </Me>
  );
};

export default Avatar;
