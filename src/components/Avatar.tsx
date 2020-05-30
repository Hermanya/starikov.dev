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
  border-radius: 125px 125px 4px 4px;
  overflow: hidden;
  background-color: var(--gray);
  background-image: linear-gradient(62deg, var(--blue) 0%, var(--cyan) 100%);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

  @media (prefers-color-scheme: dark) {
    filter: brightness(0.65);
    background-image: linear-gradient(0deg, var(--purple) 0%, var(--blue) 100%);
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
